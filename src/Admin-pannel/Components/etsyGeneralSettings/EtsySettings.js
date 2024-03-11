import React from 'react'
function EtsySettings() {
    return (
        <>

            <div className='container col-0 row'>
                <h4>Etsy General Settings</h4>

                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                </a>
                <div className="mb-4 ml-3  row">
                    <label className="col-sm-3 col-form-label " style={{ textAlign: 'end' }}>
                        Use Etsy Global App Details For <br /> All Etsy Account
                    </label>
                    <div className="col-sm-4">
                        <select className="form-select border-secondary " aria-label="Default select example">
                            <option selected></option>
                            <option value={1}>Yes</option>
                            <option value={1}>No</option>
                        </select>
                    </div>
                </div>
                <div className="mb-4 ml-3 row ">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label" style={{ textAlign: 'end' }}>
                        Oauth Consumer Key
                    </label>
                    <div className="col-sm-4">
                        <input type="password" className="form-control border-secondary" id="inputPassword" />
                    </div>
                </div>
                <div className="mb-4 ml-3 row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label" style={{ textAlign: 'end' }}>
                        Outh Consumer Secret
                    </label>
                    <div className="col-sm-4">
                        <input type="password" className="form-control border-secondary" id="inputPassword" />
                    </div>
                </div>
            </div>
            <div className="text-success">
                <hr />
            </div>
            <hr className="border border-dark border-2 opacity-50 ml-2 mr-2" />


            <div>
                <div className='container col-0 row'>
                    <h4 className='mt-3'>Default Settings For Import Etsy Orders</h4>

                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                    </a>
                    <div className="mb-4 ml-3 row">
                        <label className="col-sm-3 col-form-label" style={{ textAlign: 'end' }}>
                            Default store view for order import
                        </label>
                        <div className="col-sm-4">
                            <select className="form-select border-secondary  " aria-label="Default select example">
                                <option selected></option>
                                <option value={1}>Default Store View</option>
                                <option value={1}>No</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-4 ml-3  row">
                        <label className="col-sm-3 col-form-label " style={{ textAlign: 'end' }}>
                            Esty Imported Order Status
                        </label>
                        <div className="col-sm-4">
                            <select className="form-select border-secondary " aria-label="Default select example">
                                <option selected></option>
                                <option value={1}>Pending</option>
                                <option value={1}>No</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>
            <div className="text-success">
                <hr />
            </div>
            <hr className="border border-dark border-2 opacity-50 ml-2 mr-2" />
            <div>

                <div className='container col-0 row'>
                    <h4 className='mt-3'>Default Settings For Etsy Product</h4>

                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                    </a>
                    <div className="mb-4 ml-3 row">
                        <label className="col-sm-3 col-form-label" style={{ textAlign: 'end' }}>
                            Default Website
                        </label>
                        <div className="col-sm-4 ">
                            <select className="form-select border-secondary  " aria-label="Default select example">
                                <option selected>Main Website</option>
                                <option value={1}>Yes</option>
                                <option value={1}>No</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-4 ml-3  row">
                        <label className="col-sm-3 col-form-label " style={{ textAlign: 'end' }}>
                            Import Product With All Image
                        </label>
                        <div className="col-sm-4">
                            <select className="form-select border-secondary " aria-label="Default select example">
                                <option selected></option>
                                <option value={1}>Yes</option>
                                <option value={1}>No</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-4 ml-3  row">
                        <label className="col-sm-3 col-form-label " style={{ textAlign: 'end' }}>
                            Product Revision On Etsy
                        </label>
                        <div className="col-sm-4">
                            <select className="form-select border-secondary " aria-label="Default select example">
                                <option selected></option>
                                <option value={1}>Yes</option>
                                <option value={1}>No</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-4 ml-3  row">
                        <label className="col-sm-3 col-form-label " style={{ textAlign: 'end' }}>
                            Product Automatic Renewals
                        </label>
                        <div className="col-sm-4">
                            <select className="form-select border-secondary " aria-label="Default select example">
                                <option selected></option>
                                <option value={1}>Yes</option>
                                <option value={1}>No</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-4 ml-3  row">
                        <label className="col-sm-3 col-form-label " style={{ textAlign: 'end' }}>
                            Default Source
                        </label>
                        <div className="col-sm-4">
                            <select className="form-select border-secondary " aria-label="Default select example">
                                <option selected></option>
                                <option value={1}>Yes</option>
                                <option value={1}>No</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-4 ml-3  row">
                        <label className="col-sm-3 col-form-label " style={{ textAlign: 'end' }}>
                            Magento Product Delete On <br /> Etsy Map Record Delete
                        </label>
                        <div className="col-sm-4">
                            <select className="form-select border-secondary " aria-label="Default select example">
                                <option selected></option>
                                <option value={1}>Yes</option>
                                <option value={1}>No</option>
                            </select>
                        </div>
                    </div>



                </div>

            </div>
        </>
    )
}
export default EtsySettings