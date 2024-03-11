

import { useEffect, useState } from "react"
import Form from 'react-bootstrap/Form';
import { useGetCategoriesQuery } from "../all-products/allproductsApi/allProductsApi";
import ProductDescriptionWrapper from "../productDescriptionWrapper/productDescriptionWrapper";
import { token } from "../../common/TokenArea";
import axios from "axios";

function AddpriceRangeMultiLang({ data, item, i, addNewAttributeData, onChangeHandler, setValue, onChangeHandlesr }) {
    const [parentCategoryD, setParentCategoryD] = useState();
    const idShow = window.localStorage.getItem('adminId');
    // const { data: valDAta } = useGetCategoriesQuery(token);

    const getParentCategoryData = async () => {
        const resp = await axios.get(`https://onlineparttimejobs.in/api/influence_priceRange/admin`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        setParentCategoryD(resp.data)
    };

    useEffect(() => {
        getParentCategoryData();
    }, []);

    return <div className="card">
        <div className="card-header">
            <h5 className="mb-0 h6">Price Range Information ({item?.lable})</h5>
        </div>
        <div className="card-body">

            <form className="form-horizontal" id="create-course-form">
                <input type="hidden" name="_token" defaultValue="JX7Efxc0fWnjgSTDtnGEP5Yd23Vk7icCfLqqxizf" />

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Name</label>
                    <div className="col-md-9">
                        <input type="text" placeholder="Name" name="name" value={item?.name} className="form-control" onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                    </div>
                </div>

                {/* <div className="form-group row">
                    <label className="col-md-3 col-form-label">Parent Category</label>
                    <div className="col-md-9">
                        <select className="form-select" name='parent_id' value={item?.parent_id} onChange={(e) => { onChangeHandler(e, item.language_id) }} required>
                            <option>Select Parent Catagary</option>
                            <option value='null'>Null</option>
                            {valDAta && valDAta.map((item, i) => {
                                return <option key={item._id} value={item._id}>{item.name}</option>
                            })}
                        </select>
                    </div>
                </div> */}
                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Parent Category</label>
                    <div className="col-md-9">
                        <select className="form-select" name='parent_id' value={item?.parent_id} onChange={(e) => { onChangeHandler(e, item.language_id) }} required>
                            <option>Select Parent Catagary</option>
                            <option value='null'>Null</option>
                            {parentCategoryD && parentCategoryD.map((item, i) => {
                                return <option key={item._id} value={item._id}>{item.name}</option>
                            })}
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">
                        Ordering Number
                    </label>
                    <div className="col-md-9">
                        <input type="number" name="order_level" value={item?.order_level} className="form-control" placeholder="Order Level" onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                        <small>Higher number has high priority</small>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Type</label>
                    <div className="col-md-9">
                        <div>
                            <select className="form-select form-control aiz-selectpicker mb-2 mb-md-0" value={item?.type} aria-label="Default select example" name='type' onChange={(e) => { onChangeHandler(e, item.language_id) }} required>
                                <option value={0}>Physical</option>
                                <option value={1}>Digital</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Banner</label>
                    <div className="col-md-9">
                        <div>
                            {item?.banner?.url && <img src={item?.banner?.url} style={{ width: "100px", height: "100px" }} />}
                            <div className="input-group" data-type="image">
                                <div className="input-group-prepend">
                                    <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                </div>
                                <div className="form-control file-amount">
                                    <input type="file" name="banner" className="selected-files" onChange={(e) => { onChangeHandler(e, item.language_id, 'img') }} />
                                </div>
                            </div>
                        </div>


                        <div className="file-preview box sm">
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Icon </label>
                    <div className="col-md-9">
                        <div>
                            {item?.icon?.url && <img src={item?.icon?.url} style={{ width: "100px", height: "100px" }} />}
                            <div className="input-group" data-type="image">
                                <div className="input-group-prepend">
                                    <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                </div>
                                <div className="form-control file-amount">
                                    <input type="file" name="icon" className="selected-files" onChange={(e) => { onChangeHandler(e, item.language_id, 'imgicon') }} />
                                </div>
                            </div>
                        </div>
                        <div className="file-preview box sm">
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Video Link</label>
                    <div className="col-md-9">
                        <input type="text" className="form-control" name="video_link" value={item?.video_link} placeholder="Video Link" onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Meta Title</label>
                    <div className="col-md-9">
                        <input type="text" className="form-control" name="meta_title" value={item?.meta_title} placeholder="Meta Title" onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                    </div>
                </div>
                {i == 0 && <div className="form-group row">
                    <label className="col-md-3 col-form-label">Slug *</label>
                    <div className="col-md-9">
                        <input type="text" className="form-control" name="slug" value={item?.slug} placeholder="Slug" onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                    </div>
                </div>
                }
                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Meta Description</label>
                    <div className="col-md-9">
                        <textarea name="meta_description" rows={5} className="form-control" value={item?.meta_description} onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                    </div>
                </div>
                {idShow == '652918c6deec37bc9005abe3' && <div className="form-group row">
                    <ProductDescriptionWrapper />
                    <label className="col-md-3 col-form-label"></label>
                    <div className="col-md-9">
                        <div key={`default-checkbox`} className="mb-3">
                            <Form.Check
                                onClick={(e) => { onChangeHandlesr(item.language_id) }}
                                type={'checkbox'}
                                id={`default-checkbox`}
                                label={`Click Here For save Description`}
                            />

                        </div>
                    </div>
                </div>}


                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Meta Keyword</label>
                    <div className="col-md-9">
                        <textarea name="meta_keyword" rows={5} className="form-control" value={item?.meta_keyword} onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Commission Rate</label>
                    <div className="col-md-9 input-group">
                        <input type="number" lang="en" min={0} step="0.01" placeholder="Commission Rate" value={item?.commision_rate} id="commision_rate" name="commision_rate" className="form-control" onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                        <div className="input-group-append">
                            <span className="input-group-text">%</span>
                        </div>
                    </div>
                </div>

                {/* <div className="form-group row">
                    <label className="col-md-3 col-form-label">Featured</label>
                    <div className="col-md-9">
                        <Form.Select aria-label="Default select example" name='featured' className='form-control' onChange={(e) => { onChangeHandler(e, item.language_id) }} required>
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                </div> */}

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Level</label>
                    <div className="col-md-9">
                        <input type="number" className="form-control" name="level" placeholder="level" value={item?.level} onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Top</label>
                    <div className="col-md-9">
                        <select className="form-select" name='top' value={item?.top} onChange={(e) => { onChangeHandler(e, item.language_id, 'bul') }} required>
                            <option value={false}>NO </option>
                            <option value={true}>YES </option>

                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Featured</label>
                    <div className="col-md-9">
                        <select className="form-select" name='featured' value={item?.featured} onChange={(e) => { onChangeHandler(e, item.language_id, 'bul') }} required>
                            <option value={false}>NO </option>
                            <option value={true}>YES </option>

                        </select>
                    </div>
                </div>

                {data.length == i + 1 ? <div className="form-group mb-3 text-right">
                    <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i - 1) }}>Prev</button>
                    <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={addNewAttributeData}>Save</button>
                </div>
                    :
                    <div className="form-group mb-3 text-right">
                        {i !== 0 && <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i - 1) }}>Prev</button>}
                        <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i + 1) }}>Next</button>
                    </div>
                }
            </form>
        </div>
    </div>
}
export default AddpriceRangeMultiLang