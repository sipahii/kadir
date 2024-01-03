import React from "react";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
function KnowledgeBaseCrm() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="header">
                <Link to="/admin/add-new-artical"  className="btn btn-primary">+ New Artical</Link>
              {/* <button className="btn btn-primary"></button> */}
              <Link to="/admin/group-crm" className="btn btn-default ml-2 ">Groups</Link>
              {/* <button className="btn btn-default ml-2 ">Groups</button> */}
              {/* <button className="toggle-artical-list"> Artical</button> */}
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-10 col-lg-10">
                <div className="d-flex">
                  <select className="form-select" style={{ width: 80 }}>
                    <option>25</option>
                    <option>10</option>
                    <option>100</option>
                    <option>All</option>
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
              <div className="col-md-2 col-lg-2">
                <div className="input-group flex-nowrap justify-content-end" style={{width:140}}>
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
             <div className="container mt-3">
                <div className="row">
                    <table className="table"> 
                        <thead className="table-secondary">
                            <tr>
                              
                                <td className="col-6">Artical Name</td>
                                <td className="col-3">Group</td>
                                <td className="col-3">Date Published</td>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>Define Return Support System</td>
                                <td>Return Support</td>
                                <td>07/08/2023 11:25:33</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
             </div>
             <div className="row">
                <div className="col-md-7">
                    <div className="">
                        <lable className="form-lable">Showing 1 to 1 of 1 entries</lable>
                    </div>
                </div>
                <div className="col-md-5 text-end">
                    <button className="btn-outline-secondary">
                        Previous
                    </button>
                    <input type="number" style={{width:40}}/>
                    <button className="btn-outline-secondary">
                        Next
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
export default KnowledgeBaseCrm