import { useEffect, useState } from "react";
import Storage from "../../core/helpers/Storage";
import moment from "moment-timezone";

export default function Clock() {
    const [time, setTime] = useState();
    const language = Storage.getLanguage();
    
    useEffect(() => {
        setInterval(() => {
            let dt = moment().tz("Asia/Tehran");

            let finalString = language === "en" ? `${dt.format("YYYY/MM/DD")} ${dt.format("HH:mm:ss")}` : `${dt.format("HH:mm:ss")} ${dt.format("YYYY/MM/DD")}`;

            setTime(finalString);
        }, 1000);
    }, []);

    return time;
}
