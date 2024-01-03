import React from 'react'

import { AiFillEdit } from "react-icons/ai"
import { FaPlusSquare } from 'react-icons/fa'
import { GrView } from 'react-icons/gr'
import { Link } from "react-router-dom"
const AssetIssue = () => {
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
                    <h5 className="mb-0 h6">  Asset Issue List
                    </h5>
                    <div className="col-md-6 text-md-right">
                        <Link to="/admin/add-asset-category" className="btn  btn-info">
                            <span><FaPlusSquare /></span>
                        </Link>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table table-3 position-relative">
                        <thead>
                            <tr>
                                <th class="table-secondary" scope="col">Id</th>
                                <th class="table-secondary" scope="col">Asset </th>
                                <th class="table-secondary" scope="col">Raised By Employee</th>
                                <th class="table-secondary" scope="col">Status</th>
                                <th class="table-secondary" scope="col">Expected Fix Date </th>
                                <th class="table-secondary" scope="col">Resolve Date</th>
                                <th class="table-secondary" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >1</td>
                                <td >Dell</td>
                                <td>admin</td>
                                <td>In Progress</td>
                                <td>6/7/2024</td>
                                <td>12/7/2024</td>
                                <td>
                                    <Link className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to="/admin/add-asset-category">
                                        {/* <i className="las la-eye">
                            </i> */}
                                        <AiFillEdit className="icon-icon" />
                                    </Link>
                                    <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                        <i className="las la-trash icon-icon">
                                        </i>
                                    </button>

                                    <Link className="ms-2 btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to="/admin/asset-category-type-view">
                                        {/* <i className="las la-eye">
                            </i> */}
                                        <GrView />
                                    </Link>
                                </td>


                            </tr>
                            <tr>
                                <td >2</td>
                                <td >Dell</td>
                                <td>admin</td>
                                <td>pending</td>
                                <td>6/7/2024</td>
                                <td>12/7/2024</td>
                                <td>
                                    <Link className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to="/admin/add-asset-category">
                                        {/* <i className="las la-eye">
                            </i> */}
                                        <AiFillEdit className="icon-icon" />
                                    </Link>
                                    <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                        <i className="las la-trash icon-icon">
                                        </i>
                                    </button>

                                    <Link className="ms-2 btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to="/admin/asset-category-type-view">
                                        {/* <i className="las la-eye">
                            </i> */}
                                        <GrView />
                                    </Link>
                                </td>


                            </tr>
                            <tr>
                                <td >3</td>
                                <td >Dell</td>
                                <td>admin</td>
                                <td>Done</td>
                                <td>6/7/2024</td>
                                <td>12/7/2024</td>
                                <td>
                                    <Link className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to="/admin/add-asset-category">
                                        {/* <i className="las la-eye">
                            </i> */}
                                        <AiFillEdit className="icon-icon" />
                                    </Link>
                                    <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                        <i className="las la-trash icon-icon">
                                        </i>
                                    </button>

                                    <Link className="ms-2 btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to="/admin/asset-category-type-view">
                                        {/* <i className="las la-eye">
                            </i> */}
                                        <GrView />
                                    </Link>
                                </td>


                            </tr>
                            <tr>
                                <td >4</td>
                                <td >Dell</td>
                                <td>admin</td>
                                <td>resolve</td>
                                <td>6/7/2024</td>
                                <td>12/7/2024</td>
                                <td>
                                    <Link className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to="/admin/add-asset-category">
                                        {/* <i className="las la-eye">
                            </i> */}
                                        <AiFillEdit className="icon-icon" />
                                    </Link>
                                    <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                        <i className="las la-trash icon-icon">
                                        </i>
                                    </button>

                                    <Link className="ms-2 btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to="/admin/asset-category-type-view">
                                        {/* <i className="las la-eye">
                            </i> */}
                                        <GrView />
                                    </Link>
                                </td>
                            </tr>

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

export default AssetIssue
