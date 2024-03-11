import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"

function OtherDetail() {

    const [state, setState] = useState({
        DFF: "Yes",
        served_up_home_guard: "Yes",
        ex_serviceman: "Yes",
        UP_Govt_Employee: "Yes",
        obtained_o_level_certificate: "Yes",
        ride_a_bycicle: "12",
        are_you_widow: "Yes",
        minority_community_candidate: "Yes",
        benchmark_disabilities: "Yes",
        domiciled_in_jammu: "Yes",
        employee_in_central_government: "Yes",
        Serving_Group_C: "Yes",
        quasi_admiministrative: "Yes",
        UP_Ex_Army: "Yes",
        Skilled_Player_Of_UP: "Yes",
        ECO_of_Army: "Yes",
        complete_5year: "Yes",
        are_you_blind: "Yes",
        are_you_deaf: "Yes",
        physical_problem: "Yes",
        belongs_to_hill_area: "Yes",
        are_you_child: "Yes",
        west_pakistani_refugee: "Yes",
        convicted_by_any_court: "Yes",
        case_pending: "Yes",
        Has_any_FIR: "Yes",
        FIR_in_past: "Yes",
        dismissed_from_any_service: "Yes",
        services_terminated: "Yes",
    })


    const params = useParams()
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
            const res = await axios.post(`https://onlineparttimejobs.in/api/clientOtherDetails/addAdmin`, { ...state, user_id: params.id }, {
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

    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api//api/clientOtherDetails/${params.id}`, {
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
        // getData()
    }, [])

    return <>
        <ToastContainer />
        <div className='border'>
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>DFF {"Dependent On Freedom Fighter"} </label>
                <select name="DFF" value={state.DFF} onChange={onChangeHandler} className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Served UP Home Guard for 3 Yrs ?</label>
                <select name="served_up_home_guard" value={state.served_up_home_guard} onChange={onChangeHandler} className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Are You Ex Serviceman?</label>
                <select name="ex_serviceman" value={state.ex_serviceman} onChange={onChangeHandler} className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Are you UP. Govt. Employee?</label>
                <select name="UP_Govt_Employee" value={state.UP_Govt_Employee} onChange={onChangeHandler} className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Obtained O LEVEL Certificate in Computer from DOEACC of NIELIT Society</label>
                <select name="obtained_o_level_certificate" value={state.obtained_o_level_certificate} onChange={onChangeHandler} className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Are you ride a bycicle</label>
                <input className="form-control" placeholder="KM" name="ride_a_bycicle" value={state.ride_a_bycicle} onChange={onChangeHandler}/>
               
            </div>

            {/* <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Minority community candidate is eligible for fee concession & Refund.Would you like to avail <br /> the facility?</label>
                <select name="ride_a_bycicle" value={state.f} onChange={onChangeHandler} className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div> */}
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Are you a person with Benchmark Disabilities(PwBD)?</label>
                <select name="benchmark_disabilities" value={state.benchmark_disabilities} onChange={onChangeHandler} className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Were you domiciled in Jammu and Kashmir during 1.1.1980 to 31.12.1989?</label>
                <select name="domiciled_in_jammu" value={state.domiciled_in_jammu} onChange={onChangeHandler} className='form-select'>
                    <option value="Yes"> Yes  </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Are you an employee in Central Government/State Government/Public Sector Unit?</label>
                <select name="domiciled_in_jammu" value={state.domiciled_in_jammu} onChange={onChangeHandler} className='form-select'>
                    <option value="Yes"> Yes</option>
                    <option value="No"> No</option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Are u a Serving Group C or erstwhile Group D Railway Employee or Casual labour or <br /> Substitutes?</label>
                <select name="Serving_Group_C" value={state.Serving_Group_C} onChange={onChangeHandler} className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Are you an employee in Quasi-admiministrative offices of Railway Organisation such as  <br />  Railway centeens,co-operative societies and institutes?</label>
                <select ame="quasi_admiministrative" value={state.quasi_admiministrative} onChange={onChangeHandler} className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Are You UP Ex.Army?</label>
                <select name="UP_Ex_Army" value={state.UP_Ex_Army} onChange={onChangeHandler} className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Are You Skilled Player Of UP?</label>
                <select name="Skilled_Player_Of_UP" value={state.Skilled_Player_Of_UP} onChange={onChangeHandler} className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Are you ECO/SSCO/CO of Army?</label>
                <select name="ECO_of_Army" value={state.ECO_of_Army} onChange={onChangeHandler} className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Have You complete 5 year service?</label>
                <select name="complete_5year" value={state.complete_5year} onChange={onChangeHandler} className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Are You Blind Or Have Vision problam?</label>
                <select name="are_you_blind" value={state.are_you_blind} onChange={onChangeHandler} className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Are You Deaf or Have hearing problem?</label>
                <select name="are_you_deaf" value={state.are_you_deaf} onChange={onChangeHandler} className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Have You any physical Problem?</label>
                <select name="physical_problem" value={state.physical_problem} onChange={onChangeHandler} className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Belongs to Hill Area</label>
                <select name="belongs_to_hill_area" value={state.belongs_to_hill_area} onChange={onChangeHandler} className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Are you Child/dependent of victims KIKKED in the period from 1st Jan 1980 to 31st Dec <br /> 1989?</label>
                <select name="are_you_child" value={state.are_you_child} onChange={onChangeHandler} className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Whether you are a ward of West Pakistani Refugee (WPR) settled in J & K?</label>
                <select name="west_pakistani_refugee" value={state.west_pakistani_refugee} onChange={onChangeHandler} className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Have you ever been convicted by any court of law or any other judicial Institution?</label>
                <select name="convicted_by_any_court" value={state.convicted_by_any_court} onChange={onChangeHandler} className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            {/* <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Is there any case pending against you in any court of law?</label>
                <select name="" id="" className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Has any FIR been lodged and case is pending against you?</label>
                <select name="" id="" className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Was any FIR ever lodged against you in the past?</label>
                <select name="" id="" className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Have You ever been dismissed from any service under the Central of State Govt.?</label>
                <select name="" id="" className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Have your services ever been terminated while on probation?</label>
                <select name="" id="" className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div> */}


        </div>
        <div className='col-md-12 d-flex justify-content-end mt-3'>
            <button type='button' onClick={senData} className='btn btn-primary'>Save</button>
        </div>
    </>
}
export default OtherDetail