import React, { useEffect, useState } from 'react'
import { useGetBasicAffiliateQuery, useGetNotificationConfigurationForDeliveryQuery, useUpdateAffiliateBasicMutation, useUpdateNotificationConfigurationForDeliveryMutation } from '../../../Components/all-products/allproductsApi/allProductsApi';
import { ToastContainer, toast } from 'react-toastify';

function NotificationConfiguration() {

    const [inputval, setInputval] = useState({
        sendMail: null, sendOtp: null
    });
    const [statusMailD, setStatusMailD] = useState()
    const [statusOTPD, setStatusOTPD] = useState()
    console.log('statusMailD------------------', statusMailD)

    const { data } = useGetNotificationConfigurationForDeliveryQuery();
    useEffect(() => {
        const obj = { ...data }
        if (data) {
            setInputval(obj)
            setStatusMailD(obj)
            setStatusOTPD(obj)
        }
    }, [data]);

    console.log('NotificationData---', data)

    const onChangeHandler = (e) => {
        setStatusMailD(!statusMailD)
        setStatusOTPD(!statusOTPD)
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    const [editNotificationConfigD, response] = useUpdateNotificationConfigurationForDeliveryMutation();

    const submitUpdateNotificationConfig = (e) => {
        e.preventDefault();
        const abc = { ...inputval}
        editNotificationConfigD(abc)
        document.getElementById("create-course-form").reset();
    };


    const toastSuccessMessage = () => {
        toast.success("Notification Updated Successfully !", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("Notification not Updated !", {
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
                        <h6 className="mb-0 h6">Notification Configuration</h6>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" id='create-course-form' onSubmit={submitUpdateNotificationConfig}>

                            <div className="form-group row">
                                <div className="col-lg-4">
                                    <label className="control-label">Send Mail</label>
                                </div>
                                <div className="col-lg-8">
                                    <label className="aiz-switch aiz-switch-success mb-0">
                                        <input
                                            // value={1}
                                            name="sendMail"
                                            type="checkbox"
                                            checked={statusMailD?.sendMail}
                                            onChange={onChangeHandler}
                                        />
                                        <span className="slider round" />
                                    </label>
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-lg-4">
                                    <label className="control-label">Send OTP</label>
                                </div>
                                <div className="col-lg-8">
                                    <label className="aiz-switch aiz-switch-success mb-0">
                                        <input
                                            value={1}
                                            name="sendOtp"
                                            type="checkbox"
                                            checked={statusOTPD?.sendOtp}
                                            onChange={onChangeHandler}
                                        />
                                        <span className="slider round" />
                                    </label>
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

export default NotificationConfiguration