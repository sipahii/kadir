import { Link } from "react-router-dom"

function TaxableFreight() {
    return (
        <>
            <form action="">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cod-containt mb-3">
                            <h2 className="mb-0 h6 mb-0-0">Taxable Frieght</h2>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="cod-form">
                            <div className="row">
                                <div className="col-lg-3 mb-3 d-flex mainn">
                                    <div>
                                        <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Other Charges</label>
                                        <select className="form-select mr-2" aria-label="Default select example">
                                            <option selected>Weight</option>
                                            <option value={1}>Height</option>
                                            <option value={1}>Width</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Service Tax</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>

                                </div>
                                <div className="col-lg-3 mb-3 d-flex mainn">
                                    <div>
                                        <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Charges On</label>
                                        <select className="form-select mr-2" aria-label="Default select example">
                                            <option selected>Weight</option>
                                            <option value={1}>Height</option>
                                            <option value={1}>Width</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Rate</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>

                                </div>
                                <div className="col-lg-3 mb-3 d-flex mainn">
                                    <div>
                                        <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Service Tax</label>
                                        <input type="text" className="form-control mr-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div>
                                        <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Amount</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>

                                </div>
                                <div className="col-lg-3  mt-4">
                                    <label htmlFor="exampleInputEmail1 " className="form-label mr-3"></label>
                                    <a class="btn btn-circle btn-info" href="/admin/roles/create">
                                        <span>Add </span>
                                    </a>

                                </div>

                            </div>
                        </div>
                    </div>


                </div>

                <table className="table mt-3">
                    <thead>
                        <tr>
                            <th class="table-secondary" scope="col">S.No</th>
                            <th class="table-secondary" scope="col">AwbNo</th>
                            <th class="table-secondary" scope="col">Invoice No</th>
                            <th class="table-secondary" scope="col">Invoice Date</th>
                            <th class="table-secondary" scope="col">Invoice Value</th>

                            <th class="table-secondary" scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>abcd12345efgg</td>
                            <td>abc</td>
                            <td>nfcdef</td>
                            <td>1123</td>


                            <td>
                                <Link to="#">Delete</Link>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>abcd12345efg</td>
                            <td>abcedde</td>
                            <td>defewd</td>

                            <td>11e23</td>
                            <td>
                                <Link to="#">Delete</Link>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="cod-form">
                            <div className="mb-3 d-flex mainn">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Taxable Amount</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3 d-flex mainn">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Total Service</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cod-form">
                            <div className="mb-3 d-flex mainn">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Non Taxable Amount</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3 d-flex mainn">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Total Other Charge Amount</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cod-form d-flex">
                            <div className="mb-3  mainn">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">KCC %</label>


                            </div>
                            <div className="mb-3 d-flex mainn">
                                <input type="text" className="form-control mr-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                        </div>
                        <div className="cod-form d-flex">
                            <div className="mb-3  mainn">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">SHE %</label>


                            </div>
                            <div className="mb-3 d-flex mainn">
                                <input type="text" className="form-control mr-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cod-form d-flex">
                            <div className="mb-3  mainn">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Service Tax %</label>


                            </div>
                            <div className="mb-3 d-flex mainn">
                                <input type="text" className="form-control mr-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                        </div>
                        <div className="cod-form d-flex">
                            <div className="mb-3  mainn">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Discont %</label>


                            </div>
                            <div className="mb-3 d-flex mainn">
                                <input type="text" className="form-control mr-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                        </div>
                        <div className="cod-form d-flex">
                            <div className="mb-3  mainn">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Fuel Surcharges %</label>


                            </div>
                            <div className="mb-3 d-flex mainn">
                                <input type="text" className="form-control mr-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-3 d-flex mainn">
                            <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Total Amount</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="mb-3 d-flex mainn">
                            <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Remark</label>
                            <textarea id="w3review" name="w3review" rows={4} cols={100} defaultValue={"Please Deliver on basis.Thanks"} />


                        </div>
                    </div>
                    <div className="col-lg-4  mt-4">
                        <label htmlFor="exampleInputEmail1 " className="form-label mr-3"></label>
                        <a class="btn btn-circle btn-info mr-3" href="/admin/roles/create">
                            <span>Clear</span>
                        </a>
                        <a class="btn btn-circle btn-info" href="/admin/roles/create">
                            <span>Update</span>
                        </a>

                    </div>

                </div>
            </form>
        </>
    )
}
export default TaxableFreight