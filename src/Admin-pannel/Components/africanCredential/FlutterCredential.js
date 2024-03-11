import { useEffect, useState } from "react";
import { useGetFlutterCredentialQuery, useUpdateFlutterCredentialMutation } from "../all-products/allproductsApi/allProductsApi";
import { ToastContainer, toast } from "react-toastify";

function FlutterCredential() {

    const [inputVal, setInputval] = useState({
        PAYFAST_Sandbox_Mode: null, PAYFAST_MERCHANT_ID: '', PAYFAST_MERCHANT_KEY: ''
    });

    const { isLoading, data } = useGetFlutterCredentialQuery();
    console.log('FlutterD---', data)

    useEffect(() => {
        const clon = { ...data }
        if (data) {
            setInputval(clon);
        }
    }, [data]);

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    const [updateflutterD, response] = useUpdateFlutterCredentialMutation();

    const submitUpdateFlutterCredential = (e) => {
        e.preventDefault();
        const abc = { ...inputVal }
        updateflutterD(abc)
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("Flutter Credential Updated Successfully !", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("Flutter Credential not Updated !", {
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
                        <h3 className="mb-0 h6">Flutterwave</h3>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" id="create-course-form" onSubmit={submitUpdateFlutterCredential}>
                            <input type="hidden" name="_token" defaultValue="bZlht2QD73bDkPhHtuYc3AVcfnrS42HFjF5kM5xe" />
                            <input type="hidden" name="payment_method" defaultValue="flutterwave" />

                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="FLW_PUBLIC_KEY" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">FLW_PUBLIC_KEY</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" value={inputVal?.FLW_PUBLIC_KEY} name="FLW_PUBLIC_KEY" placeholder="FLW_PUBLIC_KEY" required fdprocessedid="3dbyrq" onChange={onChangeHandler} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="FLW_SECRET_KEY" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">FLW_SECRET_KEY</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" value={inputVal?.FLW_SECRET_KEY} name="FLW_SECRET_KEY" placeholder="FLW_SECRET_KEY" required fdprocessedid="fucvcm" onChange={onChangeHandler} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">FLW_SECRET_HASH</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" value={inputVal?.FLW_SECRET_HASH} name="FLW_SECRET_HASH" placeholder="FLW_SECRET_HASH" required fdprocessedid="7gb0aa" onChange={onChangeHandler} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="FLW_PAYMENT_CURRENCY_CODE" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">FLW_PAYMENT_CURRENCY_CODE</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" value={inputVal?.FLW_PAYMENT_CURRENCY_CODE} name="FLW_PAYMENT_CURRENCY_CODE" placeholder="FLW_PAYMENT_CURRENCY_CODE" required fdprocessedid="v7bidh" onChange={onChangeHandler} />
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="9iw6cm">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
export default FlutterCredential;