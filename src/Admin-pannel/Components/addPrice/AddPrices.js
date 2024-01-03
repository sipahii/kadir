import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import apidevlopment from "../../assets/img/apidevlopment.png";
// import mobileappdev from "../../assets/img/mobile-app-development.png";
// import multischoolerp from "../../assets/img/multierp.png";
function AddPrices() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-5">
                <Button
                  variant="primary"
                  onClick={handleShow}
                  style={{ width: 150 }}
                >
                  + Add New
                </Button>

                <Modal className="" show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      <h4>Add Prices for Following  Products</h4>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="container">
                      <div className="card">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-2">
                              <div className=" border border-secondary">
                                <img
                                  // src={apidevlopment}
                                  style={{ width: 110, height: 60 }}
                                  alt="apidevlopment-img"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="mt-3">
                                <lable className="form-lable ">
                                  API Development Service
                                </lable>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <span>Price</span>
                              <div className="input-group flex-nowrap">
                                <span
                                  class="input-group-text"
                                  id="addon-wrapping"
                                >
                                  ₹
                                </span>
                                <input
                                  type="Number"
                                  className="form-control"
                                  placeholder="Enter Price"
                                  aria-label="Price"
                                  aria-describedby="addon-wrapping"
                                />
                              </div>
                            </div>
                            <div className="col-md-2">
                              <span>Unit</span>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Unit/Hours"
                              />
                            </div>
                            <div className="col-md-2">
                              <div className="mt-3">
                                <button className="btn btn-primary">
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className=" mt-3">
                            <div className="row">
                              <div className="col-md-2">
                                <div className=" border border-secondary">
                                  <img
                                    // src={mobileappdev}
                                    style={{ width: 110, height: 80 }}
                                    alt="mobileappdev-img"
                                  />
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="mt-3">
                                  <lable className="form-lable ">
                                    Mobile Application Development service
                                  </lable>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <span>Price</span>
                                <div className="input-group flex-nowrap">
                                  <span
                                    class="input-group-text"
                                    id="addon-wrapping"
                                  >
                                    ₹
                                  </span>
                                  <input
                                    type="Number"
                                    className="form-control"
                                    placeholder="Enter Price"
                                    aria-label="Price"
                                    aria-describedby="addon-wrapping"
                                  />
                                </div>
                              </div>
                              <div className="col-md-2">
                                <span>Unit</span>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Unit/Hours"
                                />
                              </div>
                              <div className="col-md-2">
                                <div className="mt-3">
                                  <button className="btn btn-primary">
                                    Save
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-3">
                          <div className="row">
                            <div className="col-md-2">
                              <div className=" border border-secondary">
                                <img
                                  // src={multischoolerp}
                                  style={{ width: 110, height: 60 }}
                                  alt="multischoolerp-img"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="mt-3">
                                <lable className="form-lable ">
                                  Multi School Management ERP Service
                                </lable>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <span>Price</span>
                              <div className="input-group flex-nowrap">
                                <span
                                  class="input-group-text"
                                  id="addon-wrapping"
                                >
                                  ₹
                                </span>
                                <input
                                  type="Number"
                                  className="form-control"
                                  placeholder="Enter Price"
                                  aria-label="Price"
                                  aria-describedby="addon-wrapping"
                                />
                              </div>
                            </div>
                            <div className="col-md-2">
                              <span>Unit</span>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Unit/Hours"
                              />
                            </div>
                            <div className="col-md-2">
                              <div className="mt-3">
                                <button className="btn btn-primary">
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                          </div>
                          {/* <div className="mt-3">
                          <div className="row">
                            <div className="col-md-2">
                              <div className=" border border-secondary">
                                <img
                                  src={crmappdev}
                                  style={{ width: 133, height: 60 }}
                                  alt="crmappdev-img"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="mt-3">
                                <lable className="form-lable ">
                                  CRM Application Development Service
                                </lable>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <span>Price</span>
                              <div className="input-group flex-nowrap">
                                <span
                                  class="input-group-text"
                                  id="addon-wrapping"
                                >
                                  ₹
                                </span>
                                <input
                                  type="Number"
                                  className="form-control"
                                  placeholder="Enter Price"
                                  aria-label="Price"
                                  aria-describedby="addon-wrapping"
                                />
                              </div>
                            </div>
                            <div className="col-md-2">
                              <span>Unit</span>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Unit/Hours"
                              />
                            </div>
                            <div className="col-md-2">
                              <div className="mt-3">
                                <button className="btn btn-primary">
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                          </div> */}
                          {/* <div className="mt-3">
                          <div className="row">
                            <div className="col-md-2">
                              <div className=" border border-secondary">
                                <img
                                  src={rechearchdev}
                                  style={{ width: 110, height: 60 }}
                                  alt="rechearchdev-img"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="mt-3">
                                <lable className="form-lable ">
                                  Research Development Service
                                </lable>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <span>Price</span>
                              <div className="input-group flex-nowrap">
                                <span
                                  class="input-group-text"
                                  id="addon-wrapping"
                                >
                                  ₹
                                </span>
                                <input
                                  type="Number"
                                  className="form-control"
                                  placeholder="Enter Price"
                                  aria-label="Price"
                                  aria-describedby="addon-wrapping"
                                />
                              </div>
                            </div>
                            <div className="col-md-2">
                              <span>Unit</span>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Unit/Hours"
                              />
                            </div>
                            <div className="col-md-2">
                              <div className="mt-3">
                                <button className="btn btn-primary">
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddPrices