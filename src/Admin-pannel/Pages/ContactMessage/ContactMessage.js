
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { token } from "../../common/TokenArea";

function ContactMessage() {
    const [data, setData] = useState(null)
    const [error, seterror] = useState(null)
    const getData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/contactMessage`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },

            })
            setData(res.data)
        } catch (error) {
            seterror('Server Error')
        }
    }
    useEffect(() => {
        getData()
    }, [])


    const changeStatus = async (item) => {
        const obj = { approval: !item.approval }
        try {
            const res = await axios.put(`https://onlineparttimejobs.in/api/banner/updateStatus/${item._id}`, obj, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            setTimeout(() => {
                getData()
            }, 1000);
        } catch (error) {
            alert('Server Error Status not change')
        }
    }


    const deleteBrandData = async (id) => {
        // try {
        //     const res = await axios.delete(`https://onlineparttimejobs.in/api/banner/${id}`,{
        //         headers: {
        //             "Content-type": "application/json; charset=UTF-8",
        //             Authorization: `Bearer ${token}`,
        //         },
        //     })
        //     getData()
        //     alert('Banner Delete Successfully')
        // } catch (error) {
        //     alert('Banner Not Delete')
        // }
    }

    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
            <div className="card" style={{ padding: "10px" }}>
                <h5>Contact Message</h5>

                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Phone</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data && data.map((item, i) => {
                            return <tr>
                                <td>{i + 1}</td>
                                <td>
                                   {item?.firstname + " " + item?.lastname}
                                </td>
                                <td>
                                  {item?.email}
                                </td>
                                <td style={{ display: "table-cell" }}>
                                   {item?.message}
                                </td>
                                <td style={{ display: "table-cell" }}>
                                   {item?.phone}
                                </td>
                                <td style={{ display: "table-cell" }}>
                                   {item?.category}
                                </td>

                                <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                    {/* <Link to={`bannerEdit/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                        <i className="las la-edit" />
                                    </Link> */}
                                    <button type="button" onClick={() => { deleteBrandData(item.uid) }} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                        <i className="las la-trash" />
                                    </button>
                                </td>
                            </tr>
                        })}

                    </tbody>
                </Table>
            </div>
        </div>

    </div>
}
export default ContactMessage