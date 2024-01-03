import { Link } from "react-router-dom"

function CodContaint() {
    return (
        <>
        <form action="">
            <div className="row">
                <div className="col-lg-12">
                    <div className="cod-containt mb-3">
                        <h2 className="mb-0 h6 mb-0-0">COD Contents</h2>
                    </div>
                </div>
                
                    <div className="col-lg-6">
                        <div className="cod-form">
                            <div className="mb-3 d-flex mainn">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Favouring</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3 d-flex mainn">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Letter</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3 d-flex mainn">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Mode</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Case</option>
                                    <option value={1}>Paytm</option>
                                    <option value={1}>Google Pay</option>
                                </select>
                            </div>
                            <div className="mb-3 d-flex mainn">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Reference</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cod-form">
                            <div className="mb-3 d-flex mainn">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Amount</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3 d-flex mainn">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Letter Date</label>
                                <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3 d-flex mainn">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Mode</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>--select--</option>
                                    <option value={1}>Paytm</option>
                                    <option value={1}>Google Pay</option>
                                </select>
                            </div>
                            <div className="mb-3 d-flex mainn">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Pvt Mark</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="mb-3 mainn">
                                    <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Contents</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>--select--</option>
                                        <option value={1}>Paytm</option>
                                        <option value={1}>Google Pay</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="mb-3 mainn">
                                    <label htmlFor="exampleInputEmail1 " className="form-label mr-3">packing</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>--select--</option>
                                        <option value={1}>Paytm</option>
                                        <option value={1}>Google Pay</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="mb-3 mainn">
                                    <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Total Pices</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="mb-3 mainn">
                            <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Divider</label>
                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="mb-3 mainn">
                            <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Lenght</label>
                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="mb-3 mainn">
                            <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Width</label>
                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="mb-3 mainn">
                            <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Height</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="mb-3 mainn">
                            <label htmlFor="exampleInputEmail1 " className="form-label mr-3">PCS</label>
                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                    </div>
                    <div className="col-lg-2 text-md-right mt-4">
                        <label htmlFor="exampleInputEmail1 " className="form-label mr-3"></label>
                        <a class="btn btn-circle btn-info" href="/admin/roles/create">
                            <span>Add</span>
                        </a>

                    </div>



                    <table className="table">
                        <thead>
                            <tr>
                                <th class="table-secondary" scope="col">S.No</th>
                                <th class="table-secondary" scope="col">AwbNo</th>
                                <th class="table-secondary" scope="col">Lenght</th>
                                <th class="table-secondary" scope="col">Widht</th>
                                <th class="table-secondary" scope="col">Height</th>
                                <th class="table-secondary" scope="col">Pieces</th>
                                <th class="table-secondary" scope="col">Delete</th>
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


                                <td>
                                    <Link to="#">Delete</Link>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>abcd12345efg</td>
                                <td>abcedde</td>
                                <td>defewd</td>
                                <td>nfcdefewd</td>
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

                    <div className="row">
                        <div className="col lg-3">
                            <div className="mb-3 mainn d-flex">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Volumetic Weight</label>
                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                        </div>
                        <div className="col lg-3 ">
                            <div className="mb-3 mainn d-flex">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Actual Weight</label>
                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                        </div>
                        <div className="col lg-3 ">
                            <div className="mb-3 mainn d-flex">
                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Chargable Weight</label>
                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className=" text-md-right text-md-right-2 mt-2">

                                <a class="btn btn-circle btn-info btn-info-2" href="/admin/roles/create">
                                    <span>Fetch Data</span>
                                </a>

                            </div>
                        </div>
                    </div>
                    
            </div>
            </form>

        </>
    )
}
export default CodContaint