import React from 'react';
import '../../Components/celebrityDetailComp/celebrityDetail.css';

import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
// import { useDeleteSellerPackageMutation, useGetSellerPackageQuery } from "../all-products/allproductsApi/allProductsApi";
import { useEffect, useState } from "react";
// import PerchasePackage from "./PerchasePackage";
// import OnlinePerchase from "./OnlinePerchase";
// import OfflinePerchase from "./OfflinePerchase";
import { useDeleteSellerListMutation, useDeleteSellerPackageMutation, useGetSellerPackageQuery, useSellerActiveMutation } from "../all-products/allproductsApi/allProductsApi";
import PerchasePackage from "../sellerPackage/PerchasePackage";
import OnlinePerchase from "../sellerPackage/OnlinePerchase";
import OfflinePerchase from "../sellerPackage/OfflinePerchase";
import axios from 'axios';


function CelebrityDetailComp() {
    const [celebrityDetailD, setCelebrityDetailD] = useState();
    const [data, setData] = useState();
    const [listDonatedData, setListDonatedData] = useState();
    const params = useParams();
    const token = window.localStorage.getItem('token')

    const getCelebrityDetailData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/sellerList/admin/${params?.id}`, {
                headers: {
                    // "Content-Type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                }
            });
            setCelebrityDetailD(res?.data)
        } catch (error) {
            alert('Server Error');
        }
    };
    const getData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/packagePaymentHistory/user/${params?.id}`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            setData(res.data)
        } catch (error) {
            alert('Data Not Found Server Error !')
        }
    };
    const getData1 = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/transactionPurchase/user/${params?.id}`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            setListDonatedData(res.data)
        } catch (error) {
            alert('Server Error')
        }
    };
    useEffect(() => {
        getCelebrityDetailData();
        getData();
        getData1();
    }, []);

    const [updateStatus, { isError, isLoading: updateLoading, isSuccess }] = useSellerActiveMutation()
    const changeStatus = async (item) => {
        try {
            const res = await axios.put(`https://onlineparttimejobs.in/api/packagePaymentHistory/update_PackagePaymentStatus/${item?._id}`, { status: !item.status }, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            getData()
            alert('Status Update Successfully')
        } catch (error) {
            alert('Status Not Update')
        }
    };
    const changeStatus1 = (item) => {
        const obj = { id: item._id, data: { approve: !item.approve } }
        updateStatus(obj)
    };

    const [deleteItem, { isLoading }] = useDeleteSellerListMutation()
    const deleteData = async (id) => {
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api/transactionPurchase/delete_transactionPurchase/${id}`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            getData()
            alert('Deleted')
        } catch (error) {
            alert('Server Error')
        }
    };

    const toastSuccessMessage = () => {
        toast.success("Update Successfully", {
            position: "top-center"
        })
    };
    const toastErrorMessage = () => {
        toast.error("Update Faild..", {
            position: "top-center"
        })
    };
    useEffect(() => {
        if (isSuccess === true) {
            toastSuccessMessage()
        };
    }, [isSuccess]);
    useEffect(() => {
        if (isError === true) {
            toastErrorMessage()
        };
    }, [isError]);

    console.log('celebrityDetailD----', celebrityDetailD)

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className='main-Wrapper'>
                        <div className='profile-sec'>
                            <div className='profile-img-text'>
                                <img src={celebrityDetailD?.thumnail_image?.url} alt='celeb-img' />
                                <div className='prof-text-sec'>
                                    <h5><span>First Name: </span>{celebrityDetailD?.firstname}</h5>
                                    <h5><span>Last Name: </span>{celebrityDetailD?.lastname}</h5>
                                    <h5><span>Mobile No: </span>{celebrityDetailD?.mobile}</h5>
                                    <h5><span>Email: </span>{celebrityDetailD?.email}</h5>

                                </div>
                            </div>
                            <div className='address-sec'>
                                <h4>Adress:-</h4>
                                <h5><span>Adress Lane1: </span>Zakir Nagar</h5>
                                <h5><span>Adress Lane2: </span>Zamia Nagar</h5>
                                <h5><span>Zip: </span>Zamia Nagar 090232</h5>
                                <h5><span>City: </span>New Delhi</h5>
                                <h5><span>State: </span>New Delhi</h5>
                                <h5><span>Country: </span>India</h5>
                            </div>
                        </div>
                        <div className='total-status-sec'>
                            <div className='purchase-pckage-sec'>
                                <h5><span>Total Purchases: </span>123455</h5>
                                <h5><span>Total Active packages: </span>4535</h5>
                                <h5><span>Total Available Inquiries: </span>453995</h5>
                                <h5><span>Total Pending Inquiries: </span>453995</h5>
                                <h5><span>Total Compeleted Inquiries: </span>453995</h5>
                            </div>
                            <div className='purchase-pckage-sec'>
                                <h5><span>Total Transactions: </span>123455</h5>
                                <h5><span>Total Active Transactions: </span>34558934</h5>
                                <h5><span>Total Pending Transactions: </span>43995</h5>
                                <h5><span>Total Rejected Transactions: </span>995</h5>
                            </div>
                        </div>
                        <div className='celeb-tab-sec'>
                            <div>
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Packages</button>

                                        <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Transactions</button>
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent" style={{ marginTop: '20px' }}>
                                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}>
                                        <div className="aiz-main-content">
                                            <div className="px-15px px-lg-25px">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h5 className="mb-0 h6">Packages Purchase List</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <table cellSpacing={0} width="100%" style={{}}>
                                                            <thead>
                                                                <tr>
                                                                    <th>#</th>
                                                                    <th>Photo</th>
                                                                    <th>Data</th>
                                                                    <th>Package Name</th>
                                                                    <th>Package Duration</th>
                                                                    <th>Package Amount</th>
                                                                    {/* <th>Package Type</th> */}
                                                                    <th>Trans Type</th>
                                                                    <th>Status</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {data && data.map((item, i) => {
                                                                    return <tr key={i}>
                                                                        <td>{1 + i}</td>
                                                                        <td>
                                                                            <img style={{ width: "120px", height: "120px" }} src={item?.photo?.url} />
                                                                        </td>
                                                                        <td>{item?.createdAt}</td>
                                                                        <td>{item?.package_id?.name}</td>
                                                                        <td>{item?.package_id?.duration + " " + item?.duration[0]?.name}</td>
                                                                        <td>{item?.currency[0]?.symbol + " " + item?.transactions?.amount}</td>
                                                                        {/* <td>{item?.packageType}</td> */}
                                                                        <td>{item?.transType}</td>
                                                                        <td>
                                                                            <div className="form-check form-switch">
                                                                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={() => changeStatus(item)} checked={item?.status} />
                                                                            </div>

                                                                        </td>
                                                                    </tr>
                                                                })}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                                                {/*p className="mb-0">&copy;  v6.3.3</p*/}
                                            </div>
                                        </div>

                                    </div>

                                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex={0}>
                                        <div className="aiz-main-content">
                                            <div className="px-15px px-lg-25px">
                                                <div className="aiz-titlebar text-left mt-2 mb-3">
                                                    <div className="row align-items-center">
                                                        <div className="col-md-6">
                                                            <h1 className="h3">All Transactions</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ToastContainer />
                                                {isLoading && <div className="preloaderCount">
                                                    <div className="spinner-border" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </div>
                                                </div>}
                                                <div className="card">
                                                    <form className id="sort_sellers" action method="GET">

                                                        <div className="card-header row gutters-5">
                                                            <div className="col-lg-12 col-md-12 mb-2 d-flex align-items-center">
                                                                <h6 style={{ color: 'black', fontWeight: '700', padding: "4px", margin: '0' }}>Total Recieved Amount:</h6>
                                                                <span style={{ padding: '4px', backgroundColor: 'green', color: 'white', borderRadius: '5px' }}>1100</span>
                                                            </div>
                                                            <div className="col">
                                                                <h5 className="mb-md-0 h6">All Transactions</h5>
                                                            </div>
                                                            <div className="dropdown col-lg-2 mb-2 mb-md-0">
                                                                <select
                                                                    className="form-select"
                                                                    aria-label="Default select example"
                                                                >
                                                                    <option selected>Bulk Action</option>
                                                                    <option value="1">Delete selection</option>
                                                                </select>

                                                            </div>
                                                            <div className="col-md-3 ml-auto">
                                                                <select
                                                                    className="form-select"
                                                                    aria-label="Default select example"
                                                                >
                                                                    <option selected>Filter by Approval</option>
                                                                    <option value="1">Approved</option>
                                                                    <option value="2">Non-Approved</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group mb-0">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="search"
                                                                        name="search"
                                                                        placeholder="Type name or email & Enter"
                                                                        fdprocessedid="3vgavp"
                                                                    />
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div className="card-body">

                                                            <table
                                                                className="table aiz-table mb-0 footable footable-1 breakpoint-xl"
                                                                style={{}}
                                                            >
                                                                <thead>
                                                                    <tr className="footable-header">

                                                                        <th style={{ display: "table-cell" }}>#</th>
                                                                        <th style={{ display: "table-cell" }}>Merchant ID</th>
                                                                        <th style={{ display: "table-cell" }}>Merchant Transaction ID</th>
                                                                        <th style={{ display: "table-cell" }}>Payment Type</th>
                                                                        <th style={{ display: "table-cell" }}>Amount</th>
                                                                        <th style={{ display: "table-cell" }}>Created At</th>

                                                                        <th
                                                                            data-breakpoints="lg"
                                                                            style={{ display: "table-cell" }}
                                                                        >
                                                                            Active
                                                                        </th>

                                                                        <th
                                                                            width="10%"
                                                                            className="text-right footable-last-visible"
                                                                            style={{ display: "table-cell" }}
                                                                        >
                                                                            Options
                                                                        </th>
                                                                    </tr>
                                                                </thead>

                                                                <tbody>

                                                                    {listDonatedData ? listDonatedData.map((item, i) => {
                                                                        return <tr key={i}>

                                                                            <td style={{ display: "table-cell" }}>{i + 1}</td>

                                                                            <td style={{ display: "table-cell" }}>{item?.merchantId}</td>
                                                                            <td style={{ display: "table-cell" }}>---------</td>
                                                                            <td style={{ display: "table-cell" }}>{item?.transType}</td>
                                                                            <td style={{ display: "table-cell", textAlign: 'right' }}>{item?.currency[0]?.symbol + " " + item?.amount}</td>
                                                                            <td style={{ display: "table-cell" }}>{item?.updatedAt}</td>

                                                                            <td style={{ display: "table-cell" }}>
                                                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                                                    <input
                                                                                        onChange={() => { changeStatus1(item) }}
                                                                                        type="checkbox"
                                                                                        checked={item.approval}
                                                                                    />
                                                                                    <span className="slider round" />
                                                                                </label>
                                                                            </td>

                                                                            <td className="text-right footable-last-visible" style={{ display: "table-cell" }}>

                                                                                <Link className="btn btn-soft-info btn-icon btn-circle btn-sm" to={`edit/${item._id}`} title="Approved">
                                                                                    <i className="las la-edit"></i>
                                                                                </Link>
                                                                                <button onClick={() => { deleteData(item._id) }} type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete">
                                                                                    <i className="las la-trash"></i>
                                                                                </button>

                                                                            </td>
                                                                        </tr>
                                                                    }) : <tr><td><h2>Loading....</h2></td></tr>}

                                                                </tbody>
                                                            </table>
                                                            <div className="aiz-pagination"></div>
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>
                                            <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">

                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CelebrityDetailComp