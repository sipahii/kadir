import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useGetFlutterActivationQuery, useGetPayTmActivationQuery, useUpdateFlutterActivationMutation, useUpdatePayTmActivationMutation } from '../../Components/all-products/allproductsApi/allProductsApi';
import { Link } from 'react-router-dom';

function PayTmActivation() {

    const [inputval, setInputval] = useState({
        status: null
    });
    const [statusD, setStatusD] = useState()

    const { data } = useGetPayTmActivationQuery();
    useEffect(() => {
        const obj = { ...data }
        if (data) {
            setInputval(obj)
            setStatusD(obj)
        }
    }, [data]);

    console.log('paytmrConfigD---', data)

    const onChangeHandler = (e) => {
        setStatusD(!statusD)
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    const [editPayTmActivationD, response] = useUpdatePayTmActivationMutation();

    const submitPayTmActivationData = () => {
        const abc = { status: statusD }
        editPayTmActivationD(abc)
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("PayTmActivation Updated Successfully !", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("PayTmActivation not Updated !", {
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
                        <h3 className="mb-0 h6 text-center">PayTm Activation</h3>
                    </div>
                    <div className="card-body text-center">
                        <div className="clearfix activation-type-image">
                            <img className="float-left" src='https://assetscdn1.paytm.com/images/catalog/view/310944/1654517453942.png' />
                            <label className="aiz-switch aiz-switch-success mb-0 float-right">
                                <input type="checkbox" name='status' value={''} checked={statusD?.status} onChange={onChangeHandler} />
                                <span className="slider round" />
                            </label>
                        </div>
                        <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>You need to configure flutterwave correctly to enable this feature. Configure Now<Link to="#">Configure Now</Link> </div>

                        <button className='btn btn-primary mt-3' type='button' onClick={submitPayTmActivationData}>Save</button>

                        {/* <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>You need to configure flutterwave correctly to enable this feature. Configure Now<Link to="/admin/african/configuration/payment-method">Configure Now</Link> </div> */}
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default PayTmActivation