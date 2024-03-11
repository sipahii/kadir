
import axios from 'axios';
import Multiselect from 'multiselect-react-dropdown';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useGetLanguagesQuery } from '../../Components/all-products/allproductsApi/allProductsApi';
import MutiformLang from './MutiformLang';
import { useParams } from 'react-router-dom';
function AddProductAttributes({ getDatas }) {
    const [finalCatD, setFinalCatD] = useState();
    const [categ, setCateg] = useState([]);
    const [state, setState] = useState({
        name: ""
    })

    const changeHandle = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }

    const token = window.localStorage.getItem('token');
    const params = useParams()

    const toastSuccessMessage = () => {
        toast.success("Attribute Set  added Successfully", {
            position: "top-center"
        })
    };
    const sendData = async () => {
        const obj = { name: state.name, values: finalCatD }
        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/attributeSetMaster/add_attributeSetMasters`, obj, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            toastSuccessMessage()
            setState({ name: '' })

            getDatas()
        } catch (error) {
            alert('!Error Attribute Set not added')
        }

    }


    const { data, refetch } = useGetLanguagesQuery(token);

    useEffect(() => {
        if (data) {
            const maped = data.map((item) => {
                return { name: "", language_id: item._id, values: [], lable: item.name }
            })
            setVal(maped)
        }
    }, [data])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
    };


    const getByIdData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/attributeSetMaster/${params?.uid}`, {
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


    const addNewAttributeData = async (e) => {
        e.preventDefault();
        const images = new FormData();
        const clone = [...val]
        const url = 'https://onlineparttimejobs.in/api/attributeSetMaster/add_attributeSetMasters';

        if (params?.uid) {
            try {
                const res = await axios.put(`https://onlineparttimejobs.in/api/attributeSetMaster/update_attributeSetMasters/${params?.uid}`, { list: clone }, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                });
                alert('Attribute Set Updated')
            } catch (error) {
                alert('Attribute Set Not Updated!')
            }
        } else {
            try {
                const res = await axios.post(url, { list: clone }, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                });
                toastSuccessMessage()
            } catch (error) {
                alert('Error Attribute Set not added !')
            }
        }


    };



    const changeData = (cbv) => {
        setVal(cbv);
    }


    return (
        <>
            <div className="col-md-7">

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
                                    <MutiformLang setValue={setValue} data={val} changeData={changeData} item={item} i={i} addNewAttributeData={addNewAttributeData} onChangeHandler={onChangeHandler} params={params} />
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
export default AddProductAttributes;