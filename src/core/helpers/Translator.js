import translatesFaEn from "../lang/translatesFaEn";
import Storage from "./Storage";

function determineLang() {
    return Storage.getLanguage();
}

function translate(key = "") {
    return translatesFaEn?.[key]?.[determineLang()] ?? key;
}

export {translate};
