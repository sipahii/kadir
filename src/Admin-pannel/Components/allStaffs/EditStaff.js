import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { useEditStaffDataMutation, useGetRolesQuery, useGetStaffByIdQuery } from "../all-products/allproductsApi/allProductsApi";
// import { useAddStaffMutation, useGetRolesQuery } from "../../all-products/allproductsApi/allProductsApi";

function EditStaff() {

    const [inputVal, setInputVal] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        password: '',
        role_id: '63fb963aba4c5193700943b0',
    });

    const params = useParams();

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = inpVal;
        setInputVal(clonedObj)
    };


    const { data } = useGetRolesQuery();

    const { data: satffDById, res } = useGetStaffByIdQuery(params.id);
    console.log('byId', satffDById);

    useEffect(() => {
        const StafD = { ...satffDById }
        setInputVal(StafD)
    }, [satffDById])

    console.log('role data', data)
    const [editStaffsD, response] = useEditStaffDataMutation();


    const submitEditStaffData = (e) => {
        e.preventDefault();
        const clone = { ...inputVal }
        setInputVal(clone)
        editStaffsD({ id: params.id, data: inputVal })
        console.log(inputVal)
        document.getElementById("create-course-form").reset();
    };


    const toastSuccessMessage = () => {
        toast.success("Staff Edit Successfully", {
            position: "top-center"
        })
    };

    if (response.isSuccess === true) {
        toastSuccessMessage()
    };
    console.log(response)
    console.log(inputVal)


    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Staff Information</h5>
                                </div>
                                <form className="form-horizontal" id="create-course-form" onSubmit={submitEditStaffData}>
                                    <input type="hidden" name="_token" defaultValue="S0f7vDDtqJ5NbxPupX86gbiFGZumqx0Q8PyryILc" />
                                    <div className="card-body">

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="first name">First Name</label>
                                            <div className="col-sm-9">
                                                <input type="text" value={inputVal?.firstname} placeholder="First Name" name="firstname" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="last name">Last Name</label>
                                            <div className="col-sm-9">
                                                <input type="text" value={inputVal?.lastname} placeholder="Last Name" name="lastname" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="email">Email</label>
                                            <div className="col-sm-9">
                                                <input type="email" value={inputVal?.email} placeholder="abc@gmail.com" autoComplete="off" name="email" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="mobile">Phone</label>
                                            <div className="col-sm-9">
                                                <input type="text" value={inputVal?.mobile} mobile="Phone" name="mobile" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="password">Password</label>
                                            <div className="col-sm-9">
                                                <input type="password" value={inputVal?.password} placeholder="Password" name="password" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="name">Role</label>
                                            <div className="col-sm-9">
                                                <div >
                                                    <select className="form-select" value={inputVal?.role_id} name="role_id" aria-label="Default select example" onChange={onChangeHandler}>
                                                        {data && data.map((item, i) => {
                                                            return <option value={item._id}>{item?.role_name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto"></div>
                <ToastContainer />
            </div>

        </>
    )
}
export default EditStaff;