import { useEffect, useState } from "react";
import "./Inbox.scss";
import ChatApi from "../../../core/api/ChatApi";
import eventBus from "../../../core/helpers/EventBus";
import { translate } from "../../../core/helpers/Translator";
import { toast } from "react-toastify";
import { parseDateTime } from "../../../core/helpers/DateTime";

const chatApi = new ChatApi();

export default function Inbox(props) {
    const [chats, setChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const [selectedChatMessages, setSelectedChatMessages] = useState([]);
    const [messageToSend, setMessageToSend] = useState("");

    useEffect(() => {
        document.title = `${translate("chats")} | ${translate("site-main-title")}`;
        getChats();
    }, []);

    const reset = () => {
        setSelectedChat(null);
        setSelectedChatMessages([]);
        setMessageToSend("");
    }

    const getChats = () => {
        eventBus.dispatchEvent("enablePreloader");

        chatApi.getChatsList().then(response => {
            let {data = null, status} = response;

            switch (status) {
                case 200:
                    setChats([...data?.chats ?? []]);
                    break;
                default:
                    break;
            }
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            eventBus.dispatchEvent("disablePreloader");
        });
    }

    const openChatMessages = (chosenChat = null) => {
        if (!chosenChat) {
            return;
        }

        setSelectedChat({...chosenChat});

        eventBus.dispatchEvent("enablePreloader");

        chatApi.getChatMessages(chosenChat.id).then(response => {
            let {data = null, status} = response;

            switch (status) {
                case 200:
                    setSelectedChatMessages([...data?.messages ?? []]);
                    break;
                default:
                    break;
            }
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            eventBus.dispatchEvent("disablePreloader");
        });
    }

    const handleSendMessage = () => {
        if (!selectedChat || messageToSend.length < 1) {
            toast.error(translate("message-empty"));
            return;
        }

        eventBus.dispatchEvent("enablePreloader");
        chatApi.sendMessage(selectedChat.id, messageToSend).then(response => {
            let {data = null, status} = response;

            switch (status) {
                case 200:
                    openChatMessages({...selectedChat});
                    setMessageToSend("");
                    break;
                default:
                    break;
            }
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            eventBus.dispatchEvent("disablePreloader");
        });
    }

    const controlAndSetMessage = (e) => {
        let value = e.target.value;

        if ((/^[~`!@#$%^&*()_+=[\]\\{}|;':",.\/<>?a-zA-Z0-9-\s]+$/.test(value) || value.length < 1 )) {
            setMessageToSend(value);
        }
    }

    return (
        <div className="container">
            {
                chats.length > 0 ? 
                <div className="row chats__container">
                    <div className="col-12 chats__header">
                        <h6>{translate("chats")}</h6>
                    </div>
                    <div className="col-3 chats__col">
                        {
                            chats.map((chat, index) => {
                                return (
                                    <div key={index} className={`chat__item ${selectedChat?.id === chat.id ? "active" : ""}`} onClick={() => openChatMessages({...chat})}>
                                        <div className="chat__details">
                                            <span>{ `${translate("send-to")}: ${chat.to}` }</span>
                                            <div>
                                                {
                                                    +chat.total_unread_message > 0 ? 
                                                    <i className="fa-regular fa-check" /> : 
                                                    <i className="fa-regular fa-check-double" style={{color: "green"}} />
                                                }
                                                {
                                                    +chat.total_unread_message > 0 && 
                                                    <span className="badge bg-danger">{ chat.total_unread_message } {translate("unread-message")}</span>
                                                }
                                            </div>
                                        </div>
                                        <div className="chat__last-message">
                                            <span className="one-line-text" title={chat.last_message}>{ chat.last_message }</span>
                                            <span className="badge bg-warning">{ chat.subject }</span>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="col-9 chat__box">
                        <div className="chat_messages">
                            {
                                selectedChatMessages.length > 0 ? 
                                selectedChatMessages.map((message, index) => {
                                    return (
                                        <div key={index} className={`message ${message.From.toLowerCase()}`}>
                                            <div>
                                                <span>{message.text}</span>
                                            </div>
                                            <span>{parseDateTime(message.datetime)}</span>
                                        </div>
                                    );
                                }) : 
                                <span className="text-danger not-exist-text">{translate("no-messages")}</span>
                            }
                        </div>
                        {
                            selectedChat && 
                            <div className="message__entrance">
                                <input type="text" className="message-input" placeholder={translate("message-placeholder")} autoFocus name="message-box" value={messageToSend} onChange={controlAndSetMessage} />
                                <button className="send-message__btn" onClick={handleSendMessage}>{ translate("send") }</button>
                            </div>
                        }
                    </div>
                </div> : 
                <div className="alert alert-danger text-center">
                    { translate("no-chats") }
                </div>
            }
        </div>
    );
}
