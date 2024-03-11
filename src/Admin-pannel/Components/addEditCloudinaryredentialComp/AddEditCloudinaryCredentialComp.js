import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useAddGeneralSettingMutation } from '../all-products/allproductsApi/allProductsApi';
import axios from 'axios';

function AddEditCloudinaryCredentialComp() {
    const token = window.localStorage.getItem('token')
    const [inputval, setInputval] = useState({
        api_secret: '',
        api_key: '',
        cloud_name: '',
    });

    const getInpvalD = async () => {
        try {
            const resp = await axios.get(`https://onlineparttimejobs.in/api/cloudinaryCredential`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                }
            })
            setInputval(resp?.data)
        } catch (error) {

        }
    };
    useEffect(() => {
        getInpvalD()
    }, []);

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    const addGeneralSettingData = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.put(`https://onlineparttimejobs.in/api/cloudinaryCredential/update_cloudinary`, inputval, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                }
            })
            toastSuccessMessage()
        } catch (error) {
            toastErrorMessage()
        }
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("Credential Updated Successfully", {
            position: "top-center"
        })
    };
    const toastErrorMessage = () => {
        toast.error("Credential Not Updated Successfully", {
            position: "top-center"
        })
    };


    return (
        <div className="aiz-main-content">
            <div className="px-15px px-lg-25px">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="card">
                            <div className="card-header">
                                <h1 className="mb-0 h6">Cloudinary Credential</h1>
                            </div>
                            <div className="card-body">

                                <form className="form-horizontal" id='create-course-form' onSubmit={addGeneralSettingData}>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Api Key</label>
                                        <div className="col-sm-9">
                                            <input type="text" name="api_key" value={inputval?.api_key} className="form-control" fdprocessedid="ihieoq" onChange={onChangeHandler} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Cloud Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" name="cloud_name" value={inputval?.cloud_name} className="form-control" fdprocessedid="ihieoq" onChange={onChangeHandler} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Api Secret</label>
                                        <div className="col-sm-9">
                                            <input type="text" name="api_secret" value={inputval?.api_secret} className="form-control" fdprocessedid="ihieoq" onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <button type="submit" className="btn btn-primary" fdprocessedid="a528s9">Update</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                {/*p class="mb-0">&copy;  v6.3.3</p*/}
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddEditCloudinaryCredentialComp