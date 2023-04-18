import "./Alert.scss";

export default function Alert({text = "", mode = "default", dismissible = false}) {
    return (
        <div className={`alert alert-${mode}`}>
            {
                text
            }
        </div>
    );
}
