import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetAffiliateWithdrawRequestQuery } from "../all-products/allproductsApi/allProductsApi";

function AffiliateWithdrowRequest() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { isLoading, data } = useGetAffiliateWithdrawRequestQuery();
  console.log('witdrawData---', data)

  const handleStatus = async (obj)=> {
    
  }

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 h6">Affiliate Withdraw Request</h5>
            </div>
            <div className="card-body">
              <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                <thead>
                  <tr className="footable-header">
                    <th style={{ display: 'table-cell' }}>#</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Date</th><th style={{ display: 'table-cell' }}>Name</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Email</th><th style={{ display: 'table-cell' }}>Amount</th>
                    <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Status</th>
                    <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Options</th>
                  </tr>
                </thead>
                <tbody>

                  {isLoading ? <h2>Loading....</h2> :
                    data?.map((item, i) => {
                      return <tr key={i}>
                        <td
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          {i + 1}
                        </td>
                        <td style={{ display: "table-cell" }}>{item.createdAt}</td>
                        <td style={{ display: "table-cell" }}>{item.user?.firstname + " " + item.user?.lastname}</td>
                        <td style={{ display: "table-cell" }}>----</td>
                        <td style={{ display: "table-cell" }}>{item.amount}</td>
                        {/* <td style={{ display: "table-cell" }}>
                          <a href="https://mmslfashions.in/admin/affiliate/verification/1">
                            <span className="badge badge-inline badge-info">
                              Show
                            </span>
                          </a>
                        </td> */}
                        <td style={{ display: "table-cell" }}>
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              onchange = {()=> handleStatus({id: item._id , status: item.status})}
                              defaultValue={1}
                              type="checkbox"
                              checked = {item.status}
                            />
                            <span className="slider round" />
                          </label>
                        </td>
                        <td style={{ display: "table-cell" }}>----</td>
                        {/* <td
                      className="text-right footable-last-visible"
                      style={{ display: "table-cell" }}
                    >
                      <a
                        href="#"
                        className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                        onClick={handleShow}
                        title="Pay Now"
                      >
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
                                <div className="dropdown bootstrap-select form-control aiz-">
                                  <select
                                    name="payment_method"
                                    id="payment_method"
                                    className="form-control aiz-selectpicker"
                                    required
                                    tabIndex={-98}
                                  >
                                    <option value>Select Payment Method</option>
                                    <option value="Paypal">Paypal</option>
                                    <option value="Bank">Bank</option>
                                  </select>
                                  <button
                                    type="button"
                                    className="btn dropdown-toggle btn-light"
                                    data-toggle="dropdown"
                                    role="combobox"
                                    aria-owns="bs-select-3"
                                    aria-haspopup="listbox"
                                    aria-expanded="false"
                                    data-id="payment_method"
                                    title="Select Payment Method"
                                    fdprocessedid="6ivv4"
                                  >
                                    <div className="filter-option">
                                      <div className="filter-option-inner">
                                        <div className="filter-option-inner-inner">
                                          Select Payment Method
                                        </div>
                                      </div>{" "}
                                    </div>
                                  </button>
                                  <div
                                    className="dropdown-menu "
                                    style={{ overflow: "hidden" }}
                                  >
                                    <div
                                      className="inner show"
                                      role="listbox"
                                      id="bs-select-3"
                                      tabIndex={-1}
                                      aria-activedescendant="bs-select-3-0"
                                      style={{ overflowY: "auto" }}
                                    >
                                      <ul
                                        className="dropdown-menu inner show"
                                        role="presentation"
                                        style={{
                                          marginTop: 0,
                                          marginBottom: 0,
                                        }}
                                      >
                                        <li className="selected active">
                                          <a
                                            role="option"
                                            className="dropdown-item active selected"
                                            id="bs-select-3-0"
                                            tabIndex={0}
                                            aria-setsize={3}
                                            aria-posinset={1}
                                            aria-selected="true"
                                          >
                                            <span className="text">
                                              Select Payment Method
                                            </span>
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            role="option"
                                            className="dropdown-item"
                                            id="bs-select-3-1"
                                            tabIndex={0}
                                          >
                                            <span className="text">Paypal</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            role="option"
                                            className="dropdown-item"
                                            id="bs-select-3-2"
                                            tabIndex={0}
                                          >
                                            <span className="text">Bank</span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <select className="form-select" aria-label="Default select example">
                                  <option selected>Select Payment Method</option>
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
                    </td> */}
                      </tr>

                    })

                  }


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
      </div>

    </>
  )
}
export default AffiliateWithdrowRequest