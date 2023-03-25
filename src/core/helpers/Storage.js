export default class Storage {
    // Private methods
    static #setter(key = "", value = null) {
        if (typeof key !== "string" || key.length < 1 || !value)
            throw "Storage.js file > Storage class > setter method > wrong input parameters!";
        
        localStorage.setItem(key, JSON.stringify(value));

        return this.#getter(key);
    }

    static #getter(key = "") {
        if (typeof key !== "string" || key.length < 1)
            throw "Storage.js file > Storage class > getter method > wrong input parameters!";
        
        return JSON.parse(localStorage.getItem(key));
    }

    // Public methods
    
}
