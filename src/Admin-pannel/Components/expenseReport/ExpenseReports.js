import React from "react";
import { useState } from "react";
import Select from "react-select";
import { LiaBezierCurveSolid, LiaTachometerAltSolid } from "react-icons/lia";
function ExpencesReports(){
    const options1 = [
        { value: "All", label: "All" },
        { value: "Office Expence", label: "Office Expenc" },
        { value: "Other Expencw", label: "Other Expence" },
      ];
    //   const options2 = [
    //     { value: "", label: "" },
    //     { value: "", label: "" },
    //     { value: "", label: "" },
    //   ];
      const [value, setValue] = useState(null);
    return(
            <>
             <div className="container">
        <div className="row">
          <div className="col-md-6 mt-2">
            <h5>Expense Report </h5>
          </div>
          <div className="col-md-6 text-right">
            <button className="btn btn-text-only">
              <span>
                <LiaTachometerAltSolid />
              </span>{" "}
              Home{" "}
            </button>
            <button className="btn btn-text-only">Expense Report</button>
          </div>
        </div>
        <div className="card">
          <div className="row p-3">
            <div className="col">
              <label className="form-label fs-6">
                Please Enter Valid Information
              </label>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                {/* <div className="row">
                  <div className="col-6">
                    <div className="row">
                      <div className="col-6 text-right">
                        <label className="form-label">User</label>
                      </div>

                      <div className="col-md-6">
                        <div className="" style={{ width: 200 }}>
                          <Select options={options} defaultValue={value} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6"></div>
                </div> */}
                <div className="row mt-3">
                  <div className="col-6">
                    <div className="row">
                      <div className="col-6 text-right">
                        <label className="form-label">Category Name</label>
                      </div>

                      <div className="col-md-6">
                        <div className="" style={{ width: 200 }}>
                          <Select options={options1} defaultValue={value} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-6">
                    <div className="row">
                      <div className="col-6 text-right">
                        <label className="form-label">From Date</label>
                      </div>

                      <div className="col-md-6">
                        <div className="" style={{ width: 200 }}>
                          <input className="form-control" type="date" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-6 text-right">
                        <label className="form-label">To Date</label>
                      </div>

                      <div className="col-md-6">
                        <div className="" style={{ width: 200 }}>
                          <input className="form-control" type="date" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3"></div>
            <div className="row mt-3">
              <div className="col-md-6 text-right">
                <button className="btn btn-success">Show</button>
              </div>
              <div className="col-md-6">
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: "#f39c12" }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-3">
          <div className="row">
            <div className="col-md-10">
              <label className="form-label ml-2">Records Table</label>
            </div>
            <div className="col-md-2">
              <div className="dropdown">
                <a
                  className="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Export
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row p-3">
            <table className="table table-secondary">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Expense Code</th>

                  <th>Expense Date</th>
                  <th>Category Name</th>
                  <th>Reference No.</th>
                  <th>Expense for</th>
                  <th>Amount</th>
                  <th>Note</th>
                  <th>Created by</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
            </>
    )
}
export default ExpencesReports