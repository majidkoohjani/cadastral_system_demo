import "./Chat.scss";
import { translate } from "../../core/helpers/Translator";
import { useState } from "react";
import ChatApi from '../../core/api/Chat';
import eventBus from "../../core/helpers/EventBus";
import { toast } from "react-toastify";

export default function Chat(props) {
    const [subject, setSubject] = useState("");
    const [houseId, setHouseId] = useState("");
    const [code, setCode] = useState("");
    const [nationalCode, setNationalCode] = useState("");
    const [text, setText] = useState("");

    const handleSendChat = () => {
        if (subject.length < 1 || houseId.length < 1 || code.length < 1 || text.length < 1) {
            toast.error(translate("fill-values"), {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            eventBus.dispatchEvent("enablePreloader");
            ChatApi.sendMessage(subject, houseId, code, text, nationalCode).then(response => {
                toast.success(translate("updated-successfully"), {
                    position: toast.POSITION.TOP_RIGHT
                });
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                eventBus.dispatchEvent("disablePreloader");
            });
        }
    }

    return (
        <div className="chat-box">
            <span className="chat-box__title">{translate("chat-box__title")}</span>
            <div className="chat-box__main">
                <div>
                    <input type="text" placeholder={translate("chat-input__subject")} name="subject" required value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder={translate("chat-input__houseId")} name="houseId" required value={houseId} onChange={(e) => setHouseId(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder={translate("chat-input__code")} name="code" required value={code} onChange={(e) => setCode(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder={translate("chat-input__nationalCode")} name="nationalCode" value={nationalCode} onChange={(e) => setNationalCode(e.target.value)} />
                </div>
                <div>
                    <textarea rows={2} placeholder={translate("chat-input__text")} name="text" required value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <div className="chat-box__btn">
                <button onClick={handleSendChat}>{translate("send")}</button>
            </div>
        </div>
    );
}
