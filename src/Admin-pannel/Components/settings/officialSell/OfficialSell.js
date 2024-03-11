import { Button } from "bootstrap"
import { useState } from "react";
import { Modal } from "react-bootstrap"

function OfficialSell() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
            <div className="btn-wrapper">
                <button type="button" className="btn btn-primary" onClick={handleShow}>
                    POD Entry
                </button>
                <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don not even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
            </div>
            
        </>
    )
}
export default OfficialSell