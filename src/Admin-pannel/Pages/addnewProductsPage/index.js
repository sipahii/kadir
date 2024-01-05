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
  useGetSellersQuery,
  useGetUnitMasterQuery,
} from "../../Components/all-products/allproductsApi/allProductsApi";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import ToggleStatus from "../../Components/toggleStatus/ToggleStatus";
import ProductDescriptionWrapper from "../../Components/productDescriptionWrapper/productDescriptionWrapper";
import { useSelector } from "react-redux";
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

const toastSuccessMessage = () => {
  toast.success("Product added Successfully", {
    position: "top-center",
  });
};

const toastErrorMessage = () => {
  toast.error("Product not added", {
    position: "top-center",
  });
};

function AddNewProductsPage() {
  // setspcOr(false)
  const [tags, setTags] = useState([]);
  const [categ, setCateg] = useState([]);
  const [finalCatD, setFinalCatD] = useState();
  const [finalCatDIndus, setFinalCatDIndus] = useState();

  const [flashDeal, setFlashdeal] = useState({
    start_Date: "",
    end_Date: "",
    discount_type: "",
    discount: "",
  });
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
  const [varianstData, setVariantsData] = useState();
  const { productDescription } = useSelector((state) => {
    return state.textEditorData;
  });

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
      // const resData = await reqData.json();
      //
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
  }, []);
  const [attributesVal, setattributesVals] = useState();

  const setattributesVal = (val) => {
    setattributesVals(val);
  };

  const [spinn, setspinn] = useState(false);
  const [spcOr, setspcOr] = useState(false);

  const handleVariantData = (data) => {
    setVariantsData(data);
  };

  function handleTagKeyDown(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
  }
  const removetagTag = (index) => [
    setTags(tags.filter((el, i) => i !== index)),
  ];

  const [proAtt, setProAtt] = useState();
  const [data1, setData1] = useState();
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
  }, []);
  const changettriPro = (e) => {
    const maped = data1.find((item) => {
      return item._id === e.target.value;
    });
    setProAtt(maped);
  };

  const removeRowAt = (id) => {
    const clone = { ...proAtt };
    const filterd = clone.values.filter((item) => {
      if (item._id === id) {
        return;
      } else {
        return item;
      }
    });
    clone.values = filterd;
    setProAtt(clone);
  };

  const changeValues = (e) => {
    const clone = { ...proAtt };
    const filterd = clone.values.map((item) => {
      if (item._id === e.target.name) {
        return { ...item, value: e.target.value };
      } else {
        return item;
      }
    });
    clone.values = filterd;
    setProAtt(clone);
  };

  const [shoing, setShoaing] = useState({
    featured: false,
    todays_deal: false,
    trending: false,
  });
  const changeHandr = (e) => {
    const clone = { ...shoing };
    const name = e.target.name;
    clone[e.target.name] = !clone[name];
    setShoaing(clone);
  };

  const { data } = useGetLanguagesQuery(token);
  const { data: currdata } = useGetCurrencyQuery(token);
  const [value, setValue] = useState(0);
  const [val, setVal] = useState(data);
  useEffect(() => {
    if (data && currdata) {
      const maped = data.map((item) => {
        return { language_id: item._id, lable: item.name, ...INITIAL_STATE };
      });

      setVal(maped);
    }
  }, [data, currdata]);

  const changeDataForm = (index) => {
    setFinalCatD(val[index].category_id);
    setTags(val[index].tags);
    setVariantsData(val[index].variations);
    setShoaing({
      featured: val[index].featured,
      todays_deal: val[index]?.todays_deal,
      trending: val[index]?.trending,
    });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    changeDataForm(newValue);
  };

  const [existPro, setExistPro] = useState(false);

  const onChangeHandler = async (e, id, bul) => {
    console.log("togglerrcheckType--", typeof bul);
    if (typeof bul === "boolean") {
      console.log("togglerrcheck--", bul);
      const maped = val.map((item) => {
        if (item.language_id === id) {
          // const obj = { ...item, [e.target.name]: e.target.value }
          const obj = {
            ...item,
            [e.target.name]: bul,
            variations: varianstData,
            flashDeal: flashDeal,
            variation_Form: attributesVal,
            tags: tags,
            category_id: finalCatD,
            productDescription: productDescription,
          };
          return obj;
        } else {
          return item;
        }
      });
      setVal(maped);
    } else if (bul) {
      const maped = val.map((item) => {
        if (item.language_id == id) {
          // const obj = { ...item, [e.target.name]: e.target.value }
          const obj = {
            ...item,
            [e.target.name]: bul,
            variations: varianstData,
            flashDeal: flashDeal,
            variation_Form: attributesVal,
            tags: tags,
            category_id: finalCatD,
            productDescription: productDescription,
          };
          return obj;
        } else {
          return item;
        }
      });
      setVal(maped);
    } else {
      const maped = val.map((item) => {
        if (item.language_id == id) {
          // const obj = { ...item, [e.target.name]: e.target.value }
          const obj = {
            ...item,
            [e.target.name]: e.target.value,
            variations: varianstData,
            flashDeal: flashDeal,
            variation_Form: attributesVal,
            tags: tags,
            category_id: finalCatD,
            productDescription: productDescription,
          };
          return obj;
        } else {
          return item;
        }
      });
      setVal(maped);
      if (e.target.name == "name") {
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
      }
    }
  };

  const [disNextVal, setdisNextVal] = useState(true);
  const freshDeals = (e) => {
    const clone = { ...flashDeal };
    clone[e.target.name] = e.target.value;
    setFlashdeal(clone);
    if (clone.start_Date) {
      setdisNextVal(false);
    }
  };

  const addFile = async (clonedObj) => {
    const url = "https://onlineparttimejobs.in/api/product/add_product";
    const images = new FormData();
    let cloned = [...clonedObj];
    // console.log('ffiinnaal', cloned)
    // return

    try {
      const res = await axios.post(
        url,
        { list: cloned },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toastSuccessMessage();
      setspcOr(false);
    } catch (error) {
      toastErrorMessage();
      setspcOr(false);
    }
  };

  const addNewAttributeData = async (e, id) => {
    e.preventDefault();
    let clone2 = [...val];

    setspcOr(true);

    console.log(clone2);
    // return
    addFile(clone2, token);
  };
  const onchangeImges = (e, id) => {
    const inpVal = e.target.files;
    const maped = val.map((item) => {
      if (item.language_id == id) {
        const obj = { ...item, images: inpVal };
        return obj;
      } else {
        return item;
      }
    });
    setVal(maped);
  };
  const onchangeImges1 = (e, id) => {
    const inpVal = e.target.files[0];
    const maped = val.map((item) => {
      if (item.language_id == id) {
        const obj = { ...item, mainImage_url: inpVal };
        return obj;
      } else {
        return item;
      }
    });
    setVal(maped);
  };

  const SaveData = (i, str, id) => {
    const maped = val.map((item) => {
      if (item.language_id == id) {
        const obj = {
          ...item,
          ...shoing,
          variations: varianstData,
          flashDeal: flashDeal,
          variation_Form: attributesVal,
          tags: tags,
          category_id: finalCatD ? finalCatD : item?.category_id,
          productDescription: productDescription
            ? productDescription
            : item.productDescription,
          attributes: [proAtt?._id],
          attributeSet: proAtt?.values,
          industry_id: finalCatDIndus,
        };
        return obj;
      } else {
        return item;
      }
    });
    setVal(maped);
    setattributesVals([]);
    window.scrollTo(0, 0);
  };
  const { data: industryData } = useGetIndustryQuery(token);

  const getUpdatedVariant = (variant) => {
    // const updatedData = updatedVariants?.map((item) => {
    //   if (variant._id === item._id) {
    //     return variant;
    //   } else {
    //     return item;
    //   }
    // });
    // setUpdatedVariants(updatedData);
  };

  const deleteRow = () => {};

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

        {spinn && (
          <div className="preloaderCount">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                {data &&
                  data.map((item, i) => {
                    return <Tab label={item?.name} value={i} />;
                  })}
              </TabList>
            </Box>
            {val &&
              val.map((item, i) => {
                return (
                  <TabPanel value={i} key={i}>
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
                                setFinalCatD={setFinalCatD}
                                categ={categ}
                                industryData={industryData}
                                setFinalCatDIndus={setFinalCatDIndus}
                                isSellerLogin={isSellerLogin}
                                sellerD={sellerD}
                                brandData={brandData}
                                unitMast={unitMast}
                                tags={tags}
                                onchangeImges={onchangeImges}
                                removetagTag={removetagTag}
                                onchangeImges1={onchangeImges1}
                                changettriPro={changettriPro}
                                handleTagKeyDown={handleTagKeyDown}
                                data1={data1}
                                proAtt={proAtt}
                                changeValues={changeValues}
                                removeRowAt={removeRowAt}
                              />

                              <ProductVideo
                                item={item}
                                onChangeHandler={onChangeHandler}
                              />

                              {i === 0 && (
                                <SEOMetaTags
                                  item={item}
                                  onChangeHandler={onChangeHandler}
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
                                        onChangeHandler(e, item.language_id);
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
                                        changeStatus={changeStatus}
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
                                        changeStatus={changeStatus}
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
                                        changeStatus={changeStatus}
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
                                        checked={shoing.featured}
                                        onChange={changeHandr}
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
                                        checked={shoing.todays_deal}
                                        onChange={changeHandr}
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
                                        checked={shoing.trending}
                                        onChange={changeHandr}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <FlashDeal
                                flashDeal={flashDeal}
                                freshDeals={freshDeals}
                              />
                            </div>
                          </div>

                          <ProductDescriptionWrapper />

                          <div className="row">
                            <Variation
                              item={item}
                              setattributesVal={setattributesVal}
                              setVariantsData={handleVariantData}
                            />
                            <ProductList
                              onChangeHandler={onChangeHandler}
                              item={item}
                              sellerD={sellerD}
                              pickUp={pickUp}
                              isVariantLoading={false}
                              updatedVariants={varianstData}
                              getUpdatedVariant={getUpdatedVariant}
                              deleteRow={deleteRow}
                              setVariantsData={setVariantsData}
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
                                name="current_stock"
                                className="form-control"
                                required
                                fdprocessedid="gny5jm"
                                readOnly="readonly"
                                onChange={(e) => {
                                  onChangeHandler(e, item.language_id);
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
                                  onChangeHandler(e, item.language_id);
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
                                  onChangeHandler(e, item.language_id);
                                }}
                              />
                            </div>
                            <div
                              className="col-md-3 form-group physical_product_show"
                              id="shipping_cost"
                            >
                              <label className="title-color">
                                Save Data !{" "}
                              </label>

                              <div>
                                <ConfigProvider
                                  theme={{
                                    components: {
                                      Checkbox: {
                                        colorPrimary: "#ff4d4f",
                                      },
                                    },
                                  }}
                                >
                                  <Checkbox
                                    className="chBox"
                                    onClick={() => {
                                      SaveData(i, "", item.language_id);
                                    }}
                                  >
                                    Checkbox
                                  </Checkbox>
                                </ConfigProvider>
                              </div>
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
                                  name=" Shipping_cost_multiply_with_quantity"
                                  onChange={(e) => {
                                    onChangeHandler(e, item.language_id);
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
                              addNewAttributeData(e, item.language_id);
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
