import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./AddNewProduct.css";
import ShippingConfigurationAdmin from "../../Components/addNewProductsComponents/ShippingConfigurationAdmin";
import {
  useGetBrandsQuery,
  useGetCurrencyQuery,
  useGetIndustryQuery,
  useGetLanguagesQuery,
  useGetPickupPointQuery,
  useGetProductByIdQuery,
  useGetSellersQuery,
  useGetUnitMasterQuery,
} from "../../Components/all-products/allproductsApi/allProductsApi";
import { ToastContainer, toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import ToggleStatus from "../../Components/toggleStatus/ToggleStatus";
import ProductDescriptionWrapper from "../../Components/productDescriptionWrapper/productDescriptionWrapper";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Checkbox, ConfigProvider } from "antd";
import ProductInforamation from "./partial/ProductInformation";
import ProductVideo from "./partial/ProductVideos";
import SEOMetaTags from "./partial/SEOMetaTags";
import FlashDeal from "./partial/FlashDeal";
import Variation from "./partial/Variation";
import ProductList from "./partial/ProductList";
import INITIAL_STATE from "./partial/Constant";
import { setDataDescription } from "../../Components/productDescriptionWrapper/textEditorSlice";

const toastSuccessMessage = (message) => {
  toast.success(message, {
    position: "top-center",
  });
};

