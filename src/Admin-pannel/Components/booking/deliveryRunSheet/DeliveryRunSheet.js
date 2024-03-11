
function DeliveryRunSheet() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Delivery Run Sheet</h1>
                            </div>
                            {/* <div className="col-md-6 text-md-right">
                                <Link to="/admin/roles/create" className="btn btn-circle btn-info">
                                    <span>Add New Role</span>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6">Delivery Run Sheet</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="cox-table">
                                        <form>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Branch</label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>KOLKATA</option>
                                                    <option value={1}>DELEHI</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Delivery Trip Sheet</label>
                                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Mood Type</label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>Surface</option>
                                                    <option value={1}>DELEHI</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Vendor</label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>Expan Demo</option>
                                                    <option value={1}>DELEHI</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Mode Type</label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>Airways</option>
                                                    <option value={1}>DELEHI</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Vandor</label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>Expan Demo</option>
                                                    <option value={1}>DELEHI</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Driver Name</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Start Reading</label>
                                                <input type="test" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">AWB No</label>
                                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Pieces</label>
                                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                        </form>

                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="cox-table">
                                        <form>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Date</label>
                                                <input type="date" className="form-control mr-5" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Time</label>
                                                <input type="time" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Delivery Boy</label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>Ashraf</option>
                                                    <option value={1}>Junaid</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Vehicle No</label>
                                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Route</label>
                                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Driver Mobile</label>
                                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">End Reading</label>
                                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Weight</label>
                                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Description</label>
                                                <textarea id="w3review" name="w3review" rows={4} cols={100} defaultValue={"write"} />
                                            </div>

                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3">
                                    <label htmlFor="exampleInputEmail1 " className="form-label mr-3"></label>
                                    <a class="btn  btn-info" href="/admin/roles/create">
                                        <span>Save</span>
                                    </a>

                                </div>
                            </div>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th class="table-secondary" scope="col">S No</th>
                                        <th class="table-secondary" scope="col">Awb No</th>
                                        <th class="table-secondary" scope="col">Date</th>
                                        <th class="table-secondary" scope="col">Origin</th>
                                        <th class="table-secondary" scope="col">Destination</th>
                                        <th class="table-secondary" scope="col">Consignee</th>
                                        <th class="table-secondary" scope="col">Pieces</th>
                                        <th class="table-secondary" scope="col">Actual Weight</th>
                                        <th class="table-secondary" scope="col">Charge Weight</th>
                                        <th class="table-secondary" scope="col">COD Amt</th>
                                        <th class="table-secondary" scope="col">To Pay Amt</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>abcd12345efgg</td>
                                        <td>abc</td>
                                        <td>def</td>
                                        <td>nfcdef</td>
                                        <td>1123</td>
                                        <td>987278748</td>
                                        <td>
                                            0000
                                        </td>
                                        <td>
                                            0000
                                        </td>
                                        <td>
                                            00
                                        </td>
                                        <td>
                                            000
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>abcd12345efgg</td>
                                        <td>abc</td>
                                        <td>def</td>
                                        <td>nfcdef</td>
                                        <td>1123</td>
                                        <td>987278748</td>
                                        <td>
                                            0000
                                        </td>
                                        <td>
                                            0000
                                        </td>
                                        <td>
                                            00
                                        </td>
                                        <td>
                                            000
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
            </div>
        </>
    )
}
export default DeliveryRunSheet