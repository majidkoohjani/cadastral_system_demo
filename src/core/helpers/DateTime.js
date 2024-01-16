import moment from "moment-timezone";
import Storage from "./Storage";

export const parseDateTime = (dateTimeRaw = "", type = "both") => {
    if(dateTimeRaw?.length < 1 || !dateTimeRaw) {
        return "";
    }
    
    const language = Storage.getLanguage();

    let dt = moment(dateTimeRaw).tz("Asia/Tehran");

    let finalString = language === "en" ? `${dt.format("YYYY/MM/DD")} ${dt.format("HH:mm:ss")}` : `${dt.format("HH:mm:ss")} ${dt.format("YYYY/MM/DD")}`;

    return finalString;
}
