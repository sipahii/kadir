import axios from "axios";
import React, { useEffect, useState } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// import AddGemstoneMultiLang from "./AddGemstoneMultiLang";
import MultiLangForm from "./MultiLangForm";

function AddEditBlogComp() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [showImageD, setShowImageD] = useState();
  const token = window.localStorage.getItem("adminToken");
  const [categoryD, setCategoryD] = useState();
  const params = useParams();
  const navigate = useNavigate();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [adminDataRes, categoryDataRes] = await Promise.all([
        axios.get(`https://onlineparttimejobs.in/api/language/admin`, {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }),
        axios.get(`https://onlineparttimejobs.in/api/blogscat`, {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }),
      ]);
      setCategoryD(categoryDataRes.data);
      setData(adminDataRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const [val, setVal] = useState(data);

  useEffect(() => {
    if (data) {
      const maped = data.map((item) => {
        return {
          title: "",
          category_id: "",
          slug: "",
          video: "",
          banner: "",
          short_description: "",
          meta_title: "",
          meta_img: "",
          description: "",
          language_id: item._id,
          lable: item.name,
        };
      });
      setVal(maped);
    }
  }, [data]);

  const callBackWithHtml = (data) => {
    let clone = JSON.parse(JSON.stringify(val));
    clone[value].description = data;
    setVal(clone);
  };

  const onChangeThumbnailImage = async (e, id) => {
    if (e.target.name == "banner") {
      let balnkObj = {};
      const fromData = new FormData();
      fromData.append("image", e.target.files[0]);
      try {
        // setImageLoading(true)
        const res = await axios.post(
          `https://onlineparttimejobs.in/api/cloudinaryImage/addImage`,
          fromData
        );
        setShowImageD(res.data);
        balnkObj = res.data;
      } catch (error) {}
      // setImageLoading(false)
      fromData.delete("image");

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
    toast.success("Blog Updated", {
      position: "top-center",
    });
  };
  const toastErrorMessage1 = () => {
    toast.error("Blog Not Updated ", {
      position: "top-center",
    });
  };
  const toastSuccessMessage2 = () => {
    toast.success("Blog Added", {
      position: "top-center",
    });
  };
  const toastErrorMessage2 = () => {
    toast.error("Blog Not Added", {
      position: "top-center",
    });
  };

  const getByIdData = async () => {
    try {
      const [blogDataRes, categoryDataRes] = await Promise.all([
        axios.get(
          `https://onlineparttimejobs.in/api/blogs/admin/${params?.uid}`,
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${token}`,
            },
          }
        ),
        axios.get(`https://onlineparttimejobs.in/api/blogscat`, {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }),
      ]);

      setVal(blogDataRes.data);
      setCategoryD(categoryDataRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (params?.uid) {
      getByIdData();
    } else {
      fetchData();
    }
  }, [params?.uid]);

  const sendData = async () => {
    const finalSendingD = { list: val };
    if (params?.uid) {
      try {
        const res = await axios.put(
          `https://onlineparttimejobs.in/api/blogs/update_Blogs/${params?.uid}`,
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
          `https://onlineparttimejobs.in/api/blogs/add_Blogs`,
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
    setTimeout(() => {
      navigate("../blog");
    }, 5000);
    console.log("val---", val);
  };

  return (
    <>
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
                        <MultiLangForm
                          setValue={setValue}
                          data={val}
                          params={params}
                          item={item}
                          i={i}
                          sendData={sendData}
                          onChangeHandler={onChangeHandler}
                          onChangeThumbnailImage={onChangeThumbnailImage}
                          showImageD={showImageD}
                          setShowImageD={setShowImageD}
                          onChangeHandleExcel={onChangeHandleExcel}
                          callBackWithHtml={callBackWithHtml}
                          categoryD={categoryD}
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
export default AddEditBlogComp;
