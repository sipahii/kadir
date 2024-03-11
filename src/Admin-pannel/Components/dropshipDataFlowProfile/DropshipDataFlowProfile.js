import React from "react";
import { BiCheckCircle, BiFilterAlt } from "react-icons/bi";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
function DropshipDataFlowProfile() {
  return (
    <>
      <div className="px-15px px-lg-25px">
        <div className="aiz-titlebar text-left mt-2 mb-3">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h1">Dropship Dataflow Profile</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="d-flex justify-content-end">
            <div>
              <button className="btn btn-circle btn-info">
                Add New Dataflow Profile
              </button>
            </div>
          </div>
        </div>
        <div className="card-header p-1">
          <div className="col-ml-40-md-9 text-md-right">
            <div>
              <button>
                {/* <AiOutlineLeft/> */}
                <span>
                  <BiFilterAlt />
                  Filters
                </span>
              </button>
              <select>
                <option selected="">Default View</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
              <select>
                <option selected="">Columns</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
            <div>
              <div className="col-ml-40-md-9 text-md-left ">
                <select style={{ width: 200, height: 30 }}>
                  <option value={1}>Action</option>
                  <option value={1}>Action</option>
                  <option value={1}>Action</option>
                </select>
                <div className="col text-md-right">
                <select>
                <option>20</option>
                <option>21</option>
                <option>22</option>
              </select>
              <label>
                <span>per page</span>
              </label>
              <button style={{ width: 35, height: 25 }}>
                <span>
                  <AiOutlineLeft />
                </span>{" "}
              </button>
              <input style={{ width: 20, height: 20 }} type="number" />
              <button
                className="action-previous type=button"
                style={{ width: 35, height: 25 }}
              >
                <span>
                  {" "}
                  <AiOutlineRight />
                </span>{" "}
              </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
        <table className="table table-3">
            <thead>
                <tr className="table-secondary" scope="col">
                    <th>
                    <select>
                
                </select>
                    </th>
                    <th>
                        Id
                    </th>
                    <th>
                        Profile Name
                    </th>
                    <th>
                        Created
                    </th>
                    <th>
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td scope="row">
                    <input className="check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    </td>
                    <td>
                        1
                    </td>
                    <td>
                        My Profile 1
                    </td>
                    <td>
                        june 23,2017 05:55:02 AM
                    </td>
                    <td>
                        Edit
                    </td>
                </tr>
                <tr>
                <td scope="row">
                    <input className="check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    </td>
                    <td>
                        1
                    </td>
                    <td>
                        My Profile 1
                    </td>
                    <td>
                        june 23,2017 05:55:02 AM
                    </td>
                    <td>
                        Edit
                    </td>
                </tr>
                <tr>
                <td scope="row">
                    <input className="check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    </td>
                    <td>
                        1
                    </td>
                    <td>
                        My Profile 1
                    </td>
                    <td>
                        june 23,2017 05:55:02 AM
                    </td>
                    <td>
                        Edit
                    </td>
                </tr>
                <tr>
                <td scope="row">
                    <input className="check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    </td>
                    <td>
                        1
                    </td>
                    <td>
                        My Profile 1
                    </td>
                    <td>
                        june 23,2017 05:55:02 AM
                    </td>
                    <td>
                        Edit
                    </td>
                </tr>
                <tr>
                <td scope="row">
                    <input className="check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    </td>
                    <td>
                        1
                    </td>
                    <td>
                        My Profile 1
                    </td>
                    <td>
                        june 23,2017 05:55:02 AM
                    </td>
                    <td>
                        Edit
                    </td>
                </tr>
                <tr>
                <td scope="row">
                    <input className="check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    </td>
                    <td>
                        1
                    </td>
                    <td>
                        My Profile 1
                    </td>
                    <td>
                        june 23,2017 05:55:02 AM
                    </td>
                    <td>
                        Edit
                    </td>
                </tr>
                <tr>
                <td scope="row">
                    <input className="check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    </td>
                    <td>
                        1
                    </td>
                    <td>
                        My Profile 1
                    </td>
                    <td>
                        june 23,2017 05:55:02 AM
                    </td>
                    <td>
                        Edit
                    </td>
                </tr>
                <tr>
                <td scope="row">
                    <input className="check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    </td>
                    <td>
                        1
                    </td>
                    <td>
                        My Profile 1
                    </td>
                    <td>
                        june 23,2017 05:55:02 AM
                    </td>
                    <td>
                        Edit
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
      </div>
    </>
  );
}
export default DropshipDataFlowProfile;
