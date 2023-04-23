import "./Title.scss";
import {Link} from "react-router-dom";

export default function Title({title = "", text = "", link = null, customClasses = ""}) {
    if (link && typeof link === "string") {
        return (
            <div className={`title ${customClasses}`}>
                <Link to={link}>
                    <span>
                        <strong>{ title }</strong>
                        <span>{ text }</span>
                    </span>
                </Link>
            </div>
        );
    }

    return (
        <div className={`title ${customClasses}`}>
            <span>
                <strong>{ title }</strong>
                <span>{ text }</span>
            </span>
        </div>
    );
}
