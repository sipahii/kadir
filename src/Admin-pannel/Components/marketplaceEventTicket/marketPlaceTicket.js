import React from 'react'
function MarketplaceTicket() {
    return (
        <>
            <div className='container-fluid'>
                <div className='container '>
                    <div className=''>
                        <h6>Marketplace Event Ticket System Setting</h6>
                    </div>
                    <div className='mt-3 mb-3'>
                        <div className='row '>
                            <div className='col-lg-3 text-end mt-2 mb-3' >
                                <label htmlFor=""> Enable Ticket System</label> <br />

                            </div>
                            <div className='col-sm-5 mt-2 mb-3'>

                                <select class="form-select border-secondary" aria-label="Default select example">

                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-3 text-end mt-2 mb-3  ' >
                                <label htmlFor=""> Order Notification Email Template <br /> <span data-config-scope='[GLOBAL]'></span></label>


                            </div>
                            <div className=' col-sm-5 -mt-2  mb-3'>

                                <select class="form-select border-secondary" aria-label="Default select example">
                                    <option selected>Order Notification (Default)</option>
                                    <option value="1"> Email Notification to Seller</option>
                                    <option value="2"> Email Notification to Admin</option>
                                    <option value="3"> Email Notification to Customer</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className=' col-lg-3 text-end mt-2 mb-3' >
                                <label htmlFor=""> Reminder Email Template</label>


                            </div>
                            <div className='col-sm-5 mt-2 mb-3 '>

                                <select class="form-select border-secondary" aria-label="Default select example">
                                    <option selected>Remainder Mail</option>
                                    <option value="1"> Email Notification to Seller</option>
                                    <option value="2"> Email Notification to Admin</option>
                                    <option value="3"> Email Notification to Customer</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-3 text-end mt-2 mb-3' >
                                <label htmlFor="">Set Global Event Prefix</label>


                            </div>
                            <div className=" mb-3 mt-2 col-sm-5">
                                <input
                                    type="text"
                                    className="form-control border-secondary"
                                />
                                <span>This prefix will be added to ticket's QR code.</span>

                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-lg-3 text-end mt-2 mb-3' >
                                <label htmlFor="">Set Add To Cart Label for Expired Event</label>


                            </div>
                            <div className=" mb-3 mt-2 col col-sm-5">
                                <input
                                    type="text"
                                    className="form-control border-secondary"
                                />


                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-3 text-end mt-2 mb-3' >
                                <label htmlFor=""> Allowed Categorie for Seller To Add <br /> Events</label>
                            </div>
                            <div className=" mb-3 mt-2  col-sm-5">
                                <input
                                    type="text"
                                    className="form-control border-secondary"
                                />
                                <span>e.g please enter category ids by comma(,) seprated.</span>

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-3 text-end mt-2 mb-3' >
                                <label htmlFor=""> Set Upcoming Event from Date</label>
                            </div>
                            <div className="input-group mb-3 mt-2 col col-sm-5">
                                <input
                                    type="date"
                                    className="form-control border-secondary"
                                />

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-3 text-end mt-2 mb-3' >
                                <label htmlFor="">set Upcoming Event Date</label>
                            </div>
                            <div className="input-group mb-3 mt-2 col col-sm-5">
                                <input
                                    type="date"
                                    className="form-control border-secondary"
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-3 text-end mt-2 mb-3' >
                                <label htmlFor="">Enable Terms At Frontend</label>

                            </div>
                            <div className='col-sm-5 mb-3 mt-2'>
                                <select class="form-select border-secondary" aria-label="Default select example">
                                    <option selected>Yes</option>
                                    <option value="1"> No</option>

                                </select>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
export default MarketplaceTicket