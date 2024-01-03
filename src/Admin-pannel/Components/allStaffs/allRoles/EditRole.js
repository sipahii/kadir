import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { useEditRoleDataMutation, useGetRoleByIdQuery, useGetRolesQuery } from "../../all-products/allproductsApi/allProductsApi";

function AddRole() {

    const [inputVal, setInputVal] = useState({
        role_name: ''
    });

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = inpVal;
        setInputVal(clonedObj)
    };

    const params = useParams();

    const { data } = useGetRolesQuery();
    const { data: roleByIdData } = useGetRoleByIdQuery(params.id);

    useEffect(() => {
        const roleD = { ...roleByIdData }
        setInputVal(roleD)
    }, [roleByIdData])


    console.log('role  by Id---data', roleByIdData)
    const [editRoleD, response] = useEditRoleDataMutation();


    const submitEditRoleData = (e) => {
        e.preventDefault();
        const clone = { ...inputVal }
        setInputVal(clone)
        editRoleD({ id: params.id, data: inputVal })
        console.log(inputVal)
        document.getElementById("create-course-form").reset();
    };


    const toastSuccessMessage = () => {
        toast.success("Role Edited Successfully", {
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
                                    <h5 className="mb-0 h6">Role Information</h5>
                                </div>
                                <form className="form-horizontal" id="create-course-form" onSubmit={submitEditRoleData}>
                                    <input type="hidden" name="_token" defaultValue="S0f7vDDtqJ5NbxPupX86gbiFGZumqx0Q8PyryILc" />
                                    <div className="card-body">

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="Role name">Role Name</label>
                                            <div className="col-sm-9">
                                                <input type="text" value={inputVal?.role_name} placeholder="Role Name" name="role_name" className="form-control" required onChange={onChangeHandler} />
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
export default AddRole;