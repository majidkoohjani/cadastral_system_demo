import { translate } from "../../core/helpers/Translator";
import "./About.scss";

export default function About() {
    document.title = translate("about-us");

    return (
        <div>About!!!</div>
    );
}
