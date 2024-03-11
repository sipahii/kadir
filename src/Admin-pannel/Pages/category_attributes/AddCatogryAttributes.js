

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
import MulCateAtt from './MulCateAtt';
import { useNavigate, useParams } from 'react-router-dom';
function AddCatogryAttributes({ getDatas }) {
    const [finalCatD, setFinalCatD] = useState();
    const [categ, setCateg] = useState([]);
    const [state, setState] = useState({
        name: ""
    })

    const token = window.localStorage.getItem('token')

    const toastSuccessMessage = () => {
        toast.success("Attribute Set  added Successfully", {
            position: "top-center"
        })
    };
    const sendData = async () => {
        const obj = { name: state.name, values: finalCatD }
        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/categoryAttribute/add_CategoryAttribute`, obj, {
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
                return { name: "", language_id: item._id, category: [], lable: item.name, description: '', attributeSets: [], icon_img: '', banner_img: '', navigation: '',product:[] }
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
    }
    const navigate = useNavigate()
    const params = useParams()
    const addNewAttributeData = async (e) => {
        e.preventDefault();
        let clone = [...val]

        let idscateg = []
        for (let i = 0; i < clone.length; i++) {
            const element = clone[i];
            for (let j = 0; j < element?.category?.length; j++) {
                const element2 = element?.category[j];
                idscateg.push(element2.uid)
            }
            element.category = idscateg
            idscateg = []
        }

        let objss = []
        for (let i = 0; i < clone.length; i++) {
            const element = clone[i];
            for (let j = 0; j < element?.attributeSets?.length; j++) {
                const element2 = element?.attributeSets[j];
                objss.push({ attributeHead: element2?.attributeSetMaster?.uid, value: element2?.list })
            }
            element.attributeSets = objss
            objss = []
        }

        if (params?.id) {
            const url = `https://onlineparttimejobs.in/api/categoryAttribute/update_CategoryAttribute/${params?.id}`
            try {
                const res = await axios.put(url, { list: clone }, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                });
                alert('Attribute Update Successfully!')
            } catch (error) {
                alert('Error Attribute not Update !')
            }
        } else {
            const url = 'https://onlineparttimejobs.in/api/categoryAttribute/add_CategoryAttribute'
            try {
                const res = await axios.post(url, { list: clone }, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                });
                toastSuccessMessage()
            } catch (error) {
                alert('Error Attribute not added !')
            }
        }
        navigate('/admin/category_attributes')
        getDatas()
        // setVal([{}])
    };

    const changeData = (cbv) => {
        setVal(cbv);
    }


    useEffect(() => {
        if (params?.id) {
            const getIdData = async () => {
                try {
                    const res = await axios.get(`https://onlineparttimejobs.in/api/categoryAttribute/${params?.id}`, {
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                            Authorization: `Bearer ${token}`,
                        },
                    })
                    const clone = []
                    for (let j = 0; j < data.length; j++) {
                        const element2 = data[j];
                        for (let i = 0; i < res?.data.length; i++) {
                            const element = res?.data[i];
                            if (element?.language_id == element2._id) {
                                clone.push(element)
                            }
                        }
                    }
                    setVal(clone)
                } catch (error) {
                }
            }
            getIdData()
        }
    }, [params?.id])

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
                                    <MulCateAtt setValue={setValue} data={val} setVal={setVal} changeData={changeData} item={item} i={i} addNewAttributeData={addNewAttributeData} onChangeHandler={onChangeHandler} />
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
export default AddCatogryAttributes;