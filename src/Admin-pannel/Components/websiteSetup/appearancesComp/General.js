import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useGetLanguagesQuery } from '../../all-products/allproductsApi/allProductsApi';
import { ToastContainer } from 'react-toastify';
function General() {
    const token = window.localStorage.getItem('token')
    const [spinn, setspinn] = useState(false);
    const { data, refetch } = useGetLanguagesQuery(token);

    const [value, setValue] = useState(0);
    const [val, setVal] = useState(data)

    const setDatas = (da) => {
        if (!da.length) {
            const maped = data.map((item) => {
                return { front_top_message: '', icon: {}, language_id: item._id, lable: item.name, }
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
            const res = await axios.get(`https://onlineparttimejobs.in/api/adminFrontMessage/id`, {
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
    const changephoto = async (e, id) => {
        setspinn(true)
        try {
            const formData = new FormData();
            formData.append('image', e.target.files[0]);
            const res = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, formData)
            const maped = val.map((item) => {
                if (item.language_id == id) {
                    const obj = { ...item, icon: res.data }
                    return obj
                } else {
                    return item
                }
            })
            setVal(maped)
            setspinn(false)
        } catch (error) {
            console.log(" Image  not uploded");
            setspinn(false)
        }
    }

    const sendData = async () => {
        try {
            const res = await axios.put(`https://onlineparttimejobs.in/api/adminFrontMessage/update_AdminGeneralMessages`, { list: val },{
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    Authorization: `Bearer ${token}`,
                },
            })
            alert('FRONT HEADER SETTING UPDATED')
           
        } catch (error) {
            alert('SERVER ERROR FRONT HEADER SETTING NOT UPDATED')
        }
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            {spinn && <div className="preloaderCount">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
            <div className="card">
                <div className="card-header">
                    <h6 className="fw-600 mb-0">General</h6>
                </div>
                <div className="card-body">
                    <div className="col-md-12">
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
                                        <div className="">
                                            <form>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Front Top Message</label>
                                                    <div className="col-md-8">
                                                        <input type="text" name="front_top_message" value={item?.front_top_message} onChange={(e) => { onChangeHandler(e, item.language_id) }} className="form-control" placeholder="Front Top Message" fdprocessedid="t2ds68j" />
                                                    </div>
                                                </div>


                                                <div className="form-group row">
                                                    <label className="col-md-3 col-from-label">Site Icon</label>
                                                    <div className="col-md-8">
                                                        <input type='file' name='icon' onChange={(e) => { changephoto(e, item.language_id) }} className='form-control' />
                                                        {item?.icon?.url && <img style={{ width: "150px", margin: "10px 0", border: "1px solid black", padding: "10px", objectFit: "cover" }} src={item?.icon?.url} />}
                                                    </div>
                                                </div>

                                                <div className="text-right">
                                                    {data.length == i + 1 ? <div className="form-group mb-3 text-right">
                                                        <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i - 1) }}>Prev</button>
                                                        <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={sendData}>Save</button>
                                                    </div>
                                                        :
                                                        <div className="form-group mb-3 text-right">
                                                            {i !== 0 && <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i - 1) }}>Prev</button>}
                                                            <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i + 1) }}>Next</button>
                                                        </div>

                                                    }
                                                </div>
                                            </form>
                                        </div>

                                    </TabPanel>
                                })}

                            </TabContext>
                        </Box>
                        {/* <ToastContainer /> */}
                    </div>

                </div>
            </div>
        </>
    )
}
export default General;