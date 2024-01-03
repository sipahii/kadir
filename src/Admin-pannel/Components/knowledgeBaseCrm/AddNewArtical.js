import React from "react";
import JoditEditor from "jodit-react";
import { useRef } from "react";
import { useState } from "react";
import Select from "react-select";

function AddNewArtical() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [value, setValue] = useState(null);

  const options = [{ value: "", lable: " " }];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 text-center">
            <div className="">
              <h4>Add new article</h4>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="card m-auto" style={{ width: 500 }}>
            <div className="card-body ">
              <div className="form-group">
                <lable className="form-lable">* Subject</lable>
                <input className="form-control" type="text" />
              </div>
              <div className="form-group">
                <lable className="form-lable">Group</lable>
                <div className="mb-3">
                  {/* <div className="input-group-text">+</div> */}
                  {/* <select */}
                  {/* // style={{ width: 410 }}

                    className="form-select"
                    id="prepend-text-single-field"
                    data-placeholder="Choose one thing" */}
                  {/* > */}
                  {/* <option />
                    <option>Internal Artical</option>
                    <option>Desabled</option>
                  </select> */}
                  <Select options={options} defaultValue={value} />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Internal Artical
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Disabled
                  </label>
                </div>
              </div>
              <div className="Artical">
                <p>Article description</p>
              </div>
              <div
                className="border border-secondary"
                style={{ width: 450, height: 300 }}
              >
                <div className="row">
                  <div className="">
                    {/* <select>
                      File
                      <option>File</option>
                    </select> */}
                    <JoditEditor
                      ref={editor}
                      value={content}
                      onChange={(newContent) => setContent(newContent)}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <button className="btn btn-primary text-right">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddNewArtical