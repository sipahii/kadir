import React, { useEffect, useState } from 'react';
import { useGetBasicAffiliateQuery, useUpdateLinkValidationTimeMutation } from '../all-products/allproductsApi/allProductsApi';
import { ToastContainer, toast } from 'react-toastify';

function AffiliateLinkValidatingTime() {

    const [inputval, setInputval] = useState({
        validation_time: ""
    });

    const { data } = useGetBasicAffiliateQuery();
    useEffect(() => {
        const obj = { ...data }
        if (data) {
            setInputval(obj[0].affiliate_Link)
        }
    }, [data]);

    console.log('linkData---', data)

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = +inpval;
        setInputval(clonedObj)
    };

    const [updateLinkValidationTime, response] = useUpdateLinkValidationTimeMutation();

    const submitUpdateLinkValidationTime = (e) => {
        e.preventDefault();
        // const abc = { ...inputval }
        updateLinkValidationTime(inputval)
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("Affiliate Link Validation on Time Updated Successfully !", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("Affiliate Link Validation on Time not Updated !", {
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
            <div className="col-md-6">
                <div className="card bg-gray-light">
                    <div className="card-header">
                        <h3 className="mb-0 h6">
                            Affiliate Link Validatin Time (Days)
                        </h3>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" id='create-course-form' onSubmit={submitUpdateLinkValidationTime}>

                            <div className="form-group row">
                                <div className="col-lg-4">
                                    <input
                                        type="hidden"
                                        className="form-control"
                                        name="type"
                                        defaultValue="validation_time"
                                    />
                                    <label className="control-label">Validation Time</label>
                                </div>
                                <div className="col-lg-8">
                                    <div className="input-group mb-3">
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="No of Days"
                                            name="validation_time"
                                            value={inputval?.validation_time}
                                            onChange={onChangeHandler}
                                        />
                                        <div className="input-group-prepend">
                                            <span
                                                className="input-group-text"
                                                id="basic-addon1"
                                            >
                                                Days
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button
                                    type="submit"
                                    className="btn btn-sm btn-primary"
                                    fdprocessedid="59jdlm"
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

export default AffiliateLinkValidatingTime