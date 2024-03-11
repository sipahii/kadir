import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useEditColorMutation, useGetColorByIdQuery } from '../all-products/allproductsApi/allProductsApi';

function EditColor() {


    const [inputval, setInputval] = useState({
        name: '',
        color_code: ''
    });

    const params = useParams();

    const { data } = useGetColorByIdQuery(params.id);
    const [editColor, response] = useEditColorMutation();

    useEffect(() => {
        const obj = { ...data }
        setInputval(obj)
    }, [data]);

    console.log(data)

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };
    const submitEditColorData = (e) => {
        e.preventDefault();
        editColor({ id: params.id, data: inputval })
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("Color Edited Successfully", {
            position: "top-center"
        })
    };

    if (response.isSuccess === true) {
        toastSuccessMessage()
    };
    if (response.isError === true) {
        alert('!Color not edited')
    };


    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <h5 className="mb-0 h6">Attribute Information</h5>
                    </div>
                    <div className="col-lg-8 mx-auto">
                        <div className="card">
                            <div className="card-body p-0">

                                <form className="p-4" id="create-course-form" onSubmit={submitEditColorData}>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="name" placeholder="Color" fdprocessedid="vrvrin" value={inputval?.name} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Code</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="code" placeholder="Code" fdprocessedid="vrvrin" value={inputval?.code} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group mb-0 text-right">
                                        <button type="submit" className="btn btn-primary">Save</button>
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

export default EditColor