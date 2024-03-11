import axios from "axios"
import { useState } from "react"

function EtgAddMember() {

    const [state, setState] = useState({
        name: "",
        image: "",
        description: "",
        designation: "",
        department: "",
    })
    const [file, setFile] = useState()

    const photoChange = (e) => {
        setFile(e.target.files[0])
    }

    const handelChange = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }

    const sendData = async () => {
        const fromData = new FormData()

        fromData.append('name', state.name);
        fromData.append('image', file);
        fromData.append('description', state.description);
        fromData.append('designation', state.designation);
        fromData.append('department', state.department);
        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/adminMemberWidget/add_adminMembers`, fromData)
            alert("Member Added Successfully")
        } catch (error) {
            alert('Member Not Added!')
        }
    }



    return <>
        <div className="aiz-main-content" style={{ width: "1000px", margin: "auto" }}>
            <div className="px-15px px-lg-25px">
                <div className="row">
                    <div className="col-lg-8 mx-auto"></div>

                    <div className="card">
                        <div className="card-header">
                            <h6 className="fw-600 mb-0">Add ETG Member</h6>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group row">
                                    <label className="col-md-3 col-from-label">Name *</label>
                                    <div className="col-md-8">
                                        <input type="text" name="name" onChange={handelChange} className="form-control" placeholder="Name" fdprocessedid="t2ds68j" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-md-3 col-from-label">Photo *</label>
                                    <div className="col-md-8">
                                        <input type='file' name="image" onChange={photoChange} className='form-control' />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-md-3 col-from-label">Description</label>
                                    <div className="col-md-8">
                                        <input type="text" name="description" onChange={handelChange} className="form-control" placeholder="description" fdprocessedid="t2ds68j" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-3 col-from-label">Designation</label>
                                    <div className="col-md-8">
                                        <input type="text" name="designation" onChange={handelChange} className="form-control" placeholder="Designation" fdprocessedid="t2ds68j" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-3 col-from-label">Department</label>
                                    <div className="col-md-8"> 
                                        <input type="text" name="department" onChange={handelChange} className="form-control" placeholder="Department" fdprocessedid="t2ds68j" />
                                    </div>
                                </div>


                                <div className="text-right">
                                    <button type="button" onClick={sendData} className="btn btn-primary" fdprocessedid="nl9ds4">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default EtgAddMember