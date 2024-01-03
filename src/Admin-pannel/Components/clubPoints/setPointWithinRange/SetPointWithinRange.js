import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { useAddSetProductPointWithinRangeMutation } from '../../all-products/allproductsApi/allProductsApi';

function SetPointWithinRange() {

    const [inputVal, setInputval] = useState({ set_point: "", min_price: "", max_price: '' });

    const changeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputVal }
        clonedObj[inpName] = inpVal
        setInputval(clonedObj)
    };
    const [sendSetPointWithinRangeD, response] = useAddSetProductPointWithinRangeMutation();

    const submitSetPointWithinRangeData = (e) => {
        e.preventDefault();
        sendSetPointWithinRangeD(inputVal)
        console.log(inputVal)
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("ProductPointWithinRange added Successfully !", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("ProductPointWithinRange not added !")
    };

    useEffect(() => {
        if (response.isSuccess === true) {
            toastSuccessMessage()
        };
    }, [response]);

    useEffect(() => {
        if (response.isError === true) {
            toastErrorMessage()
        };
    }, [response]);


    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">Set Point for Product Within a Range</h5>
                </div>
                <div className="card-body">
                    <div className="mb-3 text-muted">
                        <small>Set any specific point for those products what are between Min-price and Max-price. Min-price should be less than Max-price</small>
                    </div>
                    <form className="form-horizontal" id='create-course-form' onSubmit={submitSetPointWithinRangeData}>

                        <div className="form-group row">
                            <div className="col-lg-6">
                                <label className="col-from-label">Set Point for multiple products</label>
                            </div>
                            <div className="col-lg-6">
                                <input type="number" className="form-control" name="set_point" required fdprocessedid="6asizp" onChange={changeHandler} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-lg-6">
                                <label className="col-from-label">Min Price</label>
                            </div>
                            <div className="col-lg-6">
                                <input type="number" className="form-control" name="min_price" required fdprocessedid="2vrdyf" onChange={changeHandler} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-lg-6">
                                <label className="col-from-label">Max Price</label>
                            </div>
                            <div className="col-lg-6">
                                <input type="number" className="form-control" name="max_price" required fdprocessedid="j07u24" onChange={changeHandler} />
                            </div>
                        </div>

                        <div className="form-group mb-0 text-right">
                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="5wvxop">Save</button>
                        </div>

                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default SetPointWithinRange