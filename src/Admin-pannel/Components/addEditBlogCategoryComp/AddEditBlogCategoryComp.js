import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import MultiLangFormBlogCateg from "./MultiLangFormBlogCateg";

function AddEditBlogCategoryComp() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [showImageD, setShowImageD] = useState();
  const token = window.localStorage.getItem("adminToken");
  const params = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [shoingLoader, setshoingLoader] = useState(false);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [catRes, dataRes] = await Promise.all([
        axios.get(`https://onlineparttimejobs.in/api/blogsCat`, {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }),
        axios.get(`https://onlineparttimejobs.in/api/language/admin`, {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }),
      ]);
      setCategory(catRes.data);
      setData(dataRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  const [val, setVal] = useState(data);

  useEffect(() => {
    if (data) {
      const maped = data.map((item) => {
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
          video: "",
        };
      });
      setVal(maped);
    }
  }, [data]);

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

  const handleDescription = (data) => {
    const clone = JSON.parse(JSON.stringify(val));
    if (clone[value]) {
      clone[value].description = data;
      setVal(clone);
    }
  };

  // const onChangeThumbnailImage = async (e, id) => {
  //   if (e.target.name == "banner") {
  //     let balnkObj = {};
  //     const fromData = new FormData();
  //     fromData.append("image", e.target.files[0]);
  //     try {
  //       // setImageLoading(true)
  //       const res = await axios.post(
  //         `https://onlineparttimejobs.in/api/cloudinaryImage/addImage`,
  //         fromData
  //       );
  //       setShowImageD(res.data);
  //       balnkObj = res.data;
  //     } catch (error) {}
  //     // setImageLoading(false)
  //     fromData.delete("image");

  //     const maped = val.map((item) => {
  //       if (item.language_id == id) {
  //         const obj = { ...item, [e.target.name]: balnkObj };
  //         return obj;
  //       } else {
  //         return item;
  //       }
  //     });
  //     setVal(maped);
  //   } else {
  //     const maped = val.map((item) => {
  //       if (item.language_id == id) {
  //         const obj = { ...item, [e.target.name]: e.target.value };
  //         return obj;
  //       } else {
  //         return item;
  //       }
  //     });
  //     setVal(maped);
  //   }
  // };

  const onChangeHandleExcel = async (e, id) => {
    if (e.target.name == "excel") {
      let balnkObj = {};
      const fromData = new FormData();
      fromData.append("excel", e.target.files[0]);
      try {
        // setImageLoading(true)
        const res = await axios.post(
          `https://onlineparttimejobs.in/api/excel/addExcel`,
          fromData
        );
        balnkObj = res.data;
      } catch (error) {}
      // setImageLoading(false)
      fromData.delete("excel");

      const maped = val.map((item) => {
        if (item.language_id == id) {
          const obj = { ...item, [e.target.name]: balnkObj };
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
  };

  const onChangeHandler = (e, id, bul) => {
    if (e.target.name == "meta_img") {
      console.log("file target-----", e.target.files[0]);
      // const maped = val.map((item) => {
      //     if (item.language_id == id) {
      //         const obj = { ...item, [e.target.name]: !bul }
      //         return obj
      //     } else {
      //         return item
      //     }
      // })
      // setVal(maped);
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
  };

  const toastSuccessMessage1 = () => {
    toast.success("Blog Category Updated", {
      position: "top-center",
    });
    setTimeout(() => {
      setVal([]);
      navigate("../blog-category");
    }, 5000);
  };
  const toastErrorMessage1 = () => {
    toast.error("Blog Category Not Updated ", {
      position: "top-center",
    });
  };
  const toastSuccessMessage2 = () => {
    toast.success("Blog Category Added", {
      position: "top-center",
    });
    setTimeout(() => {
      setVal([]);
      navigate("../blog-category");
    }, 5000);
  };
  const toastErrorMessage2 = () => {
    toast.error("Blog Category Not Added", {
      position: "top-center",
    });
  };

  const getByIdData = async () => {
    // const res = await axios.get(
    //   `https://onlineparttimejobs.in/api/blogsCat/${params?.uid}`,
    //   {
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }
    // );
    // setVal(res.data);

    try {
      const [res, dataRes] = await Promise.all([
        axios.get(`https://onlineparttimejobs.in/api/blogsCat/${params?.uid}`, {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }),
        axios.get(`https://onlineparttimejobs.in/api/blogsCat`, {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }),
      ]);
      setVal(res.data);
      setCategory(dataRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (params?.uid) {
      getByIdData();
    } else {
      fetchData();
    }
  }, [params?.uid]);

  const finalSendingD = { list: val };

  const sendData = async () => {
    if (params?.uid) {
      try {
        const res = await axios.put(
          `https://onlineparttimejobs.in/api/blogsCat/update_blogCat/${params?.uid}`,
          finalSendingD,
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toastSuccessMessage1();
      } catch (error) {
        toastErrorMessage1();
      }
    } else {
      try {
        const res = await axios.post(
          `https://onlineparttimejobs.in/api/blogsCat/add_blogCat`,
          finalSendingD,
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toastSuccessMessage2();
      } catch (error) {
        toastErrorMessage2();
      }
    }
    console.log("val---", val);
  };

  return (
    <>
      {shoingLoader && (
        <div className="preloaderCount">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">ded</span>
          </div>
          <h6>Please Wait your Image in uploading</h6>
        </div>
      )}
      <div style={{ width: "800px", marginLeft: "auto", marginRight: "auto" }}>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
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
                    <TabPanel value={i}>
                      <div className="card">
                        <MultiLangFormBlogCateg
                          setValue={setValue}
                          data={val}
                          params={params}
                          item={item}
                          i={i}
                          sendData={sendData}
                          onChangeHandler={onChangeHandler}
                          showImageD={showImageD}
                          setShowImageD={setShowImageD}
                          onChangeHandleExcel={onChangeHandleExcel}
                          category={category}
                          onImageChangeHandler={onImageChangeHandler}
                          handleDescription={handleDescription}
                        />
                      </div>
                    </TabPanel>
                  );
                })}
            </TabContext>
          </Box>
        )}
        <ToastContainer />
      </div>
    </>
  );
}
export default AddEditBlogCategoryComp;
