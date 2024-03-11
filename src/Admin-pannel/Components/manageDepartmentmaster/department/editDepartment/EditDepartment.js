import { Modal } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { base_Url_Assets } from "../../../../../server"
import { ToastContainer, toast } from "react-toastify"
import { useEffect, useState } from "react"
import axios from "axios"

function EditDepartment () {
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
    const params = useParams()

    const getAssetId = async () => {
        const getByIdData = await axios.get(`${base_Url_Assets}assetEmpDepartment/${params.id}`)
        setAddDepartment(getByIdData.data)
    }

    useEffect(() => {
        getAssetId()
    }, [])

    const toastSuccessMessage = () => {
        toast.success("Assets Department updated Successfully.", {
            position: "top-center"
        })
    };
    const editHandle = async () => {
        const responce = await axios.put(`${base_Url_Assets}assetEmpDepartment/update_assetEmpDepartments/${params.id}`,addDepartment)
        // console.log(responce);
        if (responce.status == '200') {
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
                        <Modal.Title>Edit Asset Category</Modal.Title>
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
                                                <input type="text" className="form-control" name='name' value={addDepartment?.name} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name*" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 m-4">
                                            <div>
                                                <label htmlFor='Assign Employee'><b>DESCRIPTION</b></label>
                                                <input type="text" className="form-control" name='description' value={addDepartment?.description} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description*" onChange={handleChange} />
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
export default EditDepartment