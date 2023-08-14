import { useState } from "react";
import Modal from "../Modal/Modal";
import TextInput from "../TextInput/TextInput";
import Authentication from "../../core/api/Authentication";
import { toast } from "react-toastify";

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
        Authentication.login(username, password);

        // console.log(status);

        // if (status === "success") {
        //     toast.success(message, {
        //         position: toast.POSITION.TOP_RIGHT
        //     });

        //     return navigate("/dashboard", {
        //         replace: true
        //     });
        // } else {
        //     toast.error(message, {
        //         position: toast.POSITION.TOP_RIGHT
        //     });
        // }
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
