import React from 'react'
import Modal from 'react-bootstrap/Modal';
function InventoryEdit({ handleButton }) {
    return <Modal.Dialog onHide={handleButton} closeButton>
        <Modal.Header>
            <Modal.Title>
                <div className='d-flex align-items-center justify-content-between w-100'>
                    <div>
                        <span className='fs-6'>show</span>
                        <div>
                            <select className="form-select" aria-label="Default select example">
                                <option>---select---</option>
                                <option value="1">10</option>
                                <option value="1">20</option>
                                <option value="1">30</option>
                            </select>
                        </div>
                        <span className='fs-6'>Entries</span>
                    </div>
                </div>

            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div className="card">

                <div className="card-body">

                    <section className="form-section">
                        <div className="">
                            {/* <form action=""> */}
                            <table className="table table-3">
                                <thead>
                                    <tr>
                                        <th class="table-secondary" scope="col">Challan No</th>
                                        <th class="table-secondary" scope="col">Po No</th>
                                        <th class="table-secondary" scope="col">Date </th>
                                        <th class="table-secondary" scope="col">Service Tag</th>
                                        <th class="table-secondary" scope="col">Type</th>
                                        <th class="table-secondary" scope="col">Order Type</th>
                                        <th class="table-secondary" scope="col">Buyer/Seller Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2022216594590</td>
                                        <td>-</td>
                                        <td>06/aug/2022</td>
                                        <td>Open Inventory</td>
                                        <td></td>
                                        <td>Normal</td>
                                        <td>Vargo Farama PVT LTD</td>
                                    </tr>
                                    <tr>
                                        <td>2022216594590</td>
                                        <td>-</td>
                                        <td>06/aug/2022</td>
                                        <td>Open Inventory</td>
                                        <td></td>
                                        <td>Normal</td>
                                        <td>Vargo Farama PVT LTD</td>
                                    </tr>
                                    <tr>
                                        <td>2022216594590</td>
                                        <td>-</td>
                                        <td>06/aug/2022</td>
                                        <td>Open Inventory</td>
                                        <td></td>
                                        <td>Normal</td>
                                        <td>Vargo Farama PVT LTD</td>
                                    </tr>
                                </tbody>

                            </table>


                            {/* </form> */}
                        </div>
                    </section>
                    <div className="aiz-pagination">
                    </div>
                </div>
            </div>
        </Modal.Body>

        <div className="col-lg-8 mb-3 ms-4">
            <button className="btn  rounded-2 btn-danger" onClick={handleButton}>Close</button>
        </div>
    </Modal.Dialog>
}

export default InventoryEdit