const toastErrorMessage = (message) => {
  toast.error("Product not added", {
    position: "top-center",
  });
};
const variationIdVsPricingAndAttributes = new Map();
function AddNewProductsPage() {
  const [categ, setCateg] = useState([]);
  const token = window.localStorage.getItem("token");
  const isSellerLogin = window.localStorage.getItem("isSellerLogin");

  const params = useParams();
  const { data: unitMast } = useGetUnitMasterQuery(token);
  const { data: pickUp } = useGetPickupPointQuery();

  const [inputval, setInputVal] = useState(INITIAL_STATE);

  const changeStatus = (isStatus, key) => {
    const clonedInputVal = { ...inputval };
    clonedInputVal[key] = isStatus;
    setInputVal(clonedInputVal);
  };
  const brandData = useGetBrandsQuery(token);
  const { data: sellerD } = useGetSellersQuery(token);
  // const { productDescription } = useSelector((state) => {
  //   return state.textEditorData;
  // });
  const { data } = useGetLanguagesQuery(token);
  const { data: currdata, isLoading } = useGetCurrencyQuery(token);
  const [value, setValue] = useState(0);
  const [val, setVal] = useState([]);
  const [existPro, setExistPro] = useState(false);
  const [isExistSlug, setIsExistSlug] = useState(false);
  const [spcOr, setspcOr] = useState(false);
  const [data1, setData1] = useState();
  const [variationList, setVariationList] = useState([]);
  const [variationForm, setVariationForm] = useState([]);
  const navigate = useNavigate();
  const [shoingLoader, setshoingLoader] = useState(false);

  const {
    data: productData,
    isSuccess,
    isLoading: productLoading,
  } = useGetProductByIdQuery({ id: params?.id, token: token });

  const dispatch = useDispatch();

  useEffect(() => {
    const getCatData = async () => {
      const getCategoryName = [];
      const resData = await axios.get(
        `https://onlineparttimejobs.in/api/category/admin`,
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      for (let i = 0; i < resData.data.length; i++) {
        getCategoryName.push({
          name: resData.data[i].name,
          _id: resData.data[i]._id,
        });
      }
      if (getCategoryName.length) {
        setCateg(getCategoryName);
      }
    };
    getCatData();
  }, [token]);

  useEffect(() => {
    if (params?.id) {
      if (productData) {
        setVal(productData?.product || []);
        setVariationForm(productData?.product[0]?.variation_Form || []);
        setVariationList(productData?.product[0]?.variations || []);
      }
    } else {
      if (data && currdata) {
        const maped = data.map((item) => {
          return {
            ...INITIAL_STATE,
            language_id: { _id: item._id, name: item.name },
            variations: [],
            variation_Form: [],
          };
        });

        setVal(maped);
        setVariationForm([]);
        setVariationList([]);
        setspcOr(false);
        setVariationList([]);
        setVariationForm([]);
        setExistPro(false);
        setIsExistSlug(false);
        setspcOr(false);
        dispatch(setDataDescription("<p><br></p>"));
      }
    }
  }, [data, currdata, productData, params?.id]);

  const setattributesVal = (data) => {
    setVariationForm(data || []);
  };

  const handleVariantData = (data) => {
    let existingId = "";
    let findIndex = data.findIndex((item) => {
      const variationIdVsPricingAndAttributesItem =
        variationIdVsPricingAndAttributes.get(item._id);

      if (
        variationIdVsPricingAndAttributesItem &&
        item._id === variationIdVsPricingAndAttributesItem._id
      ) {
        existingId = item._id;
        return true;
      }

      return false;
    });
    if (findIndex !== -1) {
      data[findIndex] = variationIdVsPricingAndAttributes.get(existingId);
    }
    setVariationList(data);
  };

  function handleTagKeyDown(e) {
    if (e.key !== "Enter") return;
    let cloneAllData = JSON.parse(JSON.stringify(val));
    if (!e.target.value.trim()) return;
    cloneAllData[value].tags = [...cloneAllData[value]?.tags, e.target?.value];
    e.target.value = "";
    setVal(cloneAllData);
  }
  const removetagTag = (index) => {
    let cloneAllData = JSON.parse(JSON.stringify(val));
    let remainingTags = cloneAllData[value].filter((item, i) => i !== index);
    cloneAllData[value].tags = remainingTags;
    setVal(cloneAllData);
  };

  const getDatas = async () => {
    const res = await axios.get(
      "https://onlineparttimejobs.in/api/attributeSetMaster/admin",
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setData1(res.data);
  };

  useEffect(() => {
    getDatas();
    return () => {
      setVariationForm([]);
      setVariationList([]);
      setspcOr(false);
      setVariationList([]);
      setVariationForm([]);
      setExistPro(false);
      setIsExistSlug(false);
      setspcOr(false);
    };
  }, []);
  const changettriPro = (list) => {
    const cloneValue = JSON.parse(JSON.stringify(val));
    let existingId = cloneValue[value].attributeList.map((item) => item._id);
    let newAttribute = list.filter((item) => !existingId.includes(item._id));
    cloneValue[value].attributeList = [
      ...cloneValue[value].attributeList,
      ...newAttribute,
    ];
    setVal(cloneValue);
  };

  const removeRowAt = (id, selectedIndex) => {
    const cloneValue = JSON.parse(JSON.stringify(val));
    const filterd = cloneValue[value]?.attributeList[
      selectedIndex
    ]?.list?.filter((item) => item.attribute?._id !== id);
    cloneValue[value].attributeList[selectedIndex].list = filterd;
    setVal(cloneValue);
  };

  const changeValues = (e, item) => {
    const cloneValue = JSON.parse(JSON.stringify(val));
    const selectedIndex = e.target.id;
    const filterd = cloneValue[value]?.attributeList[selectedIndex]?.list?.map(
      (item) => {
        if (item?.attribute?._id === e.target.name) {
          return { ...item, value: e.target.value };
        } else {
          return item;
        }
      }
    );
    cloneValue[value].attributeList[selectedIndex].list = filterd;

    setVal(cloneValue);
  };

  const handleCategoryId = (ids) => {
    val[value].category_id = [...ids];
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onChangeHandler = async (e, id, bul) => {
    let maped;
    if (typeof bul === "boolean") {
      maped = val?.map((item) => {
        if (item?.language_id?._id === id) {
          const obj = {
            ...item,
            [e.target.name]: bul,
          };
          return obj;
        } else {
          return item;
        }
      });
      setVal(maped);
    } else if (bul) {
      maped = val?.map((item) => {
        if (item?.language_id?._id === id) {
          const obj = {
            ...item,
            [e.target.name]: bul,
          };
          return obj;
        } else {
          return item;
        }
      });
      setVal(maped);
    } else {
      maped = val?.map((item) => {
        if (item?.language_id?._id === id) {
          const obj = {
            ...item,
            [e.target.name]: e.target.value,
          };
          return obj;
        } else {
          return item;
        }
      });
      setVal(maped);
      if (e.target.name === "name") {
        const res = await axios.get(
          `https://onlineparttimejobs.in/api/product/checkName/${e.target.value}`,
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: "Bearer " + token,
            },
          }
        );
        setExistPro(res.data?.isExist);
      } else if (e.target.name === "slug") {
        const res = await axios.get(
          `https://onlineparttimejobs.in/api/product/checkslug/${e.target.value}`,
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: "Bearer " + token,
            },
          }
        );
        setIsExistSlug(res.data?.isExist);
      }
    }
    console.log("maped", maped);
  };

  const freshDeals = (e) => {
    let cloneAllData = JSON.parse(JSON.stringify(val));
    let modifiedObject = JSON.parse(JSON.stringify(cloneAllData[value]));
    modifiedObject.flashDeal[e.target.name] = e.target.value;
    cloneAllData[value] = modifiedObject;
    setVal(cloneAllData);
  };

  const addFile = async (clonedObj) => {
    const urlBase = "https://onlineparttimejobs.in/api/product";
    const endpoint = params.id ? `/${params.id}` : "/add_product";
    const url = `${urlBase}${endpoint}`;

    const images = new FormData();
    const cloned = JSON.parse(JSON.stringify(clonedObj));
    cloned.forEach((item) => {
      item.variations = variationList;
      item.variation_Form = variationForm;
    });

    try {
      const res = await axios({
        method: params.id ? "put" : "post",
        url,
        data: { list: cloned },
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      });

      toastSuccessMessage(
        params.id
          ? "Product updated Successfully"
          : "Product added Successfully"
      );

      setTimeout(() => {
        setspcOr(false);
        setVariationList([]);
        setVariationForm([]);
        setVal([]);
        setExistPro(false);
        setIsExistSlug(false);
        setspcOr(false);
        navigate("../products/all");
      }, 5000);
    } catch (error) {
      console.log("error", error);
      toastErrorMessage(
        params.id ? "Product not updated" : "Product not added"
      );
      setspcOr(false);
    }
  };

  const addNewAttributeData = async (e, id) => {
    e.preventDefault();
    let clone2 = JSON.parse(JSON.stringify(val));
    setspcOr(true);
    addFile(clone2, token);
  };

  const onchangeImgeHandler = async (e) => {
    setshoingLoader(true);
    const inpVal = e.target.files;
    const images = new FormData();
    let cloneAllData = JSON.parse(JSON.stringify(val));
    for (let ind = 0; ind < inpVal?.length; ind++) {
      try {
        const element0 = inpVal[ind];
        images.set("image", element0);

        const res = await axios.post(
          "https://onlineparttimejobs.in/api/cloudinaryImage/addImage",
          images
        );
        const obj = { public_id: res.data.public_id, url: res.data.url };
        if (e.target.name === "gallery_image") {
          cloneAllData[value].images.push(obj);
        } else if (e.target.name === "mainImage_url") {
          cloneAllData[value].mainImage_url = { ...obj };
        } else {
          cloneAllData[value].meta_image = { ...obj };
        }
        setshoingLoader(false);
      } catch (error) {
        console.log("Gallery Image not uploaded");
        setshoingLoader(false);
      } finally {
        images.delete("image");
        setshoingLoader(false);
      }
    }
    setVal(cloneAllData);
  };

  const onchangeImges1 = (e, id) => {
    const inpVal = e.target.files[0];
    const maped = val?.map((item) => {
      if (item?.language_id?._id === id) {
        const obj = { ...item, mainImage_url: inpVal };
        return obj;
      } else {
        return item;
      }
    });
    setVal(maped);
  };
  const { data: industryData } = useGetIndustryQuery(token);

  const deleteRow = (id) => {
    let cloneAllData = JSON.parse(JSON.stringify(variationList));
    const filterdData = cloneAllData.filter((item) => {
      return item._id !== id;
    });
    setVariationList(filterdData);
  };

  const updateVarientPriceAndAttributes = (data) => {
    variationIdVsPricingAndAttributes.set(data._id, data);
    const cloneAllData = JSON.parse(JSON.stringify(variationList));
    const selectedIndex = cloneAllData.findIndex((item) => {
      return item._id === data._id;
    });
    if (selectedIndex !== -1) {
      cloneAllData[selectedIndex] = data;
    }
    setVariationList(cloneAllData);
  };

  const setFinalCatDIndus = (selectedIds) => {
    let cloneAllData = JSON.parse(JSON.stringify(val));
    cloneAllData[value].industry_id = selectedIds;
    setVal(cloneAllData);
  };

  const handleCallBackData = (data) => {
    let cloneAllData = JSON.parse(JSON.stringify(val));
    let modifiedObject = { ...cloneAllData[value] };
    modifiedObject.productDescription = data || "<p><br></p>";
    cloneAllData[value] = modifiedObject;
    setVal(cloneAllData);
  };

  return (
    <>
      <div className="aiz-main-content">
        {spcOr && (
          <div className="preloaderCount">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">ded</span>
            </div>
            <h6>please wait your product in uploading</h6>
          </div>
        )}

        {isLoading && (
          <div className="preloaderCount">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {shoingLoader && (
          <div className="preloaderCount">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">ded</span>
            </div>
            <h6>Please Wait your Image in uploading</h6>
          </div>
        )}
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value.toString()}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                {!!val.length &&
                  val?.map((item, i) => {
                    return (
                      <Tab
                        label={item?.language_id?.name}
                        value={i.toString()}
                        key={i}
                      />
                    );
                  })}
              </TabList>
            </Box>
            {val &&
              val?.map((item, i) => {
                return (
                  <TabPanel value={i.toString()} key={`tabList${i}`}>
                    <div className="px-15px px-lg-25px">
                      <div className="aiz-titlebar text-left mt-2 mb-3">
                        {params.id ? (
                          <h5 className="mb-0 h6">Edit Product {item.lable}</h5>
                        ) : (
                          <h5 className="mb-0 h6">
                            Add New Product {item.lable}
                          </h5>
                        )}
                      </div>
                      <div>
                        <form
                          className="form form-horizontal mar-top"
                          id="choice_form"
                        >
                          <div className="row gutters-5">
                            <div className="col-lg-8">
                              {/* <ProductsInformationAdmin /> */}
                              <ProductInforamation
                                item={item}
                                onChangeHandler={onChangeHandler}
                                existPro={existPro}
                                setCategoryIds={handleCategoryId}
                                categ={categ}
                                industryData={industryData}
                                setFinalCatDIndus={setFinalCatDIndus}
                                isSellerLogin={isSellerLogin}
                                sellerD={sellerD}
                                brandData={brandData}
                                unitMast={unitMast}
                                tags={item.tags}
                                onchangeImges={onchangeImgeHandler}
                                removetagTag={removetagTag}
                                onchangeImges1={onchangeImges1}
                                changettriPro={changettriPro}
                                handleTagKeyDown={handleTagKeyDown}
                                data1={data1}
                                proAtt={item?.attributeList}
                                changeValues={changeValues}
                                removeRowAt={removeRowAt}
                              />

                              <ProductVideo
                                item={item}
                                onChangeHandler={onChangeHandler}
                              />

                              {item?.language_id?.name
                                ?.toLowerCase()
                                .includes("english") && (
                                <SEOMetaTags
                                  item={item}
                                  onChangeHandler={onChangeHandler}
                                  onchangeImges={onchangeImgeHandler}
                                  isExistSlug={isExistSlug}
                                />
                              )}
                              {/* <SeoMetaTagsAdmin /> */}
                            </div>
                            <div className="col-lg-4">
                              <ShippingConfigurationAdmin />

                              <div className="card">
                                <div className="card-header">
                                  <h5 className="mb-0 h6">
                                    Low Stock Quantity Warning
                                  </h5>
                                </div>
                                <div className="card-body">
                                  <div className="form-group mb-3">
                                    <label htmlFor="name">Quantity</label>
                                    <input
                                      type="number"
                                      name="low_stock_quantity"
                                      value={item?.low_stock_quantity}
                                      className="form-control"
                                      fdprocessedid="dtmr1"
                                      onChange={(e) => {
                                        onChangeHandler(
                                          e,
                                          item?.language_id?._id
                                        );
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="card">
                                <div className="card-header">
                                  <h5 className="mb-0 h6">
                                    Stock Visibility State
                                  </h5>
                                </div>
                                <div className="card-body">
                                  <div className="form-group row">
                                    <label className="col-md-6 col-from-label">
                                      Show Stock Quantity
                                    </label>
                                    <div className="col-md-6">
                                      <ToggleStatus
                                        name="show_stock_quantity"
                                        isStatus={item.show_stock_quantity}
                                        changeStatus={changeStatus}
                                        onChangeHandler={(e) =>
                                          onChangeHandler(
                                            e,
                                            item?.language_id?._id,
                                            !item.show_stock_quantity
                                          )
                                        }
                                      />
                                    </div>
                                  </div>

                                  <div className="form-group row">
                                    <label className="col-md-6 col-from-label">
                                      Show Stock With Text Only
                                    </label>
                                    <div className="col-md-6">
                                      <ToggleStatus
                                        name="show_stock_with_text_only"
                                        isStatus={
                                          item.show_stock_with_text_only
                                        }
                                        onChangeHandler={(e) =>
                                          onChangeHandler(
                                            e,
                                            item?.language_id?._id,
                                            !item.show_stock_with_text_only
                                          )
                                        }
                                      />
                                    </div>
                                  </div>

                                  <div className="form-group row">
                                    <label className="col-md-6 col-from-label">
                                      Hide Stock
                                    </label>
                                    <div className="col-md-6">
                                      <ToggleStatus
                                        name="hide_stock"
                                        isStatus={item.hide_stock}
                                        onChangeHandler={(e) =>
                                          onChangeHandler(
                                            e,
                                            item?.language_id?._id,
                                            !item.hide_stock
                                          )
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="card">
                                <div className="card-header">
                                  <h5 className="mb-0 h6">Cash on Delivery</h5>
                                </div>
                                <div className="card-body">
                                  <div className="form-group row">
                                    <label className="col-md-6 col-from-label">
                                      Status
                                    </label>
                                    <div className="col-md-6">
                                      <ToggleStatus
                                        name="cash_on_delivery"
                                        isStatus={item.cash_on_delivery}
                                        onChangeHandler={(e) =>
                                          onChangeHandler(
                                            e,
                                            item?.language_id?._id,
                                            !item.cash_on_delivery
                                          )
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="card">
                                <div className="card-header">
                                  <h5 className="mb-0 h6">Featured</h5>
                                </div>
                                <div className="card-body">
                                  <div className="form-group row">
                                    <label className="col-md-6 col-from-label">
                                      Status
                                    </label>
                                    <div className="col-md-6">
                                      <input
                                        type="checkbox"
                                        name={"featured"}
                                        checked={item.featured}
                                        onChange={(e) => {
                                          onChangeHandler(
                                            e,
                                            item?.language_id?._id,
                                            !item.featured
                                          );
                                        }}
                                      />

                                      <span />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="card">
                                <div className="card-header">
                                  <h5 className="mb-0 h6">Todays Deal</h5>
                                </div>
                                <div className="card-body">
                                  <div className="form-group row">
                                    <label className="col-md-6 col-from-label">
                                      Status
                                    </label>
                                    <div className="col-md-6">
                                      <input
                                        type="checkbox"
                                        name={"todays_deal"}
                                        checked={item.todays_deal}
                                        onChange={(e) => {
                                          onChangeHandler(
                                            e,
                                            item?.language_id?._id,
                                            !item.todays_deal
                                          );
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="card">
                                <div className="card-header">
                                  <h5 className="mb-0 h6">Trending</h5>
                                </div>
                                <div className="card-body">
                                  <div className="form-group row">
                                    <label className="col-md-6 col-from-label">
                                      Status
                                    </label>
                                    <div className="col-md-6">
                                      <input
                                        type="checkbox"
                                        name={"trending"}
                                        checked={item.trending}
                                        onChange={(e) => {
                                          onChangeHandler(
                                            e,
                                            item?.language_id?._id,
                                            !item.trending
                                          );
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <FlashDeal
                                flashDeal={item?.flashDeal}
                                freshDeals={freshDeals}
                              />
                            </div>
                          </div>

                          <ProductDescriptionWrapper
                            productDescription={item?.productDescription}
                            callBackWithHtml={handleCallBackData}
                          />

                          <div className="row">
                            <Variation
                              setattributesVal={setattributesVal}
                              setVariantsData={handleVariantData}
                              variations={variationList}
                              variationForm={variationForm}
                            />
                            <ProductList
                              onChangeHandler={onChangeHandler}
                              item={{
                                ...item,
                                variations: variationList,
                                variation_Form: variationForm,
                              }}
                              sellerD={sellerD}
                              pickUp={pickUp}
                              isVariantLoading={false}
                              updatedVariants={variationList}
                              deleteRow={deleteRow}
                              updateVarientPriceAndAttributes={
                                updateVarientPriceAndAttributes
                              }
                            />
                          </div>
                          <div className="row">
                            <div
                              className="col-md-3 form-group physical_product_show"
                              id="quantity"
                            >
                              <label className="title-color">
                                Total Quantity
                              </label>
                              <input
                                type="number"
                                placeholder="Quantity"
                                name="total_quantity"
                                className="form-control"
                                required
                                fdprocessedid="gny5jm"
                                onChange={(e) => {
                                  onChangeHandler(e, item?.language_id?._id);
                                }}
                              />
                            </div>
                            <div
                              className="col-md-3 form-group"
                              id="minimum_order_qty"
                            >
                              <label className="title-color">
                                Minimum order quantity
                              </label>
                              <input
                                type="number"
                                value={item?.minimum_order_qty}
                                placeholder="Minimum order quantity"
                                name="minimum_order_qty"
                                className="form-control"
                                required
                                fdprocessedid="wabmv"
                                onChange={(e) => {
                                  onChangeHandler(e, item?.language_id?._id);
                                }}
                              />
                            </div>
                            <div
                              className="col-md-3 form-group physical_product_show"
                              id="shipping_cost"
                            >
                              <label className="title-color">
                                Shipping cost{" "}
                              </label>
                              <input
                                type="number"
                                placeholder="Shipping cost"
                                name="shipping_cost"
                                className="form-control"
                                required
                                fdprocessedid="pvn15"
                                onChange={(e) => {
                                  onChangeHandler(e, item?.language_id?._id);
                                }}
                              />
                            </div>
                            <div
                              className="col-md-3 form-group physical_product_show"
                              id="shipping_cost"
                            >
                              <label className="title-color">
                                Shipping cost multiply with quantity{" "}
                              </label>
                              <label className="switcher title-color">
                                <input
                                  className="switcher_input"
                                  type="checkbox"
                                  name="Shipping_cost_multiply_with_quantity"
                                  checked={
                                    item.Shipping_cost_multiply_with_quantity
                                  }
                                  onChange={(e) => {
                                    onChangeHandler(
                                      e,
                                      item?.language_id?._id,
                                      !item.Shipping_cost_multiply_with_quantity
                                    );
                                  }}
                                />
                                <span className="switcher_control" />
                              </label>
                            </div>
                          </div>
                        </form>
                      </div>
                      {val.length === i + 1 ? (
                        <div className="form-group mb-3 text-right">
                          <button
                            type="button"
                            className="btn btn-primary"
                            fdprocessedid="uzw7ye"
                            onClick={() => {
                              setValue(i + 1);
                            }}
                          >
                            Prev
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary"
                            fdprocessedid="uzw7ye"
                            onClick={(e) => {
                              addNewAttributeData(e, item?.language_id?._id);
                            }}
                          >
                            Save
                          </button>
                        </div>
                      ) : (
                        ""
                      )}
                      <ToastContainer />
                    </div>
                  </TabPanel>
                );
              })}
          </TabContext>
        </Box>
      </div>
    </>
  );
}
export default AddNewProductsPage;
