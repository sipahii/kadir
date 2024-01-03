import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { Link } from "react-router-dom"

function ListQuatation() {
    const [data, setData] = useState(null)

    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/quotation`)
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])


    const deleteDatas = async (id) => {
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api/comboDeal/delete_ComboDeal/${id}`)
            alert('Deleted Quatation Successfully!')
            getData()
        } catch (error) {
            alert('Deleted Quatation List Faild!')
        }
    }

    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
            <div className="card" style={{ padding: "10px" }}>
                <h5>List Quatation</h5>

                <div style={{ margin: "10px 0", display: "flex", justifyContent: "end" }}>
                    <input style={{ width: '250px' }} placeholder="Filter" className="form-control" />
                    <button type="button" style={{ margin: "0 10px" }} className="btn btn-info">Filter</button>
                </div>

                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Variant Detail</th>
                            <th>Rate</th>
                            <th>Balance</th>
                            <th>Paid</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data ? data.map((item, i) => {
                            return <tr key={item._id}>
                                <td>{1 + i}</td>
                                <td>
                                    {item?.products.map((item) => {
                                        return <div style={{ margin: "0 5px" }}>{item?.product_id?.name} </div>
                                    })}
                                </td>
                                <td>

                                    {item?.products.map((item, j) => {
                                        return <div>
                                            {item?.variant?.map((ite) => {
                                                return <span style={{ margin: "0 5px" }}>{ite?.weight} ,</span>
                                            })}
                                        </div>
                                    })}
                                </td>
                                <td>{item?.grandTotal}</td>
                                <td>{item?.Balance}</td>
                                <td>{item?.Paid}</td>
                                <td>
                                    {/* <Link to="#" className="btn btn-soft-success btn-icon btn-circle btn-sm" title="View">
                                        <i className="las la-eye" />
                                    </Link> */}
                                    
                                    {/* <Link to='#' className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                        <i className="las la-edit" />
                                    </Link> */}

                                    <button type="button" onClick={() => { deleteDatas(item.combo._id) }} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                        <i className="las la-trash" />
                                    </button>

                                </td>
                            </tr>
                        }) : <tr><td><h5>No Data</h5></td></tr>}



                    </tbody>
                </Table>
            </div>
        </div>

    </div>
}

export default ListQuatation