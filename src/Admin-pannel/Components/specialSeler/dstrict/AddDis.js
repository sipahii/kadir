

import { Checkbox, ConfigProvider } from "antd";
import { useEffect, useState } from "react"
import { Form } from "react-bootstrap";
import { useGetDivitionQuery } from "../../all-products/allproductsApi/allProductsApi";
import { useParams } from "react-router-dom";

function AddDis({ data, item, i, addNewAttributeData, onChangeHandler, setValue, handleFile, setVal }) {
    const [tags, setTags] = useState(item.keyword);
    const [tag, setTag] = useState([]);
    const removetagTag = (index) => [
        setTags(tags.filter((el, i) => i !== index))
    ];
    const params = useParams()
    useEffect(() => {
        if (params?.id) {
            setTags(item.keyword)
        }
    }, [params?.id])
    function handleTagKeyDown(e) {
        setTags([...tags, tag])
        setTag('')
    };
    const saveData = (id) => {
        const maped = data.map((item) => {
            if (item.language_id == id) {
                const obj = { ...item, keyword: tags }
                return obj
            } else {
                return item
            }
        })
        setVal(maped)
    }
    const { isLoading, data: aass } = useGetDivitionQuery(window.localStorage.getItem('token'));
    return <div className="card">
        <div className="card-header">
            <h5 className="mb-0 h6">Add New Distric ({item.lable})</h5>
        </div>
        <div className="card-body">
            <form id="create-course-form" >
                <div className="form-group mb-3">
                    <label htmlFor="name">Division</label>
                    <Form.Select aria-label="Default select example" name="division" value={item.division} onChange={(e) => { onChangeHandler(e, item.language_id) }}>
                        <option>Open this select menu</option>
                        {aass && aass.map((item) => {
                            return <option value={item.uid}>{item.title}</option>
                        })}
                    </Form.Select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name">Title</label>
                    <input type="text" placeholder="Title" name="title" value={item.title} onChange={(e) => { onChangeHandler(e, item.language_id) }} className="form-control" required />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="name">UniqueCode</label>
                    <input type="text" name='uniqueCode' value={item.uniqueCode} className="form-control" placeholder="UniqueCode" onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name">Sort No</label>
                    <input type="number" name='sortNo' value={item.sortNo} className="form-control" placeholder="Sort No" onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                </div>
                {/* <div className="col-md-3 form-group physical_product_show" id="shipping_cost">
                    <label className="title-color">Save Data ! </label>

                    <div>
                        <ConfigProvider
                            theme={{
                                components: {
                                    Checkbox: {
                                        colorPrimary: '#ff4d4f',
                                    },
                                },

                            }}
                        >
                            <Checkbox onClick={() => {
                                saveData(item.language_id)
                            }} className="chBox" >Checkbox</Checkbox>
                        </ConfigProvider>
                    </div>
                </div> */}

                <div className="form-group mb-3 text-right">
                    {data.length == i + 1 ? <div className="form-group mb-3 text-right">
                        <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i - 1) }}>Prev</button>
                        <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={addNewAttributeData}>{params?.id ? 'Update' : 'Save'}</button>
                    </div>
                        :
                        <div className="form-group mb-3 text-right">
                            {i !== 0 && <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i - 1) }}>Prev</button>}
                            <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i + 1) }}>Next</button>
                        </div>

                    }
                </div>
            </form>
        </div>
    </div>
}
export default AddDis