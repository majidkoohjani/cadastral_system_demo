import { useEffect, useState } from "react";
import Storage from "../../core/helpers/Storage";
import { translate } from "../../core/helpers/Translator";
import "./AdminPanel.scss";
import eventBus from "../../core/helpers/EventBus";
import Admin from "../../core/api/Admin";
import { parseDateTime } from "../../core/helpers/DateTime";
import { toast } from "react-toastify";
import { CloseButton, Modal } from "react-bootstrap";

export default function AdminPanel() {
    const language = Storage.getLanguage();
    document.title = `${translate("admin-title")} | ${translate("site-main-title")}`;

    const [usersList, setUsersList] = useState([]);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [operationToConfirm, setOperationToConfirm] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const closeConfirmModal = () => {
        setOperationToConfirm(null);
        setShowConfirmModal(false);
    }

    const resetDB = () => {
        eventBus.dispatchEvent("enablePreloader");
        Admin.resetDb().then(response => {
            let {message = null, status} = response;

            if (status === 200) {
                toast.success(message ?? translate("updated-successfully"));
            }
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            eventBus.dispatchEvent("disablePreloader");
            closeConfirmModal();
            fetchUsers();
        });
    }

    const resetPasswords = () => {
        eventBus.dispatchEvent("enablePreloader");
        Admin.resetAllPasswords().then(response => {
            let {message = null, status} = response;

            if (status === 200) {
                toast.success(message ?? translate("updated-successfully"));
            }
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            eventBus.dispatchEvent("disablePreloader");
            closeConfirmModal();
            fetchUsers();
        });
    }

    const resetPassword = (nc = "") => {
        eventBus.dispatchEvent("enablePreloader");
        Admin.resetUserPassword(nc).then(response => {
            let {message = null, status} = response;

            if (status === 200) {
                toast.success(message ?? translate("updated-successfully"));
            }
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            eventBus.dispatchEvent("disablePreloader");
            closeConfirmModal();
            fetchUsers();
        });
    }

    const fetchUsers = () => {
        eventBus.dispatchEvent("enablePreloader");
        Admin.getUsers().then(response => {
            let {data} = response;

            setUsersList([...data]);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            eventBus.dispatchEvent("disablePreloader");
            closeConfirmModal();
        });
    }

    const confirmModalConfig = (operation = "", data) => {
        switch(operation.toLocaleLowerCase()) {
            case "oup":
                setOperationToConfirm(() => () => resetPassword(data));
                setShowConfirmModal(true);
                break;
            case "aup":
                setOperationToConfirm(() => () => resetPasswords());
                setShowConfirmModal(true);
                break;
            case "adb":
                setOperationToConfirm(() => () => resetDB());
                setShowConfirmModal(true);
                break;
            default:
                setShowConfirmModal(false);
                setOperationToConfirm(null);
                break;
        }
    }

    return (
        <div className="admin-panel">
            <fieldset className="admin-panel__all">
                <legend>{ translate("operations") }</legend>
                <div className="action_buttons">
                    <button className="btn btn-red" onClick={() => confirmModalConfig("aup")}>{ translate("change-all-password") }</button>
                    <button className="btn btn-red" onClick={() => confirmModalConfig("adb")}>{ translate("reset-db") }</button>
                </div>
            </fieldset>
            <fieldset className="admin-panel__users-table">
                <legend>{ translate("users-list") }</legend>
                <table>
                    <thead>
                        <tr>
                            <th>{ translate("user-nc") }</th>
                            <th>{ translate("username") }</th>
                            <th>{ translate("last-login") }</th>
                            <th>{ translate("password") }</th>
                            <th>{ translate("operations") }</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usersList.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{ user.national_code }</td>
                                        <td>{ user.name }</td>
                                        <td>{ parseDateTime(user.last_login) }</td>
                                        <td>{ user.show_password }</td>
                                        <td>
                                            <button className="btn btn-cyan" onClick={() => confirmModalConfig("oup", user.national_code)}>{ translate("change-password") }</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </fieldset>
            <Modal show={showConfirmModal} keyboard centered onHide={closeConfirmModal} className={`${language === "fa" ? "rtl" : "ltr"}`}>
                <Modal.Header>
                    <Modal.Title className="text-danger">
                    { translate("reset-data-warning") }
                    </Modal.Title>
                    <CloseButton className={`${language === "fa" ? "margin-right-full" : "margin-left-full"}`} onClick={closeConfirmModal} />
                </Modal.Header>
                <Modal.Body>
                    <h6>{ translate("reset-message") }</h6>
                </Modal.Body>
                <Modal.Footer className={`${language === "fa" ? "ltr" : "rtl"}`}>
                    <button className="btn btn-red" onClick={operationToConfirm}>{ translate("apply") }</button>
                    <button className="btn btn-green" onClick={closeConfirmModal}>{ translate("cancel") }</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
