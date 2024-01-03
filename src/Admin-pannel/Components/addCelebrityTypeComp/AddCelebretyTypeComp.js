import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function AddCelebretyTypeComp() {
    const [inputVal, setInputVal] = useState({ name: "" });

    const handleChange = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const cloned = { ...inputVal };
        cloned[inpName] = inpVal;
        setInputVal(cloned)
    };

    const token = window.localStorage.getItem('adminToken');

    const toastSuccessMessage = () => {
        toast.success("Celebrity Type Added", {
            position: "top-center"
        })
    };
    const toastErrorMessage = () => {
        toast.error("Celebrity Type Not Added", {
            position: "top-center"
        })
    };

    const submitData = async () => {
        try {
            const resp = await axios.post(`https://onlineparttimejobs.in/api/sellermaster/add_sellermaster`, inputVal, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            toastSuccessMessage()
        } catch (error) {
            toastErrorMessage()
        }
    };



    return (
        <>
            <div className="col-md-5">

                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Add Celebrity Type</h5>
                    </div>
                    <div className="card-body">
                        <form id="create-course-form" onSubmit={''}>
                            <input type="hidden" name="_token" defaultValue="mFQ16X9Zo13qx9C2bzuKYymExbrY6MHLe0ZCOO2a" />
                            <div className="form-group mb-3">
                                <label htmlFor="name">Name</label>
                                <input type="text" placeholder="name" id="name" name="name" className="form-control" required autoComplete="off" onChange={handleChange} />
                            </div>
                            <div className="form-group mb-3 text-right">
                                <button type="button" className="btn btn-primary" onClick={submitData}>Add</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </>
    )
}

export default AddCelebretyTypeComp