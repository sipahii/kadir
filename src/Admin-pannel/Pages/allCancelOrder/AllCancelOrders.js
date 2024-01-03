
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

function AllCancelOrders() {
    // const [deleteOrder, { isLoading: isLoadingDelet }] = useDeleteOrderMutation();

    const deleteOrderData = (id) => {
        // deleteOrder(id)
    };


    const [pickData, setPickData] = useState(null)
    const [isLoading, setisLoading] = useState(false)

    const getData = async () => {
        setisLoading(true)
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/cancelOrder`)
            setPickData(res.data)
            setisLoading(false)
        } catch (error) {
            setisLoading(false)
            alert('Fail to Load Data')
        }
    }
    useEffect(() => {
        getData()
    }, [])

    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
            <div className="card">

                {isLoading && <div className="preloaderCount">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
                {/* {isFetching && <div className="preloaderCount">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}

                {isLoadingDelet && <div className="preloaderCount">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>} */}

                <form id="sort_orders" method="GET">
                    <div className="card-header row gutters-5">
                        <div className="col">
                            <h5 className="mb-md-0 h6">Cancel Orders {pickData?.length} </h5>
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

                        <table className="table  aiz-table mb-0 footable footable-1 breakpoint-xl" >
                            <thead>
                                <tr className="footable-header">
                                    <th
                                        className="footable-first-visible"
                                        style={{ display: "table-cell" }}
                                    >
                                        S.No
                                    </th>
                                    <th style={{ display: "table-cell" }}>Order No</th>

                                    <th
                                        data-breakpoints="md"
                                        style={{ display: "table-cell" }}
                                    >
                                        Order Date
                                    </th>
                                    <th
                                        data-breakpoints="md"
                                        style={{ display: "table-cell" }}
                                    >
                                        Buyer Name
                                    </th>
                                    <th
                                        data-breakpoints="md"
                                        style={{ display: "table-cell" }}
                                    >
                                        Order Net Amount
                                    </th>
                                    <th
                                        data-breakpoints="md"
                                        style={{ display: "table-cell" }}
                                    >
                                        Cancel Reason
                                    </th>
                                    <th
                                        data-breakpoints="md"
                                        style={{ display: "table-cell" }}
                                    >
                                        Seller Name
                                    </th>

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
                                        Delivery Type
                                    </th>

                                    {/* <th
                                        className="footable-last-visible"
                                        style={{}}
                                    >
                                        Options
                                    </th> */}

                                </tr>
                            </thead>

                            <tbody>

                                {pickData && pickData.map((item, i) => {
                                    return <tr key={item._id}>
                                        <td
                                            className="footable-first-visible"
                                            style={{ display: "table-cell" }}
                                        >
                                            {i + 1}
                                        </td>
                                        <td style={{ display: "table-cell" }}>
                                            {item?.orderId?._id}
                                        </td>
                                        <td style={{ display: "table-cell" }}>
                                            {item?.orderId?.createdAt}
                                        </td>


                                        <td style={{ display: "table-cell" }}>{item?.user?.firstname} {item?.user?.lastname}</td>
                                        <td style={{ display: "table-cell" }}>
                                            {item?.orderId?.grandTotal}
                                        </td>

                                        <td style={{ display: "table-cell" }}>
                                          {item?.reason?.reason}
                                        </td>

                                        <td style={{ display: "table-cell" }}>{item?.orderId?.Seller ? item?.orderId?.Seller[0].firstname + " " +  item?.orderId?.Seller[0].lastname : 'ETG'}</td>
                                        {/* <td style={{ display: "table-cell" }}>{item?.Seller[0]?.firstname} {item?.Seller[0]?.lastname}</td> */}

                                        {/* <td style={{ display: "table-cell" }}>
                                            {item?.orderStatusId?.orderStatusName}
                                        </td> */}
                                        <td style={{ display: "table-cell" }}>
                                            {item?.orderId?.deliveryType}
                                        </td>


                                        {/* <td
                                            className="text-right footable-last-visible"
                                            style={{ display: "inline-flex" }}
                                        >
                                            <Link
                                                className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2"
                                                to={`/admin/all_orders/order-Details/${item._id}`}
                                                title="View"
                                            >
                                                <i className="las la-eye" />
                                            </Link>


                                            <button type="button" onClick={() => deleteOrderData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm" title="delete">
                                                <i className="las la-trash" />
                                            </button>

                                        </td> */}
                                    </tr>
                                })}

                            </tbody>
                            {!pickData && <h2>No Data</h2>}
                        </table>

                        <div className="aiz-pagination"></div>
                    </div>
                </form>
            </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
        </div>
    </div>
}
export default AllCancelOrders