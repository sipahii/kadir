import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"

function ExtraCurcumtion() {

    const [state, setState] = useState({
        games: "",
        hobbies: "",
        runing: "",
        sweeming: "",
        high_jump: "",
        long_jump: "",
        utthak_baithak: "",
        first_language: "",
        second_language: "",
        typing: "",
        stenographer: "",
        speeking_language: "",
    })
    const onChangeHandler = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }

    const params = useParams()
    const token1 = window.localStorage.getItem('adminToken')

    const toastSuccessMessage = () => {
        toast.success("Customer Extra Carriculam Save Successfull", {
            position: "top-center"
        })
    };
    const toastErrorMessage = () => {
        toast.error("Extra Carriculam Not Added", {
            position: "top-center"
        })
    }

    const sendData = async () => {
        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/clientCurriculum/addAdmin`, {...state, user_id:params.id}, {
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
        const res = await axios.get(`https://onlineparttimejobs.in/api/clientCurriculum/${params.id}`, {
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
      <ToastContainer />
        <div className='border' >
            <div className='col-md-12 mb-3 mt-3'>
                <label htmlFor="" className='form-label'>Games</label>
                <input type="text" name="games" value={state.games} onChange={onChangeHandler} className='form-control' />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Hobbies</label>
                <input type="text" className='form-control' name="hobbies" value={state.hobbies} onChange={onChangeHandler} />
            </div>
            <div className='col-md-12 mb-3 '>
                <label htmlFor="" className='form-label'>Runing(KM)</label>
                <input type="text" className='form-control' name="runing" value={state.runing} onChange={onChangeHandler} />
            </div>
            <div className='col-md-12 mb-3 '>
                <label htmlFor="" className='form-label'>Sweeming</label>
                <select  name="sweeming" value={state.sweeming} onChange={onChangeHandler}  className='form-select'>
                    <option value="Yes"> Yes </option>
                    <option value="No"> No </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 '>
                <label htmlFor="" className='form-label'>High Jump(Feet)</label>
                <input type="text" className='form-control'name="high_jump" value={state.high_jump} onChange={onChangeHandler}  />
            </div>
            <div className='col-md-12 mb-3 '>
                <label htmlFor="" className='form-label'>Long Jump(Feet)</label>
                <input type="text" className='form-control' name="long_jump" value={state.long_jump} onChange={onChangeHandler} />
            </div>
            <div className='col-md-12 mb-3 '>
                <label htmlFor="" className='form-label'>Utthak Baithak</label>
                <input type="text" className='form-control' name="utthak_baithak" value={state.utthak_baithak} onChange={onChangeHandler}/>
            </div>
            <div className='col-md-12 mb-3 '>
                <label htmlFor="" className='form-label'>First Language</label>
                <select name="first_language" value={state.first_language} onChange={onChangeHandler} className='form-select'>
                    <option value="Hindi">Hindi</option>
                    <option value="English">English</option>
                    <option value="Sanskrit">Sanskrit</option>
                    <option value="Urdu">Urdu</option>
                </select>
            </div>
            <div className='col-md-12 mb-3 '>
                <label htmlFor="" className='form-label'>Second Language</label>
                <select name="second_language" value={state.second_language} onChange={onChangeHandler}  className='form-select'>
                    <option value="Hindi">Hindi</option>
                    <option value="English">English</option>
                    <option value="Sanskrit">Sanskrit</option>
                    <option value="Urdu">Urdu</option>
                </select>
            </div>
            <div className='col-md-12 mb-3 '>
                <label htmlFor="" className='form-label'>Typing</label>
                <select name="typing" value={state.typing} onChange={onChangeHandler}  className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 '>
                <label htmlFor="" className='form-label'>Stenographer</label>
                <select name="stenographer" value={state.stenographer} onChange={onChangeHandler}  className='form-select'>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>
            </div>
            <div className='col-md-12 mb-3 '>
                <label htmlFor="" className='form-label'>Speeking Language</label>
                <input type="text" className='form-control' name="speeking_language" value={state.speeking_language} onChange={onChangeHandler} />
            </div>

        </div>
        <div className='col-md-12 d-flex justify-content-end mt-3'>
            <button type='button' className='btn btn-primary' onClick={sendData}>Save</button>
        </div>
    </>
}
export default ExtraCurcumtion