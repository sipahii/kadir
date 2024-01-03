import React, { useState, useRef, useEffect } from 'react'
import Select from 'react-select'
import { FiRefreshCcw } from 'react-icons/fi'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillTagFill } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import JoditEditor from 'jodit-react'
import { Link } from 'react-router-dom'


import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Form } from 'react-bootstrap'
import axios from 'axios'


function JobDes() {
    const [value, setValue] = useState('')

    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }


    const [show1, setShow1] = useState(false)
    const handleShow1 = () => {
        setShow1(true)
    }
    const handleClose1 = () => {
        setShow1(false)
    }


    const options = [
        { value: 1, label: "" }
    ]


    const editor = useRef(null)
    const [content, setContent] = useState(" ")

    const [state, setState] = useState({
        jobDescription: '',
        jobDepartment: '',
        jobGroup: '',
        name: '',
        jobCode: '',

    })

    const onChangeHandle = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }


    const [data, setData] = useState(null)
    const [data2, setData2] = useState(null)

    const getData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/jobGroup`, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + window.localStorage.getItem('token')
                },
            })
            setData(res.data)
        } catch (error) {
        }
    }
    const getData2 = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/jobDepartment`, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + window.localStorage.getItem('token')
                },
            })
            setData2(res.data)
        } catch (error) {
        }
    }
    useEffect(() => {
        getData()
        getData2()
    }, [])

    const [updateBtn, setUpdateBtn] = useState(false)
    const [idd, setidd] = useState(null)
    const sendData = async () => {
        if (updateBtn) {
            try {
                const res = await axios.put(`https://onlineparttimejobs.in/api/jobs/update_job/${idd}`, state, {
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'Authorization': 'Bearer ' + window.localStorage.getItem('token')
                    },
                })
                alert("Jon Update Successfully")
                getData()
                setUpdateBtn(false)
                handleClose()
            } catch (error) {
                alert('Jon Update Failed!')
            }
        } else {
            try {
                const res = await axios.post(`https://onlineparttimejobs.in/api/jobs/add_job`, state, {
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'Authorization': 'Bearer ' + window.localStorage.getItem('token')
                    },
                })
                alert("Jon Added Successfully")
                getData()
                handleShow()
                handleClose()
            } catch (error) {
                alert('Jon Not Added!')
                return
            }
        }
        getDatalist()
        setState({
            jobDescription: '',
            jobDepartment: '',
            jobGroup: '',
            name: '',
            jobCode: '',
        })
    }



    const [datalist, setDatalist] = useState(null)

    const getDatalist = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/jobs`, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + window.localStorage.getItem('token')
                },
            })
            setDatalist(res.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        getDatalist()
    }, [])


    const deleteItem = async (id) => {
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api/jobs/delete_job/${id}`, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + window.localStorage.getItem('token')
                },
            })
            getDatalist()
        } catch (error) {
            alert('Jon Not Delete!')
        }
    }

    const editDataJob = (item) => {
        setState({
            jobDescription: item.jobDescription,
            jobDepartment: item.jobDepartment,
            jobGroup: item.jobGroup,
            name: item.name,
            jobCode: item.jobCode,
        })
        setUpdateBtn(true)
        setidd(item._id)
        setShow(true)
    }
    return (
        <>
            <div className='container'>
                <div className=' bg-white col-md-12 '>
                    <div className='row '>
                        <div className='col-md-12 mt-3 d-flex'>
                            <button type='button' className='btn btn-primary' onClick={handleShow}>NEW JOB POSITION</button>

                            <Modal className='popup' show={show} onHide={handleClose} >
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        Add New Job
                                    </Modal.Title>

                                </Modal.Header>
                                <Modal.Body>
                                    <div className='row mt-3'>
                                        <div className="col-md-6 ">
                                            <label htmlFor="" className='form-label'><strong className='text-danger'>*</strong> Job Code</label>
                                            <input type="text" className='form-control' name='jobCode' onChange={onChangeHandle} value={state.jobCode} />
                                        </div>
                                        <div className="col-md-6 ">
                                            <label htmlFor="" className='form-label'><strong className='text-danger'>*</strong> Name</label>
                                            <input type="text" className='form-control' name='name' onChange={onChangeHandle} value={state.name} />
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className="col-md-6 ">
                                            <label htmlFor="" className='form-label'> Job Group</label>
                                            <Form.Select aria-label="Default select example" name='jobGroup' onChange={onChangeHandle} value={state.jobGroup} >
                                                <option>Open this select menu</option>
                                                {data && data?.map((item) => {
                                                    return <option value={item._id}>{item?.name}</option>
                                                })}
                                            </Form.Select>
                                        </div>
                                        <div className="col-md-6 ">
                                            <label htmlFor="" className='form-label'> Departments</label>
                                            <Form.Select aria-label="Default select example" name='jobDepartment' onChange={onChangeHandle} value={state.jobDepartment} >
                                                <option>Open this select menu</option>
                                                {data2 && data2?.map((item) => {
                                                    return <option value={item?._id}>{item?.departmentName}</option>
                                                })}
                                            </Form.Select>
                                        </div>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className='col-md-12'>
                                            <label htmlFor="" className='form-label'>Job Descriptions</label>
                                            <div className="form-floating">
                                                <textarea className="form-control" name='jobDescription' onChange={onChangeHandle} value={state.jobDescription} placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                                                <label for="floatingTextarea2">Descriptions</label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className='row mt-3'>
                                        <div className='col-md-6  '>
                                            <label htmlFor="" className='form-label'>Attachment</label>
                                            <div className='d-flex'>
                                                <input type="file" className='form-control' />
                                                <button className=' btn-success' style={{ width: 40, height: 40, }}><AiOutlinePlus className="fs-5 " /></button>
                                            </div>
                                        </div>
                                    </div> */}

                                </Modal.Body>

                                <Modal.Footer>

                                    <Button variant="primary" onClick={sendData}>
                                        Save
                                    </Button>
                                </Modal.Footer>

                            </Modal>






                            <DropdownButton id="dropdown-basic-button" className='ml-2' title="GROUP">
                                <Dropdown.Item onClick={handleShow1} eventKey="1" >New Group</Dropdown.Item>
                                <Modal className='popup' show={show1} onHide={handleClose1} style={{ width: 700, }}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>New position group</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className='row  mt-3'>
                                            <div className='col-md-12'>
                                                <label htmlFor=""><strong className='text-danger form-label' >*</strong>Name</label>
                                                <input type="text" className='form-control' />
                                            </div>
                                            <div className='col-md-12  mt-3'>
                                                <label htmlFor="">Description</label>
                                                <JoditEditor
                                                    ref={editor}
                                                    value={content}
                                                    onChange={newContent => setContent(newContent)}
                                                />
                                            </div>
                                        </div>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose1}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={handleShow1}>
                                                Save
                                            </Button>
                                        </Modal.Footer>

                                    </Modal.Body>
                                </Modal>
                                <Link to='/admin/group-management' >
                                    <Dropdown.Item eventKey="2">Group management </Dropdown.Item>
                                </Link>

                            </DropdownButton>
                            {/* <button type='button' className='btn btn-primary ml-2 dropdown-toggle'>GROUP</button> */}
                            <Link to='/admin/import-excel'>
                                <button type='button' className='btn btn-outline-secondary ml-2'>IMPORT EXCEL</button>
                            </Link>
                        </div>

                        <div className='col-md-6'></div>
                        <div className='d-flex justify-content-end mt-2'>
                            <div className='col-md-3'>
                                <Select options={options} defaultValue={value} placeholder="Department" onChange={setValue} isMulti ></Select>
                            </div>
                            <div className='col-md-3'>
                                <Select options={options} defaultValue={value} placeholder="Department" onChange={setValue} isMulti ></Select>
                            </div>
                        </div>

                    </div>
                    <div className="row p-3">
                        <div className="col-md-6">
                            <div className="select d-flex">
                                <select className="form-select mr-3" style={{ width: 120 }}>
                                    <option>25</option>
                                    <option>50</option>
                                    <option>100</option>
                                </select>
                                <div className='btn-group'>
                                    <button className="btn btn-outline-secondary  ">
                                        EXPORT
                                    </button>
                                    <button className="btn btn-outline-secondary  ">
                                        BULK ACTIONS
                                    </button>
                                    <button className="btn btn-outline-secondary ">
                                        <FiRefreshCcw />
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <div
                                className="input-group flex-nowrap text-end"
                                style={{ width: 140 }}
                            >
                                <span className="input-group-text" id="addon-wrapping">
                                    <AiOutlineSearch />
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="addon-wrapping"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='table table-responsive no-padding mt-3'>
                        <table className='table table-bordered table-hover'>
                            <tbody>

                                <tr className="table table-primary">
                                    <th ><input type="checkbox" /></th>

                                    <th >Job Code</th>
                                    <th >Name</th>
                                    <th >Job Descriptions</th>
                                    <th >Department Name</th>
                                    <th >Job Group</th>
                                    <th >Action</th>

                                </tr>
                                {datalist && datalist?.map((item) => {
                                    return <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>{item?.jobCode}</td>
                                        <td>{item?.name}</td>
                                        <td>{item?.jobDescription}</td>
                                        <td>{item?.jobDepartment?.departmentName}</td>
                                        <td>{item?.jobGroup?.name}</td>
                                        <td>
                                            <a class="btn btn-soft-primary btn-icon btn-circle btn-sm" onClick={() => { editDataJob(item) }} title="Edit" to="#"><i class="las la-edit"></i></a>
                                            <button onClick={() => { deleteItem(item?._id) }} type="button" class="btn btn-soft-danger btn-icon btn-circle btn-sm"><i class="las la-trash"></i></button>
                                        </td>
                                    </tr>
                                })}

                            </tbody>
                        </table>
                    </div>
                    <div className=' d-flex justify-content-end pb-3'>
                        <div className="btn-group " role="group" aria-label="Default button group">
                            <button type="button" className="btn btn-outline-primary">
                                Previous
                            </button>
                            <button type="button" className="btn btn-outline-primary">
                                1
                            </button>
                            <button type="button" className="btn btn-outline-primary">
                                2
                            </button>
                            <button type="button" className="btn btn-outline-primary">
                                3
                            </button>
                            <button type="button" className="btn btn-outline-primary">
                                4
                            </button>
                            <button type="button" className="btn btn-outline-primary">
                                5
                            </button>
                            <button type="button" className="btn btn-outline-primary">
                                Next
                            </button>
                        </div>
                        <div>
                            <select name="" id=" " className='form-select ml-3 border border-primary'>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                                <option value="">6</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobDes
