import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import img404 from "../../assets/images/404.png";
import "./Error404.scss";

export default function Error404() {
    const navigate = useNavigate();

    const onReturnClick = () => {
        navigate(-1);
    }

    return (
        <div className="error-container">
            <img src={img404} alt="404" />
            <h2>یا پیدا نشد یا در حال ساخت است !!!</h2>
            <Button type="primary" onClick={onReturnClick}>بازگشت</Button>
        </div>
    );
}