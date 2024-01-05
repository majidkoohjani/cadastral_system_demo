import { useState } from "react";
import Modal from "../Modal/Modal";
import TextInput from "../TextInput/TextInput";
import Authentication from "../../core/api/Authentication";
import { toast } from "react-toastify";
import Storage from "../../core/helpers/Storage.js";
import {translate} from "../../core/helpers/Translator.js";
import { redirect } from "react-router-dom";
import eventBus from "../../core/helpers/EventBus";

export default function AuthComponent(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onFieldsChanged = (data) => {
        if (data.fieldName === "username") {
            setUsername(data.fieldValue);
        }

        if (data.fieldName === "password") {
            setPassword(data.fieldValue);
        }
    }

    const loginHandler = () => {
        eventBus.dispatchEvent("enablePreloader");
        Authentication.login(username, password).then(response => {
            const {access_token, user: { national_code, name, previous_login, IsAdmin = null }} = response.data;

            Storage.setLoginInfo({
                token: access_token,
                username: national_code,
                displayName: name,
                previousLogin: previous_login,
                ...(IsAdmin === true ? {isAdmin: true} : {}),
            });

            toast.success(translate("welcome"), {
                position: toast.POSITION.TOP_RIGHT
            });

            window.location.href = "/services";
        }).catch(error => {
            let message = error.message;
            let status = "error";
            
            if (error.response.status === 401) {
                message = translate("401-login");
            }
            else if (error.code === "ERR_NETWORK") {
                message = translate("network-error");
            }
            else {
                message = translate("unknown-error");
            }

            toast.error(message, {
                position: toast.POSITION.TOP_RIGHT
            });
        }).finally(() => {
            eventBus.dispatchEvent("disablePreloader");
        });
    }

    return (
        <Modal id="authModal" title={translate("login")}>
            <div className="d-flex flex-column gap-3 mx-auto my-2" style={{maxWidth: "70%"}}>
                <TextInput type="text" placeholder={ translate("username") } autoFocus={true} name="username" value={username} onChange={onFieldsChanged} />
                <TextInput type="password" placeholder={ translate("password") } name="password" value={password} onChange={onFieldsChanged} />
                <button className="button button-danger mx-auto" onClick={loginHandler}>{translate("login")}</button>
            </div>
        </Modal>
    );
}
