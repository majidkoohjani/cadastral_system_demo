import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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

const validator = new Validator();

export default function DataTable(props) {
    const {id: serviceID, subServiceID} = useParams();
    const updateRules = getSubServiceUpdateRules(serviceID, subServiceID);
    const [data, setData] = useState(null);
    const [message, setMessage] = useState("");
    const [lockColumns, setLockColumns] = useState("");
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
    const [dataToBeUpdated, setDataToBeUpdated] = useState({
        origin: {},
        destination: {},
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        eventBus.dispatchEvent("enablePreloader");
        Services.getData(`${serviceID},${subServiceID}`).then(response => {
            let { data: {obj = null, lockedColumn = "" } } = response;

            let tempData = {
                origin: [],
                destination: [],
            };

            if (obj) {
                tempData = obj?.hasOwnProperty("origin") ? {
                    origin: [...obj.origin],
                    destination: [...obj.destination],
                } : {
                    origin: [...obj],
                    destination: [],
                };

            }
            setData(tempData);
            setMessage(updateRules.message);
            setLockColumns(lockedColumn);
        }).catch(error => {
            let { response } = error;

            if (response.status === 401) {
                toast.error(translate("401-notLoggedIn"), {
                    position: toast.POSITION.TOP_RIGHT
                });
            }

            else if (response.status === 403) {
                toast.error(translate("403-error"), {
                    position: toast.POSITION.TOP_RIGHT
                });
            }

            else if (response.status === 404) {
                toast.error(translate("404-error"), {
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

    const handleCellValueChanged = (e, rowIDInProgram, columnID, tableName = "origin", rowID, cellName = "") => {
        // const [tableName, rowID, cellName] = data.fieldName.split("|");

        if (updateRules.hasOwnProperty("requestModel")) {
            if (validator.validate(e.target.value, {...updateRules.requestModel.params[tableName][cellName]})) {
                setDataToBeUpdated({
                    ...dataToBeUpdated,
                    [tableName]: {
                        rowID,
                        [cellName]: e.target.value,
                    }
                });
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
    
    const handleSubmitBtn = () => {
        eventBus.dispatchEvent("enablePreloader");

        ServicesUpdate.update(`${serviceID}/${subServiceID}`, {...updateRules.requestModel}, dataToBeUpdated).then(response => {
            const {data, status} = response;

            switch (status) {
                case 200:
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
        }).catch(error => {
            toast.error(`${translate("updated-failed")}\r\n${error.message}`, {
                position: toast.POSITION.TOP_RIGHT
            });
        }).finally(() => {
            eventBus.dispatchEvent("disablePreloader");
            fetchData();
        });
    }

    const renderTable = (tableCaption = "", data = []) => {
        return <table className={`data-table ${(tableCaption === "destination" && Storage.getLanguage() === "en") && 'order-1'}`}>
        <caption>{ translate(`${tableCaption}-table`) }</caption>
        <thead>
            <tr className="static-tr">
                <th className="horizontal-view">{ translate("column-number") }</th>
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
                <td className="horizontal-view" style={{width: "76px"}}>{ translate("col-1") }</td>
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
                data.map((record, index) => <tr key={index} data-row={index + 1}>
                    <th className="horizontal-view">
                        <input type="checkbox" />
                    </th>
                    <td className="clickable-td">
                        <input type="text" name={`${tableCaption}-time-${index}`} defaultValue={ record.time } maxLength="14" onKeyUp={(e) => handleCellValueChanged(e, index + 1, 1, tableCaption, record["_id"], "transaction_amount" )} onDoubleClick={(e) => handleCellUpdate(e, 1)} readOnly />
                    </td>
                    <td className="clickable-td">
                        <input type="text" name={`${tableCaption}-house_id-${index}`} defaultValue={ record.house_id } maxLength="2" onKeyUp={(e) => handleCellValueChanged(e, index + 1, 2, tableCaption, record["_id"], "transaction_amount" )} onDoubleClick={(e) => handleCellUpdate(e, 2)} readOnly />
                    </td>
                    <td className="clickable-td">
                        <input type="text" name={`${tableCaption}-residential-${index}`} defaultValue={ record.residential } maxLength="1" onKeyUp={(e) => handleCellValueChanged(e, index + 1, 3, tableCaption, record["_id"], "transaction_amount" )} onDoubleClick={(e) => handleCellUpdate(e, 3)} readOnly />
                    </td>
                    <td className="clickable-td">
                        <input type="text" name={`${tableCaption}-subsistence-${index}`} defaultValue={ record.subsistence } maxLength="1" onKeyUp={(e) => handleCellValueChanged(e, index + 1, 4, tableCaption, record["_id"], "transaction_amount" )} onDoubleClick={(e) => handleCellUpdate(e, 4)} readOnly />
                    </td>
                    <td className="clickable-td">
                        <input type="text" name={`${tableCaption}-code-${index}`} defaultValue={ record.code } maxLength="1" onKeyUp={(e) => handleCellValueChanged(e, index + 1, 5, tableCaption, record["_id"], "transaction_amount" )} onDoubleClick={(e) => handleCellUpdate(e, 5)} readOnly />
                    </td>
                    <td className="clickable-td">
                        <input type="text" name={`${tableCaption}-national_code-${index}`} defaultValue={ record.national_code } maxLength="3" onKeyUp={(e) => handleCellValueChanged(e, index + 1, 6, tableCaption, record["_id"], "transaction_amount" )} onDoubleClick={(e) => handleCellUpdate(e, 6)} readOnly />
                    </td>
                    <td className="clickable-td">
                        <input type="text" name={`${tableCaption}-row_status-${index}`} defaultValue={ record.row_status } maxLength="1" onKeyUp={(e) => handleCellValueChanged(e, index + 1, 7, tableCaption, record["_id"], "transaction_amount" )} onDoubleClick={(e) => handleCellUpdate(e, 7)} readOnly />
                    </td>
                    <td className="clickable-td">
                        <input type="text" name={`${tableCaption}-assets_code-${index}`} defaultValue={ record.assets_code } maxLength="3" onKeyUp={(e) => handleCellValueChanged(e, index + 1, 8, tableCaption, record["_id"], "transaction_amount" )} onDoubleClick={(e) => handleCellUpdate(e, 8)} readOnly />
                    </td>
                    <td className="clickable-td">
                        <input type="text" name={`${tableCaption}-price_assets-${index}`} defaultValue={ record.price_assets } maxLength="5" onKeyUp={(e) => handleCellValueChanged(e, index + 1, 9, tableCaption, record["_id"], "transaction_amount" )} onDoubleClick={(e) => handleCellUpdate(e, 9)} readOnly />
                    </td>
                    <td className="clickable-td">
                        <input type="text" name={`${tableCaption}-national_code_bought_assets-${index}`} defaultValue={ record.national_code_bought_assets } maxLength="3" onKeyUp={(e) => handleCellValueChanged(e, index + 1, 10, tableCaption, record["_id"], "transaction_amount" )} onDoubleClick={(e) => handleCellUpdate(e, 10)} readOnly />
                    </td>
                    <td className="clickable-td">
                        <input type="text" name={`${tableCaption}-percent_owner-${index}`} defaultValue={ record.percent_owner } maxLength="4" onKeyUp={(e) => handleCellValueChanged(e, index + 1, 11, tableCaption, record["_id"], "transaction_amount" )} onDoubleClick={(e) => handleCellUpdate(e, 11)} readOnly />
                    </td>
                    <td className="clickable-td">
                        <input type="text" name={`${tableCaption}-price_per_owner-${index}`} defaultValue={ record.price_per_owner } maxLength="4" onKeyUp={(e) => handleCellValueChanged(e, index + 1, 12, tableCaption, record["_id"], "transaction_amount" )} onDoubleClick={(e) => handleCellUpdate(e, 12)} readOnly />
                    </td>
                    <td className="clickable-td">
                        <input type="text" name={`${tableCaption}-national_code_type-${index}`} defaultValue={ record.national_code_type } maxLength="1" onKeyUp={(e) => handleCellValueChanged(e, index + 1, 13, tableCaption, record["_id"], "transaction_amount" )} onDoubleClick={(e) => handleCellUpdate(e, 13)} readOnly />
                    </td>
                    <td className="clickable-td">
                        <input type="text" name={`${tableCaption}-type_legal-${index}`} defaultValue={ record.type_legal } maxLength="1" onKeyUp={(e) => handleCellValueChanged(e, index + 1, 14, tableCaption, record["_id"], "transaction_amount" )} onDoubleClick={(e) => handleCellUpdate(e, 14)} readOnly />
                    </td>
                    <td className="clickable-td">
                        <input type="text" name={`${tableCaption}-type_legal_governmental-${index}`} defaultValue={ record.type_legal_governmental } maxLength="1" onKeyUp={(e) => handleCellValueChanged(e, index + 1, 15, tableCaption, record["_id"], "transaction_amount" )} onDoubleClick={(e) => handleCellUpdate(e, 15)} readOnly />
                    </td>
                    <td className="clickable-td">
                        <input type="text" name={`${tableCaption}-shareholder_national_code-${index}`} defaultValue={ record.shareholder_national_code } maxLength="3" onKeyUp={(e) => handleCellValueChanged(e, index + 1, 16, tableCaption, record["_id"], "transaction_amount" )} onDoubleClick={(e) => handleCellUpdate(e, 16)} readOnly />
                    </td>
                    <td className="clickable-td">
                        <input type="text" name={`${tableCaption}-percent_of_legal-${index}`} defaultValue={ record.percent_of_legal } maxLength="4" onKeyUp={(e) => handleCellValueChanged(e, index + 1, 17, tableCaption, record["_id"], "transaction_amount" )} onDoubleClick={(e) => handleCellUpdate(e, 17)} readOnly />
                    </td>
                    <td className="clickable-td">
                        <input type="text" name={`${tableCaption}-percent_legal_of_total_assets-${index}`} defaultValue={ record.percent_legal_of_total_assets } maxLength="4" onKeyUp={(e) => handleCellValueChanged(e, index + 1, 18, tableCaption, record["_id"], "transaction_amount" )} onDoubleClick={(e) => handleCellUpdate(e, 18)} readOnly />
                    </td>
                    <td className="clickable-td">
                        <input type="text" name={`${tableCaption}-share_from_total_assets-${index}`} defaultValue={ record.share_from_total_assets } maxLength="4" onKeyUp={(e) => handleCellValueChanged(e, index + 1, 19, tableCaption, record["_id"], "transaction_amount" )} onDoubleClick={(e) => handleCellUpdate(e, 19)} readOnly />
                    </td>
                    <td className="clickable-td">
                        <input type="text" name={`${tableCaption}-account_number-${index}`} defaultValue={ record.account_number } maxLength="3" onKeyUp={(e) => handleCellValueChanged(e, index + 1, 20, tableCaption, record["_id"], "transaction_amount" )} onDoubleClick={(e) => handleCellUpdate(e, 20)} readOnly />
                    </td>
                    <td className="clickable-td">
                        <input type="text" name={`${tableCaption}-balance-${index}`} defaultValue={ record.balance } maxLength="5"  onKeyUp={(e) => handleCellValueChanged(e, index + 1, 21, tableCaption, record["_id"], "transaction_amount" )} onDoubleClick={(e) => handleCellUpdate(e, 21)} readOnly />
                    </td>
                    <td className="clickable-td">
                        <input type="text" name={`${tableCaption}-transaction_amount-${index}`} defaultValue={ record.transaction_amount } maxLength="5" onKeyUp={(e) => handleCellValueChanged(e, index + 1, 22, tableCaption, record["_id"], "transaction_amount" )} onDoubleClick={(e) => handleCellUpdate(e, 22)} readOnly />
                    </td>
                </tr>)
            }
        </tbody>
        </table>
    }

    return (
        <>
            {
                message?.length > 0 &&
                <div className="message-box">
                    { translate(message) }
                </div>
            }

            {
                data && 
                <div className="data-section">
                    {
                        renderTable("destination", data.destination)
                    }
                    {
                        renderTable("origin", data.origin)
                    }
                </div>
            }
            <div className="row justify-content-center align-items-center map-message">
                <div className="col-6"></div>
                <div className="col-6">
                    <Map />
                </div>
                <div className="col-12">
                    <div className="buttons-and-messenger">
                        <button className="btn btn-cyan">{ translate("send-msg-to-user") }</button>
                        <button className="btn btn-green" onClick={handleSubmitBtn}>{ translate("submit") }</button>
                        <Link className="btn btn-red" to={`/service/${serviceID}/sub-services`}>{ translate("exit-subservice") }</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
