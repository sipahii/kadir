import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useEditColorMutation, useEditFlashDealMutation, useGetColorByIdQuery, useGetFlashDealByIdQuery } from '../all-products/allproductsApi/allProductsApi';

function EditFlashDeal() {


    const [inputval, setInputval] = useState({
        title: '',
        backgroundColor: '',
        textColor: '',
        banner: '',
        start_date: '',
        end_date: '',
    });

    const params = useParams();

    const { data } = useGetFlashDealByIdQuery(params.id);
    const [EditFlashDeal, response] = useEditFlashDealMutation();

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
    const submitEditFlashDealData = (e) => {
        e.preventDefault();
        EditFlashDeal({ id: params.id, data: inputval })
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("FlashDeal Edited Successfully", {
            position: "top-center"
        })
    };

    if (response.isSuccess === true) {
        toastSuccessMessage()
    };
    if (response.isError === true) {
        alert('!FlashDeal not edited')
    };


    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <h5 className="mb-0 h6">FlashDeal Information</h5>
                    </div>
                    <div className="col-lg-8 mx-auto">
                        <div className="card">
                            <div className="card-body p-0">

                                <form style={{ padding: '40px' }} id='create-course-form' onSubmit={submitEditFlashDealData}>
                                    <input type="hidden" name="_token" defaultValue="Xu5GTasdShJ8Mb4DnbZuXHgHlus31K693Rksc8am" />
                                    <div className="form-group row">
                                        <label className="col-sm-3 control-label" htmlFor="name">Title</label>
                                        <div className="col-sm-9">
                                            <input type="text" value={inputval?.title} placeholder="Title" id="name" name="title" className="form-control" required fdprocessedid="tr0md" onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 control-label" htmlFor="background_color">Background Color <small>(Hexa-code)</small></label>
                                        <div className="col-sm-9">
                                            <input type="text" value={inputval?.backgroundColor} placeholder="#FFFFFF" name="backgroundColor" className="form-control" required fdprocessedid="p23i8k" onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-lg-3 control-label" htmlFor="name">Text Color</label>
                                        <div className="col-lg-9">
                                            <div>
                                                <select className="form-select" value={inputval?.textColor} aria-label="Default select example" name='textColor'>
                                                    <option value={1}>One</option>
                                                    <option value={2}>Two</option>
                                                    <option value={3}>Three</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">Banner <small>(1920x500)</small>
                                        </label>

                                        <div className="col-md-9">
                                            <div className="input-group" data-toggle="aizuploader" data-type="image">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                </div>
                                                <div className="form-control file-amount">
                                                    <input type="file" name="banner" className="selected-files" onChange={onChangeHandler} />
                                                </div>
                                            </div>
                                            <div className="file-preview box sm">
                                            </div>
                                            <span className="small text-muted">This image is shown as cover banner in flash deal details page.</span>
                                        </div>

                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-3 control-label" htmlFor="start_date">Start Date</label>
                                        <div className="col-sm-9">
                                            <input type="date" value={inputval?.start_date} className="form-control aiz-date-range" name="start_date" placeholder="Select Date" required fdprocessedid="hq8ckh" onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 control-label" htmlFor="start_date">End Date</label>
                                        <div className="col-sm-9">
                                            <input type="date" value={inputval?.end_date} className="form-control aiz-date-range" name="end_date" placeholder="Select Date" required fdprocessedid="hq8ckh" onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    {/* <div className="form-group row mb-3">
                                            <label className="col-sm-3 control-label" htmlFor="products">Products</label>
                                            <div className="col-sm-9">
                                                <div >
                                                    <select className="form-select" aria-label="Default select example" name=''>
                                                        <option selected>Open this select menu</option>
                                                        <option value={1}>One</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div> */}

                                    <div className="alert alert-danger">
                                        If any product has discount or exists in another flash deal, the discount will be replaced by this discount &amp; time limit.
                                    </div>
                                    <br />
                                    <div className="form-group" id="discount_table">
                                    </div>
                                    <div className="form-group mb-0 text-right">
                                        <button type="submit" className="btn btn-primary" fdprocessedid="le2936">Save</button>
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

export default EditFlashDeal;