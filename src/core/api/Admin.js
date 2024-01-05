import Main from "./Main";

export default class Admin
{
    static #apiBridge = new Main();

    static getUsers = async () => {
        let response = await this.#apiBridge.getRequest(`admin/users`);

        return response;
    }

    static resetAllPasswords = async () => {
        let response = await this.#apiBridge.postRequest(`admin/users/change-all`);

        return response;
    }

    static resetDb = async () => {
        let response = await this.#apiBridge.postRequest(`admin/file/reset-all`);

        return response;
    }

    static resetUserPassword = async (userId = "") => {
        let response = await this.#apiBridge.putRequest(`admin/users/${userId}`);

        return response;
    }
}
