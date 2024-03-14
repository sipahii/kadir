import axios from "axios";
import Multiselect from "multiselect-react-dropdown"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const token = window.localStorage.getItem('token')

function RoboticMaster() {
    const param = useParams();
    // console.log('params--', param)
    const [add, setAdd] = useState({
        userid: '',
        // categoryPermit: '',
        // productPermit: ''
    });
    const [selctedEmail, setSelctedEmail] = useState();
    const [select, setSelect] = useState(null)
    const [style, setSTyle] = useState([]);
    const [finalStyleD, setFinalStyleD] = useState();

    const [industyCateg, setIndustryCateg] = useState([]);
    const [finalIndustryCateg, setFinalIndustryCategD] = useState();

    const [blogCateg, setBlogcateg] = useState([]);
    const [finalBlogcategD, setFinalBlogcategD] = useState();


    const handleChange = (e) => {
        const clone = { ...add }
        const val = e.target.value
        const name = e.target.name
        clone[name] = val
        setAdd(clone)
    };

    const selectCat = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/customerPermit/user`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        console.log('resSelect---', res?.data)
        setSelect(res?.data)
    };

    const getStyleData = async () => {
        const getCategoryName = []
        const reqData = await axios.get(`https://onlineparttimejobs.in/api/category/admin`,
            {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
        };
        if (getCategoryName.length) {
            setSTyle(getCategoryName);
        }
    };
    const getIndustryCategData = async () => {
        const getCategoryName = []
        const reqData = await axios.get(`https://onlineparttimejobs.in/api/industry/admin`,
            {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
        };
        if (getCategoryName.length) {
            setIndustryCateg(getCategoryName);
        }
    };
    const getBlogCategData = async () => {
        const getCategoryName = []
        const reqData = await axios.get(`https://onlineparttimejobs.in/api/blogscat`,
            {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        for (let i = 0; i < reqData.data.length; i++) {
            getCategoryName.push({ name: reqData.data[i]?.name, _id: reqData.data[i]?._id, uid: reqData.data[i]?.uid })
        };
        if (getCategoryName.length) {
            setBlogcateg(getCategoryName);
        }
    };

    useEffect(() => {
        if (param?.id) {
            setTimeout(() => {
                getByIdData()
            }, 1000)
        } else {
            selectCat()
        }
        getStyleData();
        getIndustryCategData();
        getBlogCategData();
    }, []);

    const getByIdData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/customerPermit/user/${param?.id}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setSelctedEmail(res?.data?.user?.email)
        console.log('res.Data???---', res?.data)
        // setSelect([res?.data?.user?.email])
        // setAdd(res?.data)
        setFinalStyleD(res?.data?.categSet)
        setFinalIndustryCategD(res?.data?.user?.industryPermit)
        setFinalBlogcategD(res?.data?.user?.blogsCatPermit)
        console.log('res.Daaata----', res?.data?.user?.email)
    };

    // useEffect(() => {
    //     getByIdData();
    // }, [param?.id])


    const postData = async () => {
        const obj = { userid: add.userid, categoryPermit: finalStyleD, industryPermit: finalIndustryCateg, blogsCatPermit: finalBlogcategD }
        const postApi = await axios.put(`https://onlineparttimejobs.in/api/customerPermit/user`, obj,
            {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        console.log(postApi);
    };

    const handleAdd = () => {
        postData(add)
    };


    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">{param?.id ? 'Edit' : 'Add'} Robotic SubCategories</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6">{param?.id ? 'Edit' : 'Add'} Robotic  SubCategories</h5>
                        </div>
                        <div className="card">
                            <div className="card-body card-body-2">
                                <section className="form-section">

                                    <div className="row">
                                        <h5>Robotics</h5>
                                        <div className="col-lg-4">
                                            <div class="mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">User Customer Email</label>
                                                {!param?.id ? <select className="form-select" aria-label="Default select example" name="userid" value={add.userid} onChange={handleChange}>
                                                    <option selected>Open this select menu</option>
                                                    {select && select.map((item) => {
                                                        return <option key={item?._id} value={item?._id}>{item?.email}</option>
                                                    })}
                                                </select> : <input type="email" value={selctedEmail} />}
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="">
                                                <label for="exampleFormControlInput1" class="form-label">Choose Product Category</label>
                                                <Multiselect
                                                    isObject={true}
                                                    displayValue="name"
                                                    options={style}
                                                    selectedValues={finalStyleD}
                                                    showCheckbox
                                                    onRemove={(selectedCat) => {
                                                        const selectedIds = selectedCat.map((cat) => {
                                                            return cat.uid
                                                        })
                                                        setFinalStyleD(selectedIds)
                                                    }}
                                                    onSelect={(selectedCat) => {
                                                        const selectedIds = selectedCat.map((cat) => {
                                                            console.log('cat', cat);
                                                            return cat.uid
                                                        })
                                                        setFinalStyleD(selectedIds)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <h5>Solutions</h5>
                                        <div className="col-lg-4">
                                            <div class="mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">User Customer Email</label>
                                                {!param?.id ? <select className="form-select" aria-label="Default select example" name="userid" value={add.userid} onChange={handleChange}>
                                                    <option selected>Open this select menu</option>
                                                    {select && select.map((item) => {
                                                        return <option key={item?._id} value={item?._id}>{item?.email}</option>
                                                    })}
                                                </select> : <input type="email" value={selctedEmail} />}
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="">
                                                <label for="exampleFormControlInput1" class="form-label">Choose Industry Category</label>
                                                <Multiselect
                                                    isObject={true}
                                                    displayValue="name"
                                                    options={industyCateg}
                                                    selectedValues={finalIndustryCateg}
                                                    showCheckbox
                                                    onRemove={(selectedCat) => {
                                                        const selectedIds = selectedCat.map((cat) => {
                                                            return cat.uid
                                                        })
                                                        setFinalIndustryCategD(selectedIds)
                                                    }}
                                                    onSelect={(selectedCat) => {
                                                        const selectedIds = selectedCat.map((cat) => {
                                                            return cat.uid
                                                        })
                                                        setFinalIndustryCategD(selectedIds)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <h5>Blogs</h5>
                                        <div className="col-lg-4">
                                            <div class="mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">User Customer Email</label>
                                                {!param?.id ? <select className="form-select" aria-label="Default select example" name="userid" value={add.userid} onChange={handleChange}>
                                                    <option selected>Open this select menu</option>
                                                    {select && select.map((item) => {
                                                        return <option key={item?._id} value={item?._id}>{item?.email}</option>
                                                    })}
                                                </select> : <input type="email" value={selctedEmail} />}
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="">
                                                <label for="exampleFormControlInput1" class="form-label">Choose Blog Category</label>
                                                <Multiselect
                                                    isObject={true}
                                                    displayValue="name"
                                                    options={blogCateg}
                                                    selectedValues={['test1']}
                                                    showCheckbox
                                                    onRemove={(selectedCat) => {
                                                        const selectedIds = selectedCat.map((cat) => {
                                                            return cat.uid
                                                        })
                                                        setFinalBlogcategD(selectedIds)
                                                    }}
                                                    onSelect={(selectedCat) => {
                                                        const selectedIds = selectedCat.map((cat) => {
                                                            return cat.uid
                                                        })
                                                        setFinalBlogcategD(selectedIds)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 m-4">
                                        <button className="btn btn-primary mr-3" type="button" onClick={handleAdd}>{param?.id ? 'Edit' : 'Add'}</button>
                                        {/* <Link to="/admin/asset-category" className="btn  rounded-2 btn-danger">Close</Link> */}
                                    </div>
                                </section>
                                <div className="aiz-pagination">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
                {/* <ToastContainer /> */}
            </div>
        </>
    )
}
export default RoboticMaster