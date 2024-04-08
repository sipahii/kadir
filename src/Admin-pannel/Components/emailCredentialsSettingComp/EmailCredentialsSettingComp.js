import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from 'axios';

function EmailCredentialsSettingComp() {
    const [spinn, setSpinn] = useState(false)
    const [inpdata, setInpData] = useState();
    const [inputVal, setInputval] = useState({
        email: '', password: '', port_no: '', service: '', host: '',
    });
    const token = window.localStorage.getItem('token')

    const getInputsData = async () => {
        setSpinn(true)
        try {
            const res = await axios.get('https://onlineparttimejobs.in/api/emailCredential', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setInpData(res?.data?.email);
            setSpinn(false)
        } catch (error) {
            setSpinn(false)
        }
    };
    useEffect(() => {
        getInputsData();
    }, []);



    useEffect(() => {
        const clon = { ...inpdata }
        if (inpdata) {
            setInputval(clon);
        }
    }, [inpdata]);

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    const toastSuccessMessage = () => {
        toast.success("Email Credential Updated", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("Email Credential not Updated !", {
            position: "top-center"
        })
    };

    const submitUpdateFlutterCredential = async (e) => {
        e.preventDefault();
        const abc = { ...inputVal };
        setSpinn(true)
        try {
            const res = await axios.put('https://onlineparttimejobs.in/api/emailCredential/update', abc, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setSpinn(false);
            toastSuccessMessage()
        } catch (error) {
            setSpinn(false)
            toastErrorMessage();
        }
        document.getElementById("create-course-form").reset();
    };

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="card">
                                {spinn && <div className="preloaderCount">
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>}
                                <div className="card-header">
                                    <h3 className="mb-0 h6">Email Credentials</h3>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" id="create-course-form" onSubmit={submitUpdateFlutterCredential}>
                                        <div className="form-group row">
                                            <div className="col-lg-4">
                                                <label className="col-from-label">Email</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" className="form-control" value={inputVal?.email} name="email" placeholder="Email" required fdprocessedid="3dbyrq" onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-lg-4">
                                                <label className="col-from-label">Password</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" className="form-control" value={inputVal?.password} name="password" placeholder="password" required fdprocessedid="fucvcm" onChange={onChangeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-lg-4">
                                                <label className="col-from-label">Port No</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" className="form-control" value={inputVal?.port_no} name="port_no" placeholder="Port No" required fdprocessedid="7gb0aa" onChange={onChangeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-lg-4">
                                                <label className="col-from-label">Sevice</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" className="form-control" value={inputVal?.service} name="service" placeholder="Service" required fdprocessedid="v7bidh" onChange={onChangeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-lg-4">
                                                <label className="col-from-label">Host</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" className="form-control" value={inputVal?.host} name="host" placeholder="Host" required fdprocessedid="7gb0aa" onChange={onChangeHandler} />
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
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>
        </>
    )
}

export default EmailCredentialsSettingComp