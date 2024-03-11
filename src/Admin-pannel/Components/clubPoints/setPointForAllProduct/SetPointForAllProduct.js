import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { useAddPointForAllProductsMutation } from '../../all-products/allproductsApi/allProductsApi';

function SetPointForAllProduct() {

    const [inputVal, setInputval] = useState({ points: "" });

    const changeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputVal }
        clonedObj[inpName] = inpVal
        setInputval(clonedObj)
    };
    const [addPointsForAllProductData, response] = useAddPointForAllProductsMutation();

    const submitPointForAllProdData = (e) => {
        e.preventDefault();
        addPointsForAllProductData(inputVal)
        console.log(inputVal)
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("PointForAllProducts added Successfully", {
            position: "top-center"
        })
    };

    const toastErroeMessage = () => {
        toast.error("!Error PointForAllProducts not added")
    };

    useEffect(() => {
        if (response.isSuccess === true) {
            toastSuccessMessage()
        };
    }, [response]);

    useEffect(() => {
        if (response.isError === true) {
            toastErroeMessage()
        };
    }, [response]);


    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">Set Point for all Products</h5>
                </div>
                <div className="card-body">
                    <form className="form-horizontal" id='create-course-form' onSubmit={submitPointForAllProdData}>

                        <div className="form-group row">
                            <div className="col-lg-4">
                                <label className="col-from-label">Set Point For ZK1.00</label>
                            </div>
                            <div className="col-lg-6">
                                <input type="number" className="form-control" name="points" required fdprocessedid="r3wlmc" onChange={changeHandler} />
                            </div>
                            <div className="col-lg-2">
                                <label className="col-from-label">Points</label>
                            </div>
                        </div>
                        <div className="form-group mb-0 text-right">
                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="se2zuo">Save</button>
                        </div>
                    </form>

                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default SetPointForAllProduct