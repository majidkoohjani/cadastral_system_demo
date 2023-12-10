import { useEffect, useState } from "react";
import Storage from "../../core/helpers/Storage";

export default function Clock() {
    const [time, setTime] = useState();
    const language = Storage.getLanguage();
    
    useEffect(() => {
        setInterval(() => {
            let dt = new Date();

            let finalString = "";
            const day = dt.getDate()

            if (language === "fa") {
                finalString = `${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()} ${dt.getFullYear()}/${dt.getMonth() + 1}/${day}`;
            } else {
                finalString = `${dt.getFullYear()}/${dt.getMonth() + 1}/${day} ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`;
            }

            setTime(finalString);
        }, 1000);
    }, []);

    return <span>{time}</span>;
}
