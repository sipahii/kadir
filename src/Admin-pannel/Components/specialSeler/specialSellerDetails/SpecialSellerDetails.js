import axios from "axios"
import { base_Url_Assets } from "../../../../server"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { Button } from "react-bootstrap"
import { ToastContainer, toast } from "react-toastify"


function SpecialSellerDetailss() {
    const token = window.localStorage.getItem('token')
    const [view, setView] = useState(null)
    const [status, setStatus] = useState(null)
    const param = useParams()
    const [changeSatus, setChangeSatus] = useState({
        seller_id: '',
        status: ''
    })

    const [saveId, setSaveId] = useState()
    const detailsHandle = async () => {
        try {
            const res = await axios.get(`${base_Url_Assets}specialSeller/${param.id}`, {
                withCredentials: true,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            setSaveId(res.data[0]?.status[0]?._id)
            setView(res.data)
        } catch (error) {

        }
    }
    const toastSuccessMessageMail = () => {
        toast.success("Message Send Successfully", {
            position: "top-center"
        })
    };
    const toastSuccessMessage = () => {
        toast.success("Status Update Successfully", {
            position: "top-center"
        })
        setTimeout(() => {
            toastSuccessMessageMail()
        }, 2000);
    };
  
    
    const toastErrorMessage = () => {
        toast.error("Statue not Update", {
            position: "top-center"
        })
    };
    

    const getStatus = async () => {
        try {
            const res = await axios.get(`${base_Url_Assets}specialSeller/statusList`, {
                withCredentials: true,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            setStatus(res.data.status)
        } catch (error) {

        }
    }

    const handleStatus = async (e) => {
        try {
            const res = await axios.post(`${base_Url_Assets}specialSeller/status`, { seller_id: param.id, status: saveId }, {
                withCredentials: true,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            toastSuccessMessage()
            detailsHandle()
        } catch (error) {
            toastErrorMessage()
        }
    }
    useEffect(() => {
        detailsHandle()
        getStatus()
    }, [])
    console.log(saveId);
    return (
        <>
        <ToastContainer />
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Details</h1>
                            </div>
                            {/* <div className="col-md-6 text-md-right">
                    <Link to="/admin/roles/create" className="btn btn-circle btn-info">
                        <span>Add New Role</span>
                    </Link>
                </div> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6">Special Seller Details</h5>
                            {/* <div className="col-md-6 text-md-right">
                        <Link to="/admin/add-asset-category" className="btn btn-circle btn-info">
                            <span>Add Asset Category</span>
                        </Link>
                    </div> */}
                        </div>
                        <div className="card-body">

                            <div className="d-flex mb-3">

                                <div className="" style={{ width: '300px' }}>
                                    <label htmlFor="">Status Change</label>
                                    <select class="form-select" aria-label="Default select example" value={saveId} onChange={(e) => { setSaveId(e.target.value) }}>
                                        <option selected>Open this select menu</option>
                                        {status && status?.map((item) => {
                                            return <option value={item?._id}>{item?.name}</option>
                                        })}
                                    </select>
                                </div>
                                <div style={{ margin: "20px 10px" }}>
                                    <Button variant="success" onClick={handleStatus}>Save</Button>
                                </div>
                            </div>




                            <table className="table table-3 position-relative">
                                <thead>
                                    <tr>
                                        <th class="table-secondary" scope="col">Registration No</th>
                                        <th class="table-secondary" scope="col">Registration Date</th>
                                        <th class="table-secondary" scope="col">UDID No</th>
                                        <th class="table-secondary" scope="col">Adhaar Card</th>
                                        <th class="table-secondary" scope="col">First Name</th>
                                        <th class="table-secondary" scope="col">Last Name</th>
                                        <th class="table-secondary" scope="col">D O B</th>
                                        <th class="table-secondary" scope="col">Age</th>
                                        <th class="table-secondary" scope="col">Gender</th>
                                        <th class="table-secondary" scope="col">Blood Group</th>
                                        <th class="table-secondary" scope="col">Resident Of</th>
                                        <th class="table-secondary" scope="col">Disability</th>
                                        <th class="table-secondary" scope="col">Category </th>
                                        <th class="table-secondary" scope="col">Marital Status</th>
                                        {/* <th class="table-secondary" scope="col">Educational Details</th>
                                        <th class="table-secondary" scope="col">Resident of Maharashtralagate</th>
                                        <th class="table-secondary" scope="col">Types Of Disability</th>
                                        <th class="table-secondary" scope="col">Area of Disability</th> */}
                                        <th class="table-secondary" scope="col">BPL/APL</th>
                                        <th class="table-secondary" scope="col">Annual Income</th>
                                        <th class="table-secondary" scope="col">Business Category</th>
                                        <th class="table-secondary" scope="col">Status</th>
                                        {/* <th class="table-secondary" scope="col">Identity Proof</th>
                                        <th class="table-secondary" scope="col">Affidavit</th> */}
                                    </tr>
                                </thead>
                                <tbody>

                                    {view && <tr>
                                        <td>{view[0]?.seller?.applicationNo}</td>
                                        <td>{view[0]?.seller?.applicationDate}</td>
                                        <td>{view[0]?.seller?.udId_No}</td>
                                        <td>{view[0]?.seller?.adhaarCard}</td>
                                        <td scope="row">{view[0]?.seller?.bene_firstname}</td>
                                        <td>{view[0]?.seller?.bene_lastname}</td>
                                        <td>{view[0]?.seller?.dob}</td>
                                        <td>{view[0]?.seller?.declareAge}</td>
                                        <td>{view[0]?.seller?.gender}</td>
                                        <td>{view[0]?.seller?.bloodGroup}</td>
                                        <td>{view[0]?.seller?.residentOf}</td>
                                        <td>{view[0]?.seller?.PerOfDis}%</td>
                                        <td>{view[0]?.seller?.castCategory}</td>
                                        <td>{view[0]?.seller?.maritalStatus}</td>
                                        <td>{view[0]?.seller?.employmentDetail?.bpl}</td>
                                        <td>{view[0]?.seller?.employmentDetail?.annualIncom}</td>
                                        <td>{view[0]?.seller?.businessCategory?.name}</td>
                                        <td>{view[0]?.status[0]?.name}</td>
                                    </tr>}


                                </tbody>
                            </table>


                            <div className="aiz-pagination">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
            </div>
        </>
    )
}
export default SpecialSellerDetailss