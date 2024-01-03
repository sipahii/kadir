import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useEditAllPointsTableMutation, useGetAllPointsTableByIdQuery } from '../../all-products/allproductsApi/allProductsApi';
// import { useEditBrandMutation, useGetBrandByIdQuery } from '../all-products/allproductsApi/allProductsApi';

function EditAllPointsTable() {
    const [inputval, setInputval] = useState({
        // name: '',
        // owner: '',
        // price: '',
        point_single: '',
    });

    const params = useParams();
    const { data } = useGetAllPointsTableByIdQuery(params.id);
    // console.log(data)

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    const [editAllPointsD, response] = useEditAllPointsTableMutation();

    const submitEditAllPpintsTableData = (e) => {
        e.preventDefault()
        editAllPointsD({ id: params.id, data: inputval })
        console.log(inputval)
        document.getElementById("create-course-form").reset();
    };

    useEffect(() => {
        const clodData = { ...data }
        setInputval(clodData)
    }, [data]);

    const toastSuccessMessage = () => {
        toast.success("AllPoints Edited Successfully", {
            position: "top-center"
        })
    };

    if (response.isSuccess === true) {
        toastSuccessMessage()
    };
    if (response.isError === true) {
        alert('!AllPoints not edited')
    };


    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <h5 className="mb-0 h6">Set Club Points Information</h5>
                    </div>
                    <div className="col-lg-8 mx-auto">
                        <div className="card">
                            <div className="card-body p-0">

                                <form className="p-4" id="create-course-form" onSubmit={submitEditAllPpintsTableData}>
                                    {/* <div className="form-group row">
                                        <label className="col-sm-3 col-from-label" htmlFor="name">Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" value={inputval?.name} name="name" className="form-control" required fdprocessedid="zp6g3o" onChange={onChangeHandler} />
                                        </div>
                                    </div> */}

                                    {/* <div className="form-group row">
                                        <label className="col-sm-3 col-from-label" htmlFor="owner">Owner</label>
                                        <div className="col-sm-9">
                                            <input type="text" value={inputval?.owner} name="owner" className="form-control" required fdprocessedid="zp6g3o" onChange={onChangeHandler} />
                                        </div>
                                    </div> */}

                                    {/* <div className="form-group row">
                                        <label className="col-sm-3 col-from-label" htmlFor="owner">Price</label>
                                        <div className="col-sm-9">
                                            <input type="number" value={inputval?.price} name="price" className="form-control" required fdprocessedid="zp6g3o" onChange={onChangeHandler} />
                                        </div>
                                    </div> */}

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label" htmlFor="owner">Point</label>
                                        <div className="col-sm-9">
                                            <input type="number" value={inputval?.point_single} name="point_single" className="form-control" required fdprocessedid="zp6g3o" onChange={onChangeHandler} />
                                        </div>
                                    </div>


                                    <div className="form-group mb-0 text-right">
                                        <button type="submit" className="btn btn-primary" fdprocessedid="rcbhrk">Save</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
                <ToastContainer />
            </div>

        </>
    )
}

export default EditAllPointsTable;