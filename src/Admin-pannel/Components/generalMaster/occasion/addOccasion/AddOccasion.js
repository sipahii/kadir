import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AddOccassionMultiLingual from "./AddOccassionMultiLingual";

function AddOccasion() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [showImageD, setShowImageD] = useState();
    const [inputval, setInputval] = useState({
        name: '',
    });

    const token = window.localStorage.getItem('adminToken');
    const params = useParams();

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getData = async () => {
        setIsLoading(true)
        const res = await axios.get(`https://onlineparttimejobs.in/api/language/admin`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        setIsLoading(false)
        setData(res.data)
    };

    useEffect(() => {
        getData()
    }, []);

    const [val, setVal] = useState(data)

    useEffect(() => {
        if (data) {
            const maped = data.map((item) => {
                return { name: "", code: '', description: '', slug: '', meta_title: '', meta_keyword: '', meta_description: '', sort_no: '', language_id: item._id, isActive: false, lable: item.name }
            })
            setVal(maped)
        }
    }, [data]);

    const onChangeThumbnailImage = async (e, id) => {
        if (e.target.name == 'thumbnail_image') {
            let balnkObj = {};
            const fromData = new FormData();
            fromData.append('image', e.target.files[0])
            try {
                // setImageLoading(true)
                const res = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, fromData,);
                setShowImageD(res.data);
                balnkObj = res.data
            } catch (error) {

            };
            // setImageLoading(false)
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
        if (e.target.name == 'approve') {
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
        toast.success("Occassion Updated", {
            position: "top-center"
        })
    };
    const toastErrorMessage1 = () => {
        toast.error("Occassion Not Updated ", {
            position: "top-center"
        })
    };

    const toastSuccessMessage2 = () => {
        toast.success("Occassion Added", {
            position: "top-center"
        })
    };
    const toastErrorMessage2 = () => {
        toast.error("Occassion Not Added", {
            position: "top-center"
        })
    };

    const getByIdData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/occasion/${params?.uid}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        setVal(res.data)
    };

    useEffect(() => {
        if (params?.uid) {
            getByIdData()
        }
    }, [params?.uid])

    const finalSendingD = { list: val };


    const sendData = async () => {
        if (params?.uid) {
            try {
                const res = await axios.put(`https://onlineparttimejobs.in/api/occasion/update_occasion/${params?.uid}`, finalSendingD, {
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
                const res = await axios.post(`https://onlineparttimejobs.in/api/occasion/add_occasion`, finalSendingD, {
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


    return (
        <>
            {isLoading ? <h3>Loading...</h3> : <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            {data && data.map((item, i) => {
                                return <Tab label={item?.name} value={i} />
                            })}
                        </TabList>
                    </Box>
                    {val && val.map((item, i) => {
                        return <TabPanel value={i}>
                            <div className="card">
                                <AddOccassionMultiLingual setValue={setValue} data={val} params={params} item={item} i={i} sendData={sendData} onChangeHandler={onChangeHandler} onChangeThumbnailImage={onChangeThumbnailImage} showImageD={showImageD} setShowImageD={setShowImageD} />
                            </div>

                        </TabPanel>
                    })}

                </TabContext>
            </Box>}
            <ToastContainer />
        </>
    )
}
export default AddOccasion

