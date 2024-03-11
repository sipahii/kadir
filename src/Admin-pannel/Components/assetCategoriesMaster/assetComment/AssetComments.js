import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillEdit } from "react-icons/ai"
import { GrView } from 'react-icons/gr'
import { Link } from "react-router-dom"
import { base_Url_Assets } from '../../../../server'
function AssetComments() {
    const [get,setGet] = useState(null)
    // console.log(get);

    useEffect(() => {
        getApiData()
    },[])
    const getApiData = async () => {
        const res = await axios.get(`${base_Url_Assets}assetWiseComment`)
        setGet(res.data)
    }

    const deleteHandle = async (id) => {
        await axios.delete(`${base_Url_Assets}assetWiseComment/delete_assetWiseComments/${id}`)
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
                    <h5 className="mb-0 h6">  Asset Comments List
                    </h5>
                    <div className="col-md-6 text-md-right">
                        <Link to="/admin/add-asset-comments" className="btn btn-circle btn-info">
                            <span>Add Asset Category</span>
                        </Link>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table table-3 position-relative">
                        <thead>
                            <tr>
                                <th class="table-secondary" scope="col">Id</th>
                                <th class="table-secondary" scope="col">Asset Id</th>
                                <th class="table-secondary" scope="col">Asset Name</th>
                                <th class="table-secondary" scope="col">Comment Id</th>
                                <th class="table-secondary" scope="col">Created Date</th>
                                <th class="table-secondary" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {get && get?.map((item) => {
                                
                                return <tr key={item?._id}>
                                <td >{item?._id}</td>
                                <td >{item?.assetId?._id}</td>
                                <td >{item?.assetId?.name}</td>
                                <td>{item?._id}</td>
                                <td>{item?.createdAt}</td>
                                <td>
                                    <button type="button" onClick={()=>deleteHandle(item?._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                        <i className="las la-trash icon-icon">
                                        </i>
                                    </button>
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

export default AssetComments
