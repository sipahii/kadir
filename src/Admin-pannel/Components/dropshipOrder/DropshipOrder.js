import React from "react";
import { BiCheckCircle, BiFilterAlt } from "react-icons/bi";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs"

function DropshipOrders() {
  return (
    <>
      <div className="px-15px px-lg-25px">
        <div className="aiz-titlebar text-left mt-2 mb-3">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h1">Dropship Order</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header"></div>
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
            <div className="select p-2 mb-6">
              {/* d-flex align-item-stretch justify-content-between */}
              <div className="col-ml-40-md-9 text-md-left ">
                <select>
                  <option value={1}>Action</option>
                  <option value={1}>Action</option>
                  <option value={1}>Action</option>
                </select>
              </div>

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
        <div className="card-body">
          <table className="table table-3">
            <thead>
              <tr className="table-secondary" scope="col">
                <th >
                <select>
                
              </select>
                  
                </th>
                <th>
                    ID 
                  
                </th>
                <th>
                    purchase Point
                </th>
                <th>
                    Warehouse
                </th>
                <th>
                    Purchase Date 
                </th>
                <th>
                    Ship-to-Name
                </th>
                <th>Customer E-mail</th>
                <th>Status</th>
                <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                     <td scope="row">
                    <input className="check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    </td>
                    <td>00000065</td>
                    <td>Main Website <br/>Main Website Store<br/>Default Store View</td>
                    <td>
                        <button >Assigned</button>
                    </td>
                    <td>may 6,2022 4:54:52 AM</td>
                    <td>john Doe</td>
                    <td>test@webkul.com</td>
                    <td>Pending</td>
                    <td>
                        <a>view</a>
                    </td>
                    </tr>
                    <tr>
                    <td scope="row">
                    <input className="check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    </td>
                    <td>00000064</td>
                    <td>Main Website <br/>Main Website Store<br/>Default Store View</td>
                    <td>
                        <button >Assigned</button>
                    </td>
                    <td>dec 6,2022 4:54:52 AM</td>
                    <td>john Doe</td>
                    <td>test@webkul.com</td>
                    <td>Pending</td>
                    <td>
                        <a>view</a>
                    </td>
                    </tr>
                    <tr>
                    <td scope="row">
                    <input className="check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    </td>
                    <td>00000065</td>
                    <td>Main Website <br/>Main Website Store<br/>Default Store View</td>
                    <td>
                        <button >Assigned</button>
                    </td>
                    <td>may 6,2022 4:54:52 AM</td>
                    <td>john Doe</td>
                    <td>test@webkul.com</td>
                    <td>Pending</td>
                    <td>
                        <a>view</a>
                    </td>
                    </tr>
                    <tr><td scope="row">
                    <input className="check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    </td>
                    <td>00000065</td>
                    <td>Main Website <br/>Main Website Store<br/>Default Store View</td>
                    <td>
                        <button >Assigned</button>
                    </td>
                    <td>may 6,2022 4:54:52 AM</td>
                    <td>john Doe</td>
                    <td>test@webkul.com</td>
                    <td>Pending</td>
                    <td>
                        <a>view</a>
                    </td></tr>
                    <tr><td scope="row">
                    <input className="check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    </td>
                    <td>00000065</td>
                    <td>Main Website <br/>Main Website Store<br/>Default Store View</td>
                    <td>
                        <button >Assigned</button>
                    </td>
                    <td>may 6,2022 4:54:52 AM</td>
                    <td>john Doe</td>
                    <td>test@webkul.com</td>
                    <td>Pending</td>
                    <td>
                        <a>view</a>
                    </td></tr>
                </tbody>
                </table>
                </div>
      </div>
    </>
  );
}
export default DropshipOrders;
