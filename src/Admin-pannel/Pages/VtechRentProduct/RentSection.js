import axios from "axios";
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
function RentSection({ item, setMainVal, main, data }) {
    const [checked, setCheked] = useState(false)
    const [row, setRow] = useState([])
    const [state, setState] = useState({
        unit_price: item?.unit_price,
        sku: item?.sku,
        renfundable: 1,
        installable: ''
    })

    useEffect(() => {
        setState({
            unit_price: item?.sale_rate,
            sku: item?.sku,
            installable: '',
            renfundable: ''
        })
    }, [])

    const changeHandle = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }

    const incRows = () => {
        setCheked(false)
        const clone = [...row]
        clone.push({ id: Math.random().toString(), sale_price: '', duration: '', period: 1 })
        setRow(clone)
    }

    const removeRow = (_id) => {
        setCheked(false)
        const filterdRow = row.filter((item) => {
            if (item.id === _id) {

            } else {
                return item
            }
        })
        setRow(filterdRow)
    }


    useEffect(() => {
        const clone = [...row]
        const obj = { id: item?._id.toString(), sale_price: '', duration: '', period: 1 }
        clone.push(obj)
        setRow(clone)
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [])

    const handelChange = (e) => {
        const val = e.target.value
        const idVal = e.target.id

        const fillData = row.map((item) => {
            if (item.id === idVal) {
                return { ...item, [e.target.name]: val }
            } else {
                return item
            }
        })
        setRow(fillData);

    }


    const saveToArr = () => {
        setCheked(!checked)
        const clone = { ...main }
        const obj = {
            product_id: data[0]?.productId,
            variant_id: item.uid,
            ...state,
            services: row
        }
        const arr = clone.products

        let used = false
        if (arr?.length) {
            for (let i = 0; i < arr.length; i++) {
                const element = arr[i];
                if (element.variant_id === item.variant) {
                    arr.splice(i, 1 , obj)
                    clone.products = arr
                    setMainVal(clone)
                    used = true
                    return
                }
            }
        } else {
            arr.push(obj)
            clone.products = arr
            setMainVal(clone)
            return
        }

        if (used === false) {
            arr.push(obj)
            clone.products = arr
            setMainVal(clone)
        }



    }

    const [duation, setDuaration] = useState(null)
    const getDuaration = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/serviceRentDurationMaster`)
        setDuaration(res.data)
    }
    useEffect(() => {
        getDuaration()
    }, [])

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">Product price  & Rent</h5>
                </div>
                <div className="card-body">
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Unit price <span className="text-danger">*</span></label>
                        <div className="col-md-6">
                            <input type="number" lang="en" onChange={changeHandle} value={state?.unit_price} min={0} defaultValue={0} step="0.01" placeholder="Unit price" name="unit_price" className="form-control" required fdprocessedid="jjt0ap" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">
                            Refundable Security

                        </label>
                        <div className="col-md-6">
                            <input type="number" lang="en" onChange={changeHandle} value={state?.renfundable} min={0} defaultValue={0} step={1} placeholder={1} name="renfundable" className="form-control" fdprocessedid="i4cfrb" />
                        </div>
                    </div>
                    <div>
                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Installation Charges</label>
                            <div className="col-md-6">
                                <input type="number" lang="en" onChange={changeHandle} value={state?.installable} min={0} defaultValue={0} step={1} placeholder="Installable" name="installable" className="form-control" required fdprocessedid="f90buo" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">
                                SKU
                            </label>
                            <div className="col-md-6">
                                <input type="text" placeholder="SKU" onChange={changeHandle} value={state?.sku} name="sku" className="form-control" fdprocessedid="jlbx79" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">
                            Rent Prices
                        </label>



                        <div className="row align-items-end">
                            <div className="col-12 sku_combination table-responsive form-group" id="sku_combination">
                                <table className="table table-bordered physical_product_show">
                                    <thead>

                                        <tr>
                                            <td><label className="control-label">#</label></td>
                                            <td><label className="control-label">Product Name</label></td>
                                            <td><label className="control-label">SKU</label></td>
                                            <td><label className="control-label">MRP</label></td>
                                        </tr>

                                    </thead>

                                    <tbody>

                                        <tr>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                {item?.productName}
                                            </td>
                                            <td>
                                                {item?.sku}
                                            </td>
                                            <td>

                                                {item?.mrp}
                                            </td>


                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>




                        <div className="col-md-12">
                            <div className="qunatity-price">
                                <div className="row gutters-5">
                                    {/* <div className="col-4">
                                        <div className="form-group">
                                            Moths
                                        </div>
                                    </div> */}
                                    <div className="col-3">
                                        <div className="form-group">
                                            Duration
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="form-group">
                                            Price
                                        </div>
                                    </div>
                                </div>
                                {row.map((item, i) => {
                                    return <div key={i} className="row gutters-2">
                                        <div className="col-3">
                                            <div className="form-group">
                                                <Form.Select name="duration" id={item.id} aria-label="Default select example" onChange={handelChange}>
                                                    <option>Open this select menu</option>
                                                    {duation && duation.map((items) => {
                                                        return <option key={items._id} id={item.id} value={items._id}>{items.name}</option>
                                                    })}
                                                </Form.Select>
                                            </div>
                                        </div>
                                        <div className="col-2" >
                                            <div className="form-group">
                                                <input type="text" style={{ backgroundColor: "ButtonHighlight" }} className="form-control" value={item?.sale_price} id={item.id} onChange={handelChange} placeholder="Amount" name="sale_price" required fdprocessedid="sw6gj4" />
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" onClick={() => { removeRow(item.id) }}>
                                                <i className="las la-times" />
                                            </button>
                                        </div>
                                    </div>
                                })}
                            </div>
                            <button type="button" className="btn btn-soft-secondary btn-sm" onClick={incRows}>
                                Add More
                            </button>
                            <div class="form-check" style={{ marginTop: "10px" }}>
                                <input style={{ width: "20px", height: "20px" }} onClick={saveToArr} checked={checked} class="form-check-input" type="checkbox" value="" id={`flexCheckIndeterminate${item._id}`} />
                                <label class="form-check-label" style={{ margin: "4px" }} htmlFor={`flexCheckIndeterminate${item._id}`}>
                                    This Is Mandatory  Filed
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default RentSection;