import React from "react";
import { BiBorderRadius } from "react-icons/bi";
import { Link } from "react-router-dom";
function NewWarehouse() {
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
        {/* <div className="card">
          <div className="card-header"></div>
        </div> */}
        <div className="card-header p-1 "style={{backgroundColor:"white"}}>
          <div className="col-ml-40-md-9 text-md-right">
            <div>
            <Link to="/admin/drop-ship" className="ui-button-text-only mr-3">Back </Link>
              <button className="ui-button-text-only mr-3">Reset</button>
              <button className="ui-button-text-only mr-3">
                Save Continue and Edit
              </button>
              <button className="btn btn-circle btn-info">
                {" "}
                Save Warehouse
              </button>
            </div>
          </div>
        </div>
        <div className="p-3">
        <h5>NewWarehouse</h5>
          
        <form className=" g-3 my40 p-8">
       

            <fieldset>
            
          <div className="row mt-3 ">
            <div className="col-2">
                
              <label className="container-my7">User Name</label>
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Strore Name"
              />
            </div>
          </div>
          <div className="row mt-3 ">
            <div className="col-2">
              <label className="container-my7">First Name</label>
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Strore Name"
              />
            </div>
          </div> <div className="row mt-3 ">
            <div className="col-2">
              <label className="container-my7">Last Name</label>
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Strore Name"
              />
            </div>
          </div> <div className="row mt-3 ">
            <div className="col-2">
              <label className="container-my7">Email</label>
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Strore Name"
              />
            </div>
          </div> <div className="row mt-3 ">
            <div className="col-2">
              <label className="container-my7">Warehouse Title</label>
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Strore Name"
              />
            </div>

          </div>
          <div className="row mt-3 ">
            <div className="col-2">
              <label className="container-my7">Description</label>
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Strore Name"
              />
            </div>
          </div>
          <div className="row mt-3 ">
            <div className="col-2">
              <label className="container-my7">Complete Address</label>
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Strore Name"
              />
            </div>
          </div>
          <div className="row mt-3 ">
            <div className="col-2">
              <label className="container-my7">City</label>
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Strore Name"
              />
            </div>
          </div> <div className="row mt-3 ">
            <div className="col-2">
              <label className="container-my7">State</label>
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Strore Name"
              />
            </div>
          </div> <div className="row mt-3 ">
            <div className="col-2">
              <label className="container-my7">Postal Code</label>
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Strore Name"
              />
            </div>
          </div> <div className="row mt-3 ">
            <div className="col-2">
              <label className="container-my7">Origin Country</label>
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Strore Name"
              />
            </div>
          </div> <div className="row mt-3 ">
            <div className="col-2">
              <label className="container-my7">Latitude</label>
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Strore Name"
              />
            </div>
          </div>
          <div className="row mt-3 ">
            <div className="col-2">
              <label className="container-my7">Longitude</label>
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Strore Name"
              />
            </div>
          </div>
          <div className="row mt-3 ">
            <div className="col-2">
              <label className="container-my7">Allowed Shipping<br/>Method</label>
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control" style={{width:220, height:200}}
                id="text"
                placeholder="Strore Name"
              />
            </div>
          </div>
          <div className="row mt-3 ">
            <div className="col-2">
              <label className="container-my7">Password</label>
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Strore Name"
              />
            </div>
          </div>
          <div className="row mt-3 ">
            <div className="col-2">
              <label className="container-my7">Password Confirmation</label>
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Strore Name"
              />
            </div>
          </div>
          <div className="row mt-3 ">
            <div className="col-2">
              <label className="container-my7">Interface Locale</label>
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Strore Name"
              />
            </div>
          </div>
          <div className="row mt-3 ">
            <div className="col-2">
              <label className="container-my7">Interface Locale</label>
            </div>
            <div className="col-4">
                <select>
                <option selected="">Active</option>
            <option value={1}>Inactive</option>
           
                </select>

            </div>
            </div>
            </fieldset>
            <div className="p3">
                <h5>Current Warehouse User Identity Verfication</h5>
                <div className="row mt-3 ">
            <div className="col-2">
              <label className="container-my7">Your Password</label>
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control" style={{width:500}}
                id="text"
                placeholder="Strore Name"
              />
            </div>
          </div>
                

                
            </div>
            </form>
            


        </div>
      </div>
    </>
  );
}
export default NewWarehouse;
