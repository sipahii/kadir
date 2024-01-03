import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function Subscribers() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6">All Subscribers</h5>
                        </div>
                        <div className="card-body">
                            <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                <thead>
                                    <tr className="footable-header">
                                        <th data-breakpoints="lg" className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Email</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Date</th><th data-breakpoints="lg" className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th></tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                                        <td style={{ display: 'table-cell' }}>
                                            <div className="text-truncate">abarissolution@gmail.com</div>
                                        </td>
                                        <td style={{ display: 'table-cell' }}>16-01-2023</td>
                                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }} onClick={handleShow}>
                                            <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/subscribers/destroy/2" title="Delete">
                                                <i className="las la-trash" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td>
                                        <td style={{ display: 'table-cell' }}>
                                            <div className="text-truncate">admin@example.com</div>
                                        </td>
                                        <td style={{ display: 'table-cell' }}>07-10-2022</td>
                                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }} onClick={handleShow}>
                                            <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/subscribers/destroy/2" title="Delete">
                                                <i className="las la-trash" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>3</td>
                                        <td style={{ display: 'table-cell' }}>
                                            <div className="text-truncate">seoabaris@gmail.com</div>
                                        </td>
                                        <td style={{ display: 'table-cell' }}>06-10-2022</td>
                                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }} onClick={handleShow}>
                                            <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/subscribers/destroy/1" title="Delete">
                                                <i className="las la-trash" />
                                            </a>
                                        </td>
                                    </tr>

                                    <Modal show={show} onHide={handleClose} animation={false} className="subscriber-modal">
                                        <Modal.Header closeButton className="modal-header">
                                            <h4 className="modal-title h6">Delete Confirmation</h4>
                                        </Modal.Header>
                                        <Modal.Body className="modal-body text-center">
                                            <p className="mt-1">Are you sure to delete this?</p>
                                            <button type="button" className="btn btn-link mt-2" onClick={handleClose}>Cancel</button>
                                            <a href="https://mmslfashions.in/admin/subscribers/destroy/3" id="delete-link" className="btn btn-primary mt-2">Delete</a>
                                        </Modal.Body>
                                    </Modal>
                                </tbody>
                            </table>
                            <div className="clearfix">
                                <div className="pull-right">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>









            {/* <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title h6">Delete Confirmation</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true" />
                </div>
                <div className="modal-body text-center">
                    <p className="mt-1">Are you sure to delete this?</p>
                    <button type="button" className="btn btn-link mt-2" data-dismiss="modal">Cancel</button>
                    <a href="https://mmslfashions.in/admin/subscribers/destroy/2" id="delete-link" className="btn btn-primary mt-2">Delete</a>
                </div>
            </div> */}

        </>
    )
}
export default Subscribers;