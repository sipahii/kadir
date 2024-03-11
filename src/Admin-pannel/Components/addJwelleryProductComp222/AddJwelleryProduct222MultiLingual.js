import React from 'react';
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { useGetSellersQuery } from "../../Components/all-products/allproductsApi/allProductsApi";
import Multiselect from "multiselect-react-dropdown";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";


function AddJwelleryProduct222MultiLingual({ data, item, i, onChangeHandler, params, setValue, bringCategoryType, bringCategory, bringFinalCuratedBy, bringLength, bringSubCategory, bringStyle, bringCollection, bringLabourChargeType, bringOccassion, bringSize, bringDefaultSize, bringShopFor, bringMaterial, bringGemstone, bringTheme, bringLookTag, bringWearTag, bringProductTag, bringMetalData, bringStoneData, bringDiamondData, bringPairProductsData, bringProductSetsData, setLoop, addNewAttributeData, countryData, onchengePhotoHandel, onChangeHandlePrice, showImageD, setShowImageD, showGallaryImageD, imageLoading, imageLoading2 }) {

    // console.log('showGallaryImageD---', showGallaryImageD)

    const [show, setShow] = useState(false)
    const [showPriceSection, setShowPriceSection] = useState(false)
    const [sellerD, setSellerD] = useState(false)

    const [categoryType, setCategoryType] = useState([]);
    const [finalcategoryType, setcategoryFinalType] = useState([]);
    bringCategoryType(finalcategoryType)

    const [categ, setCateg] = useState([]);
    const [finalCatD, setFinalCatD] = useState();
    bringCategory(finalCatD)

    const [curatedByD, setCuratedByD] = useState([]);
    const [finalCuratedByD, setFinalCuratedBy] = useState();
    bringFinalCuratedBy(finalCuratedByD)

    const [lengthD, setLengthD] = useState([]);
    const [finalLengthD, setFinalLengthD] = useState();
    bringLength(finalLengthD)



    const [subcategory, setSubCategory] = useState([]);
    const [finalSubCategoryD, setFinalSubCategoryD] = useState();
    bringSubCategory(finalSubCategoryD)

    const [style, setSTyle] = useState([]);
    const [finalStyleD, setFinalStyleD] = useState();
    bringStyle(finalStyleD)

    const [collection, setCollection] = useState([]);
    const [finalCollectionD, setFinalCollectionD] = useState();
    bringCollection(finalCollectionD)

    const [labourChargeType, setLabourChargeType] = useState([]);
    const [finalLabourChargeTypeD, setFinalLabourChargeTypeD] = useState();
    bringLabourChargeType(finalLabourChargeTypeD)

    const [occassion, setOccassion] = useState([]);
    const [finalOccassionD, setFinalOccassionD] = useState();
    bringOccassion(finalOccassionD)

    const [size, setSize] = useState([]);
    const [finalSizeD, setFinalSizeD] = useState();
    bringSize(finalSizeD)

    const [defaultSize, setDefaultSize] = useState([]);
    const [finalDefaultSizeD, setFinalDefaultSizeD] = useState();
    bringDefaultSize(finalDefaultSizeD)

    const [shopFor, setShopFor] = useState([]);
    const [finalShopForD, setFinalShopForD] = useState();
    bringShopFor(finalShopForD)

    const [material, setMaterial] = useState([]);
    const [finalMaterialD, setFinalMaterialD] = useState();
    bringMaterial(finalMaterialD)

    const [gemstone, setGemstone] = useState([]);
    const [finalGemstoneD, setFinalGemstoneD] = useState();
    bringGemstone(finalGemstoneD)

    const [theme, setTheme] = useState([]);
    const [finalThemeD, setFinalThemeD] = useState();
    bringTheme(finalThemeD)



    const [lookTag, setLooktag] = useState([]);
    const [finalLookTagD, setFinalLooktagD] = useState();
    bringLookTag(finalLookTagD)

    const [wearTag, setWeartag] = useState([]);
    const [finalWearTagD, setFinalWeartagD] = useState();
    bringWearTag(finalWearTagD)

    const [productTag, setProductTag] = useState([]);
    const [finalProductTagD, setFinalProductTagD] = useState();
    bringProductTag(finalProductTagD)

    const [pairProducts, setPairProducts] = useState([]);
    const [finalPairProductsD, setFinalPairProductsD] = useState();
    bringPairProductsData(finalPairProductsD)

    const [productsSets, setProductsSets] = useState([]);
    const [finalProductsSetsD, setFinalProductsSetsD] = useState();
    bringProductSetsData(finalProductsSetsD)

    const [priceType, setPriceType] = useState();
    const [metalPurityMetalTypeData, setMetalPurityMetalTypeData] = useState();
    const [shape, setShape] = useState();
    const [colorStone, setColorStone] = useState();
    const [quality, setQuality] = useState();
    const [sieves, setSieves] = useState();
    const [categoryListD, setCategoryListD] = useState();
    const [subCategoryListD, setSubCategoryListD] = useState();

    const token = window.localStorage.getItem('adminToken')

    const [spinn, setspinn] = useState(false)
    // const { data: sellerD } = useGetSellersQuery()

    const [metalRowData, setMetalRowData] = useState([{ priceType: '', metalPurity: '', metalType: '', netWeight: '', }]);
    bringMetalData(metalRowData);
    const [stoneRowData, setStoneRowData] = useState([{ shape: '', color: '', carat: '', pieces: '' }]);
    bringStoneData(stoneRowData);
    const [diamondRowData, setDiamondRowData] = useState([{ shape: '', sieves: '', carat: '', pieces: '' }]);
    bringDiamondData(diamondRowData);

    const handleAddMetal = () => {
        setMetalRowData([...metalRowData, { priceType: '', metalPurity: '', metalType: '', netWeight: '', }])
    };
    const handleChangeMetal = async (e, i) => {
        const { name, value } = e.target
        const onChnageVal = [...metalRowData]
        onChnageVal[i][name] = value
        setMetalRowData(onChnageVal)

        if (e.target.name == 'priceType') {
            const sendData = { language_id: item.language_id, ids: [value] }
            try {
                const res = await axios.post(`https://onlineparttimejobs.in/api/priceType/selected`, sendData, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                });
                setMetalPurityMetalTypeData(res.data)
            } catch (error) {
                alert('Not Post')
            }
        }
    };
    const handleDeleteMetal = (i) => {
        const deleteVal = [...metalRowData]
        deleteVal.splice(i, 1)
        setMetalRowData(deleteVal)
    };

    const handleAddStone = () => {
        setStoneRowData([...stoneRowData, { shape: '', color: '', carat: '', pieces: '' }])
    };
    const handleChangeStone = (e, i) => {
        const { name, value } = e.target
        const onChnageVal = [...stoneRowData]
        onChnageVal[i][name] = value
        setStoneRowData(onChnageVal)
    };
    const handleDeleteStone = (i) => {
        const deleteVal = [...stoneRowData]
        deleteVal.splice(i, 1)
        setStoneRowData(deleteVal)
    };

    const handleAddDiamond = () => {
        setDiamondRowData([...diamondRowData, { shape: '', sieves: '', carat: '', pieces: '' }])
    };
    const handleChangeDiamond = (e, i) => {
        const { name, value } = e.target
        const onChnageVal = [...diamondRowData]
        onChnageVal[i][name] = value
        setDiamondRowData(onChnageVal)
    };
    const handleDeleteDiamond = (i) => {
        const deleteVal = [...diamondRowData]
        deleteVal.splice(i, 1)
        setDiamondRowData(deleteVal)
    };


    const getCategoryTypeData = async () => {
        const getCategoryName = []
        const reqData = await axios.get(`https://onlineparttimejobs.in/api/categoryType/lang/${item.language_id}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
        };
        if (getCategoryName.length) {
            setCategoryType(getCategoryName);
        }
    };

    const getCatData = async () => {
        const getCategoryName = []
        const reqData = await axios.get("https://onlineparttimejobs.in/api/category/admin", {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });

        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
        };
        if (getCategoryName.length) {
            setCateg(getCategoryName);
        }
    };

    const getCuratedByData = async () => {
        const getCategoryName = []
        const reqData = await axios.get("https://onlineparttimejobs.in/api/curatedby", {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });

        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
        };
        if (getCategoryName.length) {
            setCuratedByD(getCategoryName);
        }
    };
    const getLengthData = async () => {
        const getCategoryName = []
        const reqData = await axios.get("https://onlineparttimejobs.in/api/length", {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });

        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
        };
        if (getCategoryName.length) {
            setLengthD(getCategoryName);
        }
    };

    const getSubCategoryData = async () => {
        const getCategoryName = []
        const reqData = await axios.get("https://onlineparttimejobs.in/api/categoryType", {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });

        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
        };
        if (getCategoryName.length) {
            setSubCategory(getCategoryName);
        }
    };
    const getStyleData = async () => {
        const getCategoryName = []
        const reqData = await axios.get(`https://onlineparttimejobs.in/api/style/lang/${item.language_id}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });

        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
        };
        if (getCategoryName.length) {
            setSTyle(getCategoryName);
        }
    };
    const getCollectionData = async () => {
        const getCategoryName = []
        const reqData = await axios.get(`https://onlineparttimejobs.in/api/collection/lang/${item.language_id}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });

        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
        };
        if (getCategoryName.length) {
            setCollection(getCategoryName);
        }
    };
    const getLabourChargeTpeData = async () => {
        const getCategoryName = []
        const reqData = await axios.get(`https://onlineparttimejobs.in/api/labourChargeType/lang/${item.language_id}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });

        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
        };
        if (getCategoryName.length) {
            setLabourChargeType(getCategoryName);
        }
    };
    const getOccassionData = async () => {
        const getCategoryName = []
        const reqData = await axios.get(`https://onlineparttimejobs.in/api/occasion`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });

        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
        };
        if (getCategoryName.length) {
            setOccassion(getCategoryName);
        }
    };
    const getSizeData = async () => {
        const getCategoryName = []
        const reqData = await axios.get(`https://onlineparttimejobs.in/api/ringsize`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
        };
        if (getCategoryName.length) {
            setSize(getCategoryName);
        }
    };
    const getDefaultSizeData = async () => {
        const getCategoryName = []
        const reqData = await axios.get("https://onlineparttimejobs.in/api/ringsize", {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });

        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
        };
        if (getCategoryName.length) {
            setDefaultSize(getCategoryName);
        }
    };
    const getShopForData = async () => {
        const getCategoryName = []
        const reqData = await axios.get(`https://onlineparttimejobs.in/api/shopForModule`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });

        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
        };
        if (getCategoryName.length) {
            setShopFor(getCategoryName);
        }
    };
    const getMaterialData = async () => {
        const getCategoryName = []
        const reqData = await axios.get(`https://onlineparttimejobs.in/api/material`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });

        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
        };
        if (getCategoryName.length) {
            setMaterial(getCategoryName);
        }
    };
    const getGemstoneData = async () => {
        const getCategoryName = []
        const reqData = await axios.get(`https://onlineparttimejobs.in/api/gemStone`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });

        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
        };
        if (getCategoryName.length) {
            setGemstone(getCategoryName);
        }
    };
    const getThemeData = async () => {
        const getCategoryName = []
        const reqData = await axios.get(`https://onlineparttimejobs.in/api/themeJewel`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });

        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
        };
        if (getCategoryName.length) {
            setTheme(getCategoryName);
        }
    };
    const getLookTagData = async () => {
        const getCategoryName = []
        const reqData = await axios.get(`https://onlineparttimejobs.in/api/lookTag`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });

        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
        };
        if (getCategoryName.length) {
            setLooktag(getCategoryName);
        }
    };
    const getWearTagData = async () => {
        const getCategoryName = []
        const reqData = await axios.get(`https://onlineparttimejobs.in/api/wearTag`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });

        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
        };
        if (getCategoryName.length) {
            setWeartag(getCategoryName);
        }
    };
    const getProductTagData = async () => {
        const getCategoryName = []
        const reqData = await axios.get(`https://onlineparttimejobs.in/api/productTag`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });

        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
        };
        if (getCategoryName.length) {
            setProductTag(getCategoryName);
        }
    };
    const getPairProductsData = async () => {
        const getCategoryName = []
        const reqData = await axios.get("https://onlineparttimejobs.in/api/product/jewel/admin", {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });

        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
        };
        if (getCategoryName.length) {
            setPairProducts(getCategoryName);
        }
    };
    const getProductsSetsData = async () => {
        const getCategoryName = []
        const reqData = await axios.get("https://onlineparttimejobs.in/api/product/jewel/admin", {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });

        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
        };
        if (getCategoryName.length) {
            setProductsSets(getCategoryName);
        }
    };
    const getPriceTypeData = async () => {
        const reqData = await axios.get(`https://onlineparttimejobs.in/api/priceType/lang/${item.language_id}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        setPriceType(reqData.data)
    };
    const getShapeData = async () => {
        const reqData = await axios.get(`https://onlineparttimejobs.in/api/shape/lang/${item.language_id}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        setShape(reqData.data)
    };
    const getColorStoneData = async () => {
        const reqData = await axios.get(`https://onlineparttimejobs.in/api/colorStone/lang/${item.language_id}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        setColorStone(reqData.data)
    };
    const getQualityData = async () => {
        const reqData = await axios.get(`https://onlineparttimejobs.in/api/quality/lang/${item.language_id}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        setQuality(reqData.data)
    };
    const getSievesData = async () => {
        const reqData = await axios.get(`https://onlineparttimejobs.in/api/sieves/lang/${item.language_id}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        setSieves(reqData.data)
    };

    useEffect(() => {
        getCategoryTypeData();
        getCatData();
        getLengthData();
        getCuratedByData();
        // getSubCategoryData();
        getStyleData();
        getCollectionData();
        getLabourChargeTpeData();
        getOccassionData();
        getSizeData();
        getDefaultSizeData();
        getShopForData();
        getMaterialData();
        getGemstoneData();
        getThemeData();
        getLookTagData();
        getWearTagData();
        getProductTagData();
        getPairProductsData();
        getProductsSetsData();
        getPriceTypeData();
        getShapeData();
        getColorStoneData();
        getQualityData();
        getSievesData();
    }, []);


    const handleShowPriceSection = () => {
        setShowPriceSection(!showPriceSection)
    }
    const handleShow = () => {
        setShow(!show)
    };

    const postcategoryTypeD = async () => {
        const obj = { language_id: item?.language_id, ids: finalcategoryType }
        const getCategoryName = []
        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/categoryType/categories`, obj, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            for (let i = 0; i < res.data.length; i++) {
                getCategoryName.push({ name: res.data[i]?.category[0]?.name, _id: res.data[i]?.category[0]?._id, uid: res.data[i]?.category[0]?.uid })
            };
            if (getCategoryName.length) {
                setCategoryListD(getCategoryName);
            }
        } catch (error) {

        }
    };

    // useEffect(() => {
    //     if (finalcategoryType) {
    //         postcategoryTypeD()
    //     }
    // }, [finalcategoryType]);

    const postcategoryD = async () => {
        const obj = { language_id: item?.language_id, ids: finalCatD }
        const getCategoryName = []
        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/category/child`, obj, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            for (let i = 0; i < res.data.length; i++) {
                getCategoryName.push({ name: res.data[i]?.name, _id: res.data[i]?._id, uid: res.data[i]?.uid })
            };
            if (getCategoryName.length) {
                setSubCategoryListD(getCategoryName);
            }
            setSubCategoryListD()
        } catch (error) {

        }
    };

    // useEffect(() => {
    //     if (finalCatD) {
    //         postcategoryD()
    //     }
    // }, [finalCatD]);


    useEffect(() => {
        if (params?.uid) {
            setMetalRowData(item?.metals);
            setStoneRowData(item?.stones);
            setDiamondRowData(item?.diamonds);
            setShowImageD(item?.mainImage_url)
        }
    }, [params?.uid]);


    const getSellerData = async () => {
        const reqData = await axios.get(`https://onlineparttimejobs.in/api/sellerList/admin`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        setSellerD(reqData.data)
    };
    useEffect(() => {
        getSellerData()
    }, []);



    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        {params.uid ? <h5 className="mb-0 h6">Update Product</h5> : <h5 className="mb-0 h6">Add Product</h5>}
                    </div>
                    <div>
                        {spinn && <div className="preloaderCount">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>}
                        <form className="form form-horizontal mar-top" id="choice_form">
                            <div className="row gutters-5">
                                <div className="col-lg-12">
                                    {/* <input type="hidden" name="_token" defaultValue="6klBhNOhEcSYzHAP1WU8ctR90lIocmkKBETVGkNx" />
                                    <input type="hidden" name="added_by" defaultValue="admin" onChange={onChangeHandler} /> */}

                                    {/* {Basic Details} */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Basic Detail</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">

                                                <div className="form-group col-md-3">
                                                    <label className="col-md-12 col-from-label">Title</label>
                                                    <input type="text" className="form-control" name="name" value={item?.name} placeholder="Title*" required fdprocessedid="3bss68" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                </div>

                                                <div className="form-group col-md-3">
                                                    <label className="col-md-12 col-from-label">SKU</label>
                                                    <input type="text" className="form-control" name="sku" value={item?.sku} placeholder="SKU*" required fdprocessedid="3bss68" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                </div>

                                                <div className="form-group col-md-3">
                                                    <label className="col-md-12 col-from-label">HSN CODE</label>
                                                    <input type="text" className="form-control" name="hsn_code" value={item?.hsn_code} placeholder="HSN Code*" required fdprocessedid="3bss68" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                </div>

                                                <div className="form-group col-md-3">
                                                    <label className="col-md-12 col-from-label">Seller</label>
                                                    <div id="seller">
                                                        <select className="form-select" aria-label="Default select example" name="seller_id" value={item?.seller_id} onChange={(e) => { onChangeHandler(e, item.language_id) }}>
                                                            <option selected>Select Seller</option>
                                                            {sellerD && sellerD.map((item, i) => {
                                                                return <option value={item?._id}>{item?.firstname + '' + item?.lastname}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label className="col-md-12 col-from-label">Type</label>
                                                    <div id="seller">
                                                        <select className="form-select" aria-label="Default select example" name="type" value={item?.type} onChange={(e) => { onChangeHandler(e, item.language_id) }}>
                                                            <option value={'Make to Order'}>Make to Order</option>
                                                            <option value={'Ready to Ship'}>Ready to Ship</option>
                                                        </select>
                                                    </div>
                                                </div>


                                                <div className="form-group col-md-4">
                                                    <label className="col-md-12 col-from-label">Category<span className="text-danger">*</span></label>
                                                    <div id="category">
                                                        <Multiselect
                                                            isObject={true}
                                                            displayValue="name"
                                                            options={categ}
                                                            showCheckbox
                                                            selectedValues={item?.category}
                                                            onRemove={(selectedCat) => {
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalCatD(selectedIds)
                                                            }}
                                                            onSelect={(selectedCat) => {
                                                                // setFinalCatD(event)
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalCatD(selectedIds)
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label className="col-md-4 col-from-label">Style<span className="text-danger">*</span></label>
                                                    <div id="category">
                                                        <Multiselect
                                                            isObject={true}
                                                            displayValue="name"
                                                            options={style}
                                                            showCheckbox
                                                            selectedValues={item?.style}
                                                            onRemove={(selectedCat) => {
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalStyleD(selectedIds)
                                                            }}
                                                            onSelect={(selectedCat) => {
                                                                // setFinalCatD(event)
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalStyleD(selectedIds)
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label className="col-md-12 col-from-label">Collections<span className="text-danger">*</span></label>
                                                    <div id="category">
                                                        <Multiselect
                                                            isObject={true}
                                                            displayValue="name"
                                                            options={collection}
                                                            showCheckbox
                                                            selectedValues={item?.Collection}
                                                            onRemove={(selectedCat) => {
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalCollectionD(selectedIds)
                                                            }}
                                                            onSelect={(selectedCat) => {
                                                                // setFinalCatD(event)
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalCollectionD(selectedIds)
                                                            }}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label className="col-md-12 col-from-label">Curated By<span className="text-danger">*</span></label>
                                                    <div id="category">
                                                        <Multiselect
                                                            isObject={true}
                                                            displayValue="name"
                                                            options={curatedByD}
                                                            showCheckbox
                                                            selectedValues={item?.curatedByD}
                                                            onRemove={(selectedCat) => {
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalCuratedBy(selectedIds)
                                                            }}
                                                            onSelect={(selectedCat) => {
                                                                // setFinalCatD(event)
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalCuratedBy(selectedIds)
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label className="col-md-12 col-from-label">Length<span className="text-danger">*</span></label>
                                                    <div id="category">
                                                        <Multiselect
                                                            isObject={true}
                                                            displayValue="name"
                                                            options={lengthD}
                                                            showCheckbox
                                                            selectedValues={item?.lengthD}
                                                            onRemove={(selectedCat) => {
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalLengthD(selectedIds)
                                                            }}
                                                            onSelect={(selectedCat) => {
                                                                // setFinalCatD(event)
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalLengthD(selectedIds)
                                                            }}
                                                        />
                                                    </div>
                                                </div>


                                            </div>

                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label className="col-md-12 col-from-label">Labour Charge Type<span className="text-danger">*</span></label>
                                                    <div id="category">
                                                        <Multiselect
                                                            isObject={true}
                                                            displayValue="name"
                                                            options={labourChargeType}
                                                            showCheckbox
                                                            selectedValues={item?.labourChargeType}
                                                            onRemove={(selectedCat) => {
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalLabourChargeTypeD(selectedIds)
                                                            }}
                                                            onSelect={(selectedCat) => {
                                                                // setFinalCatD(event)
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalLabourChargeTypeD(selectedIds)
                                                            }}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label className="col-md-12 col-from-label">Occasion<span className="text-danger">*</span></label>
                                                    <div id="category">
                                                        <Multiselect
                                                            isObject={true}
                                                            displayValue="name"
                                                            options={occassion}
                                                            showCheckbox
                                                            selectedValues={item?.occassions}
                                                            onRemove={(selectedCat) => {
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalOccassionD(selectedIds)
                                                            }}
                                                            onSelect={(selectedCat) => {
                                                                // setFinalCatD(event)
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalOccassionD(selectedIds)
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label className="col-md-12 col-from-label">Size<span className="text-danger">*</span></label>
                                                    <div id="category">
                                                        <Multiselect
                                                            isObject={true}
                                                            displayValue="name"
                                                            options={size}
                                                            showCheckbox
                                                            selectedValues={item?.ringSize}
                                                            onRemove={(selectedCat) => {
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalSizeD(selectedIds)
                                                            }}
                                                            onSelect={(selectedCat) => {
                                                                // setFinalCatD(event)
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalSizeD(selectedIds)
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label className="col-md-12 col-from-label">Default Size<span className="text-danger">*</span></label>
                                                    <div id="category">
                                                        <Multiselect
                                                            isObject={true}
                                                            displayValue="name"
                                                            options={defaultSize}
                                                            showCheckbox
                                                            selectedValues={item?.defSize}
                                                            onRemove={(selectedCat) => {
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalDefaultSizeD(selectedIds)
                                                            }}
                                                            onSelect={(selectedCat) => {
                                                                // setFinalCatD(event)
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalDefaultSizeD(selectedIds)
                                                            }}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label className="col-md-12 col-from-label">Gross Weight<span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" name="grossWeight" value={item?.grossWeight} placeholder="Weight" required fdprocessedid="3bss68" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label className="col-md-12 col-from-label">Shop For<span className="text-danger">*</span></label>
                                                    <div id="category">
                                                        <Multiselect
                                                            isObject={true}
                                                            displayValue="name"
                                                            options={shopFor}
                                                            showCheckbox
                                                            selectedValues={item?.shopForModule}
                                                            onRemove={(selectedCat) => {
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalShopForD(selectedIds)
                                                            }}
                                                            onSelect={(selectedCat) => {
                                                                // setFinalCatD(event)
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalShopForD(selectedIds)
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label className="col-md-12 col-from-label">Material<span className="text-danger">*</span></label>
                                                    <div id="category">
                                                        <Multiselect
                                                            isObject={true}
                                                            displayValue="name"
                                                            options={material}
                                                            showCheckbox
                                                            selectedValues={item?.material}
                                                            onRemove={(selectedCat) => {
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalMaterialD(selectedIds)
                                                            }}
                                                            onSelect={(selectedCat) => {
                                                                // setFinalCatD(event)
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalMaterialD(selectedIds)
                                                            }}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label className="col-md-12 col-from-label">Gemstone<span className="text-danger">*</span></label>
                                                    <div id="category">
                                                        <Multiselect
                                                            isObject={true}
                                                            displayValue="name"
                                                            options={gemstone}
                                                            showCheckbox
                                                            selectedValues={item?.gemstone}
                                                            onRemove={(selectedCat) => {
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalGemstoneD(selectedIds)
                                                            }}
                                                            onSelect={(selectedCat) => {
                                                                // setFinalCatD(event)
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalGemstoneD(selectedIds)
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label className="col-md-12 col-from-label">Theme<span className="text-danger">*</span></label>
                                                    <div id="category">
                                                        <Multiselect
                                                            isObject={true}
                                                            displayValue="name"
                                                            options={theme}
                                                            showCheckbox
                                                            selectedValues={item?.theme}
                                                            onRemove={(selectedCat) => {
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalThemeD(selectedIds)
                                                            }}
                                                            onSelect={(selectedCat) => {
                                                                // setFinalCatD(event)
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalThemeD(selectedIds)
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* {Tags Section Start} */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Tags</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <div className="form-group col-md-4">
                                                    <label className="col-md-12 col-from-label">Look Tag<span className="text-danger">*</span></label>
                                                    <div id="category">
                                                        <Multiselect
                                                            isObject={true}
                                                            displayValue="name"
                                                            options={lookTag}
                                                            showCheckbox
                                                            selectedValues={item?.lookTag}
                                                            onRemove={(selectedCat) => {
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalLooktagD(selectedIds)
                                                            }}
                                                            onSelect={(selectedCat) => {
                                                                // setFinalCatD(event)
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalLooktagD(selectedIds)
                                                            }}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label className="col-md-12 col-from-label">Wear Tag<span className="text-danger">*</span></label>
                                                    <div id="category">
                                                        <Multiselect
                                                            isObject={true}
                                                            displayValue="name"
                                                            options={wearTag}
                                                            showCheckbox
                                                            selectedValues={item?.wearTag}
                                                            onRemove={(selectedCat) => {
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalWeartagD(selectedIds)
                                                            }}
                                                            onSelect={(selectedCat) => {
                                                                // setFinalCatD(event)
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalWeartagD(selectedIds)
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label className="col-md-12 col-from-label">Product Tag<span className="text-danger">*</span></label>
                                                    <div id="category">
                                                        <Multiselect
                                                            isObject={true}
                                                            displayValue="name"
                                                            options={productTag}
                                                            showCheckbox
                                                            selectedValues={item?.productTag}
                                                            onRemove={(selectedCat) => {
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalProductTagD(selectedIds)
                                                            }}
                                                            onSelect={(selectedCat) => {
                                                                // setFinalCatD(event)
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat.uid
                                                                })
                                                                setFinalProductTagD(selectedIds)
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* {other Charges section start} */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Other Charges</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <div className="col-md-3 form-group physical_product_show" id="shipping_cost">
                                                    <label className="title-color">Is Certificate</label>
                                                    <label className="switcher title-color">
                                                        <input className="switcher_input ms-2" type="checkbox" name="isCertified" checked={item?.isCertified} onChange={(e) => { onChangeHandler(e, item.language_id, item.isCertified, 'boolean') }} />
                                                        <span className="switcher_control" />
                                                    </label>
                                                </div>
                                                <div className="col-md-3 form-group physical_product_show" id="shipping_cost">
                                                    <label className="title-color">Is Hallmark</label>
                                                    <label className="switcher title-color">
                                                        <input className="switcher_input ms-2" type="checkbox" name="isHalmark" checked={item?.isHalmark} onChange={(e) => { onChangeHandler(e, item.language_id, item.isHalmark, 'boolean') }} />
                                                        <span className="switcher_control" />
                                                    </label>
                                                </div>
                                                <div className="col-md-3 form-group physical_product_show" id="shipping_cost">
                                                    <label className="title-color">Is Customisable</label>
                                                    <label className="switcher title-color">
                                                        <input className="switcher_input ms-2" type="checkbox" name="isCustomizable" checked={item?.isCustomizable} onChange={(e) => { onChangeHandler(e, item.language_id, item.isCustomizable, 'boolean') }} />
                                                        <span className="switcher_control" />
                                                    </label>
                                                </div>
                                                <div className="col-md-3 form-group physical_product_show" id="shipping_cost">
                                                    <label className="title-color">Is Stamping</label>
                                                    <label className="switcher title-color">
                                                        <input className="switcher_input ms-2" type="checkbox" name="isStamping" checked={item?.isStamping} onChange={(e) => { onChangeHandler(e, item.language_id, item.isStamping, 'boolean') }} />
                                                        <span className="switcher_control" />
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* loyality program section start */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Loyality Program</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <div className="form-group col-md-6">
                                                    <input type="text" className="form-control" name="carat" value={item?.carat} placeholder="Carat" required fdprocessedid="3bss68" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <input type="number" className="form-control" name="point" value={item?.point} placeholder="Point" required fdprocessedid="3bss68" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dimensions section start */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Dimensions</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <div className="form-group col-md-4">
                                                    <input type="text" className="form-control" name="height" value={item?.height} placeholder="Height" required fdprocessedid="3bss68" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <input type="text" className="form-control" name="width" value={item?.width} placeholder="Width" required fdprocessedid="3bss68" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <input type="text" className="form-control" name="length" value={item?.length} placeholder="Length" required fdprocessedid="3bss68" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* {Metals Section Start} */}
                                    <div className="card mt-3">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Metals</h5>
                                        </div>
                                        <div className="card-body mt-4">
                                            {metalRowData?.map((val, i) => {
                                                return <div className="row mt-2" key={i}>
                                                    <div className="col-lg-2">
                                                        <label className="col-md-12 col-from-label">Price Type</label>
                                                        <select className="form-select" aria-label="Default select example" value={val?.priceType?._id ? val?.priceType?._id : val?.priceType} name="priceType" onChange={(e) => handleChangeMetal(e, i)}>
                                                            <option selected>Select Price Type</option>
                                                            {priceType && priceType.map((item, i) => {
                                                                // console.log('andarWalaItem,', item)
                                                                return <option value={item?._id} key={i}>{item?.name}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <label className="col-md-12 col-from-label">Metal Purity</label>
                                                        <select className="form-select" value={val?.metalPurity?._id ? val?.metalPurity?._id : val?.metalPurity} aria-label="Default select example" name="metalPurity" onChange={(e) => handleChangeMetal(e, i)}>
                                                            <option selected>Select Metal Purity</option>
                                                            {metalPurityMetalTypeData && metalPurityMetalTypeData.purity.map((purityItem, i) => {
                                                                return <option value={purityItem?._id} key={i}>{purityItem?.name}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <label className="col-md-12 col-from-label">Metal Type</label>
                                                        <select className="form-select" aria-label="Default select example" name="metalType" onChange={(e) => handleChangeMetal(e, i)}>
                                                            <option selected>Select Metal Type</option>
                                                            {metalPurityMetalTypeData && metalPurityMetalTypeData.metalType.map((metalTypeItem, i) => {
                                                                return <option value={metalTypeItem?._id} key={i}>{metalTypeItem?.name}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <label className="col-md-12 col-from-label">Net Weight</label>
                                                        <input className='form-control' name='netWeight' value={val?.netWeight?._id ? val?.netWeight?._id : val?.netWeight} type='number' placeholder='Metal Weight' onChange={(e) => handleChangeMetal(e, i)} />
                                                    </div>

                                                    <div className='col-lg-2' style={{ marginTop: '30px' }}>
                                                        <button className='btn btn-primary me-2' type='button' onClick={handleAddMetal}>+</button>
                                                        <button className='btn btn-danger' type='button' onClick={() => handleDeleteMetal(i)}>
                                                            <RiDeleteBin6Line />
                                                        </button>
                                                    </div>
                                                </div>
                                            })}

                                        </div>
                                    </div>

                                    {/* {Stones Section Start} */}
                                    <div className="card mt-3">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Stones</h5>
                                        </div>
                                        <div className="card-body mt-4">
                                            {stoneRowData.map((val, i) => {
                                                return <div className="row mt-2" key={i}>
                                                    <div className="col-md-2">
                                                        <label className="col-md-12 col-from-label">Shape</label>
                                                        <select className="form-select" aria-label="Default select example" value={val?.shape?._id ? val?.shape?._id : val?.shape} name="shape" onChange={(e) => handleChangeStone(e, i)}>
                                                            <option selected>Select Shape</option>
                                                            {shape && shape.map((item, i) => {
                                                                return <option value={item?._id} key={i}>{item?.name}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label className="col-md-12 col-from-label">Color</label>
                                                        <select className="form-select" aria-label="Default select example" value={val?.color?._id ? val?.color?._id : val?.color} name="color" onChange={(e) => handleChangeStone(e, i)}>
                                                            <option selected>Select Color</option>
                                                            {colorStone && colorStone.map((item, i) => {
                                                                return <option value={item?._id} key={i}>{item?.name}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label className="col-md-12 col-from-label">Carat</label>
                                                        <input className='form-control' name='carat' value={val?.carat?._id ? val?.carat?._id : val?.carat} type='text' placeholder='Carat' onChange={(e) => handleChangeStone(e, i)} />
                                                    </div>
                                                    <div className="col-md-2">
                                                        <label className="col-md-12 col-from-label">Pieces</label>
                                                        <input className='form-control' name='pieces' value={val?.pieces?._id ? val?.pieces?._id : val?.pieces} type='number' placeholder='Pieces' onChange={(e) => handleChangeStone(e, i)} />
                                                    </div>

                                                    <div className='col-lg-2' style={{ marginTop: '30px' }}>
                                                        <button className='btn btn-primary me-2' type='button' onClick={handleAddStone}>+</button>
                                                        <button className='btn btn-danger' type='button' onClick={() => handleDeleteStone(i)}>
                                                            <RiDeleteBin6Line />
                                                        </button>
                                                    </div>
                                                </div>
                                            })}

                                        </div>
                                    </div>

                                    {/* {Diamonds Section Start} */}
                                    <div className="card mt-3">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Diamonds</h5>
                                        </div>
                                        <div className="col-md-4 mt-2">
                                            <label className="col-md-12 col-from-label">Diamond Quality</label>
                                            <select className="form-select" aria-label="Default select example" name="quality" value={item?.quality} onChange={(e) => { onChangeHandler(e, item.language_id) }}>
                                                <option selected>Select Diamond Quality</option>
                                                {quality && quality.map((item, i) => {
                                                    return <option value={item?._id} key={i}>{item?.name}</option>
                                                })}
                                            </select>
                                        </div>
                                        <div className="card-body mt-4">
                                            {diamondRowData.map((val, i) => {
                                                return <div className="row mt-2">
                                                    <div className="col-md-2">
                                                        <label className="col-md-12 col-from-label">Shape</label>
                                                        <select className="form-select" aria-label="Default select example" value={val?.shape?._id ? val?.shape?._id : val?.shape} name="shape" onChange={(e) => handleChangeDiamond(e, i)}>
                                                            <option selected>Select Shape</option>
                                                            {shape && shape.map((item, i) => {
                                                                return <option value={item?._id} key={i}>{item?.name}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label className="col-md-12 col-from-label">Sieves</label>
                                                        <select className="form-select" aria-label="Default select example" value={val?.sieves?._id ? val?.sieves?._id : val?.sieves} name="sieves" onChange={(e) => handleChangeDiamond(e, i)}>
                                                            <option selected>Select Sieves</option>
                                                            {sieves && sieves.map((item, i) => {
                                                                return <option value={item?._id} key={i}>{item?.name}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label className="col-md-12 col-from-label">Carat</label>
                                                        <input className='form-control' name='carat' value={val?.carat?._id ? val?.carat?._id : val?.carat} type='text' placeholder='Carat' onChange={(e) => handleChangeDiamond(e, i)} />
                                                    </div>
                                                    <div className="col-md-2">
                                                        <label className="col-md-12 col-from-label">Pieces</label>
                                                        <input className='form-control' name='pieces' value={val?.pieces?._id ? val?.pieces?._id : val?.pieces} type='number' placeholder='Pieces' onChange={(e) => handleChangeDiamond(e, i)} />
                                                    </div>

                                                    <div className='col-md-2' style={{ marginTop: '30px' }}>
                                                        <button className='btn btn-primary me-2' type='button' onClick={handleAddDiamond}>+</button>
                                                        <button className='btn btn-danger' type='button' onClick={() => handleDeleteDiamond(i)}>
                                                            <RiDeleteBin6Line />
                                                        </button>
                                                    </div>
                                                </div>
                                            })}

                                        </div>
                                    </div>

                                    {/* Description & Attributes section start */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Description & Attributes</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <div className="form-group col-md-6">
                                                    <textarea name="shortDes" value={item?.shortDes} rows={2} className="form-control" placeholder='Short Description' onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <textarea name="longDes" value={item?.longDes} rows={2} className="form-control" placeholder='Long Description' onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Order limit section start */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Order Limit</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <div className="form-group col-md-4">
                                                    <input type="number" className="form-control" name="minOrderQty" value={item?.minOrderQty} placeholder="Min order Qty" required fdprocessedid="3bss68" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <input type="number" className="form-control" name="maxOrderQty" value={item?.maxOrderQty} placeholder="Max order Qty" required fdprocessedid="3bss68" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <div className="col-md-3 form-group physical_product_show" id="shipping_cost">
                                                        <label className="title-color">Available</label>
                                                        <label className="switcher title-color">
                                                            <input className="switcher_input ms-1" type="checkbox" name="isAvailable" checked={item?.isAvailable} onChange={(e) => { onChangeHandler(e, item.language_id, item.isAvailable, 'boolean') }} />
                                                            <span className="switcher_control" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* {Price Fixed Section Start} */}
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="col-md-6">
                                                <label className="switcher title-color me-2">
                                                    <input className="switcher_input" type="checkbox" name="isPriceFixed" checked={item?.isPriceFixed} onChange={(e) => { onChangeHandler(e, item.language_id, item.isPriceFixed, 'boolean') }} onClick={handleShowPriceSection} />
                                                    <span className="switcher_control" />
                                                </label>
                                                <label className="title-color">Is Price Fixed?</label>
                                            </div>

                                            {showPriceSection && <div className="card">
                                                <div className="card-header">
                                                    <h5 className="mb-0 h6">Countries Price</h5>
                                                </div>
                                                <div className="card-body">
                                                    <div className="form-group row">
                                                        {countryData && countryData.map((item, i) => {
                                                            return <div className="form-group col-md-4" key={i}>
                                                                <label className="title-color ms-2">{item.name}</label>
                                                                <input type="text" className="form-control mt-2" name="sale_rate" value={item?.sale_rate} placeholder="Sale Rate" required fdprocessedid="3bss68" onChange={(e) => { onChangeHandlePrice(e, item._id, item.name) }} />

                                                                {/* <input type="text" className="form-control mt-2" name="mrp" value={item?.mrp} placeholder="Mrp" required fdprocessedid="3bss68" onChange={(e) => { onChangeHandlePrice(e, item._id, item.name) }} />

                                                                <input type="text" className="form-control mt-2" name="tax" value={item?.tax} placeholder="tax" required fdprocessedid="3bss68" onChange={(e) => { onChangeHandlePrice(e, item._id, item.name) }} />

                                                                <select className="form-select mt-2" name='tax_type' value={item?.tax_type} aria-label="Default select example" onChange={(e) => { onChangeHandlePrice(e, item._id, item.name) }}>
                                                                    <option selected>Tax Type</option>
                                                                    <option value={'inclusive'}>Inclusive</option>
                                                                    <option value={'exclusive'}>Exclusive</option>
                                                                </select>

                                                                <input type="text" className="form-control mt-2" name="discount" value={item?.discount} placeholder="Discount" required fdprocessedid="3bss68" onChange={(e) => { onChangeHandlePrice(e, item._id, item.name) }} />

                                                                <select className="form-select mt-2" name='discount_type' value={item?.discount_type} aria-label="Default select example" onChange={(e) => { onChangeHandlePrice(e, item._id, item.name) }}>
                                                                    <option selected>Discount Type</option>
                                                                    <option value={'amount'}>Amount</option>
                                                                    <option value={'percent'}>Percent</option>
                                                                </select> */}

                                                            </div>
                                                        })}
                                                    </div>
                                                </div>
                                            </div>}
                                        </div>
                                    </div>

                                    {/* <ProductsImages section start/> */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Product Images</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">Add Images<small>(600x600) </small></label>
                                                <div className="col-md-8">
                                                    <div className="input-group" data-type="image" data-multiple="true">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                        </div>
                                                        <div className="form-control file-amount">
                                                            <input type="file" name="mainImage_url" multiple accept="image/*" className="selected-files" onChange={(e) => { onchengePhotoHandel(e, item.language_id) }} />
                                                        </div>
                                                    </div>
                                                    <div className="file-preview box sm">
                                                    </div>
                                                    {/* <small className="text-muted"> These images are visible in product details page gallery. Use 600x600 sizes images.</small> */}
                                                </div>
                                                <div className='col-lg-8'>
                                                    {imageLoading ? <h3>Loading Image...</h3>
                                                        : <img src={showImageD?.url} style={{ width: '300px', height: '200px', objectFit: 'cover', margin: '12px', border: '1px solid black' }} />
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* {gallary Image Section start} */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Gallary Images</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">Add Images<small>(600x600) </small></label>
                                                <div className="col-md-8">
                                                    <div className="input-group" data-type="image" data-multiple="true">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                        </div>
                                                        <div className="form-control file-amount">
                                                            <input type="file" name="gallary_image" multiple accept="image/*" className="selected-files" onChange={(e) => { onchengePhotoHandel(e, item.language_id) }} />
                                                        </div>
                                                    </div>
                                                    <div className="file-preview box sm">
                                                    </div>
                                                    {/* <small className="text-muted"> These images are visible in product details page gallery. Use 600x600 sizes images.</small> */}
                                                </div>
                                                <div className='col-md-12'>
                                                    {imageLoading2 ? <h3>Loading Image...</h3>
                                                        : item?.gallary_image && item?.gallary_image.map((item, i) => {
                                                            return <img src={item?.url} style={{ width: '300px', height: '200px', objectFit: 'cover', margin: '12px', border: '1px solid black', boxSizing: 'border-box' }} />
                                                        })}
                                                    {/* <img src={showImageD?.url} style={{ width: '300px', height: '200px', objectFit: 'cover', margin: '12px', border: '1px solid black' }} /> */}


                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* {Vedios Section start} */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Add Video Link</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Video Link</label>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control" name="video_link" value={item?.video_link} placeholder="Video Link" fdprocessedid="2pggse" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* {Pair Products Section start} */}
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <div className="col-md-6">
                                                    <label className="col-md-6">Pair Products</label>
                                                    <div id="category">
                                                        <Multiselect
                                                            isObject={true}
                                                            displayValue="name"
                                                            options={pairProducts}
                                                            showCheckbox
                                                            selectedValues={[]}
                                                            onRemove={(selectedCat) => {
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat._id
                                                                })
                                                                setFinalPairProductsD(selectedIds)
                                                            }}
                                                            onSelect={(selectedCat) => {
                                                                // setFinalCatD(event)
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat._id
                                                                })
                                                                setFinalPairProductsD(selectedIds)
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="col-md-6">Product Sets</label>
                                                    <div id="category">
                                                        <Multiselect
                                                            isObject={true}
                                                            displayValue="name"
                                                            options={productsSets}
                                                            showCheckbox
                                                            selectedValues={[]}
                                                            onRemove={(selectedCat) => {
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat._id
                                                                })
                                                                setFinalProductsSetsD(selectedIds)
                                                            }}
                                                            onSelect={(selectedCat) => {
                                                                const selectedIds = selectedCat.map((cat) => {
                                                                    return cat._id
                                                                })
                                                                setFinalProductsSetsD(selectedIds)
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* SEO section start */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">SEO</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <div className="form-group col-md-4">
                                                    <input type="text" className="form-control" name="meta_title" value={item?.meta_title} placeholder="Title" required fdprocessedid="3bss68" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <input type="text" className="form-control" name="meta_keywords" value={item?.meta_keywords} placeholder="Keyword" required fdprocessedid="3bss68" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <input type="text" className="form-control" name="meta_description" value={item?.meta_description} placeholder="Description" required fdprocessedid="3bss68" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* {Discount Section Start} */}
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="col-md-3 form-group physical_product_show" id="shipping_cost">
                                                <label className="title-color me-2">Give Discount</label>
                                                <label className="switcher title-color">
                                                    <input className="switcher_input" type="checkbox" name="isDiscount" checked={item?.isDiscount} onChange={(e) => { onChangeHandler(e, item.language_id, item.isDiscount, 'boolean') }} onClick={handleShow} />
                                                    <span className="switcher_control" />
                                                </label>
                                            </div>
                                            {show && <div className="form-group col-md-6">
                                                <input type="number" className="form-control" value={item?.discountPercent} name="discountPercent" placeholder="Discount Percentage" required fdprocessedid="3bss68" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                            </div>}
                                        </div>
                                    </div>

                                    {/* {Marketing Section Start} */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Marketing</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <div className="col-md-3 form-group physical_product_show" id="shipping_cost">
                                                    <label className="title-color">Featured</label>
                                                    <label className="switcher title-color">
                                                        <input className="switcher_input ms-2" type="checkbox" name="featured" checked={item?.featured} onChange={(e) => { onChangeHandler(e, item.language_id, item.featured, 'boolean') }} />
                                                        <span className="switcher_control" />
                                                    </label>
                                                </div>
                                                <div className="col-md-3 form-group physical_product_show" id="shipping_cost">
                                                    <label className="title-color">Todays Deal</label>
                                                    <label className="switcher title-color">
                                                        <input className="switcher_input ms-2" type="checkbox" name="todays_deal" checked={item?.todays_deal} onChange={(e) => { onChangeHandler(e, item.language_id, item.todays_deal, 'boolean') }} />
                                                        <span className="switcher_control" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Status Section Start */}
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="form-group col-md-6">
                                                <label className="title-color ms-2">Status</label>
                                                <select className="form-select" name='isActive' value={item?.isActive} aria-label="Default select example" onChange={(e) => { onChangeHandler(e, item.language_id) }}>
                                                    <option selected>Is Active</option>
                                                    <option value={true}>Yes</option>
                                                    <option value={false}>No</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
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
                </div >
            </div >
        </>
    )
}

export default AddJwelleryProduct222MultiLingual