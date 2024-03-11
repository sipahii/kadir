import { Modal } from "react-bootstrap"
import { useState } from "react"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import axios from "axios"
import { base_Url_Assets } from "../../../../../server"

function AddDesigination() {

    const [addDesgination,setDesgination] = useState({
        name:'',
        description:''
    })

    const handleChange = (e) => {
        const clone = {...addDesgination}
        const val = e.target.value
        const name = e.target.name
        clone[name] = val
        setDesgination(clone)
    }

    const handleAdd = () => {
        postData(addDesgination)
    }

    const toastSuccessMessage = () => {
        toast.success("Designation added Successfully.", {
            position: "top-center"
        })
    };

    const postData = async() => {
        const postApi = await axios.post(`${base_Url_Assets}assetEmpDesignation/add_assetEmpDesignations`,addDesgination)
        setDesgination({
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
                    <Modal.Title>Add Designation</Modal.Title>
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
                                            <input type="text" className="form-control" name='name' value={addDesgination?.name} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name*" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 m-4">
                                        <div>
                                            <label htmlFor='Assign Employee'><b>DESCRIPTION</b></label>
                                            <input type="text" className="form-control" name='description' value={addDesgination?.description} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description*" onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 m-4">
                                        <button type="button" disabled={!addDesgination.name.trim() || !addDesgination.description.trim()} className="btn btn-primary mr-3" onClick={handleAdd}>Save</button>
                                        <Link to="/admin/designation" className="btn  rounded-2 btn-danger">Close</Link>
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
export default AddDesigination