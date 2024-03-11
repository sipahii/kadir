
import { useEffect, useState } from "react";
import { DatabaseFilled, QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import { AiTwotoneDelete } from "react-icons/ai";
import AttributeModal from "./AttributeModal";
import { GiPriceTag } from "react-icons/gi";
import { useParams } from "react-router-dom";
import PriceMoalParams from "./PriceMoalParams";
import axios from "axios";
export const ColorParams = ({ data, deleteRow, pickUp, handleVariant, setVariantsData, bringSelectedVariantImage, index, item, sellerD }) => {
    const [formData, setFormData] = useState(data);
    const [prices, setprices] = useState(data.prices);
    const onChangeHandler = (e) => {
        const inputName = e.target.name;
        const inputVal = e.target.value;
        setFormData({ ...formData, [inputName]: inputVal, prices: data.prices });
        setVariantsData(formData)
    };

    const params = useParams()
    useEffect(() => {
        if (formData) {
            handleVariant({ ...formData })
        }
    }, [formData])
    useEffect(() => {
        setFormData(data)
    }, [])
    const [shoingLoader, setshoingLoader] = useState(false)
    const onchangeImagehandle = async (e) => {
        const inpVal = e.target.files;
        setshoingLoader(true)
        const images = new FormData();
        const varclone1 = []
        // debugger
        for (let ind = 0; ind < inpVal?.length; ind++) {
            images.delete('image');
            const element0 = inpVal[ind];
            images.append('image', element0);
            try {
                const res = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, images)
                const obj = { public_id: res.data.public_id, url: res.data.url }
                varclone1.push(obj)
            } catch (error) {
                console.log("Gallery Image  not uploded --outer");
            }
            images.delete('image');

        }

        const cloneObj = { ...formData, images: varclone1 }
        setVariantsData(cloneObj)
        setFormData({ ...cloneObj });
        setshoingLoader(false)
    }
    const onchangeImagehandle1 = async (e) => {
        // setShping(false)
        setshoingLoader(true)
        const inpVal = e.target.files[0];
        const images = new FormData();
        images.delete('image');
        images.append('image', inpVal);
        let objj = {};
        try {
            const res2 = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, images)
            objj = { public_id: res2.data.public_id, url: res2.data.url }
        } catch (error) {
            console.log("Thumnail Image  not uploded")
        }
        images.delete('image');

        const cloneObj = { ...formData, mainImage_url: objj }
        setVariantsData(cloneObj)
        setFormData({ ...cloneObj });
        setshoingLoader(false)
    }
    const setData = (data, i) => {
        const clone = { ...data }
        setFormData(clone)
    }
    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const setDataArtibutr = (data) => {
        const clone = { ...data }
        setFormData(clone)
    }
    return (
        <tr className="sizzings">
            {shoingLoader && <div className="preloaderCount">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">ded</span>
                </div>
                <h6>Please Wait your Image in uploading</h6>
            </div>}
            <td>
                <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this variant?"
                    icon={
                        <QuestionCircleOutlined
                            style={{
                                color: 'red',
                            }}
                        />

                    }
                    onConfirm={() => { deleteRow(data._id) }}
                >
                    <Button danger><AiTwotoneDelete /></Button>
                </Popconfirm>
            </td>
            <td>
                <label name="varient" className="control-label">{data.weight}</label>
            </td>
            <td>
                <input type="text" name="uid" value={data.uid} className="form-control" onChange={onChangeHandler} />

            </td>
            <td>
                <label name="varient" className="control-label" style={{ cursor: "pointer" }} onClick={() => setModalShow2(true)}><GiPriceTag style={{ fontSize: "20px" }} /></label>
            </td>
            <td>
                <DatabaseFilled onClick={() => setModalShow(true)} />
            </td>
            <td>
                {data?.images?.length && data?.images[0]?.url && data?.images?.map((item) => {
                    return <img key={item.url} style={{ width: "100px", height: "100px" }} src={item?.url} />
                })}
                <input type="file" name="gallery_image" multiple accept="image/*" className="form-control" onChange={onchangeImagehandle} />
            </td>
            <td>
                {data?.mainImage_url?.url && <img style={{ width: "100px", height: "100px" }} src={data?.mainImage_url?.url} />}
                <input type="file" name="mainImage_url" accept="image/*" className="form-control" onChange={onchangeImagehandle1} />

            </td>

            {modalShow && <AttributeModal show={modalShow}
                onHide={() => setModalShow(false)}
                setDataArtibutr={setDataArtibutr}
                formData={formData}
                data={data}
            />}
            {modalShow2 && <PriceMoalParams show={modalShow2}
                onHide={() => setModalShow2(false)}
                prices={prices}
                data={data}
                setData={setData}
                sellerD={sellerD}
                index={index}
            />}
        </tr>


    )
}