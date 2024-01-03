import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { useDeleteUserPointsMutation, useGetClubPointUserPointQuery } from "../all-products/allproductsApi/allProductsApi"
import { useEffect } from "react";

function UserPoints() {
  const { isLoading, data } = useGetClubPointUserPointQuery();

  console.log('clubPointsUserData', data);

  const [deleteUserPointData, response] = useDeleteUserPointsMutation();

  const deleteUserPoitsData = (id) => {
    deleteUserPointData(id)
  };

  const toastSuccessMessage = () => {
    toast.success("UserPoints Deleted Successfully !", {
      position: "top-center"
    })
  };

  const toastErrorMessage = () => {
    toast.error("UserPoints Not Deleted !", {
      position: "top-center"
    })
  };

  useEffect(() => {
    if (response.isSuccess === true) {
      toastSuccessMessage()
    };
  }, [response]);

  useEffect(() => {
    if (response.isError === true) {
      toastErrorMessage()
    };
  });

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  {isLoading ? <h2>Loading...</h2>
                    : <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                      <thead>
                        <tr className="footable-header">
                          <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                          <th style={{ display: 'table-cell' }}>Order Code:</th>
                          <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Customer Name</th>
                          <th style={{ display: 'table-cell' }}>Points</th>
                          <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Convert Status</th>
                          <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Earned At</th>
                          <th className="text-right footable-last-visible" width="10%" style={{ display: 'table-cell' }}>Options</th>
                        </tr>
                      </thead>
                      <tbody>

                        {data && data.map((item, i) => {
                          console.log('item', item)
                          return <tr key={item._id}>
                            <td className="footable-first-visible" style={{ display: 'table-cell' }}>{i + 1}</td>
                            <td style={{ display: 'table-cell' }}>{item.order_id?.order_referenceNo}</td>
                            <td style={{ display: 'table-cell' }}>{item.order_id?.user?.firstname + item.order_id?.user?.lastname}</td>
                            <td style={{ display: 'table-cell' }}>{item.point}</td>
                            <td style={{ display: 'table-cell' }}>
                              <span className="badge badge-inline badge-info">Pending</span>
                            </td>
                            <td style={{ display: 'table-cell' }}>{item.order_id?.createdAt}</td>
                            <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                              <Link to={`edit/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                <i className="las la-edit" />
                              </Link>
                              {/* <Link className="btn btn-soft-primary btn-icon btn-circle btn-sm" to="/admin/club-points/Details" title="View">
                                <i className="las la-eye" />
                              </Link> */}
                              <button onClick={() => { deleteUserPoitsData(item._id) }} type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete ms-2">
                                <i className="las la-trash"></i>
                              </button>
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
export default UserPoints