import { Link, useParams } from "react-router-dom";
import { useGetPickupOrderDataMutation } from "../../Admin-pannel/Components/all-products/allproductsApi/allProductsApi";
import { useEffect } from "react";
import Select from 'react-select'

function OrderByPickupPoints() {
    const options = [
        { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
        { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
        { value: 'purple', label: 'Purple', color: '#5243AA' },
        { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
        { value: 'orange', label: 'Orange', color: '#FF8B00' },
        { value: 'yellow', label: 'Yellow', color: '#FFC400' },
        { value: 'green', label: 'Green', color: '#36B37E' },
        { value: 'forest', label: 'Forest', color: '#00875A' },
        { value: 'slate', label: 'Slate', color: '#253858' },
        { value: 'silver', label: 'Silver', color: '#666666' },
    ]
    const params = useParams()
    const [getData, { data, isLoading }] = useGetPickupOrderDataMutation()

    useEffect(() => {
        getData({ orderStatusId: params.id })
    }, [params])
    const nameOrder = window.localStorage.getItem('orderName')

    let allTotal = 0;
    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
            <div className="card">

                {isLoading && <div className="preloaderCount">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}


                <form id="sort_orders" method="GET">
                    <div className="card-header row gutters-5">
                        <div className="col">
                            <h5 className="mb-md-0 h6">{nameOrder} Order {data?.length}</h5>
                        </div>
                        <div className="col-lg-2 dropdown mb-2 mb-md-0">
                            {/* <select
                                className="form-select"
                                aria-label="Default select example"
                            >
                                <option>Bulk Action</option>
                                <option value="1">Delete Selection</option>
                            </select> */}
                            <Select
                                defaultValue={[options[2], options[3]]}
                                isMulti
                                name="colors"
                                options={options}
                                className="basic-multi-select"
                                classNamePrefix="select"
                            />
                        </div>
                        <div className="col-lg-2 ml-auto">
                            <select className="form-select" aria-label="Default select example">
                                <option>{nameOrder}</option>
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

                        <table className="table table-responsive aiz-table mb-0 footable footable-1 breakpoint-xl" >
                            <thead>
                                <tr className="footable-header">
                                    <th
                                        className="footable-first-visible"
                                        style={{ display: "table-cell" }}
                                    >
                                        S.No
                                    </th>
                                    <th style={{ display: "table-cell" }}>Master Order Id</th>
                                    <th style={{ display: "table-cell" }}>Child Order Id</th>

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
                                        Customer First Name
                                    </th>
                                    <th
                                        data-breakpoints="md"
                                        style={{ display: "table-cell" }}
                                    >
                                        Last Name
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
                                        Payment Mode
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
                                        Delivery Type
                                    </th> */}
                                    <th
                                        data-breakpoints="md"
                                        style={{ display: "table-cell" }}
                                    >
                                        Pickup Point Name
                                    </th>

                                    <th
                                        className="footable-last-visible"
                                        style={{}}
                                    >
                                        Options
                                    </th>

                                </tr>
                            </thead>

                            <tbody>
                                {data && data.map((item, i) => {
                                    console.log(item);
                                    if (item?.orderId?.grandTotal) {
                                        allTotal = allTotal + +item?.orderId?.grandTotal
                                    }

                                    return <tr key={item._id}>
                                        <td
                                            className="footable-first-visible"
                                            style={{ display: "table-cell" }}
                                        >
                                            {i + 1}
                                        </td>
                                        <td style={{ display: "table-cell" }}>
                                            {item.parent_id}
                                        </td>
                                        <td style={{ display: "table-cell" }}>
                                            {item._id}
                                        </td>


                                        <td style={{ display: "table-cell" }}>{item.createdAt}</td>
                                        <td style={{ display: "table-cell" }}>
                                            {item.user.firstname}
                                        </td>
                                        <td style={{ display: "table-cell" }}>
                                            {item.user.lastname}
                                        </td>

                                        <td style={{ display: "table-cell" }}>
                                            ZK {item?.grandTotal}
                                        </td>


                                        <td style={{ display: "table-cell" }}>COD</td>
                                        {/* <td style={{ display: "table-cell" }}>COD</td> */}

                                        <td style={{ display: "table-cell" }}>
                                           {item?.Seller[0]?.firstname} {item?.Seller[0]?.lastname}
                                        </td>
                                        <td style={{ display: "table-cell" }}>
                                            
                                            <strong>{item?.pickupAddress?.pickupPoint_name}</strong>
                                        </td>


                                        <td
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


                                            <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm" title="delete">
                                                <i className="las la-trash" />
                                            </button>

                                        </td>
                                    </tr>
                                })}

                            </tbody>
                            {/* <div style={{ fontSize: "medium", display: "flex", justifyContent: "center" }}>Total Net Amount : ZK {allTotal}</div> */}
                            {!data?.length && <h2>No Data</h2>}
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
export default OrderByPickupPoints