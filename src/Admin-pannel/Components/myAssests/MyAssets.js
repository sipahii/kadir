import React from 'react';
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
// import { base_Url_Assets } from "../../../../../server"
import { base_Url_Assets } from "../../../server"
import { AiFillEdit } from "react-icons/ai"
import { GrView } from "react-icons/gr"

function MyAssets() {

    const [get, setGet] = useState(null);
    const [loading, setLoading] = useState(false)
    const tokenn = window.localStorage.getItem('adminToken');
    console.log('assests Token', tokenn)
    console.log('get------', get)

    const getApiData = async () => {
        setLoading(true)
        const res = await axios.get(`${base_Url_Assets}asset/myAssets`,
            {
                headers: {
                    Authorization: 'Bearer ' + tokenn
                }
            }
        );
        setLoading(false)
        setGet(res.data)
    }
    useEffect(() => {
        getApiData()
    }, [])
    const handleDelete = async (id) => {
        const res = await axios.delete(`${base_Url_Assets}asset/delete_assets/${id}`)
        getApiData()
    }

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">

                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">My Assests</h1>
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
                            <h5 className="mb-0 h6">My Asset List</h5>
                            {/* <div className="col-md-6 text-md-right">
                                <Link to="/admin/add-newasset-category" className="btn btn-circle btn-info">
                                    <span>Add Asset </span>
                                </Link>
                            </div> */}
                        </div>
                        <div className="card-body">
                            <table className="table table-3 position-relative">
                                <thead>
                                    <tr>
                                        <th class="table-secondary" scope="col">Id</th>
                                        <th class="table-secondary" scope="col">Image</th>
                                        <th class="table-secondary" scope="col">service Tag</th>
                                        <th class="table-secondary" scope="col">Asset Modle No</th>
                                        <th class="table-secondary" scope="col">Name</th>
                                        {/* <th class="table-secondary" scope="col">Unit Price</th> */}
                                        <th class="table-secondary" scope="col">Date of Allocation</th>
                                        {/* <th class="table-secondary" scope="col">Allocate</th> */}
                                        <th class="table-secondary" scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? <h2>Loading...</h2> :
                                        get && get?.map((item, i) => {
                                            return <tr key={i}>
                                                <td scope="row">{item?.id}</td>
                                                <td><img width={'100px'} src={item?.img} alt="" /></td>
                                                <td>{item?.serviceTag}</td>
                                                <td>{item?.modelNo}</td>
                                                <td>{item?.name}</td>
                                                {/* <td>{item?.unit_price}</td> */}
                                                <td>{item?.createdAt}</td>
                                                {/* <td>
                                                    <Link to={`/admin/allocate/${item?._id}`}>Allocate</Link>
                                                </td> */}
                                                <td>
                                                    {/* <Link className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to={`/admin/asset/edit/${item?._id}`}>
                                                        <AiFillEdit className="icon-icon" />
                                                    </Link> */}
                                                    {/* <button type="button" onClick={() => handleDelete(item?._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                                        <i className="las la-trash icon-icon">
                                                        </i>
                                                    </button> */}

                                                    <Link className="ms-2 btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to={`/admin/asset/details/${item?._id}`}>

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
        </>
    )
}

export default MyAssets