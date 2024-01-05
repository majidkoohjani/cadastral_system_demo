import { useEffect, useState } from "react";
import * as bootstrap from "bootstrap";
import Storage from "../../core/helpers/Storage";
import "./Modal.scss";

export default function Modal(props) {
    const language = Storage.getLanguage();
    const {id = "", title = "", show = false, onCloseModal = () => {}, children = null} = props;
    const [isOpen, setIsOpen] = useState(show ?? false);

    useEffect(() => {
        show && openModal();
    }, [show]);

    const openModal = () => {
        setIsOpen(true);
        const myModal = new bootstrap.Modal(`#${id}`, {
            keyboard: false
        });
        myModal.show();
    }

    const closeModal = () => {
        setIsOpen(false);
        onCloseModal();
    }

    return (
        <div className={`modal fade`} id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id={`${id}Label`}>{ title }</h1>
                        <button type="button" className={`btn-close ${language === "fa" ? "ms-0 me-auto" : "ms-auto me-0"}`} data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        { children ?? "" }
                    </div>
                </div>
            </div>
        </div>
    );
}