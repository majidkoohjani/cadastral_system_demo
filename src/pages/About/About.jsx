import Storage from "../../core/helpers/Storage";
import { translate } from "../../core/helpers/Translator";
import "./About.scss";

export default function About() {
    const language = Storage.getLanguage();
    document.title = translate("about-us");

    return (
        <div className={`about-us ${language === "fa" ? "bg-fa" : "bg-en"}`}></div>
    );
}
