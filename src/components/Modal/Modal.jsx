import "./Modal.scss";

export default function Modal(props) {
    const {id = "", title = "", children = null} = props;

    return <>
        <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id={`${id}Label`}>{ title }</h1>
                        <button type="button" className="btn-close ms-0 me-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        { children ?? "" }
                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Understood</button>
                    </div> */}
                </div>
            </div>
        </div>
    </>;
}