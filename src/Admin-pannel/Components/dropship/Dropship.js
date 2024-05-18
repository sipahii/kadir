import React from "react";
import { BiFilterAlt } from 'react-icons/bi';
import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'
import { Link } from "react-router-dom";

function Dropship() {
  return (
    <>
      <div className="px-15px px-lg-25px">
        <div className="aiz-titlebar text-left mt-2 mb-3">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h1">Dropship Warehouse</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Dropship Warehouse</h5>
            <div className="col-ml-70-md-9 text-md-right">
              <Link to="/admin/new-warehouse" className="btn btn-circle btn-info">
                Add New Warehouse
                {/* "btn btn-primary mb-3 " */}
              </Link>
              {/* <Link
                                className="
                                to="/admin/add-build-mastersss"
                            >
                                <span>Add Building Master</span>
                            </Link> */}
            </div>
          </div>
        </div>
        <div className="card-header p-1">
          <div className="col-ml-40-md-9 text-md-right">
            <div  >
              {" "}
              <button>
                {" "}
                <span> <BiFilterAlt /> filters </span>
              </button>
              {/* className='container col-6' */}
              <select>
                {" "}
                <option selected="">Default View</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
              <select>
                {" "}
                <option selected="">Columns</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>
            <div className="select p-2 mb-6">
              <select>
                {""}
                <option>20</option>
                <option>21</option>
                <option>22</option>
              </select><span>per page</span>
              <button style={{ width: 35, height: 25 }}>
                <span>
                  <AiOutlineLeft />

                </span>
              </button>
              <lable><span>page of 1</span></lable>
              <button className="action-previous type=button" style={{ width: 35, height: 25 }}><span> <AiOutlineRight /></span> </button>
            </div>

          </div>
        </div>
        <div className="card-body">
          <table className="table table-3">
            <thead>
              <tr>
                <th className="table-secondary" scope="col">
                  Warehouse Title
                </th>
                <th className="table-secondary" scope="col">
                  User Name
                </th>
                <th className="table-secondary" scope="col">
                  Description
                </th>
                <th className="table-secondary" scope="col">
                  Status
                </th>
                <th className="table-secondary" scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">Australia Warehouse</td>
                <td>warehouse4</td>
                <td>Australia Warehouse</td>
                <td>Active</td>
                <td>
                  <a
                    className="btn btn-primary btn-icon btn-circle btn-sm me-2 btn-circle-2"
                    title="View"
                    href="/admin/add-ring-size"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="icon-icon"
                      height="1em"
                      width="1em"
                      xmlns="https://icons8.com/icon/10752/filter "
                    >
                      {/* http://www.w3.org/2000/svg */}
                      {/* https://icons8.com/icon/10752/filter */}
                      <path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td scope="row">Australia Warehouse</td>
                <td>warehouse4</td>
                <td>Australia Warehouse</td>
                <td>Active</td>
                <td>
                  <a
                    className="btn btn-primary btn-icon btn-circle btn-sm me-2 btn-circle-2"
                    title="View"
                    href="/admin/add-ring-size"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="icon-icon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td scope="row">Australia Warehouse</td>
                <td>warehouse4</td>
                <td>Australia Warehouse</td>
                <td>Active</td>
                <td>
                  <a
                    className="btn btn-primary btn-icon btn-circle btn-sm me-2 btn-circle-2"
                    title="View"
                    href="/admin/add-ring-size"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="icon-icon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td scope="row">Australia Warehouse</td>
                <td>warehouse4</td>
                <td>Australia Warehouse</td>
                <td>Active</td>
                <td>
                  <a
                    className="btn btn-primary btn-icon btn-circle btn-sm me-2 btn-circle-2"
                    title="View"
                    href="/admin/add-ring-size"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="icon-icon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td scope="row">Australia Warehouse</td>
                <td>warehouse4</td>
                <td>Australia Warehouse</td>
                <td>Active</td>
                <td>
                  <a
                    className="btn btn-primary btn-icon btn-circle btn-sm me-2 btn-circle-2"
                    title="View"
                    href="/admin/add-ring-size"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="icon-icon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td scope="row">Australia Warehouse</td>
                <td>warehouse4</td>
                <td>Australia Warehouse</td>
                <td>Active</td>
                <td>
                  <a
                    className="btn btn-primary btn-icon btn-circle btn-sm me-2 btn-circle-2"
                    title="View"
                    href="/admin/add-ring-size"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="icon-icon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z" />
                    </svg>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Dropship;
