import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useEditBlogCategoryMutation, useGetBlogCategoryByIdQuery } from '../../all-products/allproductsApi/allProductsApi';

function EditBlogCategory() {

    const [inputval, setInputval] = useState({
        name: '',
    });

    const params = useParams();

    const { data } = useGetBlogCategoryByIdQuery(params.id);
    const [editBlogCategory, response] = useEditBlogCategoryMutation();

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
    const submitEditBlogCategoryData = (e) => {
        e.preventDefault();
        editBlogCategory({ id: params.id, data: inputval })
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("Category Edited Successfully", {
            position: "top-center"
        })
    };

    if (response.isSuccess === true) {
        toastSuccessMessage()
    };
    if (response.isError === true) {
        alert('!Category not edited')
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

                                <form className="p-4" id="create-course-form" onSubmit={submitEditBlogCategoryData}>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="name" placeholder="first name" fdprocessedid="vrvrin" value={inputval?.name} onChange={onChangeHandler} />
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

export default EditBlogCategory