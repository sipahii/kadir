import react from 'react'
import { BiCheckCircle, BiFilterAlt } from "react-icons/bi";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";    
import { Link } from 'react-router-dom';
function ManageShoppingRules(){
    return(
        <>
        
        <div className="px-15px px-lg-25px">
        <div className="aiz-titlebar text-left mt-2 mb-3">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h1">Manage Shopping Rule</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="d-flex justify-content-end">
          <div>
            <Link to="/admin/add-new-warehouse"className="btn btn-circle btn-info">
              Add New Shopping Rules
            </Link>
            {/* className="btn btn-circle btn-info"
             Add New Shopping Rules */}
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
            <div className="select p-2 mb-6">
             
              <div className="col-ml-40-md-9 text-md-left " >
                <select style={{width:200,height:30}}>
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
                    Warehouse
                  
                </th>
                <th>
                    Country Code
                </th>
                <th>
                    Postal Code From
                </th>
                <th>
                Postal Code To
                </th>
                <th>
                   Weight From
                </th>
                <th>Weight To</th>
                <th>Cost</th>
                
                </tr>
                </thead>
                <tbody>
                    <tr>
                     <td scope="row">
                    <input className="check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    </td>
                    <td>Warehouse1</td>
                    <td>US </td>
                    <td>
                       32004
                    </td>
                    <td>34997</td>
                    <td>10100</td>
                    <td>1000.0000</td>
                    <td>$25.00</td>
                    </tr>
                    <tr>
                     <td scope="row">
                    <input className="check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    </td>
                    <td>Warehouse1</td>
                    <td>US </td>
                    <td>
                       32004
                    </td>
                    <td>34997</td>
                    <td>10100</td>
                    <td>1000.0000</td>
                    <td>$25.00</td>
                    </tr>
                    <tr>
                     <td scope="row">
                    <input className="check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    </td>
                    <td>Warehouse1</td>
                    <td>US </td>
                    <td>
                       32004
                    </td>
                    <td>34997</td>
                    <td>10100</td>
                    <td>1000.0000</td>
                    <td>$25.00</td>
                    </tr>
                    <tr>
                     <td scope="row">
                    <input className="check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    </td>
                    <td>Warehouse1</td>
                    <td>US </td>
                    <td>
                       32004
                    </td>
                    <td>34997</td>
                    <td>10100</td>
                    <td>1000.0000</td>
                    <td>$25.00</td>
                    </tr>
                    <tr>
                     <td scope="row">
                    <input className="check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    </td>
                    <td>Warehouse1</td>
                    <td>US </td>
                    <td>
                       32004
                    </td>
                    <td>34997</td>
                    <td>10100</td>
                    <td>1000.0000</td>
                    <td>$25.00</td>
                    </tr>
                    <tr>
                     <td scope="row">
                    <input className="check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    </td>
                    <td>Warehouse1</td>
                    <td>US </td>
                    <td>
                       32004
                    </td>
                    <td>34997</td>
                    <td>10100</td>
                    <td>1000.0000</td>
                    <td>$25.00</td>
                    </tr>
                    <tr>
                     <td scope="row">
                    <input className="check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    </td>
                    <td>Warehouse1</td>
                    <td>US </td>
                    <td>
                       32004
                    </td>
                    <td>34997</td>
                    <td>10100</td>
                    <td>1000.0000</td>
                    <td>$25.00</td>
                    </tr>
                    <tr>
                     <td scope="row">
                    <input className="check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    </td>
                    <td>Warehouse1</td>
                    <td>US </td>
                    <td>
                       32004
                    </td>
                    <td>34997</td>
                    <td>10100</td>
                    <td>1000.0000</td>
                    <td>$25.00</td>
                    </tr>
                    <tr>
                     <td scope="row">
                    <input className="check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    </td>
                    <td>Warehouse1</td>
                    <td>US </td>
                    <td>
                       32004
                    </td>
                    <td>34997</td>
                    <td>10100</td>
                    <td>1000.0000</td>
                    <td>$25.00</td>
                    </tr>
                    <tr>
                     <td scope="row">
                    <input className="check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    </td>
                    <td>Warehouse1</td>
                    <td>US </td>
                    <td>
                       32004
                    </td>
                    <td>34997</td>
                    <td>10100</td>
                    <td>1000.0000</td>
                    <td>$25.00</td>
                    </tr>
                </tbody>
                </table>
                </div>
      </div>
        </>
    )
}
export default ManageShoppingRules