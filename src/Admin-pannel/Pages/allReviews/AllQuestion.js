
import axios from "axios"
import { useEffect, useState } from "react"
import { AiFillDelete } from "react-icons/ai"
import { GrFormView } from "react-icons/gr"
import ReplyModal from "./ReplyModal"

function AllQuestion() {

    const [data, setdata] = useState(null)
    const token = window.localStorage.getItem('token')
    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/product/question/admin`, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + token
            },
        })
        setdata(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    const DeleteItems = async (id) => {
        // try {
        //     const res = await axios.delete(`https://onlineparttimejobs.in/api/rating/delete_ratings/${id}`, {
        //         headers: {
        //             'Content-type': 'application/json; charset=UTF-8',
        //             'Authorization': 'Bearer ' + token
        //         },
        //     })
        //     alert('Review Delete Successfully')
        //     getData()
        // } catch (error) {
        //     alert('Review Not Deleted')
        // }
    }

    const changeStatus = async (val) => {
        try {
            const res = await axios.put(`https://onlineparttimejobs.in/api/rating/updateRatingApprovalStatus/${val._id}`, { approved: !val.approved }, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                },
            })
            alert('Review Update Successfully')
            getData()
        } catch (error) {
            alert('Review Not Update')
        }
    }
    const [modalShow, setModalShow] = useState(false);
    const [saveData, setSaveData] = useState(null)
    const setdatas = (item) => {
        setSaveData(item)
        setModalShow(true)
    }

    return <div className="container">
        {modalShow && <ReplyModal getData={getData} saveData={saveData} show={modalShow}
            onHide={() => setModalShow(false)} />}
        <div className="aiz-user-panel">
            <h4>All Products Reviews</h4>
            <div className="card">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">Product Name</th>
                            {/* <th scope="col">Variant</th> */}
                            <th scope="col">Customer Name</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Detail</th>
                            <th scope="col">Answer</th>
                            <th scope="col">Status</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item, i) => {
                            return <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td>
                                    <img style={{ width: "50px", height: "50px" }} src={item?.product[0]?.variations[0]?.mainImage_url?.url} />
                                </td>
                                <td>{item?.product[0]?.name}</td>
                                {/* <td>{item?.variant?.weight}</td> */}
                                <td>{item?.user?.firstname} {item?.user?.lastname}</td>
                                <td>{item?.subject}</td>
                                <td>{item?.detail}</td>
                                <td>{item?.answer?.answer ? item?.answer?.answer : '--No Reply---'}</td>
                                <td>{item?.status}</td>
                                {/* <td style={{
                                    borderBottom: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <div className="form-check form-switch">
                                        <input class="form-check-input" onChange={() => { changeStatus(item) }} type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={item?.approved} />
                                    </div>
                                </td> */}
                                <td>
                                    <GrFormView style={{fontSize:"22px"}} onClick={() => setdatas(item)} />
                                    <AiFillDelete style={{fontSize:"22px"}} onClick={() => DeleteItems(item._id)} />
                                </td>
                            </tr>
                        })}


                    </tbody>
                </table>
            </div>
        </div>
    </div>
}
export default AllQuestion