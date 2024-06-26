import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CelebrityGoogleDashboardComp() {
    const [loader, setLoader] = useState(false);
    const [dashboardCardData, setDashboardCardData] = useState();
    const [Rejected, setRejected] = useState(null)
    const [Pending, setPending] = useState(null)
    const [Cancel, setCancel] = useState(null)


    const navigate = useNavigate();
    const isLoginPickup = window.localStorage.getItem('isPickupManagerLogin')
    const token = window.localStorage.getItem('token');
    const idShow = window.localStorage.getItem('adminId');


    const getDashboadCardsData = async () => {
        setLoader(true)
        const respo = await axios.get(`https://onlineparttimejobs.in/api/`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        setDashboardCardData(respo?.data);
        setLoader(false);
    };

    useEffect(() => {
        getDashboadCardsData();
    }, []);

    const changeRoute = (str) => {

        if (str === 'customer-list') {
            navigate('customer-list')
        }
        if (str === 'special-seller-list/65439fcb8e317e2508c9e734') {
            navigate('special-seller-list/65439fcb8e317e2508c9e734')
        }
        if (str === 'special-seller-list/65439fe58e317e2508c9e736') {
            navigate('special-seller-list/65439fe58e317e2508c9e736')
        }
        if (str === 'special-seller-list/65439fdc8e317e2508c9e735') {
            navigate('special-seller-list/65439fdc8e317e2508c9e735')
        }

        if (str === 'special-seller-list') {
            navigate('special-seller-list')
        }
        if (str === 'all_orders') {
            if (isLoginPickup === 'true') {
                window.localStorage.setItem('orderName', 'All PickupOrders')
                navigate('orders_by_pickup_point')
            } else {
                navigate('all_orders')
            }

        }
        if (str === 'categories') {
            navigate('categories')
        }
        if (str === 'products/all') {
            navigate('products/all')
        }
        if (str === 'seller') {
            navigate('seller')
        }
        if (str === 'pick_up_points') {
            navigate('pick_up_points')
        }
    };


    return (
        <div className="aiz-main-content">
            <div className="px-15px px-lg-25px">


                <div className="row gutters-10">
                    <div className="col-lg-12">
                        <div className="row gutters-10">

                            <div className="col-lg-6 col-md-6" onClick={() => { changeRoute('special-seller-list') }}>
                                <div style={{ width: "100%", cursor: "pointer" }} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
                                    <div className="dashboardDataText px-3 pt-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className="textD">
                                            {/* <span className="fs-12 d-block">Total</span> */}
                                            Total Artists/Celebrities
                                        </div>
                                        <div className="numberD mt-1">
                                            1000
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div style={{ width: "100%", cursor: "pointer" }} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
                                    <div className="dashboardDataText px-3 pt-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className="textD">
                                            {/* <span className="fs-12 d-block">Pending</span> */}
                                            Pending Artists/Celebrities
                                        </div>
                                        <div className="numberD mt-1">
                                            900
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div style={{ width: "100%", cursor: "pointer" }} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
                                    <div className="dashboardDataText px-3 pt-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className="textD">
                                            {/* <span className="fs-12 d-block">Approved</span> */}
                                            Approved Artists/Celebrities
                                        </div>
                                        <div className="numberD mt-1">
                                            80
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div style={{ width: "100%", cursor: "pointer" }} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
                                    <div className="dashboardDataText px-3 pt-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className="textD">
                                            {/* <span className="fs-12 d-block">Rejected</span> */}
                                            Rejected Artists/Celebrities
                                        </div>
                                        <div className="numberD mt-1">
                                            20
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div style={{ width: "100%", cursor: "pointer" }} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
                                    <div className="dashboardDataText px-3 pt-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className="textD">
                                            {/* <span className="fs-12 d-block">Rejected</span> */}
                                            InterNational Artists/Celebrities
                                        </div>
                                        <div className="numberD mt-1">
                                            11002
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div style={{ width: "100%", cursor: "pointer" }} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
                                    <div className="dashboardDataText px-3 pt-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className="textD">
                                            {/* <span className="fs-12 d-block">Rejected</span> */}
                                            National Artists/Celebrities
                                        </div>
                                        <div className="numberD mt-1">
                                            9023
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div style={{ width: "100%", cursor: "pointer" }} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
                                    <div className="dashboardDataText px-3 pt-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className="textD">
                                            {/* <span className="fs-12 d-block">Rejected</span> */}
                                            Artists/Celebrities Industry Wise
                                        </div>
                                        <div className="numberD mt-1">
                                            1254
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div style={{ width: "100%", cursor: "pointer" }} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
                                    <div className="dashboardDataText px-3 pt-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className="textD">
                                            {/* <span className="fs-12 d-block">Rejected</span> */}
                                            Artists/Celebrities Category Wise
                                        </div>
                                        <div className="numberD mt-1">
                                            1254
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div style={{ width: "100%", cursor: "pointer" }} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
                                    <div className="dashboardDataText px-3 pt-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className="textD">
                                            {/* <span className="fs-12 d-block">Rejected</span> */}
                                            Artists/Celebrities Skills Wise
                                        </div>
                                        <div className="numberD mt-1">
                                            1223
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div style={{ width: "100%", cursor: "pointer" }} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
                                    <div className="dashboardDataText px-3 pt-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className="textD">
                                            {/* <span className="fs-12 d-block">Rejected</span> */}
                                            Artists/Celebrities Male Wise
                                        </div>
                                        <div className="numberD mt-1">
                                            9100
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div style={{ width: "100%", cursor: "pointer" }} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
                                    <div className="dashboardDataText px-3 pt-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className="textD">
                                            {/* <span className="fs-12 d-block">Rejected</span> */}
                                            Artists/Celebrities Female Wise
                                        </div>
                                        <div className="numberD mt-1">
                                            23100
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div style={{ width: "100%", cursor: "pointer" }} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
                                    <div className="dashboardDataText px-3 pt-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className="textD">
                                            {/* <span className="fs-12 d-block">Rejected</span> */}
                                            Artists/Celebrities Others Wise
                                        </div>
                                        <div className="numberD mt-1">
                                            33000
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div style={{ width: "100%", cursor: "pointer" }} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
                                    <div className="dashboardDataText px-3 pt-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className="textD">
                                            {/* <span className="fs-12 d-block">Rejected</span> */}
                                            Artists/Celebrities Country Wise
                                        </div>
                                        <div className="numberD mt-1">
                                            14000
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div style={{ width: "100%", cursor: "pointer" }} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
                                    <div className="dashboardDataText px-3 pt-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className="textD">
                                            {/* <span className="fs-12 d-block">Rejected</span> */}
                                            Artists/Celebrities Zone Wise
                                        </div>
                                        <div className="numberD mt-1">
                                            3000
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                                    </svg>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>





                <div className="card">
                    <div className="card-header row gutters-5">
                        <div className="col text-center text-md-left">
                            <h5 className="mb-md-0 h6">Visitors Count Country Wise</h5>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                            <thead>
                                <tr className="footable-header">
                                    <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                                    <th style={{ display: 'table-cell' }}>Country Name</th>
                                    <th style={{ display: 'table-cell' }}>Unique Code</th>
                                    <th style={{ display: 'table-cell' }}>Total Visitors</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                                    <td style={{ display: 'table-cell' }}>India</td>
                                    <td style={{ display: 'table-cell' }}>IND</td>
                                    <td style={{ display: 'table-cell' }}>500</td>
                                </tr>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td>
                                    <td style={{ display: 'table-cell' }}>Dubai</td>
                                    <td style={{ display: 'table-cell' }}>UAE</td>
                                    <td style={{ display: 'table-cell' }}>600</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header row gutters-5">
                        <div className="col text-center text-md-left">
                            <h5 className="mb-md-0 h6">Visitors Count District Wise</h5>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                            <thead>
                                <tr className="footable-header">
                                    <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                                    <th style={{ display: 'table-cell' }}>District Name</th>
                                    <th style={{ display: 'table-cell' }}>Unique Code</th>
                                    <th style={{ display: 'table-cell' }}>Total Visitors</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                                    <td style={{ display: 'table-cell' }}>Pune</td>
                                    <td style={{ display: 'table-cell' }}>PUN</td>
                                    <td style={{ display: 'table-cell' }}>5400</td>
                                </tr>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td>
                                    <td style={{ display: 'table-cell' }}>Nashik</td>
                                    <td style={{ display: 'table-cell' }}>NSK</td>
                                    <td style={{ display: 'table-cell' }}>6900</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header row gutters-5">
                        <div className="col text-center text-md-left">
                            <h5 className="mb-md-0 h6">Visitors Count Age Wise</h5>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                            <thead>
                                <tr className="footable-header">
                                    <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                                    <th style={{ display: 'table-cell' }}>Age</th>
                                    <th style={{ display: 'table-cell' }}>Total Visitors</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                                    <td style={{ display: 'table-cell' }}>30</td>
                                    <td style={{ display: 'table-cell' }}>800</td>
                                </tr>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td>
                                    <td style={{ display: 'table-cell' }}>40</td>
                                    <td style={{ display: 'table-cell' }}>450</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header row gutters-5">
                        <div className="col text-center text-md-left">
                            <h5 className="mb-md-0 h6">Visitors Count Gender Wise</h5>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                            <thead>
                                <tr className="footable-header">
                                    <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                                    <th style={{ display: 'table-cell' }}>Gender</th>
                                    <th style={{ display: 'table-cell' }}>Total Visitors</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                                    <td style={{ display: 'table-cell' }}>Male</td>
                                    <td style={{ display: 'table-cell' }}>8000</td>
                                </tr>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td>
                                    <td style={{ display: 'table-cell' }}>Female</td>
                                    <td style={{ display: 'table-cell' }}>4500</td>
                                </tr>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td>
                                    <td style={{ display: 'table-cell' }}>Others</td>
                                    <td style={{ display: 'table-cell' }}>300</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header row gutters-5">
                        <div className="col text-center text-md-left">
                            <h5 className="mb-md-0 h6">Visitors Price Wise</h5>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                            <thead>
                                <tr className="footable-header">
                                    <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                                    <th style={{ display: 'table-cell' }}>Price</th>
                                    <th style={{ display: 'table-cell' }}>Total Visitors</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                                    <td style={{ display: 'table-cell' }}>5 Lakh to 10 Lakh</td>
                                    <td style={{ display: 'table-cell' }}>500</td>
                                </tr>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td>
                                    <td style={{ display: 'table-cell' }}>10 Lakh to 20 Lakh</td>
                                    <td style={{ display: 'table-cell' }}>600</td>
                                </tr>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td>
                                    <td style={{ display: 'table-cell' }}>20 Lakh to 30 Lakh</td>
                                    <td style={{ display: 'table-cell' }}>800</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="card">
                    <div className="card-header row gutters-5">
                        <div className="col text-center text-md-left">
                            <h5 className="mb-md-0 h6">Visitors Count Income Wise</h5>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                            <thead>
                                <tr className="footable-header">
                                    <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                                    <th style={{ display: 'table-cell' }}>Visitors Income</th>
                                    <th style={{ display: 'table-cell' }}>Total Visitors</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                                    <td style={{ display: 'table-cell' }}>Below 50k</td>
                                    <td style={{ display: 'table-cell' }}>6000</td>
                                </tr>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td>
                                    <td style={{ display: 'table-cell' }}>Below 1 Lakh</td>
                                    <td style={{ display: 'table-cell' }}>8500</td>
                                </tr>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td>
                                    <td style={{ display: 'table-cell' }}>Below 2 Lakh</td>
                                    <td style={{ display: 'table-cell' }}>7500</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header row gutters-5">
                        <div className="col text-center text-md-left">
                            <h5 className="mb-md-0 h6">Visitors Count Date Wise</h5>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                            <thead>
                                <tr className="footable-header">
                                    <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                                    <th style={{ display: 'table-cell' }}>Date</th>
                                    <th style={{ display: 'table-cell' }}>Total Visitors</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                                    <td style={{ display: 'table-cell' }}>2/1/2024</td>
                                    <td style={{ display: 'table-cell' }}>300</td>
                                </tr>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td>
                                    <td style={{ display: 'table-cell' }}>3/1/2024</td>
                                    <td style={{ display: 'table-cell' }}>900</td>
                                </tr>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td>
                                    <td style={{ display: 'table-cell' }}>4/1/2024</td>
                                    <td style={{ display: 'table-cell' }}>800</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CelebrityGoogleDashboardComp