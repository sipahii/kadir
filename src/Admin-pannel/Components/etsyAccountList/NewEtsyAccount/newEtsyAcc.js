import React from 'react'
import { Link } from "react-router-dom"

function NewEtsyAccount() {
    return (
        <>
            <div className=' container'>
                <h4>New Etsy Account</h4>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto  "
                    style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'end', }}>
                    <i className="bi bi-arrow-return-left" />
                    <p className='mr-3'>Save and Continue Edit</p>

                    <Link
                        className="btn btn-danger "
                        to="#"
                    >
                        <span>Save Etsy Account</span>
                    </Link>


                </div>

            </div>
            <div className='container col-0 row'>
                <h5 className='mt-3 ml-3'>Etsy Account Information</h5>
            </div>

            <hr className="border border-dark border-2 opacity-50 ml-2 mr-2" />
            <div className='container'>
                <div className="  row">
                    <label className="col-sm-3 ml-3 col-form-label mb-3 mt-2  " style={{ textAlign: 'end' }}>
                        Oauth <br /> Consumer Key
                    </label>
                    <div className="col-sm-5  mb-3 mt-3">
                        <input type="text" className='form-control border-secondary' />
                    </div>
                </div>
                <div className="  row">
                    <label className="col-sm-3 ml-3 col-form-label mb-3 mt-2  " style={{ textAlign: 'end' }}>
                        Oauth <br /> Consumer <br /> Secret
                    </label>
                    <div className="col-sm-5  mb-3 mt-3">
                        <input type="text" className='form-control border-secondary' />
                    </div>
                </div>
                <div className="row">
                    <label className="col-sm-3 ml-3 col-form-label mb-3 mt-2  " style={{ textAlign: 'end' }}>
                        Etsy Shop<br /> Name
                    </label>
                    <div className="col-sm-5  mb-3 mt-3">
                        <input type="text" className='form-control border-secondary' />
                    </div>
                </div>
                <div className=" row">
                    <label className="col-sm-3 ml-3 col-form-label mb-3 mt-2  " style={{ textAlign: 'end' }}>
                        Attribute<br /> Set
                    </label>
                    <div className="col-sm-3  mb-3 mt-3">
                        <select className="form-select border-secondary" aria-label="Default select example">
                            <option selected>Default</option>
                            <option value={1}>Active</option>
                            <option value={1}>Inactive</option>
                        </select>
                    </div>
                </div>
                <div className=" row">
                    <label className="col-sm-3 ml-3 col-form-label mb-3 mt-2  " style={{ textAlign: 'end' }}>
                        Default<br /> Shiping <br />Template
                    </label>
                    <div className="col-sm-4  mb-3 mt-3">
                        <select className="form-select border-secondary" aria-label="Default select example">
                            <option selected>Select Shipping Template</option>
                            <option value={1}>Yes</option>
                            <option value={1}>No</option>
                        </select>
                    </div>
                </div>
                <div className=" row">
                    <label className="col-sm-3 ml-3 col-form-label mb-3 mt-2  " style={{ textAlign: 'end' }}>
                        Export<br /> Products <br />To Etsy As
                    </label>
                    <div className="col-sm-4  mb-3 mt-3">
                        <select className="form-select border-secondary" aria-label="Default select example">
                            <option selected>Draft Product</option>
                            <option value={1}>Yes</option>
                            <option value={1}>No</option>
                        </select>
                    </div>
                </div>


            </div>
            <div className='container col-0 row'>
                <h5 className='mt-3 ml-3'>Default Values For Product Listing Which Exported To Easy</h5>
            </div>
            <hr className="border border-dark border-2 opacity-50 ml-2 mr-2" />
            <div className='container'>
                <div className="row">
                    <label className="col-sm-3 ml-3 col-form-label mb-3 mt-2  " style={{ textAlign: 'end' }}>
                        Who nade<br />it?
                    </label>
                    <div className="col-sm-3  mb-3 mt-3">
                        <select className="form-select border-secondary" aria-label="Default select example">
                            <option selected>I Did</option>
                            <option value={1}>Yes</option>
                            <option value={1}>No</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <label className="col-sm-3 ml-3 col-form-label mb-3 mt-2  " style={{ textAlign: 'end' }}>
                        What is it?
                    </label>
                    <div className="col-sm-3  mb-3 mt-3">
                        <select className="form-select border-secondary" aria-label="Default select example">
                            <option selected>A finished product</option>
                            <option value={1}>Yes</option>
                            <option value={1}>No</option>
                        </select>
                    </div>
                </div>
            </div>



        </>

    )
}

export default NewEtsyAccount