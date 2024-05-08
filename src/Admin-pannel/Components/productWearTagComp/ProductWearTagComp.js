import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";

function ProductWearTagComp() {

    const [getListData, setgetListData] = useState();
    const [loading, setLoading] = useState(true)
    const token = window.localStorage.getItem('adminToken')

    const getdata = async () => {
        setLoading(true)
        try {
            const res = await axios.get('https://onlineparttimejobs.in/api/wearTag', {
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
        toast.success("Product Wear Tag Deleted", {
            position: "top-center"
        })
    };
    const toastErrorMessage = () => {
        toast.error("Product Wear Tag Not Deleted ", {
            position: "top-center"
        })
    };

    const deletData = async (id) => {
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api/wearTag/delete_weartag/${id}`, {
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
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Product Wear Tag</h1>
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
                            <h5 className="mb-0 h6">Product Wear Tag</h5>
                            <div className="col-md-6 text-md-right">
                                <Link to="/admin/add-productWear-tag" className="btn btn-info">
                                    <span>+ Add Product Wear Tag</span>
                                </Link>
                            </div>
                        </div>
                        <div className="card-body">

                            <section className="form-section">
                                <div className="row">
                                    {/* <form action=""> */}
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
                                        <button className="btn btn-primary mr-3">Search</button>
                                        <button className="btn btn-danger">Rest</button>
                                    </div>
                                    {/* </form> */}
                                </div>
                            </section>


                            <table className="table table-3">
                                <thead>
                                    <tr>
                                        <th class="table-secondary" scope="col">Name</th>
                                        <th class="table-secondary" scope="col">Code</th>
                                        <th class="table-secondary" scope="col">Default</th>
                                        <th class="table-secondary" scope="col">IsActive</th>
                                        <th class="table-secondary" scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? <h3>Loading...</h3> : getListData && getListData?.map((item, i) => {
                                        return <tr key={i}>
                                            <td scope="row">{item?.name}</td>
                                            <td>{item?.code}</td>
                                            <td>{item?.default ? 'Active' : 'InActive'}</td>
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
            </div>
        </>
    )
}
export default ProductWearTagComp