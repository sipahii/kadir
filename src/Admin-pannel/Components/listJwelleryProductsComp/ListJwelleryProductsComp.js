import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import ExportDataInPdf from "../../../common/exportDataInPdf/ExportDataInPdf";

function ListJwelleryProductsComp() {
    const [getListData, setgetListData] = useState();
    const [categoryTypeD, setCategoryTypeD] = useState();
    const [categoryD, setCategoryD] = useState();
    const [labourChargeTypeD, setLabourChargeTypeD] = useState();
    const [collectionsD, setCollectionsD] = useState();
    const [styleD, setStyleD] = useState();
    const [occasionD, setOccassionD] = useState();

    const [finalLabourChargeTypeD, setFinalLabourChargeTypeD] = useState();
    const [finalCollectionD, setFinalCollectionD] = useState();
    const [finalStyleD, setFinalStyleD] = useState();
    const [finalOccassionD, setFinalOccassionD] = useState();

    const [inputVal, setInputVal] = useState({
        categoryType: null, category: null, name: null, sku: null, status: null, type: null, labourChargeType: [], collection: [], styles: [], occasion: [],
    });

    const [loading, setLoading] = useState(true)
    const token = window.localStorage.getItem('adminToken');

    const getdata = async () => {
        setLoading(true)
        try {
            const res = await axios.get('https://onlineparttimejobs.in/api/product/jewel/admin', {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            setgetListData(res?.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
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
    const getCategoryData = async () => {
        const res = await axios.get('https://onlineparttimejobs.in/api/category/admin', {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setCategoryD(res.data)
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
    useEffect(() => {
        getdata()
        getCategoryTypeData()
        getCategoryData()
        getLabourChargeTypeData()
        getCollectionsData()
        getStylesData()
        getOccasionData()
    }, []);


    const onChangeHandler = (e) => {
        const val = e.target.value;
        const inpName = e.target.name;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = val;
        setInputVal(clonedObj)
    };

    const filterData = async (e) => {
        e.preventDefault();
        const cloned = { ...inputVal, labourChargeType: finalLabourChargeTypeD, collection: finalCollectionD, styles: finalStyleD, occasion: finalOccassionD }
        const res = await axios.post('https://onlineparttimejobs.in/api/product/jewel/filter', cloned, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            }
        });
        setgetListData(res.data)
        inputVal.categoryType = null
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


    const toastSuccessMessage = () => {
        toast.success("Product Deleted", {
            position: "top-center"
        })
    };
    const toastErrorMessage = () => {
        toast.error("Product Not Deleted ", {
            position: "top-center"
        })
    };


    const deletData = async (uid) => {
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api/product/${uid}`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            toastSuccessMessage()
            getdata()
        } catch (error) {
            toastErrorMessage()
        }
    };

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    {/* <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Products</h1>
                            </div>
                        </div>
                    </div> */}
                    <div className="card">
                        {/* <div className="card-header">
                            <h5 className="mb-0 h6">Products</h5>
                            <span style={{ width: '8px', height: '8px', backgroundColor: 'red', color: 'white', padding: '4px 6px', borderRadius: '3px' }}>03</span>
                            <div className="col-md-6 text-md-right">
                                <Link to="/admin/add-metal-purity" className="btn btn-info">
                                    <span>+ Add Product</span>
                                </Link>
                            </div>
                        </div> */}

                        <div className="card-header custom-card-header" id="custome-cardHeader">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h5 className="mb-0 h6">Products</h5>
                                </div>
                                {getListData?.length ? <div className="col-lg-2 text-right" >
                                    <button style={{ background: '#2e294e', padding: '0', color: 'white', borderRadius: '5px', margin: '0' }}>
                                        <ReactHTMLTableToExcel
                                            style={{ margin: '0' }}
                                            id="test-table-xls-button"
                                            className="download-table-xls-button cusxel"
                                            table="table-to-xlsx"
                                            filename="tablexls"
                                            sheet="tablexls"
                                            buttonText="Download Excel sheet" />
                                    </button>
                                </div> : null}
                                {getListData?.length ? <div className="col-lg-2">
                                    <ExportDataInPdf />
                                </div> : null}

                                <div className="col-lg-2 text-md-right">
                                    <Link to="/admin/add-jwellery-produt" className="btn btn-info">
                                        <span>Add Products</span>
                                    </Link>
                                </div>
                            </div>
                        </div>



                        <div className="card-body">

                            {/* <section className="form-section"> */}
                            <form id="create-course-form" onSubmit={filterData}>
                                {/* <div className="form-group row"> */}

                                {/* <section className="form-section"> */}
                                <div className="form-group row">
                                    <div className="col-lg-3">
                                        <label className="col-md-12 col-from-label">Category Type</label>
                                        <select className="form-select" aria-label="Default select example" name="categoryType" onChange={onChangeHandler}>
                                            <option selected>Select Category Type</option>
                                            {categoryTypeD && categoryTypeD.map((item, i) => {
                                                return <option value={item?.uid} key={i}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-lg-3">
                                        <label className="col-md-12 col-from-label">Category</label>
                                        <select className="form-select" aria-label="Default select example" name="category" onChange={onChangeHandler}>
                                            <option selected>Select Category</option>
                                            {categoryD && categoryD.map((item, i) => {
                                                return <option value={item?._id} key={i}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
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
                                </div>
                                {/* </section> */}
                                {/* <section className="form-section"> */}
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
                                                        return cat._id
                                                    })
                                                    setFinalLabourChargeTypeD(selectedIds)
                                                }}
                                                onSelect={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat._id
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
                                                        return cat._id
                                                    })
                                                    setFinalCollectionD(selectedIds)
                                                }}
                                                onSelect={(selectedCat) => {
                                                    // setFinalCatD(event)
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat._id
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
                                                        return cat._id
                                                    })
                                                    setFinalStyleD(selectedIds)
                                                }}
                                                onSelect={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat._id
                                                    })
                                                    setFinalStyleD(selectedIds)
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* </section> */}
                                {/* <section className="form-section"> */}
                                <div className="form-group row mt-3 mb-3">
                                    <div className="col-lg-3">
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
                                                        return cat._id
                                                    })
                                                    setFinalOccassionD(selectedIds)
                                                }}
                                                onSelect={(selectedCat) => {
                                                    const selectedIds = selectedCat.map((cat) => {
                                                        return cat._id
                                                    })
                                                    setFinalOccassionD(selectedIds)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <label className="col-md-12 col-from-label">Type</label>
                                        <select className="form-select" name="type" aria-label="Default select example" onChange={onChangeHandler}>
                                            <option selected>Select Type</option>
                                            <option value={'Make to Order'}>Make to Order</option>
                                            <option value={'Ready to Ship'}>Ready to Ship</option>
                                        </select>
                                    </div>

                                    <div className="col-lg-3 mt-4">
                                        <button className="btn btn-primary mr-3" type="submit">Search</button>
                                        <button className="btn btn-danger" type="button" onClick={resetData}>Rest</button>
                                    </div>

                                </div>
                                {/* </section> */}
                                {/* </div> */}
                            </form>
                            {/* </section> */}

                            <div className="table table-responsive">
                                <table className="table exppdf">
                                    <thead>
                                        <tr>
                                            <th class="table-secondary" >#</th>
                                            <th class="table-secondary">Title</th>
                                            <th class="table-secondary">Collection</th>
                                            <th class="table-secondary">Category Type</th>
                                            <th class="table-secondary">Category</th>
                                            <th class="table-secondary">Sub Category</th>
                                            <th class="table-secondary">Labour Type</th>
                                            <th class="table-secondary">Metal Type</th>
                                            <th class="table-secondary">Metal Price Type</th>
                                            <th class="table-secondary">SKU</th>
                                            <th class="table-secondary">HSN Code</th>
                                            {/* <th class="table-secondary">Status</th> */}
                                            <th class="table-secondary">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {loading ? <h3>Loading...</h3> : getListData && getListData?.map((item, i) => {
                                            return <tr key={i}>
                                                <td scope="row">{i + 1}</td>
                                                <td scope="row">{item?.name}</td>

                                                <td scope="row">
                                                    {item?.Collection?.map((collectionitem, i) => {
                                                        return <span key={i} value={collectionitem?._id} style={{ display: 'block' }}>{collectionitem?.name}</span>
                                                    })}
                                                </td>
                                                <td scope="row">
                                                    {item?.categoryType?.map((categtypeitem, i) => {
                                                        return <span key={i} value={categtypeitem?._id} style={{ display: 'block' }}>{categtypeitem?.name}</span>
                                                    })}
                                                </td>
                                                <td scope="row">
                                                    {item?.category?.map((catitem, i) => {
                                                        return <span key={i} value={catitem?._id} style={{ display: 'block' }}>{catitem?.name}</span>
                                                    })}
                                                </td>
                                                <td scope="row">
                                                    {item?.subCategory?.map((subcategitem, i) => {
                                                        return <span key={i} value={subcategitem?._id} style={{ display: 'block' }}>{subcategitem?.name}</span>
                                                    })}
                                                </td>
                                                <td scope="row">
                                                    {item?.labourChargeType?.map((labourtypeitem, i) => {
                                                        return <span key={i} value={labourtypeitem?._id} style={{ display: 'block' }}>{labourtypeitem?.name}</span>
                                                    })}
                                                </td>
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
                            </div>
                        </div>
                    </div>
                </div >
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
                <ToastContainer />


                <table className="table" id="table-to-xlsx" style={{ display: 'none' }}>
                    <thead>
                        <tr>
                            <th class="table-secondary" >#</th>
                            <th class="table-secondary">Title</th>
                            <th class="table-secondary">Collection</th>
                            <th class="table-secondary">Category Type</th>
                            <th class="table-secondary">Category</th>
                            <th class="table-secondary">Sub Category</th>
                            <th class="table-secondary">Labour Type</th>
                            <th class="table-secondary">Metal Type</th>
                            <th class="table-secondary">Metal Price Type</th>
                            <th class="table-secondary">SKU</th>
                            <th class="table-secondary">HSN Code</th>
                        </tr>
                    </thead>
                    <tbody>

                        {loading ? <h3>Loading...</h3> : getListData && getListData?.map((item, i) => {
                            return <tr key={i}>
                                <td scope="row">{i + 1}</td>
                                <td scope="row">{item?.name}</td>

                                <td scope="row">
                                    {item?.Collection?.map((collectionitem, i) => {
                                        return <span key={i} value={collectionitem?._id} style={{ display: 'block' }}>{collectionitem?.name}</span>
                                    })}
                                </td>
                                <td scope="row">
                                    {item?.categoryType?.map((categtypeitem, i) => {
                                        return <span key={i} value={categtypeitem?._id} style={{ display: 'block' }}>{categtypeitem?.name}</span>
                                    })}
                                </td>
                                <td scope="row">
                                    {item?.category?.map((catitem, i) => {
                                        return <span key={i} value={catitem?._id} style={{ display: 'block' }}>{catitem?.name}</span>
                                    })}
                                </td>
                                <td scope="row">
                                    {item?.subCategory?.map((subcategitem, i) => {
                                        return <span key={i} value={subcategitem?._id} style={{ display: 'block' }}>{subcategitem?.name}</span>
                                    })}
                                </td>
                                <td scope="row">
                                    {item?.labourChargeType?.map((labourtypeitem, i) => {
                                        return <span key={i} value={labourtypeitem?._id} style={{ display: 'block' }}>{labourtypeitem?.name}</span>
                                    })}
                                </td>
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
                            </tr>
                        })}
                    </tbody>
                </table>
            </div >
        </>
    )
}
export default ListJwelleryProductsComp