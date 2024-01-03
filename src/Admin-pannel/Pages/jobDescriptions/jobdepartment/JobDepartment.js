
import axios from "axios"
import { useEffect, useState } from "react"
import { Form } from "react-bootstrap"

function JobDepartment() {

    const [state, setState] = useState({
        departmentCode: "",
        departmentName: "",
        active: true,
    })

    const [updateBtn, setUpdateBtn] = useState(false)

    const handelChange = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }
    const handelChangeStatus = (stat) => {
        const clone = { ...state, active: stat }
        setState(clone)
    }
    const [idd, setidd] = useState(null)

    const sendData = async () => {
        if (updateBtn) {
            try {
                const res = await axios.put(`https://onlineparttimejobs.in/api/jobDepartment/update_department/${idd}`, state, {
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'Authorization': 'Bearer ' + window.localStorage.getItem('token')
                    },
                })
                alert("Jon Department Update Successfully")
                getData()
                setUpdateBtn(false)
            } catch (error) {
                alert('Jon Department Update Failed!')
            }
        } else {
            try {
                const res = await axios.post(`https://onlineparttimejobs.in/api/jobDepartment/add_department`, state, {
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'Authorization': 'Bearer ' + window.localStorage.getItem('token')
                    },
                })
                alert("Jon Department Added Successfully")
                getData()
            } catch (error) {
                alert('Jon Department Not Added!')
            }
        }

    }


    const [data, setData] = useState(null)

    const getData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/jobDepartment`, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + window.localStorage.getItem('token')
                },
            })
            setData(res.data)
        } catch (error) {
            // alert('Jon Department !')
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const deleteItem = async (id) => {
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api/jobDepartment/delete_department/${id}`, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + window.localStorage.getItem('token')
                },
            })
            getData()
        } catch (error) {
            alert('Jon Department Not Delete!')
        }
    }

    const updateDataGet = (item) => {
        const obj = {
            departmentCode: item?.departmentCode,
            departmentName: item?.departmentName,
            active: item.active,
        }
        setState(obj)
        setidd(item._id)
        setUpdateBtn(true)
    }

    return <>
        <div className="aiz-main-content" style={{ width: "1000px", margin: "auto" }}>
            <div className="px-15px px-lg-25px">
                <div className="row">
                    <div className="col-lg-8 mx-auto"></div>

                    <div className="card">
                        <div className="card-header">
                            <h6 className="fw-600 mb-0">Job Department </h6>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group row">
                                    <label className="col-md-3 col-from-label">Department Code *</label>
                                    <div className="col-md-8">
                                        <input type="text" name="departmentCode" onChange={handelChange} value={state.departmentCode} className="form-control" placeholder="Department Code" fdprocessedid="t2ds68j" />
                                    </div>
                                </div>


                                <div className="form-group row">
                                    <label className="col-md-3 col-from-label">Department Name</label>
                                    <div className="col-md-8">
                                        <input type="text" name="departmentName" onChange={handelChange} value={state.departmentName} className="form-control" placeholder="Department Name" fdprocessedid="t2ds68j" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-md-3 col-from-label">Status</label>

                                    <div className="col-md-8">
                                        <Form.Select aria-label="Default select example" name="active" onChange={() => { handelChangeStatus(!state.active) }} value={state.active}>
                                            <option value={true}>Active</option>
                                            <option value={false}>De Active</option>
                                        </Form.Select>
                                    </div>
                                </div>


                                <div className="text-right">
                                    <button type="button" onClick={sendData} className="btn btn-primary" fdprocessedid="nl9ds4">{updateBtn ? 'Update' : 'Save'}</button>
                                </div>
                            </form>
                        </div>
                    </div>


                    <div className="card">
                        <div className="card-header">
                            <h6 className="fw-600 mb-0">Job Department List </h6>
                        </div>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Department Code</th>
                                        <th scope="col">Department Name</th>
                                        <th scope="col">Active</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data?.map((item, i) => {
                                        return <tr>
                                            <th scope="row">{1 + i}</th>
                                            <td>{item?.departmentCode}</td>
                                            <td>{item?.departmentName}</td>
                                            <td>{item?.active ? 'Active' : 'De Active'}</td>
                                            <td>
                                                <a class="btn btn-soft-primary btn-icon btn-circle btn-sm" onClick={() => { updateDataGet(item) }} title="Edit" to="#"><i class="las la-edit"></i></a>
                                                <button onClick={() => { deleteItem(item?._id) }} type="button" class="btn btn-soft-danger btn-icon btn-circle btn-sm"><i class="las la-trash"></i></button>
                                            </td>
                                        </tr>
                                    })}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default JobDepartment