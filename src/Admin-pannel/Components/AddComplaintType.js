import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { useAddComplaintTypeMutation, useAddNewAttributeMutation } from "./all-products/allproductsApi/allProductsApi";
import ToggleStatus from "./toggleStatus/ToggleStatus";
// import { useAddNewAttributeMutation } from "../all-products/allproductsApi/allProductsApi";

function AddComplaintType() {
    const [statusD, setStatusD] = useState()

    const [inputval, setInputval] = useState({
        name: '',
        isActive: null,
    });

    const onChangeHandler = (e) => {
        setStatusD(!statusD)
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    const [addComplaintTypeD, response] = useAddComplaintTypeMutation();

    const addComplaintTypeData = (e) => {
        e.preventDefault();
        console.log('complaintvalue---', inputval)
        addComplaintTypeD(inputval);
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("Complaint Type added", {
            position: "top-center"
        })
    };

    if (response.isSuccess === true) {
        toastSuccessMessage()
    };
    if (response.isError === true) {
        alert('Complaint Type not added')
    }


    return (
        <>
            <div className="col-md-5">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Add Complaint Type</h5>
                    </div>
                    <div className="card-body">
                        <form id="create-course-form" onSubmit={addComplaintTypeData}>
                            <input type="hidden" name="_token" defaultValue="6klBhNOhEcSYzHAP1WU8ctR90lIocmkKBETVGkNx" />

                            <div className="form-group mb-3">
                                <label htmlFor="name">Name</label>
                                <input type="text" placeholder="Name" id="name" name="name" className="form-control" required fdprocessedid="8s3s9v" onChange={onChangeHandler} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Active</label>
                                <select className="form-select" name="isActive" aria-label="Default select example" onChange={onChangeHandler} >
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </select>
                            </div>

                            {/* <div className="form-group row">
                                <div className="col-md-4">
                                    <label className="col-from-label">Active</label>
                                </div>
                                <div className="col-md-8">
                                    <label className="aiz-switch aiz-switch-success mb-0">
                                        <input name="isActive" type="checkbox" checked={statusD} onChange={onChangeHandler} />
                                        <span className="slider round" />
                                    </label>
                                </div>
                            </div> */}
                            <div className="form-group mb-3 text-right">
                                <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye">Save</button>
                            </div>

                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
export default AddComplaintType;