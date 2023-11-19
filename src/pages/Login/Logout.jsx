import eventBus from "../../core/helpers/EventBus";
import Storage from "../../core/helpers/Storage";

export default function Logout() {
    eventBus.dispatchEvent("enablePreloader");
    
    Storage.deleteLoginInfo();

    window.location.href = "/login";
}