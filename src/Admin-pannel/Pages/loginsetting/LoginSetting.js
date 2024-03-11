import React, { useEffect } from 'react';
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { SketchPicker } from 'react-color';

function LoginSetting() {

    const [inputVal, setInputVal] = useState({
        backgroundImage: '',
        backgroundColor: '',
        logoImage: '',
        title: '',
        helplineEmail: '',
        helplineNo: '',
    });
    const token = window.localStorage.getItem('token')

    const onChangeHandler = async (e, bull) => {
        const images = new FormData();
        if (bull) {
            images.append('image', e.target.files[0]);
            try {
                const res = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, images)
                const obj = { public_id: res.data.public_id, url: res.data.url }
                const clonedObj = { ...inputVal, [e.target.name]: obj };
                setInputVal(clonedObj)
            } catch (error) {
                console.log(" Image  not uploded");
            }
            images.delete('image');
        } else {
            const inpName = e.target.name;
            const inpVal = e.target.value;
            const clonedObj = { ...inputVal };
            clonedObj[inpName] = inpVal;
            setInputVal(clonedObj)
        }

    };

    const [color, setColor] = useState('#ffffff');

    const handleChange = (newColor) => {
        setColor(newColor.hex);
    };


    const toastSuccessMessage = () => {
        toast.success("Login Setting  Update Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("Login Setting  Not Update", {
            position: "top-center"
        })
    };

    const getData = async () => {
        try {
            const res = await axios.get('https://onlineparttimejobs.in/api/admin/loginTheme', {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                },
            })
            setInputVal(res.data)
        } catch (error) {

        }
    }
    const submitStaffData = async (e) => {
        const clone = {
            backgroundImage: inputVal.backgroundImage,
            backgroundColor: color ? color : inputVal.backgroundColor,
            logoImage: inputVal.logoImage,
            title: inputVal.title,
            helplineEmail: inputVal.helplineEmail,
            helplineNo: inputVal.helplineNo,
        }
        try {
            const res = await axios.put(`https://onlineparttimejobs.in/api/admin/loginTheme/update`, clone, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                },
            })
            toastSuccessMessage()

        } catch (error) {
            toastErrorMessage()
        }
    };

    useEffect(() => {
      
        getData()
    }, [])

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Login Page Setting</h5>
                                </div>
                                <form className="form-horizontal" id="create-course-form">
                                    <input type="hidden" name="_token" defaultValue="S0f7vDDtqJ5NbxPupX86gbiFGZumqx0Q8PyryILc" />
                                    <div className="card-body">


                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="password">LOGO</label>
                                            <div className="col-sm-9">
                                                <input type="file" placeholder="Province" name="logoImage" className="form-control" required onChange={(e) => { onChangeHandler(e, 'img') }} />
                                                {inputVal?.logoImage?.url && <img style={{ width: "140px", height: "140px" }} src={inputVal?.logoImage?.url} />}

                                            </div>

                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="password">Title</label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="Title" name="title" className="form-control" value={inputVal.title} required onChange={onChangeHandler} />
                                            </div>

                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="password">Help line No</label>
                                            <div className="col-sm-9">
                                                <input type="number" placeholder="Help line No" name="helplineNo"  value={inputVal.helplineNo} className="form-control" required onChange={onChangeHandler} />
                                            </div>

                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="password">Help line Email</label>
                                            <div className="col-sm-9">
                                                <input type="email" placeholder="Help line Email" name="helplineEmail" value={inputVal.helplineEmail} className="form-control" required onChange={onChangeHandler} />
                                            </div>

                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="password">Background Color</label>
                                            <div className="col-sm-9">
                                                <SketchPicker color={color} onChange={handleChange} />
                                            </div>

                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="password">Background Image</label>
                                            <div className="col-sm-9">
                                                <input type="file" placeholder="Background Image" name="backgroundImage" className="form-control" required onChange={(e) => { onChangeHandler(e, 'img') }} />
                                                {inputVal?.backgroundImage?.url && <img style={{ width: "140px", height: "140px" }} src={inputVal?.backgroundImage?.url} />}
                                            </div>

                                        </div>

                                        <div className="form-group mb-0 text-right">
                                            <button type="button" onClick={submitStaffData} className="btn btn-sm btn-primary">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto"></div>
                <ToastContainer />
            </div>
        </>
    )
}
export default LoginSetting