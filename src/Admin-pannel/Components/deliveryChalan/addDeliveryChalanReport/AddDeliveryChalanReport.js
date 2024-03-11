
import { useEffect, useState } from "react";
import { useAddDeleveryChallanMutation, useAddQuatationVMutation, useAddchallanVcartMutation, useAddpurchaseVcartMutation, useGetCustomersQuery, useGetPickupPointQuery, useGetProductSearchQuery } from "../../all-products/allproductsApi/allProductsApi";
import axios from "axios";
import { RxCross1 } from "react-icons/rx";
import { AiFillDelete } from "react-icons/ai";
import { Spinner } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import ModalDeleviry from "./ModalDeleviry";

function AddDeliveryChalanReport() {
    const token = window.localStorage.getItem('token')
    const [show, setShow] = useState(true)
    const [modalShow, setModalShow] = useState(false);
    const [billingAddress, setBillingAddress] = useState();
    const [shippingAddress, setShippingAddress] = useState();
    const [customerId, setCustomerId] = useState();
    const [searchs, setSearch] = useState('')
    const [cartData, setcartData] = useState(null)
    const [inputVal, setInputVal] = useState({})

    const [values, setValues] = useState(
        {
            date: "",
            referenceNo: "",
            quotation_No: '',
            quotation_Date: '',
            shipping_cost: "",
            shippingAddress: '',
            billingAddress: '',
        }
    )
    const [idpick, setItPick] = useState()
    const { data: pickupPoints } = useGetPickupPointQuery(token);
    const { data: customers } = useGetCustomersQuery(token);
    const { data: searchPro } = useGetProductSearchQuery({ token: token, paylode: searchs })

    const [showCombo, setShowCombo] = useState([{ productId: '', sku: '', variantId: '', stockId: '' }])

    const [addDeleveryChallan, { isError, isSuccess, isLoading: addCOmbLoad }] = useAddDeleveryChallanMutation()

    const setTableItem = async (item) => {
        try {
            const sendInpData = await axios.get(`https://onlineparttimejobs.in/api/serviceProductStock/${item._id + '&' + idpick}`)
            setcartData(sendInpData?.data);
            setModalShow(true)
            setShow(false)
        } catch (error) {
            alert('Select a Pickup Point')
        }
    }

    const handelChange = (e) => {
        if (e.key === 'Enter') {
            const clone = e.target.value
            setSearch(clone);
            setShow(true)
        }
    }

    const changeHandelVal = (e) => {
        const clone = { ...values }
        clone[e.target.name] = e.target.value
        setValues(clone)
    }

    // const handleInputItem = async (e) => {
    //     const clonnn = { ...inputVal }
    //     clonnn[e.target.name] = e.target.value
    //     const clone2 = { ...clonnn, index: e.target.id }
    //     setInputVal(clone2)
    //     const abc = showCombo.map((item, i) => {
    //         if (i == e.target.id) {
    //             return { ...item, stockId: e.target.value }
    //         } else {
    //             return item
    //         }
    //     })
    //     // console.log(abc);
    //     // // setShowCombo(abc)
    //     // const sendInpData = await axios.post('https://onlineparttimejobs.in/api/serviceProductStock/addToCart', { products: abc })
    //     setShowCombo(abc)
    // }

    const changeHandelAddress = async (e) => {
        const shippingRes = await axios.get(`https://onlineparttimejobs.in/api/shippingAddress/shipping/user/${e.target.value}`, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + token
            }
        });
        setShippingAddress(shippingRes.data)

        const billingRes = await axios.get(`https://onlineparttimejobs.in/api/shippingaddress/billing/user/${e.target.value}`, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + token
            }
        });
        setBillingAddress(billingRes.data);
        setCustomerId(e.target.value)
        // if (shippingRes?.length) {
        //     const clone = { ...values }
        //     clone.shippingAddress = shippingRes[0]._id
        //     setValues(clone)
        // }
        // if (billingRes?.length) {
        //     const clone = { ...values }
        //     clone.billingAddress = billingRes[0]._id
        //     setValues(clone)
        // }

    }
    const [cartChalan, { data, isSuccess: cartSussuss }] = useAddchallanVcartMutation()
    const SaveData = async (val) => {
        setModalShow(false)
        const arr = [...showCombo, ...val]
        const clone = arr.map((item) => {
            return item.data
        })
        cartChalan({ products: clone });

    };
    useEffect(() => {
        if (data) {
            setShowCombo(data)
        }
    }, [cartSussuss])




    const sendComboData = () => {
        const getData = showCombo.map((item) => {
            return { productId: item.stock.productId, variantId: item.variant.uid, serial: item.stock?.serialNo,stockId:item.stock._id }
        })
        const obj = {
            ...values,
            products: getData,
            customer_id: customerId,
            isActive: true,
        }
        addDeleveryChallan({ data: obj, tokenn: token })
    }

    const toastSuccessMessage = () => {
        toast.success("Delivery Challan Added Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("Delivery Challan Not Added ....", {
            position: "top-center"
        })
    };


    useEffect(() => {
        if (isSuccess) {
            toastSuccessMessage()
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isError) {
            toastErrorMessage()
        };
    }, [isError])



    const deleteItem = (index) => {
        const filterd = showCombo.filter((item, i) => {
            if (i !== index) {
                return item
            }

        })
        setShowCombo(filterd);
    }


    const onchangeModal = (e, id) => {
        const vals = e.target.value
        const clone = { ...cartData }
        const maped = clone?.variations?.map((val) => {
            if (val._id == IdleDeadline) {
                const obj = { ...val, qty: vals }
                return obj
            } else {
                return val
            }
        })
        clone.variations = maped
        setcartData(clone)
    }


    const GenerateRow = () => {
        const clone = [...showCombo]
        clone.push({ productId: '', sku: '', variantId: '', stockId: '' })
        setShowCombo(clone)
    }

    const handleInputItem = async (e, val, ind) => {
        if (e.key === 'Enter') {
            const clone = [...showCombo]

            const res = await axios.get(`https://onlineparttimejobs.in/api/serviceProductStock/serialNo/${val}`, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                }
            });

            const abc = showCombo.map((item, i) => {

                if (res?.data?.stock?.serialNo == item.stockId) {
                    return res.data
                } else {
                    return item
                }
            })
            setShowCombo(abc)
        }

    }

    const getUpData = (val, ind) => {
        const clone = [...showCombo]
        const abc = showCombo.map((item, i) => {
            if (i == ind) {
                return { ...item, stockId: val }
            } else {
                return item
            }
        })
        setShowCombo(abc)
    }
    return <div>

        {modalShow && <ModalDeleviry
            show={modalShow}
            onHide={() => setModalShow(false)}
            cartData={cartData}
            SaveData={SaveData}
            showCombo={showCombo}
            onchangeModal={onchangeModal}
        />}

        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <h3>Add Delivery challan</h3>
                    <div className="card" style={{ padding: "10px" }}>

                        {addCOmbLoad && <div className="preloaderCount">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>}
                        <ToastContainer />
                        <div className="container">
                            <div className="row devTols" >
                                <div className="col-4 d-block">
                                    <div>
                                        <label>Date *</label>
                                        <input value={values.date} onChange={changeHandelVal} name="date" className="form-control" type="date" />
                                    </div>
                                </div>

                                <div className="col-4 d-block">
                                    <div>
                                        <label>Reference No *</label>
                                        <input value={values.referenceNo} onChange={changeHandelVal} name="referenceNo" className="form-control" type="text" />
                                    </div>
                                </div>

                                <div className="col-4 d-block">
                                    <div>
                                        <label>Quotation No</label>
                                        <input value={values.quotation_No} onChange={changeHandelVal} name="quotation_No" className="form-control" type="text" />
                                    </div>
                                </div>

                                <div className="col-4 d-block">
                                    <div>
                                        <label>Quotation Date</label>
                                        <input value={values.quotation_date} onChange={changeHandelVal} name="quotation_Date" className="form-control" type="date" />
                                    </div>
                                </div>

                                {/* <div className="col-4 d-block">
                                    <div>
                                        <label>PickupPint</label>
                                        <select name="pickupPoint" className="form-select" aria-label="Default select example" onChange={changeHandelVal} >
                                            <option selected>Open this select menu</option>
                                            {pickupPoints && pickupPoints.map((item, i) => {
                                                return <option value={item._id} key={i}>{item?.pickupPoint_name}</option>
                                            })}
                                        </select>
                                    </div>
                                </div> */}

                                <div className="col-4 d-block">
                                    <div>
                                        <label>Customer</label>
                                        <select name="customer" className="form-select" aria-label="Default select example" onChange={changeHandelAddress} >
                                            <option selected>Open this select menu</option>
                                            {customers && customers.map((item, i) => {
                                                return <option value={item._id} key={i}>{item?.firstname + " " + item?.lastname}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>

                                <div className="col-4 d-block">
                                    <div>
                                        <label>Billing Adress</label>
                                        <select name="billingAddress" className="form-select" value={values.billingAddress} aria-label="Default select example" onChange={changeHandelVal} >
                                            <option selected>Open this select menu</option>
                                            {billingAddress && billingAddress?.map((item, i) => {
                                                return <option selected value={item._id} key={i}>{item?.addressLine1 + ',' + item?.addressLine2 + ' ,' + item?.landmark + ' ,' + item?.zip + ', ' + item?.city + ' ,' + item?.state + ' ,' + item?.country}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>

                                <div className="col-4 d-block">
                                    <div>
                                        <label>Shipping Adress</label>
                                        <select name="shippingAddress" className="form-select" value={values.shippingAddress} aria-label="Default select example" onChange={changeHandelVal} >
                                            <option selected>Open this select menu</option>
                                            {shippingAddress && shippingAddress?.map((item, i) => {
                                                return <option selected value={item._id} key={i}>{item?.addressLine1 + ', ' + item?.addressLine2 + ' ,' + item?.landmark + ',' + item?.zip + ',' + item?.city + ',' + item?.state + ',' + item?.country}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <div>
                                        <label>Pickup Point *</label>
                                        <select name="pickupPoint" className="form-select" aria-label="Default select example" value={idpick} onChange={(e) => { setItPick(e.target.value) }} >
                                            <option selected>Open this select menu</option>
                                            {pickupPoints && pickupPoints.map((item, i) => {
                                                return <option value={item._id} key={i}>{item?.pickupPoint_name}</option>
                                            })}
                                        </select>

                                    </div>
                                </div>
                                {/* <div className="col-6">
                                    <div>
                                        <label>Products *</label>
                                        <input className="form-control" onKeyDown={handelChange} placeholder="Please add products to order list" />
                                        {show && searchPro?.getSearchedProduct?.length > 0 && <div className="showList">
                                            <div style={{ fontSize: "19px" }} onClick={() => { setShow(false) }}><RxCross1 /></div>
                                            {searchPro?.getSearchedProduct.map((item) => {
                                                return <h6 key={item._id} style={{ cursor: "pointer" }} onClick={() => setTableItem(item)}>{item.name}</h6>
                                            })}
                                        </div>}

                                    </div>
                                </div> */}
                            </div>

                        </div>


                        <div className="container">
                            <div className="card-header" style={{ padding: "0", marginTop: "10px" }}>
                                <h4 className="mb-0">Add Product</h4>
                            </div>
                            <div className="card mt-2 rest-part col-lg-12">
                                <div className="card-body">
                                    <div className="row align-items-end">
                                        <div className="col-12 sku_combination table-responsive form-group" id="sku_combination">
                                            <table className="table table-bordered physical_product_show">
                                                <thead>

                                                    <tr>
                                                        <td><label className="control-label">#</label></td>
                                                        <td><label className="control-label">Serial </label></td>
                                                        <td><label className="control-label">Product Name</label></td>
                                                        {/* <td><label className="control-label">SKU</label></td> */}
                                                        <td><label className="control-label">Variant</label></td>
                                                    </tr>

                                                </thead>

                                                <tbody>

                                                    {showCombo && showCombo.map((item, i) => {
                                                        return <tr key={i}>
                                                            <td>
                                                                <AiFillDelete onClick={() => { deleteItem(i) }} />
                                                            </td>
                                                            <td>
                                                                <input type="text" value={item?.stockId} id={i} name="stockId" onChange={(e) => { getUpData(e.target.value, i) }} onKeyDown={(e) => { handleInputItem(e, e.target.value, i) }} className="form-control" />
                                                                {/* <select className="form-select" aria-label="Default select example" id={i} name="stockId" value={item?.stockId} onChange={handleInputItem}>
                                                                    <option selected>Open this select menu</option>
                                                                    {item?.serialNo?.map((val) => {
                                                                        return <option value={val._id} id={i}>{val.serialNo}</option>
                                                                    })}
                                                                </select> */}
                                                            </td>
                                                            <td>
                                                                <input type="text" disabled value={item?.name ? item?.name : item?.productId?.name} name="productName" className="form-control" />
                                                            </td>
                                                            {/* <td>
                                                                <input type="text" disabled value={item?.sku} name="sku" className="form-control" />
                                                            </td> */}
                                                            <td>
                                                                <input type="text" disabled value={item?.variant?.weight} name="rate" className="form-control" />
                                                            </td>


                                                        </tr>
                                                    })}



                                                </tbody>

                                            </table>
                                            <div><button type="button" class="btn btn-success" onClick={GenerateRow}>Generate Row</button></div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div style={{ paddingLeft: "15px", display: "flex" }}>

                            <button type="button" style={{ display: "flex", alignContent: "center", alignItems: 'center' }} className="btn btn-success" onClick={sendComboData}>Sumbit {addCOmbLoad && <Spinner style={{ marginLeft: "10px" }} animation="border" role="status">
                                <span className="visually-hidden" >Loading...</span>
                            </Spinner>}</button>

                        </div>
                    </div>

                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto"></div>
            </div>
        </>
    </div>
}
export default AddDeliveryChalanReport