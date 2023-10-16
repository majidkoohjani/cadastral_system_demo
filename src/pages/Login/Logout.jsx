import Storage from "../../core/helpers/Storage";

export default function Logout() {
    Storage.deleteLoginInfo();

    window.location.href = "/login";
}