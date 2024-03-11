import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Multiselect from "multiselect-react-dropdown";

function AddCollectionManagmentMultiLingual({ data, item, i, params, onChangeHandler, setValue, bringImage, bringImage1, bringImage2, bringImage3, bringFinalCaetgD, bringFinalProductsD, onchengePhotoHandel, setLoop, addNewAttributeData }) {

    const [categ, setCateg] = useState([]);
    const [finalCatD, setFinalCatD] = useState();

    const [productsD, setProductsD] = useState([]);
    const [finalProductsD, setFinalProductsD] = useState([]);

    const [image, setImage] = useState(null)
    const [image1, setImage1] = useState(null)
    const [image2, setImage2] = useState(null)
    const [image3, setImage3] = useState(null)

    const token = window.localStorage.getItem('adminToken');



    const getCatData = async () => {
        const getCategoryName = []
        const reqData = await axios.get("https://onlineparttimejobs.in/api/category/admin", {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id })
        };
        if (getCategoryName.length) {
            setCateg(getCategoryName);
        }
    };

    const getProductsData = async () => {
        const getCategoryName = []
        const reqData = await axios.get("https://onlineparttimejobs.in/api/product/admin", {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id })
        };
        if (getCategoryName.length) {
            setProductsD(getCategoryName);
        }
    };

    useEffect(() => {
        getCatData();
        getProductsData();
    }, []);


    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
            bringImage(URL.createObjectURL(event.target.files[0]))
        }
    }
    const onImageChange1 = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage1(URL.createObjectURL(event.target.files[0]));
            bringImage1(URL.createObjectURL(event.target.files[0]))
        }
    }
    const onImageChange2 = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage2(URL.createObjectURL(event.target.files[0]));
            bringImage2(URL.createObjectURL(event.target.files[0]))
        }
    }
    const onImageChange3 = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage3(URL.createObjectURL(event.target.files[0]));
            bringImage3(URL.createObjectURL(event.target.files[0]))
        }
    };

    bringFinalCaetgD(finalCatD);
    bringFinalProductsD(finalProductsD);





    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card-header">
                        <h5>{params?.id ? 'Update' : 'Add'} Collection Management ({item?.lable})</h5>
                    </div>
                    <div className="card-body">

                        <section className="form-section">
                            <div className="row">

                                <div className="col-lg-4 mb-2">
                                    <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Name <span style={{ color: 'red' }}>*</span></label>
                                    <div>
                                        <input type="text" name="name" value={item?.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name*" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                    </div>
                                </div>

                                <div className="col-lg-4 mb-2">
                                    <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Code <span style={{ color: 'red' }}>*</span></label>
                                    <div>
                                        <input type="text" name="code" value={item?.code} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Code*" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                    </div>
                                </div>


                                <div className="col-lg-4 mb-2">
                                    <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Category <span style={{ color: 'red' }}>*</span></label>
                                    <Multiselect
                                        isObject={true}
                                        displayValue="name"
                                        options={categ}
                                        showCheckbox
                                        selectedValues={[]}
                                        onRemove={(selectedCat) => {
                                            const selectedIds = selectedCat.map((cat) => {
                                                return cat._id
                                            })
                                            setFinalCatD(selectedIds)
                                        }}
                                        onSelect={(selectedCat) => {
                                            const selectedIds = selectedCat.map((cat) => {
                                                return cat._id
                                            })
                                            setFinalCatD(selectedIds)
                                        }}
                                    />
                                </div>


                                <div className="col-lg-4 mb-2">
                                    <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Select Products</label>
                                    <Multiselect
                                        isObject={true}
                                        displayValue="name"
                                        options={productsD}
                                        showCheckbox
                                        selectedValues={[]}
                                        onRemove={(selectedCat) => {
                                            const selectedIds = selectedCat.map((cat) => {
                                                return cat._id
                                            })
                                            setFinalProductsD(selectedIds)
                                        }}
                                        onSelect={(selectedCat) => {
                                            const selectedIds = selectedCat.map((cat) => {
                                                return cat._id
                                            })
                                            setFinalProductsD(selectedIds)
                                        }}
                                    />
                                </div>

                                <div className="col-lg-4 mb-2">
                                    <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Sorting No<span style={{ color: 'red' }}>*</span></label>
                                    <div>
                                        <input type="text" name="sort_no" value={item?.sort_no} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="sort_no*" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                    </div>
                                </div>

                                <div className="col-lg-4 mb-2">
                                    <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Meta Title<span style={{ color: 'red' }}>*</span></label>
                                    <div>
                                        <input type="text" name="meta_title" value={item?.meta_title} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="meta_title*" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                    </div>
                                </div>

                                <div className="col-lg-4 mb-2">
                                    <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Meta KeyWord<span style={{ color: 'red' }}>*</span></label>
                                    <div>
                                        <input type="text" name="meta_keyword" value={item?.meta_keyword} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="meta_keyword*" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                    </div>
                                </div>

                                <div className="col-lg-4 mb-2">
                                    <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Meta Description<span style={{ color: 'red' }}>*</span></label>
                                    <div>
                                        <input type="text" name="meta_description" value={item?.meta_description} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="meta_description*" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                    </div>
                                </div>

                                <div className="col-lg-4 mb-2">
                                    <label className="form-check-label mb-2" htmlFor="flexRadioDefault1">
                                        Description
                                    </label>
                                    <textarea id="w3review" className="form-control" name="description" value={item?.description} placeholder='Description' rows={3} cols={''} onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                </div>

                                <div className="col-lg-4 mb-2">
                                    <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Header Image-Web<span style={{ color: 'red' }}>*</span></label>
                                    <div>
                                        <input type="file" name="header_web_img" className="form-control" aria-describedby="emailHelp" onChange={(e) => { onchengePhotoHandel(e, item.language_id) }} />
                                        <img src={image} style={{ width: '200px', height: '100px', objectFit: 'cover', margin: '10px', border: '1px solid black' }} />
                                    </div>
                                </div>


                                <div className="col-lg-4 mb-2">
                                    <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Banner Image-Web<span style={{ color: 'red' }}>*</span></label>
                                    <div>
                                        <input type="file" name="banner_img" className="form-control" aria-describedby="emailHelp" onChange={(e) => { onchengePhotoHandel(e, item.language_id) }} />
                                        <img src={image1} style={{ width: '200px', height: '100px', objectFit: 'cover', margin: '10px', border: '1px solid black' }} />
                                    </div>
                                </div>

                                <div className="col-lg-4 mb-2">
                                    <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Banner Image-Mobile<span style={{ color: 'red' }}>*</span></label>
                                    <div>
                                        <input type="file" name="header_mob_img" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name*" onChange={(e) => { onchengePhotoHandel(e, item.language_id) }} />
                                        <img src={image2} style={{ width: '200px', height: '100px', objectFit: 'cover', margin: '10px', border: '1px solid black' }} />
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-2">
                                    <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Menu Logo<span style={{ color: 'red' }}>*</span></label>
                                    <div>
                                        <input type="file" name="menu_log" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name*" onChange={(e) => { onchengePhotoHandel(e, item.language_id) }} />
                                        <img src={image3} style={{ width: '200px', height: '100px', objectFit: 'cover', margin: '10px', border: '1px solid black' }} />
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Is Active<span style={{ color: 'red' }}>*</span></label>
                                    <select className="form-select" name="isActive" value={item?.isActive} aria-label="Default select example" onChange={(e) => { onChangeHandler(e, item.language_id) }}>
                                        <option selected>IS Active</option>
                                        <option value={true}>Yes</option>
                                        <option value={false}>No</option>
                                    </select>
                                </div>

                                <div className="col-lg-12 mt-3">
                                    {data.length == i + 1 ? <div className="form-group mb-3 text-right">
                                        <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setLoop(i, 'pre', item.language_id) }}>Prev</button>
                                        <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={(e) => { addNewAttributeData(e, item.language_id) }}>{params?.uid ? 'Update' : 'Save'}</button>
                                    </div>
                                        :
                                        <div className="form-group mb-3 text-right">
                                            {i !== 0 && <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setLoop(i, 'pre', item.language_id) }}>Prev</button>}
                                            <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setLoop(i, 'nex', item.language_id) }}>Next</button>
                                        </div>
                                    }

                                </div>

                            </div>
                        </section>

                    </div>

                </div>

            </div>
        </>
    )
}

export default AddCollectionManagmentMultiLingual