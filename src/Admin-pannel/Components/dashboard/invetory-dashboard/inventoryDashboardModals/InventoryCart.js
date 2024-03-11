import React from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
function InventoryCart({ cartButtonHandle }) {
    return <Modal.Dialog onHide={cartButtonHandle} closeButton>
        <Modal.Header>
            <Modal.Title>
                <div className=''>
                    <div className='m-2'>
                        <strong className='fs-6'>Cart items</strong>
                    </div>
                    <div className='d-flex'>
                        <div className='m-2'>
                            <Button className='fs-6'>Lease</Button>
                        </div>
                        <div className='m-2'>
                            <Button className='fs-6'>Cart Empty</Button>
                        </div>
                    </div>
                </div>
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div className="card">
                <section className="form-section">


                    <div className="card-body">

                        <section className="form-section">
                            <div className="row">
                                {/* <form action=""> */}
                                <div className="col-lg-6">
                                    <label htmlFor='Asset Model No'>Type</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option>---select---</option>
                                        <option value="1">10</option>
                                        <option value="1">20</option>
                                        <option value="1">30</option>
                                    </select>
                                </div>
                                <div className="col-lg-6">
                                    <div>
                                        <label htmlFor='Asset Model No'>Chalan No</label>
                                        <input type="text" className="form-control" id="exampleInputAssetModelNo" aria-describedby="assetModelNo" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor='Asset Model No'>Customer</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option>---select---</option>
                                        <option value="1">10</option>
                                        <option value="1">20</option>
                                        <option value="1">30</option>
                                    </select>
                                </div>
                                <div className="col-lg-6">
                                    <div>
                                        <label htmlFor='Asset Model No'>Location</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option></option>
                                            <option value="1">Mumbai</option>
                                            <option value="1">Pune</option>
                                            <option value="1">Delhi</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor='Asset Model No'>Lease Start Date</label>
                                    <input type="date" className="form-control" id="exampleInputAssetModelNo" aria-describedby="assetModelNo" />
                                </div>
                                <div className="col-lg-6">
                                    <div>
                                        <label htmlFor='Asset Model No'>Lease End Date</label>
                                        <input type="date" className="form-control" id="exampleInputAssetModelNo" aria-describedby="assetModelNo" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor='Asset Model No'>Po NO</label>
                                    <input type="text" className="form-control" id="exampleInputAssetModelNo" aria-describedby="assetModelNo" />
                                </div>
                                <div className="col-lg-6">
                                    <div>
                                        <label htmlFor='Asset Model No'>Reason</label>
                                        <textarea type="text" className="form-control" id="exampleInputAssetModelNo" aria-describedby="assetModelNo" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor='Asset Model No'>Dispatch Thorough</label>
                                    <input type="text" className="form-control" id="exampleInputAssetModelNo" aria-describedby="assetModelNo" />
                                </div>
                                <div className="col-lg-6">
                                    <div>
                                        <label htmlFor='Asset Model No'>Document Sent Through</label>
                                        <input type="text" className="form-control" id="exampleInputAssetModelNo" aria-describedby="assetModelNo" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div>
                                        <label htmlFor='Asset Model No'>No.Cases</label>
                                        <input type="text" className="form-control" id="exampleInputAssetModelNo" aria-describedby="assetModelNo" />
                                    </div>
                                </div>
                                {/* </form> */}
                            </div>
                        </section>

                        <div className="aiz-pagination">
                        </div>
                    </div>
                </section>
                <div className="aiz-pagination">
                </div>
            </div>
        </Modal.Body>

        <div className="col-lg-8 mb-3 ms-4">
            <button className="btn  rounded-2 btn-danger" onClick={cartButtonHandle}>Close</button>
        </div>
    </Modal.Dialog>
}

export default InventoryCart
