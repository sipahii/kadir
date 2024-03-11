import React, { useEffect, useState } from 'react'
import { useGetBasicAffiliateQuery, useUpdateCategoryWiseAffilliateMutation } from '../all-products/allproductsApi/allProductsApi';
import { ToastContainer, toast } from 'react-toastify';

function SharingAffiliateCategoryWise() {
    const [inputval, setInputval] = useState({
        status: null
    });
    const [categoryWisestatusD, setCategoryWiseStatusD] = useState()

    const { data } = useGetBasicAffiliateQuery();
    useEffect(() => {
        const obj = { ...data }
        if (data) {
            setInputval(obj[0]?.category_sharing_affiliate)
            setCategoryWiseStatusD(obj[0]?.category_sharing_affiliate.status)
        }
    }, [data]);

    const onChangeHandler = (e) => {
        setCategoryWiseStatusD(!categoryWisestatusD)
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    const [updateCategoryWiseAffilliate, response] = useUpdateCategoryWiseAffilliateMutation();

    const submitUpdateCategoryWiseAffiliate = (e) => {
        e.preventDefault();
        const abc = { status: categoryWisestatusD }
        updateCategoryWiseAffilliate({ category_sharing_affiliate: abc })
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("CategoryWise Sharing Affiliate Updated Successfully !", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("CategoryWise Sharing Affiliate not Updated !", {
            position: "top-center"
        })
    }

    useEffect(() => {
        if (response.isSuccess === true) {
            toastSuccessMessage()
        };
    }, [response]);

    useEffect(() => {
        if (response.isError === true) {
            toastErrorMessage()
        };
    }, [response])

    return (
        <>
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h3 className="mb-0 h6">
                            Product Sharing Affiliate (Category Wise)
                        </h3>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" onSubmit={submitUpdateCategoryWiseAffiliate}>
                            <div className="form-group row">
                                <div className="col-lg-4">
                                    <label className="control-label">Status</label>
                                </div>
                                <div className="col-lg-8">
                                    <label className="aiz-switch aiz-switch-success mb-0">
                                        <input
                                            defaultValue={1}
                                            name="status"
                                            type="checkbox"
                                            checked={categoryWisestatusD}
                                            onChange={onChangeHandler}
                                        />
                                        <span className="slider round" />
                                    </label>
                                </div>
                            </div>
                            <input
                                type="hidden"
                                name="type"
                                defaultValue="category_wise_affiliate"
                            />
                            <div className="form-group row">
                                <div className="col-lg-5">
                                    <input
                                        type="hidden"
                                        name="categories_id_1"
                                        defaultValue={1}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Fertilizer"
                                        readOnly
                                        fdprocessedid="ruq1sb"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        className="form-control"
                                        name="commison_amounts_1"
                                        defaultValue={0}
                                        fdprocessedid="oex06f"
                                    />
                                </div>
                                <div className="col-md-3">

                                    <select className="form-select  form-control aiz-" aria-label="Default select example">
                                        <option selected>$</option>
                                        <option value="1">%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-5">
                                    <input
                                        type="hidden"
                                        name="categories_id_2"
                                        defaultValue={2}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Specialty Fertilizer"
                                        readOnly
                                        fdprocessedid="paoj7j"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        className="form-control"
                                        name="commison_amounts_2"
                                        defaultValue={0}
                                        fdprocessedid="uesgjo"
                                    />
                                </div>
                                <div className="col-md-3">

                                    <select className="form-select  form-control aiz-" aria-label="Default select example">
                                        <option selected>$</option>
                                        <option value="1">%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-5">
                                    <input
                                        type="hidden"
                                        name="categories_id_3"
                                        defaultValue={3}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Agro Chemicals"
                                        readOnly
                                        fdprocessedid="t2x6c5"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        className="form-control"
                                        name="commison_amounts_3"
                                        defaultValue={0}
                                        fdprocessedid="qf5vc"
                                    />
                                </div>
                                <div className="col-md-3">

                                    <select className="form-select  form-control aiz-" aria-label="Default select example">
                                        <option >$</option>
                                        <option value="1">%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-5">
                                    <input
                                        type="hidden"
                                        name="categories_id_4"
                                        defaultValue={4}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Tools & Equipments"
                                        readOnly
                                        fdprocessedid="qvszk"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        className="form-control"
                                        name="commison_amounts_4"
                                        defaultValue={0}
                                        fdprocessedid="oikrbpe"
                                    />
                                </div>
                                <div className="col-md-3">

                                    <select className="form-select  form-control aiz-" aria-label="Default select example">
                                        <option >$</option>
                                        <option value="1">%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-5">
                                    <input
                                        type="hidden"
                                        name="categories_id_5"
                                        defaultValue={5}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Seeds"
                                        readOnly
                                        fdprocessedid="kxh8xb"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        className="form-control"
                                        name="commison_amounts_5"
                                        defaultValue={0}
                                        fdprocessedid="inyp0a"
                                    />
                                </div>
                                <div className="col-md-3">

                                    <select className="form-select  form-control aiz-" aria-label="Default select example">
                                        <option >$</option>
                                        <option value="1">%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-5">
                                    <input
                                        type="hidden"
                                        name="categories_id_6"
                                        defaultValue={6}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Polymer Polyolefin"
                                        readOnly
                                        fdprocessedid="m9gvb"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        className="form-control"
                                        name="commison_amounts_6"
                                        defaultValue={0}
                                        fdprocessedid="2pa0hj"
                                    />
                                </div>
                                <div className="col-md-3">

                                    <select className="form-select  form-control aiz-" aria-label="Default select example">
                                        <option >$</option>
                                        <option value="1">%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-5">
                                    <input
                                        type="hidden"
                                        name="categories_id_7"
                                        defaultValue={7}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Insecticide"
                                        readOnly
                                        fdprocessedid="hctdj1h"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        className="form-control"
                                        name="commison_amounts_7"
                                        defaultValue={0}
                                        fdprocessedid="kplmpg"
                                    />
                                </div>
                                <div className="col-md-3">

                                    <select className="form-select  form-control aiz-" aria-label="Default select example">
                                        <option >$</option>
                                        <option value="1">%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-5">
                                    <input
                                        type="hidden"
                                        name="categories_id_8"
                                        defaultValue={8}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Straight Fertilizer"
                                        readOnly
                                        fdprocessedid="zmqv4"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        className="form-control"
                                        name="commison_amounts_8"
                                        defaultValue={0}
                                        fdprocessedid="kh9uw8"
                                    />
                                </div>
                                <div className="col-md-3">

                                    <select className="form-select  form-control aiz-" aria-label="Default select example">
                                        <option >$</option>
                                        <option value="1">%</option>
                                    </select>                      </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-5">
                                    <input
                                        type="hidden"
                                        name="categories_id_9"
                                        defaultValue={9}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Foliar Fertilizer"
                                        readOnly
                                        fdprocessedid="n8xene"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        className="form-control"
                                        name="commison_amounts_9"
                                        defaultValue={0}
                                        fdprocessedid="098f3g"
                                    />
                                </div>
                                <div className="col-md-3">

                                    <select className="form-select  form-control aiz-" aria-label="Default select example">
                                        <option >$</option>
                                        <option value="1">%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-5">
                                    <input
                                        type="hidden"
                                        name="categories_id_10"
                                        defaultValue={10}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Water Soluble Fertilizer"
                                        readOnly
                                        fdprocessedid="est5g8"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        className="form-control"
                                        name="commison_amounts_10"
                                        defaultValue={0}
                                        fdprocessedid="x288z"
                                    />
                                </div>
                                <div className="col-md-3">

                                    <select className="form-select  form-control aiz-" aria-label="Default select example">
                                        <option >$</option>
                                        <option value="1">%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-5">
                                    <input
                                        type="hidden"
                                        name="categories_id_11"
                                        defaultValue={11}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Blended Fartilizer"
                                        readOnly
                                        fdprocessedid="96be5"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        className="form-control"
                                        name="commison_amounts_11"
                                        defaultValue={0}
                                        fdprocessedid="6fkpa9"
                                    />
                                </div>
                                <div className="col-md-3">

                                    <select className="form-select  form-control aiz-" aria-label="Default select example">
                                        <option >$</option>
                                        <option value="1">%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-5">
                                    <input
                                        type="hidden"
                                        name="categories_id_12"
                                        defaultValue={12}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Enhanced Granular Blends"
                                        readOnly
                                        fdprocessedid="66lx9"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        className="form-control"
                                        name="commison_amounts_12"
                                        defaultValue={0}
                                        fdprocessedid="mgwmqze"
                                    />
                                </div>
                                <div className="col-md-3">

                                    <select className="form-select  form-control aiz-" aria-label="Default select example">
                                        <option >$</option>
                                        <option value="1">%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-5">
                                    <input
                                        type="hidden"
                                        name="categories_id_13"
                                        defaultValue={13}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Herbicide"
                                        readOnly
                                        fdprocessedid="4cxklm"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        className="form-control"
                                        name="commison_amounts_13"
                                        defaultValue={0}
                                        fdprocessedid="9a5v1"
                                    />
                                </div>
                                <div className="col-md-3">

                                    <select className="form-select  form-control aiz-" aria-label="Default select example">
                                        <option >$</option>
                                        <option value="1">%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-5">
                                    <input
                                        type="hidden"
                                        name="categories_id_14"
                                        defaultValue={14}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Animal DIP"
                                        readOnly
                                        fdprocessedid="66eku"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        className="form-control"
                                        name="commison_amounts_14"
                                        defaultValue={0}
                                        fdprocessedid="6j69u"
                                    />
                                </div>
                                <div className="col-md-3">

                                    <select className="form-select  form-control aiz-" aria-label="Default select example">
                                        <option >$</option>
                                        <option value="1">%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-5">
                                    <input
                                        type="hidden"
                                        name="categories_id_15"
                                        defaultValue={15}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Fumigant"
                                        readOnly
                                        fdprocessedid="j1fprd"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        className="form-control"
                                        name="commison_amounts_15"
                                        defaultValue={0}
                                        fdprocessedid="5iowa4"
                                    />
                                </div>
                                <div className="col-md-3">

                                    <select className="form-select  form-control aiz-" aria-label="Default select example">
                                        <option >$</option>
                                        <option value="1">%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-5">
                                    <input
                                        type="hidden"
                                        name="categories_id_16"
                                        defaultValue={16}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Fungicide"
                                        readOnly
                                        fdprocessedid="9onose"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        className="form-control"
                                        name="commison_amounts_16"
                                        defaultValue={0}
                                        fdprocessedid="zu4bi"
                                    />
                                </div>
                                <div className="col-md-3">

                                    <select className="form-select  form-control aiz-" aria-label="Default select example">
                                        <option >$</option>
                                        <option value="1">%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-5">
                                    <input
                                        type="hidden"
                                        name="categories_id_17"
                                        defaultValue={17}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Nematode"
                                        readOnly
                                        fdprocessedid="9h40hb"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        className="form-control"
                                        name="commison_amounts_17"
                                        defaultValue={0}
                                        fdprocessedid="jb2e0g"
                                    />
                                </div>
                                <div className="col-md-3">

                                    <select className="form-select  form-control aiz-" aria-label="Default select example">
                                        <option >$</option>
                                        <option value="1">%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-5">
                                    <input
                                        type="hidden"
                                        name="categories_id_18"
                                        defaultValue={18}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Plant Regulator"
                                        readOnly
                                        fdprocessedid="az3sue"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        className="form-control"
                                        name="commison_amounts_18"
                                        defaultValue={0}
                                        fdprocessedid="1go3ir"
                                    />
                                </div>
                                <div className="col-md-3">


                                    <select className="form-select  form-control aiz-" aria-label="Default select example">
                                        <option >$</option>
                                        <option value="1">%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-5">
                                    <input
                                        type="hidden"
                                        name="categories_id_19"
                                        defaultValue={19}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Inoculant"
                                        readOnly
                                        fdprocessedid="zhf3fe"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        className="form-control"
                                        name="commison_amounts_19"
                                        defaultValue={0}
                                        fdprocessedid="to9bdf"
                                    />
                                </div>
                                <div className="col-md-3">

                                    <select className="form-select  form-control aiz-" aria-label="Default select example">
                                        <option >$</option>
                                        <option value="1">%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-5">
                                    <input
                                        type="hidden"
                                        name="categories_id_20"
                                        defaultValue={20}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Maize Seed"
                                        readOnly
                                        fdprocessedid="1ofaon"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        className="form-control"
                                        name="commison_amounts_20"
                                        defaultValue={0}
                                        fdprocessedid="wqvd9g"
                                    />
                                </div>
                                <div className="col-md-3">

                                    <select className="form-select  form-control aiz-" aria-label="Default select example">
                                        <option >$</option>
                                        <option value="1">%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-5">
                                    <input
                                        type="hidden"
                                        name="categories_id_21"
                                        defaultValue={21}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Vegetable Seed"
                                        readOnly
                                        fdprocessedid="ww3yil"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        className="form-control"
                                        name="commison_amounts_21"
                                        defaultValue={0}
                                        fdprocessedid="pl308"
                                    />
                                </div>
                                <div className="col-md-3">

                                    <select className="form-select  form-control aiz-" aria-label="Default select example">
                                        <option >$</option>
                                        <option value="1">%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-5">
                                    <input
                                        type="hidden"
                                        name="categories_id_22"
                                        defaultValue={22}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Soybean Seeds"
                                        readOnly
                                        fdprocessedid="1axss"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        className="form-control"
                                        name="commison_amounts_22"
                                        defaultValue={0}
                                        fdprocessedid="7kptd"
                                    />
                                </div>
                                <div className="col-md-3">

                                    <select className="form-select  form-control aiz-" aria-label="Default select example">
                                        <option >$</option>
                                        <option value="1">%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-5">
                                    <input
                                        type="hidden"
                                        name="categories_id_23"
                                        defaultValue={23}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="EIHL Others"
                                        readOnly
                                        fdprocessedid="drs92p"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        className="form-control"
                                        name="commison_amounts_23"
                                        defaultValue={0}
                                        fdprocessedid="yy7nf9"
                                    />
                                </div>
                                <div className="col-md-3">

                                    <select className="form-select  form-control aiz-" aria-label="Default select example">
                                        <option >$</option>
                                        <option value="1">%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-5">
                                    <input
                                        type="hidden"
                                        name="categories_id_24"
                                        defaultValue={24}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Animal Feed"
                                        readOnly
                                        fdprocessedid="nlbme"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        className="form-control"
                                        name="commison_amounts_24"
                                        defaultValue={0}
                                        fdprocessedid="yq3k8q"
                                    />
                                </div>
                                <div className="col-md-3">

                                    <select className="form-select  form-control aiz-" aria-label="Default select example">
                                        <option >$</option>
                                        <option value="1">%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button
                                    type="submit"
                                    className="btn btn-sm btn-primary"
                                    fdprocessedid="x1d8me"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default SharingAffiliateCategoryWise