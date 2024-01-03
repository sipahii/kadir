import { Link } from "react-router-dom";
import { useDeleteOrderMutation, useDeleteRowPurchaseMutation, useGetListPurchaseQuery } from "../all-products/allproductsApi/allProductsApi";
import { useEffect } from "react";

function ListPurchase() {

    const { isLoading, data } = useGetListPurchaseQuery(window.localStorage.getItem('token'));

    const [deleteListPurchase, response] = useDeleteRowPurchaseMutation();

    const deleteOrderData = (id) => {
        deleteListPurchase({ id: id, token: window.localStorage.getItem('token') })
    };

    useEffect(() => {
        if (response.isSuccess === true) {
            alert('ListPurchase deleted Successfully')
        }
    }, [response])

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card">
                        <form id="sort_orders">
                            <div className="card-header row gutters-5">
                                <div className="col">
                                    <h5 className="mb-md-0 h6">List Purchases</h5>
                                </div>
                                <div className="col-lg-2 dropdown mb-2 mb-md-0">
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                    >
                                        <option>Bulk Action</option>
                                        <option value="1">Delete Selection</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 ml-auto">
                                    <select className="form-select" aria-label="Default select example">
                                        <option>Filter by Delivery Status</option>
                                        <option value="1">Pending</option>
                                        <option value="2">Confirmed</option>
                                        <option value="3">Picked Up</option>
                                        <option value="3">On The Way</option>
                                    </select>
                                </div>

                                <div className="col-lg-2 ml-auto">
                                    <select className="form-select" aria-label="Default select example">
                                        <option >Filter by Payment Status</option>
                                        <option value="1">Paid</option>
                                        <option value="2">Un-Paid</option>
                                    </select>
                                </div>

                                <div className="col-lg-2">
                                    <div className="form-group mb-0">
                                        <input type="text" className="aiz-date-range form-control" name="date" placeholder="Filter by date" data-format="DD-MM-Y" data-separator=" to " data-advanced-range="true" autoComplete="off" fdprocessedid="sq6vu7" />
                                    </div>
                                </div>

                                <div className="col-lg-2">
                                    <div className="form-group mb-0">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="search"
                                            name="search"
                                            placeholder="Type Order code & hit Enter"
                                            fdprocessedid="wffmea"
                                        />
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="form-group mb-0">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            fdprocessedid="24gy4"
                                        >
                                            Filter
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">

                                {isLoading ? <h2>Loading...</h2>
                                    : <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" >
                                        <thead>
                                            <tr className="footable-header">

                                                <th
                                                    className="footable-first-visible"
                                                    style={{ display: "table-cell" }}
                                                >
                                                    S.No
                                                </th>
                                                {/* <th style={{ display: "table-cell" }}>Master Order Id</th> */}
                                                {/* <th style={{ display: "table-cell" }}>Child Order Id</th> */}

                                                <th
                                                    data-breakpoints="md"
                                                    style={{ display: "table-cell" }}
                                                >
                                                    Purchases Date
                                                </th>
                                                <th
                                                    data-breakpoints="md"
                                                    style={{ display: "table-cell" }}
                                                >
                                                    Reference No
                                                </th>
                                                <th
                                                    data-breakpoints="md"
                                                    style={{ display: "table-cell" }}
                                                >
                                                    Supplier Name
                                                </th>
                                                {/* <th
                                                    data-breakpoints="md"
                                                    style={{ display: "table-cell" }}
                                                >
                                                    Order Net Amount
                                                </th> */}
                                                {/* <th
                                                    data-breakpoints="md"
                                                    style={{ display: "table-cell" }}
                                                >
                                                    Payment Mode
                                                </th> */}

                                                {/* <th
                                                    data-breakpoints="md"
                                                    style={{ display: "table-cell" }}
                                                >
                                                    Order Delivery Status
                                                </th> */}
                                                <th
                                                    data-breakpoints="md"
                                                    style={{ display: "table-cell" }}
                                                >
                                                    Pickup Point
                                                </th>
                                                {/* <th
                                                    data-breakpoints="md"
                                                    style={{ display: "table-cell" }}
                                                >
                                                    Delivery Type
                                                </th> */}

                                                <th
                                                    className="footable-last-visible"
                                                    style={{}}
                                                >
                                                    Options
                                                </th>

                                            </tr>
                                        </thead>

                                        <tbody>

                                            {data && data?.map((item, i) => {
                                                return <tr key={item?._id}>
                                                    <td
                                                        className="footable-first-visible"
                                                        style={{ display: "table-cell" }}
                                                    >
                                                        {i + 1}
                                                    </td>
                                                    {/* <td style={{ display: "table-cell" }}>
                                                        {item?.parent_id}
                                                    </td> */}
                                                    {/* <td style={{ display: "table-cell" }}>
                                                        {item?._id}
                                                    </td> */}


                                                    <td style={{ display: "table-cell" }}>{item?.createdAt}</td>
                                                    <td style={{ display: "table-cell" }}>{item?.referenceNo}</td>
                                                    <td style={{ display: "table-cell" }}>
                                                        {item?.supplier?.length ? item?.supplier[0]?.firstname + " " + item?.supplier[0]?.lastname : 'ETG'}
                                                        {/* {item?.supplier[0]?.firstname + " " + item?.supplier[0]?.lastname}
                                                        {item?.user && item?.user.firstname + item?.user.lastname} */}
                                                    </td>

                                                    {/* <td style={{ display: "table-cell" }}>
                                                        {item?.grandTotal}
                                                        {item?.grandTotal}
                                                    </td> */}

                                                    {/* <td style={{ display: "table-cell" }}>COD</td> */}

                                                    {/* <td style={{ display: "table-cell" }}>
                                                        {item?.status[item?.status?.length - 1]?.orderStatusId?.orderStatusName}
                                                    </td> */}

                                                    <td style={{ display: "table-cell" }}>{item?.pickupPoints?.pickupPoint_name}</td>
                                                    {/* 
                                                    <td style={{ display: "table-cell" }}>
                                                        {item?.pickupAddress ? "Pick Up Piont" + item?.pickupAddress.pickupPoint_name : "HOME DELEVERY"}
                                                    </td> */}

                                                    <td
                                                        className="text-right footable-last-visible"
                                                        style={{ display: "inline-flex" }}
                                                    >

                                                        <Link
                                                            className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2"
                                                            // to={`/admin/all_orders/order-Details/${item?._id}`}
                                                            to={'#'}
                                                            title="View"
                                                        >
                                                            <i className="las la-edit" />
                                                        </Link>

                                                        <button type="button" onClick={() => deleteOrderData(item?._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm" title="delete">
                                                            <i className="las la-trash" />
                                                        </button>

                                                    </td>
                                                </tr>
                                            })}

                                        </tbody>
                                    </table>
                                }

                                <div className="aiz-pagination"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ListPurchase;
