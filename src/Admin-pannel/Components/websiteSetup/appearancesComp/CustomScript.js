import axios from "axios";
import { useEffect, useState } from "react";
import { useGetLanguagesQuery } from "../../all-products/allproductsApi/allProductsApi";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
function CustomScript() {


    const token = window.localStorage.getItem('token')
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
            const res = await axios.get(`https://onlineparttimejobs.in/api/adminWeb_footer/get`, {
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

    const sendData = async () => {

        try {
            const res = await axios.put(` https://onlineparttimejobs.in/api/adminWeb_footer/update`, { list: val }, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    Authorization: `Bearer ${token}`,
                },
            })
            alert('FRONT FOOTER SETTING UPDATED')

        } catch (error) {
            alert('SERVER ERROR FRONT FOOTER SETTING NOT UPDATED')
        }
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h6 className="fw-600 mb-0">Footer</h6>
                </div>
                <div className="card-body">
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
                                        <form >

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">ABOUT COMPANY</label>
                                                <div className="col-md-8">
                                                    <textarea name="about_company" value={item?.about_company} onChange={(e) => { onChangeHandler(e, item.language_id) }} rows={4} className="form-control" placeholder />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">OFFICE ADDRESS</label>
                                                <div className="col-md-8">
                                                    <textarea name="office_address" value={item?.office_address} onChange={(e) => { onChangeHandler(e, item.language_id) }} rows={4} className="form-control" placeholder />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">LOCATION</label>
                                                <div className="col-md-8">
                                                    {/* <label className="col-md-3 col-from-label" >LOCATION</label> */}
                                                    <input className="form-control" value={item?.location} name="location" onChange={(e) => { onChangeHandler(e, item.language_id) }} placeholder="LOCATION" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">PHONE NUMBER</label>
                                                <div className="col-md-8">
                                                    {/* <label className="col-md-3 col-from-label">PHONE NUMBER</label> */}
                                                    <input className="form-control" value={item?.phoneNo} name="phoneNo" onChange={(e) => { onChangeHandler(e, item.language_id) }} placeholder="PHONE NUMBER" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">EMAIL</label>
                                                <div className="col-md-8">
                                                    {/* <label className="col-md-3 col-from-label">EMAIL</label> */}
                                                    <input className="form-control" name="email" value={item?.email} onChange={(e) => { onChangeHandler(e, item.language_id) }} placeholder="EMAIL" />
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

                </div>
            </div>
        </>
    )
}
export default CustomScript;