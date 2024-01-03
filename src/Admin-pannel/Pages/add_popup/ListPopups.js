import axios from "axios"
import { useEffect, useState } from "react"
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom"

function createMarkup(data) {
    return { __html: data };
}
function ListPopups() {
    const [data, setData] = useState(null)
    const token = window.localStorage.getItem('token')
    const getData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/popup/admin`, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                },
            })
            setData(res.data)
        } catch (error) {
            alert('Server Error ,Fail to Load Data !')
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const deleteData = async (id) => {
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api/popup/delete_Popup/${id}`, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                },
            })
            alert('Popup Item Delete Successfully!')
            setTimeout(() => {
                getData()
            }, 1000);
        } catch (error) {
            alert('Somting Went Wrong !')
        }
    }

    const changeStatus = async (id, sta) => {
        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/popup/updateStatus`, {
                popupId: id,
                status: sta
            }, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                },
            })
            alert('Popup Item Update Successfully!')
            getData()
        } catch (error) {
            alert('Somting Went Wrong !')
        }
    }

    return <div>
        <div className="px-15px px-lg-25px">
            <div className="aiz-titlebar text-left mt-2 mb-3">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="h3">Popup Master</h1>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="container">
                    <div className="row" style={{ margin: "15px 0" }}>
                        <div className="col-4">
                            <label className=" col-form-label">Page</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Select Page *</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <label className=" col-form-label">Status</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Status</option>
                                <option value="1">Active</option>
                                <option value="2">In Active</option>
                            </select>
                        </div>

                        <div className="col-4">
                            <label className=" col-form-label" style={{ opacity: "0" }}>Status</label>
                            <button type="button" class="btn btn-success" style={{ width: "160px" }}>Search Data</button>
                        </div>
                    </div>
                </div>
                <form id="sort_sellers" method="GET">
                    <div className="card-header row gutters-5"><div className="dropdown col-lg-2 mb-2 mb-md-0">   </div><div className="col-md-3 ml-auto"></div><div className="col-md-3-"><div className="form-group mb-0">
                    </div>
                        {/* <Link className="btn btn-success" to="create" style={{ marginTop: 10, width: 150 }}>Add SMS</Link> */}
                    </div>
                    </div>
                    <div className="card-body">
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl">
                            <thead>
                                <tr class="footable-header">

                                    <th style={{ display: "table-cell" }}>#</th>
                                    <th style={{ display: "table-cell" }}>Image</th>
                                    <th data-breakpoints="lg" style={{ display: "table-cell" }}>Popup Description</th>
                                    <th data-breakpoints="lg" style={{ display: "table-cell" }}>Popup page</th>
                                    <th data-breakpoints="lg" style={{ display: "table-cell" }}>Valid Till</th>
                                    <th data-breakpoints="lg" style={{ display: "table-cell" }}>status</th>
                                    <th width="10%" class="footable-last-visible" style={{ display: "table-cell" }}>Options</th>
                                </tr>
                            </thead>
                            <tbody>

                                {data && data.map((item, i) => {
                                    return <tr key={i}>
                                        <td style={{ display: "table-cell" }}>{1 + i}</td>
                                        <td style={{ display: "table-cell" }}>
                                            {item?.image ? <img style={{ width: "110px", height: "110px" }} src={item?.image.url} /> : 'No Image'}
                                        </td>
                                        <td style={{ display: "table-cell" }}>
                                            <div dangerouslySetInnerHTML={createMarkup(item.description)}></div>
                                        </td>
                                        <td style={{ display: "table-cell" }}>
                                            {item.page}
                                        </td>
                                        <td style={{ display: "table-cell" }}>
                                            {item.date_from} to {item.date_to}
                                        </td>
                                        <td style={{ display: "table-cell" }}>
                                            <Form.Check
                                                type="switch"
                                                checked={item.status}
                                                id="custom-switch"
                                                onChange={() => { changeStatus( item._id, !item.status) }}
                                            />
                                        </td>
                                        <td style={{ display: "table-cell" }}>
                                            <Link class="btn btn-soft-info btn-icon btn-circle btn-sm" title="Approved" to={`edit_popup/${item._id}`}>
                                                <i class="las la-edit"></i>
                                            </Link>

                                            <button type="button" onClick={() => deleteData(item._id)} class="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete">
                                                <i class="las la-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                })}


                            </tbody>
                        </table>
                    </div>

                </form>
            </div>

        </div>
    </div>
}
export default ListPopups