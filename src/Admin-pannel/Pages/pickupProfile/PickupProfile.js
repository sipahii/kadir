import axios from "axios"
import { useEffect, useState } from "react"

function PickupProfile() {
    const isLoginPickupId = window.localStorage.getItem('isPickupManagerId')
    const pickupid = window.localStorage.getItem('isPickupManagerId')
    const [state, setState] = useState({
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        image: null
    })

    const [file, setfile] = useState(null)

    const onchengeHandle = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }

    const [isloading, setisloading] = useState(false)

    const getData = async () => {
        setisloading(true)
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/staff/${isLoginPickupId}`)
            setState({
                firstname: res.data.firstname,
                lastname: res.data.lastname,
                email: res.data.email,
                mobile: res.data.mobile,
                image: res.data?.profilePhoto?.url,
            })
            setisloading(false)
        } catch (error) {
            alert('Faild to Load Staff Details !')
            setisloading(false)

        }
    }

    useEffect(() => {
        getData()
    }, [])

    const photoChange = (e) => {
        setfile(e.target.files[0])
    }


    const [iserror, setiserror] = useState(false)
    const [issusses, setissusses] = useState(false)

    const updateDetail = async () => {

        const formData = new FormData();
        formData.append('firstname', state.firstname);
        formData.append('lastname', state.lastname);
        formData.append('email', state.email);
        formData.append('mobile', state.mobile);
        formData.append('image', file);

        try {
            const res = await axios.put(`https://onlineparttimejobs.in/api/staff/update_Staff/${pickupid}`, formData)
            setissusses(true)
            window.localStorage.setItem('isPickupManagerName', res.data?.firstname + " " + res.data?.lastname)
        } catch (error) {
            setiserror(true)
        }
    }


    return <div className="profilePage p-30">
        <div className="container">
            <div className="pageTitle">
                <h1 className="fs-3">Manage Profile</h1>
            </div>
            <div className="row">

                {isloading && <div className="preloaderCount">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}

                <div className="col-lg-9">
                    <form>

                        <div className="card">
                            <div className="card-header">
                                <h5 className="mb-0 h6">Basic Info</h5>
                            </div>
                            <div className="card-body">
                                <div className="form-group row mb-3">
                                    <label className="col-md-2 col-form-label">
                                        Image
                                    </label>
                                    <div className="col-md-10">
                                        <input
                                            type="file"
                                            className="form-control"
                                            name="firstName"
                                            autoComplete="off"
                                            onChange={photoChange}
                                        />
                                    </div>
                                    <label style={{opacity:"0"}} className="col-md-2 col-form-label">
                                        Image
                                    </label>
                                   <div className="col-md-10"> {state.image && <img style={{ width: "110px", height: "110px",margin:"10px 0" }} src={state.image} />}</div>
                                </div>
                                <div className="form-group row mb-3">
                                    <label className="col-md-2 col-form-label">
                                        First Name
                                    </label>
                                    <div className="col-md-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="firstname"
                                            autoComplete="off"
                                            value={state.firstname}
                                            onChange={onchengeHandle}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row mb-3">
                                    <label className="col-md-2 col-form-label">
                                        Last Name
                                    </label>
                                    <div className="col-md-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="lastname"
                                            autoComplete="off"
                                            value={state.lastname}
                                            onChange={onchengeHandle}
                                        />
                                    </div>
                                </div>

                                <div className="form-group row mb-3">
                                    <label className="col-md-2 col-form-label">
                                        Email
                                    </label>
                                    <div className="col-md-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="email"
                                            value={state.email}
                                            onChange={onchengeHandle}
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>



                                <div className="form-group row mb-3">
                                    <label className="col-md-2 col-form-label">
                                        Your Phone
                                    </label>
                                    <div className="col-md-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="mobile"
                                            onChange={onchengeHandle}
                                            value={state.mobile}
                                        />
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="form-group mt-3 text-right">
                            {issusses && (<div className="alert alert-success" role="alert">
                                <h4 style={{ display: "flex", justifyContent: "center" }}>Profile Update Successfully!</h4>
                            </div>)}
                            {iserror && (<div className="alert alert-success" role="alert">
                                <h4 style={{ display: "flex", justifyContent: "center", color: "red" }}>Profile Not Update!</h4>
                            </div>)}
                            <button onClick={updateDetail} style={{ display: "flex", alignItems: "center" }} type="button" className="btn btn-primary">
                                Update Profile
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
}
export default PickupProfile