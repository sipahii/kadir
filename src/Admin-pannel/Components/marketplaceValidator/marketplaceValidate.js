import React from "react";
function MarketplaceValidate() {
    return (
        <>
            <div className="container-fluid">
                <div className="container ">
                    <div className="">
                        <h6>General Settings</h6>
                    </div>
                    <div className="mt-3 mb-3">
                        <div className="row ">
                            <div className="col-lg-3 text-end  mb-3">
                                <label htmlFor=""> Enable</label> <br />
                            </div>
                            <div className="col-sm-5 mb-3">
                                <select
                                    class="form-select border-secondary"
                                    aria-label="Default select example">
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 text-end mb-3  ">
                                <label htmlFor="">
                                    Allow Place Order Only For Saved Zipcode
                                    <br /> <span data-config-scope="[GLOBAL]"></span>
                                </label>
                            </div>
                            <div className=" col-sm-5   mb-3">
                                <select
                                    class="form-select border-secondary"
                                    aria-label="Default select example">
                                    <option value="1">Yes</option>
                                    <option value="2"> No</option>
                                </select>
                                <span>
                                    if yes, Buyer will be only able to place an order for saved
                                    zipcodes.
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-lg-3 text-end  mb-3">
                                <label htmlFor=""> Allow Code Validator Availability</label>
                            </div>
                            <div className="col-sm-5  mb-3 ">
                                <select
                                    class="form-select border-secondary"
                                    aria-label="Default select example">
                                    <option selected>Apply to Individual Products </option>
                                    <option value="1"> Apply to All product</option>
                                    <option value="2"> Email Notification to Admin</option>
                                    <option value="3"> Email Notification to Customer</option>
                                </select>
                                <span>
                                    Apply to all products will enable zipcode check field in all
                                    products <br />
                                    else select 'Apply to individual product' to set manually from
                                    individual product page.
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 text-end  mb-3">
                                <label htmlFor="">Set Global Event Prefix</label>
                            </div>
                            <div className=" mb-3  col-sm-5">
                                <input type="text" className="form-control border-secondary" />
                                <span>Enter a message for check the zipcode availabilty.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default MarketplaceValidate;
