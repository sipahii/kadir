import React from 'react'

function ReportAllocation() {
    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
            <div className="aiz-titlebar text-left mt-2 mb-3">
                <h3>Asset Allocation Report</h3>
                {/* <form action=""> */}
                <div className="row align-items-center">

                    <div className="col-lg-3 mt-3">
                        <div>
                            <label htmlFor='Asset Model No'>Start Date
                            </label>
                            <input type="date" className="form-control" id="exampleDateOfManufacture" aria-describedby="emailHelp" />
                        </div>

                    </div>
                    <div className="col-lg-3 mt-3">
                        <div>
                            <label htmlFor='Asset Model No'>End Date</label>
                            <input type="date" className="form-control" id="exampleYearOfValuation" aria-describedby="emailHelp" />
                        </div>

                    </div>

                    <div className="col-lg-3 mt-5 d-flex justifycontentCenter">
                        <button className="btn btn-primary mr-3">Save</button>
                        <button className="btn btn-danger">Close</button>
                    </div>
                    {/* </form> */}
                    <p className='py-3 border-bottom '><b>Showing Data on Date Range: 06/27/2023 00:00:00 to 06/27/2023 00:00:00</b></p>
                </div>
                <div className="card-body">
                    <table className="table table-3 position-relative">
                        <thead>
                            <tr>
                                <th class="table-secondary" scope="col">Sl</th>
                                <th class="table-secondary" scope="col">Assigned User</th>
                                <th class="table-secondary" scope="col">Total Assigned
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>shubham</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>shubham</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>shubham</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>shubham</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>shubham</td>
                                <td>10</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='border-bottom py-2'></div>
                    <h5 className='my-4'>Summary</h5>
                    <table className='table-3 position-relative w-sm-100 w-md-50'>
                        <tr>
                            <th>Total Asset:</th>
                            <td>Sivaraman</td>
                        </tr>
                        <tr>
                            <th>Total Assigned Asset:</th>
                            <td>123456789</td>
                        </tr>
                        <tr>
                            <th>Total Unassigned Asset:	</th>
                            <td>123456789</td>
                        </tr>
                    </table>
                    <div className="aiz-pagination">
                    </div>
                </div>
            </div>

        </div>

    </div>
}

export default ReportAllocation
