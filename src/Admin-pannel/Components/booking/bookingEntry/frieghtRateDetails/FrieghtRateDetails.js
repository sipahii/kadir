import { Link } from "react-router-dom"

function FrieghtRateDetails() {
    return (
        <>
            <form action="">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cod-containt mb-3">
                            <h2 className="mb-0 h6 mb-0-0">Freight & Rate Details</h2>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="cod-form">
                            <div className="mb-3 d-flex mainn">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Freight On</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Weight</option>
                                    <option value={1}>Height</option>
                                    <option value={1}>Width</option>
                                </select>
                            </div>
                            <div className="mb-3 d-flex mainn">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Contract Rate</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3 d-flex mainn">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Allow Spots Rate</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3 d-flex mainn">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Freight</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cod-form">
                            <div className="mb-3 d-flex mainn">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Invoice No</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3 d-flex mainn">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Invoice Date</label>
                                <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3 d-flex mainn">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Invoice Value</label>
                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3 d-flex mainn">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Fov Charge</label>
                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>

                        </div>
                    </div>


                    <div className="col-lg-2  ">
                        <label htmlFor="exampleInputEmail1 " className="form-label mr-3"></label>
                        <a class="btn btn-circle btn-info" href="/admin/roles/create">
                            <span>Add Invoice</span>
                        </a>

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
                    <div className=" text-md-right text-md-right-2 mt-2">

                        <a class="btn btn-circle btn-info btn-info-2" href="/admin/roles/create">
                            <span>Get Volumetic</span>
                        </a>

                    </div>
                </table>
            </form>
        </>
    )
}
export default FrieghtRateDetails