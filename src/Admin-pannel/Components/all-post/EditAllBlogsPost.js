import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useEditAllBlogsPostMutation, useGetBlogPostByIdQuery } from '../all-products/allproductsApi/allProductsApi';

function EditAllBlogsPost() {
    const [inputval, setInputval] = useState({
        title: '',
        // category_id: '',
        slug: '',
        banner: '',
        short_description: '',
        meta_title: '',
        meta_img: '',
        description: '',
    });

    const params = useParams();
    console.log(params.id)

    const { data } = useGetBlogPostByIdQuery(params.id);
    console.log("id data", data)

    const [editAllBlogsPost, response] = useEditAllBlogsPostMutation()

    useEffect(() => {
        const cloneD = { ...data }
        setInputval(cloneD)
    }, [data])



    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    const editPostData = (e) => {
        e.preventDefault();
        editAllBlogsPost({ id: params.id, data: inputval })
        console.log(inputval)
        document.getElementById("create-course-form").reset();
    };

    // console.log(response);

    const toastSuccessMessage = () => {
        toast.success("Blog Edited Successfully", {
            position: "top-center"
        })
    };

    if (response.isSuccess === true) {
        toastSuccessMessage()
    };
    if (response.isError === true) {
        alert('!Error Blog not edited')
    }

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Blog Information</h5>
                                </div>
                                <div className="card-body">

                                    <form id="create-course-form" className="form-horizontal" onSubmit={editPostData}>
                                        <input type="hidden" name="_token" defaultValue="07UCSsugYybFwAvxOOLHIzxK3Bh478ewEmm13oXv" />

                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">
                                                Blog Title
                                                <span className="text-danger">*</span>
                                            </label>
                                            <div className="col-md-9">
                                                <input type="text" placeholder="Blog Title" value={inputval?.title} id="title" name="title" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        {/* <div className="form-group row" id="category">
                      <label className="col-md-3 col-from-label">
                        Category
                        <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <div>
                          <select className="form-select" name='category_id' onChange={onChangeHandler}>
                            <option value={3}>Three</option>
                            <option value={4}>four</option>
                          </select>
                        </div>
                      </div>
                    </div> */}

                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">Slug
                                                <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <input type="text" placeholder="Slug" value={inputval?.slug} name="slug" id="slug" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">
                                                Banner
                                                <small>(1300x650)</small>
                                            </label>
                                            <div className="col-md-9">
                                                <div className="input-group" data-type="image">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text bg-soft-secondary font-weight-medium">
                                                            Browse
                                                        </div>
                                                    </div>
                                                    <div className="form-control file-amount">
                                                        <input type="file" name="banner" className="selected-files" onChange={onChangeHandler} />
                                                    </div>
                                                </div>
                                                <div className="file-preview box sm">
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">
                                                Short Description
                                                <span className="text-danger">*</span>
                                            </label>
                                            <div className="col-md-9">
                                                <textarea name="short_description" value={inputval?.short_description} rows={5} className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">Meta Title</label>
                                            <div className="col-md-9">
                                                <input type="text" value={inputval?.meta_title} className="form-control" name="meta_title" placeholder="Meta Title" onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">
                                                Meta Image
                                                <small>(200x200)+</small>
                                            </label>
                                            <div className="col-md-9">
                                                <div className="input-group" data-toggle="aizuploader" data-type="image">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text bg-soft-secondary font-weight-medium">
                                                            Browse
                                                        </div>
                                                    </div>
                                                    <div className="form-control file-amount">
                                                        <input type="file" name="meta_img" className="selected-files" onChange={onChangeHandler} />
                                                    </div>
                                                </div>
                                                <div className="file-preview box sm">
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">Meta description</label>
                                            <div className="col-md-9">
                                                <textarea name="description" value={inputval?.description} rows={8} className="form-control" onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">
                                                Meta Keywords
                                            </label>
                                            <div className="col-md-9">
                                                <input type="text" className="form-control" id="meta_keywords" name="meta_keywords" placeholder="Meta Keywords" onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-primary">
                                                Save
                                            </button>
                                        </div>

                                    </form>

                                </div>
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

export default EditAllBlogsPost