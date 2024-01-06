import CookieManager from "./Cookies";

export default class Storage {
    // Properties
    static #errorMessage = "Storage.js file > Storage class > ";

    // Private methods
    static #setter(key = "", value = null) {
        if (typeof key !== "string" || key.length < 1 || !value)
            throw `${this.#errorMessage}setter method > wrong input parameters!`;
        
        localStorage.setItem(key, JSON.stringify(value));

        return this.#getter(key);
    }

    static #getter(key = "") {
        if (typeof key !== "string" || key.length < 1)
            throw `${this.#errorMessage}getter method > wrong input parameters!`;
        
        return JSON.parse(localStorage.getItem(key));
    }

    static #delete(key = "", clearAll = false) {
        if (clearAll) {
            localStorage.clear();
        }
        else {
            localStorage.removeItem(key);
        }
    }

    // Public methods
    static setLanguage(value = null) {
        CookieManager.setCookie("lang", value);
        return this.#setter("language", value);
    }

    static getLanguage() {
        let lang = this.#getter("language");

        if (lang === null) {
            this.#setter("language", "en");
            CookieManager.setCookie("lang", "en");
        }

        return this.#getter("language");
    }

    static setLoginInfo(value = null) {
        return this.#setter("userInfo", value);
    }

    static getLoginInfo() {
        return this.#getter("userInfo");
    }

    static deleteLoginInfo() {
        this.#delete("userInfo");
        CookieManager.deleteCookies(["domain", "SameSite", "Secure"]);
    }

    static setNextReloadMessage(messages = []) {
        sessionStorage.setItem("server-messages", JSON.stringify(messages));
    }

    static getNextReloadMessages() {
        let messages = JSON.parse(sessionStorage.getItem("server-messages")) ?? [];

        return messages;
    }

    static removeNextReloadMessage() {
        sessionStorage.removeItem("server-messages");
    }
}
