import {translate} from "../helpers/Translator";
import Main from "./Main";
import Storage from "../helpers/Storage";
import { toast } from "react-toastify";

class Authentication
{
    static #apiBridge = new Main();

    static login = async (username = "", password = "") => {
        let message = "";
        let status = "";

        this.#apiBridge.postRequest(`signin?national_code=${username}&password=${password}`).then(response => {
            const {access_token, user: { national_code, name }} = response.data;

            Storage.setLoginInfo({
                token: access_token,
                username: national_code,
                displayName: name
            });

            message = translate("welcome");
            status = "success";
        }).catch(error => {
            message = error.message;
            status = "error";
            
            if (error.response.status === 401) {
                message = translate("401-login");
            }
            else if (error.code === "ERR_NETWORK") {
                message = translate("network-error");
            }
            else {
                message = translate("unknown-error");
            }
        });
    }
}

export default Authentication;
