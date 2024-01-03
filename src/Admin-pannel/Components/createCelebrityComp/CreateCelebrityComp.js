import axios from 'axios';
import Multiselect from 'multiselect-react-dropdown';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function CreateCelebrityComp() {
    const [showGallaryImageD, setShowGallaryImageD] = useState();
    const [finalThumbnailImage, setFinalThumbnailImage] = useState();
    const [tags, setTags] = useState([]);
    const [categoryType, setCategoryType] = useState([]);
    const [finalCategoryTypeD, setFinalCategoryTypeD] = useState();

    const [industryType, setIndustryType] = useState([]);
    const [finalIndustryTypeD, setFinalIndustryTypeD] = useState();

    const [indexType, setIndexType] = useState([]);
    const [finalIndexTypeD, setFinalIndexTypeD] = useState();

    const [gradeD, setGradeD] = useState();
    const [rateSlabD, setRateSlabD] = useState();
    const [sellerTypeD, setSellerTypeD] = useState();


    const token = window.localStorage.getItem('adminToken');
    const params = useParams();

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
        bank_payment_status: false,
        gender: '',
        sellerType: '',
        industry: [],
        category: [],
        index: [],
        tags: [],
        grades: '',
        price: '',
        galleryImage: null,
        thumnail_image: null,
    }
    );

    const onchengePhotoHandel = async (e) => {
        // setShowImageD(URL.createObjectURL(e.target.files[0]));
        if (e.target.name === 'galleryImage') {
            let arr = [];
            const fromData = new FormData();
            const arrs = [...e.target.files]

            for (let index = 0; index < arrs.length; index++) {
                const element = arrs[index];
                fromData.append('image', element)
                try {
                    // setImageLoading2(true)
                    const res = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, fromData,);
                    arr.push(res.data)
                } catch (error) {

                };
                // setImageLoading2(false)
                fromData.delete('image')
            }
            setShowGallaryImageD(arr);
        } else {
            if (e.target.name === 'thumnail_image') {
                const formData = new FormData();
                const thumbnailImg = e.target.files[0];
                formData.append('image', thumbnailImg);
                try {
                    const res = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, formData,);
                    setFinalThumbnailImage(res.data)
                } catch (error) {

                };
            }

        }
    };

    const handleChange = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    };

    function handleTagKeyDown(e) {
        if (e.key !== 'Enter') return
        const value = e.target.value
        if (!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    };
    const removetagTag = (index) => [
        setTags(tags.filter((el, i) => i !== index))
    ];

    const getCategoryTypeData = async () => {
        const getCategoryName = []
        const reqData = await axios.get("https://onlineparttimejobs.in/api/category/admin", {
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
    };
    const getIndustryTypeData = async () => {
        const getCategoryName = []
        const reqData = await axios.get("https://onlineparttimejobs.in/api/industry/admin", {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        console.log('reqData.dataIn---', reqData.data)
        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
        };
        if (getCategoryName.length) {
            setIndustryType(getCategoryName);
        }
    };
    const getIndexTypeData = async () => {
        const getCategoryName = []
        const reqData = await axios.get("https://onlineparttimejobs.in/api/influenceIndexGroup/admin", {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });

        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
        };
        if (getCategoryName.length) {
            setIndexType(getCategoryName);
        }
    };
    const getGradeData = async () => {
        const reqData = await axios.get("https://onlineparttimejobs.in/api/influence_gradeMaster/admin", {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        setGradeD(reqData.data);
    };
    const getRateSlabData = async () => {
        const reqData = await axios.get("https://onlineparttimejobs.in/api/influence_priceRange/admin", {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        setRateSlabD(reqData.data);
    };
    const getSellerTypeData = async () => {
        const reqData = await axios.get("https://onlineparttimejobs.in/api/sellerMaster", {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        setSellerTypeD(reqData.data);
    };

    useEffect(() => {
        getCategoryTypeData();
        getIndustryTypeData();
        getIndexTypeData();
        getGradeData();
        getRateSlabData();
        getSellerTypeData();
    }, []);

    const toastSuccessMessage = () => {
        toast.success("Celebrity Type Added", {
            position: "top-center"
        })
    };
    const toastErrorMessage = () => {
        toast.error("Celebrity Type Not Added", {
            position: "top-center"
        })
    };
    const toastSuccessMessage1 = () => {
        toast.success("Celebrity Type Updated", {
            position: "top-center"
        })
    };
    const toastErrorMessage1 = () => {
        toast.error("Celebrity Type Not Updated", {
            position: "top-center"
        })
    };

    const submitData = async () => {
        const finalPayload = { ...state, industry: finalIndustryTypeD, category: finalCategoryTypeD, index: finalIndexTypeD, tags: tags, galleryImage: showGallaryImageD, thumnail_image: finalThumbnailImage };
        console.log('finalPayload--', finalPayload);
        if (params?.id) {
            try {
                const resp = await axios.put(`https://onlineparttimejobs.in/api/sellerList/update_seller/${params?.id}`, finalPayload, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                });
                toastSuccessMessage1()
            } catch (error) {
                toastErrorMessage1()
            }
        } else {
            try {
                const resp = await axios.post(`https://onlineparttimejobs.in/api/sellerList/add_seller`, finalPayload, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                });
                toastSuccessMessage()
            } catch (error) {
                toastErrorMessage()
            }
        }

    };

    console.log('finalThumbnailImage--', finalThumbnailImage)

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">{params?.id ? 'Update' : 'Add'} Celebrity</h5>
                    </div>
                    <div className="card-body">
                        <form id="create-course-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">First Name</label>
                                        <input type="text" placeholder="First Name" id="name" name='firstname' value={state?.firstname} className="form-control" required autoComplete="off" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Last Name</label>
                                        <input type="text" placeholder="Last Name" id="name" name="lastname" value={state?.lastname} className="form-control" required autoComplete="off" onChange={handleChange} />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Select Category<span style={{ color: 'red' }}>*</span></label>
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
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Select Industry<span style={{ color: 'red' }}>*</span></label>
                                        <Multiselect
                                            isObject={true}
                                            displayValue="name"
                                            options={industryType}
                                            showCheckbox
                                            selectedValues={[]}
                                            onRemove={(selectedCat) => {
                                                const selectedIds = selectedCat.map((cat) => {
                                                    return cat.uid
                                                })
                                                setFinalIndustryTypeD(selectedIds)
                                            }}
                                            onSelect={(selectedCat) => {
                                                const selectedIds = selectedCat.map((cat) => {
                                                    return cat.uid
                                                })
                                                setFinalIndustryTypeD(selectedIds)
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label className="form-check-label m-2" htmlFor="flexRadioDefault1">Select Index<span style={{ color: 'red' }}>*</span></label>
                                        <Multiselect
                                            isObject={true}
                                            displayValue="name"
                                            options={indexType}
                                            showCheckbox
                                            selectedValues={[]}
                                            onRemove={(selectedCat) => {
                                                const selectedIds = selectedCat.map((cat) => {
                                                    return cat.uid
                                                })
                                                setFinalIndexTypeD(selectedIds)
                                            }}
                                            onSelect={(selectedCat) => {
                                                const selectedIds = selectedCat.map((cat) => {
                                                    return cat.uid
                                                })
                                                setFinalIndexTypeD(selectedIds)
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-md-12 col-from-label">Enter Tags<span className="text-danger">*</span>
                                        </label>
                                        <div className="col-md-12">
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
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Gallary Image</label>
                                        <input type="file" placeholder="Gallary Image" id="name" name="galleryImage" multiple accept="image/*" className="form-control" required onChange={(e) => onchengePhotoHandel(e)} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Thumbnail Image</label>
                                        <input type="file" placeholder="Thumbnail Image" id="name" name="thumnail_image" className="form-control" required onChange={(e) => onchengePhotoHandel(e)} />
                                    </div>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Select Grade</label>
                                        <select className="form-select" name='grades' value={state?.grades} aria-label="Default select example" onChange={handleChange}>
                                            <option selected>Open this select menu</option>
                                            {gradeD && gradeD.map((item, i) => {
                                                return <option value={item?._id} key={i}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Select Rate Slab</label>
                                        <select className="form-select" name='price' value={state?.price} aria-label="Default select example" onChange={handleChange}>
                                            <option>Open this select menu</option>
                                            {rateSlabD && rateSlabD.map((item, i) => {
                                                return <option value={item?._id} key={i}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Under Group</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option>Open this select menu</option>
                                            <option>10K to 20K</option>
                                            <option>21k to 50k</option>
                                            <option>51k to 1Lacs</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Password</label>
                                        <input type="text" placeholder="Password" id="name" name="password" value={state?.password} className="form-control" required autoComplete="off" onChange={handleChange} />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Longitude</label>
                                        <input type="text" placeholder="Longitude" id="name" name="long" value={state?.long} className="form-control" required autoComplete="off" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Latitutde</label>
                                        <input type="text" placeholder="Latitutde" id="name" name="lat" value={state?.lat} className="form-control" required autoComplete="off" onChange={handleChange} />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Address Lane 1</label>
                                        <input type="text" placeholder="Address Lane 1" id="name" name="addressLine1" value={state?.addressLine1} className="form-control" required autoComplete="off" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Address Lane 2</label>
                                        <input type="text" placeholder="Address Lane 2" id="name" name="addressLine2" value={state?.addressLine2} className="form-control" required autoComplete="off" onChange={handleChange} />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Country</label>
                                        <input type="text" placeholder="Country" id="name" name="country" value={state?.country} className="form-control" required autoComplete="off" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">State</label>
                                        <input type="text" placeholder="State" id="name" name="state" value={state?.state} className="form-control" required autoComplete="off" onChange={handleChange} />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">City</label>
                                        <input type="text" placeholder="City" id="name" name="city" value={state?.city} className="form-control" required autoComplete="off" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">LandMark</label>
                                        <input type="text" placeholder="LandMark" id="name" name="landmark" value={state?.landmark} className="form-control" required autoComplete="off" onChange={handleChange} />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Province</label>
                                        <input type="text" placeholder="Province" id="name" name="province" value={state?.province} className="form-control" required autoComplete="off" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Email</label>
                                        <input type="text" placeholder="Email" id="name" name="email" value={state?.email} className="form-control" required autoComplete="off" onChange={handleChange} />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Mobile Number</label>
                                        <input type="text" placeholder="Mobile Number" id="name" name="mobile" value={state?.mobile} className="form-control" required autoComplete="off" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Select Amount Type</label>
                                        <select className="form-select" name='amount_type' value={state?.amount_type} aria-label="Default select example" onChange={handleChange}>
                                            <option>Open this select menu</option>
                                            <option value={'Debit'}>Debit</option>
                                            <option value={'Credit'}>Credit</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Opening Balance</label>
                                        <input type="text" placeholder="Opening Balance" id="name" name="OpeningBalance" className="form-control" value={state?.OpeningBalance} required autoComplete="off" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">As On Date</label>
                                        <input type="date" placeholder="As On Date" id="name" name="asonDate" value={state?.asonDate} className="form-control" required autoComplete="off" onChange={handleChange} />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Tax Number ( GSt I GST CGST  )</label>
                                        <input type="text" placeholder="Tax Number" id="name" name="tax_number" value={state?.tax_number} className="form-control" required autoComplete="off" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Bank Name</label>
                                        <input type="text" placeholder="Bank Name" id="name" name="bank_name" value={state?.bank_name} className="form-control" required autoComplete="off" onChange={handleChange} />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Bank Acount Number</label>
                                        <input type="text" placeholder="Acount Number" id="name" name="bank_acc_no" value={state?.bank_acc_no} className="form-control" required autoComplete="off" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">IFSC Code *</label>
                                        <input type="text" placeholder="IFSC Code" id="name" name="ifsc_code" value={state?.ifsc_code} className="form-control" required autoComplete="off" onChange={handleChange} />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Billing Company *</label>
                                        <input type="text" placeholder="Billing Company" id="name" name="billing_company" value={state?.billing_company} className="form-control" required autoComplete="off" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Select Seller Type</label>
                                        <select className="form-select" name='sellerType' value={state?.sellerType} aria-label="Default select example" onChange={handleChange}>
                                            <option selected>Open this select menu</option>
                                            {sellerTypeD && sellerTypeD.map((item, i) => {
                                                return <option value={item?._id} key={i}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Select Gender</label>
                                        <select className="form-select" name='gender' value={state?.gender} aria-label="Default select example" onChange={handleChange}>
                                            <option selected>Open this select menu</option>
                                            <option value={'Male'}>Male</option>
                                            <option value={'Female'}>Female</option>
                                            <option value={'Other'}>Other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mb-3 text-right">
                                <button type="button" className="btn btn-primary" onClick={submitData}>{params?.id ? 'Update' : 'Add'}</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </>
    )
}

export default CreateCelebrityComp