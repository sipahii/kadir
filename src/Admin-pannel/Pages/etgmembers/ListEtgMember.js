import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { MdDelete } from "react-icons/md"

function ListEtgMember() {


    const [data, setData] = useState(null)

    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/adminMemberWidget`)
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    const DeleteMember = async (id) => {
        try {
            await axios.delete(`https://onlineparttimejobs.in/api/adminMemberWidget/delete_adminMembers/${id}`)
            alert('ETG Member Deleted!')
            getData()
        } catch (error) {
            alert('ETG Member Not Deleted')
        }
    }




    return <div className="aiz-main-content" style={{ width: "1500px", margin: "auto" }}>
        <div className="px-15px px-lg-25px">
            <div className="card" style={{ padding: "10px" }}>
                <h5>List ETG Members</h5>

                <div style={{ margin: "10px 0", display: "flex", justifyContent: "end" }}>
                    <input style={{ width: '250px' }} placeholder="Filter" className="form-control" />
                    <button type="button" style={{ margin: "0 10px" }} className="btn btn-info">Filter</button>
                </div>

                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Photo</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item, i) => {
                            return <tr key={item?._id}>
                                <td>{i + 1}</td>
                                <td>{item.name}</td>
                                <td>
                                    <img style={{ width: "120px", height: "120px" }} src={item?.photo ? item?.photo.url : ''} />
                                </td>
                                <td>{item.department}</td>
                                <td>{item.designation}</td>
                                <td>{item.description}</td>
                                <td><MdDelete style={{fontSize:"22px"}} onClick={() => DeleteMember(item._id)} /></td>
                            </tr>
                        })}

                    </tbody>
                </Table>
            </div>
        </div>

    </div>
}
export default ListEtgMember