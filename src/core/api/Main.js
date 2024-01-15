import axios from "axios";
import Storage from "../helpers/Storage";
import { SERVER_BASE_URL } from "../config";

class Main
{
    // public functions
    postRequest = async (url = "", data = {}) => {
        return axios.post(`${this.#urlGenerator(url)}`, {...data}, {
            headers: {
                Authorization: `Bearer ${Storage.getLoginInfo()?.token ?? ""}`,
                "Accept-Lang": "en",
                "Accept-Lang-Client": Storage.getLanguage() ?? "en",
            }
        });
    }

    getRequest = async (url = "", data = {}) => {
        return axios.get(`${this.#urlGenerator(url)}`, {
            data: {...data},
            headers: {
                Authorization: `Bearer ${Storage.getLoginInfo()?.token ?? ""}`,
                "Accept-Lang": "en",
                "Accept-Lang-Client": Storage.getLanguage() ?? "en",
            }
        });
    }

    putRequest = async (url = "", data = {}) => {
        return axios.put(`${this.#urlGenerator(url)}`, {...data}, {
            headers: {
                Authorization: `Bearer ${Storage.getLoginInfo()?.token ?? ""}`,
                "Accept-Lang": "en",
                "Accept-Lang-Client": Storage.getLanguage() ?? "en",
            }
        });
    }

    deleteRequest = async (url = "", data = {}) => {
        return axios.delete(`${this.#urlGenerator(url)}`, {
            headers: {
                Authorization: `Bearer ${Storage.getLoginInfo()?.token ?? ""}`,
                "Accept-Lang": "en",
                "Accept-Lang-Client": Storage.getLanguage() ?? "en",
            }
        });
    }

    patchRequest = async (url = "", data = {}) => {
        return axios.patch(`${this.#urlGenerator(url)}`, {...data}, {
            headers: {
                Authorization: `Bearer ${Storage.getLoginInfo()?.token ?? ""}`,
                "Accept-Lang": "en",
                "Accept-Lang-Client": Storage.getLanguage() ?? "en",
            }
        });
    }

    // Private methods
    #urlGenerator = (url = "") => {
        return `${SERVER_BASE_URL}/${url}`;
    }
}

export default Main;
