import { Pagination } from "antd";
import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListJwelleryProductsComp() {
    const [moreBtn, setMoreBtn] = useState(true);
    const [showLessBtn, setShowLessBtn] = useState(false);
    const [showMoreInputs, setShowMoreInputs] = useState(false);
    const [getListData, setgetListData] = useState();
    const [categoryTypeD, setCategoryTypeD] = useState();
    const [categoryD, setCategoryD] = useState();
    const [labourChargeTypeD, setLabourChargeTypeD] = useState();
    const [collectionsD, setCollectionsD] = useState();
    const [styleD, setStyleD] = useState();
    const [occasionD, setOccassionD] = useState();
    const [material, setMaterial] = useState([]);
    const [gemstone, setGemstone] = useState([]);
    const [shopFor, setShopFor] = useState([]);
    const [theme, setTheme] = useState([]);
    const [lengthD, setLengthD] = useState([]);
    const [size, setSize] = useState([]);
    const [defaultSize, setDefaultSize] = useState([]);
    const [categ, setCateg] = useState([]);
    const [curatedByD, setCuratedByD] = useState([]);
    const [productTag, setProductTag] = useState([]);
    const [lookTag, setLooktag] = useState([]);
    const [wearTag, setWeartag] = useState([]);


    const [finalLabourChargeTypeD, setFinalLabourChargeTypeD] = useState();
    const [finalCollectionD, setFinalCollectionD] = useState();
    const [finalStyleD, setFinalStyleD] = useState();
    const [finalOccassionD, setFinalOccassionD] = useState();
    const [finalMaterialD, setFinalMaterialD] = useState();
    const [finalGemstoneD, setFinalGemstoneD] = useState();
    const [finalShopForD, setFinalShopForD] = useState();
    const [finalThemeD, setFinalThemeD] = useState();
    const [finalLengthD, setFinalLengthD] = useState();
    const [finalSizeD, setFinalSizeD] = useState();
    const [finalDefaultSizeD, setFinalDefaultSizeD] = useState();
    const [finalCatD, setFinalCatD] = useState();
    const [finalCuratedByD, setFinalCuratedBy] = useState();
    const [finalProductTagD, setFinalProductTagD] = useState();
    const [finalLookTagD, setFinalLooktagD] = useState();
    const [finalWearTagD, setFinalWeartagD] = useState();

    const [inputVal, setInputVal] = useState({
        name: null, sku: null, gross_weight: null, status: null, type: null, page: 0, count: 100
    });

    const [loading, setLoading] = useState(true)
    const token = window.localStorage.getItem('adminToken');

    const getdata = async () => {
        try {
            const res = await axios.get('https://onlineparttimejobs.in/api/product/jewel/admin', {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            setLoading(false)
            setgetListData(res.data)
        } catch (error) {
            setLoading(false)
            alert('Server Error')
        }
    };
    const getCategoryTypeData = async () => {
        const res = await axios.get('https://onlineparttimejobs.in/api/categoryType', {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setCategoryTypeD(res.data)
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
    const getLabourChargeTypeData = async () => {
        const res = await axios.get('https://onlineparttimejobs.in/api/labourChargeType', {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setLabourChargeTypeD(res.data)
    };
    const getCollectionsData = async () => {
        const res = await axios.get('https://onlineparttimejobs.in/api/collection', {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setCollectionsD(res.data)
    };
    const getStylesData = async () => {
        const res = await axios.get('https://onlineparttimejobs.in/api/style', {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setStyleD(res.data)
    };
    const getOccasionData = async () => {
        const res = await axios.get('https://onlineparttimejobs.in/api/occasion', {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setOccassionD(res.data)
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
    useEffect(() => {
        getCatData();
        getdata();
        getCategoryTypeData();
        getLabourChargeTypeData();
        getCollectionsData();
        getStylesData();
        getOccasionData();
        getMaterialData();
        getGemstoneData();
        getShopForData();
        getThemeData();
        getLengthData();
        getSizeData();
        getDefaultSizeData();
        getCuratedByData();
        getProductTagData();
        getLookTagData();
        getWearTagData();
    }, []);



    const handlehowInputs = () => {
        setShowMoreInputs(!showMoreInputs)
        setMoreBtn(!moreBtn)
        setShowLessBtn(!showLessBtn)
    };
    const handleHideInputs = () => {
        setShowMoreInputs(!showMoreInputs)
        setMoreBtn(!moreBtn)
        setShowLessBtn(!showLessBtn)
    };
    const onChangeHandler = (e) => {
        const val = e.target.value;
        const inpName = e.target.name;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = val;
        setInputVal(clonedObj)
    };
    const filterData = async (e) => {
        e.preventDefault();
        const cloned = { ...inputVal, category: finalCatD, shopForModule: finalShopForD, ringSize: finalSizeD, occassions: finalOccassionD, theme: finalThemeD, gemStone: finalGemstoneD, material: finalMaterialD, style: finalStyleD, length: finalLengthD }
        const res = await axios.post('https://onlineparttimejobs.in/api/product/jewel/admin/filter', cloned, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            }
        });
        setgetListData(res.data)
        inputVal.category = null
        inputVal.name = null
        inputVal.sku = null
        inputVal.status = null
        inputVal.type = null
        inputVal.labourChargeType = []
        inputVal.collection = []
        inputVal.styles = []
        inputVal.occasion = []
        document.getElementById("create-course-form").reset();
    };
    const resetData = () => {
        getdata()
    };
    const deletData = async (uid) => {
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api/product/jewel/admin/delete/${uid}`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            alert('Deleted')
            getdata()
        } catch (error) {
            alert('Not Deleted')
        }
    };

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Products</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6">Products</h5>
                            {/* <span style={{ width: '8px', height: '8px', backgroundColor: 'red', color: 'white', padding: '4px 6px', borderRadius: '3px' }}>03</span> */}
                            <div className="col-md-6 text-md-right">
                                <Link to="/admin/add-jwellery-produt" className="btn btn-info">
                                    <span>+ Add Product</span>
                                </Link>
                            </div>
                        </div>
                        <div className="card-body">

                            <form id="create-course-form" onSubmit={filterData}>
                                <div className="form-group row">
                                    <div className="col-lg-3">
                                        <label className="col-md-12 col-from-label">Title</label>
                                        <div>
                                            <input type="text" className="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title" onChange={onChangeHandler} />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <label className="col-md-12 col-from-label">SKU</label>
                                        <div>
                                            <input type="text" className="form-control" name="sku" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="SKU" onChange={onChangeHandler} />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <label className="col-md-12 col-from-label">Gross Weight</label>
                                        <div>
                                            <input type="text" className="form-control" name="gross_weight" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Gross Weight" onChange={onChangeHandler} />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <label className="col-md-12 col-from-label">Category</label>
                                        <div id="category">
                                            <Multiselect
                                                isObject={true}
                                                displayValue="name"
                                                options={categ}
                                                showCheckbox
                                                selectedValues={[]}
                                                onRemove={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalCatD(selectedIds)
                                                }}
                                                onSelect={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalCatD(selectedIds)
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row mt-3">
                                    <div className="col-lg-3">
                                        <label className="col-md-12 col-from-label">Status</label>
                                        <select className="form-select" name="status" aria-label="Default select example" onChange={onChangeHandler}>
                                            <option selected>Select Status</option>
                                            <option value={true}>Active</option>
                                            <option value={false}>Inactive</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-3">
                                        <label className="col-md-12 col-from-label">Labour Charge Type</label>
                                        <div id="category">
                                            <Multiselect
                                                isObject={true}
                                                displayValue="name"
                                                options={labourChargeTypeD}
                                                showCheckbox
                                                selectedValues={[]}
                                                onRemove={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalLabourChargeTypeD(selectedIds)
                                                }}
                                                onSelect={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalLabourChargeTypeD(selectedIds)
                                                }}
                                            />
                                        </div>

                                    </div>
                                    <div className="col-lg-3">
                                        <label className="col-md-12 col-from-label">Collections</label>
                                        <div id="category">
                                            <Multiselect
                                                isObject={true}
                                                displayValue="name"
                                                options={collectionsD}
                                                showCheckbox
                                                selectedValues={[]}
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
                                    <div className="col-lg-3">
                                        <label className="col-md-12 col-from-label">Styles</label>
                                        <div id="category">
                                            <Multiselect
                                                isObject={true}
                                                displayValue="name"
                                                options={styleD}
                                                showCheckbox
                                                selectedValues={[]}
                                                onRemove={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalStyleD(selectedIds)
                                                }}
                                                onSelect={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalStyleD(selectedIds)
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {showMoreInputs && <div className="form-group row mt-3">
                                    <div className="col-lg-3">
                                        <label className="col-md-12 col-from-label">Material</label>
                                        <div id="category">
                                            <Multiselect
                                                isObject={true}
                                                displayValue="name"
                                                options={material}
                                                showCheckbox
                                                selectedValues={[]}
                                                onRemove={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalMaterialD(selectedIds)
                                                }}
                                                onSelect={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalMaterialD(selectedIds)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <label className="col-md-12 col-from-label">Gemstone</label>
                                        <div id="category">
                                            <Multiselect
                                                isObject={true}
                                                displayValue="name"
                                                options={gemstone}
                                                showCheckbox
                                                selectedValues={[]}
                                                onRemove={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalGemstoneD(selectedIds)
                                                }}
                                                onSelect={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalGemstoneD(selectedIds)
                                                }}
                                            />
                                        </div>

                                    </div>
                                    <div className="col-lg-3">
                                        <label className="col-md-12 col-from-label">Shop For</label>
                                        <div id="category">
                                            <Multiselect
                                                isObject={true}
                                                displayValue="name"
                                                options={shopFor}
                                                showCheckbox
                                                selectedValues={[]}
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
                                    <div className="col-lg-3">
                                        <label className="col-md-12 col-from-label">Theme</label>
                                        <div id="category">
                                            <Multiselect
                                                isObject={true}
                                                displayValue="name"
                                                options={theme}
                                                showCheckbox
                                                selectedValues={[]}
                                                onRemove={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalThemeD(selectedIds)
                                                }}
                                                onSelect={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalThemeD(selectedIds)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mt-3">
                                        <label className="col-md-12 col-from-label">Length</label>
                                        <div id="category">
                                            <Multiselect
                                                isObject={true}
                                                displayValue="name"
                                                options={lengthD}
                                                showCheckbox
                                                selectedValues={[]}
                                                onRemove={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalLengthD(selectedIds)
                                                }}
                                                onSelect={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalLengthD(selectedIds)
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-3 mt-3">
                                        <label className="col-md-12 col-from-label">Size</label>
                                        <div id="category">
                                            <Multiselect
                                                isObject={true}
                                                displayValue="name"
                                                options={size}
                                                showCheckbox
                                                selectedValues={[]}
                                                onRemove={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalSizeD(selectedIds)
                                                }}
                                                onSelect={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalSizeD(selectedIds)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mt-3">
                                        <label className="col-md-12 col-from-label">Default Size</label>
                                        <div id="category">
                                            <Multiselect
                                                isObject={true}
                                                displayValue="name"
                                                options={defaultSize}
                                                showCheckbox
                                                selectedValues={[]}
                                                onRemove={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalDefaultSizeD(selectedIds)
                                                }}
                                                onSelect={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalDefaultSizeD(selectedIds)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mt-3">
                                        <label className="col-md-12 col-from-label">Occasions</label>
                                        <div id="category">
                                            <Multiselect
                                                isObject={true}
                                                displayValue="name"
                                                options={occasionD}
                                                showCheckbox
                                                selectedValues={[]}
                                                onRemove={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalOccassionD(selectedIds)
                                                }}
                                                onSelect={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalOccassionD(selectedIds)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mt-3">
                                        <label className="col-md-12 col-from-label">Curated By</label>
                                        <div id="category">
                                            <Multiselect
                                                isObject={true}
                                                displayValue="name"
                                                options={curatedByD}
                                                showCheckbox
                                                selectedValues={[]}
                                                onRemove={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalCuratedBy(selectedIds)
                                                }}
                                                onSelect={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalCuratedBy(selectedIds)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mt-3">
                                        <label className="col-md-12 col-from-label">Product Tag</label>
                                        <div id="category">
                                            <Multiselect
                                                isObject={true}
                                                displayValue="name"
                                                options={productTag}
                                                showCheckbox
                                                selectedValues={[]}
                                                onRemove={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalProductTagD(selectedIds)
                                                }}
                                                onSelect={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalProductTagD(selectedIds)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mt-3">
                                        <label className="col-md-12 col-from-label">Look Tag</label>
                                        <div id="category">
                                            <Multiselect
                                                isObject={true}
                                                displayValue="name"
                                                options={lookTag}
                                                showCheckbox
                                                selectedValues={[]}
                                                onRemove={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalLooktagD(selectedIds)
                                                }}
                                                onSelect={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalLooktagD(selectedIds)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mt-3">
                                        <label className="col-md-12 col-from-label">Wear Tag</label>
                                        <div id="category">
                                            <Multiselect
                                                isObject={true}
                                                displayValue="name"
                                                options={wearTag}
                                                showCheckbox
                                                selectedValues={[]}
                                                onRemove={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalWeartagD(selectedIds)
                                                }}
                                                onSelect={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat.uid
                                                    })
                                                    setFinalWeartagD(selectedIds)
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                }

                                <div className="form-group row mt-3 mb-3">
                                    <div className="col-lg-3">
                                        <label className="col-md-12 col-from-label">Type</label>
                                        <select className="form-select" name="type" aria-label="Default select example" onChange={onChangeHandler}>
                                            <option selected>Select Type</option>
                                            <option value={'Make to Order'}>Make to Order</option>
                                            <option value={'Ready to Ship'}>Ready to Ship</option>
                                        </select>
                                    </div>

                                    <div className="col-lg-6 mt-4">
                                        {moreBtn ? <button className="btn btn-success mr-3" type="button" onClick={handlehowInputs}>More...</button> : showLessBtn ? <button className="btn btn-success mr-3" type="button" onClick={handleHideInputs}>Less...</button> : null}
                                        <button className="btn btn-primary mr-3" type="submit">Search</button>
                                        <button className="btn btn-danger" type="button" onClick={resetData}>Rest</button>
                                    </div>
                                </div>
                            </form>


                            <div className="table table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th class="table-secondary" >#</th>
                                            <th class="table-secondary" >Product Image</th>
                                            <th class="table-secondary">Title</th>
                                            {/* <th class="table-secondary">Collection</th> */}
                                            {/* <th class="table-secondary">Category Type</th> */}
                                            <th class="table-secondary">Category</th>
                                            {/* <th class="table-secondary">Sub Category</th> */}
                                            {/* <th class="table-secondary">Labour Type</th> */}
                                            <th class="table-secondary">Metal Type</th>
                                            <th class="table-secondary">Metal Price Type</th>
                                            <th class="table-secondary">SKU</th>
                                            <th class="table-secondary">HSN Code</th>
                                            {/* <th class="table-secondary">Status</th> */}
                                            <th class="table-secondary">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {loading ? <h3>Loading...</h3> : getListData && getListData.map((item, i) => {
                                            console.log('item,', item)
                                            return <tr key={i}>
                                                <td scope="row">{i + 1}</td>
                                                <td style={{ display: 'table-cell' }}>
                                                    <div className="row gutters-5 w-200px w-md-300px mw-100">
                                                        <div className="col-auto w-50 ">
                                                            <img src={item?.mainImage_url?.url} alt="Image" className="" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td scope="row">{item?.name}</td>

                                                {/* <td scope="row">
                                                    {item?.Collection?.map((collectionitem, i) => {
                                                        return <span key={i} value={collectionitem?._id} style={{ display: 'block' }}>{collectionitem?.name}</span>
                                                    })}
                                                </td> */}
                                                {/* <td scope="row">
                                                    {item?.categoryType?.map((categtypeitem, i) => {
                                                        return <span key={i} value={categtypeitem?._id} style={{ display: 'block' }}>{categtypeitem?.name}</span>
                                                    })}
                                                </td> */}
                                                <td scope="row">
                                                    {item?.category?.map((catitem, i) => {
                                                        return <span key={i} value={catitem?._id} style={{ display: 'block' }}>{catitem?.name}</span>
                                                    })}
                                                </td>
                                                {/* <td scope="row">
                                                    {item?.subCategory?.map((subcategitem, i) => {
                                                        return <span key={i} value={subcategitem?._id} style={{ display: 'block' }}>{subcategitem?.name}</span>
                                                    })}
                                                </td> */}
                                                {/* <td scope="row">
                                                    {item?.labourChargeType?.map((labourtypeitem, i) => {
                                                        return <span key={i} value={labourtypeitem?._id} style={{ display: 'block' }}>{labourtypeitem?.name}</span>
                                                    })}
                                                </td> */}
                                                <td scope="row">
                                                    {item?.metals?.map((metalsTypeItem, i) => {
                                                        return <span key={i} value={metalsTypeItem?.metalType?._id} style={{ display: 'block' }}>{metalsTypeItem?.metalType?.name}</span>
                                                    })}
                                                </td>
                                                <td scope="row">
                                                    {item?.metals?.map((metalsPriceTypeItem, i) => {
                                                        return <span key={i} value={metalsPriceTypeItem?.priceType?._id} style={{ display: 'block' }}>{metalsPriceTypeItem?.priceType?.name}</span>
                                                    })}
                                                </td>
                                                <td scope="row">{item?.sku}</td>
                                                <td>{item?.hsn_code}</td>
                                                <td>
                                                    <Link className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to={`edit/${item?.uid}`}>
                                                        <i className="las la-edit">
                                                        </i>
                                                    </Link>
                                                    <button type="button" onClick={() => deletData(item?.uid)} className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                                        <i className="las la-trash icon-icon">
                                                        </i>
                                                    </button>
                                                </td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>

                            <div className="aiz-pagination">
                                {/* <Pagination onChange={''} total={''} showQuickJumper /> */}
                            </div>
                        </div>
                    </div>
                </div >
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
            </div >
        </>
    )
}
export default ListJwelleryProductsComp