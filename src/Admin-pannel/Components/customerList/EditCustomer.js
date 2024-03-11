import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useEditCustomerMutation, useGetCurrencyQuery, useGetCustomerByIdQuery, useGetCustomerRoleQuery, useGetCustomerSelectedBillingAddressByIdQuery, useGetCustomerSelectedShippingAddressByIdQuery, useGetLanguagesQuery, useGetTimeFormatQuery } from '../all-products/allproductsApi/allProductsApi';

function EditCustomer() {
    const [inputval, setInputval] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        approve: null,
        // profilePhoto: '',
        language: '',
        currency: "",
        time_format: "",
        password: '',
        approve: null,
        selectedBillingAddress: '',
        selectedShippingAddress: '',
        // informations: [],
        role_id: '',
    });

    const params = useParams();

    const { data: customerRoleData } = useGetCustomerRoleQuery()

    const { data: language } = useGetLanguagesQuery()

    const { data: currency } = useGetCurrencyQuery()

    const { data: timeformat } = useGetTimeFormatQuery()

    const { data: selectedShippingAddress } = useGetCustomerSelectedShippingAddressByIdQuery(params.id)

    const { data: selectedBilliingAddress } = useGetCustomerSelectedBillingAddressByIdQuery(params.id)

    const { data } = useGetCustomerByIdQuery(params.id);
    const [editCustomer, response] = useEditCustomerMutation();



    useEffect(() => {
        const obj = { ...data }
        setInputval(obj)
    }, [data]);


    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };
    const submitEditCustomerData = (e) => {
        e.preventDefault();
        editCustomer({ id: params.id, data: inputval })
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("Customer Edited Successfully", {
            position: "top-center"
        })
    };


    useEffect(() => {
        if (response.isSuccess === true) {
            toastSuccessMessage()
        };
        if (response.isError === true) {
            alert('!Customer not edited')
        };
    }, [response])


    return (
        <>

            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Customer Information</h5>
                                </div>
                                <form className="form-horizontal" id="create-course-form" onSubmit={submitEditCustomerData}>
                                    <input type="hidden" name="_token" defaultValue="S0f7vDDtqJ5NbxPupX86gbiFGZumqx0Q8PyryILc" />
                                    <div className="card-body">

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="first name">First Name</label>
                                            <div className="col-sm-9">
                                                <input type="text" value={inputval?.firstname} placeholder="First Name" name="firstname" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="last name">Last Name</label>
                                            <div className="col-sm-9">
                                                <input type="text" value={inputval?.lastname} placeholder="Last Name" name="lastname" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="email">Email</label>
                                            <div className="col-sm-9">
                                                <input type="email" value={inputval?.email} placeholder="abc@gmail.com" autoComplete="off" name="email" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="mobile">Phone</label>
                                            <div className="col-sm-9">
                                                <input type="text" value={inputval?.mobile} placeholder="Phone" name="mobile" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>


                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="name">Language</label>
                                            <div className="col-sm-9">
                                                <div >
                                                    <select className="form-select" value={inputval?.language} name="language" aria-label="Default select example" onChange={onChangeHandler}>
                                                        {language && language.map((item, i) => {
                                                            return <option value={item._id} key={item._id}>{item.name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="name">Currency</label>
                                            <div className="col-sm-9">
                                                <div >
                                                    <select className="form-select" value={inputval?.currency} name="currency" aria-label="Default select example" onChange={onChangeHandler}>
                                                        {currency && currency.map((item, i) => {
                                                            return <option value={item._id} key={item._id}>{item.name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="name">Time Format</label>
                                            <div className="col-sm-9">
                                                <div >
                                                    <select className="form-select" value={inputval?.time_format} name="time_format" aria-label="Default select example" onChange={onChangeHandler}>
                                                        {timeformat && timeformat.map((item, i) => {
                                                            return <option value={item._id} key={item._id}>{item.title}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="name">Role</label>
                                            <div className="col-sm-9">
                                                <div >
                                                    <select className="form-select" value={inputval?.role_id} name="role_id" aria-label="Default select example" onChange={onChangeHandler}>
                                                        {customerRoleData && customerRoleData.map((item, i) => {
                                                            return <option value={item._id} key={item._id}>{item.customerRole_name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="name">Selected Shipping Address</label>
                                            <div className="col-sm-9">
                                                <div >
                                                    <select className="form-select" value={inputval?.selectedShippingAddress} name="selectedShippingAddress" aria-label="Default select example" onChange={onChangeHandler}>
                                                        {selectedShippingAddress && selectedShippingAddress?.address?.map((item, i) => {
                                                            return <option value={item._id} key={item._id}>{item?.state + ", " + item?.city + ", " + item?.country}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="name">Selected Billing Address</label>
                                            <div className="col-sm-9">
                                                <div >
                                                    <select className="form-select" value={inputval?.selectedBillingAddress} name="selectedBillingAddress" aria-label="Default select example" onChange={onChangeHandler}>
                                                        {selectedBilliingAddress && selectedBilliingAddress?.address?.map((item, i) => {
                                                            return <option value={item._id} key={item._id}>{item?.state + ", " + item?.city + ", " + item?.country}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="mobile">Password</label>
                                            <div className="col-sm-9">
                                                <input type="password" value={inputval?.password} placeholder="Password" name="password" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div> */}

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="name">Approve</label>
                                            <div className="col-sm-9">
                                                <div >
                                                    <select className="form-select" value={inputval?.approve} name="approve" aria-label="Default select example" onChange={onChangeHandler}>
                                                        <option value={true}>Yes</option>
                                                        <option value={false}>No</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto"></div>
                <ToastContainer />
            </div>

            {/* <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <h5 className="mb-0 h6">Customer Information</h5>
                    </div>
                    <div className="col-lg-8 mx-auto">
                        <div className="card">
                            <div className="card-body p-0">

                                <form className="p-4" id="create-course-form" onSubmit={submitEditCustomerData}>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">First Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="firstname" placeholder="first name" fdprocessedid="vrvrin" value={inputval?.firstname} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Last Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="lastname" placeholder="last name" fdprocessedid="vrvrin" value={inputval?.lastname} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Email Address</label>
                                        <div className="col-sm-9">
                                            <input type="email" className="form-control" name="email" placeholder="email" fdprocessedid="vrvrin" value={inputval?.email} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Phone</label>
                                        <div className="col-sm-9">
                                            <input type="number" className="form-control" name="mobile" placeholder="Phone number" fdprocessedid="vrvrin" value={inputval?.mobile} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Password</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="password" placeholder="Phone number" fdprocessedid="vrvrin" value={inputval?.password} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group mb-0 text-right">
                                        <button type="submit" className="btn btn-primary">Save</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                   
                </div>
                <ToastContainer />
            </div> */}
        </>
    )
}

export default EditCustomer;
