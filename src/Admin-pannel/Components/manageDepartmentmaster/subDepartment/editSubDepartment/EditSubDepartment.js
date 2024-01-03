import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { base_Url_Assets } from "../../../../../server"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"

function EditSubDepartment () {
    const [select,setSelect] = useState(null)
    const [addAsset, setAddAssets] = useState({
        parentDepartmentID:'',
        name: '',
        description: ''
    })
    // console.log(addAsset);
    const handleChange = (e) => {
        const clone = { ...addAsset }
        const val = e.target.value
        const name = e.target.name
        clone[name] = val
        setAddAssets(clone)
    }

    useEffect(() => {
        getSubAsetsId()
        selectGet()
    },[])
    
    const selectGet = async () => {
        const getSelect = await axios.get(`${base_Url_Assets}assetEmpDepartment`)
        // console.log(getSelect)
        setSelect(getSelect.data)
    }

    const param = useParams()
    // console.log(param)

    const getSubAsetsId = async() => {
        const getByIdData = await axios.get(`${base_Url_Assets}assetEmpSubDepartment/${param.id}`)
       setAddAssets(getByIdData.data)
    }

    const toastSuccessMessage = () => {
        toast.success("Assets Sub Department updated Successfully.", {
            position: "top-center"
        })
    };

    const editHandle = async() => {
        const responce = await axios.put(`${base_Url_Assets}assetEmpSubDepartment/update_assetEmpSubDepartments/${param.id}`,addAsset)
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
                            <div className="col-md-6">
                                <h1 className="h3">Edit Sub Department</h1>
                            </div>
                            {/* <div className="col-md-6 text-md-right">
                                <Link to="/admin/roles/create" className="btn btn-circle btn-info">
                                    <span>Add New Role</span>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6">Edit Sub Department</h5>
                        </div>
                        <div className="card">

                            <div className="card-body">

                                <section className="form-section">
                                    <div className="">
                                        {/* <form action=""> */}
                                        <div className="col-lg-12 m-4">
                                            <div>

                                                <select name='parentDepartmentID' value={addAsset?.parentDepartmentID} className="form-select" aria-label="Default select example" onChange={handleChange}>
                                                    <option selected>Open this select menu</option>
                                                    {select?.map((item) => {
                                                        return <option value={item?._id}>{item?.name}</option>
                                                    })}
                                                </select>

                                            </div>
                                        </div>

                                        <div className="col-lg-12 m-4">
                                            <div>
                                                <label htmlFor='Assign Employee'><b>NAME</b></label>
                                                <input type="text" className="form-control" name='name' value={addAsset?.name} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name*" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 m-4">
                                            <div>
                                                <label htmlFor='Assign Employee'><b>DESCRIPTION</b></label>
                                                <input type="text" className="form-control" name='description' value={addAsset?.description} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description*" onChange={handleChange} />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 m-4">
                                            <button type="button" className="btn btn-primary mr-3" onClick={editHandle}>Save</button>
                                            <Link to="#" className="btn  rounded-2 btn-danger">Close</Link>
                                        </div>
                                        {/* </form> */}
                                    </div>
                                </section>
                                <div className="aiz-pagination">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
export default EditSubDepartment