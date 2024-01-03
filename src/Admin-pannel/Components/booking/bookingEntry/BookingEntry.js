import { Link } from "react-router-dom"
import FrieghtRateDetails from "./frieghtRateDetails/FrieghtRateDetails"
import TaxableFreight from "./taxableFreight/TaxableFreight"
import CodContaint from "./codContaint/CodContaint"

function BookingEntry() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Booking Entry</h1>
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
                            <h5 className="mb-0 h6">Booking Entry</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="cox-table">
                                        <form>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Branch</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">AWB/Payment Type</label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>CREDIT</option>
                                                    <option value={1}>DEBIT</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Destination</label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>KOLKATA</option>
                                                    <option value={1}>DELEHI</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Pin Code</label>
                                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Consignor</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Address</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">State</label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>--select--</option>
                                                    <option value={1}>DELEHI</option>
                                                    <option value={1}>Mumbai</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">City</label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>--select--</option>
                                                    <option value={1}>DELEHI</option>
                                                    <option value={1}>Mumbai</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Email</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Pin</label>
                                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Mobile</label>
                                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Tel Phone</label>
                                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>

                                        </form>

                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="cox-table">
                                        <form>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Booking Date</label>
                                                <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Docket Type</label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>type 1</option>
                                                    <option value={1}>type 2</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Docket Number</label>
                                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Service Type</label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>Domestic Box</option>
                                                    <option value={1}>Domestic Box 2</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Credit Customer</label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>HUB Delivery</option>
                                                    <option value={1}>Domestic Box 2</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Consignor</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Address</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">State</label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>--select--</option>
                                                    <option value={1}>DELEHI</option>
                                                    <option value={1}>Mumbai</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">City</label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>--select--</option>
                                                    <option value={1}>DELEHI</option>
                                                    <option value={1}>Mumbai</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Email</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Pin</label>
                                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Mobile</label>
                                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3 d-flex mainn">
                                                <label htmlFor="exampleInputEmail1 " className="form-label mr-3">Tel Phone</label>
                                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                        </form>
                                    </div>
                                </div>
                               </div>
                               <CodContaint/>
                            <FrieghtRateDetails/>
                            <TaxableFreight/>
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
export default BookingEntry