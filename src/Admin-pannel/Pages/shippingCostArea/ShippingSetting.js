

import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import { useGetCounterQuery, useGetCurrencyQuery, useGetLanguagesQuery } from '../../Components/all-products/allproductsApi/allProductsApi';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MultiLangCost from './MultiLangCost';
import ShippingSettMulti from './ShippingSettMulti';

function ShippingSetting() {
    const [val, setVal] = useState([])
    const token = window.localStorage.getItem('token')
    const { data: currency, refetch } = useGetCounterQuery(token);
    const params = useParams()
    useEffect(() => {
        if (currency) {
            if (!params) {
                const maped = currency.map((item) => {
                    return { area: '', price: '', country_id: item._id, lable: item.name }
                })
                setVal(maped)
            } else {
                const maped = currency.map((item) => {
                    return { area: '', price: '', country_id: item._id, lable: item.name }
                })
                setVal(maped)
            }
        }
    }, [currency])

    const [update , setUpdate] = useState(false)

    const sendData = async (id) => {
        const clone = [...val]
        const findObj = clone.find((item) => {
            return item.country_id == id
        })
        if (update) {
            try {
                const res = await axios.put(`https://onlineparttimejobs.in/api/shippingPrice/update_shipping/${findObj._id}`, findObj, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                });
                alert('Shipping Ares Updated')
                getData(findObj.country_id)
                setUpdate(false)
            } catch (error) {
                alert('Shipping Ares not Update')
            }
        } else {
            try {
                const res = await axios.post(`https://onlineparttimejobs.in/api/shippingPrice/add_shipping`, findObj, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                });
                alert('Shipping Ares Added')
                getData(findObj.country_id)
            } catch (error) {
                alert('Shipping Ares not Added')
            }
        }
    }

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const onChangeHandler = (e, id) => {

        const maped = val.map((item) => {
            if (item.country_id == id) {
                const obj = { ...item, [e.target.name]: e.target.value }
                return obj
            } else {
                return item
            }
        })
        setVal(maped);

    }
    const [getDatas, setGetDatas] = useState()
    const getData = async (id) => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/shippingPrice/country/${id}`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            setGetDatas(res.data)
        } catch (error) {

        }
    }

    const updateAres = (ite) => {
        setUpdate(true)
        const mapeds = val.map((item) => {
            // console.log(item)
            if (item.country_id == ite.country_id) {
                return { ...ite, lable: item.lable }
            } else {
                return item
            }
        })
        setVal(mapeds)
    }

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="align-items-center">
                            <h1 className="h2">Shipping Area</h1>
                        </div>
                    </div>
                    <div className="row">

                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        {currency && currency.map((item, i) => {
                                            return <Tab label={item?.name} value={i} />
                                        })}

                                    </TabList>
                                </Box>
                                {val && val.map((item, i) => {
                                    return <TabPanel value={i}>
                                        <div className="card">
                                            <ShippingSettMulti updateAres={updateAres} getData={getData} getDatas={getDatas} setValue={setValue} data={val} item={item} i={i} sendData={sendData} onChangeHandler={onChangeHandler} />
                                        </div>

                                    </TabPanel>
                                })}

                            </TabContext>
                        </Box>




                    </div>

                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
            </div>
        </>
    )
}
export default ShippingSetting;