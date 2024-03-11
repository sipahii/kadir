import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";

function AddDiamondRateCardComp() {
    const [inputval, setInputVal] = useState({
        name: '', country_id: '', shape_id: '', description: '', default: false, isActive: false
    })
    const [selectShapeData, setSelectShapeData] = useState(null);
    const [selectCountryData, setSelectCountryShapeData] = useState(null);

    const token = window.localStorage.getItem('adminToken');
    const params = useParams();


    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpVal;
        setInputVal(clonedObj)
    };

    const toastSuccessMessage1 = () => {
        toast.success("Diamond Rate Updated", {
            position: "top-center"
        })
    };
    const toastErrorMessage1 = () => {
        toast.error("Diamond Rate Not Updated ", {
            position: "top-center"
        })
    };
    const toastSuccessMessage2 = () => {
        toast.success("Diamond Rate Added", {
            position: "top-center"
        })
    };
    const toastErrorMessage2 = () => {
        toast.error("Diamond Rate Not Added", {
            position: "top-center"
        })
    };

    const sendData = async () => {
        if (params?.id) {
            try {
                const res = await axios.put(`https://onlineparttimejobs.in/api/rateCard/diamond/update_diamond/${params?.id}`, inputval, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                })
                toastSuccessMessage1()
            } catch (error) {
                toastErrorMessage1()
            }

        } else {
            try {
                const res = await axios.post(`https://onlineparttimejobs.in/api/rateCard/diamond/add_diamond`, inputval, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                })
                toastSuccessMessage2()
            } catch (error) {
                toastErrorMessage2()
            }

        }
        console.log('inputval---', inputval)
    };

    const getCountrySelectData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/country/admin`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setSelectCountryShapeData(res.data)
    };
    const getShapeSelectData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/shape`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setSelectShapeData(res.data)
    };

    useEffect(() => {
        getCountrySelectData();
        getShapeSelectData();
    }, []);

    const getByIdData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/rateCard/diamond/${params?.id}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setInputVal(res.data)
    };
    useEffect(() => {
        getByIdData()
    }, [params.id])



    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '3px' }}>
                            <div className="">
                                <h1 className="h3">{params.id ? 'Update' : 'Add'} Diamond</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5>{params.id ? 'Update' : 'Add'} Diamond</h5>
                        </div>
                        <div className="card-body">

                            <section className="form-section">
                                <div className="row">

                                    <div className="col-lg-6">
                                        <div>
                                            <input type="text" name="name" value={inputval?.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tittle*" onChange={onChangeHandler} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <select className="form-control form-select" name="country_id" value={inputval?.country_id} aria-label="Default select example" onChange={onChangeHandler}>
                                            <option selected>Select Country</option>
                                            {selectCountryData && selectCountryData.map((item, i) => {
                                                return <option value={item?._id} key={i}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                        <select className="form-control form-select" name="shape_id" value={inputval?.shape_id} aria-label="Default select example" onChange={onChangeHandler}>
                                            <option selected>Select Shape</option>
                                            {selectShapeData && selectShapeData.map((item, i) => {
                                                return <option value={item?._id} key={i}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-lg-12 mt-4">
                                        <div>
                                            <textarea type="text" name="description" value={inputval?.description} className="form-control" rows={5} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description*" onChange={onChangeHandler} >
                                            </textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mt-4">
                                        <label className='ms-3' style={{ fontSize: '14px' }}>Default</label>
                                        <select className="form-select form-control" name="default" value={inputval?.default} aria-label="Default select example" onChange={onChangeHandler}>
                                            <option selected>IS Active</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>

                                    <div className="col-lg-6 mt-4">
                                        <label className='ms-3' style={{ fontSize: '14px' }}>Status</label>
                                        <select className="form-select form-control" name="isActive" value={inputval?.isActive} aria-label="Default select example" onChange={onChangeHandler}>
                                            <option selected>IS Active</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>


                                    <div className="col-lg-3 mt-3">
                                        <div className="form-group text-right mt-4">
                                            <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={sendData}>Save</button>
                                            <button className="btn btn-danger ms-2">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default AddDiamondRateCardComp