import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './AddTicket.css'
import { useAddSupportTicketDMutation, useGetModalAssignToDataQuery, useGetTicketAssignToDQuery, useGetTicketBlockDQuery, useGetTicketBuildingDQuery, useGetTicketCompaintNatureDQuery, useGetTicketCompaintTypeDQuery, useGetTicketFloorDQuery, useGetTicketListingFilledDQuery, useGetTicketOfficeRoomDQuery, useGetTicketRoleDQuery, useGetTicketStatusQuery, useGetTicketWardDQuery, useGetTicketareaDQuery } from '../all-products/allproductsApi/allProductsApi';
import { BsClockHistory, BsEmojiSmile, BsFillEnvelopeFill, BsFillPencilFill, BsThreeDotsVertical } from 'react-icons/bs';
import { HiOutlinePencil } from 'react-icons/hi';
import { FaAngleUp } from 'react-icons/fa';
import img from "../../../assets/img/brief-image.png"
import { IoMdAttach } from 'react-icons/io';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddTicket() {
    const [userData, setUserData] = useState();
    const [satffffD, setStaffffD] = useState();
    const [tikId, setTikId] = useState();
    const [inputval, setInputval] = useState({
        user_id: '842893923939283',
        mobile: '',
        firstname: '',
        lastname: '',
        area_id: "",
        building_id: '',
        block_id: '',
        floor_id: '',
        ward_id: '',
        officeRoom_id: '',
        complaintNature_id: '',
        complaintType_id: '',
        subject: "",
        details: "",
        priority: '',
        status: '',
        role_id: '',
        staff_id: '',
        // id: '',
        assignTo: null,
    });

    const [showUl, setShowUl] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    const { data: buildingD } = useGetTicketBuildingDQuery();
    const { data: blockD } = useGetTicketBlockDQuery();
    const { data: floorD } = useGetTicketFloorDQuery();
    const { data: wardD } = useGetTicketWardDQuery();
    const { data: roomD } = useGetTicketOfficeRoomDQuery();
    const { data: areaD } = useGetTicketareaDQuery();
    const { data: complaintTypeD } = useGetTicketCompaintTypeDQuery();
    const { data: complaintNatureD } = useGetTicketCompaintNatureDQuery();
    const { data: assignToD } = useGetTicketAssignToDQuery();
    const { data: forPreFilleID } = useGetTicketListingFilledDQuery();
    const { data: roleData } = useGetTicketRoleDQuery();
    const { data: statusData } = useGetTicketStatusQuery();
    const { data: modalAssignTo } = useGetModalAssignToDataQuery(inputval?.role_id);

    // const [addTicketD, response] = useAddSupportTicketDMutation();

    const selectUser = (user) => {
        setInputval(user)
        setShowUl(false)
    };

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    const handleKeyDown = async (e) => {
        if (e.key == 'Enter') {
            const resp = await axios.get(`https://onlineparttimejobs.in/api/staff/search/${inputval.mobile}`);
            setUserData(resp.data)
            setShowUl(true)
            // console.log('mobileNo--', inputval.mobile)
        }
    };
    console.log('statusData', statusData)

    useEffect(() => {
        if (userData) {
            setInputval(userData)
        }
    }, [userData])

    useEffect(() => {
        if (forPreFilleID) {
            const clon = { ...forPreFilleID }
            setTikId(clon.id)
            console.log('clon', clon)
            // setInputval(clon)

        }
    }, [forPreFilleID]);

    const submiAdddSupportTicketData = async () => {
        let data = inputval
        data.id = tikId
        try {
            const addTicket = await axios.post('https://onlineparttimejobs.in/api/ticket_ccm/add_Tickets', data);
            console.log('addTicket--', addTicket);
            toastSuccessMessage();
            // if (addTicket?.data?._id) {
            //     navigate(`edit/${addTicket.data._id}`)
            // }
        } catch (error) {
            toastErrorMessage()
        }
        // document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("Ticket Added Successfully", {
            position: "top-center"
        })
    };
    const toastErrorMessage = () => {
        toast.error("Ticket Not Added", {
            position: "top-center"
        })
    }

    const toknn = window.localStorage.getItem('adminToken')

    const getStafffData = async () => {
        try {
            const respp = await axios.get('https://onlineparttimejobs.in/api/staff/profile',
                {
                    headers: {
                        Authorization: 'Bearer ' + toknn
                    }
                }
            );
            setStaffffD(respp.data)
            setInputval(respp.data)
        } catch (error) {
            alert('error')
        }
    }

    useEffect(() => {
        getStafffData()
    }, []);

    useEffect(() => {
        if (satffffD) {
            setInputval(satffffD)
        }
    }, [satffffD])

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px" style={{ background: 'gainsboro' }}>
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <h5 className="mb-0 h6">Create Complaint</h5>
                    </div>
                    <div className='d-flex'>
                        <div className="col-lg-4 p-0">
                            <div className="card">
                                <div className="card-body p-0">
                                    <form className="p-4" id="create-course-form">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-9 col-from-label">Mobile</label>
                                                <input type="number" onKeyDown={handleKeyDown} className="form-control" name="mobile" placeholder="Mobile" fdprocessedid="vrvrin" value={inputval?.mobile} onChange={onChangeHandler} />
                                                {showUl &&
                                                    <ul className='col-sm-9 col-from-label p-2' style={{ backgroundColor: 'aqua' }}>
                                                        {userData && userData.map((item, i) => {
                                                            return <li className='col-sm-9 m-2' style={{ backgroundColor: 'gainsboro', cursor: 'pointer' }} onClick={() => selectUser(item)}>{item?.firstname + " " + item?.lastname}</li>
                                                        })}
                                                    </ul>
                                                }
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-9 col-from-label">First name</label>
                                                <input type="text" className="form-control" name="firstname" placeholder="First Name" fdprocessedid="vrvrin" value={inputval?.firstname} onChange={onChangeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-9 col-from-label">Last Name</label>
                                                <input type="text" className="form-control" name="lastname" placeholder="Last Name" fdprocessedid="vrvrin" value={inputval?.lastname} onChange={onChangeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-9 col-from-label">Subject</label>
                                                <input type="text" className="form-control" name="subject" placeholder="subject" fdprocessedid="vrvrin" value={inputval?.subject} onChange={onChangeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-9 col-from-label">Id</label>
                                                <input type="text" className="form-control" name="id" placeholder="subject" fdprocessedid="vrvrin" value={tikId} onChange={onChangeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-9 col-from-label">Status</label>
                                                <select className="form-select" value={inputval?.status} name='status' aria-label="Default select example" onChange={onChangeHandler}>
                                                    {statusData && statusData.map((item, i) => {
                                                        return <option value={item._id} key={i}>{item.name}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-9 col-from-label">Priority</label>
                                                <select className="form-select" value={inputval?.priority} name='priority' aria-label="Default select example" onChange={onChangeHandler}>
                                                    <option value={'low'}>Low</option>
                                                    <option value={'high'}>High</option>
                                                    <option value={'urgent'}>Urgent</option>
                                                    <option value={'top_urgent'}>Top Urgent</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-9 col-from-label">Reply</label>
                                                <input type="text" className="form-control" name="reply" placeholder="reply" fdprocessedid="vrvrin" value={inputval?.reply} onChange={onChangeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-9 col-from-label">Building</label>
                                                <select className="form-select" value={inputval?.building_id} name='building_id' aria-label="Default select example" onChange={onChangeHandler}>
                                                    {buildingD && buildingD.map((item, i) => {
                                                        return <option value={item._id} key={i}>{item.name}</option>
                                                    })}

                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-9 col-from-label">Block</label>
                                                <select className="form-select" name='block_id' value={inputval?.block_id} aria-label="Default select example" onChange={onChangeHandler}>
                                                    {blockD && blockD.map((item, i) => {
                                                        return <option value={item._id} key={i}>{item.name}</option>
                                                    })}

                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-9 col-from-label">Office Room</label>
                                                <select className="form-select" value={inputval?.officeRoom_id} name='officeRoom_id' aria-label="Default select example" onChange={onChangeHandler}>
                                                    {roomD && roomD.map((item, i) => {
                                                        return <option value={item._id} key={i}>{item.name}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-9 col-from-label">Ward</label>
                                                <select className="form-select" value={inputval?.ward_id} name='ward_id' aria-label="Default select example" onChange={onChangeHandler}>
                                                    {wardD && wardD.map((item, i) => {
                                                        return <option value={item._id} key={i}>{item.name}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-9 col-from-label">Area</label>
                                                <select className="form-select" value={inputval?.area_id} name='area_id' aria-label="Default select example" onChange={onChangeHandler}>
                                                    {areaD && areaD.map((item, i) => {
                                                        return <option value={item._id} key={i}>{item.name}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-9 col-from-label">Floor</label>
                                                <select className="form-select" value={inputval?.floor_id} name='floor_id' aria-label="Default select example" onChange={onChangeHandler}>
                                                    {floorD && floorD.map((item, i) => {
                                                        return <option value={item._id} key={i}>{item.name}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        {/* <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-9 col-from-label">Complaint Type</label>
                                                <select className="form-select" value={inputval?.complaintType_id} name='complaintType_id' aria-label="Default select example" onChange={onChangeHandler}>
                                                    {complaintTypeD && complaintTypeD.map((item, i) => {
                                                        return <option value={item._id} key={i}>{item.name}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div> */}
                                        {/* <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-9 col-from-label">Complaint Nature</label>
                                                <select className="form-select" value={inputval?.complaintNature_id} name='complaintNature_id' aria-label="Default select example" onChange={onChangeHandler}>
                                                    {complaintNatureD && complaintNatureD.map((item, i) => {
                                                        return <option value={item._id} key={i}>{item.name}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div> */}
                                        {/* <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-9 col-from-label">Assign To</label>
                                                <select className="form-select" value={inputval?.assignTo} name='assignTo' aria-label="Default select example" onChange={onChangeHandler}>
                                                    {assignToD && assignToD.map((item, i) => {
                                                        return <option value={item._id} key={i}>{item.firstname + " " + item.lastname}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div> */}
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <label className="col-sm-9 col-from-label">Detail</label>
                                                <textarea name="details" value={inputval?.details} rows="3" cols="55" onChange={onChangeHandler}></textarea>
                                            </div>
                                        </div>

                                        {/* <div className="form-group mb-0 text-right">
                                            <Modal show={show} onHide={handleClose} dialogClassName='customModal'>
                                                <Modal.Body>
                                                    <div className="form-group row">
                                                        <div className="col-sm-9">
                                                            <label className="col-sm-9 col-from-label">Designation</label>
                                                            <select className="form-select" value={inputval?.role_id} name='role_id' aria-label="Default select example" onChange={onChangeHandler}>
                                                                {roleData && roleData.map((item, i) => {
                                                                    return <option value={item._id} key={i}>{item.role_name}</option>
                                                                })}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col-sm-9">
                                                            <label className="col-sm-9 col-from-label">Assign To</label>
                                                            <select className="form-select" value={inputval?.staff_id} name='staff_id' aria-label="Default select example" onChange={onChangeHandler}>
                                                                {modalAssignTo && modalAssignTo.map((item, i) => {
                                                                    return <option value={item._id} key={i}>{item.firstname + " " + item.lastname}</option>
                                                                })}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <Button variant="btn btn-primary" onClick={handleClose}>
                                                        Add
                                                    </Button>
                                                </Modal.Body>

                                            </Modal>
                                            <button type="button" onClick={handleShow} className="btn btn-primary modlbtn">Assign To</button>
                                        </div> */}

                                        <div className="form-group mb-0 text-right">
                                            <button type="button" onClick={submiAdddSupportTicketData} className="btn btn-primary">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-5 p-0'>
                            <div className='card'>
                                <div className='card-body p-0'>
                                    <div className='top-msgbx'>
                                        <div>
                                            <h6>Conversation with Sifia Eames</h6>
                                            <p>Via Messaging</p>
                                        </div>
                                        <div>
                                            <span className='m-2'> <BsClockHistory /></span>

                                        </div>
                                    </div>
                                    <div>
                                        <div className='name-time-sec'>
                                            <div className='user-img'>
                                                <img src={img} alt='image'></img>
                                            </div>
                                            <div className=''>
                                                <h6>Ashok Yadav<span className='sm-text'>via messaging</span></h6>
                                            </div>
                                            <div className='ms-4'>
                                                <h6 className='right-text'>Less than 1 minute ago</h6>
                                            </div>
                                        </div>
                                        <div className='ps-5'>
                                            <p>Hi, I just ordered a sofa in the wrong color. Am I able to get this fixed?.</p>
                                        </div>
                                    </div>
                                    <div className='mt-4' style={{ paddingBottom: '140px', borderBottom: '1px solid black' }}>
                                        <div className='name-time-sec'>
                                            <div className='user-img'>
                                                <img src={img} alt='image'></img>
                                            </div>
                                            <div className=''>
                                                <h6>Rahul Kumar Yogesh<span className='sm-text'>via messaging</span></h6>
                                            </div>
                                            <div className='ms-4'>
                                                <h6 className='right-text'>Just Now</h6>
                                            </div>
                                        </div>
                                        <div className='ps-5'>
                                            <p>Hi, I just ordered a sofa in the wrong color. Am I able to get this fixed?.</p>
                                        </div>
                                    </div>
                                    <div className='messging-sec'>
                                        <BsFillEnvelopeFill />
                                        <p className='ms-2'>Messaging</p>
                                        {/* <BsChevronCompactDown /> */}
                                    </div>
                                    <div className='sticker'>
                                        <span className='me-3'>
                                            <BsEmojiSmile />
                                        </span>
                                        <span>
                                            <IoMdAttach />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 p-0'>
                            <div className='card'>
                                <div className='card-body p-0'>
                                    <div className='right-wrapper'>
                                        <section className='top-sec'>
                                            <div className='image-name-top-sec'>
                                                <div className='img_name_sec'>
                                                    <a href='#'>
                                                        <div className='image_wrapper'>
                                                            <img src={img} alt='imgage' />
                                                        </div>
                                                    </a>
                                                    <h6 className='ms-2'>Suman Kohli</h6>
                                                </div>
                                                <div className='top-right-btn-sec'>
                                                    <button>
                                                        <HiOutlinePencil />
                                                    </button>
                                                    <button>
                                                        <BsThreeDotsVertical />
                                                    </button>
                                                    <button>
                                                        <FaAngleUp />
                                                    </button>
                                                </div>
                                            </div>
                                            {/* <div className='email-sec m-3'>
                                                <button><BsFillEnvelopeFill /></button>
                                                <a className='txt-blue' href='#'>atul-kurrana12@gmail.com</a>

                                            </div> */}
                                        </section>
                                    </div>
                                </div>
                            </div>
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

export default AddTicket;