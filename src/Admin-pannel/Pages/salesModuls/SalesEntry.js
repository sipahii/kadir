import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"

function SalesEntry() {

    const [data, setData] = useState(null)

    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/productStocks`)
        setData(res.data)
    }

    useEffect(() => {
        // getData()
    }, [])

    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
            <div className="card" style={{ padding: "10px" }}>
                <h5>Sales Entry</h5>

                <div style={{ margin: "10px 0", display: "flex", justifyContent: "end" }}>
                    <input style={{ width: '250px' }} placeholder="Filter" className="form-control" />
                    <button type="button" style={{ margin: "0 10px" }} className="btn btn-info">Filter</button>
                </div>

                <div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-3">
                                <div className="mb-3">
                                    <label htmlFor="basic-url" className="form-label">Item Cart / Product cart information</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Search Item</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mb-3">
                                    <label htmlFor="basic-url" className="form-label">Search Customer</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Customer One</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="basic-url" className="form-label">Institution Name</label>
                                <input type="text" className="form-control" placeholder="Institution Name" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="basic-url" className="form-label">Previous Due</label>
                                <input type="text" className="form-control" placeholder="Due (1000)" />
                            </div>
                        </div>
                    </div>


                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-2">
                                <label htmlFor="basic-url" className="form-label">QTY</label>
                                <input type="text" className="form-control" placeholder="QTY" />
                            </div>
                            <div className="col-2">
                                <label htmlFor="basic-url" className="form-label">Rate</label>
                                <input type="text" className="form-control" placeholder="Rate" />
                            </div>
                            <div className="col-2">
                                <label htmlFor="basic-url" className="form-label">Contact No</label>
                                <input type="text" className="form-control" placeholder="Contact No" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="basic-url" className="form-label">Customer Address</label>
                                <input type="text" className="form-control" placeholder="Customer Address" />
                            </div>
                            <div className="col-2">
                                <label htmlFor="basic-url" className="form-label">Voucher No</label>
                                <input type="text" className="form-control" placeholder="S2" />
                            </div>
                            <div className="col-2">
                                <label htmlFor="basic-url" className="form-label">Entry Date</label>
                                <input type="Date" className="form-control" />
                            </div>
                            <div className="col-2">
                                <label htmlFor="basic-url" className="form-label">Total</label>
                                <input type="text" className="form-control" placeholder="0.00" />
                            </div>



                            <div className="col" style={{ margin: "10px 0" }}>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Item Name</th>
                                            <th scope="col">Serials</th>
                                            <th scope="col">QTY</th>
                                            <th scope="col">Rate (per)</th>
                                            <th scope="col">Total</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>



                        </div>
                    </div>


                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <div style={{ display: "flex" }}>
                                    <div >
                                        <label htmlFor="basic-url" className="form-label">Received into Account</label>
                                        <input type="text" className="form-control" placeholder="Received into Account" />
                                    </div>
                                    <div style={{ margin: "0 10px" }}>
                                        <label htmlFor="basic-url" className="form-label">Amount</label>
                                        <input type="text" className="form-control" placeholder='Amount' />
                                    </div>
                                    <button style={{ marginTop: "28px", height: "41px" }} type="button" className="btn btn-success">Add</button>
                                </div>


                                <table className="table" style={{ margin: "10px 0" }}>
                                    <thead>
                                        <tr>
                                            <th scope="col">SL Received Into Account</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1Lk</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div style={{ margin: "0 10px" }}>
                                    <label htmlFor="basic-url" className="form-label">EMI For Month</label>
                                    <input type="text" className="form-control" placeholder='EMI For Month' />
                                </div>

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">EMI Number</th>
                                            <th scope="col">From Date</th>
                                            <th scope="col">Last Pay Date</th>
                                            <th scope="col">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1LT</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>


                            <div className="col-6">
                                <div>
                                    <h5>Discount and Vat Method</h5>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            On Total
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Individual Item
                                        </label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                        <label class="form-check-label" for="inlineCheckbox1">Is Payment EMI System</label>
                                    </div>
                                </div>
                                <div className="row" style={{ margin: "10px 0" }}>
                                    <div className="col-6">
                                        <label htmlFor="basic-url" className="form-label">Discount (BDT)</label>
                                        <input type="text" className="form-control" placeholder='Discount' />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="basic-url" className="form-label">Discount %</label>
                                        <input type="text" className="form-control" placeholder='Discount %' />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="basic-url" className="form-label">VAT (BDT) </label>
                                        <input type="text" className="form-control" placeholder='VAT (BDT)' />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="basic-url" className="form-label">VAT %</label>
                                        <input type="text" className="form-control" placeholder='VAT %' />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="basic-url" className="form-label">Transport Cost</label>
                                        <input type="text" className="form-control" placeholder='Transport Cost' />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="basic-url" className="form-label">Grant Total</label>
                                        <input type="text" className="form-control" placeholder='Grant Total' />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="basic-url" className="form-label">Paid Amount</label>
                                        <input type="text" className="form-control" placeholder='Paid Amount' />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="basic-url" className="form-label">Due Amount</label>
                                        <input type="text" className="form-control" placeholder='Due Amount' />
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <button type="button" style={{margin:"0 10px"}} className="btn btn-success">Submit</button>
                    <button type="button" className="btn btn-info">Reset</button>

                </div>
            </div>

        </div>

    </div>
}
export default SalesEntry