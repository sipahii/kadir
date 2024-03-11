import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useGetBasicAffiliateQuery, useGetDeliveryboyPaymentConfigurationQuery, useUpdateAffiliateBasicMutation, useUpdateDeliveryboyPaymentConfigurationMutation } from '../../../Components/all-products/allproductsApi/allProductsApi';

function PaymentConfiguration() {


    const [inputval, setInputval] = useState({
        commisionRate: '',
        monthlySalary: null,
        perOrderComissionRate: null
    });
    const [statusD, setStatusD] = useState()
    const [statusD2, setStatusD2] = useState()

    const { data } = useGetDeliveryboyPaymentConfigurationQuery();
    useEffect(() => {
        const obj = { ...data }
        if (data) {
            setInputval(obj)
            setStatusD(obj.monthlySalary)
            setStatusD2(obj)
        }
    }, [data]);

    console.log('Paymnet confggData---', data)

    const onChangeHandler = (e) => {
        
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    const [editadeliveryBoyPaymentStatusD, response] = useUpdateDeliveryboyPaymentConfigurationMutation();

    const submitUpdateDeliveryBoyPaymnet = (e) => {
        e.preventDefault();
        setStatusD(!statusD)
        // setStatusD2(!statusD2)
        const abc = { ...inputval, monthlySalary: statusD }
        editadeliveryBoyPaymentStatusD(abc)
        document.getElementById("create-course-form").reset();
    };


    const toastSuccessMessage = () => {
        toast.success("Payment Status Updated Successfully !", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("Payment Status not Updated !", {
            position: "top-center"
        })
    }

    useEffect(() => {
        if (response.isSuccess === true) {
            toastSuccessMessage()
        };
    }, [response]);

    useEffect(() => {
        if (response.isError === true) {
            toastErrorMessage()
        };
    }, [response])


    console.log('response--', response)

    return (
        <>
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h6 className="mb-0 h6">Payment Configuration</h6>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" id='create-course-form' onSubmit={submitUpdateDeliveryBoyPaymnet}>

                            <div className="form-group row">
                                <div className="col-lg-4">
                                    <label className="control-label">Monthly Salary</label>
                                </div>
                                <div className="col-lg-8">
                                    <label className="aiz-switch aiz-switch-success mb-0">
                                        <input
                                            // value={1}
                                            name="monthlySalary"
                                            type="checkbox"
                                            checked={statusD}
                                            onChange={onChangeHandler}
                                        />
                                        <span className="slider round" />
                                    </label>
                                </div>
                            </div>

                            {/* <div className="form-group row">
                                <div className="col-lg-4">
                                    <label className="control-label">Per Order Comission</label>
                                </div>
                                <div className="col-lg-8">
                                    <label className="aiz-switch aiz-switch-success mb-0">
                                        <input
                                            value={1}
                                            name="perOrderComissionRate"
                                            type="checkbox"
                                            checked={statusD2}
                                            onChange={onChangeHandler}
                                        />
                                        <span className="slider round" />
                                    </label>
                                </div>
                            </div> */}

                            <div className="form-group row">
                                <input
                                    type="hidden"
                                    name="type"
                                    defaultValue="user_registration_first_purchase"
                                />
                                <div className="col-lg-4">
                                    <label className="control-label">
                                        Commission Rate
                                    </label>
                                </div>
                                <div className="col-lg-6">

                                    <input type="number" className="form-control" name="commisionRate" value={inputval?.commisionRate}
                                        placeholder="" required fdprocessedid="k81gnb" onChange={onChangeHandler} />
                                </div>

                                <div className="col-lg-2">
                                    <label className="control-label bg-alert">USD</label>
                                </div>
                            </div>

                            <div className="form-group mb-0 text-right">
                                <button
                                    type="submit"
                                    className="btn btn-sm btn-primary"
                                    fdprocessedid="6fh7eo"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default PaymentConfiguration