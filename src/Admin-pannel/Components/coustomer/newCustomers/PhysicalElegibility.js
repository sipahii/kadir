import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"

function PhysicalElegibility() {

    const [state, setState] = useState({
        identity_mark1: "",
        identity_mark2: "",
        NCC: "",
        sports: "",
        blood_group: "",
        colour_complex: "",
        physical_disability: "",
        type_of_disability: "",
    })

    const onChangeHandler = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }






    

    const params = useParams()
    const token1 = window.localStorage.getItem('adminToken')

    const toastSuccessMessage = () => {
        toast.success("Customer Physical Elligibility Save Successfull", {
            position: "top-center"
        })
    };
    const toastErrorMessage = () => {
        toast.error("Physical Elligibility Not Added", {
            position: "top-center"
        })
    }

    const sendData = async () => {
        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/clientPhyElegibility/addAdmin`, {...state, user_id:params.id}, {
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
        const res = await axios.get(`https://onlineparttimejobs.in/api/clientPhyElegibility/${params.id}`, {
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
        <div className='border' style={{ width: 700, height: 750 }}>
            <div className='col-md-12 mb-3 mt-3 '>
                <label htmlFor="" className='form-label'>Identity mark on body 1</label>
                <input type="text" className='form-control' name="identity_mark1" value={state.identity_mark1} onChange={onChangeHandler} />
            </div>
            <div className='col-md-12 mb-3 mt-3 '>
                <label htmlFor="" className='form-label'>Identity mark on body 2</label>
                <input type="text" className='form-control' name="identity_mark2" value={state.identity_mark2} onChange={onChangeHandler} />
            </div>
            <div className='col-md-12 mb-3 '>
                <label htmlFor="" className='form-label'>NCC</label>
                <select  name="NCC" value={state.NCC} onChange={onChangeHandler} className='form-select' >
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 '>
                <label htmlFor="" className='form-label'>Sports</label>
                <select  name="sports" value={state.sports} onChange={onChangeHandler} className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 '>
                <label htmlFor="" className='form-label'>Blood_group</label>
                <select  name="blood_group" value={state.blood_group} onChange={onChangeHandler}className='form-select'>
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    <option value="AB+">AB+</option>
                    <option value="A-">A-</option>
                    <option value="B-">B-</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3 '>
                <label htmlFor="" className='form-label'>colour complex</label>
                <input type="text"  name="colour_complex" value={state.colour_complex} onChange={onChangeHandler} className='form-control' />
            </div>
            <div className='col-md-12 mb-3 '>
                <label htmlFor="" className='form-label'>Disability</label>
                <select  name="physical_disability" value={state.physical_disability} onChange={onChangeHandler} className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3 '>
                <label htmlFor="" className='form-label'> Type of Disability  </label>
                <input type="text"  name="type_of_disability" value={state.type_of_disability} onChange={onChangeHandler} className='form-control' />
            </div>


        </div>
        <div className='col-md-12 d-flex justify-content-end mt-3'>
            <button type='button' className='btn btn-primary' onClick={sendData}>Save</button>
        </div>
    </>
}
export default PhysicalElegibility