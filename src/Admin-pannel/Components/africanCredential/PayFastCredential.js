import { useEffect, useState } from "react";
import { useGetPayFastCredentialQuery, useUpdatePayFastCredentialMutation } from "../all-products/allproductsApi/allProductsApi";
import { ToastContainer, toast } from "react-toastify";

function PayFastCredential() {

    const [inputVal, setInputval] = useState({
        PAYFAST_Sandbox_Mode: null, PAYFAST_MERCHANT_ID: '', PAYFAST_MERCHANT_KEY: ''
    });

    const [statusD, setStatusD] = useState()

    const { isLoading, data } = useGetPayFastCredentialQuery();
    // console.log('payfastD---', data)

    useEffect(() => {
        const clon = { ...data }
        if (data) {
            setInputval(clon);
            setStatusD(clon.PAYFAST_Sandbox_Mode)
        }
    }, [data]);

    const onChangeHandler = (e) => {
        setStatusD(!statusD)
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    const [updatePayFastD, response] = useUpdatePayFastCredentialMutation();

    const submitUpdatePayFastCredential = (e) => {
        e.preventDefault();
        const abc = { ...inputVal, PAYFAST_Sandbox_Mode: statusD }
        updatePayFastD(abc)
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("PayFast Credential Updated Successfully !", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("PayFast Credential not Updated !", {
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

    console.log('inputVal-----------', inputVal)

    return (
        <>
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h3 className="mb-0 h6">PAYFAST</h3>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" id="create-course-form" onSubmit={submitUpdatePayFastCredential}>

                            <div className="form-group row">
                                <div className="col-lg-4">
                                    <label className="col-from-label">PAYFAST_MERCHANT_ID</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" value={inputVal?.PAYFAST_MERCHANT_ID} name="PAYFAST_MERCHANT_ID" required fdprocessedid="3b7pv6" onChange={onChangeHandler} />
                                </div>
                            </div>  

                            <div className="form-group row">
                                <input type="hidden" name="types[]" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">PAYFAST_MERCHANT_KEY</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" value={inputVal?.PAYFAST_MERCHANT_KEY
                                    } name="PAYFAST_MERCHANT_KEY" required fdprocessedid="fan0vl" onChange={onChangeHandler} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-4">
                                    <label className="col-from-label">PAYFAST Sandbox Mode</label>
                                </div>
                                <div className="col-md-8">
                                    <label className="aiz-switch aiz-switch-success mb-0">
                                        <input name="PAYFAST_Sandbox_Mode" type="checkbox" checked={statusD} />
                                        <span className="slider round" onChange={onChangeHandler} />
                                    </label>
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="cjyzo">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
export default PayFastCredential;