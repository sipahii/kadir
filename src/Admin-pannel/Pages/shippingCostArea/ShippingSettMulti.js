import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";





function ShippingSettMulti({updateAres, getData, getDatas, data, item, i, sendData, onChangeHandler, setValue, onChangeHandlesr }) {
    const idShow = window.localStorage.getItem('adminId')
    const token = window.localStorage.getItem('token')

    useEffect(() => {
        if (item) {
            getData(item.country_id)
        }
    }, [])

    const deleteData = async (id) => {
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api/shippingPrice/delete_shipping/${id}`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            getData(item.country_id)
        } catch (error) {

        }
    }
    return <div className="card">
        <div className="card-header">
            <h5 className="mb-0 h6">Shipping Area ({item?.lable})</h5>
        </div>
        <div className="card-body">

            <form className="form-horizontal" id="create-course-form">

                {/* <input className="form-control" style={{ margin: "10px 0" }} value={item.country_id} onChange={(e) => { onChangeHandler(e, item.language_id) }} name="minPrice" placeholder="Estate Min Price" /> */}

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Area</label>
                    <div className="col-md-9">
                        <input className="form-control" style={{ margin: "10px 0" }} value={item.area} onChange={(e) => { onChangeHandler(e, item.country_id) }} name="area" placeholder="Area" />
                    </div>

                </div>
                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Price</label>
                    <div className="col-md-9">
                        <input className="form-control" style={{ margin: "10px 0" }} value={item.price} onChange={(e) => { onChangeHandler(e, item.country_id) }} name="price" placeholder="Price" />
                    </div>

                </div>


                <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { sendData(item.country_id) }}>Save</button>
            </form>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Area</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {getDatas && getDatas?.map((item, i) => {
                    return <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{item?.area}</td>
                        <td>{item?.price}</td>
                        <td>
                            <Link to={`#`} onClick={()=>{updateAres(item)}} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                <i className="las la-edit" />
                            </Link>
                            <button type="button" onClick={() => {deleteData(item._id) }} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                <i className="las la-trash" />
                            </button>
                        </td>
                    </tr>
                })}

            </tbody>
        </table>
    </div>
}
export default ShippingSettMulti