import React from 'react'
function DeliveryTimeSettings() {
    return (
        <>

            <div className='container col-0 row'>
                <h6>Delivery Time Settings</h6>
                <div style={{ marginTop: 30 }}>
                    <div className='row mt-3' >
                        <label className="col-sm-3 col-form-label " style={{ textAlign: 'end' }}>
                            Enabled
                        </label>
                        <div className="col-lg-6 col-sm-5 d-flex">
                            <select className="form-select border-secondary " aria-label="Default select example">
                                <option value={1}>Yes</option>
                                <option value={1}>No</option>
                            </select>
                            <div className="form-check ml-3  " style={{ textAlign: 'end', }}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="flexCheckIndeterminate"
                                    style={{ width: 25, height: 25 }}
                                />
                                {/* <label className="form-check-label ml-3 mt-2" htmlFor="flexCheckIndeterminate">
                                    Use System Value
                                </label> */}
                                <span className=' ml-3 mt-3'>Use System Value</span>
                            </div>
                        </div>



                    </div>
                    <div className='mt-3 row'>
                        <label className="col-sm-3 col-form-label " style={{ textAlign: 'end' }}>
                            Allowed Days
                        </label>
                        <div className='col-sm-5 ml-3 form-select border-secondary'>

                            <select className="form-select border-secondary" multiple aria-label="multiple select example">
                                <option value="1">Sunday</option>
                                <option value="2">Monday</option>
                                <option value="3">Tuesday</option>
                                <option value="3">Wednesday</option>
                                <option value="3">Thursday</option>
                                <option value="3">Friday</option>
                                <option value="3">Satursday</option>
                            </select>
                        </div>
                    </div>
                    <div className='mt-3 row'>
                        <label className="col-sm-3 mt-3 col-form-label " style={{ textAlign: 'end' }}>
                            Display Total Days
                        </label>
                        <div className="col-sm-5  ">
                            <input type="number" className='form-control border-secondary' />
                            <span>Enter number of days e.g:7</span>
                        </div>


                    </div>
                    <div className='mt-3 row'>
                        <label className="col-sm-3 mt-3 col-form-label " style={{ textAlign: 'end' }}>
                            Minimum Required Time in Order <br />Process
                        </label>
                        <div className="col-sm-5 ">
                            <input type="number" className='form-control border-secondary' />
                            <span>Enter number of days e.g:5 and 'zero' will be consider as current <br />day.</span>
                        </div>


                    </div>
                    <div className='mt-3 row'>
                        <label className="col-sm-3 mt-3 col-form-label " style={{ textAlign: 'end' }}>
                            Error Message if Time Slots are not <br />available
                        </label>
                        <textarea name="" id="" cols="" rows="" className='col-sm-5 ml-3 form-control border-secondary' > No time slot are available, please contact us</textarea>

                    </div>
                </div>
            </div>

            <hr className="border border-dark border-2 opacity-50 ml-2 mr-2" />
            <div className='container col-0 row'>
                <h6>Default delivery Time Slot</h6>
                <div style={{ marginTop: 30 }}>
                    <div className="card-body">
                        <table className="table table-3">
                            <thead>
                                <tr>
                                    <th className="table-secondary  " scope="col"  >
                                        Select Day
                                    </th>
                                    <th className="table-secondary " scope="col" >
                                        Start Time
                                    </th>
                                    <th className="table-secondary " scope="col" >
                                        End Time
                                    </th>
                                    <th className="table-secondary " scope="col">
                                        Quotas
                                    </th>
                                    <th className="table-secondary " scope="col" >
                                        <button type="button" class="btn btn-danger">Delete</button>
                                    </th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td scope="row" ><select className="form-select col-sm-6" aria-label="" >
                                        <option value={1}>Sunday</option>
                                        <option value={2}>Monday</option>
                                        <option value={3}>Tuesday</option>
                                        <option value={4}>Wednesday</option>
                                        <option value={5}>Thursday</option>
                                        <option value={6}>Friday</option>
                                        <option value={7}>Saturday</option>
                                    </select></td>
                                    <td><input type="time" /></td>
                                    <td><input type="time" /></td>
                                    <td><input type="number" /></td>
                                </tr>


                            </tbody>
                        </table>
                        <div className="aiz-pagination" />
                    </div>
                </div>
            </div>


        </>
    )
}
export default DeliveryTimeSettings