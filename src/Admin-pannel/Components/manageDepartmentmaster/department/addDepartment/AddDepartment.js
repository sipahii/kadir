import axios from "axios"
import { useState } from "react"
import { Modal } from "react-bootstrap"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import { base_Url_Assets } from "../../../../../server"

function AddDepartment () {
    const [addDepartment,setAddDepartment] = useState({
        name:'',
        description:''
    })
    const handleChange = (e) => {
        const clone = {...addDepartment}
        const val = e.target.value
        const name = e.target.name
        clone[name] = val
        setAddDepartment(clone)
    }

    const handleAdd = () => {
        postData(addDepartment)
    }

    const toastSuccessMessage = () => {
        toast.success("Assets Department added Successfully.", {
            position: "top-center"
        })
    };

    const postData = async () => {
        const postApi = await axios.post(`${base_Url_Assets}assetEmpDepartment/add_assetEmpDepartments`,addDepartment)
        setAddDepartment({
            name:'',
            description:''
        })
        if (postApi.status == '200') {
            toastSuccessMessage()
        }
    }
    return (
        <>
        <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
            <div className="aiz-titlebar text-left mt-2 mb-3">
                <div className="row align-items-center">
                    {/* <div className="col-md-6 text-center">
                        <h1 className="h3">Add Asset Categorie</h1>
                    </div> */}
                    {/* <div className="col-md-6 text-md-right">
                  <Link to="/admin/roles/create" className="btn btn-circle btn-info">
                      <span>Add New Role</span>
                  </Link>
              </div> */}
                </div>
            </div>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Add Department</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="card">

                        <div className="card-body">

                            <section className="form-section">
                                <div className="">
                                    {/* <form action=""> */}
                                    <div className="col-lg-12 m-4">
                                        <div>
                                            <label htmlFor='Assign Employee'><b>NAME</b></label>
                                            <input type="text" className="form-control" name='name' value={addDepartment.name} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name*" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 m-4">
                                        <div>
                                            <label htmlFor='Assign Employee'><b>DESCRIPTION</b></label>
                                            <input type="text" className="form-control" name='description' value={addDepartment.description} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description*" onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 m-4">
                                        <button className="btn btn-primary mr-3" onClick={handleAdd}>Save</button>
                                        <Link to="/admin/asset-category" className="btn  rounded-2 btn-danger">Close</Link>
                                    </div>
                                    {/* </form> */}
                                </div>
                            </section>
                            <div className="aiz-pagination">
                            </div>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    {/*  <Button variant="secondary">Close</Button>
                <Button variant="primary">Save</Button> */}
                </Modal.Footer>
            </Modal.Dialog>

        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
        </div>
        <ToastContainer/>
    </div>
        </>
    )
}
export default AddDepartment