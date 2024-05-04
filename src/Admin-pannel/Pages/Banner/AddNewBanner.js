import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useGetLanguagesQuery } from "../../Components/all-products/allproductsApi/allProductsApi";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MultilangBanner from "./MultilangBanner";
function AddNewBanner() {
    const [showImageD, setShowImageD] = useState();
    const token = window.localStorage.getItem('token');

    const { data, refetch } = useGetLanguagesQuery(token);

    const [val, setVal] = useState(data);
    const [value, setValue] = useState(0);
    const [loader, setLoader] = useState(false);
    const [errorFile, setError] = useState(false);
    const [isSusses, setIssusses] = useState(false);

    const params = useParams();
    const navigate = useNavigate();

    const imgHandle = async (e, id) => {
        if (e.target.name == 'image') {
            let balnkObj = {};
            const fromData = new FormData();
            fromData.append('image', e.target.files[0])
            try {
                const res = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, fromData,);
                // setShowImageD(res.data);
                balnkObj = res.data
            } catch (error) {

            };
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

    const onChangeHandler = (e, id, bul) => {
        if (bul) {
            const maped = val.map((item) => {
                if (item.language_id == id) {
                    const obj = { ...item, image: e.target.files[0] }
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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getParamdata = async (id) => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/banner/${id}`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log('getByID----', res?.data)
            setVal(res?.data?.list)
            // setShowImageD(res?.data?.list?.image)
        } catch (error) {
            alert('Server Error')
        }
    };

    useEffect(() => {
        if (params?.id) {
            getParamdata(params?.id)
        }
    }, []);

    const toastSuccessMessage = () => {
        if (params.id) {
            toast.success("Banner Updated Successfully", {
                position: "top-center"
            })
        } else {
            toast.success("Banner Add Successfully", {
                position: "top-center"
            })
        }
    };

    const toastErrorMessage = () => {
        if (params.id) {
            toast.error("Brand Update Faild..", {
                position: "top-center"
            })
        } else {
            toast.error("Brand Add Faild..", {
                position: "top-center"
            })
        }
    };

    useEffect(() => {
        if (isSusses === true) {
            toastSuccessMessage()
        };
    }, [isSusses]);

    useEffect(() => {
        if (errorFile === true) {
            toastErrorMessage()
        };
    }, [errorFile]);


    useEffect(() => {
        if (data && !params?.id) {
            const maped = data.map((item) => {
                return {
                    SliderTopHeading: '',
                    bottomText: '',
                    url: '',
                    image: '',
                    language_id: item._id,
                    lable: item.name
                }
            })
            setVal(maped)
        }
    }, [data]);

    const addNewAttributeData = async (e) => {
        e.preventDefault();
        // const images = new FormData();
        const clone = [...val]
        setLoader(true)
        if (params.id) {
            try {
                const res = await axios.put(` https://onlineparttimejobs.in/api/banner/update/${params.id}`, { list: clone }, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                })
                setLoader(false)
                setIssusses(true);
                setTimeout(() => {
                    setVal(
                        []
                    )
                    navigate('../list_banner')
                }, 5000);
            } catch (error) {
                setLoader(false)
                setError(true)
            }
        } else {
            try {
                const res = await axios.post(`https://onlineparttimejobs.in/api/banner/add`, { list: clone }, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                })
                setLoader(false)
                setIssusses(true)
                setTimeout(() => {
                    setVal(
                        []
                    )
                    navigate('../list_banner')
                }, 5000);
            } catch (error) {
                setLoader(false)
                setError(true)
            }
            document.getElementById("create-course-form").reset();
        }

    };

    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    {data && data.map((item, i) => {
                                        return <Tab label={item?.name} value={i} />
                                    })}

                                </TabList>
                            </Box>
                            {!!val?.length && val?.map((item, i) => {
                                return <TabPanel value={i}>
                                    <div className="card">
                                        <MultilangBanner params={params} setValue={setValue} data={val} item={item} i={i} addNewAttributeData={addNewAttributeData} onChangeHandler={onChangeHandler} imgHandle={imgHandle} showImageD={showImageD} setShowImageD={setShowImageD} />
                                    </div>

                                </TabPanel>
                            })}

                        </TabContext>
                    </Box>
                </div>
            </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
            {/*p class="mb-0">&copy;  v6.3.3</p*/}
        </div>
        <ToastContainer />
    </div>
}
export default AddNewBanner