import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AddThemeJewelMultiLang({ data, item, i, params, sendData, onChangeHandler, setValue, onChangeThumbnailImage, showImageD, setShowImageD, onChangeHandleExcel }) {

    const [selectShapeData, setSelectShapeData] = useState(null);
    const [selectCountryData, setSelectCountryShapeData] = useState(null);

    const token = window.localStorage.getItem('adminToken');

    const getCountrySelectData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/country/admin`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setSelectCountryShapeData(res.data)
    };
    const getShapeSelectData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/shape`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setSelectShapeData(res.data)
    };

    useEffect(() => {
        getCountrySelectData();
        getShapeSelectData();
    }, []);

    useEffect(() => {
        if (params?.uid) {
            setShowImageD(item?.mainImage_url)
        }
    }, [params?.uid]);

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '3px' }}>
                            <div className="">
                                <h1 className="h3">{params?.uid ? 'Update' : "Add"} Theme</h1>
                            </div>
                            <div className=''>
                                <a href="https://onlineparttimejobs.in/api/bulkimport/productFormat" download>
                                    <button className="btn btn-info">Download Sample</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5>{params?.uid ? 'Update' : 'Add'} Theme ({item?.lable})</h5>
                        </div>
                        <div className="card-body">

                            <section className="form-section">
                                <div className="row">

                                    <div className="col-lg-4">
                                        <label className="form-check-label mb-2" htmlFor="flexRadioDefault1">
                                            Name
                                        </label>
                                        <div>
                                            <input type="text" name="name" value={item?.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tittle*" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="form-check-label mb-2" htmlFor="flexRadioDefault1">
                                            Code
                                        </label>
                                        <div>
                                            <input type="text" name="code" value={item?.code} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Code" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="form-check-label mb-2" htmlFor="flexRadioDefault1">
                                            Select Country
                                        </label>
                                        <select className="form-control form-select" name="country_id" value={item?.country_id} aria-label="Default select example" onChange={(e) => { onChangeHandler(e, item.language_id) }}>
                                            <option selected>Select Country</option>
                                            {selectCountryData && selectCountryData.map((item, i) => {
                                                return <option value={item?._id} key={i}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>


                                    <div className="col-lg-4 mt-3">
                                        <label className="form-check-label mb-2" htmlFor="flexRadioDefault1">
                                            Select Shape
                                        </label>
                                        <select className="form-control form-select" name="shape_id" value={item?.shape_id} aria-label="Default select example" onChange={(e) => { onChangeHandler(e, item.language_id) }}>
                                            <option selected>Select Shape</option>
                                            {selectShapeData && selectShapeData.map((item, i) => {
                                                return <option value={item?._id} key={i}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>






                                    <div className="col-lg-4 mt-3">
                                        <label className="form-check-label mb-2" htmlFor="flexRadioDefault1">
                                            Sorting No
                                        </label>
                                        <div>
                                            <input type="number" name="sort_no" value={item?.sort_no} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="sorting_no" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                        </div>
                                    </div>

                                    <div className="col-lg-4 mt-3">
                                        <label className="form-check-label mb-2" htmlFor="flexRadioDefault1">
                                            Meta Title
                                        </label>
                                        <div>
                                            <input type="text" name="meta_title" value={item?.meta_title} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="meta_title" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                        </div>
                                    </div>

                                    <div className="col-lg-4 mt-3">
                                        <label className="form-check-label mb-2" htmlFor="flexRadioDefault1">
                                            Meta Keyword
                                        </label>
                                        <div>
                                            <input type="text" name="meta_keyword" value={item?.meta_keyword} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="meta_keyword" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                        </div>
                                    </div>


                                    <div className="col-lg-4 mt-3">
                                        <label className="form-check-label mb-2" htmlFor="flexRadioDefault1">
                                            Meta Description
                                        </label>
                                        <textarea id="w3review" className="form-control" name="meta_description" value={item?.meta_description} placeholder='Meta Description' rows={3} cols={''} onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                    </div>
                                    <div className="col-lg-4 mt-3">
                                        <label className="form-check-label mb-2" htmlFor="flexRadioDefault1">
                                            Description
                                        </label>
                                        <textarea id="w3review" className="form-control" name="description" value={item?.description} placeholder='Description' rows={3} cols={''} onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                    </div>

                                    <div className="col-lg-4 mt-3">
                                        <label className="form-check-label mb-2" htmlFor="flexRadioDefault1">
                                            Slug
                                        </label>
                                        <div>
                                            <input type="text" name="slug" value={item?.slug} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="slug" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                        </div>
                                    </div>

                                    {/* <div className="col-lg-12 mt-4">
                                        <label className='ms-3' style={{ fontSize: '14px' }}>Upload Excel<span style={{ color: 'red' }}>*</span></label>
                                        <input type="file" name="excel" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { onChangeHandleExcel(e, item.language_id) }} />
                                    </div> */}


                                    <div className="col-lg-6 mt-4">
                                        <label className='ms-3' style={{ fontSize: '14px' }}>Active</label>
                                        <select className="form-select form-control" name="isActive" value={item?.isActive} aria-label="Default select example" onChange={(e) => { onChangeHandler(e, item.language_id) }}>
                                            <option selected>IS Active</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                        <label className='ms-3' style={{ fontSize: '14px' }}>Default</label>
                                        <select className="form-select form-control" name="default" value={item?.default} aria-label="Default select example" onChange={(e) => { onChangeHandler(e, item.language_id) }}>
                                            <option selected>IS Default</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>

                                    <div className="col-lg-4 mt-3">
                                        <label className="form-check-label mb-2" htmlFor="flexRadioDefault1">
                                            Icon
                                        </label>
                                        <div>
                                            <input type="file" name="thumbnail_image" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Image*" onChange={(e) => { onChangeThumbnailImage(e, item.language_id) }} />
                                        </div>

                                        <div className='col-lg-12'>
                                            <img src={showImageD?.url} style={{ width: '300px', height: '200px', objectFit: 'cover', marginTop: '10px', border: '1px solid black' }} />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mt-3" style={{ display: 'flex', justifyContent: 'end' }}>
                                        {data.length == i + 1 ? <div className="form-group text-right mt-4">
                                            <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={sendData}>Save</button>
                                            <button className="btn btn-danger ms-2">Cancel</button>
                                        </div>
                                            :
                                            <div className="form-group text-right mt-4">
                                                {i !== 0 && <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i - 1) }}>Prev</button>}
                                                <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i + 1) }}>Next</button>
                                            </div>
                                        }
                                    </div>

                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddThemeJewelMultiLang