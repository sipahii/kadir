import React from "react";
import Select from "react-select";
import { useState } from "react";
function ImportLead() {
  const [content, setContent] = useState("");
  const [value, setValue] = useState(null);
  const options = [
    { value: "pending", label: "pending " },
    { value: "Completed", label: "Completed" },
    { value: "Fail to accomplised", label: "Fail to accomplised" },
  ];
  const options1 = [
    { value: "Facebook", label: "Facebook " },
    { value: "Google", label: "Google" },
    { value: "IndiaMart", label: "IndiaMart" },
    { value: "JustDial", label: "JustDial" },
    { value: "Personal", label: "Personal" },
    { value: "Web", label: "Web" },
    { value: "WhatsApp", label: "WhatsApp" },
  ];
  const options3 = [
    { value: "Staff 1Secondrabad", label: "Staff 1Secondrabad" },
    { value: "Azhruddin Shamim", label: "Azhruddin Shamim" },
   
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="alert alert-info">
              <ul>
                <li className="">
                  1. Your CSV data should be in the format below. The first line
                  of your CSV file should be the column headers as in the table
                  example. Also make sure that your file is UTF-8 to avoid
                  unnecessary encoding problems.
                </li>
                <li>
                  2. If the column you are trying to import is date make sure
                  that is formatted in format Y-m-d (2023-08-09).
                </li>
                <li>
                  3. Based on your leads unique validation configured options,
                  the lead won't be imported if:
                </li>
                <br />
                <br />
                <br />
                - Lead email already exists
                <br />
                <br />
                <br />
                If you still want to import all leads, uncheck all unique
                validation field
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 d-flex">
                <div className="">
                  <h4>Import Leads</h4>
                </div>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4 text-right">
                <button className="btn btn-secondary">Download Sample</button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <table className="table table-secondary">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Company</th>
                    <th>Description</th>
                    <th>Country</th>
                    <th>Zip</th>
                    <th>City</th>
                    <th>State </th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Phonenumber</th>
                    <th>Lead value</th>
                    <th>Vat</th>
                    <th>Tags</th>
                    <th>Father's Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>sample</tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4">
              <label className="form-lable">Choose CSV File</label>
              <input className="form-control" type="file" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4">
              <lable>Status</lable>
              <Select options={options} defaultValue={value} />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4">
              <lable>Source</lable>
              <Select options={options} defaultValue={value} />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4">
              <lable>Responsible (Assignee)</lable>
              <Select options={options} defaultValue={value} />
            </div>
            
          </div>
          <div className="row mt-3">
            <div className="col-md-5">
                <button className="btn btn-primary">Import</button>
                <button className="btn btn-primary"> Simulate Import</button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
export default ImportLead