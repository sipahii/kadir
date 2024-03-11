import React from "react";
function RunDropshipProductProfile() {
  return (
    <>
      <div className="px-15px px-lg-25px">
        <div className="aiz-titlebar text-left mt-2 mb-3">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h1">Manage Dropship Product Upload</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="d-flex justify-content-end">
            <div>
              <button className="btn btn-circle btn-info"> Run Profile</button>
            </div>
          </div>
        </div>
        <div className="lable mt-3 ms-3 ">
          <label>Run Profile</label>
          <hr className="border-dark border-2 opacity-50 ml-2 mr-2" />
        </div>

      
      <div className="col  d-flex " >
          <div className=" row mt-3">
            <label className="col-sm-3 col-form-label">
            Want to skip product if product warehouse price is greater than
            product price?
          </label>
          
          <div className="form-check form-switch col-sm-5 d-flex"  >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              style={{width:100, height:30}}
             
            />
            </div>
           
           
          </div>
          

        </div>
       <div className="col  d-flex ">
       <div className="row mt-3 ">
                <label className="col-sm-3 col-form-label">select Profile</label>
                <div className="row mt-3 ">
            <select>
                
                <option selected="">Default View</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>

            </div>
                
            </div>
           
       </div>
     
      </div>
    </>
  );
}
export default RunDropshipProductProfile;
