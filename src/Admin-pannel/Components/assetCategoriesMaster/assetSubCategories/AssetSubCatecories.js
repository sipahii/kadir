import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillEdit } from "react-icons/ai"
import { GrView } from 'react-icons/gr'
import { Link } from "react-router-dom"
import { base_Url_Assets } from '../../../../server'
function AssetSubCatecories() {
    const [get,setData] = useState(null)
    useEffect(() => {
        getApiData()
    },[])
    const getApiData = async () => {
        const res = await axios.get(`${base_Url_Assets}assetSubCategories`)
        // console.log(res)
        setData(res.data)
    }
    const handleDelete = async(id) => {
        await axios.delete(`${base_Url_Assets}assetSubCategories/delete_assetSubCategoriess/${id}`)
        getApiData()
    }
    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">

            <div className="aiz-titlebar text-left mt-2 mb-3">
                <div className="row align-items-center">
                    <div className="col-md-6">

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
                    <h5 className="mb-0 h6">  Asset Sub Category List
                    </h5>
                    <div className="col-md-6 text-md-right">
                        <Link to="/admin/add-asset-sub-category" className="btn btn-circle btn-info">
                            <span>Add Asset Sub Category</span>
                        </Link>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table table-3 position-relative">
                        <thead>
                            <tr>
                                <th class="table-secondary" scope="col">Id</th>
                                <th class="table-secondary" scope="col">Name</th>
                                <th class="table-secondary" scope="col">Description</th>
                                <th class="table-secondary" scope="col">Asset Categories</th>
                                <th class="table-secondary" scope="col">Created Date</th>
                                <th class="table-secondary" scope="col">Action</th>


                            </tr>
                        </thead>
                        <tbody>
                            {get && get?.map((item) => {
                                return <tr>
                                <td >{item?._id}</td>
                                <td >{item?.name}</td>
                                <td>{item?.description}</td>
                                <td>{item?.parent_id?.name}</td>
                                <td>{item?.createdAt}</td>
                                <td>
                                    <Link className="btn btn-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to={`edit/${item?._id}`}>
                                        {/* <i className="las la-eye">
                                    </i> */}
                                        <AiFillEdit className="icon-icon" />
                                    </Link>
                                    <button type="button" onClick={() => handleDelete(item?._id)} className="btn btn-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                        <i className="las la-trash icon-icon">
                                        </i>
                                    </button>

                                    <Link className="ms-2 btn btn-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to={`/admin/asset-sub-category-type-view/details/${item?._id}`}>
                                        {/* <i className="las la-eye">
                                    </i> */}
                                        <GrView />
                                    </Link>
                                </td>


                            </tr>
                            })}

                        </tbody>
                    </table>


                    <div className="aiz-pagination">
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
        </div>
    </div>
}

export default AssetSubCatecories
