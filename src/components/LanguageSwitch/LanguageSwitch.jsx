import { useState } from "react";
import Storage from "../../core/helpers/Storage";
import globe from "../../assets/images/globe.svg";
import "./LanguageSwitch.scss";

export default function LanguageSwitch() {
    const [language, setLanguage] = useState(Storage.getLanguage() || "fa");

    const onChangeLanguage = (event) => {
        Storage.setLanguage(event.target.value);
        setLanguage(event.target.value);
    }

    return (
        <>
            <img src={globe} height="16" width="16" />
            <select name="language" className="language--change" onChange={onChangeLanguage}>
                <option value="fa" selected={language === "fa"}>FA</option>
                <option value="en" selected={language === "en"}>EN</option>
            </select>
        </>
    );
}
