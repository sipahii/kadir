import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { useAddNewAttributeMutation, useGetLanguagesQuery } from "../all-products/allproductsApi/allProductsApi";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FormsMultiLanguage from "./FormsMultiLanguage";
import axios from "axios";

function AddNewAttributesAdmin() {

    const [inputval, setInputval] = useState({
        name: '',
    });

    const [addNewAttribute, response] = useAddNewAttributeMutation();
    const token = window.localStorage.getItem('token')


    const toastSuccessMessage = () => {
        toast.success("Attribute added Successfully", {
            position: "top-center"
        })
    };

    useEffect(() => {
        if (response.isSuccess === true) {
            toastSuccessMessage()
        };
        if (response.isError === true) {
            alert('!Error Attribute not added')
        }

    }, [response])

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { data, refetch } = useGetLanguagesQuery(token);
    const [val, setVal] = useState(data)

    useEffect(() => {
        if (data) {
            const maped = data.map((item) => {
                return { name: "", language_id: item._id, approve: false, lable: item.name }
            })
            setVal(maped)
        }
    }, [data])
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

    }


    const phohtoCHange = async (e, id) => {
        const images = new FormData();
        images.append('image', e.target.files[0]);
        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, images)
            const obj = { public_id: res.data.public_id, url: res.data.url }
            const maped = val?.map((item) => {
                if (item.language_id == id) {
                    return { ...item, image: obj }
                } else {
                    return item
                }
            })
            setVal(maped)
        } catch (error) {
            console.log("Image  not uploded");
        }
    }


    const addNewAttributeData = (e) => {
        e.preventDefault();
        addNewAttribute({ data: { list: val }, token: token })

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
                                    <FormsMultiLanguage phohtoCHange={phohtoCHange} setValue={setValue} data={val} item={item} i={i} addNewAttributeData={addNewAttributeData} onChangeHandler={onChangeHandler} />
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
export default AddNewAttributesAdmin;