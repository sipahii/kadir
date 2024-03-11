import React from 'react';
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';

function CustomerShippingAddList() {

    const [inputval, setInputval] = useState({
        country: '',
        state: '',
        city: '',
        zip: '',
        address_line_1: '',
        adress_line_2: '',
        land_mark: '',
        province: '',
        phone: '',
        email: ''
    });

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    // const [AddBlogCat, response] = useAddBlogCategoryMutation();

    const addCustomerShippingAddressData = (e) => {
        e.preventDefault();
        // AddBlogCat(inputval)
        console.log(inputval)
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("BlogsCategory added Successfully", {
            position: "top-center"
        })
    };

    // if (response.isSuccess === true) {
    //     toastSuccessMessage()
    // };
    // if (response.isError === true) {
    //     alert('!Error BlogsCategory not added')
    // };

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Customer Shipping Adress Information</h5>
                                </div>
                                <div className="card-body">

                                    <form className="form-horizontal" id="create-course-form" onSubmit={addCustomerShippingAddressData}>
                                        <input type="hidden" name="_token" defaultValue="rRBTDvBDDxDPFQUsYxC4w0Y2kUjP3Ojr7STfSH1l" />

                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">Country</label>
                                            <div className="col-md-9">
                                                <input type="text" placeholder="Country" name="country" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">State</label>
                                            <div className="col-md-9">
                                                <input type="text" placeholder="state" name="state" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">City</label>
                                            <div className="col-md-9">
                                                <input type="text" placeholder="city" name="city" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">Zip</label>
                                            <div className="col-md-9">
                                                <input type="text" placeholder="zip" name="zip" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">Adress Line 1</label>
                                            <div className="col-md-9">
                                                <input type="text" placeholder="adress line 1" name="address_line_1" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">Adress Line 2</label>
                                            <div className="col-md-9">
                                                <input type="text" placeholder="adress line 2" name="adress_line_2" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">Land Mark</label>
                                            <div className="col-md-9">
                                                <input type="text" placeholder="land mark" name="land_mark" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">Province</label>
                                            <div className="col-md-9">
                                                <input type="text" placeholder="province" name="province" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">Phone</label>
                                            <div className="col-md-9">
                                                <input type="number" placeholder="phone" name="phone" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">Email</label>
                                            <div className="col-md-9">
                                                <input type="email" placeholder="email" name="email" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>


                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-primary">
                                                Save
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default CustomerShippingAddList