import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Suspend() {

    const [smShow, setSmShow] = useState(false);


    return (
        <>
            <td className='bg-orange me-2' onClick={() => setSmShow(true)} >
                <button>Suspend</button>
            </td>
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        <p>Please add product before suspending the sale. Thank you!</p>
                    </Modal.Title>

                </Modal.Header>

                <Modal.Footer>
                    <Button variant="primary" onClick={() => setSmShow(false)}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Suspend