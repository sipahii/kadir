import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import ExportDataInPdf from "../../../../common/exportDataInPdf/ExportDataInPdf";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

function LabourCharge() {
    const [getListData, setgetListData] = useState();
    const [loading, setLoading] = useState(true)
    const token = window.localStorage.getItem('adminToken')

    const getdata = async () => {
        setLoading(true)
        try {
            const res = await axios.get('https://onlineparttimejobs.in/api/labourCharge', {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            setgetListData(res?.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    };

    const toastSuccessMessage = () => {
        toast.success("LabourCharge Deleted", {
            position: "top-center"
        })
    };
    const toastErrorMessage = () => {
        toast.error("LabourCharge Not Deleted ", {
            position: "top-center"
        })
    };

    const deletData = async (id) => {
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api/labourCharge/delete_labourCharge/${id}`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            toastSuccessMessage()
            getdata()
        } catch (error) {
            toastErrorMessage()
        }
    }

    useEffect(() => {
        getdata()
    }, []);

    console.log('getListData', getListData);

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card">
                        <div className="card-header custom-card-header" id="custome-cardHeader">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h5 className="mb-0 h6">Labour Charge</h5>
                                </div>
                                {getListData?.length ? <div className="col-lg-2 text-right" >
                                    <button style={{ background: '#2e294e', padding: '0', color: 'white', borderRadius: '5px', margin: '0' }}>
                                        <ReactHTMLTableToExcel
                                            style={{ margin: '0' }}
                                            id="test-table-xls-button"
                                            className="download-table-xls-button cusxel"
                                            table="table-to-xlsx"
                                            filename="tablexls"
                                            sheet="tablexls"
                                            buttonText="Download Excel sheet" />
                                    </button>
                                </div> : null}
                                {getListData?.length ? <div className="col-lg-2">
                                    <ExportDataInPdf />
                                </div> : null}

                                <div className="col-lg-2 text-md-right">
                                    <Link to="/admin/add-labour-charge" className="btn btn-info">
                                        <span>Add Labour Charge</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="card-body">

                            <section className="form-section">
                                <div className="row">
                                    {/* <form action=""> */}
                                    <div className="col-lg-3">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Country</option>
                                            <option value={1}>India</option>
                                            <option value={1}>Australia</option>
                                            <option value={1}>UAE</option>
                                            <option value={1}>United kingdom</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Status</option>
                                            <option value={1}>Active</option>
                                            <option value={1}>Inactive</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-3">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Defoult</option>
                                            <option value={1}>Active</option>
                                            <option value={1}>Inactive</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-3">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Metal Price Type</option>
                                            <option value={1}>Gold</option>
                                            <option value={1}>Silver</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-3 mt-1">
                                        <button className="btn btn-primary mr-3">Search</button>
                                        <button className="btn btn-danger">Rest</button>
                                    </div>
                                    {/* </form> */}
                                </div>
                            </section>


                            <table className="table table-3 exppdf">
                                <thead>
                                    <tr>
                                        <th class="table-secondary" scope="col">Name</th>
                                        <th class="table-secondary" scope="col">Code</th>
                                        <th class="table-secondary" scope="col">Description</th>
                                        <th class="table-secondary" scope="col">Status</th>
                                        <th class="table-secondary" scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? <h3>Loading...</h3> : getListData && getListData.map((item, i) => {
                                        return <tr>
                                            <td scope="row">{item?.name}</td>
                                            <td>{item?.code}</td>
                                            <td>{item?.description}</td>
                                            <td>{item?.isActive ? 'Active' : 'InActive'}</td>
                                            <td>
                                                <Link className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to={`edit/${item?.uid}`}>
                                                    <i className="las la-edit">
                                                    </i>
                                                    {/* <AiFillEdit className="icon-icon" /> */}
                                                </Link>
                                                <button type="button" onClick={() => deletData(item?.uid)} className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
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
                <ToastContainer />


                <table className="table table-3" id="table-to-xlsx" style={{ display: 'none' }}>
                    <thead>
                        <tr>
                            <th class="table-secondary" scope="col">Name</th>
                            <th class="table-secondary" scope="col">Code</th>
                            <th class="table-secondary" scope="col">Description</th>
                            <th class="table-secondary" scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? <h3>Loading...</h3> : getListData && getListData?.map((item, i) => {
                            return <tr>
                                <td scope="row">{item?.name}</td>
                                <td>{item?.code}</td>
                                <td>{item?.description}</td>
                                <td>{item?.isActive ? 'Active' : 'InActive'}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default LabourCharge