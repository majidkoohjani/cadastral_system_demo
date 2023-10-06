import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Services from "../../../core/api/Services";
import { toast } from "react-toastify";
import { translate } from "../../../core/helpers/Translator";
import Storage from "../../../core/helpers/Storage";
import Map from "../Map/Map";
import "./DataTable.scss";

export default function DataTable(props) {
    const {id: serviceID, subServiceID} = useParams();
    const [data, setData] = useState(null);
    const [message, setMessage] = useState("");
    const [lockColumns, setLockColumns] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        Services.getData(`${serviceID},${subServiceID}`).then(response => {
            let { data: {obj = null, message = "", lockedColumn = "" } } = response;

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
            setMessage(message);
            setLockColumns(lockedColumn);
        }).catch(error => {
            let { response } = error;

            console.log(error);

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
        });
    };

    const handleCellUpdate = (columnID) => {
        let lockBits = lockColumns.split("");

        if (+lockBits[columnID - 1] === 0) {
            toast.error(translate("operation-denied"), {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    const renderTable = (tableCaption = "", data = []) => {
        return <table className={`data-table ${(tableCaption === "destination" && Storage.getLanguage() === "en") && 'order-1'}`}>
        <caption>{ translate(`${tableCaption}-table`) }</caption>
        <tbody>
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
                <td className="horizontal-view">{ translate("col-1") }</td>
                <td className="horizontal-view">{ translate("col-2") }</td>
                <td className="horizontal-view">{ translate("col-3") }</td>
                <td className="horizontal-view">{ translate("col-4") }</td>
                <td className="horizontal-view">{ translate("col-5") }</td>
                <td className="horizontal-view">{ translate("col-6") }</td>
                <td className="horizontal-view">{ translate("col-7") }</td>
                <td className="horizontal-view">{ translate("col-8") }</td>
                <td className="horizontal-view">{ translate("col-9") }</td>
                <td className="horizontal-view">{ translate("col-10") }</td>
                <td className="horizontal-view">{ translate("col-11") }</td>
                <td className="horizontal-view">{ translate("col-12") }</td>
                <td className="horizontal-view">{ translate("col-13") }</td>
                <td className="horizontal-view">{ translate("col-14") }</td>
                <td className="horizontal-view">{ translate("col-15") }</td>
                <td className="horizontal-view">{ translate("col-16") }</td>
                <td className="horizontal-view">{ translate("col-17") }</td>
                <td className="horizontal-view">{ translate("col-18") }</td>
                <td className="horizontal-view">{ translate("col-19") }</td>
                <td className="horizontal-view">{ translate("col-20") }</td>
                <td className="horizontal-view">{ translate("col-21") }</td>
                <td className="horizontal-view">{ translate("col-22") }</td>
            </tr>
            {
                data.map((record, index) => <tr key={index}>
                    <th className="horizontal-view"></th>
                    <td className="clickable-td" onClick={() => handleCellUpdate(1)}>{ record.time }</td>
                    <td className="clickable-td" onClick={() => handleCellUpdate(2)}>{ record.house_id }</td>
                    <td className="clickable-td" onClick={() => handleCellUpdate(3)}>{ record.residential }</td>
                    <td className="clickable-td" onClick={() => handleCellUpdate(4)}>{ record.subsistence }</td>
                    <td className="clickable-td" onClick={() => handleCellUpdate(5)}>{ record.code }</td>
                    <td className="clickable-td" onClick={() => handleCellUpdate(6)}>{ record.national_code }</td>
                    <td className="clickable-td" onClick={() => handleCellUpdate(7)}>{ record.row_status }</td>
                    <td className="clickable-td" onClick={() => handleCellUpdate(8)}>{ record.assets_code }</td>
                    <td className="clickable-td" onClick={() => handleCellUpdate(9)}>{ record.price_assets }</td>
                    <td className="clickable-td" onClick={() => handleCellUpdate(10)}>{ record.national_code_bought_assets }</td>
                    <td className="clickable-td" onClick={() => handleCellUpdate(11)}>{ record.percent_owner }</td>
                    <td className="clickable-td" onClick={() => handleCellUpdate(12)}>{ record.price_per_owner }</td>
                    <td className="clickable-td" onClick={() => handleCellUpdate(13)}>{ record.national_code_type }</td>
                    <td className="clickable-td" onClick={() => handleCellUpdate(14)}>{ record.type_legal }</td>
                    <td className="clickable-td" onClick={() => handleCellUpdate(15)}>{ record.type_legal_governmental }</td>
                    <td className="clickable-td" onClick={() => handleCellUpdate(16)}>{ record.shareholder_national_code }</td>
                    <td className="clickable-td" onClick={() => handleCellUpdate(17)}>{ record.percent_of_legal }</td>
                    <td className="clickable-td" onClick={() => handleCellUpdate(18)}>{ record.percent_legal_of_total_assets }</td>
                    <td className="clickable-td" onClick={() => handleCellUpdate(19)}>{ record.share_from_total_assets }</td>
                    <td className="clickable-td" onClick={() => handleCellUpdate(20)}>{ record.account_number }</td>
                    <td className="clickable-td" onClick={() => handleCellUpdate(21)}>{ record.balance }</td>
                    <td className="clickable-td" onClick={() => handleCellUpdate(22)}>{ record.transaction_amount }</td>
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
                    { message }
                </div>
            }

            {
                data && 
                <div className="data-section">
                    {
                        renderTable("destination", data.destination)
                    }
                    {
                        renderTable("source", data.origin)
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
                        <button className="btn btn-green">{ translate("submit") }</button>
                        <Link className="btn btn-red" to={`/service/${serviceID}/sub-services`}>{ translate("exit-subservice") }</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
