import React from "react"
import { Link } from "react-router-dom";
function AddNewShoppingRule(){
    return(
        <>
         <div className=" px-15px px-lg-25px"> 
        <div className="aiz-titlebar text-left mt-2 mb-3">
          <div className="row align-items-center">
        <div className="col-md-6">
            <label><h4>Shipping Rules Import</h4></label>
        </div>
        </div>
        </div>
        
        
        <div className=" card-header " style={{backgroundColor:"white"}}>
        <div className="d-flex justify-content-end">
        <Link to="/admin/manage-shopping-rules" className="btn btn-circle btn-info mr-3">Back </Link>
        
            <button className="btn btn-circle btn-info "> Save</button>
          
        </div>
        </div>
        <label className="mt-3"><h4>Import Shipping Rules</h4></label>
        <form>
            <label className="mt-3">Download Simple File</label>
        <div className="row  text-center mt-3 ">
            <div className="ml-5" ><label > Choose Shipping Rules</label>
           <input className="ml-5" type="file"></input>
            </div>

            <div className="mt-3" ><label > Choose Shipping Rules</label>
           <select className="ml-5">
           <option value={1}>Select Warehouse</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
           </select>
            </div>

            

           
           
           
        </div>
        </form>
        </div> 
        
        </>
    )
}
export default AddNewShoppingRule;