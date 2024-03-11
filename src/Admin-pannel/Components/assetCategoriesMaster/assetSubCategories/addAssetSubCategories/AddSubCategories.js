
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { base_Url_Assets } from '../../../../../server'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
function AddSubCategories () {
    const [select,setSelect] = useState(null)
    const [addAsset, setAddAssets] = useState({
        parent_id:'',
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
    const handleAdd = () => {
        postData(addAsset)
    }

    const toastSuccessMessage = () => {
        toast.success("Assets Sub category added Successfully.", {
            position: "top-center"
        })
    };
    // const toastErrorMessage = ()=> {
    //     toast.error("assets not added!",{
    //         position:"top-center"
    //     })
    // }

    useEffect(()=> {
        selectGet()
    },[])

    const selectGet = async () => {
        const getSelect = await axios.get(`${base_Url_Assets}assetCategories`)
        setSelect(getSelect.data)
    }
    const postData = async () => {
        const postApi = await axios.post(`${base_Url_Assets}assetSubCategories/add_assetSubCategoriess`, addAsset)
        setAddAssets({
            parent_id:'',
            name: '',
            description: '',
        })
        if (postApi.status == '200') {
            toastSuccessMessage()
        }
        // if(postApi.status <= '400') {
        //     toastErrorMessage()
        // }
    }
   return (
    <>
    <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Add Asset SubCategories</h1>
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
                            <h5 className="mb-0 h6">Add Asset SubCategories</h5>
                        </div>
                        <div className="card">

                                <div className="card-body">

                                    <section className="form-section">
                                        <div className="">
                                            {/* <form action=""> */}
                                            <div className="col-lg-12 m-4">
                                                <div>

                                                    <select name='parent_id' value={addAsset?.parent_id} className="form-select" aria-label="Default select example" onChange={handleChange}>
                                                        <option selected>Open this select menu</option>
                                                        {select?.map((item)=> {
                                                            return <option value={item?._id}>{item.name}</option>
                                                        })}
                                                    </select>

                                                </div>
                                            </div>

                                            <div className="col-lg-12 m-4">
                                                <div>
                                                    <label htmlFor='Assign Employee'><b>NAME</b></label>
                                                    <input type="text" className="form-control" name='name' value={addAsset?.name} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name*" onChange={handleChange}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 m-4">
                                                <div>
                                                    <label htmlFor='Assign Employee'><b>DESCRIPTION</b></label>
                                                    <input type="text" className="form-control" name='description' value={addAsset?.description} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description*" onChange={handleChange}/>
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
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
                <ToastContainer/>
            </div>  
    </>
   )

}
export default AddSubCategories