import axios from "axios";
import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AddJwelleryProduct222MultiLingual from "./AddJwelleryProduct222MultiLingual";
import getData from "../../../ApiFolder/addjewelsprodApis";

function AddJwelleryProductComp222() {
    const [imageLoading, setImageLoading] = useState(false);
    const [imageLoading2, setImageLoading2] = useState(false);

    const [data, setData] = useState();
    const [countryData, setCountryData] = useState();
    const [checkValue, setCheckValue] = useState({ isCertified: false, isHalmark: false, isCustomizable: false, isStamping: false, isAvailable: false, isPriceFixed: false, featured: false, todays_deal: false })

    const [finalCategoryTypeD, setfinalCategoryTypeD] = useState();
    const [finalCategoryD, setfinalCategoryD] = useState();
    const [finalCuratedByD, setfinalCuratedByD] = useState();
    const [finalLengthD, setfinalLengthD] = useState();
    const [finalSubCategoryD, setfinalSubCategoryD] = useState();
    const [finalStyleD, setfinalStyleD] = useState();
    const [finalCollectionD, setfinalCollectionD] = useState();
    const [finalLabourChargetTypeD, setfinalLabourChargetTypeD] = useState();
    const [finalOccassionD, setfinalOccassionD] = useState();
    const [finalSizeD, setfinalSizeD] = useState();
    const [finalDefaultSizeD, setfinalDefaultSizeD] = useState();
    const [finalShopForD, setfinalShopForD] = useState();
    const [finalMaterialD, setfinalMaterialD] = useState();
    const [finalGemstoneD, setfinalGemstoneD] = useState();
    const [finalThemeD, setfinalThemeD] = useState();

    const [finalLookTagD, setfinalLooktagD] = useState();
    const [finalWearTagD, setfinalWeartagD] = useState();
    const [finalProductTagD, setfinalProducttagD] = useState();

    const [finalMetalData, setFinalMetalData] = useState();
    const [finalStoneData, setFinalStoneData] = useState();
    const [finalDiamondData, setFinalDiamondData] = useState();

    const [finalPairProductsData, setFinalPairProductsData] = useState();
    const [finalProductSetsData, setFinalProductSetsData] = useState();
    const [isPriceData, setIsPriceData] = useState();
    const [showImageD, setShowImageD] = useState();
    const [showGallaryImageD, setShowGallaryImageD] = useState();

    const [isLoading, setIsLoading] = useState(false)

    const token = window.localStorage.getItem('adminToken');
    const params = useParams();

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getData1 = async () => {
        try {
            const rspp = getData()
            setData(rspp)
        } catch (error) {

        }
    };

    const getCountryData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/country/admin`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        setCountryData(res.data)
    };
    useEffect(() => {
        getData()
        getCountryData()
    }, [])

    const [val, setVal] = useState(data)

    const onchengePhotoHandel = async (e, id,) => {
        // setShowImageD(URL.createObjectURL(e.target.files[0]));
        if (e.target.name === 'gallary_image') {
            let arr = [];
            const fromData = new FormData();
            const arrs = [...e.target.files]

            for (let index = 0; index < arrs.length; index++) {
                const element = arrs[index];
                fromData.append('image', element)
                try {
                    setImageLoading2(true)
                    const res = await axios.post("https://onlineparttimejobs.in/api/cloudinaryimage/admin/addImage", fromData, { headers: { Authorization: "Bearer " + window.localStorage.getItem("token") } });
                    setShowGallaryImageD(res.data);
                    arr.push(res.data)
                } catch (error) {

                };
                setImageLoading2(false)
                fromData.delete('image')
            }
            const maped = val.map((item) => {
                if (item.language_id == id) {
                    const obj = { ...item, gallary_image: arr }
                    return obj
                } else {
                    return item
                }
            })
            setVal(maped);
        }

        else if (e.target.name == 'mainImage_url') {
            let balnkObj = {};
            const fromData = new FormData();
            fromData.append('image', e.target.files[0])
            try {
                setImageLoading(true)
                const res = await axios.post("https://onlineparttimejobs.in/api/cloudinaryimage/admin/addImage", fromData, { headers: { Authorization: "Bearer " + window.localStorage.getItem("token") } });
                setShowImageD(res.data);
                balnkObj = res.data
            } catch (error) {

            };
            setImageLoading(false)
            fromData.delete('image')

            const maped = val.map((item) => {
                if (item.language_id == id) {
                    const obj = { ...item, [e.target.name]: balnkObj }
                    return obj
                } else {
                    return item
                }
            })
            setVal(maped);

        } else {
            const maped = val.map((item) => {
                if (item.language_id == id) {
                    const obj = { ...item, [e.target.name]: e.target.value }
                    return obj
                } else {
                    return item
                }
            })
            setVal(maped);
        }
    };


    const onChangeHandlePrice = async (e, languageId, countryName) => {
        if (e.target.name == 'sale_rate') {
            const blankArr = []
            const copyData = JSON.parse(JSON.stringify(countryData))
            const maped1 = copyData.map((item, i) => {
                // console.log(item?.country_id, languageId);
                if (item?.name == countryName) {
                    item[e.target.name] = e.target.value
                    // const obj = { ...item, country_id: item._id, [e.target.name]: e.target.value }
                    // return obj
                } else {
                    return item
                }
            })
            setCountryData(copyData)
            console.log('countryData--', copyData)
            setIsPriceData(copyData)
        } else {
            return
        }

    };
    const onChangeHandler = (e, id, bul, bool) => {
        if (bool) {
            const maped = val.map((item) => {
                if (item.language_id == id) {
                    const obj = { ...item, [e.target.name]: !bul }
                    return obj
                } else {
                    return item
                }
            })
            setVal(maped);
        } else {
            const maped = val.map((item) => {
                if (item.language_id == id) {
                    const obj = { ...item, [e.target.name]: e.target.value }
                    return obj
                } else {
                    return item
                }
            })
            setVal(maped);
        }
    };


    const toastSuccessMessage1 = () => {
        toast.success("Product Updated", {
            position: "top-center"
        })
    };
    const toastErrorMessage1 = () => {
        toast.error("Product Not Updated ", {
            position: "top-center"
        })
    };
    const toastSuccessMessage2 = () => {
        toast.success("Product Added", {
            position: "top-center"
        })
    };
    const toastErrorMessage2 = () => {
        toast.error("Product Not Added", {
            position: "top-center"
        })
    };

    const bringCategoryType = (categoryType) => {
        setfinalCategoryTypeD(categoryType)
    };
    const bringCategory = (categoryyy) => {
        setfinalCategoryD(categoryyy)
    };
    const bringFinalCuratedBy = (curatedBy) => {
        setfinalCuratedByD(curatedBy)
    };
    const bringLength = (lenght) => {
        setfinalLengthD(lenght)
    };
    const bringSubCategory = (subCateg) => {
        setfinalSubCategoryD(subCateg)
    };
    const bringStyle = (style) => {
        setfinalStyleD(style)
    };
    const bringCollection = (collection) => {
        setfinalCollectionD(collection)
    };
    const bringLabourChargeType = (labourChargeType) => {
        setfinalLabourChargetTypeD(labourChargeType)
    };
    const bringOccassion = (occassion) => {
        setfinalOccassionD(occassion)
    };
    const bringSize = (size) => {
        setfinalSizeD(size)
    };
    const bringDefaultSize = (defaultsize) => {
        setfinalDefaultSizeD(defaultsize)
    };
    const bringShopFor = (shopFor) => {
        setfinalShopForD(shopFor)
    };
    const bringMaterial = (material) => {
        setfinalMaterialD(material)
    }
    const bringGemstone = (gemstone) => {
        setfinalGemstoneD(gemstone)
    }
    const bringTheme = (theme) => {
        setfinalThemeD(theme)
    }

    const bringLookTag = (lookTag) => {
        setfinalLooktagD(lookTag)
    };
    const bringWearTag = (wearTag) => {
        setfinalWeartagD(wearTag)
    };
    const bringProductTag = (productTag) => {
        setfinalProducttagD(productTag)
    };
    const bringMetalData = (metalData) => {
        setFinalMetalData(metalData)
    };
    const bringStoneData = (stoneData) => {
        setFinalStoneData(stoneData)
    };
    const bringDiamondData = (diamondData) => {
        setFinalDiamondData(diamondData)
    };
    const bringPairProductsData = (pairProductsData) => {
        setFinalPairProductsData(pairProductsData)
    };
    const bringProductSetsData = (productSetsData) => {
        setFinalProductSetsData(productSetsData)
    };

    const setLoop = (i, str, id) => {
        if (str == 'nex') {
            setValue(i + 1)
        } else {
            setValue(i - 1)
        }
        const maped = val.map((item) => {
            // categoryType: finalCategoryTypeD,
            // subCategory: finalSubCategoryD,
            if (item.language_id == id) {
                const obj = { ...item, category: finalCategoryD, curatedBy: finalCuratedByD, length: finalLengthD, style: finalStyleD, Collection: finalCollectionD, labourChargeType: finalLabourChargetTypeD, occassions: finalOccassionD, ringSize: finalSizeD, defSize: finalDefaultSizeD, shopForModule: finalShopForD, material: finalMaterialD, gemStone: finalGemstoneD, theme: finalThemeD, lookTag: finalLookTagD, wearTag: finalWearTagD, productTag: finalProductTagD, metals: finalMetalData, stones: finalStoneData, diamonds: finalDiamondData, pairProducts: finalPairProductsData, setProducts: finalProductSetsData, prices: isPriceData }
                return obj
            } else {
                return item
            }
        })
        setVal(maped)
        setfinalCategoryTypeD([])
        setfinalCategoryD([])
        setfinalCuratedByD([])
        setfinalLengthD([])
        setfinalSubCategoryD([])
        setfinalStyleD([])
        setfinalCollectionD([])
        setfinalLabourChargetTypeD([])
        setfinalOccassionD([])
        setfinalSizeD([])
        setfinalDefaultSizeD([])
        setfinalShopForD([])
        setfinalMaterialD([])
        setfinalGemstoneD([])
        setfinalThemeD([])
        setfinalLooktagD([])
        setfinalWeartagD([])
        setfinalProducttagD([])
        setFinalPairProductsData([])
        setFinalProductSetsData([])
        setCheckValue({ isCertified: false, isHalmark: false, isCustomizable: false, isStamping: false, isAvailable: false, isPriceFixed: false, featured: false, todays_deal: false })

    }
    const addNewAttributeData = async (e, id) => {
        e.preventDefault();
        let clone2 = [...val]
        const maped = clone2.map((item) => {
            // categoryType: finalCategoryTypeD,
            // subCategory: finalSubCategoryD,
            if (item.language_id == id) {
                const obj = { ...item, category: finalCategoryD, curatedBy: finalCuratedByD, length: finalLengthD, style: finalStyleD, Collection: finalCollectionD, labourChargeType: finalLabourChargetTypeD, occassions: finalOccassionD, ringSize: finalSizeD, defSize: finalDefaultSizeD, shopForModule: finalShopForD, material: finalMaterialD, gemStone: finalGemstoneD, theme: finalThemeD, lookTag: finalLookTagD, wearTag: finalWearTagD, productTag: finalProductTagD, metals: finalMetalData, stones: finalStoneData, diamonds: finalDiamondData, pairProducts: finalPairProductsData, setProducts: finalProductSetsData, prices: isPriceData }
                return obj
            } else {
                return item
            }
        })
        setVal(maped)
        addFile(maped, token)
        console.log('maped----', maped)
    };
    const addFile = async (clonedObj) => {
        let cloned = [...clonedObj]

        if (params?.uid) {
            try {
                const res = await axios.put(`https://onlineparttimejobs.in/api/product/updateDiamondProduct/${params?.uid}`, { list: cloned }, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                })
                toastSuccessMessage1()
            } catch (error) {
                toastErrorMessage1()
            }
        } else {
            try {
                const res = await axios.post('https://onlineparttimejobs.in/api/product/addDiamondProduct', { list: cloned }, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                })
                toastSuccessMessage2()
            } catch (error) {
                toastErrorMessage2()
            }
        }
    };

    const getByIdData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/product/jewel/admin/${params?.uid}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        console.log('getByIdData-----', res.data)
        setVal(res.data);
    };
    useEffect(() => {
        if (params?.uid) {
            getByIdData()
        } else if (data) {
            const maped = data.map((item) => {
                return { name: "", sku: "", hsn_code: '', seller_id: '', type: '', grossWeight: '', isCertified: checkValue.isCertified, isHalmark: checkValue.isHalmark, isCustomizable: checkValue.isCustomizable, isStamping: checkValue.isStamping, carat: '', point: '', height: '', width: '', length: '', quality: '', shortDes: '', longDes: '', minOrderQty: '', maxOrderQty: '', isAvailable: false, isPriceFixed: checkValue.isPriceFixed, meta_title: '', meta_description: '', meta_keywords: '', video_link: '', isDiscount: checkValue.isDiscount, discountPercent: '', isActive: false, language_id: item._id, lable: item.name, featured: checkValue.featured, todays_deal: checkValue.todays_deal }
            })
            setVal(maped)
        }
    }, [params?.uid, data]);



    return (
        <>
            {isLoading ? <h3>Loading...</h3> : <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            {data && data.map((item, i) => {
                                return <Tab label={item?.name} value={i} key={i} />
                            })}
                        </TabList>
                    </Box>
                    {val && val.map((item, i) => {
                        return <TabPanel value={i} key={1}>
                            <div className="card">
                                <AddJwelleryProduct222MultiLingual setValue={setValue} data={val} params={params} item={item} i={i} onChangeHandler={onChangeHandler} bringCategoryType={bringCategoryType} bringCategory={bringCategory} bringFinalCuratedBy={bringFinalCuratedBy} bringLength={bringLength} bringSubCategory={bringSubCategory} bringStyle={bringStyle} bringCollection={bringCollection} bringLabourChargeType={bringLabourChargeType} bringOccassion={bringOccassion} bringSize={bringSize} bringDefaultSize={bringDefaultSize} bringShopFor={bringShopFor} bringMaterial={bringMaterial} bringGemstone={bringGemstone} bringTheme={bringTheme} bringLookTag={bringLookTag} bringWearTag={bringWearTag} bringProductTag={bringProductTag} bringMetalData={bringMetalData} bringStoneData={bringStoneData} bringDiamondData={bringDiamondData} bringPairProductsData={bringPairProductsData} bringProductSetsData={bringProductSetsData} setLoop={setLoop} addNewAttributeData={addNewAttributeData} countryData={countryData} onchengePhotoHandel={onchengePhotoHandel} onChangeHandlePrice={onChangeHandlePrice} showImageD={showImageD} setShowImageD={setShowImageD} showGallaryImageD={showGallaryImageD} imageLoading={imageLoading} imageLoading2={imageLoading2} />
                            </div>

                        </TabPanel>
                    })}

                </TabContext>
            </Box>}
            <ToastContainer />
        </>
    )
}
export default AddJwelleryProductComp222