import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useAddNewSellerPackageMutation } from "../all-products/allproductsApi/allProductsApi";
import axios from "axios";
import { PiSketchLogo } from "react-icons/pi";
import { useParams } from "react-router-dom";


function AddCelebrityPackageComp() {
    const [durationTypeD, setDurationTypeD] = useState();
    const [countryD, setCountryD] = useState();
    const [languageD, setlanguageD] = useState();
    const [logoD, setLogo] = useState();

    const [inputVal, setInputval] = useState({
        duration: "", duration_type: '', no_of_enquiries: "", logo: '', name: '', countries: [], max_services: '', max_categories: '', sort_no: ''
    });

    const params = useParams();
    const token = window.localStorage.getItem('adminToken');

    const toastSuccessMessage = () => {
        toast.success("Celebrity Package added", {
            position: "top-center"
        })
    };
    const toastErrorMessage = () => {
        toast.error("Celebrity Package not added", {
            position: "top-center"
        })
    };

    const toastSuccessMessage1 = () => {
        toast.success("Celebrity Package Updated", {
            position: "top-center"
        })
    };
    const toastErrorMessage1 = () => {
        toast.error("Celebrity Package not Updated", {
            position: "top-center"
        })
    };

    const getDurationTypeData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/serviceRentDurationMaster`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            setDurationTypeD(res.data);
        } catch (error) {

        }
    };

    const getCountryData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/country/admin`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            setCountryD(res.data);
        } catch (error) {

        }
    };

    const getLanguageData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/language/admin`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            setlanguageD(res.data);
        } catch (error) {

        }
    };

    const changeHandlerCountry = (i, id, e) => {
        let countries = inputVal.countries;
        if (countries.length == 0) {
            countries.push({ country_id: id, amount: e.target.value })
        } else {
            let found = false
            countries.forEach(element => {
                if (element.country_id == id || element.country_id?._id == id) {
                    found = true
                    element.amount = e.target.value;
                    return
                }
            });
            if (!found) {
                countries.push({ country_id: id, amount: e.target.value })
            }
        }
        const clonedObj = { ...inputVal, countries }
        setInputval(clonedObj)
    }

    const changeHandler = async (e) => {
        if (e.target.name == 'logo') {
            const formData = new FormData();
            formData.append('image', e.target.files[0]);
            const res = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, formData);
            console.log('log--', res?.data)
            setLogo(res?.data)
        }
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputVal }
        clonedObj[inpName] = inpVal
        setInputval(clonedObj)
    };
    // const [addNewSellerPackageD, response] = useAddNewSellerPackageMutation(token);

    const submitNewSellerPackageData = async (e) => {
        e.preventDefault();
        const finalCLone = { ...inputVal, logo: logoD };
        if (params?.id) {
            try {
                const res = await axios.put(`https://onlineparttimejobs.in/api/sellerPackage/update_SellerPackages/${params?.id}`, finalCLone, {
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'Authorization': 'Bearer ' + token
                    }
                });
                toastSuccessMessage1()
            } catch (error) {
                toastErrorMessage1();
            }
        } else {
            try {
                const res = await axios.post(`https://onlineparttimejobs.in/api/sellerPackage/add_SellerPackages`, finalCLone, {
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'Authorization': 'Bearer ' + token
                    }
                });
                toastSuccessMessage()
            } catch (error) {
                toastErrorMessage()
            }
        }
        // addNewSellerPackageD(finalCLone)
        document.getElementById("create-course-form").reset();
    };

    useEffect(() => {
        getCountryData();
        getLanguageData();
        getDurationTypeData();
    }, []);

    const getByIdD = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/sellerPackage/${params?.id}`, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                }
            });
            console.log('resData--', res?.data)
            setInputval(res?.data)
            setCountryD(res?.data?.countries)
            setLogo(res?.data?.logo)
        } catch (error) {

        }
    };

    useEffect(() => {
        getByIdD();
    }, [params?.id])


    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="col-lg-10 mx-auto">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="mb-0 h6">{params?.id ? 'Update' : 'Create'} New celebrity Package</h5>
                            </div>

                            <form className="form-horizontal" id="create-course-form" onSubmit={submitNewSellerPackageData}>

                                <div className="card-body">
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-from-label" htmlFor="name">Language</label>
                                        <div className="col-sm-10">
                                            <input type="text" placeholder="language" name="name" value={inputVal?.name} className="form-control" required fdprocessedid="wle4vm" onChange={changeHandler} />
                                        </div>
                                    </div>


                                    <h5 style={{ textAlign: 'center' }}>Countries</h5>
                                    {countryD && countryD?.map((item, i) => {
                                        return <div className="form-group row" key={i}>
                                            <label className="col-sm-2 col-from-label" htmlFor="amount">{item?.country_id?.name}</label>
                                            <div className="col-sm-10">
                                                <input type="text" placeholder="" name="countries" value={item?.amount} className="form-control" required fdprocessedid="2fzobh" onChange={(e) => changeHandlerCountry(i, item._id, e)} />
                                            </div>
                                        </div>
                                    })}


                                    <div className="form-group row">
                                        <label className="col-sm-2 col-from-label" htmlFor="duration">Duration</label>
                                        <div className="col-sm-10">
                                            <input type="number" placeholder="Duration" value={inputVal?.duration} name="duration" className="form-control" required fdprocessedid="mazzs" onChange={changeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-2 col-from-label" htmlFor="product_upload_limit">Duration Type</label>
                                        <div className="col-sm-10">
                                            <select className="form-select" name="duration_type" value={inputVal?.duration_type} aria-label="Default select example" onChange={changeHandler}>
                                                <option selected>Open this select menu</option>
                                                {durationTypeD && durationTypeD?.map((item, i) => {
                                                    return <option value={item?._id} key={item}>{item?.name}</option>
                                                })}
                                            </select>
                                        </div>
                                    </div>


                                    <div className="form-group row">
                                        <label className="col-sm-2 col-from-label" htmlFor="product_upload_limit">Number Of Enquiries</label>
                                        <div className="col-sm-10">
                                            <input type="number" placeholder="no of enquiries" name="no_of_enquiries" className="form-control" value={inputVal?.no_of_enquiries} required fdprocessedid="zpnue" onChange={changeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-2 col-from-label" htmlFor="duration">Max Services</label>
                                        <div className="col-sm-10">
                                            <input type="number" placeholder="Max Services" value={inputVal?.max_services} name="max_services" className="form-control" required fdprocessedid="mazzs" onChange={changeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-2 col-from-label" htmlFor="duration">Max categories</label>
                                        <div className="col-sm-10">
                                            <input type="number" placeholder="Max categories" value={inputVal?.max_categories} name="max_categories" className="form-control" required fdprocessedid="mazzs" onChange={changeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-2 col-from-label" htmlFor="duration">Sort No</label>
                                        <div className="col-sm-10">
                                            <input type="number" placeholder="sort_no" value={inputVal?.sort_no} name="sort_no" className="form-control" required fdprocessedid="mazzs" onChange={changeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-md-2 col-form-label" htmlFor="signinSrEmail">Package Logo</label>
                                        <div className="col-md-10">
                                            <div className="input-group" data-toggle="aizuploader" data-type="image" data-multiple="false">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                </div>

                                                <div className="form-control file-amount" >
                                                    <input type="file" name="logo" className="selected-files" onChange={changeHandler} />
                                                </div>

                                            </div>
                                            <div className="file-preview box sm">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="" style={{ marginLeft: '160px' }}>
                                        <img style={{ width: '400px', height: '200px', display: 'flex', justifyContent: 'center', objectFit: 'cover' }} src={logoD?.url} />
                                    </div>

                                    <div className="form-group mb-0 text-right">
                                        <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="4sy5ym">Save</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
                <ToastContainer />
            </div>

        </>
    )
}
export default AddCelebrityPackageComp