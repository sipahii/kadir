import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { base_Url } from "../../../server";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { GrView } from "react-icons/gr";
const token = window.localStorage.getItem("token");

function RoboticsPendingApplicationListComp() {
    const [list, setList] = useState();
    // console.log("list----", list);

    const getData = async () => {
        const res = await axios.get(`${base_Url}contactMessage`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        console.log("res?.data----", res?.data);
        setList(res?.data);
    };

    const handleDelete = async (id) => {
        const res = await axios.get(`${base_Url}customer/delete_customer/${id}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        getData();
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Robotic Pending Applications</h1>
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
                            <h5 className="mb-0 h6">Robotic Pending Applications</h5>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Id</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Robotics</th>
                                            <th>Solutions</th>
                                            <th>Stories</th>
                                            <th>Email</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list &&
                                            list.map((item,i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td>{i+1}</td>
                                                        <td>{item?._id}</td>
                                                        <td>{item?.firstname}</td>
                                                        <td>{item?.lastname}</td>
                                                        <td>
                                                            {item?.category?.map((item, i) => {
                                                                return <span key={i}>{item}<br /></span>;
                                                            })}
                                                        </td>
                                                        <td>
                                                            {item?.industry?.map((item, i) => {
                                                                return <span key={i}>{item}<br /></span>;
                                                            })}
                                                        </td>
                                                        <td>
                                                            {item?.blogsCategory?.map((item, i) => {
                                                                return <span key={i}>{item}<br /></span>;
                                                            })}
                                                        </td>
                                                        <td>{item?.email}</td>
                                                        <td>
                                                            <td>
                                                                <Link
                                                                    className="btn btn-primary btn-icon btn-circle btn-sm me-2 btn-circle-2"
                                                                    title="View"
                                                                    to={`/admin/robotic-master/pending-list/edit/${item?._id}`}
                                                                >
                                                                    <AiFillEdit className="icon-icon" />
                                                                </Link>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => handleDelete(item?._id)}
                                                                    className="btn btn-danger btn-icon btn-circle btn-sm btn-circle-2"
                                                                    title="delete"
                                                                    fdprocessedid="yghhlt"
                                                                >
                                                                    <i className="las la-trash icon-icon"></i>
                                                                </button>

                                                                {/* <Link className="ms-2 btn btn-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to={`/admin/asset-sub-category-type-view/details/${item?._id}`}>
                                                      
                                                            <GrView />
                                                        </Link> */}
                                                            </td>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                                </table>
                                <div className="aiz-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto"></div>
                {/* <ToastContainer /> */}
            </div>
        </>
    );
}
export default RoboticsPendingApplicationListComp;
