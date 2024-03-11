


import { useEffect, useState } from "react"
import Form from 'react-bootstrap/Form';
import { useGetCategoriesQuery, useGetShippingSettingQuery } from "../../Components/all-products/allproductsApi/allProductsApi";
import axios from "axios";
function MultiLangCost({ data, item, i, sendData, onChangeHandler, setValue, sendDatab }) {
    const { data: valDAta } = useGetShippingSettingQuery({ id: item?.country_id, token: window.localStorage.getItem('token') });
    const getDetail = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/shippingSetting/admin/${item?.country_id}`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${window.localStorage.getItem('token')}`,
                },
            });
            const maedd = data.map((va) => {
                if (va.country_id == res.data.setting.country_id) {
                    return { ...res.data.setting ,lable:item.lable}
                } else {
                    return va
                }
            })
            // console.log(maedd)
            // console.log(data)
            // setValue(maedd)
            sendDatab(maedd)
        } catch (error) {

        }
    }
    useEffect(() => {
        getDetail()
    }, [])
    return <div className="card">
        <div className="card-header">
            <h5 className="mb-0 h6">Shipping Price ({item?.lable})</h5>
        </div>
        <div className="card-body">

            <form className="form-horizontal" id="create-course-form">

                {/* <input className="form-control" style={{ margin: "10px 0" }} value={item.country_id} onChange={(e) => { onChangeHandler(e, item.language_id) }} name="minPrice" placeholder="Estate Min Price" /> */}

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Min Price</label>
                    <div className="col-md-9">
                        <input className="form-control" style={{ margin: "10px 0" }} value={item.minPrice} onChange={(e) => { onChangeHandler(e, item.country_id) }} name="minPrice" placeholder="Estate Min Price" />
                    </div>

                </div>
                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Default Ship</label>
                    <div className="col-md-9">
                        <Form.Select aria-label="Default select example" name='defaultShip' value={item?.defaultShip} className='form-control' onChange={(e) => { onChangeHandler(e, item.country_id) }} required>
                            <option value="null">Open this select menu</option>
                            {valDAta && valDAta?.map((item) => {
                                return <option value={item._id}>{item?.area}</option>
                            })}

                        </Form.Select>
                    </div>
                </div>

                <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { sendData(item.country_id) }}>Save</button>
            </form>
        </div>
    </div>
}
export default MultiLangCost