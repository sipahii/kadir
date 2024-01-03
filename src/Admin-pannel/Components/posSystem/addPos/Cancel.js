import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Cancel() {

    const [smShow, setSmShow] = useState(false);

    return (
        <>
            <td className='bg-red' onClick={() => setSmShow(true)}>
                <button>Cancel</button>
            </td>
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        <p>Are you sure?</p>
                    </Modal.Title>

                </Modal.Header>

                <Modal.Footer>
                    <Button variant="danger" onClick={() => setSmShow(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => setSmShow(false)}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Cancel