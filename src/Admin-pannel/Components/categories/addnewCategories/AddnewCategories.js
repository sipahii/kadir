import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";
import {
  useAddCategaryMutation,
  useAddNewCategoryMutation,
  useGetCategoriesQuery,
  useGetLanguagesQuery,
} from "../../all-products/allproductsApi/allProductsApi";
import axios from "axios";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import MultilangForm from "./MultilangForm";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AddnewCategories() {
  const token = window.localStorage.getItem("token");

  const toastSuccessMessage = (isEdit) => {
    toast.success(`Category ${isEdit ? "Update" : "added"} Successfully`, {
      position: "top-center",
    });
  };
  const { productDescription } = useSelector((state) => {
    return state.textEditorData;
  });

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { data: langData, refetch } = useGetLanguagesQuery(token);
  const [val, setVal] = useState(langData);
  const params = useParams();
  const navigate = useNavigate();
  const [shoingLoader, setshoingLoader] = useState(false);
  useEffect(() => {
    if (langData) {
      if (!params.id) {
        const maped = langData.map((item) => {
          return {
            name: "",
            language_id: item._id,
            parent_id: "",
            lable: item.name,
            order_level: "",
            type: "",
            banner: {},
            icon: {},
            meta_title: "",
            meta_description: "",
            commision_rate: "",
            level: "",
            top: false,
            featured: false,
            meta_keyword: "",
            slug: "",
            description: "",
            video_link: "",
          };
        });
        setVal(maped);
      }
    }
  }, [langData]);
  const onChangeHandler = (e, id, bul) => {
    if (bul) {
      if (bul == "bul") {
        const maped = val.map((item) => {
          if (item.language_id == id) {
            const obj = { ...item, [e.target.name]: e.target.value };
            return obj;
          } else {
            return item;
          }
        });
        setVal(maped);
        return;
      }
      if (bul == "imgicon") {
        const maped = val.map((item) => {
          if (item.language_id == id) {
            const obj = { ...item, icon: e.target.files[0] };
            return obj;
          } else {
            return item;
          }
        });
        setVal(maped);
      } else {
        const maped = val.map((item) => {
          if (item.language_id == id) {
            const obj = { ...item, banner: e.target.files[0] };
            return obj;
          } else {
            return item;
          }
        });
        setVal(maped);
      }
    } else {
      if (e.target.name == "slug") {
        const maped = val.map((item) => {
          const newValue = e.target.value.replace(/\s/g, "");
          if (item.language_id == id) {
            const obj = { ...item, [e.target.name]: newValue };
            return obj;
          } else {
            return item;
          }
        });
        setVal(maped);
      } else {
        const maped = val.map((item) => {
          if (item.language_id == id) {
            const obj = { ...item, [e.target.name]: e.target.value };
            return obj;
          } else {
            return item;
          }
        });
        setVal(maped);
      }
    }
  };

  const onChangeHandlesr = (id) => {
    const maped = val.map((item) => {
      if (item.language_id == id) {
        const obj = { ...item, description: productDescription };
        return obj;
      } else {
        return item;
      }
    });
    setVal(maped);
  };
  const handleDescription = (data) => {
    const clone = JSON.parse(JSON.stringify(val));
    if (clone[value]) {
      clone[value].description = data;
      setVal(clone);
    }
  };

  const [spcOr, setspcOr] = useState(false);
  const submitEditCategoryData = async (data) => {
    const url = `https://onlineparttimejobs.in/api/category/${params.id}`;
    try {
      const res = await axios.put(
        url,
        { list: data },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + token,
          },
        }
      );
      toastSuccessMessage(true);
      setTimeout(() => {
        setVal([]);
        navigate("../categories");
      }, 5000);
      setspcOr(false);
    } catch (error) {
      alert("Catagary not Edit");
      setspcOr(false);
    }
  };

  const [addcategory, res] = useAddCategaryMutation();
  useEffect(() => {
    if (res.isSuccess) {
      toastSuccessMessage(false);
      setTimeout(() => {
        setVal([]);
        navigate("../categories");
      }, 5000);
      setspcOr(false);
    }
    if (res.isError) {
      setspcOr(false);
      console.log(res);
      alert(res.error?.data?.message);
    }
  }, [res.isSuccess, res.isError]);

  const onImageChangeHandler = async (e, id, type) => {
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
        if (type == "icon") {
          cloneAllData[value].icon = { ...obj };
        } else {
          cloneAllData[value].banner = { ...obj };
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

  const addNewAttributeData = async (e) => {
    e.preventDefault();
    setspcOr(true);
    const clone = [...val];
    if (params?.id) {
      submitEditCategoryData(clone);
    } else {
      addcategory({ data: { list: clone }, token: token });
    }

    setVal(clone);
  };

  const [getDat, setGetDat] = useState(false);
  useEffect(() => {
    if (params?.id && langData) {
      const clone = [];
      for (let j = 0; j < langData.length; j++) {
        const element2 = langData[j];
        for (let i = 0; i < val?.length; i++) {
          const element = val[i];
          if (element?.language_id == element2._id) {
            clone.push(element);
          }
        }
      }

      setVal(clone);
    }
  }, [params, langData, getDat]);

  const getDetailCat = async () => {
    try {
      const res = await axios.get(
        `https://onlineparttimejobs.in/api/category/admin/${params.id}`,
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setVal(res.data);
      setGetDat(true);
    } catch (error) {
      alert("Server Error !");
    }
  };

  useEffect(() => {
    if (params.id) {
      getDetailCat();
    }
  }, [params.id]);
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              {spcOr && (
                <div className="preloaderCount">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">ded</span>
                  </div>
                  <h6>please wait your Category uploading</h6>
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
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      {langData &&
                        langData.map((item, i) => {
                          return <Tab label={item?.name} value={i} />;
                        })}
                    </TabList>
                  </Box>
                  {val &&
                    val.map((item, i) => {
                      return (
                        <TabPanel value={i}>
                          <div className="card">
                            <MultilangForm
                              setValue={setValue}
                              data={val}
                              item={item}
                              i={i}
                              addNewAttributeData={addNewAttributeData}
                              onChangeHandler={onChangeHandler}
                              onChangeHandlesr={onChangeHandlesr}
                              onImageChangeHandler={onImageChangeHandler}
                              handleDescription={handleDescription}
                            />
                          </div>
                        </TabPanel>
                      );
                    })}
                </TabContext>
              </Box>
            </div>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
          {/*p class="mb-0">&copy;  v6.3.3</p*/}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
export default AddnewCategories;
