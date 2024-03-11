import React from 'react'
function MarketPlacePreOrder() {
    return (
        <>
            <div className='container mb-3' >
                <div>
                    <h6>
                        Marketplace Preorder General Settings
                    </h6>
                </div>
                <div className='' style={{ marginTop: 40 }}>
                    <div className='row mt-3' >
                        <label className="col-sm-3 col-form-label " style={{ textAlign: 'end' }}>
                            Preorder Type
                        </label>
                        <div className=" col-sm-5 d-flex">
                            <select className="form-select border-secondary " aria-label="Default select example">
                                <option value={1}>complete payment</option>
                                <option value={1}>percent payment</option>
                            </select>

                        </div>
                    </div>
                    <div className='row mt-3'>
                        <label className="col-sm-3 col-form-label " style={{ textAlign: 'end' }}>
                            Enable Preorer For
                        </label>
                        <div className=" col-sm-5 d-flex">
                            <select className="form-select border-secondary " aria-label="Default select example">
                                <option value={1}>Per product</option>
                                <option value={1}>All Products</option>
                                <option value={1}>Few Products</option>
                                <option value={1}>All Product Excepts some</option>
                            </select>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <label className="col-sm-3 col-form-label " style={{ textAlign: 'end' }}>
                            Custom Message to display on preorder <br />product
                        </label>
                        <div className=" col-sm-5 d-flex ">
                            <textarea name="" id="" cols="30" rows="" className='form-select border-secondary'></textarea>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <label className="col-sm-3 col-form-label " style={{ textAlign: 'end' }}>
                            Send email to customer when product is <br />in stock
                        </label>
                        <div className=" col-sm-5 ">
                            <select className="form-select border-secondary " aria-label="Default select example">
                                <option value={1}>Automatic </option>
                                <option value={1}>Manual</option>
                            </select>
                            <span>if you choose 'manual' option you will have to manually send mail <br /> to customer from admin</span>
                        </div>

                    </div>
                    <div className='row mt-3'>
                        <label className="col-sm-3 col-form-label " style={{ textAlign: 'end' }}>
                            Preorder Quantity
                        </label>
                        <div className=" col-sm-5 ">
                            <select className="form-select border-secondary " aria-label="Default select example">
                                <option value={1}>Enable </option>
                                <option value={1}>Disable</option>
                            </select>
                            <span>if you choose 'enable' option then a "text" field is shown to enter <br /> preorder quantity for product</span>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <label className="col-sm-3 col-form-label " style={{ textAlign: 'end' }}>
                            Buyer Specification
                        </label>
                        <div className=" col-sm-5 ">
                            <select className="form-select border-secondary " aria-label="Default select example">
                                <option value={1}>All </option>
                                <option value={1}>Disable</option>
                            </select>
                            <span>if you choose 'preorder buyers' then only those buyers will be   <br />allowed to complete preorder who has done a preorderon that <br />product</span>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <label className="col-sm-3 col-form-label " style={{ textAlign: 'end' }}>
                            Product in Stock Email Template
                        </label>
                        <div className=" col-sm-5 ">
                            <select className="form-select border-secondary " aria-label="Default select example">
                                <option value={1}>Product in Stock (Default) </option>
                                <option value={1}>Email Notifiation to seller</option>
                                <option value={1}>Email Notifiation to admin</option>
                                <option value={1}>Email Notifiation to customer</option>
                                <option value={1}>New Pickup Order</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border border-dark border-2 opacity-50 ml-2 mr-2" />

            <div className='container mb-3' >
                <div>
                    <h6>
                        Cron Settings
                    </h6>
                </div>
                <div className='row mt-3'>
                    <label className="col-sm-3 col-form-label " style={{ textAlign: 'end' }}>
                        Frequency
                    </label>
                    <div className=" col-sm-5 ">
                        <select className="form-select border-secondary " aria-label="Default select example">
                            <option value={1}>Daily  </option>
                            <option value={1}>Weakly</option>
                            <option value={1}>Monthly</option>
                        </select>
                    </div>
                </div>
                <div className='row mt-3'>
                    <label className="col-sm-3 col-form-label " style={{ textAlign: 'end' }}>
                        Time
                    </label>
                    <div className=" col-sm-5 ">
                    </div>
                </div>
            </div>
        </>
    )

}
export default MarketPlacePreOrder