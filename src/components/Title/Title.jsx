import { translate } from "../../core/helpers/Translator";
import "./Title.scss";
import {Link} from "react-router-dom";

export default function Title({id = "", title = "", text = "", link = null, addIdToTitle = false, customClasses = ""}) {
    if (link && typeof link === "string") {
        return (
            <div className={`title ${customClasses}`}>
                <Link to={link}>
                    <span>
                        <strong>{ `${translate(title)}${addIdToTitle ? ` ${id}- ` : ""}` }</strong>
                        <span>{ translate(text) }</span>
                    </span>
                </Link>
            </div>
        );
    }

    return (
        <div className={`title ${customClasses}`}>
            <span>
                <strong>{ `${translate(title)}${addIdToTitle ? ` ${id}- ` : ""}` }</strong>
                <span>{ translate(text) }</span>
            </span>
        </div>
    );
}
