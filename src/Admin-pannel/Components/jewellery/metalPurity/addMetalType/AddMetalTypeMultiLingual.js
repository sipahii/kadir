import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AddMetalTypeMultiLingual({ data, item, i, params, sendData, onChangeHandler, setValue, onChangeThumbnailImage, showImageD, setShowImageD }) {

    useEffect(() => {
        if (params?.uid) {
            setShowImageD(item?.mainImage_url)
        }
    }, [params?.uid]);

    const [selectCategoryData, setSelectCategoryData] = useState(null);

    const token = window.localStorage.getItem('adminToken');

    const getShapeSelectData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/priceType`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setSelectCategoryData(res.data)
    };

    useEffect(() => {
        getShapeSelectData()
    }, []);

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">{params?.uid ? 'Update' : 'Add'} Metal Purity</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6">{params?.uid ? 'Update' : 'Add'} Metal Purity({item.lable})</h5>
                        </div>
                        <div className="card-body">

                            <section className="form-section">
                                <div className="row">
                                    {/* <form action=""> */}
                                    <div className="col-lg-4">
                                        <label className="form-check-label mb-2" htmlFor="flexRadioDefault1">
                                            Name
                                        </label>
                                        <div>
                                            <input type="text" name="name" value={item.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name*" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="form-check-label mb-2" htmlFor="flexRadioDefault1">
                                            Code
                                        </label>
                                        <div>
                                            <input type="text" name="code" value={item.code} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Code*" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <label className="form-check-label mb-2" htmlFor="flexRadioDefault1">
                                            Description
                                        </label>
                                        <textarea id="w3review" className="form-control" name="description" value={item?.description} placeholder='Description' rows={3} cols={''} onChange={(e) => { onChangeHandler(e, item.language_id) }} />
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
                                            Slug
                                        </label>
                                        <div>
                                            <input type="text" name="slug" value={item?.slug} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="slug" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                        </div>
                                    </div>


                                    <div className="col-lg-4 mt-3">
                                        <label className="form-check-label mb-2" htmlFor="flexRadioDefault1">
                                            Select PriceType
                                        </label>
                                        <select className="form-select" name="parent_id" value={item?.parent_id} aria-label="Default select example" onChange={(e) => { onChangeHandler(e, item.language_id) }}>
                                            <option selected>Select PriceType</option>
                                            {selectCategoryData && selectCategoryData.map((item, i) => {
                                                return <option value={item?._id} key={i}>{item?.name}</option>
                                            })}
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

                                    <div className="col-lg-4 mt-3">
                                        <label className="form-check-label mb-2" htmlFor="flexRadioDefault1">
                                            Active
                                        </label>
                                        <div>
                                            <select className="form-select" name='isActive' value={item?.isActive} aria-label="Default select example" onChange={(e) => { onChangeHandler(e, item.language_id) }}>
                                                <option selected>Is Active</option>
                                                <option value={true}>Yes</option>
                                                <option value={false}>No</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mt-3" style={{ display: 'flex', justifyContent: 'end' }}>
                                        {data.length == i + 1 ? <div className="form-group mb-3 text-right">
                                            <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={sendData}>{params?.uid ? 'Update' : 'Save'}</button>
                                        </div>
                                            :
                                            <div className="form-group mb-3 text-right">
                                                {i !== 0 && <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i - 1) }}>Prev</button>}
                                                <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i + 1) }}>Next</button>
                                                {/* <button className="btn btn-danger ms-2">Cancel</button> */}
                                            </div>
                                        }

                                    </div>
                                    {/* </form> */}
                                </div>
                            </section>
                            <div className="aiz-pagination">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
            </div>
        </>
    )
}

export default AddMetalTypeMultiLingual