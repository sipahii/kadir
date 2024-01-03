

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function ReasionMaster() {
    const token = window.localStorage.getItem('token')
    const [state, setState] = useState({
        code: '',
        description: "",
        active: true
    })
    const [idd, setidd] = useState(null)
    const onchangehandle = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }
    const toastSuccessMessage1 = (str) => {
        toast.success(`${str}`, {
            position: "top-center"
        })
    };

    const toastErrorMessage1 = (str) => {
        toast.error(`${str}`, {
            position: "top-center"
        })
    };
    const sendData = async (id) => {
        if (idd) {
            try {
                const res = await axios.put(`https://onlineparttimejobs.in/api/specialSellerReason/update_reason/${idd}`, state, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                });
                toastSuccessMessage1('Reason edit Successfully')

            } catch (error) {
                toastErrorMessage1('Reason not edit')
            }
        } else {
            try {
                const res = await axios.post(`https://onlineparttimejobs.in/api/specialSellerReason/add_reason`, state, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                });
                toastSuccessMessage1('Reason Added Successfully')

            } catch (error) {
                toastErrorMessage1('Reason not Added')
            }
        }
        getData()
        setidd(null)
    }

    const [datas, setDatas] = useState(null)
    const getData = async (id) => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/specialSellerReason`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            setDatas(res.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        getData()
    }, [])



    const deleteData = async (id) => {
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api/specialSellerReason/delete_reason/${id}`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            toastSuccessMessage1('Reasion Delete Successfully')
            getData()

        } catch (error) {
            toastErrorMessage1('Reasion Not Delete')
        }
    }
    const editItem = (item) => {
        setidd(item._id)
        setState({
            code: item.code,
            description: item.description,
            active: item.active
        })
    }

    return (
        <>
            <ToastContainer />
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="align-items-center">
                            <h1 className="h2">Reason Master</h1>
                        </div>
                    </div>
                    <div className="row">

                        <div className="card">
                            <form className="form-horizontal" id="create-course-form">

                                <div className="form-group row">
                                    <label className="col-md-3 col-form-label">Code</label>
                                    <div className="col-md-6">
                                        <input className="form-control" style={{ margin: "10px 0" }} value={state.code} onChange={onchangehandle} name="code" placeholder="code" />
                                    </div>

                                </div>
                                <div className="form-group row">
                                    <label className="col-md-3 col-form-label">Description</label>
                                    <div className="col-md-6">
                                        <input className="form-control" style={{ margin: "10px 0" }} value={state.description} onChange={onchangehandle} name="description" placeholder="description" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-3 col-form-label">Status</label>
                                    <div className="col-md-6">
                                        <Form.Select aria-label="Default select example" value={state.active} onChange={onchangehandle} name="active" >
                                            <option value={true}>Active</option>
                                            <option value={false}>De-Active</option>
                                        </Form.Select>
                                    </div>
                                </div>


                                <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { sendData() }}>Save</button>
                            </form>
                        </div>
                    </div>

                </div>


                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="align-items-center">
                            <h1 className="h2">Reason Master List</h1>
                        </div>
                    </div>
                    <div className="row">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Code</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datas && datas?.map((item, i) => {
                                    return <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{item?.code}</td>
                                        <td>{item?.description}</td>
                                        <td>{item?.active ? 'Active' : 'De-Active'}</td>
                                        <td>
                                            <Link
                                                className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                                                title="Edit"
                                                to={`#`}
                                                onClick={() => { editItem(item) }}
                                            >
                                                <i className="las la-edit" />
                                            </Link>
                                            <button
                                                type="button"
                                                className="btn btn-soft-danger btn-icon btn-circle btn-sm"
                                                onClick={() => { deleteData(item._id) }}
                                            >
                                                <i className="las la-trash" />
                                            </button>
                                        </td>
                                    </tr>
                                })}


                            </tbody>
                        </table>
                    </div>

                </div>


                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
            </div>
        </>
    )
}
export default ReasionMaster;