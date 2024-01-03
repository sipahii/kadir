import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useEditCouponMutation, useGetCouponByIdQuery } from '../../all-products/allproductsApi/allProductsApi';

function EditCoupon() {
    const [inputval, setInputval] = useState({
        code: '',
        type: '',
        start_date: '',
        end_date: ''
    });

    const params = useParams();

    const { data } = useGetCouponByIdQuery(params.id);
    useEffect(() => {
        const obj = { ...data }
        setInputval(obj)
    }, [data]);

    const [editCoup, response] = useEditCouponMutation();

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };
    const submitEditBrandData = (e) => {
        e.preventDefault();
        editCoup({ id: params.id, data: inputval })
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("Coupon Edited Successfully", {
            position: "top-center"
        })
    };

    if (response.isSuccess === true) {
        toastSuccessMessage()
    };
    if (response.isError === true) {
        alert('!Coupon not edited')
    };


    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <h5 className="mb-0 h6">Coupon Information</h5>
                    </div>
                    <div className="col-lg-8 mx-auto">
                        <div className="card">
                            <div className="card-body p-0">

                                <form className="p-4" id="create-course-form" onSubmit={submitEditBrandData}>
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label" htmlFor="currency name">Code<i className="las la-language text-danger" title="Translatable" />
                                        </label>
                                        <div className="col-sm-9">
                                            <input type="text" placeholder="code" id="code" name="code" className="form-control" required fdprocessedid="zp6g3o" value={inputval?.code} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Type</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="type" placeholder="type" fdprocessedid="vrvrin" value={inputval?.type} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Start Date</label>
                                        <div className="col-sm-9">
                                            <input type="date" className="form-control" name="start_date" placeholder="start date" fdprocessedid="vrvrin" value={inputval?.start_date} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">End Date</label>
                                        <div className="col-sm-9">
                                            <input type="date" className="form-control" name="end_date" placeholder="end date" fdprocessedid="vrvrin" value={inputval?.end_date} onChange={onChangeHandler} />
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
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default EditCoupon