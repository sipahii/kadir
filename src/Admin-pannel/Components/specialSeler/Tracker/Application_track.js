
import axios from "axios"
import { useRef, useState } from "react"
import { base_Url } from "../../../../server"
import ImgShowModal from "../ImgShowModal"

function Application_track() {

    const token = window.localStorage.getItem('token')

    const [data, setData] = useState()
    const [status, setStatus] = useState()
    const [state, setState] = useState({
        mobile: '',
        // applicationNo: ''
    })
    const handleChangeSearch = (e) => {
        const clone = { ...state }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setState(clone)

    }

    const postSearchList = async () => {
        const clone = { ...state }
        try {
            const res = await axios.post(`${base_Url}specialSeller/trackFull`, clone, {
                withCredentials: true,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })

            setData(res.data.data)
            setStatus(res.data.status)
        } catch (error) {
            alert('Data Not Found !!')
            setData(null)
            setStatus(null)
        }
    }
    const [modalShow, setModalShow] = useState(false);
    const [imgurl, setimgurl] = useState(null)
    const [imghead, imgimghead] = useState(null)
    const openModal = (url, str) => {
        setModalShow(true)
        setimgurl(url)
        imgimghead(str)
    }
    return (
        <>
            {modalShow && <ImgShowModal show={modalShow}
                onHide={() => setModalShow(false)} imgurl={imgurl} imghead={imghead} />}
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <h1 className="h2">Application tracking </h1>

                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                        </div>
                        <div className="card-body">
                            <section className="form-section">
                                <div className="row">
                                    {/* <form action=""> */}
                                    {/* <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">Mobile</label>
                                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mobile" name='mobile' value={state.mobile} onChange={handleChangeSearch} />
                                        </div>
                                    </div> */}
                                    <div className="col-lg-3">
                                        <div>
                                            <label htmlFor="">ApplicationNo</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ApplicationNo" name='applicationNo' value={state.applicationNo} onChange={handleChangeSearch} />
                                        </div>
                                    </div>


                                    <div className="col-lg-3 mt-3">
                                        <button type="button" className="btn btn-primary mr-3 mt-2" onClick={postSearchList}>Search</button>
                                    </div>
                                </div>
                            </section>

                            <div className="aiz-pagination">
                            </div>
                        </div>
                    </div>
                    {status && <div className="mainsel" style={{ overflow: "auto" }}>
                        <table className="table table-3" id="table-to-xls">
                            <thead>
                                <tr>
                                    <th class="table-secondary" scope="col">#</th>
                                    <th class="table-secondary" scope="col">Status</th>
                                    <th class="table-secondary" scope="col">Date</th>
                                    <th class="table-secondary" scope="col">Staff</th>
                                    <th class="table-secondary" scope="col">Comment</th>

                                </tr>
                            </thead>
                            <tbody>
                                {status && status?.map((item, i) => {
                                    return <tr key={item._id}>
                                        <td>{1 + i}</td>
                                        <td>{item?.status?.name}</td>
                                        <td>{item?.createdAt}</td>
                                        <td>{item?.staff?.firstname + " " + item.staff?.lastname}</td>
                                        <td>{item?.comment ? item?.comment : '---'}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                    }
                    {data && <div className="mainsel" style={{ overflow: "auto" }}>
                        <table className="table table-3" id="table-to-xls">
                            <thead>
                                <tr>
                                    {/* <th className="table-secondary" scope="col">#</th> */}
                                    <th className="table-secondary" scope="col">Registration No</th>
                                    <th className="table-secondary" scope="col">Registration Date</th>
                                    <th className="table-secondary" scope="col">First Name</th>
                                    <th className="table-secondary" scope="col">Last Name</th>
                                    <th className="table-secondary" scope="col">D O B</th>
                                    <th className="table-secondary" scope="col">Age</th>
                                    <th className="table-secondary" scope="col">Gender</th>
                                    <th className="table-secondary" scope="col">Phone No</th>
                                    <th className="table-secondary" scope="col">Email</th>
                                    <th className="table-secondary" scope="col">UDID No</th>
                                    <th className="table-secondary" scope="col">Disability</th>
                                    <th className="table-secondary" scope="col">Annual Income</th>
                                    <th className="table-secondary" scope="col">BPL/APL</th>
                                    <th className="table-secondary" scope="col">Resident Of</th>
                                    <th className="table-secondary" scope="col">Aadhar  Card</th>
                                    {/* <th className="table-secondary" scope="col">Blood Group</th> */}
                                    <th className="table-secondary" scope="col">Category </th>
                                    <th className="table-secondary" scope="col">Marital Status</th>
                                    {/* <th className="table-secondary" scope="col">Educational Details</th>
                                        <th className="table-secondary" scope="col">Resident of Maharashtralagate</th>
                                        <th className="table-secondary" scope="col">Types Of Disability</th>
                                        <th className="table-secondary" scope="col">Area of Disability</th> */}
                                    <th className="table-secondary" scope="col">Business Category</th>
                                    <th className="table-secondary" scope="col">User Photo</th>
                                    <th className="table-secondary" scope="col">Sign Photo </th>
                                    <th className="table-secondary" scope="col">Identity Proof</th>
                                    <th className="table-secondary" scope="col">Address Proof</th>
                                    <th className="table-secondary" scope="col">Cast Certificate Proof</th>
                                    <th className="table-secondary" scope="col">Disability Certificate Proof</th>
                                    <th className="table-secondary" scope="col">UDID Proof </th>
                                    <th className="table-secondary" scope="col">Front Of Bank PassBook </th>
                                    <th className="table-secondary" scope="col">Affidavit </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data?.map((item) => {
                                    return <tr key={item._id} className="table-to-xls">
                                        <td>{item?.applicationNo}</td>
                                        <td>{item?.applicationDate}</td>
                                        <td>{item?.bene_firstname}</td>
                                        <td>{item?.bene_lastname}</td>
                                        <td>{item?.dob}</td>
                                        <td>{item?.declareAge}</td>
                                        <td>{item?.gender}</td>
                                        <td>{item?.mobile}</td>
                                        <td>{item?.email}</td>
                                        <td>{item?.udId_No}</td>
                                        <td>{item?.PerOfDis}%</td>
                                        <td>{item?.employmentDetail?.annualIncom}</td>
                                        <td>{item?.employmentDetail?.bpl}</td>
                                        <td>{item?.residentOf}</td>
                                        <td>{item?.adhaarCard}</td>

                                        {/* <td>{item?.bloodGroup}</td> */}
                                        <td>{item?.castCategory}</td>
                                        <td>{item?.maritalStatus}</td>
                                        <td>{item?.businessCategory?.name}</td>
                                        <td id="image-container" onClick={() => openModal(item?.userPhoto?.url, 'User Photo ')}>
                                            <img src={item?.userPhoto?.url} alt="" style={{ width: '40px' }} />
                                        </td>
                                        <td id="image-container2" onClick={() => openModal(item?.signPhoto?.url, 'Sign Photo')}>
                                            <img src={item?.signPhoto?.url} alt="" style={{ width: '40px' }} />

                                        </td>
                                        <td id="image-container" onClick={() => openModal(item?.idProofFile?.url, 'Identity Proof')}>
                                            <img src={item?.idProofFile?.url} alt="" style={{ width: '40px' }} />
                                        </td>
                                        <td id="image-container" onClick={() => openModal(item?.addressProof[0]?.url, 'Address Proof')}>
                                            <img src={item?.addressProof[0].url} alt="" style={{ width: '40px' }} />
                                        </td>
                                        <td id="image-container" onClick={() => openModal(item?.castCertificate?.url, 'cast Certificate Proof')}>
                                            <img src={item?.castCertificate.url} alt="" style={{ width: '40px' }} />
                                        </td>
                                        {/* <td id="image-container" onClick={() => openModal(item?.castCertificate?.url, 'cast Certificate Proof')}>
                                         <img src={item?.castCertificate.url} alt="" style={{ width: '40px' }} />
                                     </td> */}
                                        <td id="image-container2" onClick={() => openModal(item?.disabilityCertImage?.url, 'disability Cert Image')}>
                                            <img src={item?.disabilityCertImage?.url} alt="" style={{ width: '40px' }} />

                                        </td>
                                        <td id="image-container2" onClick={() => openModal(item?.udId_File?.url, 'UDID Proof')}>
                                            <img src={item?.udId_File?.url} alt="" style={{ width: '40px' }} />

                                        </td>
                                        <td id="image-container2" onClick={() => openModal(item?.frontOfBankPassBook?.url, 'Front Of Bank PassBook')}>
                                            <img src={item?.frontOfBankPassBook?.url} alt="" style={{ width: '40px' }} />

                                        </td>
                                        <td id="image-container2" onClick={() => openModal(item?.affidavith?.url, 'Affidavith')}>
                                            <img src={item?.affidavith?.url} alt="" style={{ width: '40px' }} />

                                        </td>

                                        <td style={{ display: 'none' }}>{item?.idProofFile?.url}</td>
                                        <td style={{ display: 'none' }}>{item?.affidavith?.url}</td>
                                      


                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>}
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
            </div>
        </>
    )
}
export default Application_track