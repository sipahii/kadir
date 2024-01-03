import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';


function ContactMailInfo() {
    const [mail, setMail] = useState([{ email: '', _id: Math.random() }])
    const token = window.localStorage.getItem('token')

    const onchangehandle = (val, ind) => {
        const maped = mail.map((item, i) => {
            if (i == ind) {
                return { ...item, email: val }
            } else {
                return item
            }
        })
        setMail(maped)
    }

    const addRow = () => {
        const cloen = [...mail]
        cloen.push({ email: '' })
        setMail(cloen)
    }
    const removeRows = (ind) => {
        const removes = mail.filter((item, i) => {
            if (i == ind) {

            } else {

                return item
            }
        })
        setMail(removes)
    }

    const sendData = async () => {
        const clone = []
        for (let i = 0; i < mail.length; i++) {
            const element = mail[i];
            clone.push(element.email)
        }
        try {
            const res = await axios.put(`https://onlineparttimejobs.in/api/verifiedEmail/update`, { email: clone }, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            alert('Emails Added')
        } catch (error) {
            alert('Emails not Added')
        }
    }

    const getData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/verifiedEmail`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!res.data) {
                return
            } else {
                const clone = []
                for (let i = 0; i < res.data.email.length; i++) {
                    const element = res.data.email[i];
                    clone.push({email:element})
                    
                }
                setMail(clone)
            }
        } catch (error) {

        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="align-items-center">
                            <h1 className="h2">Enter Mail Id (for Detail Collection)</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card" style={{ padding: "20px 10px" }}>
                            <div className="col-5">
                                {mail && mail?.map((item, i) => {
                                    return <div style={{ display: "flex" }}>
                                        <input className="form-control" style={{ margin: "10px 0" }} value={item.email} onChange={(e) => { onchangehandle(e.target.value, i) }} name="mail" placeholder="Email Id" />
                                        <button style={{ margin: "10px" }} onClick={() => { removeRows(i) }} type="button" class="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger"><i class="las la-times"></i></button>
                                    </div>
                                })}

                                <Button variant="info" style={{ width: "200px", margin: "10px 0" }} onClick={addRow}>Add</Button>
                            </div>
                        </div>
                        <Button variant="success" style={{ width: "200px", margin: "10px 0" }} onClick={sendData}>Save</Button>
                    </div>

                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
            </div>
        </>
    )
}
export default ContactMailInfo;