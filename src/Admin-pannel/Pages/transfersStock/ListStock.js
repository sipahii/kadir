

import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { GrFormView } from "react-icons/gr"
import { MdDelete } from "react-icons/md"
import ShowModal from "./ShowModal"

function ListStock() {
    const [data, setData] = useState(null)

    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/transferStock`)
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    const DeleteMember = async (id) => {
        try {
            await axios.delete(`https://onlineparttimejobs.in/api/transferStock/delete_transferStock/${id}`)
            alert('Transfer Stock Deleted!')
            getData()
        } catch (error) {
            alert('Transfer Stock Not Deleted')
        }
    }

    const [show, setShow] = useState(false);
    const [valId, setValId] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sendShowData = (id) => {
        setValId(id)
        handleShow()
    }


    return <div className="aiz-main-content" style={{ width: "1020px", margin: "auto" }}>
        <div className="px-15px px-lg-25px">
            <div className="card" style={{ padding: "10px" }}>
                <h5>List Stock Transfer</h5>

                <div style={{ margin: "10px 0", display: "flex", justifyContent: "end" }}>
                    <input style={{ width: '250px' }} placeholder="Filter" className="form-control" />
                    <button type="button" style={{ margin: "0 10px" }} className="btn btn-info">Filter</button>
                </div>

                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Reference</th>
                            <th>Warehouse To</th>
                            <th>Warehouse From</th>
                            <th>Supplier</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item, i) => {
                            return <tr key={item?._id}>
                                <td>{i + 1}</td>
                                <td>{item.date}</td>
                                <td> {item?.referenceNo} </td>
                                <td> {item?.TopickupPoints?.pickupPoint_name} </td>
                                <td> {item?.FrompickupPoints?.pickupPoint_name} </td>
                                <td>{item?.supplier[0].firstname + " " + item?.supplier[0].lastname}</td>
                                <td>
                                    {item?.status[0].statusId?.name}
                                    {/* <div class="form-check form-switch">
                                        <input class="form-check-input" onChange={changeState} type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={item?.status[0].statusId?.name === 'Pending' ? false : true}/>
                                    </div> */}
                                </td>
                                <td>
                                    <GrFormView style={{ fontSize: "22px" }} onClick={() => { sendShowData(item._id) }} />
                                    <MdDelete style={{ fontSize: "22px" }} onClick={() => DeleteMember(item._id)} />
                                </td>
                            </tr>
                        })}

                    </tbody>
                </Table>
            </div>
        </div>
        {show && <ShowModal show={show} handleClose={handleClose} id={valId} />}

    </div>
}
export default ListStock