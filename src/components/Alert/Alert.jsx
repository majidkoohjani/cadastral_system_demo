import "./Alert.scss";

export default function Alert({text = "", mode = "default", dismissible = false, customClass = ""}) {
    return (
        <div className={`cadastre-alert cadastre-alert-${mode} ${customClass}`}>
            {
                text
            }
        </div>
    );
}
