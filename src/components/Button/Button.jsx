import "./Button.scss";

export default function Button({children = null, type = "default", customClass = "", onClick = () => {}}) {

    const onClickHandler = (event) => {
        onClick();
    }

    return (
        <button className={`button button-${type} ${customClass}`} onClick={onClickHandler}>
            { children ?? "No text for button" }
        </button>
    );
}
