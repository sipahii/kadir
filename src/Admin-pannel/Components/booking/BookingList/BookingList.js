import { Link } from "react-router-dom"

function BookingList () {
    return (
        <>
         <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Booking List</h1>
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
                            <h5 className="mb-0 h6">Booking List</h5>
                        </div>
                        <div className="card-body">


                            <table className="table">
                                <thead>
                                    <tr>
                                        <th class="table-secondary" scope="col">Awbn No</th>
                                        <th class="table-secondary" scope="col">Booking No</th>
                                        <th class="table-secondary" scope="col">Client</th>
                                        <th class="table-secondary" scope="col">Branch</th>
                                        <th class="table-secondary" scope="col">Destination</th>
                                        <th class="table-secondary" scope="col">Consignor</th>
                                        <th class="table-secondary" scope="col">Consigor Mobile</th>
                                        <th class="table-secondary" scope="col">Total Amount</th>
                                        <th class="table-secondary" scope="col">Charge Weight</th>
                                        <th class="table-secondary" scope="col">Edit</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="table-secondary"><input className="form-control tip" type="text" /></td>
                                        <td class="table-secondary"><input className="form-control tip" type="text" /></td>
                                        <td class="table-secondary"><input className="form-control tip" type="text" /></td>
                                        <td class="table-secondary"><input className="form-control tip" type="text" /></td>
                                        <td class="table-secondary"><input className="form-control tip" type="text" /></td>
                                        <td class="table-secondary"><input className="form-control tip" type="text" /></td>
                                        <td class="table-secondary"><input className="form-control tip" type="text" /></td>
                                        <td class="table-secondary"><input className="form-control tip" type="text" /></td>
                                        <td class="table-secondary"><input className="form-control tip" type="text" /></td>
                                        <td class="table-secondary"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>abcd12345efgg</td>
                                        <td>abc</td>
                                        <td>def</td>
                                        <td>nfcdef</td>
                                        <td>1123</td>
                                        <td>987278748</td>
                                        <td>1000</td>
                                        <td>2kg</td>
                                        <td>
                                            <Link to="#">Edit Print</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>abcd12345efg</td>
                                        <td>abcedde</td>
                                        <td>defewd</td>
                                        <td>nfcdefewd</td>
                                        <td>11e23</td>
                                        <td>987278748</td>
                                        <td>100</td>
                                        <td>3kg</td>
                                        <td>
                                            <Link to="#">Edit Print</Link>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>


                            <div className="aiz-pagination">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
            </div>
        </>
    )
}
export default BookingList