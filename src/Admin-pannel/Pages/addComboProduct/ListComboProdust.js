import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { Link } from "react-router-dom"

function ListComboProdust() {
    const [data, setData] = useState(null)
    const token = window.localStorage.getItem('token')
    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/comboDeal`, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + token
            },
        })
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])


    const deleteDatas = async (id) => {
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api/comboDeal/delete_ComboDeal/${id}`, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                },
            })
            alert('Deleted Combo List Successfully!')
            getData()
        } catch (error) {
            alert('Deleted Combo List Faild!')
        }
    }

    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
            <div className="card" style={{ padding: "10px" }}>
                <h5>List Combo Products</h5>

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
                            {/* <th>Actual Rate</th> */}
                            <th>Combo Rate</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data ? data.map((item, i) => {
                            return <tr key={item?._id}>
                                <td>{1 + i}</td>
                                <td>
                                    {item?.products?.map((item) => {
                                        return <div style={{ margin: "0 5px" }}>{item?.name} </div>
                                    })}
                                </td>
                                <td>

                                    {item?.products.map((val, j) => {
                                        return <span style={{ margin: "0 5px" }}>{val?.variations?.weight} ,</span>

                                    })}
                                </td>
                                {/* <td>{item?.actualRate}</td> */}
                                <td>{item?.offerPrice}</td>
                                <td>
                                    <Link to="#" className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                        {/* {`edit/${item?.combo._id}`} */}
                                        <i className="las la-edit" />
                                    </Link>

                                    <button type="button" onClick={() => { deleteDatas(item?._id) }} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                        <i className="las la-trash" />
                                    </button>

                                </td>
                            </tr>
                        }) : <tr><td><h5>No Data</h5></td></tr>}



                    </tbody>
                </Table>
            </div>
        </div>

    </div >
}

export default ListComboProdust