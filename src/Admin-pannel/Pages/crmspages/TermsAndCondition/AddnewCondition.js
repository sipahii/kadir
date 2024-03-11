

import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useAddNewBrandMutation, useAddNewBrandNewMutation, useAddconditionMutation, useAddpolicyMutation, useGetLanguagesQuery } from '../../../Components/all-products/allproductsApi/allProductsApi';
import axios from 'axios';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MultiLangCOndition from './MultiLangCOndition';
function AddnewCondition() {
    const token = window.localStorage.getItem('token')
    const { data, refetch } = useGetLanguagesQuery(token);

    const [value, setValue] = useState(0);
    const [val, setVal] = useState(data)
    const onChangeHandler = (e, id) => {
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
    const setDatas = (da) => {
        if (!da.length) {
            const maped = data.map((item) => {
                return { title: '', meta_title: '', meta_description: '', description: '', language_id: item._id, lable: item.name, }
            })
            setVal(maped)
        } else {
            const clone = []
            for (let j = 0; j < data.length; j++) {
                const element2 = data[j];
                for (let i = 0; i < da.length; i++) {
                    const element = da[i];
                    if (element?.language_id == element2._id) {
                        clone.push(element)
                    }
                }
            }
            setVal(clone)
        }
    }

    const getDatapolicy = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/termsCondition/admin/singleTermsAndCondition`, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    Authorization: `Bearer ${token}`,
                },
            })
            setDatas(res.data)

        } catch (error) {

        }
    }
    useEffect(() => {
        getDatapolicy()
    }, [data])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const toastSuccessMessage = () => {
        toast.success("Terms And Condition Updated Successfully", {
            position: "top-center"
        })
    };
    const [policy, { isSuccess, isError }] = useAddconditionMutation()

    useEffect(() => {
        if (isSuccess === true) {
            toastSuccessMessage()
        };
        if (isError === true) {
            alert('!Error Terms And Condition not Updated')
        }
    }, [isSuccess, isError])




    const addNewAttributeData = async (e) => {
        e.preventDefault();
        const clone = [...val]

        policy({ data: { list: clone }, token: token })

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
                                    <MultiLangCOndition setValue={setValue} data={val} item={item} i={i} addNewAttributeData={addNewAttributeData} onChangeHandler={onChangeHandler} />
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
export default AddnewCondition;