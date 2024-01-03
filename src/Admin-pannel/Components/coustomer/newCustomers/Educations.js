import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"

function Educations() {
    const obs = {
        AddressSchool_Institute: "",
        CGPA: "",
        CertificateNo: "",
        Devision: "1st",
        EnrollmentNo: "sadsda",
        GreadingSystem: "no",
        MarkPer_percent: "das",
        MarksheetSINo: "dsad",
        ObtainMark: "asd",
        Passing: "pass",
        PassingState: "asd",
        PassingYear: "2023-08-22",
        Passingdate: "2023-08-17",
        RollNo: "dasd",
        Stream: "ddaddsadasd",
        StudySchool_Institute: "dasdas",
        Subject: "dadasddasdasdas",
        TotalMarks: "dasdadsa",
        qualification: "8 Th"
    }

    const [quali, setQuali] = useState()
    const [state, setState] = useState([])
    const generateRows = () => {
        const clone = [...state]
        clone.push({ qualification: quali, ...obs })
        setState(clone)
        setQuali('')
    }

    const changeValues = (e, val) => {
        const clone = [...state]
        const indx = e.target.id

        const getobj = clone[indx]
        const separateArr = getobj.list


        const mapedData = separateArr.map((item) => {
            if (val == item.lable) {
                return { ...item, value: e.target.value }
            } else {
                return item
            }
        })
        getobj.list = mapedData

        clone.splice(indx, 1, getobj)

    }


    const params = useParams()
    const token1 = window.localStorage.getItem('adminToken')

    const toastSuccessMessage = () => {
        toast.success("Customer Education Details Save Successfull", {
            position: "top-center"
        })
    };
    const toastErrorMessage = () => {
        toast.error("Customer Education Details Not Add", {
            position: "top-center"
        })
    }

    const sendData = async () => {
        const clone = []
        let obj = {};

        for (let i = 0; i < state.length; i++) {
            const element = state[i];
            for (let j = 0; j < element.list.length; j++) {
                const val = element.list[j];
                obj = { ...obj, queueMicrotask: element.qualification, [val.lable]: val.value }
            }
            clone.push(obj)
            obj = {}
        }
        console.log(clone);
        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/clientEducation/addAdmin`, { education: clone, user_id: params.id }, {
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
        const res = await axios.get(`https://onlineparttimejobs.in/api/clientEducation/${params.id}`, {
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
        <div style={{ padding: "10px", margin: "20px 0" }} className='border'>
            <input value={quali} onChange={(e) => { setQuali(e.target.value) }} className="form-control" placeholder="Input Qualification & Generate Row" />
            <Button style={{ margin: "10px 0" }} onClick={generateRows} disabled={!quali} variant="success">Generate</Button>
        </div>
        <div className='border'>

            {state && state.map((item, i) => {
                console.log(item);
                return <div  key={i} className='border' style={{ margin: "10px" }}>
                    <div className='col-md-12 mt-3 mb-3'>
                        <strong>{item?.qualification}</strong>
                    </div>
                    {/* if (val.type == 'select-option') {
                        <div className='col-md-12 mb-3'>
                            <label htmlFor="" className='form-label'>{val.lable}</label>
                            <select
                                id={i}
                                name={item.name}
                                onChange={(e) => {
                                    changeValues(e, item.lable)
                                }}
                                className='form-select'
                            >
                                {item?.datas.map((sec, s) => {
                                    return <option id={i} value={sec} key={i}>{sec}</option>
                                })}
                            </select>
                        </div>
                    } if (item.type == 'text') {
                        <div key={v} className='col-md-12 mb-3'>
                            <label htmlFor="" className='form-label'>{item.lable}</label>
                            <input onChange={(e) => { changeValues(e, item.lable) }} type="text" id={i} className='form-control' name={item.lable} />
                        </div>
                    }
                    if (item.type == 'date') {
                        <div key={v} className='col-md-12 mb-3'>
                            <label htmlFor="" className='form-label'>{item.lable}</label>
                            <input onChange={(e) => { changeValues(e, item.lable) }} type="date" id={i} name={item.lable} className='form-control' />
                        </div>
                    } */}
                </div>


            })}




        </div>
        <div className='col-md-12 d-flex justify-content-end mt-3'>
            <button type='button' className='btn btn-primary' onClick={sendData}>Save</button>
        </div>
    </>
}
export default Educations