import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetBasicAffiliateQuery, useGetPayFastActivationQuery, useUpdateAffiliateBasicMutation, useUpdatePayFastActivationMutation } from '../../Components/all-products/allproductsApi/allProductsApi';
import { toast } from 'react-toastify';

function PayFastActivation() {

    const [inputval, setInputval] = useState({
        status: null
    });
    const [statusD, setStatusD] = useState()

    const { data } = useGetPayFastActivationQuery();
    useEffect(() => {
        const obj = { ...data }
        if (data) {
            setInputval(obj)
            setStatusD(obj)
        }
    }, [data]);

    console.log('PayFastD---', data)

    const onChangeHandler = (e) => {
        setStatusD(!statusD)
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    const [editPayFastActivationD, response] = useUpdatePayFastActivationMutation();

    const submitPayFastActivationData = () => {
        const abc = { ...inputval, status: statusD }
        editPayFastActivationD(abc)
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("PayFast Activation Updated Successfully !", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("PayFast Activation not Updated !", {
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


    return (
        <>
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-header">
                        <h3 className="mb-0 h6 text-center">Payfast Activation</h3>
                    </div>
                    <div className="card-body text-center">
                        <div className="clearfix activation-type-image">
                            <img className="float-left" src='https://mmslfashions.in/public/assets/img/cards/payfast.png' />
                            <label className="aiz-switch aiz-switch-success mb-0 float-right">
                                <input type="checkbox" name='status' checked={statusD?.status} onChange={onChangeHandler} />
                                <span className="slider round" />
                            </label>
                        </div>
                        <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>You need to configure payfast correctly to enable this feature. Configure Now<Link to="#">Configure Now</Link> </div>
                        <button className='btn btn-primary mt-3' type='button' onClick={submitPayFastActivationData}>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PayFastActivation