import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const token = window.localStorage.getItem("token");

function RoboticMaster() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        userid: "",
        categoryPermit: "",
        productPermit: "",
    });

    const [selectData, setSelectData] = useState([]);
    const [style, setStyle] = useState([]);
    const [finalStyleD, setFinalStyleD] = useState([]);

    const [industryCateg, setIndustryCateg] = useState([]);
    const [finalIndustryCateg, setFinalIndustryCateg] = useState([]);

    const [blogCateg, setBlogCateg] = useState([]);
    const [finalBlogCateg, setFinalBlogCateg] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    const fetchData = async (url) => {
        try {
            const response = await axios.get(url, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    };

    useEffect(() => {
        const fetchAllData = async () => {
            const urls = [
                id
                    ? `https://onlineparttimejobs.in/api/customerPermit/user/${id}`
                    : "https://onlineparttimejobs.in/api/customerPermit/user",
                "https://onlineparttimejobs.in/api/category/admin",
                "https://onlineparttimejobs.in/api/industry/admin",
                "https://onlineparttimejobs.in/api/blogscat",
            ];

            const responses = await Promise.all(urls.map(fetchData));
            console.log("responses", responses);
            if (id) {
                setSelectData([{ email: responses[0]?.user?.email }]);
                setUserData((prevData) => ({
                    ...prevData,
                    userid: responses[0]?.user?._id,
                }));
                setFinalBlogCateg(responses[0]?.user?.blogsCatPermit);
                setFinalIndustryCateg(responses[0]?.user?.industryPermit);
                setFinalStyleD(responses[0]?.user?.categoryPermit);
            } else {
                setSelectData(responses[0]);
            }

            setStyle(responses[1]);
            setIndustryCateg(responses[2]);
            setBlogCateg(responses[3]);
        };

        fetchAllData();
    }, [id]);

    const toastSuccessMessage = (messg) => {
        toast.success(messg, {
            position: "top-center"
        })
    };
    const toastErrorMessage = (messg) => {
        toast.error(messg, {
            position: "top-center"
        })
    };

    const postData = async () => {
        const obj = {
            userid: userData.userid,
            categoryPermit: finalStyleD,
            industryPermit: finalIndustryCateg,
            blogsCatPermit: finalBlogCateg,
        };

        if (id) {
            try {
                const response = await axios.put(
                    "https://onlineparttimejobs.in/api/customerPermit/user",
                    obj,
                    {
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                toastSuccessMessage('Successfully Updated');
                setTimeout(() => {
                    navigate('../robotic-master-list')
                }, 5000);
            } catch (error) {
                toastErrorMessage('Not Updated')
            }
        } else {
            try {
                const response = await axios.put(
                    "https://onlineparttimejobs.in/api/customerPermit/user",
                    obj,
                    {
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                toastSuccessMessage('Successfully Added')
                setTimeout(() => {
                    navigate('../robotic-master-list')
                }, 5000);

            } catch (error) {
                toastErrorMessage('Not Added')
            }
        }
    };

    const handleAdd = () => {
        postData();
    };

    const getSelectedItem = (category, selectedId) => {
        console.log(category, selectedId);
        let result = category?.filter((item) => selectedId?.includes(item.uid));
        return result;
    };

    return (
        <div className="aiz-main-content px-15px px-lg-25px">
            <div className="aiz-titlebar text-left mt-2 mb-3">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="h3">{id ? "Edit" : "Add"} Robotic SubCategories</h1>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">
                        {id ? "Edit" : "Add"} Robotic SubCategories
                    </h5>
                </div>
                <div className="card">
                    <div className="card-body card-body-2">
                        <section className="form-section">
                            <div className="row">
                                {/* <h5>Robotics</h5> */}
                                <div className="col-lg-4">
                                    <div className="mb-3">
                                        <label htmlFor="userEmail" className="form-label">
                                            User Customer Email
                                        </label>
                                        <select
                                            id="userEmail"
                                            className="form-select"
                                            name="userid"
                                            value={userData.userid}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>
                                                Select an option
                                            </option>
                                            {selectData.map((item) => (
                                                <option
                                                    selected={userData.userid === item?._id}
                                                    key={item._id}
                                                    value={item._id}
                                                >
                                                    {item.email}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="">
                                        <label htmlFor="productCategory" className="form-label">
                                            Choose Product Category
                                        </label>
                                        <Multiselect
                                            isObject={true}
                                            displayValue="name"
                                            options={style}
                                            selectedValues={getSelectedItem(style, finalStyleD)}
                                            showCheckbox
                                            onRemove={(selectedCat) =>
                                                setFinalStyleD(selectedCat.map((cat) => cat.uid))
                                            }
                                            onSelect={(selectedCat) =>
                                                setFinalStyleD(selectedCat.map((cat) => cat.uid))
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Solutions section */}
                            <div className="row">
                                {/* <h5>Solutions</h5> */}
                                {/* User Customer Email */}
                                <div className="col-lg-4">
                                    <div className="mb-3">
                                        {/* <label htmlFor="userEmail" className="form-label">
                      User Customer Email
                    </label>
                    <select
                      id="userEmail"
                      className="form-select"
                      name="userid"
                      value={userData.userid}
                      onChange={handleChange}
                    >
                      <option defaultValue>Open this select menu</option>
                      {selectData.map((item) => (
                        <option key={item._id} value={item._id}>
                          {item.email}
                        </option>
                      ))}
                    </select> */}
                                    </div>
                                </div>
                                {/* Choose Industry Category */}
                                <div className="col-lg-4">
                                    <div className="">
                                        <label htmlFor="industryCategory" className="form-label">
                                            Choose Industry Category
                                        </label>
                                        <Multiselect
                                            isObject={true}
                                            displayValue="name"
                                            options={industryCateg}
                                            selectedValues={getSelectedItem(
                                                industryCateg,
                                                finalIndustryCateg
                                            )}
                                            showCheckbox
                                            onRemove={(selectedCat) =>
                                                setFinalIndustryCateg(selectedCat.map((cat) => cat.uid))
                                            }
                                            onSelect={(selectedCat) =>
                                                setFinalIndustryCateg(selectedCat.map((cat) => cat.uid))
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Blogs section */}
                            <div className="row">
                                {/* <h5>Blogs</h5> */}
                                {/* User Customer Email */}
                                <div className="col-lg-4">
                                    <div className="mb-3">
                                        {/* <label htmlFor="userEmail" className="form-label">
                      User Customer Email
                    </label>
                    <select
                      id="userEmail"
                      className="form-select"
                      name="userid"
                      value={userData.userid}
                      onChange={handleChange}
                    >
                      <option defaultValue>Open this select menu</option>
                      {selectData.map((item) => (
                        <option key={item._id} value={item._id}>
                          {item.email}
                        </option>
                      ))}
                    </select> */}
                                    </div>
                                </div>
                                {/* Choose Blog Category */}
                                <div className="col-lg-4">
                                    <div className="">
                                        <label htmlFor="blogCategory" className="form-label">
                                            Choose Blog Category
                                        </label>
                                        <Multiselect
                                            isObject={true}
                                            displayValue="name"
                                            options={blogCateg}
                                            selectedValues={getSelectedItem(
                                                blogCateg,
                                                finalBlogCateg
                                            )}
                                            showCheckbox
                                            onRemove={(selectedCat) =>
                                                setFinalBlogCateg(selectedCat.map((cat) => cat.uid))
                                            }
                                            onSelect={(selectedCat) =>
                                                setFinalBlogCateg(selectedCat.map((cat) => cat.uid))
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 m-4">
                                <button
                                    className="btn btn-primary mr-3"
                                    type="button"
                                    onClick={handleAdd}
                                >
                                    {id ? "Update" : "Add"}
                                </button>
                            </div>
                        </section>
                        <div className="aiz-pagination"></div>
                    </div>
                </div>
            </div>
            <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto"></div>
            <ToastContainer />
        </div>
    );
}

export default RoboticMaster;
