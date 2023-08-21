import {translate} from "../helpers/Translator";
import Main from "./Main";
import Storage from "../helpers/Storage";
import { toast } from "react-toastify";

class Authentication
{
    static #apiBridge = new Main();

    static login = async (username = "", password = "") => {
        return this.#apiBridge.postRequest(`signin?national_code=${username}&password=${password}`);
    }
}

export default Authentication;
