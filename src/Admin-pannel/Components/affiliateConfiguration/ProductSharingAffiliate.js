import React, { useEffect, useState } from 'react'
import { useGetBasicAffiliateQuery, useUpdateProductsSharingAffiliateMutation } from '../all-products/allproductsApi/allProductsApi';
import { ToastContainer, toast } from 'react-toastify';

function ProductSharingAffiliate() {

    const [inputval, setInputval] = useState({
        percentage: '',
        status: null
    });
    const [sharingStatusD, setSharingStatusD] = useState()

    const { data } = useGetBasicAffiliateQuery();
    useEffect(() => {
        const obj = { ...data }
        if (data) {
            setInputval(obj[0]?.product_sharing_affiliate);
            setSharingStatusD(obj[0]?.product_sharing_affiliate.status)
        }
    }, [data]);

    console.log('sharingData--', data);

    const onChangeHandler = (e) => {
        setSharingStatusD(!sharingStatusD)
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    const [updateProductSharing, response] = useUpdateProductsSharingAffiliateMutation();

    const submitUpdateProductSharing = (e) => {
        e.preventDefault();
        const abc = { ...inputval, status: sharingStatusD }
        updateProductSharing({ product_sharing_affiliate: abc })
        document.getElementById("create-course-form").reset();
    };


    const toastSuccessMessage = () => {
        toast.success("Product Sharing Affiliate Updated Successfully !", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("Product Sharing Affiliate not Updated !", {
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
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h3 className="mb-0 h6">Product Sharing Affiliate</h3>
                    </div>
                    <div className="card-body">
                        <form id='create-course-form' onSubmit={submitUpdateProductSharing}>
                            <div className="form-group row">
                                <label className="col-lg-3 col-from-label">
                                    Product Sharing and Purchasing
                                </label>
                                <div className="col-lg-6">
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="percentage"
                                        value={inputval?.percentage}
                                        placeholder="Percentage of Order Amount"
                                        required
                                        fdprocessedid="c1mx8"
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div className="col-md-3">

                                    <select className="form-select  form-control aiz-" aria-label="Default select example">
                                        <option >$</option>
                                        <option value="1">%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-4">
                                    <label className="control-label">Status</label>
                                </div>
                                <div className="col-lg-8">
                                    <label className="aiz-switch aiz-switch-success mb-0">
                                        <input
                                            value={1}
                                            name="status"
                                            type="checkbox"
                                            checked={sharingStatusD}
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
                                    fdprocessedid="x08ay"
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

export default ProductSharingAffiliate