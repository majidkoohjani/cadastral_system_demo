import { redirect, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Services from "../../../core/api/Services";
import { toast } from "react-toastify";
import { translate } from "../../../core/helpers/Translator";
import "./DataTable.scss";

export default function DataTable(props) {
    const {id: serviceID, subServiceID} = useParams();
    const [data, setData] = useState([]);
    const [message, setMessage] = useState("");
    const [render, setRender] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        Services.getData(`${serviceID},${subServiceID}`).then(response => {
            let { data: {obj = [], message = "" } } = response;

            setData([...obj]);
            setMessage(message);
            setRender(true);
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
                data.length > 0 && 
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
        </>
    );
}
