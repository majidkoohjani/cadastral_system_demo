import "./Chat.scss";
import { translate } from "../../core/helpers/Translator";
import { useState } from "react";
import ChatApi from '../../core/api/Chat';
import eventBus from "../../core/helpers/EventBus";
import { toast } from "react-toastify";

export default function Chat(props) {
    const [subject, setSubject] = useState("");
    const [nationalCode, setNationalCode] = useState("");
    const [text, setText] = useState("");

    const handleSendChat = () => {
        if (subject.length < 1 || text.length < 1) {
            toast.error(translate("fill-values"), {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            eventBus.dispatchEvent("enablePreloader");
            ChatApi.sendMessage(subject, text, nationalCode).then(response => {
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

    const handleCheckJustEnAndSet = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        if ((/^[~`!@#$%^&*()_+=[\]\\{}|;':",.\/<>?a-zA-Z0-9-\s]+$/.test(value) || value.length < 1 )) {
            if (name === "subject") {
                setSubject(value);
            }
            else if (name === "nationalCode") {
                setNationalCode(value);
            }
            else if (name === "text") {
                setText(value);
            }
        }
    }

    return (
        <div className="chat-box">
            <span className="chat-box__title">{translate("chat-box__title")}</span>
            <div className="chat-box__main">
                <div>
                    <input type="text" placeholder={translate("chat-input__subject")} name="subject" required value={subject} onChange={handleCheckJustEnAndSet} />
                </div>
                <div>
                    <input type="text" placeholder={translate("chat-input__nationalCode")} name="nationalCode" value={nationalCode} onChange={handleCheckJustEnAndSet} />
                </div>
                <div>
                    <textarea rows={2} placeholder={translate("chat-input__text")} name="text" required value={text} onChange={handleCheckJustEnAndSet} />
                </div>
            </div>
            <div className="chat-box__btn">
                <button onClick={handleSendChat}>{translate("send")}</button>
            </div>
        </div>
    );
}
