
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useAddDivitionMutation, useAddNewBrandMutation, useAddNewBrandNewMutation, useEditDivitionMutation, useGetLanguagesQuery } from '../../all-products/allproductsApi/allProductsApi';
import axios from 'axios';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FormDistrict from './FormDistrict';
import { useNavigate, useParams } from 'react-router-dom';
function AddDistrict() {
    const token = window.localStorage.getItem('token')
    const { data, refetch } = useGetLanguagesQuery(token);
    const params = useParams()
    const [value, setValue] = useState(0);
    const [val, setVal] = useState(data)
    const onChangeHandler = (e, id, bul) => {
        const maped = val.map((item) => {
            if (item.language_id == id) {
                const obj = { ...item, [e.target.name]: e.target.value }
                return obj
            } else {
                return item
            }
        })
        setVal(maped)
    }

    useEffect(() => {
        if (params?.id) {
            const getDivision = async () => {
                try {
                    const res = await axios.get(`https://onlineparttimejobs.in/api/division/${params.id}`, {
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setVal(res.data)
                } catch (error) {

                }
            }
            getDivision()
        }
    }, [params?.id])

    useEffect(() => {
        if (params?.id) {
            return
        }
        if (data) {
            const maped = data.map((item) => {
                return { sortNo: '', language_id: item._id, title: '', uniqueCode: '', lable: item.name, slug: '' }
            })
            setVal(maped)
        }
    }, [data])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    const toastSuccessMessage2 = () => {
        toast.success("Division Edit Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage2 = () => {
        toast.error("Division Edit Faild..", {
            position: "top-center"
        })
    };
    const toastSuccessMessage = () => {
        toast.success("Division Add Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("Division Add Faild..", {
            position: "top-center"
        })
    };
    const navigate = useNavigate()
    const [addDivi, { isSuccess, isError }] = useAddDivitionMutation()
    const [editDivition, { isSuccess: upsus, isError: uperr }] = useEditDivitionMutation()
    useEffect(() => {
        if (upsus) {
            toastSuccessMessage2()
            setVal([])
            navigate('/admin/division')
        }
        if (uperr) {
            toastErrorMessage2()
            navigate('/admin/division')
        }
    }, [upsus, uperr])
    useEffect(() => {
        if (isSuccess) {
            toastSuccessMessage()
        }
        if (isError) {
            toastErrorMessage()
        }
    }, [isSuccess, isError])
    const addNewAttributeData = async (e) => {
        e.preventDefault();
        const clone = [...val]
        if (params?.id) {
            editDivition({ data: { list: clone }, token: token, id: params?.id })
        } else {
            addDivi({ data: { list: clone }, token: token })
        }

    };


    return (
        <>
            <div className="col-md-5">
                <Box sx={{ width: '100%', typography: 'body1' }}>
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
                                    <FormDistrict setValue={setValue} setVal={setVal} data={val} item={item} i={i} addNewAttributeData={addNewAttributeData} onChangeHandler={onChangeHandler} />
                                </div>

                            </TabPanel>
                        })}

                    </TabContext>
                </Box>
                <ToastContainer />
            </div>
        </>
    )
}
export default AddDistrict;