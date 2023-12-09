import { useEffect, useState } from "react";
import Storage from "../../core/helpers/Storage";

export default function Clock() {
    const [time, setTime] = useState();
    const language = Storage.getLanguage();

    useEffect(() => {
        setInterval(() => {
            let dt = new Date();

            let finalString = "";

            if (language === "fa") {
                finalString = `${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()} ${dt.getFullYear()}/${dt.getMonth()}/${dt.getDay()}`;
            } else {
                finalString = `${dt.getFullYear()}/${dt.getMonth()}/${dt.getDay()} ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`;
            }

            setTime(finalString);
        }, 1000);
    }, []);

    return time;
}
