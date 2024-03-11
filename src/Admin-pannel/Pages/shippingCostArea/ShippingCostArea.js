
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { useGetCounterQuery, useGetCurrencyQuery, useGetLanguagesQuery } from '../../Components/all-products/allproductsApi/allProductsApi';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MultiLangCost from './MultiLangCost';

function ShippingCostArea() {
    const [val, setVal] = useState([])
    const token = window.localStorage.getItem('token')
    const { data: currency, refetch } = useGetCounterQuery(token);
    const params = useParams()
    useEffect(() => {
        if (currency) {
            if (!params) {
                const maped = currency.map((item) => {
                    return { minPrice: '', defaultShip: '', country_id: item._id, lable: item.name }
                })
                setVal(maped)
            } else {
                const maped = currency.map((item) => {
                    return { minPrice: '', defaultShip: '', country_id: item._id, lable: item.name }
                })
                setVal(maped)
            }
        }
    }, [currency])
    const onchangehandle = (e) => {
        const clone = { ...val }
        clone[e.target.name] = e.target.value
        setVal(clone)
    }



    const sendData = async (id) => {
        const clone = [...val]
        const findObj = clone.find((item) => {
            return item.country_id == id
        })
        try {
            const res = await axios.put(`https://onlineparttimejobs.in/api/shippingSetting/update`, findObj, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            alert('Shipping Price Added')
        } catch (error) {
            alert('Shipping Price not Added')
        }
    }

    const getData = async (id) => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/shippingPrice/country/${id}`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            setVal(res.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        if (currency) {
            getData(currency[0]._id)
        }
    }, [currency])
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

    const sendDatab = (da) => {
        setVal(da)
    }
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="align-items-center">
                            <h1 className="h2">Shipping Price</h1>
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
                                            <MultiLangCost sendDatab={sendDatab} setValue={setValue} data={val} item={item} i={i} sendData={sendData} onChangeHandler={onChangeHandler} />
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
export default ShippingCostArea;