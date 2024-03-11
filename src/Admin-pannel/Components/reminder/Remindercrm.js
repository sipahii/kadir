import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import Select from "react-select";
function Remindercrm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [content, setContent] = useState("");
  const [value, setValue] = useState(null);
  const options = [
    { value: "pending", label: "pending " },
    { value: "Completed", label: "Completed" },
    { value: "Fail to accomplised", label: "Fail to accomplised" },
    { value: "JustDial", label: "JustDial" },
    { value: "Personal", label: "Personal" },
    { value: "Web", label: "Web" },
    { value: "WhatsApp", label: "WhatsApp" },
  ];
  const options1 = [
    { value: "pending", label: "pending " },
    { value: "Completed", label: "Completed" },
    { value: "Fail to accomplised", label: "Fail to accomplised" },
    { value: "JustDial", label: "JustDial" },
    { value: "Personal", label: "Personal" },
    { value: "Web", label: "Web" },
    { value: "WhatsApp", label: "WhatsApp" },
  ];
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-3 col-xl-3">
                <Button
                  variant="primary"
                  onClick={handleShow}
                  style={{ width: 150 }}
                >
                  + New Reminder
                </Button>
                <Modal className="pop" show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>New Reminder</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="container">
                      <div className="card">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form">
                                <label className="form-label">
                                  Date to be notified
                                </label>
                                <input className="form-control" type="date" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form">
                                <label className="form-label">Customer</label>
                                <Select
                                  options={options}
                                  defaultValue={value}
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form">
                                <lable className="form-label">
                                  {" "}
                                  Assigned To
                                </lable>
                                <Select
                                  options={options1}
                                  defaultValue={value}
                                />
                              </div>
                            </div>

                            <div className="col-md-12">
                              <div className="form">
                                <lable className="form-label"> Related</lable>
                                <select className="form-select">
                                  <option>Proposal</option>
                                  <option>Estimates</option>
                                  <option>Credits Notes</option>
                                  <option>Support Tickets</option>
                                  <option>Custom Reminder</option>
                                </select>
                              </div>
                            </div>

                            <div className="col-md-12">
                              <div className="form">
                                <lable className="form-label">
                                  {" "}
                                  Related Document
                                </lable>
                                <select className="form-select">
                                  {/* <option>Proposal</option>
                                            <option>Estimates</option>
                                            <option>Credits Notes</option>
                                            <option>Support Tickets</option>
                                            <option>Custom Reminder</option> */}
                                </select>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form">
                                <label className="form-label">
                                  Description
                                </label>
                                <textarea
                                  className="form-control"
                                  typeof="text"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheckDefault"
                                >
                                  E-mail reminder to customer
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheckDefault"
                                >
                                  SMS reminder to customer
                                </label>
                              </div>

                            </div>
                          </div>
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
              <div className="col-md-6 col-xl-6">
                <div className="date d-flex">
                  <input
                    className="form-control mr-3"
                    type="date"
                    placeholder="From Date"
                  />
                  <input
                    className="form-control"
                    type="date"
                    placeholder="To Date"
                  />
                </div>
              </div>
              <div className="col-md-3 col-xl-3 text-right">
                <div className="button">
                  <button className="btn outline-secondary">
                    <span>
                      <AiOutlineDoubleLeft />
                    </span>
                  </button>
                  <button className="btn">
                    <span>
                      <FaFilter />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="select d-flex">
                  <select className="form-select" style={{ width: 120 }}>
                    <option>25</option>
                    <option>50</option>
                    <option>100</option>
                  </select>
                  <button className="btn btn-outline-secondary  ml-2">
                    <span>Export</span>
                  </button>
                  <button className="btn btn-outline-secondary">
                    <span>
                      <BiRefresh />
                    </span>
                  </button>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-end">
                <div
                  className="input-group flex-nowrap text-end"
                  style={{ width: 140 }}
                >
                  <span className="input-group-text" id="addon-wrapping">
                    <AiOutlineSearch />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="table">
            <table className="table table-secondary">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Assigned</th>
                  <th>Customer</th>
                  <th>Primary Contact</th>
                  <th>Description</th>
                  <th>Related To</th>
                  <th>Status</th>
                  <th>Added By</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>23/11/2022 17:09:20</td>
                  <td>Azharuddin Shamim</td>
                  <td></td>
                  <td></td>
                  <td>Plz make t payment?</td>
                  <td>Invoice</td>
                  <td>
                    {" "}
                    <span className="label label-warning"> Pending</span>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>09/11/2022 17:09:20</td>
                  <td>Azharuddin Shamim</td>
                  <td></td>
                  <td></td>
                  <td>
                    Raju has to give us the old PAN as well. Plz send ASAP.
                    Thanks.
                  </td>
                  <td>Customer</td>
                  <td>
                    {" "}
                    <span className="label label-warning"> Pending</span>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="">
                <lable className="form-lable">
                  Showing 1 to 1 of 1 entries
                </lable>
              </div>
            </div>
            <div className="col-md-5 text-end">
              <button
                className="btn-outline-secondary"
                style={{ width: 80, height: 40 }}
              >
                Previous
              </button>
              <button
                className="btn btn-primary"
                style={{ width: 40, height: 40 }}
              >
                1
              </button>
              <button
                className="btn-outline-secondary"
                style={{ width: 80, height: 40 }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Remindercrm;
