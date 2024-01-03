import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useGetLinkedInCredentailQuery, useUpdateLinkedInCredentailMutation } from '../../all-products/allproductsApi/allProductsApi';

function LinkdInCredential() {

    const [inputVal, setInputval] = useState({
        client_id: '', client_secret: ''
    });

    const { isLoading, data } = useGetLinkedInCredentailQuery();
    console.log('LinkedIncredentailD---', data)

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

    const [updateLinkedInCredentialD, response] = useUpdateLinkedInCredentailMutation();

    const submitUpdateLinkedInCredential = (e) => {
        e.preventDefault();
        const abc = { ...inputVal }
        updateLinkedInCredentialD(abc)
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("LinkedIn Credential Updated Successfully !", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("LinkedIn Credential not Updated !", {
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
                        <h3 className="mb-0 h6">LinkedIn</h3>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" id="create-course-form" onSubmit={submitUpdateLinkedInCredential}>
                            <input type="hidden" name="_token" defaultValue="bZlht2QD73bDkPhHtuYc3AVcfnrS42HFjF5kM5xe" />
                            <input type="hidden" name="payment_method" defaultValue="flutterwave" />

                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="FLW_PUBLIC_KEY" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">CLIENT_KEY</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" value={inputVal?.client_id} name="client_id" placeholder="CLIENT_ID" required fdprocessedid="3dbyrq" onChange={onChangeHandler} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="FLW_SECRET_KEY" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">SECRET_KEY</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" value={inputVal?.client_secret} name="client_secret" placeholder="SECRET_KEY" required fdprocessedid="fucvcm" onChange={onChangeHandler} />
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

export default LinkdInCredential