import React from 'react'

function ReportAssetStatus() {
    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
            <div className="aiz-titlebar text-left mt-2 mb-3">
                <h3>Asset Status Report</h3>
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
                                <th class="table-secondary" scope="col">New</th>
                                <th class="table-secondary" scope="col">In Use	</th>
                                <th class="table-secondary" scope="col">Available</th>
                                <th class="table-secondary" scope="col">Damage</th>
                                <th class="table-secondary" scope="col">Return</th>
                                <th class="table-secondary" scope="col">Expired</th>
                                <th class="table-secondary" scope="col">Required License Update</th>
                                <th class="table-secondary" scope="col">Miscellaneous</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0</td>
                                <td>7</td>
                                <td>0</td>
                                <td>4</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>6</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="aiz-pagination">
                    </div>
                </div>
            </div>

        </div>

    </div>
}

export default ReportAssetStatus
