import { useEffect, useState } from "react";
import eventBus from "../../core/helpers/EventBus";
import "./PreLoader.scss";

export default function Preloader() {
    const [enable, setEnable] = useState(false);

    useEffect(() => {
        eventBus.on("enablePreloader", () => {
            setEnable(true);
        });

        eventBus.on("disablePreloader", () => {
            setEnable(false);
        });
    });

    return (
        enable && 
        <div className="preloader">
            <div className="loader" />
        </div>
    );
}
