import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const token = window.localStorage.getItem("token");

function RoboticsPendingApplicationComp() {
    const [statusVal, setStatusVal] = useState();
    const { id } = useParams();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        contactId: '',
        password: '',
        categoryPermit: "",
        productPermit: "",
        status: "",
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

    console.log('statusVal--', statusVal)

    useEffect(() => {
        const fetchAllData = async () => {
            const urls = [
                id
                    ? `https://onlineparttimejobs.in/api/contactMessage/${id}`
                    : "https://onlineparttimejobs.in/api/contactMessage/status/Pending",
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
                    contactId: responses[0]?.user?._id,
                }));
                setFinalBlogCateg(responses[0]?.user?.blogCatSet);
                setFinalIndustryCateg(responses[0]?.user?.indusSet);
                setFinalStyleD(responses[0]?.user?.categSet);
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
            contactId: userData.contactId,
            // email: userData.email,
            password: userData.password,
            message: userData.message,
            categoryPermit: finalStyleD,
            industryPermit: finalIndustryCateg,
            blogsCatPermit: finalBlogCateg,
            status: userData.status
        };
        console.log('paylodOBJ--', obj)
        if (id) {
            try {
                const response = await axios.put(
                    // "https://onlineparttimejobs.in/api/customerPermit/user",
                    "https://onlineparttimejobs.in/api/contactmessage/approve",
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
                    // "https://onlineparttimejobs.in/api/customerPermit/user",
                    "https://onlineparttimejobs.in/api/contactmessage/approve",
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

    const handleDecline = () => {
        setTimeout(() => {
            navigate('../robotic-master/pending-list')
        }, 1000)
    };

    return (
        <div className="aiz-main-content px-15px px-lg-25px">
            <div className="aiz-titlebar text-left mt-2 mb-3">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="h3">Robotic Pending Applications</h1>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">
                        Robotic Pending Applications
                    </h5>
                </div>
                <div className="card">
                    <div className="card-body card-body-2">
                        <section className="form-section">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="mb-3">
                                        <label htmlFor="userEmail" className="form-label">
                                            User Customer Email
                                        </label>
                                        <select
                                            id="userEmail"
                                            className="form-select"
                                            name="contactId"
                                            value={userData?.contactId}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>
                                                Select Customer Email
                                            </option>
                                            {selectData.map((item) => (
                                                <option
                                                    selected={userData.contactId === item?._id}
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
                                    <div className="mb-3">
                                        <label htmlFor="userEmail" className="form-label">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            className="form-control"
                                            name="password"
                                            value={userData?.password}
                                            onChange={handleChange}
                                        >
                                        </input>
                                    </div>
                                </div>
                                {/* <div className="col-lg-4">
                                    <div className="mb-3">
                                        <label htmlFor="userEmail" className="form-label">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className="form-control"
                                            name="firstname"
                                            value={userData?.firstname}
                                            onChange={handleChange}
                                        >
                                        </input>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="mb-3">
                                        <label htmlFor="userEmail" className="form-label">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            className="form-control"
                                            name="lastname"
                                            value={userData?.lastname}
                                            onChange={handleChange}
                                        >
                                        </input>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="mb-3">
                                        <label htmlFor="userEmail" className="form-label">
                                            Phone
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="Phone No"
                                            className="form-control"
                                            name="phone"
                                            value={userData?.phone}
                                            onChange={handleChange}
                                        >
                                        </input>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="mb-3">
                                        <label htmlFor="userEmail" className="form-label">
                                            Message
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Mesage"
                                            className="form-control"
                                            name="message"
                                            value={userData?.message}
                                            onChange={handleChange}
                                        >
                                        </input>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="mb-3">
                                        <label htmlFor="userEmail" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="form-control"
                                            name="email"
                                            value={userData?.email}
                                            onChange={handleChange}
                                        >
                                        </input>
                                    </div>
                                </div> */}
                            </div>

                            <div className="row">
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

                            <div className="row mt-3">

                                <div className="col-lg-4">
                                    <div className="mb-3">
                                        <label htmlFor="userEmail" className="form-label">
                                            Status
                                        </label>
                                        <select
                                            className="form-select"
                                            name="status"
                                            value={userData?.status}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>
                                                Select Status
                                            </option>
                                            <option value={'Pending'}>Pending</option>
                                            <option value={'Approved'}>Approved</option>
                                            <option value={'Rejected'}>Rejected</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-lg-2">
                                    <button
                                        className="btn btn-primary"
                                        type="button"
                                        onClick={handleAdd}
                                    >
                                        Approve
                                    </button>
                                </div>
                                <div className="col-lg-2">
                                    <button
                                        className="btn btn-danger"
                                        type="button"
                                        onClick={handleDecline}
                                    >
                                        Decline
                                    </button>
                                </div>
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

export default RoboticsPendingApplicationComp;
