import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { useAddComplaintTypeMutation, useAddNewAttributeMutation, useGetTComplaintNatureByIdQuery, useGetTComplaintTypeByIdQuery, useUpdateComplaintTypeMutation } from "./all-products/allproductsApi/allProductsApi";
import ToggleStatus from "./toggleStatus/ToggleStatus";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditComplaintNature() {
    const params = useParams()
    const [statusD, setStatusD] = useState()

    const [inputval, setInputval] = useState({
        name: '',
        isActive: null,
    });

    const { data: comlaintNatureDataById } = useGetTComplaintNatureByIdQuery(params.id)

    useEffect(() => {
        if (comlaintNatureDataById) {
            const clone = { ...comlaintNatureDataById }
            setInputval(clone)
            setStatusD(clone.isActive)
        }
    }, [comlaintNatureDataById])

    const onChangeHandler = (e) => {
        setStatusD(!statusD)
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    // const [updateComplaintTypeD, response] = useUpdateComplaintTypeMutation(params.id);

    const toastSuccessMessage = () => {
        toast.success("Complaint Nature Updated", {
            position: "top-center"
        })
    };
    const toastErrorMessage = () => {
        toast.error("Not Updated", {
            position: "top-center"
        })
    };

    const updateComplaintNatureData = async (e) => {
        e.preventDefault();
        document.getElementById("create-course-form").reset();
        try {
            const resp = await axios.put(`https://onlineparttimejobs.in/api/complaintNature/update_ComplainNature/${params.id}`, inputval)
            toastSuccessMessage()
        } catch (error) {
            toastErrorMessage()
        }
    };


    return (
        <>
            <div className="col-md-5">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Update Complaint Type</h5>
                    </div>
                    <div className="card-body">
                        <form id="create-course-form" onSubmit={updateComplaintNatureData}>

                            <div className="form-group mb-3">
                                <label htmlFor="name">Name</label>
                                <input type="text" placeholder="Name" value={inputval?.name} id="name" name="name" className="form-control" required fdprocessedid="8s3s9v" onChange={onChangeHandler} />
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
                                <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye">Update</button>
                            </div>

                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
export default EditComplaintNature;