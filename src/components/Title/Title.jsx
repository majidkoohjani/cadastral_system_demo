import "./Title.scss";

export default function Title({title = "", text = ""}) {
    return (
        <div className="title">
            <span>
                <strong>{ title }</strong>
                <span>{ text }</span>
            </span>
        </div>
    );
}
