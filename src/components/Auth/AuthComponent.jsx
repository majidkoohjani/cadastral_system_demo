import { useState } from "react";
import Modal from "../Modal/Modal";
import TextInput from "../TextInput/TextInput";
import Authentication from "../../core/api/Authentication";
import { toast } from "react-toastify";
import Storage from "../../core/helpers/Storage.js";
import {translate} from "../../core/helpers/Translator.js";
import { redirect } from "react-router-dom";

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
        Authentication.login(username, password).then(response => {
            const {access_token, user: { national_code, name }} = response.data;

            Storage.setLoginInfo({
                token: access_token,
                username: national_code,
                displayName: name
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
        });
    }

    return (
        <Modal id="authModal" title="ورود">
            <div className="d-flex flex-column gap-3 mx-auto my-2" style={{maxWidth: "70%"}}>
                <TextInput type="text" placeholder="نام کاربری" autoFocus={true} name="username" value={username} onChange={onFieldsChanged} />
                <TextInput type="password" placeholder="کلمه عبور" name="password" value={password} onChange={onFieldsChanged} />
                <button className="button button-danger mx-auto" onClick={loginHandler}>ورود</button>
            </div>
        </Modal>
    );
}
