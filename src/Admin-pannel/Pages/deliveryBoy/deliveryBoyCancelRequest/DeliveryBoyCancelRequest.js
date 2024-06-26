import React from 'react'
import { useDeleteStaffMutation, useGetAllStaffsQuery } from '../../../Components/all-products/allproductsApi/allProductsApi';
import { Link } from 'react-router-dom';

function DeliveryBoyCancelRequest() {

    const { isLoading, data } = useGetAllStaffsQuery();

    const [deleteDeliveryBoyD, response] = useDeleteStaffMutation();

    const deleteDeliveryBoyData = (id) => {
        deleteDeliveryBoyD(id)
    };

    if (response.isSuccess === true) {
        alert('Payment History deleted Successfully')
    }

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">All Cancel Request</h1>
                            </div>
                            {/* <div className="col-md-6 text-md-right">
                                <Link to="/admin/delivery-boys/create" className="btn btn-circle btn-info">
                                    <span>Add New Delivery Boy</span>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6">Cancel Request</h5>
                        </div>
                        <div className="card-body">
                            {isLoading ? <h2>Loading...</h2>
                                : <table className="table aiz-table footable footable-1 breakpoint-lg" style={{}}>
                                    <thead>
                                        <tr className="footable-header">
                                            <th width="10%" style={{ display: 'table-cell' }}>#</th>
                                            <th style={{ display: 'table-cell' }}>Code</th>
                                            <th style={{ display: 'table-cell' }}>Requested By</th>
                                            <th style={{ display: 'table-cell' }}>Requested At</th>
                                            <th className="text-right footable-last-visible" style={{ display: "table-cell", width: "5%" }}>
                                                Options
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data.map((item, i) => {
                                            return <tr className="footable-empty footableIcon" key={item._id}>
                                                <td >{i + 1}</td>
                                                <td >------</td>
                                                <td >------</td>
                                                <td >------</td>
                                                <td className="text-right footable-last-visible" style={{ display: "table-cell" }} >
                                                    <Link
                                                        className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                                                        to={`/admin/all_orders/order-Details/${item._id}`}
                                                        title="View"
                                                    >
                                                        <i className="las la-eye" />
                                                    </Link>
                                                    {/* <a
                                                        className="btn btn-soft-info btn-icon btn-circle btn-sm"
                                                        href="https://mmslfashions.in/invoice/8"
                                                        title="Download Invoice"
                                                    >
                                                        <i className="las la-download" />
                                                    </a> */}

                                                    {/* <button type="button" onClick={() => deleteOrderData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                                        <i className="las la-trash" />
                                                    </button> */}

                                                </td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            }
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

export default DeliveryBoyCancelRequest