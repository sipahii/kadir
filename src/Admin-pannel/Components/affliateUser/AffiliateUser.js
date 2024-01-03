import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetAffiliateUsersQuery } from "../all-products/allproductsApi/allProductsApi";

function AffiliateUser() {

  const [show, setShow] = useState(false);
  const [idData, setIdData] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { isLoading, data } = useGetAffiliateUsersQuery();
  console.log('affiliate users data---', data);

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 h6">Affiliate Users</h5>
            </div>
            <div className="card-body">

              <table
                className="table aiz-table footable footable-1 breakpoint-xl"
                style={{}}
              >
                <thead>
                  <tr className="footable-header">
                    <th
                      className="footable-first-visible"
                      style={{ display: "table-cell" }}
                    >
                      #
                    </th>
                    <th style={{ display: "table-cell" }}>Name</th>
                    <th data-breakpoints="lg" style={{ display: "table-cell" }}>
                      Phone
                    </th>
                    <th data-breakpoints="lg" style={{ display: "table-cell" }}>
                      Email Address
                    </th>
                    <th data-breakpoints="lg" style={{ display: "table-cell" }}>
                      Verification Info
                    </th>
                    <th style={{ display: "table-cell" }}>Approval</th>
                    <th data-breakpoints="lg" style={{ display: "table-cell" }}>
                      Due Amount
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

                  {isLoading ? <h2>Loading...</h2> :
                    data?.map((item, i) => {
                      return <tr key={i}>
                        <td className="footable-first-visible" style={{ display: "table-cell" }}>{i + 1}</td>
                        <td style={{ display: "table-cell" }}>{item.user_id?.firstname + " " + item.user_id?.lastname}</td>
                        <td style={{ display: "table-cell" }}>{item.user_id?.mobile}</td>
                        <td style={{ display: "table-cell" }}>{item.user_id?.email}</td>
                        <td style={{ display: "table-cell" }}>
                          <Link to={`verification/${item._id}`} onClick={() => setIdData(item)}>
                            <span className="badge badge-inline badge-info">
                              Show
                            </span>
                          </Link>
                        </td>
                        <td style={{ display: "table-cell" }}>
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              onChange="update_approved(this)"
                              defaultValue={1}
                              type="checkbox"
                              checked={item.approval}
                            />
                            <span className="slider round" />
                          </label>
                        </td>
                        <td style={{ display: "table-cell" }}>{item.balance}</td>
                        <td className="text-right footable-last-visible" style={{ display: "table-cell" }} >
                          <a href="#" className="btn btn-soft-primary btn-icon btn-circle btn-sm" onClick={handleShow} title="Pay Now">
                            <i className="las la-money-bill" />
                          </a>
                          <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title>Affiliate Payment</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <table className="table table-striped table-bordered">
                                <tbody>
                                  <tr>
                                    <td>Due Amount</td>
                                    <td>
                                      <strong>ZK30.00</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Paypal Email</td>
                                    <td>demo@gmail.com</td>
                                  </tr>
                                  <tr>
                                    <td>Bank Information</td>
                                    <td>123456</td>
                                  </tr>
                                </tbody>
                              </table>

                              <div>
                                <input
                                  type="hidden"
                                  name="affiliate_user_id"
                                  defaultValue={1}
                                />
                                <div className="form-group row">
                                  <label
                                    className="col-sm-3 col-from-label"
                                    htmlFor="amount"
                                  >
                                    Amount
                                  </label>
                                  <div className="col-sm-9">
                                    <input
                                      type="number"
                                      min={0}
                                      step="0.01"
                                      name="amount"
                                      id="amount"
                                      defaultValue={30}
                                      className="form-control"
                                      required
                                      fdprocessedid="kulp1t"
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    className="col-sm-3 col-from-label"
                                    htmlFor="payment_method"
                                  >
                                    Payment method
                                  </label>
                                  <div className="col-sm-9">
                                    <select className="form-select" aria-label="Default select example">
                                      <option>Select Payment Method</option>
                                      <option value="1">Paypal</option>
                                      <option value="2">Bank</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                Close
                              </Button>
                              <Button variant="success" onClick={handleClose}>
                                Pay
                              </Button>
                            </Modal.Footer>
                          </Modal>
                          <Link
                            className="btn btn-soft-success btn-icon btn-circle btn-sm"
                            to="/admin/affiliate-users/deatails"
                            title="Payment History"
                          >
                            <i className="las la-history" />
                          </Link>
                        </td>
                      </tr>
                    })
                  }

                </tbody>
              </table>
              <div className="aiz-pagination"></div>
            </div>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
          {/*p class="mb-0">&copy;  v6.3.3</p*/}
        </div>
      </div >
    </>
  );
}
export default AffiliateUser;
