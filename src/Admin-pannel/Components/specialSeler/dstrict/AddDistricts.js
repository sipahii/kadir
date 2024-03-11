

import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useAddDistrictMutation, useAddNewBrandMutation, useAddNewBrandNewMutation, useEditDistrictMutation, useGetLanguagesQuery } from '../../all-products/allproductsApi/allProductsApi';
import axios from 'axios';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AddDis from './AddDis';
import { useNavigate, useParams } from 'react-router-dom';
function AddDistricts() {
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
                    const res = await axios.get(`https://onlineparttimejobs.in/api/district/${params.id}`, {
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    const clone = []
                    for (let j = 0; j < data.length; j++) {
                        const element2 = data[j];
                        for (let i = 0; i < res.data.length; i++) {
                            const element = res.data[i];
                            if (element?.language_id == element2._id) {
                                clone.push(element)
                            }
                        }
                    }
                    setVal(clone)
                } catch (error) {

                }
            }
            getDivision()
        }
    }, [params?.id, data])

    useEffect(() => {
        if (params?.id) {
            return
        }
        if (data) {
            const maped = data.map((item) => {
                return { sortNo: '', language_id: item._id, title: '', uniqueCode: '', lable: item.name, division: '' }
            })
            setVal(maped)
        }
    }, [data])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const toastSuccessMessage2 = () => {
        toast.success("District Edit Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage2 = () => {
        toast.error("District Edit Faild..", {
            position: "top-center"
        })
    };
    const navigate = useNavigate()
    const toastSuccessMessage = () => {
        toast.success("District added Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("District Add Faild..", {
            position: "top-center"
        })
    };

    const [addDistrict, { isSuccess, isError }] = useAddDistrictMutation()
    const [editDistrict, { isSuccess: editSuss, isError: editErr }] = useEditDistrictMutation()

    useEffect(() => {
        if (editSuss) {
            toastSuccessMessage2()
            setVal([])
            navigate('/admin/district')
        }
        if (editErr) {
            toastErrorMessage2()
            navigate('/admin/district')
        }
    }, [editSuss, editErr])
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
            editDistrict({ data: { list: clone }, token: token, id: params?.id })
        } else {
            addDistrict({ data: { list: clone }, token: window.localStorage.getItem('token') })
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
                                    <AddDis setValue={setValue} setVal={setVal} data={val} item={item} i={i} addNewAttributeData={addNewAttributeData} onChangeHandler={onChangeHandler} />
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
export default AddDistricts;