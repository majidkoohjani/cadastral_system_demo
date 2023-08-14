import { redirect } from "react-router-dom";
import Storage from "../../core/helpers/Storage";

export default function Logout() {
    Storage.deleteLoginInfo();

    return window.location.href = "/login";
}