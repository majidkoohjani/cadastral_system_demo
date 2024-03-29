import { useState } from "react";
import Storage from "../../core/helpers/Storage";
import globe from "../../assets/images/globe.svg";
import "./LanguageSwitch.scss";
import CookieManager from "../../core/helpers/Cookies";

export default function LanguageSwitch() {
    const [language, setLanguage] = useState(Storage.getLanguage() || "en");

    const onChangeLanguage = (event) => {
        Storage.setLanguage(event.target.value);
        CookieManager.setCookie("lang", event.target.value);
        setLanguage(event.target.value);
        window.location.reload();
    }

    return (
        <>
            <img src={globe} height="16" width="16" />
            <select name="language" className="language--change" defaultValue={language} onChange={onChangeLanguage}>
                <option value="fa">FA</option>
                <option value="en">EN</option>
            </select>
        </>
    );
}
