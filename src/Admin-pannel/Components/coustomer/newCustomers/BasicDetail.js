import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"

function BasicDetail() {
    const params = useParams()
    const [state, setState] = useState({
        title: '',
        old_registration: '',
        customer_title: '',
        firstname: '',
        middlename: '',
        lastname: '',
        father_firstname: '',
        father_middlename: '',
        father_lastname: '',
        mother_firstname: '',
        mother_middlename: '',
        mother_lastname: '',
        guardian_firstname: '',
        guardian_middlename: '',
        guardian_lastname: '',
        husband_firstname: '',
        husband_middlename: '',
        husband_lastname: '',
        dob_date: '',
        marital_status: false,
        category: '',
        gender: '',
        religion: '',
       
    })
    const onChangeHandler = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }
    const token1 = window.localStorage.getItem('adminToken')

    const toastSuccessMessage = () => {
        toast.success("Customer Details Save Successfull", {
            position: "top-center"
        })
    };
    const toastErrorMessage = () => {
        toast.error("Customer Details Not Add", {
            position: "top-center"
        })
    }

    const senData = async () => {
        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/clientBasic/addAdmin`, {...state, user_id:params.id}, {
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer ' + token1
                }
            })
            toastSuccessMessage()
        } catch (error) {
            toastErrorMessage()
        }
    }

    const getData = async ()=>{
        const res = await axios.get(`https://onlineparttimejobs.in/api/clientBasic/${params.id}`, {
            headers: {
                'content-type': 'text/json',
                Authorization: 'Bearer ' + token1
            }
        })
        if (res?.data) {
            setState(res.data)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return <>
        <div className=' border '>
            <ToastContainer />
            <div className='col-md-12 mt-3 mb-3'>
                <label htmlFor="" className='form-label'>Old Registration</label>
                <input type="text" name="old_registration" value={state.old_registration} onChange={onChangeHandler} className='form-control' />
            </div>
            <div className='col-md-12  mb-3'>
                <label htmlFor="" className='form-label'>Title</label>
                <select name="title" value={state.title} onChange={onChangeHandler} className='form-select'>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                    <option value="Shri">Shri</option>
                </select>
            </div>
            <div className='col-md-4 mb-3'>
                <label htmlFor="" className='form-label'>
                    Name
                </label>
                <div>
                    <input type="text" className='form-control' name="firstname" value={state.firstname} onChange={onChangeHandler} placeholder='First Name' />
                    <input type="text" className='form-control' name="middlename" value={state.middlename} onChange={onChangeHandler} placeholder='Middle Name' />
                    <input type="text" className='form-control' name="lastname" value={state.lastname} onChange={onChangeHandler} placeholder='Last Name' />
                </div>


            </div>
            <div className='col-md-4 mb-3' >
                <label htmlFor="">Father Name</label>
                <div>
                    <input type="text" name="father_firstname" value={state.father_firstname} onChange={onChangeHandler} className='form-control' placeholder='Father First Name' />
                    <input type="text" name="father_middlename" value={state.father_middlename} onChange={onChangeHandler} className='form-control' placeholder='Father Middle Name' />
                    <input type="text" name="father_lastname" value={state.father_lastname} onChange={onChangeHandler} className='form-control' placeholder='Father Last Name' />
                </div>
            </div>
            <div className='col-md-4 mb-3' >
                <label htmlFor="">Mother Name</label>
                <div>
                    <input type="text" name="mother_firstname" value={state.mother_firstname} onChange={onChangeHandler} className='form-control' placeholder='Mother First Name' />
                    <input type="text" name="mother_middlename" value={state.mother_middlename} onChange={onChangeHandler} className='form-control' placeholder='Mother Middle Name' />
                    <input type="text" name="mother_lastname" value={state.mother_lastname} onChange={onChangeHandler} className='form-control' placeholder='Mother Last Name' />
                </div>
            </div>
            <div className='col-md-4 mb-3' >
                <label htmlFor="">Guardian Name</label>
                <div>
                    <input type="text" name="guardian_firstname" value={state.guardian_firstname} onChange={onChangeHandler} className='form-control' placeholder='Guardian First Name' />
                    <input type="text" name="guardian_middlename" value={state.guardian_middlename} onChange={onChangeHandler} className='form-control' placeholder='Guardian Middle Name' />
                    <input type="text" name="guardian_lastname" value={state.guardian_lastname} onChange={onChangeHandler} className='form-control' placeholder='Guardian Last Name' />
                </div>
            </div>
            <div className='col-md-4 mb-3' >
                <label htmlFor="">Husband  Name</label>
                <div>
                    <input type="text" name="husband_firstname" value={state.husband_firstname} onChange={onChangeHandler} className='form-control' placeholder='Husband  First Name' />
                    <input type="text" name="husband_middlename" value={state.husband_middlename} onChange={onChangeHandler} className='form-control' placeholder='Husband  Middle Name' />
                    <input type="text" name="husband_lastname" value={state.husband_lastname} onChange={onChangeHandler} className='form-control' placeholder='Husband  Last Name' />
                </div>
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Date of Birth</label>
                <input type="date" className="form-control" name="dob_date" value={state.dob_date} onChange={onChangeHandler} />
            </div>
            <div className='col-md-12  mb-3'>
                <label htmlFor="" className='form-label'>Marital Status</label>
                <select className='form-select' name="marital_status" value={state.marital_status} onChange={onChangeHandler}>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>

                </select>
            </div>
            <div className='col-md-12  mb-3'>
                <label htmlFor="" className='form-label'> Category  </label>
                <select name="category" value={state.category} onChange={onChangeHandler} className='form-select'>
                    <option value="GEN"> GEN</option>
                    <option value="EWS">EWS</option>
                    <option value="OBC">OBC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>

                </select>
            </div>
            <div className='col-md-12  mb-3'>
                <label htmlFor="" className='form-label'> Gender  </label>
                <select name="gender" value={state.gender} onChange={onChangeHandler} className='form-select'>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>

                </select>
            </div>
            <div className='col-md-12  mb-3'>
                <label htmlFor="" className='form-label'> Religion  </label>
                <select name="religion" value={state.religion} onChange={onChangeHandler} className='form-select'>
                    <option value="Hindu">Hindu</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Christian">Christian</option>
                    <option value="Sikhism">Sikhism</option>
                    <option value="Buddhism">Buddhism</option>
                    <option value="Jain">Jain</option>
                    <option value="other">other</option>

                </select>
            </div>

        </div>
        <div className='col-md-12 d-flex justify-content-end mt-3'>
            <button type='button' className='btn btn-primary' onClick={senData}>Save</button>
        </div>
    </>
}

export default BasicDetail