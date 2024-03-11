import React from "react";
import Select from "react-select";
import { useState } from "react";
import { BsTagFill } from "react-icons/bs";
import { BsFillCheckSquareFill } from 'react-icons/bs';
function NewProposal() {
  const [content, setContent] = useState("");

  const [value, setValue] = useState(null);
  const options = [
    { value: "pending", label: "pending " },
    { value: "Completed", label: "Completed" },
  ];
  const Currency = [
    { value: "INR ", label: "INR  " },
    { value: "USD", label: "USD" },
  ];
  const options2 = [
    { value: "Azhruddin Shammim", label: "Azhruddin Shammim" },
    { value: "Staff1 Sec", label: "Staff1 Sec" },
  ];
  const options3 = [
    { value: "India", label: "India" },
    { value: "Canada", label: "Canada" },
    { value: "Chaina", label: "Chaina" },
    { value: "Landon", label: "Landon" },
  ];
  const options4 = [
    { value: "New Widow Pension", label: "New Widow Pension" },
    { value: "Pan Card Name", label: "Pan Card Name" },
  ];
  return (
    <>
      <div className="container">
        <h4>New Proposal</h4>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="form">
                  <label className="form-label">Subject</label>
                  <input className="form-control" type="text" />
                </div>

                <div className="form mt-3">
                  <label className="form-label">Related</label>
                  <select className="form-select">
                    <option></option>
                    <option>Lead</option>
                    <option>Customer</option>
                  </select>
                </div>

                <div className="form mt-3">
                  <label className="form-label">Lead/Customer</label>
                  <Select options={options} defaultValue={value} />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form mt-3">
                      <label className="form-label">Date</label>
                      <input className="form-control" type="date" />
                    </div>

                    <div className="form mt-3">
                      <label className="form-label">Currency</label>
                      <Select options={Currency} defaultValue={value} />
                    </div>

                    <div className="form mt-3">
                      <label className="form-label">
                        <span>
                          <BsTagFill />
                        </span>
                        Tag
                      </label>
                      <select className="form-select"></select>
                    </div>

                    <div className="form mt-3">
                      <label className="form-label">Allow Comments</label>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                          style={{ width: 60, height: 30 }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form mt-3">
                      <label className="form-label">Open Till</label>
                      <input className="form-control" type="date" />
                    </div>
                    <div className="form mt-3">
                      <label className="form-label">Discount Type</label>
                      <select className="form-select">
                        <option>No Discount</option>
                        <option>Before Tax</option>
                        <option>After Tax</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form ">
                      <label className="form-label">Status</label>
                      <select className="form-select">
                        <option>Draft</option>
                        <option>Sent</option>
                        <option>Open</option>
                        <option>Recived</option>
                        <option>Declined</option>
                        <option>Accepted</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form ">
                      <label className="form-label">Assigned</label>
                      <Select options={options2} defaultValue={value} />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form mt-3 ">
                      <label className="form-label">To</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form mt-3">
                      <label className="form-label">Address</label>
                      <textarea className="form-control" typeof="text" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form mt-3">
                        <label className="form-label">City</label>
                        <input className="form-control" />
                      </div>
                      <div className="form mt-3">
                        <label className="form-label">Country</label>
                        <Select options={options3} defaultValue={value} />
                      </div>
                      <div className="form mt-3">
                        <label className="form-label">E-mail</label>
                        <input className="form-control" type="email" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form mt-3">
                        <label className="form-label">State</label>
                        <input className="form-control" />
                      </div>
                      <div className="form mt-3">
                        <label className="form-label">Zip Code</label>
                        <input className="form-control" />
                      </div>

                      <div className="form mt-3">
                        <label className="form-label">Phone</label>
                        <input className="form-control" type="number" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border border-1 border-secondary opacity-50" />
            <div className="row">
              <div className="col-md-6">
                <Select options={options4} defaultValue={value} />
              </div>
              <div className="col-md-6 d-flex">
                <div className="form">
                  <label>Show Quantity as:</label>
                </div>
                <div className="form-check ml-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    <h5>Qty</h5>
                  </label>
                </div>
                <div className="form-check ml-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    <h5>Hours</h5>
                  </label>
                </div>
                <div className="form-check ml-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    <h5>Qty/Hours</h5>
                  </label>
                </div>
              </div>
            </div>

           <div className="table mt-3">
           <div className="table">
                    <table className="form-table table-secondary">
                        <thead>
                            <tr>
                               
                                <th> Item</th>
                                <th>Description</th>
                                <th>Qty</th>
                                <th>Rate</th>
                                <th>Tax</th>
                                <th>Amount</th>
                                <th>

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                               
                                <td>
                                    <textarea className="form-control " type="text"/>
                                </td>
                                <td>
                                    <textarea className="form-control " type="text"/>
                                </td>
                               <td >
                                    <input className="form-control" type="text"/>
                                    <span>Unit</span>
                                </td>
                                <td>
                                    <input className="form-control" type="rate"/>
                                </td>
                                <td>
                                    <select className="form-select" style={{width:60}}>
                                        <option>

                                        </option>
                                        <option>
                                            
                                        </option>
                                        <option>
                                            
                                        </option>
                                    </select>
                                </td>
                                
                                <td>

                                </td>
                                <td>
                                    <button className="btn">
                                        <BsFillCheckSquareFill/>
                                    </button>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
           </div>
           <div className="row text-end">
                <div className="col-md-5 col-lg-5">


                </div>
                <div className="col-md-7 col-md-7">
                    <table className="">
                        <tbody>
                            <tr>
                                <td className="subtotal"><span>
                                    Sub Total :
                                    </span></td>
                                    <td className="subtotal">$00.10</td>
                            </tr>
                            <tr>
                                <td >
                                    <div className="row">
                                        <div className="col-md-7">
                                            <span>Discount</span>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="">
                                                <input className="form-control" type="number"/>

                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>$0.00</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="row">
                                        <div className="col-md-7">
                                            <span>Adjustment</span>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="">
                                                <input className="form-control" typeof="number"/>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>$0.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row mt-3">
                    <div className="col text-end">
                        <button className="btn btn-primary mr-3">
                            Save & Send
                        </button>
                        <button className="btn btn-primary">
                            Save 
                        </button>

                    </div>
                </div>
               </div>
          
         
           
            </div>
         
        </div>
      </div>
    </>
  );
}
export default NewProposal