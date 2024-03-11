import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useGetReqListQuery, useUpdateBrandReqMutation } from "../../Components/all-products/allproductsApi/allProductsApi"

function BrandRequest() {

    const [updateVal] = useUpdateBrandReqMutation()

    const {data} = useGetReqListQuery()


    const changeStatus = (val, id) => {
        if (val === true) {
            updateVal({ id: id, data: { approve: true } })
        } else {
            updateVal({ id: id, data: { approve: false } })
        }
        

    }


    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
            <div className="card" style={{ padding: "10px" }}>
                <h5>All Requested Brands</h5>

                <div style={{ margin: "10px 0", display: "flex", justifyContent: "end" }}>
                    <input style={{ width: '250px' }} placeholder="Filter" className="form-control" />
                    <button type="button" style={{ margin: "0 10px" }} className="btn btn-info">Filter</button>
                </div>

                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Brand Logo</th>
                            <th>Brand Name</th>
                            <th>Brand Proof</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data ? data.map((item, i) => {
                            return <tr key={item._id}>
                                <td>{1 + i}</td>
                                <td>
                                    <img style={{ width: "90px", height: "90px" }} src={item?.logo?.url} />
                                </td>
                                <td>
                                    {item?.brand_name}
                                </td>
                                <td>
                                    <img style={{ width: "90px", height: "90px" }} src={item?.proof_attach[0].url} />
                                </td>
                                <td>{item.approve ? 'Approved' : 'Pending'}</td>
                                <td>
                                    <button type="button" onClick={() => { changeStatus(true, item._id) }} style={{ width: "90px", backgroundColor: "lightblue", marginRight: "10px" }} className="remveHov btn btn-soft-danger btn-icon btn-circle btn-sm">
                                        Accept
                                    </button>

                                    <button type="button" onClick={() => { changeStatus(false, item._id) }} style={{ width: "90px", }} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                        Reject
                                    </button>

                                </td>
                            </tr>
                        }) : <tr><td><h5>No Data</h5></td></tr>}



                    </tbody>
                </Table>
            </div>
        </div>

    </div>
}
export default BrandRequest