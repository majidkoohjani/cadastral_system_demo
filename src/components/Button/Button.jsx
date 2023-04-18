import "./Button.scss";

export default function Button({children = null, type = "default", customClass = ""}) {

    const onClickHandler = (event) => {
        console.log(event.target);
    }

    return (
        <button className={`button button-${type} ${customClass}`} onClick={onClickHandler}>
            { children ?? "No text for button" }
        </button>
    );
}
