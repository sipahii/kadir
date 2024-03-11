import { Link } from "react-router-dom"

function MeniFestList() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Manifest List</h1>
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
                            <h5 className="mb-0 h6">Manifest List</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="cox-table">
                                        <form>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Form Date</label>
                                                <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Manifest No</label>
                                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">User</label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>--Select--</option>
                                                    <option value={1}>DELEHI</option>
                                                </select>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="cox-table">
                                        <form>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">To Date</label>
                                                <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Vendor</label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>--Select--</option>
                                                    <option value={1}>type 2</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Company</label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>--Select--</option>
                                                    <option value={1}>type 2</option>
                                                </select>
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
                                        <th class="table-secondary" scope="col">Manifest No</th>
                                        <th class="table-secondary" scope="col">date</th>
                                        <th class="table-secondary" scope="col">Vandor Name</th>
                                        <th class="table-secondary" scope="col">Origin</th>
                                        <th class="table-secondary" scope="col">To Station</th>
                                        <th class="table-secondary" scope="col">Mode</th>
                                        <th class="table-secondary" scope="col">Print</th>
                                        <th class="table-secondary" scope="col">Edit</th>
                                        <th class="table-secondary" scope="col">Delete</th>
                                        <th class="table-secondary" scope="col">Send Mail</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="table-secondary"><input className="form-control tip" type="text" placeholder="SNo" /></td>
                                        <td class="table-secondary"><input className="form-control tip" type="text" placeholder="Manifest No" /></td>
                                        <td class="table-secondary"><input className="form-control tip" type="text" placeholder="date" /></td>
                                        <td class="table-secondary"><input className="form-control tip" type="text" placeholder="Vandor Name" /></td>
                                        <td class="table-secondary"><input className="form-control tip" type="text" placeholder="Origin" /></td>
                                        <td class="table-secondary"><input className="form-control tip" type="text" placeholder="To Station" /></td>
                                        {/* <td class="table-secondary"><input className="form-control tip" type="text" /></td>
                                        <td class="table-secondary"><input className="form-control tip" type="text" /></td>
                                        <td class="table-secondary"><input className="form-control tip" type="text" /></td>
                                        <td class="table-secondary"></td> */}
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
                                            <Link to="#">Print</Link>
                                        </td>
                                        <td>
                                            <Link to="#">Edit</Link>
                                        </td>
                                        <td>
                                            <Link to="#">Delete</Link>
                                        </td>
                                        <td>
                                            <Link to="#">Send Mail</Link>
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
                                            <Link to="#">Print</Link>
                                        </td>
                                        <td>
                                            <Link to="#">Edit</Link>
                                        </td>
                                        <td>
                                            <Link to="#">Delete</Link>
                                        </td>
                                        <td>
                                            <Link to="#">Send Mail</Link>
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
export default MeniFestList