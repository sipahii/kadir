import React, { useState } from 'react';
import { BsFillCreditCard2FrontFill } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SellGiftCard() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <li>
                <button className='g-card-btn' onClick={handleShow}>
                    <BsFillCreditCard2FrontFill className='me-1' />
                    Sell Gift Card
                </button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>SELL GIFT CARD</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Please fill in the information below. The field labels marked with * are required input fields.</p>

                        <div className="col-lg-6 mx-auto">
                            <div className="card">
                                <form className="form-horizontal" id="create-course-form">
                                    <div className="card-body">

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="first name">Card No *</label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="Card No*" name="" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="first name">Value *</label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="Value *" name="" className="form-control" required />
                                            </div>
                                        </div>


                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="mobile">Price *</label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="Price *" name="" className="form-control" required />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="password">Customer</label>
                                            <div className="col-sm-9">
                                                <select className="form-select" aria-label="Default select example">
                                                    <option value={2}>Two</option>
                                                    <option value={3}>Three</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="password">Expiry Date</label>
                                            <div className="col-sm-9">
                                                <input type="date" placeholder="Expiry Date*" name="" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Sell Gift Card
                        </Button>
                    </Modal.Footer>
                </Modal>
            </li>
        </>
    )
}

export default SellGiftCard