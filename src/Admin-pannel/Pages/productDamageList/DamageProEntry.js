import { useState } from "react"
import { Table } from "react-bootstrap"

function DamageProEntry() {
    const [state, setState] = useState({
        product_id: "643ae056f4003ea059516bc9",
        variant_id: "643adf7f58f7e576427fb101",
        pickupPoints: "",
        sku: "1001",
        qty: 20,
        staff: "642177b99fd9c29aab59d245",
        active: true
    })
    return <>
        <div className="aiz-main-content">
            <div className="px-15px px-lg-25px">
                <div className="card" style={{ padding: "10px" }}>
                    <h5>Damage Product Entry</h5>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="basic-url" className="form-label">Product Damage Code</label>
                                <input type="text" className="form-control" disabled value={'D0001L'} />
                            </div>
                            <div className="col-3">
                                <div className="mb-3">
                                    <label htmlFor="basic-url" className="form-label">Damage product</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Customer One</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="basic-url" className="form-label">Damage Rate</label>
                                <input type="text" className="form-control" disabled value={'0.30'} />
                            </div>
                            <div className="col-3">
                                <label htmlFor="basic-url" className="form-label">Damage Qty</label>
                                <input type="number" className="form-control" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="basic-url" className="form-label">Damage Total</label>
                                <input type="number" className="form-control" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="basic-url" className="form-label">Damage Note..</label>
                                <input type="number" className="form-control" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="basic-url" className="form-label">Damage Date</label>
                                <input type="date" className="form-control" />
                            </div>
                        </div>
                        <button type="button" class="btn btn-info" style={{ margin: "10px 0" }}>Save</button>
                    </div>
                </div>
                <div className="card" style={{ padding: "10px" }}>
                    <h5>Product Damage List</h5>

                    <div style={{ margin: "10px 0", display: "flex", justifyContent: "end" }}>
                        <input style={{ width: '250px' }} placeholder="Filter" className="form-control" />
                        <button type="button" style={{ margin: "0 10px" }} className="btn btn-info">Filter</button>
                    </div>

                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>SL Entry Date-Time</th>
                                <th>Damage Code</th>
                                <th>Product Code</th>
                                <th>Product Name</th>
                                <th>Damage Rate</th>
                                <th>Damage Quantity</th>
                                <th>Damage Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>1</td>
                                <td>12/3/2022</td>
                                <td>OPKN</td>
                                <td>
                                    UJKI
                                </td>
                                <td>Acita</td>
                                <td>300</td>
                                <td>2</td>
                                <td>600</td>
                                <td>##</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>

        </div>

    </>
}
export default DamageProEntry