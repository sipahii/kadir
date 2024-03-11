import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillEdit } from "react-icons/ai"
import { GrView } from 'react-icons/gr'
import axios from 'axios'
import { base_Url_Assets } from '../../../../server'
import { Spinner } from 'react-bootstrap'
function Desigination() {
    const [get, setGet] = useState(null)

    useEffect(() => {
        getApiData()
    }, [])

    const getApiData = async () => {
        const res = await axios.get(`${base_Url_Assets}assetEmpDesignation`)
        setGet(res.data)
    }


    const handleDelete = async(id) => {
        await axios.delete(`${base_Url_Assets}assetEmpDesignation/delete_assetEmpDesignations/${id}`)
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
                    <h5 className="mb-0 h6"> Designation List</h5>
                    <div className="col-md-6 text-md-right">
                        <Link to="/admin/add-designation" className="btn btn-circle btn-info">
                            <span>Add Desigination</span>
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
                                <th class="table-secondary" scope="col">Created Date</th>
                                <th class="table-secondary" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {get && get?.map((item) => {
                                return <tr key={item?._id}>
                                    <td >{item?._id}</td>
                                    <td >{item?.name}</td>
                                    <td>{item?.description}</td>
                                    <td>{item?.createdAt}</td>
                                    <td>
                                        <Link className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to={`edit/${item?._id}`}>
                                            <AiFillEdit className="icon-icon" />
                                        </Link>
                                        <button type="button" onClick={() => handleDelete(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                            <i className="las la-trash icon-icon">
                                            </i>
                                        </button>
                                        <Link className="ms-2 btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to={`details/${item?._id}`}>
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

export default Desigination
