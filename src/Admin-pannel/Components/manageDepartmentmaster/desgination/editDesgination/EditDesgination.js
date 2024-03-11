import axios from "axios"
import { useEffect, useState } from "react"
import { Modal } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import { base_Url_Assets } from "../../../../../server"

function EditDesgination () {
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

    const params = useParams()

    useEffect(() => {
        getByIdData()
    },[])

    const getByIdData = async () => {
        const res = await axios.get(`${base_Url_Assets}assetEmpDesignation/${params.id}`)
        console.log(res.data);
        setDesgination(res.data)
    }

    const toastSuccessMessage = () => {
        toast.success("Designation updated Successfully.", {
            position: "top-center"
        })
    };

    const editHandle = async () => {
        const res = await axios.put(`${base_Url_Assets}assetEmpDesignation/update_assetEmpDesignations/${params.id}`,addDesgination)
        if (res.status == '200') {
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
                        <Modal.Title>Edit Designation</Modal.Title>
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
                                            <button onClick={editHandle} type='button' className="btn btn-primary mr-3">Save</button>
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
export default EditDesgination