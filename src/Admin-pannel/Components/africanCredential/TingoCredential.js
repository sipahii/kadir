import React, { useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import { useGetTingoCredentialQuery, useUpdateTingoCredentialMutation } from '../all-products/allproductsApi/allProductsApi';

function TingoCredential() {


    const [inputVal, setInputval] = useState({
        TING_CLIENT_ID: '', TING_SECRET_ID: '', TING_APP_ID: '', TING_CLIENT_APIKEY: '', status: null
    });

    const [statusD, setStatusD] = useState()

    const { isLoading, data } = useGetTingoCredentialQuery();
    console.log('TinngoootD---', data)

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

    const [updateTingoD, response] = useUpdateTingoCredentialMutation();

    const submitUpdateTingoCredential = (e) => {
        e.preventDefault();
        const abc = { ...inputVal }
        updateTingoD(abc)
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("Tingo Credential Updated Successfully !", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("Tingo Credential not Updated !", {
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
                        <h3 className="mb-0 h6">Cellular Tingo</h3>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" onSubmit={submitUpdateTingoCredential}>

                            <div className="form-group row">
                                <div className="col-lg-4">
                                    <label className="col-from-label">CLIENT_ID</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" value={inputVal?.TING_CLIENT_ID} name="TING_CLIENT_ID" required fdprocessedid="3b7pv6" onChange={onChangeHandler} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <input type="hidden" name="types[]" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">SECRET_ID</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="TING_SECRET_ID" value={inputVal?.TING_SECRET_ID
                                    } required fdprocessedid="fan0vl" onChange={onChangeHandler} />
                                </div>
                            </div>


                            <div className="form-group row">
                                <input type="hidden" name="types[]" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">APP_ID</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="TING_APP_ID" value={inputVal?.TING_APP_ID} required fdprocessedid="fan0vl" onChange={onChangeHandler} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">TING_CLIENT_APIKEY</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="TING_CLIENT_APIKEY" value={inputVal?.TING_CLIENT_APIKEY
                                    } required fdprocessedid="fan0vl" onChange={onChangeHandler} />
                                </div>
                            </div>

                            {/* <div className="form-group row">
                                <div className="col-md-4">
                                    <label className="col-from-label">Tingo Sandbox Mode</label>
                                </div>
                                <div className="col-md-8">
                                    <label className="aiz-switch aiz-switch-success mb-0">
                                        <input name="status" type="checkbox" checked={statusD} onChange={onChangeHandler} />
                                        <span className="slider round" />
                                    </label>
                                </div>
                            </div> */}

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
export default TingoCredential