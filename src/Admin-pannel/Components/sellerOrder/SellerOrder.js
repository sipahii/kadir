import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAddOrderConfigsMutation, useDeleteOrderMutation, useGetOrdersQuery } from "../all-products/allproductsApi/allProductsApi";

function SellerOrder() {
  const [setData] = useAddOrderConfigsMutation()
  useEffect(() => {
    const obj = {
      _id: Math.random()
    }
    // setData(obj)
  }, []);


  const { isLoading, data } = useGetOrdersQuery();

  const [deleteOrder, response] = useDeleteOrderMutation();

  const deleteOrderData = (id) => {
    deleteOrder(id)
  };

  useEffect(()=>{
    if (response.isSuccess === true) {
      alert('Order deleted Successfully')
    }
  },[response.isSuccess])


  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="col">
            <h5 className="mb-md-0 h6">All Orders</h5>
          </div>
          <div className="card">

            <form>
              <div className="card-header row gutters-5">
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
                  <select
                    className="form-select"
                    aria-label="Default select example">
                    <option>Filter by Status</option>
                    <option value="1">Pending</option>
                    <option value="2">Confirmed</option>
                    <option value="3">Picked Up</option>
                    <option value="3">On The Way</option>
                  </select>
                </div>
                <div className="col-lg-2 ml-auto">
                  <select
                    className="form-select"
                    aria-label="Default select example">
                    <option>Filter by Payment Status</option>
                    <option value="1">Paid</option>
                    <option value="2">Un-Paid</option>
                  </select>

                </div>
                <div className="col-lg-2">
                  <div className="form-group mb-0">
                    <input
                      type="text"
                      className="aiz-date-range form-control"
                      defaultValue
                      name="date"
                      placeholder="Filter by date"
                      data-format="DD-MM-Y"
                      data-separator=" to "
                      data-advanced-range="true"
                      autoComplete="off"
                      fdprocessedid="sq6vu7"
                    />
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
                    <button
                      type="button"
                      className="btn btn-info"
                      fdprocessedid="24gy4"
                    >
                      Add Order
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body">

                {isLoading ? <h2>Loading...</h2>
                  : <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}  >
                    <thead>
                      <tr className="footable-header">
                        {/*<th>#</th>*/}
                        <th
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          #
                        </th>
                        <th style={{ display: "table-cell" }}>Order Code:</th>
                        <th style={{ display: "table-cell" }}>Order Date:</th>
                        {/* <th style={{ display: "table-cell" }}>Order Time:</th> */}
                        <th
                          data-breakpoints="md"
                          style={{ display: "table-cell" }}
                        >
                          Num. of Products
                        </th>
                        <th
                          data-breakpoints="md"
                          style={{ display: "table-cell" }}
                        >
                          First Name
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
                          Seller
                        </th>
                        <th
                          data-breakpoints="md"
                          style={{ display: "table-cell" }}
                        >
                          Amount
                        </th>
                        <th
                          data-breakpoints="md"
                          style={{ display: "table-cell" }}
                        >
                          Delivery Status
                        </th>
                        <th
                          data-breakpoints="md"
                          style={{ display: "table-cell" }}
                        >
                          Payment method
                        </th>
                        <th
                          data-breakpoints="md"
                          style={{ display: "table-cell" }}
                        >
                          Payment Status
                        </th>
                        {/* <th style={{ display: "table-cell" }}>Refund</th> */}
                        <th
                          className="text-right footable-last-visible"
                          style={{ display: "table-cell", width: "20%" }}
                        >
                          Options
                        </th>
                      </tr>
                    </thead>

                    <tbody>

                      {data && data?.alluserorders?.map((item, i) => {
                        console.log(item);
                        return <tr key={item._id}>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            {i + 1}
                          </td>
                          <td style={{ display: "table-cell" }}>
                            {item._id}
                          </td>
                          <td style={{ display: "table-cell" }}>
                            {item.updatedAt}
                          </td>
                          {/* <td style={{ display: "table-cell" }}>
                            time
                          </td> */}

                          <td style={{ display: "table-cell" }}>{item?.products[0]?.count}</td>
                          <td style={{ display: "table-cell" }}>
                            {item?.user?.firstname}
                          </td>
                          <td style={{ display: "table-cell" }}>
                            {item?.user?.lastname}
                          </td>
                          {/* <td style={{ display: "table-cell" }}>{item?.Seller}</td> */}
                          <td style={{ display: "table-cell" }}>{item?.Seller[0]?.firstname}  {item?.Seller[0]?.lastname}</td>
                          <td style={{ display: "table-cell" }}>
                            {item?.grandTotal}
                          </td>
                          <td style={{ display: "table-cell" }}>{item?.orderStatusTrans[item?.orderStatusTrans.length - 1]?.orderStatusId?.orderStatusName}</td>
                          <td style={{ display: "table-cell" }}>COD</td>
                          <td style={{ display: "table-cell" }}>
                            {item?.Payment_Status?.paymentStatusName}
                          </td>
                          {/* <td style={{ display: "table-cell" }}>No Refund</td> */}
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <Link
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              to={`/admin/all_orders/order-Details/${item._id}`}
                              title="View"
                            >
                              <i className="las la-eye" />
                            </Link>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://mmslfashions.in/invoice/8"
                              title="Download Invoice"
                            >
                              <i className="las la-download" />
                            </a>

                            <button type="button" onClick={() => deleteOrderData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
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
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
          {/*p className="mb-0">&copy;  v6.3.3</p*/}
        </div>
      </div>
    </>
  );
}
export default SellerOrder;
