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

    // Public methods
    static setLanguage(value = null) {
        if (!value) {
            throw `${this.#errorMessage}setLanguage method > wrong input parameters!`;
        }

        return this.#setter("language", value);
    }

    static getLanguage() {
        return this.#getter("language");
    }
}
