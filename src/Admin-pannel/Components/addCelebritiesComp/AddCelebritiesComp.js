import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router';
import { useAddSellerListMutation, useEditSellerListMutation, useGetSellerDetailQuery, useGetSellerUpDetailQuery } from '../../Components/all-products/allproductsApi/allProductsApi';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Multiselect from 'multiselect-react-dropdown';

function AddCelebritiesComp() {
    const [tags, setTags] = useState([]);
    const [categoryType, setCategoryType] = useState([]);
    const [finalCategoryTypeD, setFinalCategoryTypeD] = useState();


    const params = useParams()
    const token = window.localStorage.getItem('adminToken')
    const { data, isSuccess } = useGetSellerUpDetailQuery({ id: params.id, token: token })


    // const getData = async ()=>{
    //     try {
    //         const res = await axios.get(`https://onlineparttimejobs.in/api/staff/profile`)
    //     } catch (error) {

    //     }
    // }
    const [validated, setValidated] = useState(false);
    const [sendDataItem, { isSuccess: adsus, isError: adder }] = useAddSellerListMutation()
    const [status, setSatatus] = useState({ verification_status: false, cash_on_delivery_status: false, bank_payment_status: false })

    const [state, setState] = useState({
        firstname: "",
        lastname: "",
        long: "",
        lat: "",
        password: "",
        addressLine1: "",
        addressLine2: "",
        country: "",
        state: "",
        city: "",
        landmark: "",
        province: "",
        remaining_uploads: "",
        email: "",
        mobile: "",
        remaining_digital_uploads: "",
        invalid_at: "",
        remaining_auction_uploads: "",
        rating: "",
        num_of_reviews: "",
        num_of_sale: "",
        verification_status: false,
        cash_on_delivery_status: false,
        admin_to_pay: "",
        bank_name: "",
        tax_number: "",
        bank_acc_no: "",
        amount_type: "Debit",
        AccLedgerGroupId: "",
        OpeningBalance: "",
        ifsc_code: "",
        billing_company: "",
        asonDate: "",
        bank_payment_status: false
    }
    )

    const [update, { isSuccess: upSuss, isError: uperr }] = useEditSellerListMutation()
    const toastSuccessMessage = (str) => {
        toast.success(`Seller ${str} Successfully`, {
            position: "top-center"
        })
    };

    const toastErrorMessage = (str) => {
        toast.error(`Seller ${str}  added`, {
            position: "top-center"
        })
    };


    useEffect(() => {
        if (adsus) {
            toastSuccessMessage('Added')
        }
        if (adder) {
            toastErrorMessage('Not Added')
        }
        if (upSuss) {
            toastSuccessMessage('update')
        }
        if (uperr) {
            toastErrorMessage('Not update')
        }

    }, [adsus, adder, upSuss, uperr])


    const [unders, setUneders] = useState(null)
    const getAllData = async () => {
        const res1 = await axios.get(`https://onlineparttimejobs.in/api/accountGroup`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setUneders(res1.data)
    }
    const onChangeHandle = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }
    const [photos, setchangePhoto] = useState(null)

    const ChengeStatus = (str) => {
        const clone = { ...status }
        for (const key in status) {
            if (str === key) {
                if (status[key].value) {
                    clone[key] = false
                } else {
                    clone[key] = true
                }
            }
        }
        setSatatus(clone);
    }

    const sendData = async (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        const images = new FormData();
        images.append('image', photos);
        setValidated(true);
        let obhs;
        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, images)
            obhs = res.data
        } catch (error) {

        }
        const mergData = { ...state, ...status, location: { long: state.long, lat: state.lat }, image: obhs }
        console.log('mergerData----', mergData)
        if (params.id) {

            try {
                const resp = await axios.put(`https://onlineparttimejobs.in/api/`, mergData, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                });
                alert('success')
            } catch (error) {
                alert('Server Error')
            }
            // update({ data: mergData, id: params.id, token: token })
        } else {
            try {
                const resp = await axios.post(`https://onlineparttimejobs.in/api/`, mergData, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                });
                alert('success')
            } catch (error) {
                alert('Server Error')
            }

            // sendDataItem({ data: mergData, token: token });
        }
    }

    useEffect(() => {
        if (params.id) {
            // const obj = {
            //     firstname: data?.firstname,
            //     lastname: data?.lastname,
            //     long: data?.lat,
            //     lat: data?.lat,
            //     addressLine1: data?.addressLine1,
            //     addressLine2: data?.addressLine2,
            //     country: data?.country,
            //     state: data?.state,
            //     city: data?.city,
            //     landmark: data?.landmark,
            //     province: data?.province,
            //     remaining_uploads: "",
            //     email: data?.email,
            //     mobile: data?.mobile,
            //     remaining_digital_uploads: "",
            //     invalid_at: "",
            //     remaining_auction_uploads: "",
            //     rating: "",
            //     num_of_reviews: "",
            //     num_of_sale: "",
            //     verification_status: false,
            //     cash_on_delivery_status: false,
            //     admin_to_pay: "",
            //     bank_name: data?.bank_name,
            //     tax_number: data?.tax_number,
            //     bank_acc_no: data?.bank_acc_no,
            //     bank_payment_status: false
            // }
            setState(data)
        }
        getAllData()
    }, [params, isSuccess]);



    useEffect(() => {
        const getCategoryTypeData = async () => {
            const getCategoryName = []
            const reqData = await axios.get("https://onlineparttimejobs.in/api/categoryType", {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });

            for (let i = 0; i < reqData.data.length; i++) {
                getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
            };
            if (getCategoryName.length) {
                setCategoryType(getCategoryName);
            }
        }
        getCategoryTypeData();
    }, []);

    function handleTagKeyDown(e) {
        if (e.key !== 'COMMA') return
        const value = e.target.value
        if (!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    };
    const removetagTag = (index) => [
        setTags(tags.filter((el, i) => i !== index))
    ];



    return <div className='container'>
        {/* <div className="card">
            <div className="card-header">
                <div className="card-body"> */}


        <ToastContainer />


        {params.id ? <h2>Update Celebrity</h2> : <h2>Add Celebrity</h2>}


        <Form noValidate validated={validated} onSubmit={sendData}>
            <div className='row'>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name='firstname' onChange={onChangeHandle} value={state?.firstname} style={{ width: "50%" }} placeholder="First Name" required />
                    </Form.Group>
                </div>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name='lastname' onChange={onChangeHandle} value={state?.lastname} style={{ width: "50%" }} placeholder="Last Name" required />
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" name='lastname' onChange={(e) => { setchangePhoto(e.target.files[0]) }} style={{ width: "50%" }} placeholder="Last Name" required />
                    </Form.Group>
                </div>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Category</Form.Label>
                        <div className="col-lg-6 mb-2">
                            {/* <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Category Type <span style={{ color: 'red' }}>*</span></label> */}
                            <Multiselect
                                isObject={true}
                                displayValue="name"
                                options={categoryType}
                                showCheckbox
                                selectedValues={[]}
                                onRemove={(selectedCat) => {
                                    const selectedIds = selectedCat.map((cat) => {
                                        return cat.uid
                                    })
                                    setFinalCategoryTypeD(selectedIds)
                                }}
                                onSelect={(selectedCat) => {
                                    const selectedIds = selectedCat.map((cat) => {
                                        return cat.uid
                                    })
                                    setFinalCategoryTypeD(selectedIds)
                                }}
                            />
                        </div>
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Industry</Form.Label>
                        <div className="col-lg-6 mb-2">
                            {/* <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Category Type <span style={{ color: 'red' }}>*</span></label> */}
                            <Multiselect
                                isObject={true}
                                displayValue="name"
                                options={categoryType}
                                showCheckbox
                                selectedValues={[]}
                                onRemove={(selectedCat) => {
                                    const selectedIds = selectedCat.map((cat) => {
                                        return cat.uid
                                    })
                                    setFinalCategoryTypeD(selectedIds)
                                }}
                                onSelect={(selectedCat) => {
                                    const selectedIds = selectedCat.map((cat) => {
                                        return cat.uid
                                    })
                                    setFinalCategoryTypeD(selectedIds)
                                }}
                            />
                        </div>
                    </Form.Group>
                </div>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Index</Form.Label>
                        <div className="col-lg-6 mb-2">
                            {/* <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Category Type <span style={{ color: 'red' }}>*</span></label> */}
                            <Multiselect
                                isObject={true}
                                displayValue="name"
                                options={categoryType}
                                showCheckbox
                                selectedValues={[]}
                                onRemove={(selectedCat) => {
                                    const selectedIds = selectedCat.map((cat) => {
                                        return cat.uid
                                    })
                                    setFinalCategoryTypeD(selectedIds)
                                }}
                                onSelect={(selectedCat) => {
                                    const selectedIds = selectedCat.map((cat) => {
                                        return cat.uid
                                    })
                                    setFinalCategoryTypeD(selectedIds)
                                }}
                            />
                        </div>
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select aria-label="Default select example" style={{ width: "50%" }} name="AccLedgerGroupId" onChange={onChangeHandle}>
                            <option>Open this select menu</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                            {/* {unders && unders.map((item) => {
                        return <option value={item._id}>{item.name}</option>
                    })} */}
                        </Form.Select>
                    </Form.Group>
                </div>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Grade</Form.Label>
                        <Form.Select aria-label="Default select example" style={{ width: "50%" }} name="AccLedgerGroupId" onChange={onChangeHandle}>
                            <option>Open this select menu</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            {/* {unders && unders.map((item) => {
                        return <option value={item._id}>{item.name}</option>
                    })} */}
                        </Form.Select>
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Rate Slab</Form.Label>
                        <Form.Select aria-label="Default select example" style={{ width: "50%" }} name="AccLedgerGroupId" onChange={onChangeHandle}>
                            <option>Open this select menu</option>
                            <option>10K to 20K</option>
                            <option>21k to 50k</option>
                            <option>51k to 1Lacs</option>
                            {/* {unders && unders.map((item) => {
                        return <option value={item._id}>{item.name}</option>
                    })} */}
                        </Form.Select>
                    </Form.Group>
                </div>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Under Group</Form.Label>
                        <Form.Select aria-label="Default select example" style={{ width: "50%" }} name="AccLedgerGroupId" onChange={onChangeHandle}>
                            {/* <option>Open this select menu</option> */}
                            {unders && unders.map((item) => {
                                return <option value={item._id}>{item.name}</option>
                            })}
                        </Form.Select>
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" name='password' onChange={onChangeHandle} style={{ width: "50%" }} placeholder="password" required />
                    </Form.Group>
                </div>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Longitutde</Form.Label>
                        <Form.Control type="text" name='long' onChange={onChangeHandle} value={state?.long} style={{ width: "50%" }} placeholder="Longitude" required />
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Latitutde</Form.Label>
                        <Form.Control type="text" name='lat' onChange={onChangeHandle} value={state?.lat} style={{ width: "50%" }} placeholder="Latitutde" required />
                    </Form.Group>
                </div>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Address Lane 1</Form.Label>
                        <Form.Control type="text" name='addressLine1' onChange={onChangeHandle} value={state?.addressLine1} style={{ width: "50%" }} placeholder="Address Lane 1" required />
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Address Lane 2</Form.Label>
                        <Form.Control type="text" name='addressLine2' onChange={onChangeHandle} value={state?.addressLine2} style={{ width: "50%" }} placeholder="Address Lane 2" required />
                    </Form.Group>
                </div>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" name='country' onChange={onChangeHandle} value={state?.country} style={{ width: "50%" }} placeholder="Country" required />
                    </Form.Group>
                </div>
            </div>

            <div className='row'>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" name='state' onChange={onChangeHandle} value={state?.state} style={{ width: "50%" }} placeholder="State" required />
                    </Form.Group>
                </div>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" name='city' onChange={onChangeHandle} value={state?.city} style={{ width: "50%" }} placeholder="City" required />
                    </Form.Group>
                </div>
            </div>

            <div className='row'>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>LandMark</Form.Label>
                        <Form.Control type="text" name='landmark' onChange={onChangeHandle} value={state?.landmark} style={{ width: "50%" }} placeholder="LandMark" required />
                    </Form.Group>
                </div>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Province</Form.Label>
                        <Form.Control type="text" name='province' onChange={onChangeHandle} value={state?.province} style={{ width: "50%" }} placeholder="Province" required />
                    </Form.Group>
                </div>
            </div>
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='seller_name' onChange={onChangeHandle} value={state?.seller_name} style={{ width: "50%" }} placeholder="Seller Name" required />
            </Form.Group> */}

            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Rating</Form.Label>
                <Form.Control type="number" name='rating' onChange={onChangeHandle} value={state?.rating} style={{ width: "50%" }} placeholder="Rating In Number" required />
            </Form.Group> */}
            <div className='row'>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='email' onChange={onChangeHandle} value={state?.email} style={{ width: "50%" }} placeholder="Email" required />
                    </Form.Group>
                </div>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="number" name='mobile' onChange={onChangeHandle} value={state?.mobile} style={{ width: "50%" }} placeholder="Mobile Number" required />
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Amount Type</Form.Label>
                        <Form.Select style={{ width: "50%" }} aria-label="Default select example" name="amount_type" onChange={onChangeHandle}>
                            <option selected value='Debit'>Debit</option>
                            <option value='Credit'>Credit</option>
                        </Form.Select>
                    </Form.Group>
                </div>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Opening Balance</Form.Label>
                        <Form.Control name='OpeningBalance' type="text" onChange={onChangeHandle} style={{ width: "50%" }} placeholder="Opening Balance" required />
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>As On Date</Form.Label>
                        <Form.Control name='asondate' type="date" onChange={onChangeHandle} style={{ width: "50%" }} placeholder="Opening Balance" required />
                    </Form.Group>
                </div>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Tax Number ( GSt I GST CGST  )</Form.Label>
                        <Form.Control type="text" name='tax_number' onChange={onChangeHandle} value={state?.tax_number} style={{ width: "50%" }} placeholder="tax_number" required />
                    </Form.Group>
                </div>
            </div>

            <div className='row'>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Bank Name</Form.Label>
                        <Form.Control type="text" name='bank_name' onChange={onChangeHandle} value={state?.bank_name} style={{ width: "50%" }} placeholder="Bank Name" required />
                    </Form.Group>
                </div>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Bank Acount Number</Form.Label>
                        <Form.Control name='bank_acc_no' type="text" onChange={onChangeHandle} value={state?.bank_acc_no} style={{ width: "50%" }} placeholder="Bank Acount Number" required />
                    </Form.Group>
                </div>
            </div>

            <div className='row'>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>IFSC Code *</Form.Label>
                        <Form.Control name='ifsc_code' type="text" onChange={onChangeHandle} value={state?.ifsc_code} style={{ width: "50%" }} placeholder="IFSC Code" required />
                    </Form.Group>
                </div>
                <div className='col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Billing Company *</Form.Label>
                        <Form.Control name='billing_company' type="text" onChange={onChangeHandle} value={state?.billing_company} style={{ width: "50%" }} placeholder="Billing Company" required />
                    </Form.Group>
                </div>
            </div>


            <div className='row'>
                <div className='col-lg-6'>
                    {/* <div className='col-lg-6'> */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Tags</Form.Label>
                        {/* <div className="form-group row"> */}
                        {/* <label className="col-md-3 col-from-label">Tags <span className="text-danger">*</span>
                                </label> */}
                        <div className="col-lg-6">
                            <div className="tags_inp_wrapper">
                                <div className='tags-input-container'>
                                    {tags.map((tag, index) => {
                                        return <div className='tag-item' key={index}>
                                            <span className='text'>{tag}</span>
                                            <span className='close' onClick={() => removetagTag(index)}>&times;</span>
                                        </div>
                                    })}
                                    <input type="text" onKeyDown={handleTagKeyDown} placeholder='type some text' className='tags-input' name="attributes" />
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </Form.Group>
                    {/* </div> */}
                </div>
            </div>

            {/* <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
                <Form.Label>Bank Payment Status</Form.Label>
                <label className="aiz-switch aiz-switch-success mb-0 d-flex"><input name="status" onClick={() => { ChengeStatus("bank_payment_status") }} type="checkbox" value="1" checked={status.bank_payment_status} />
                    <span className="slider round" style={{ marginLeft: "20px" }}></span>
                </label>
            </Form.Group> */}

            {/* <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
                <Form.Label>Verification Status</Form.Label>
                <label className="aiz-switch aiz-switch-success mb-0 d-flex"><input onClick={() => { ChengeStatus("verification_status") }} name="status" type="checkbox" value="1" checked={status.verification_status} />
                    <span className="slider round" style={{ marginLeft: "20px" }}></span>
                </label>
            </Form.Group> */}

            {/* <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
                <Form.Label>Cash on Delivery Status</Form.Label>
                <label className="aiz-switch aiz-switch-success mb-0 d-flex"><input onClick={() => { ChengeStatus("cash_on_delivery_status") }} name="status" type="checkbox" value="1" checked={status.cash_on_delivery_status} />
                    <span className="slider round" style={{ marginLeft: "20px" }}></span>
                </label>
            </Form.Group> */}

            <Button variant="primary" type="submit" >
                Submit
            </Button>
        </Form >
        {/* </div>
            </div>
        </div> */}
    </div >
}
export default AddCelebritiesComp