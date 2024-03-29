import {Link, useNavigate, useParams} from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import Services from "../../../core/api/Services";
import { toast } from "react-toastify";
import { translate } from "../../../core/helpers/Translator";
import Storage from "../../../core/helpers/Storage";
import Map from "../Map/Map";
import eventBus from "../../../core/helpers/EventBus";
import { getSubServiceUpdateRules } from "../../../core/constants/servicesUpdateValidator";
import "./DataTable.scss";
import ServicesUpdate from "../../../core/api/ServicesUpdate";
import Validator from "../../../core/helpers/Validator";
import Chat from "../../../components/Chat/Chat";
import Chatables from "../../../core/constants/Chatables";

const validator = new Validator();

export default function DataTable(props) {
    const {id: serviceID, subServiceID} = useParams();
    const lang = Storage.getLanguage();
    const updateRules = getSubServiceUpdateRules(serviceID, subServiceID);
    const [data, setData] = useState(null);
    const [message, setMessage] = useState("");
    const [sm, setSm] = useState("");
    const [serverMessages, setServerMessages] = useState([...Storage.getNextReloadMessages()]);
    const [lockColumns, setLockColumns] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [showLocationOnMap, setShowLocationOnMap] = useState(null);
    const navigate = useNavigate(); 
    const dataTableTooltipRef = useRef();
    /*
    * The structure will be like below:
    * {
    *   // Array because of user may update multiple records At once
    *   "tableName": [
    *       {
*            ...otherFields
    *       }
    *   ]
    * }
    * */
    const [dataToBeUpdated, setDataToBeUpdated] = useState({});

    useEffect(() => {
        fetchData();
        if (serverMessages.length > 0) {
            Storage.removeNextReloadMessage();
        }
    }, []);

    const fetchData = () => {
        eventBus.dispatchEvent("enablePreloader");
        Services.getData(`${serviceID},${subServiceID}`).then(response => {
            let fetchedData = response.data;
            let {obj = null, destination = null, origin = null, transaction = null, lockedColumn = "" } = fetchedData;

            if (lockedColumn.length < 1 && obj?.lockedColumn) {
                lockedColumn = obj.lockedColumn;
            }
            
            let tempData = {
                origin: [],
                destination: [],
            };

            if (obj !== null) {
                if (obj?.hasOwnProperty("origin")) {
                    let tmpDst = [];

                    if (obj?.hasOwnProperty("destination")) {
                        tmpDst = [...obj.destination];
                    } else if (obj?.hasOwnProperty("destination_list")) {
                        tmpDst = [...obj.destination_list];
                    }

                    tempData = {
                        origin: [...obj.origin],
                        destination: [...tmpDst],
                    };
                } else {
                    if (obj.length > 0) {
                        if (obj[0]?.hasOwnProperty("from_") && obj[0]?.hasOwnProperty("to_")) {
                            let tmpOrigin = [];
                            let tmpDest = [];

                            obj.map(record => {
                                tmpOrigin = [
                                    ...tmpOrigin,
                                    {...record.from_}
                                ];
                                
                                tmpDest = [
                                    ...tmpDest,
                                    {...record.to_}
                                ];
                            });

                            tempData = {
                                origin: [...tmpOrigin],
                                destination: [...tmpDest],
                            };
                        } else {
                            tempData = tempData = {
                                origin: [...obj],
                                destination: [],
                            };
                        }
                    } else {
                        tempData = {
                            origin: [...obj],
                            destination: [],
                        };
                    }
                }

            } else if (destination !== null && origin !== null) {
                tempData = {
                    origin: [...origin],
                    destination: [...destination]
                };
            } else if(transaction !== null) {
                if (transaction.length > 0) {
                    if (transaction[0]?.hasOwnProperty("from_") && transaction[0]?.hasOwnProperty("to_")) {
                        let tmpOrigin = [];
                        let tmpDest = [];

                        transaction.map(record => {
                            tmpOrigin = [
                                ...tmpOrigin,
                                {...record.from_}
                            ];
                            
                            tmpDest = [
                                ...tmpDest,
                                {...record.to_}
                            ];
                        });

                        tempData = {
                            origin: [...tmpOrigin],
                            destination: [...tmpDest],
                        };
                    } else {
                        tempData = tempData = {
                            origin: [...transaction],
                            destination: [],
                        };
                    }
                }
            }
            let tmpMsg = `${translate(updateRules?.message ?? "")}\n ${translate(updateRules?.specialMessage ?? "")}`;

            setData({...tempData});
            setMessage(tmpMsg);
            setSm(`${fetchedData?.message ?? ""}`);
            setLockColumns(lockedColumn);
            setDataToBeUpdated({});
        }).catch(error => {
            let { response= null, code = null } = error;

            if (response?.status === 401) {
                toast.error(translate("401-notLoggedIn"), {
                    position: toast.POSITION.TOP_RIGHT
                });
            }

            else if (response?.status === 403) {
                toast.error(translate("403-error"), {
                    position: toast.POSITION.TOP_RIGHT
                });
            }

            else if (response?.status === 404) {
                toast.error(translate("404-error"), {
                    position: toast.POSITION.TOP_RIGHT
                });
            }

            else if (code === "ERR_NETWORK") {
                toast.error(translate("500-error"), {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        }).finally(() => {
            eventBus.dispatchEvent("disablePreloader");
        });
    };

    const handleCellUpdate = (e, columnID) => {
        let lockBits = lockColumns.split("");

        if (+lockBits[columnID - 1] === 0) {
            toast.error(translate("operation-denied"), {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            e.target.removeAttribute("readonly");
        }
    }

    const resetElement = (event) => {
        if (event.target.type === "checkbox") {
            event.target.checked = false;
        }
        else {
            event.target.value = event.target.getAttribute("data-before-update");
        }
    }

    const handleInputsKeyDown = (e, tableName = "", cellName = "") => {
        if (!validator.validate(e.key, {...updateRules.requestModel.params[tableName][cellName]})) {
            e.stopPropagation();
            e.preventDefault();
            toast.error(translate("wrong-value-entered"), {
                position: toast.POSITION.TOP_RIGHT
            });
            return;
        }
    }

    const handleCellValueChanged = (e, rowIDInProgram, columnID, tableName = "origin", rowID, cellName = "") => {
        if (serviceID == 2 && (subServiceID == 15 || subServiceID == 18)) {
            let tmpDataToBeUpdated = {...dataToBeUpdated};

            let record = data[tableName].find(row => row["_id"] === rowID);

            if (record) {
                if (record.code == "3") {
                    let {self = []} = tmpDataToBeUpdated;
                    
                    let records = self.filter(row => row.row_oid !== rowID);
                    let recordFinal = {
                        "row_oid": rowID,
                        "8": e.target.value,
                    };

                    let final = [
                        ...records,
                        recordFinal
                    ];

                    tmpDataToBeUpdated.self = [...final];
                }
                else if (record.code == "4") {
                    let {family = []} = tmpDataToBeUpdated;
                    
                    let records = family.filter(row => row.row_oid !== rowID);
                    let recordFinal = {
                        "row_oid": rowID,
                        "8": e.target.value,
                    };

                    let final = [
                        ...records,
                        recordFinal
                    ];

                    tmpDataToBeUpdated.family = [...final];
                }

                setDataToBeUpdated({...tmpDataToBeUpdated});
            }
        }
        else {
            // const [tableName, rowID, cellName] = data.fieldName.split("|");
            if (updateRules.hasOwnProperty("requestModel")) {
                if (dataToBeUpdated[tableName]?.hasOwnProperty("rowID") && dataToBeUpdated[tableName]["rowID"] !== rowID)
                {
                    resetElement(e);
                    toast.error(translate("error-just-one-row"), {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    return;
                }
    
                if (e.target.type === "checkbox" && e.target.checked === true) {
                    let selectedOne = data[tableName].find(item => item._id === rowID && item?.selected === true);
    
                    if (selectedOne) {
                        resetElement(e);
                        toast.error(translate("recall-request-denied"), {
                            position: toast.POSITION.TOP_RIGHT
                        });
                        return;
                    }
                }
    
                let dataToValidate = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    
                if (validator.validate(dataToValidate, {...updateRules.requestModel.params[tableName][cellName]})) {
                    if (e.target.type === "checkbox" && dataToValidate === false) {
                        if (updateRules.requestModel.params[tableName]["check"]?.canBeUsedAsDelete) {
                            setDataToBeUpdated({
                                ...dataToBeUpdated,
                                [tableName]: {
                                    rowID,
                                    [cellName]: dataToValidate,
                                }
                            });
                        } else {
                            setDataToBeUpdated({
                                ...dataToBeUpdated,
                                [tableName]: {}
                            });
                        }
                    } else {
                        if (updateRules.requestModel?.params?.multipleRowsAllowed) {
                            if (updateRules.requestModel?.params?.multipleRowsAllowed?.unordered) {
                                let tempdata = {...dataToBeUpdated};
        
                                tempdata = {
                                    ...tempdata,
                                    [tableName]: [
                                        ...tempdata?.[tableName] ?? [],
                                        {
                                            rowID,
                                            [cellName]: dataToValidate,
                                        }
                                    ]
                                };
        
                                setDataToBeUpdated({
                                    ...tempdata
                                });
                            } else {
                                let tempdata = {...dataToBeUpdated};
        
                                let thisIs = 0;
                                if (Object.keys(tempdata?.[tableName] ?? {}).length < 1) {
                                    thisIs = 1;
                                } else {
                                    thisIs = 2;
                                }
        
                                tempdata = {
                                    ...tempdata,
                                    [tableName]: {
                                        ...tempdata?.[tableName],
                                        [rowID]: {
                                            ...tempdata?.[tableName]?.[rowID],
                                            rowID,
                                            [cellName]: dataToValidate,
                                            "this_is": tempdata?.[tableName]?.[rowID]?.["this_is"] ?? thisIs
                                        }
                                    }
                                };
        
                                setDataToBeUpdated({
                                    ...tempdata
                                });
                            }
                        } else {
                            setDataToBeUpdated({
                                ...dataToBeUpdated,
                                [tableName]: {
                                    rowID,
                                    [cellName]: dataToValidate,
                                }
                            });
                        }
                    }
                } else {
                    e.stopPropagation();
                    e.preventDefault();
                    toast.error(translate("wrong-value-entered"), {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
            } else {
                toast.error(translate("call-frontend"), {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        }
    }
    
    const handleSubmitBtn = () => {
        if (serviceID == 2 && (subServiceID == 15 || subServiceID == 18)) {
            eventBus.dispatchEvent("enablePreloader");
    
                ServicesUpdate.update(`${serviceID}/${subServiceID}`, {...updateRules.requestModel}, dataToBeUpdated).then(response => {
                    const {status, data} = response;
    
                    switch (status) {
                        case 200:
                        case 201:
                            toast.success(translate("updated-successfully"), {
                                position: toast.POSITION.TOP_RIGHT
                            });
                            break;
                        default:
                            toast.error(translate("updated-failed"), {
                                position: toast.POSITION.TOP_RIGHT
                            });
                            break;
                    }
    
                    Storage.setNextReloadMessage([
                        {
                            message: data?.message ?? ""
                        },
                        {
                            message: data?.message2 ?? ""
                        },
                    ]);
                }).catch(error => {
                    Storage.setNextReloadMessage([
                        {
                            message: error?.response?.data?.message ?? ""
                        },
                        {
                            message: error?.response?.data?.message2 ?? ""
                        },
                    ]);
    
                    if (error.code === "ERR_NETWORK") {
                        toast.error(translate("500-error"), {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    } else {
                        toast.error(`${translate("updated-failed")}\r\n${error.message}`, {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    }
                }).finally(() => {
                    eventBus.dispatchEvent("disablePreloader");
                    navigate(0);
                    // fetchData();
                });
        } else {
            if (validator.validateNeededFields({...updateRules.requestModel}, {...dataToBeUpdated})) {
                eventBus.dispatchEvent("enablePreloader");
    
                ServicesUpdate.update(`${serviceID}/${subServiceID}`, {...updateRules.requestModel}, dataToBeUpdated).then(response => {
                    const {status, data} = response;
    
                    switch (status) {
                        case 200:
                        case 201:
                            toast.success(translate("updated-successfully"), {
                                position: toast.POSITION.TOP_RIGHT
                            });
                            break;
                        default:
                            toast.error(translate("updated-failed"), {
                                position: toast.POSITION.TOP_RIGHT
                            });
                            break;
                    }
    
                    Storage.setNextReloadMessage([
                        {
                            message: data?.message ?? ""
                        },
                        {
                            message: data?.message2 ?? ""
                        },
                    ]);
                }).catch(error => {
                    Storage.setNextReloadMessage([
                        {
                            message: error?.response?.data?.message ?? ""
                        },
                        {
                            message: error?.response?.data?.message2 ?? ""
                        },
                    ]);
    
                    if (error.code === "ERR_NETWORK") {
                        toast.error(translate("500-error"), {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    } else {
                        toast.error(`${translate("updated-failed")}\r\n${error.message}`, {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    }
                }).finally(() => {
                    eventBus.dispatchEvent("disablePreloader");
                    navigate(0);
                    // fetchData();
                });
            } else {
                toast.error(translate("error-just-one-row"), {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        }
    }

    const handleHouseIdPopup = (record) => {
        if ((record?.time < 1 || record?.time?.length < 1)) {
            setShowLocationOnMap(record ? `${record.house_id}` : null);
        }
        else if (record?.time > 0 || record?.time?.length > 0) {
            if (data?.origin?.length === data?.destination?.length) {
                let oppositeTable = record.tableCaption === "origin" ? "destination" : "origin";
                
                let oppositeRecord = data[oppositeTable][record.index];

                if (oppositeRecord) {
                    if (oppositeRecord?.time > 0 || oppositeRecord?.time?.length > 0) {
                        let origin_hid = 0;
                        let destination_hid = 0;
    
                        if (record.tableCaption === "origin") {
                            origin_hid = record.house_id;
                            destination_hid = oppositeRecord.house_id;
                        } else {
                            origin_hid = oppositeRecord.house_id;
                            destination_hid = record.house_id;
                        }
    
                        setShowLocationOnMap(record ? [`${origin_hid}`, `${destination_hid}`] : null);
                    } else {
                        setShowLocationOnMap(record ? `${record.house_id}` : null);
                    }
                }
            }
            else {
                setShowLocationOnMap(record ? `${record.house_id}` : null);
            }
        }
        else if (record === null) {
            setShowLocationOnMap(null);
        }
    }

    const handleFocus = (e, isBlur = false,tableName = "", cellName = "", columnID = null) => {
        if (lockColumns.length > 0) {
            if (isBlur) {
                dataTableTooltipRef.current.style = `display: none;`;
            } else {
                if (columnID) {
                    let lockBits = lockColumns.split("");
                    let message = "";
    
                    if (+lockBits[columnID - 1] != 0) {
                        if (serviceID == 2 && (subServiceID == 15 || subServiceID == 18 )) {
                            if (subServiceID == 15) {
                                message = translate("permitted-values-msg");
        
                                message = message.replace("x", 321).replace("y", 400);
                            }
                            else if (subServiceID == 18) {
                                message = translate("permitted-values-txt-for-18");
                            }
                        } else {
                            let totalMinMax = updateRules?.requestModel?.params?.[tableName]?.[cellName]?.["minMaxForMessage"] ?? null;
                            let min = updateRules?.requestModel?.params?.[tableName]?.[cellName]?.["minForMessage"] ?? null;
                            let max = updateRules?.requestModel?.params?.[tableName]?.[cellName]?.["maxForMessage"] ?? null;
        
                            if (totalMinMax) {
                                message = translate("permitted-values-txt");
        
                                message = message.replace("x", totalMinMax?.join(lang === "fa" ? " و " : ", ") ?? " ");
                            }
                            else if (min && max) {
                                message = translate("permitted-values-msg");
        
                                message = message.replace("x", min ?? " ").replace("y", max ?? " ");
                            } else {
                                message = translate("permitted-values-msg-wmm");
                            }
                        }
    
                        dataTableTooltipRef.current.innerText = message;
                        dataTableTooltipRef.current.style = `display: flex; top: ${e.clientY + 10}px; left: ${e.clientX - 50}px;`;
                    }
                }
            }
        }
    }

    const renderTable = () => {
        let tableCaptions = ["destination", "origin"];

        return tableCaptions.map(tableCaption => {
            return (
                <React.Fragment key={tableCaption}>
                    <div className="tooltip-data_table" ref={dataTableTooltipRef}>Salam</div>
                    <table className={`data-table ${(tableCaption === "destination" && lang === "en") && 'order-1'}`}>
                        <caption>{ translate(`${tableCaption}-table`) }</caption>
                        <thead className={lang === "en" ? "en-font" : ""}>
                        <tr className="static-tr">
                            <th className="horizontal-view" style={{fontSize: "3px"}}>{ translate("column-number") }</th>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                        </tr>
                        <tr className="static-tr">
                            <th className="horizontal-view">{ translate("column-title") }</th>
                            <td className="horizontal-view" style={{width: "76px"}}>
                                { translate("col-1") }
                                <br/>
                                (YYYY, MM, DD, HH, MM, SS)
                                <br/>
                                (UTC+3:30)
                            </td>
                            <td className="horizontal-view" style={{width: "16px"}}>{ translate("col-2") }</td>
                            <td className="horizontal-view" style={{width: "16px"}}>{ translate("col-3") }</td>
                            <td className="horizontal-view" style={{width: "16px"}}>{ translate("col-4") }</td>
                            <td className="horizontal-view" style={{width: "16px"}}>{ translate("col-5") }</td>
                            <td className="horizontal-view" style={{width: "21px"}}>{ translate("col-6") }</td>
                            <td className="horizontal-view" style={{width: "16px"}}>{ translate("col-7") }</td>
                            <td className="horizontal-view" style={{width: "21px"}}>{ translate("col-8") }</td>
                            <td className="horizontal-view" style={{width: "31px"}}>{ translate("col-9") }</td>
                            <td className="horizontal-view" style={{width: "21px"}}>{ translate("col-10") }</td>
                            <td className="horizontal-view" style={{width: "26px"}}>{ translate("col-11") }</td>
                            <td className="horizontal-view" style={{width: "26px"}}>{ translate("col-12") }</td>
                            <td className="horizontal-view" style={{width: "16px"}}>{ translate("col-13") }</td>
                            <td className="horizontal-view" style={{width: "16px"}}>{ translate("col-14") }</td>
                            <td className="horizontal-view" style={{width: "16px"}}>{ translate("col-15") }</td>
                            <td className="horizontal-view" style={{width: "21px"}}>{ translate("col-16") }</td>
                            <td className="horizontal-view" style={{width: "26px"}}>{ translate("col-17") }</td>
                            <td className="horizontal-view" style={{width: "26px"}}>{ translate("col-18") }</td>
                            <td className="horizontal-view" style={{width: "26px"}}>{ translate("col-19") }</td>
                            <td className="horizontal-view" style={{width: "21px"}}>{ translate("col-20") }</td>
                            <td className="horizontal-view" style={{width: "31px"}}>{ translate("col-21") }</td>
                            <td className="horizontal-view" style={{width: "31px"}}>{ translate("col-22") }</td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data[tableCaption].map((record, index) => <tr key={index} data-row={index + 1} onMouseEnter={() => {handleHouseIdPopup({...record, index, tableCaption})}} onMouseLeave={() => {handleHouseIdPopup(null)}}>
                                <th className="horizontal-view">
                                    <input type="checkbox" name={`${tableCaption}-check-${index}`} key={record?.selected ?? false} data-before-update={record?.selected ?? false} onChange={(e) => handleCellValueChanged(e, index + 1, 0, tableCaption, record["_id"], "check" )} disabled={updateRules.requestModel.params.lockCheckbox} defaultChecked={record?.selected ?? false} />
                                </th>
                                <td className="clickable-td">
                                    <input type="text" name={`${tableCaption}-time-${index}`} key={record.time} data-before-update={record.time} defaultValue={ record.time } maxLength="14" onChange={(e) => handleCellValueChanged(e, index + 1, 1, tableCaption, record["_id"], "time" )} onDoubleClick={(e) => handleCellUpdate(e, 1)} readOnly />
                                </td>
                                <td className="clickable-td" onMouseMove={e => handleFocus(e, false, tableCaption, "house_id", 2)} onMouseLeave={e => handleFocus(e, true)}>
                                    <input type="text" name={`${tableCaption}-house_id-${index}`} key={record.house_id} data-before-update={record.house_id} defaultValue={ record.house_id } maxLength="2" onChange={(e) => handleCellValueChanged(e, index + 1, 2, tableCaption, record["_id"], "house_id" )} onDoubleClick={(e) => handleCellUpdate(e, 2)} readOnly />
                                </td>
                                <td className="clickable-td" onMouseMove={e => handleFocus(e, false, tableCaption, "residential", 3)} onMouseLeave={e => handleFocus(e, true)}>
                                    <input type="text" name={`${tableCaption}-residential-${index}`} key={record.residential} data-before-update={record.residential} defaultValue={ record.residential } maxLength="1" onChange={(e) => handleCellValueChanged(e, index + 1, 3, tableCaption, record["_id"], "residential" )} onDoubleClick={(e) => handleCellUpdate(e, 3)} readOnly />
                                </td>
                                <td className="clickable-td" onMouseMove={e => handleFocus(e, false, tableCaption, "subsistence", 4)} onMouseLeave={e => handleFocus(e, true)}>
                                    <input type="text" name={`${tableCaption}-subsistence-${index}`} key={record.subsistence} data-before-update={record.subsistence} defaultValue={ record.subsistence } maxLength="1" onChange={(e) => handleCellValueChanged(e, index + 1, 4, tableCaption, record["_id"], "subsistence" )} onDoubleClick={(e) => handleCellUpdate(e, 4)} readOnly />
                                </td>
                                <td className="clickable-td" onMouseMove={e => handleFocus(e, false, tableCaption, "code", 5)} onMouseLeave={e => handleFocus(e, true)}>
                                    <input type="text" name={`${tableCaption}-code-${index}`} key={record.code} data-before-update={record.code} defaultValue={ record.code } maxLength="1" onChange={(e) => handleCellValueChanged(e, index + 1, 5, tableCaption, record["_id"], "code" )} onDoubleClick={(e) => handleCellUpdate(e, 5)} readOnly />
                                </td>
                                <td className="clickable-td" onMouseMove={e => handleFocus(e, false, tableCaption, "national_code", 6)} onMouseLeave={e => handleFocus(e, true)}>
                                    <input type="text" name={`${tableCaption}-national_code-${index}`} key={record.national_code} data-before-update={record.national_code} defaultValue={ record.national_code } maxLength="3" onChange={(e) => handleCellValueChanged(e, index + 1, 6, tableCaption, record["_id"], "national_code" )} onDoubleClick={(e) => handleCellUpdate(e, 6)} readOnly />
                                </td>
                                <td className="clickable-td" onMouseMove={e => handleFocus(e, false, tableCaption, "row_status", 7)} onMouseLeave={e => handleFocus(e, true)}>
                                    <input type="text" name={`${tableCaption}-row_status-${index}`} key={record.row_status} data-before-update={record.row_status} defaultValue={ record.row_status } maxLength="1" onChange={(e) => handleCellValueChanged(e, index + 1, 7, tableCaption, record["_id"], "row_status" )} onDoubleClick={(e) => handleCellUpdate(e, 7)} readOnly />
                                </td>
                                <td className="clickable-td" onMouseMove={e => handleFocus(e, false, tableCaption, "assets_code", 8)} onMouseLeave={e => handleFocus(e, true)}>
                                    <input type="text" name={`${tableCaption}-assets_code-${index}`} key={record.assets_code} data-before-update={record.assets_code} defaultValue={ record.assets_code } maxLength="3" onChange={(e) => handleCellValueChanged(e, index + 1, 8, tableCaption, record["_id"], "assets_code" )} onDoubleClick={(e) => handleCellUpdate(e, 8)} readOnly />
                                </td>
                                <td className="clickable-td" onMouseMove={e => handleFocus(e, false, tableCaption, "price_assets", 9)} onMouseLeave={e => handleFocus(e, true)}>
                                    <input type="text" name={`${tableCaption}-price_assets-${index}`} key={record.price_assets} data-before-update={record.price_assets} defaultValue={ record.price_assets } maxLength="5" onChange={(e) => handleCellValueChanged(e, index + 1, 9, tableCaption, record["_id"], "price_assets" )} onDoubleClick={(e) => handleCellUpdate(e, 9)} readOnly />
                                </td>
                                <td className="clickable-td" onMouseMove={e => handleFocus(e, false, tableCaption, "national_code_bought_assets", 10)} onMouseLeave={e => handleFocus(e, true)}>
                                    <input type="text" name={`${tableCaption}-national_code_bought_assets-${index}`} key={record.national_code_bought_assets} data-before-update={record.national_code_bought_assets} defaultValue={ record.national_code_bought_assets } maxLength="3" onChange={(e) => handleCellValueChanged(e, index + 1, 10, tableCaption, record["_id"], "national_code_bought_assets" )} onDoubleClick={(e) => handleCellUpdate(e, 10)} readOnly />
                                </td>
                                <td className="clickable-td" onMouseMove={e => handleFocus(e, false, tableCaption, "percent_owner", 11)} onMouseLeave={e => handleFocus(e, true)}>
                                    <input type="text" name={`${tableCaption}-percent_owner-${index}`} key={record.percent_owner} data-before-update={record.percent_owner} defaultValue={ record.percent_owner } maxLength="4" onChange={(e) => handleCellValueChanged(e, index + 1, 11, tableCaption, record["_id"], "percent_owner" )} onDoubleClick={(e) => handleCellUpdate(e, 11)} readOnly />
                                </td>
                                <td className="clickable-td" onMouseMove={e => handleFocus(e, false, tableCaption, "price_per_owner", 12)} onMouseLeave={e => handleFocus(e, true)}>
                                    <input type="text" name={`${tableCaption}-price_per_owner-${index}`} key={record.price_per_owner} data-before-update={record.price_per_owner} defaultValue={ record.price_per_owner } maxLength="4" onChange={(e) => handleCellValueChanged(e, index + 1, 12, tableCaption, record["_id"], "price_per_owner" )} onDoubleClick={(e) => handleCellUpdate(e, 12)} readOnly />
                                </td>
                                <td className="clickable-td" onMouseMove={e => handleFocus(e, false, tableCaption, "national_code_type", 13)} onMouseLeave={e => handleFocus(e, true)}>
                                    <input type="text" name={`${tableCaption}-national_code_type-${index}`} key={record.national_code_type} data-before-update={record.national_code_type} defaultValue={ record.national_code_type } maxLength="1" onChange={(e) => handleCellValueChanged(e, index + 1, 13, tableCaption, record["_id"], "national_code_type" )} onDoubleClick={(e) => handleCellUpdate(e, 13)} readOnly />
                                </td>
                                <td className="clickable-td" onMouseMove={e => handleFocus(e, false, tableCaption, "type_legal", 14)} onMouseLeave={e => handleFocus(e, true)}>
                                    <input type="text" name={`${tableCaption}-type_legal-${index}`} key={record.type_legal} data-before-update={record.type_legal} defaultValue={ record.type_legal } maxLength="1" onChange={(e) => handleCellValueChanged(e, index + 1, 14, tableCaption, record["_id"], "type_legal" )} onDoubleClick={(e) => handleCellUpdate(e, 14)} readOnly />
                                </td>
                                <td className="clickable-td" onMouseMove={e => handleFocus(e, false, tableCaption, "type_legal_governmental", 15)} onMouseLeave={e => handleFocus(e, true)}>
                                    <input type="text" name={`${tableCaption}-type_legal_governmental-${index}`} key={record.type_legal_governmental} data-before-update={record.type_legal_governmental} defaultValue={ record.type_legal_governmental } maxLength="1" onChange={(e) => handleCellValueChanged(e, index + 1, 15, tableCaption, record["_id"], "type_legal_governmental" )} onDoubleClick={(e) => handleCellUpdate(e, 15)} readOnly />
                                </td>
                                <td className="clickable-td" onMouseMove={e => handleFocus(e, false, tableCaption, "shareholder_national_code", 16)} onMouseLeave={e => handleFocus(e, true)}>
                                    <input type="text" name={`${tableCaption}-shareholder_national_code-${index}`} key={record.shareholder_national_code} data-before-update={record.shareholder_national_code} defaultValue={ record.shareholder_national_code } maxLength="3" onChange={(e) => handleCellValueChanged(e, index + 1, 16, tableCaption, record["_id"], "shareholder_national_code" )} onDoubleClick={(e) => handleCellUpdate(e, 16)} readOnly />
                                </td>
                                <td className="clickable-td" onMouseMove={e => handleFocus(e, false, tableCaption, "percent_of_legal", 17)} onMouseLeave={e => handleFocus(e, true)}>
                                    <input type="text" name={`${tableCaption}-percent_of_legal-${index}`} key={record.percent_of_legal} data-before-update={record.percent_of_legal} defaultValue={ record.percent_of_legal } maxLength="4" onChange={(e) => handleCellValueChanged(e, index + 1, 17, tableCaption, record["_id"], "percent_of_legal" )} onDoubleClick={(e) => handleCellUpdate(e, 17)} readOnly />
                                </td>
                                <td className="clickable-td" onMouseMove={e => handleFocus(e, false, tableCaption, "percent_legal_of_total_assets", 18)} onMouseLeave={e => handleFocus(e, true)}>
                                    <input type="text" name={`${tableCaption}-percent_legal_of_total_assets-${index}`} key={record.percent_legal_of_total_assets} data-before-update={record.percent_legal_of_total_assets} defaultValue={ record.percent_legal_of_total_assets } maxLength="4" onChange={(e) => handleCellValueChanged(e, index + 1, 18, tableCaption, record["_id"], "percent_legal_of_total_assets" )} onDoubleClick={(e) => handleCellUpdate(e, 18)} readOnly />
                                </td>
                                <td className="clickable-td" onMouseMove={e => handleFocus(e, false, tableCaption, "share_from_total_assets", 19)} onMouseLeave={e => handleFocus(e, true)}>
                                    <input type="text" name={`${tableCaption}-share_from_total_assets-${index}`} key={record.share_from_total_assets} data-before-update={record.share_from_total_assets} defaultValue={ record.share_from_total_assets } maxLength="4" onChange={(e) => handleCellValueChanged(e, index + 1, 19, tableCaption, record["_id"], "share_from_total_assets" )} onDoubleClick={(e) => handleCellUpdate(e, 19)} readOnly />
                                </td>
                                <td className="clickable-td" onMouseMove={e => handleFocus(e, false, tableCaption, "account_number", 20)} onMouseLeave={e => handleFocus(e, true)}>
                                    <input type="text" name={`${tableCaption}-account_number-${index}`} key={record.account_number} data-before-update={record.account_number} defaultValue={ record.account_number } maxLength="3" onChange={(e) => handleCellValueChanged(e, index + 1, 20, tableCaption, record["_id"], "account_number" )} onDoubleClick={(e) => handleCellUpdate(e, 20)} readOnly />
                                </td>
                                <td className="clickable-td" onMouseMove={e => handleFocus(e, false, tableCaption, "balance", 21)} onMouseLeave={e => handleFocus(e, true)}>
                                    <input type="text" name={`${tableCaption}-balance-${index}`} key={record.balance} data-before-update={record.balance} defaultValue={ record.balance } maxLength="5" onChange={(e) => handleCellValueChanged(e, index + 1, 21, tableCaption, record["_id"], "balance" )} onDoubleClick={(e) => handleCellUpdate(e, 21)} readOnly />
                                </td>
                                <td className="clickable-td" onMouseMove={e => handleFocus(e, false, tableCaption, "transaction_amount", 22)} onMouseLeave={e => handleFocus(e, true)}>
                                    <input type="text" name={`${tableCaption}-transaction_amount-${index}`} key={record.transaction_amount} data-before-update={record.transaction_amount} defaultValue={ record.transaction_amount } maxLength="5" onChange={(e) => handleCellValueChanged(e, index + 1, 22, tableCaption, record["_id"], "transaction_amount" )} onDoubleClick={(e) => handleCellUpdate(e, 22)} readOnly />
                                </td>
                            </tr>)
                        }
                        </tbody>
                    </table>
                </React.Fragment>
            );
        });
    }

    const handleShowChatBox = () => {
        if (Chatables?.[+serviceID]) {
            if (Chatables[+serviceID].includes(+subServiceID)) {
                setShowMessage(!showMessage);
                return;
            }
        }

        toast.error(translate("chat-not-allowed"));
    }

    return (
        <>
            {
                (message?.length > 0 || serverMessages?.length > 0 || sm?.length > 0) &&
                <div className="message-box">
                    {
                        sm?.length ? <>{sm}<br /></> : ""
                    }
                    { message }
                    {
                        serverMessages?.length ? serverMessages.map((serverMessage, index) => {
                            return <React.Fragment key={index}>
                            <br />
                            { serverMessage.message }
                            </React.Fragment>;
                        }) : ""
                    }
                </div>
            }

            {
                data && 
                <div className="data-section">
                    {
                        renderTable()
                    }
                </div>
            }
            <div className="row justify-content-center align-items-center map-message">
                <div className="col-4">
                    {
                        showMessage && 
                        <Chat subjectt={[serviceID, subServiceID]} />
                    }
                </div>
                <div className="col-8">
                    <Map location={showLocationOnMap} />
                </div>
                <div className="col-12">
                    <div className="buttons-and-messenger">
                        <button className="btn btn-cyan" onClick={handleShowChatBox}>{ translate("send-msg-to-user") }</button>
                        <button className="btn btn-green" onClick={handleSubmitBtn}>{ translate("submit") }</button>
                        <Link className="btn btn-red" to={`/service/${serviceID}/sub-services`}>{ translate("exit-subservice") }</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
