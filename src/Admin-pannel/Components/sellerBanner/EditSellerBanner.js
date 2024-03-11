import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useEditSellerBannerMutation, useGetSellerBannerByIdQuery } from '../all-products/allproductsApi/allProductsApi';


function EditSellerBanner() {

    const [inputval, setInputval] = useState({
        title: '',
        descriptions: '',
        background: ''

    });

    const params = useParams();

    const { data } = useGetSellerBannerByIdQuery(params.id);

    const [editSellerBanner, response] = useEditSellerBannerMutation();

    useEffect(() => {
        const obj = { ...data }
        setInputval(obj)
    }, [data]);


    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };
    const submitEditSellerBannerData = (e) => {
        e.preventDefault();
        editSellerBanner({ id: params.id, data: inputval })
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("SellerBanner Edited Successfully", {
            position: "top-center"
        })
    };

    if (response.isSuccess === true) {
        toastSuccessMessage()
    };
    if (response.isError === true) {
        alert('!SellerBanner not edited')
    };

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <h5 className="mb-0 h6">seller Banner Information</h5>
                    </div>
                    <div className="col-lg-8 mx-auto">
                        <div className="card">
                            <div className="card-body p-0">

                                <form className="p-4" id="create-course-form" onSubmit={submitEditSellerBannerData}>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Seller Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="title" placeholder="Seller name" fdprocessedid="vrvrin" value={inputval?.title} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Description</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="descriptions" placeholder="description" fdprocessedid="vrvrin" value={inputval?.descriptions} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label">Backgroung <small>(200x200)</small></label>
                                        <div className="col-md-9">
                                            <div className="input-group" data-type="image">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                </div>
                                                <div className="form-control file-amount">
                                                    <input type="file" name=" background" className="selected-files" onChange={onChangeHandler} />
                                                </div>
                                            </div>
                                            <div className="file-preview box sm">
                                            </div>
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

export default EditSellerBanner