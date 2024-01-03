import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"


function MaterialReorders() {
    const [data, setData] = useState(null)

    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/productStocks`)
        setData(res.data)
    }

    useEffect(() => {
        // getData()
    }, [])

    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
            <div className="card" style={{ padding: "10px" }}>
                <h5>Product Re-Order List</h5>

                <div style={{ margin: "10px 0", display: "flex", justifyContent: "end" }}>
                    <input style={{ width: '250px' }} placeholder="Filter" className="form-control" />
                    <button type="button" style={{ margin: "0 10px" }} className="btn btn-info">Filter</button>
                </div>

                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>SL Material Code</th>
                            <th>Material Name</th>
                            <th>Material Category</th>
                            <th>Purchase Rate AVG.</th>
                            <th>Re-Order Level</th>
                            <th>Current Stock</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>1</td>
                            <td>12/3/2022</td>
                            <td>OPKN</td>
                            <td>
                               UJKI
                            </td>
                            <td>Acita</td>
                            <td>300</td>
                            <td>2</td>
                        </tr>


                        {/* {data ? data.map((item, i) => {
                            if (item.name) {
                                return <tr key={item._id}>
                                <td>{1 + i}</td>
                                <td>{item.name}</td>
                                <td>
                                    {item?.variant?.map((item) => {
                                        return <span>{item?.weight}</span>
                                    })}
                                </td>
                                <td>{item?.pickupPoints?.pickupPoint_name}</td>
                                <td>{item.qty}</td>
                                <td>{item.qty}</td>
                                <td>{item.qty}</td>
                            </tr>
                            }
                        }) : <tr><td><h5>No Data</h5></td></tr>} */}

                    </tbody>
                </Table>
            </div>
        </div>

    </div>
}
export default MaterialReorders