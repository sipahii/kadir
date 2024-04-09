import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function ListPosComp() {
    const [spinn, setSpinn] = useState(false);
    const [data, setData] = useState();

    const token = window.localStorage.getItem('token');
    const successMessage = () => {
        toast.success(`Deleted Successfully`, {
            position: "top-center"
        })
    };
    const errorMessage = () => {
        toast.error(`Not Deleted`, {
            position: "top-center"
        })
    };

    const getListData = async () => {
        setSpinn(true)
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/pos/filter`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('getPosListD--', res?.data)
            setData(res?.data);
            setSpinn(false);
        } catch (error) {
            setSpinn(false);
            alert("!Server Error")
        }
    };
    useEffect(() => {
        getListData();
    }, []);


    const deleteSupportticketData = async (uid) => {
        setSpinn(true)
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api//${uid}`);
            setSpinn(false)
            successMessage();
        } catch (error) {
            setSpinn(false)
            errorMessage();
        }
    };

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    {spinn && <div className="preloaderCount">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>}
                    <div className="card">
                        <form id="sort_support">
                            <div className="card-header row gutters-5">
                                <div className="col text-center text-md-left">
                                    <h5 className="mb-md-0 h6">POS List</h5>
                                </div>
                                <div className="col-md-2">
                                    <div className="input-group input-group-sm">
                                        <input type="text" className="form-control" id="search" name="search" placeholder="Type ticket code & Enter" />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="card-body">
                            <table className="aiz-table footable footable-1 breakpoint-xl" cellSpacing={0} width="100%" style={{}}>
                                <thead>
                                    <tr className="footable-header">
                                        <th data-breakpoints="lg" style={{ display: 'table-cell' }}>ID</th>
                                        <th style={{ display: 'table-cell' }}>Invoice Date</th>
                                        <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Invoice No</th>
                                        <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Status</th>
                                        <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Seller</th>
                                        {/* <th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th> */}
                                    </tr>
                                </thead>
                                <tbody>

                                    {data && data?.map((item, i) => {
                                        return <tr key={i}>
                                            <td className="footable-first-visible" style={{ display: 'table-cell' }}>{item?._id}</td>
                                            <td style={{ display: 'table-cell' }}>{item?.invoiceDate ? item?.invoiceDate : item?.createdAt} </td>
                                            <td style={{ display: 'table-cell' }}>{item?.invoiceNo}</td>
                                            {/* <td style={{ display: 'table-cell' }}>{item?.paymentStatus?.paymentStatusName}</td> */}
                                            <td style={{ display: 'table-cell' }}>
                                                <span class="badge badge-inline badge-danger" style={{ color: "black", fontSize: '14px', fontWeight: 'bold', backgroundColor: item?.paymentStatus?.paymentStatusName === "Not Paid" ? "red" : item?.paymentStatus?.paymentStatusName === 'Pending' || 'pending' ? 'yellow' : "green" }}>{item?.paymentStatus?.paymentStatusName}</span>
                                            </td>
                                            <td style={{ display: 'table-cell' }}>
                                                Mego Seller
                                            </td>
                                            {/* <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                <Link to={`edit/${item.uid}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                                    <i className="las la-edit" />
                                                </Link>
                                                <Link to={`/admin/support_ticket/detail/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="View Details">
                                                    <i className="las la-eye" />
                                                </Link>
                                                <button type="button" onClick={() => deleteSupportticketData(item?.uid)} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                                    <i className="las la-trash" />
                                                </button>
                                            </td> */}
                                        </tr>
                                    })}

                                </tbody>
                            </table>

                            <div className="clearfix">
                                <div className="pull-right">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default ListPosComp