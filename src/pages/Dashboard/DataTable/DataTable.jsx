import { redirect, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Services from "../../../core/api/Services";
import { toast } from "react-toastify";
import { translate } from "../../../core/helpers/Translator";
import "./DataTable.scss";

export default function DataTable(props) {
    const {id: serviceID, subServiceID} = useParams();
    const [data, setData] = useState(null);
    const [message, setMessage] = useState("");
    const [render, setRender] = useState(false);
    const [lockColumns, setLockColumns] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        Services.getData(`${serviceID},${subServiceID}`).then(response => {
            let { data: {obj = null, message = "", lockedColumn = "" } } = response;

            setData(obj);
            setMessage(message);
            setRender(true);
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
        });
    };

    const handleCellUpdate = () => {}

    return (
        render && 
        <>
            {
                message?.length > 0 &&
                <div className="message-box">
                    { message }
                </div>
            }

            {
                data && 
                <div className="d-flex column-gap-12px">
                    {
                        Array.isArray(data) && 
                        <table className="data-table">
                            <tr>
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
                            <tr>
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
                                    <td>{ record.time }</td>
                                    <td>{ record.house_id }</td>
                                    <td>{ record.residential }</td>
                                    <td>{ record.subsistence }</td>
                                    <td>{ record.code }</td>
                                    <td>{ record.national_code }</td>
                                    <td>{ record.row_status }</td>
                                    <td>{ record.assets_code }</td>
                                    <td>{ record.price_assets }</td>
                                    <td>{ record.national_code_bought_assets }</td>
                                    <td>{ record.percent_owner }</td>
                                    <td>{ record.price_per_owner }</td>
                                    <td>{ record.national_code_type }</td>
                                    <td>{ record.type_legal }</td>
                                    <td>{ record.type_legal_governmental }</td>
                                    <td>{ record.shareholder_national_code }</td>
                                    <td>{ record.percent_of_legal }</td>
                                    <td>{ record.percent_legal_of_total_assets }</td>
                                    <td>{ record.share_from_total_assets }</td>
                                    <td>{ record.account_number }</td>
                                    <td>{ record.balance }</td>
                                    <td>{ record.transaction_amount }</td>
                                </tr>)
                            }
                        </table>
                    }
                    {
                        data.hasOwnProperty("origin") && 
                        <>
                            <table className="data-table">
                            <caption>{ translate("source-table") }</caption>
                            <tr>
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
                            <tr>
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
                                data.origin.map((record, index) => <tr key={index}>
                                    <th className="horizontal-view"></th>
                                    <td>{ record.time }</td>
                                    <td>{ record.house_id }</td>
                                    <td>{ record.residential }</td>
                                    <td>{ record.subsistence }</td>
                                    <td>{ record.code }</td>
                                    <td>{ record.national_code }</td>
                                    <td>{ record.row_status }</td>
                                    <td>{ record.assets_code }</td>
                                    <td>{ record.price_assets }</td>
                                    <td>{ record.national_code_bought_assets }</td>
                                    <td>{ record.percent_owner }</td>
                                    <td>{ record.price_per_owner }</td>
                                    <td>{ record.national_code_type }</td>
                                    <td>{ record.type_legal }</td>
                                    <td>{ record.type_legal_governmental }</td>
                                    <td>{ record.shareholder_national_code }</td>
                                    <td>{ record.percent_of_legal }</td>
                                    <td>{ record.percent_legal_of_total_assets }</td>
                                    <td>{ record.share_from_total_assets }</td>
                                    <td>{ record.account_number }</td>
                                    <td>{ record.balance }</td>
                                    <td>{ record.transaction_amount }</td>
                                </tr>)
                            }
                            </table>
                            <table className="data-table">
                                <caption>{ translate("destination-table") }</caption>
                            <tr>
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
                            <tr>
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
                                data.destination.map((record, index) => <tr key={index}>
                                    <th className="horizontal-view"></th>
                                    <td onDoubleClick={handleCellUpdate}>{ record.time }</td>
                                    <td onDoubleClick={handleCellUpdate}>{ record.house_id }</td>
                                    <td onDoubleClick={handleCellUpdate}>{ record.residential }</td>
                                    <td onDoubleClick={handleCellUpdate}>{ record.subsistence }</td>
                                    <td onDoubleClick={handleCellUpdate}>{ record.code }</td>
                                    <td onDoubleClick={handleCellUpdate}>{ record.national_code }</td>
                                    <td onDoubleClick={handleCellUpdate}>{ record.row_status }</td>
                                    <td onDoubleClick={handleCellUpdate}>{ record.assets_code }</td>
                                    <td onDoubleClick={handleCellUpdate}>{ record.price_assets }</td>
                                    <td onDoubleClick={handleCellUpdate}>{ record.national_code_bought_assets }</td>
                                    <td onDoubleClick={handleCellUpdate}>{ record.percent_owner }</td>
                                    <td onDoubleClick={handleCellUpdate}>{ record.price_per_owner }</td>
                                    <td onDoubleClick={handleCellUpdate}>{ record.national_code_type }</td>
                                    <td onDoubleClick={handleCellUpdate}>{ record.type_legal }</td>
                                    <td onDoubleClick={handleCellUpdate}>{ record.type_legal_governmental }</td>
                                    <td onDoubleClick={handleCellUpdate}>{ record.shareholder_national_code }</td>
                                    <td onDoubleClick={handleCellUpdate}>{ record.percent_of_legal }</td>
                                    <td onDoubleClick={handleCellUpdate}>{ record.percent_legal_of_total_assets }</td>
                                    <td onDoubleClick={handleCellUpdate}>{ record.share_from_total_assets }</td>
                                    <td onDoubleClick={handleCellUpdate}>{ record.account_number }</td>
                                    <td onDoubleClick={handleCellUpdate}>{ record.balance }</td>
                                    <td onDoubleClick={handleCellUpdate}>{ record.transaction_amount }</td>
                                </tr>)
                            }
                            </table>
                        </>
                    }
                    
                </div>
            }
            <div className="buttons-and-messenger">
                <button className="">ارسال پیام به کاربر دیگر</button>
                <button className="">ثبت</button>
                <button className="">خروج از زیر خدمت</button>
            </div>
        </>
    );
}
