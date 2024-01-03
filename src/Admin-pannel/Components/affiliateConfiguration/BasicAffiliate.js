import React, { useEffect, useState } from 'react'
import { useGetBasicAffiliateQuery, useUpdateAffiliateBasicMutation } from '../all-products/allproductsApi/allProductsApi';
import { ToastContainer, toast } from 'react-toastify';

function BasicAffiliate() {

    const [inputval, setInputval] = useState({
        userFirst_Purchase: '',
        status: null
    });
    const [statusD, setStatusD] = useState()

    const { data } = useGetBasicAffiliateQuery();
    useEffect(() => {
        const obj = { ...data }
        if (data) {
            setInputval(obj[0]?.basic_affiliate)
            setStatusD(obj[0]?.basic_affiliate.status)
        }
    }, [data]);

    console.log('basicData---', data)

    const onChangeHandler = (e) => {
        setStatusD(!statusD)
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    const [editAffiliateBasic, response] = useUpdateAffiliateBasicMutation();

    const submitUpdateAffiliateBasic = (e) => {
        e.preventDefault();
        const abc = { ...inputval, status: statusD }
        editAffiliateBasic({ basic_affiliate: abc })
        document.getElementById("create-course-form").reset();
    };


    const toastSuccessMessage = () => {
        toast.success("Basic Affiliate Updated Successfully !", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("Basic Affiliate not Updated !", {
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
                        <h6 className="mb-0 h6">Basic Affiliate</h6>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" id='create-course-form' onSubmit={submitUpdateAffiliateBasic}>

                            <div className="form-group row">
                                <input
                                    type="hidden"
                                    name="type"
                                    defaultValue="user_registration_first_purchase"
                                />
                                <div className="col-lg-4">
                                    <label className="control-label">
                                        User Registration &amp; First Purchase
                                    </label>
                                </div>
                                <div className="col-lg-6">

                                    <input type="number" className="form-control" name="userFirst_Purchase" value={inputval?.userFirst_Purchase}
                                        placeholder="Percentage of Order Amount" required fdprocessedid="k81gnb" onChange={onChangeHandler} />
                                </div>

                                <div className="col-lg-2">
                                    <label className="control-label">%</label>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-4">
                                    <label className="control-label">Status</label>
                                </div>
                                <div className="col-lg-8">
                                    <label className="aiz-switch aiz-switch-success mb-0">
                                        <input
                                            // value={1}
                                            name="status"
                                            type="checkbox"
                                            checked={statusD}
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
                                    Save
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

export default BasicAffiliate;