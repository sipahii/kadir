import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

function ProductsQuantityAlerts() {

    const [data, setData] = useState(null)

    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/report/inventoryAlert`)
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    console.log('inventrry data----', data)

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card" style={{ padding: "10px" }}>
                        <h5>Products Quantity Alerts (All Warehouses)</h5>

                        <div style={{ margin: "10px 0", display: "flex", justifyContent: "end" }}>
                            <input style={{ width: '250px' }} placeholder="Search" className="form-control" />
                            <button type="button" style={{ margin: "0 10px" }} className="btn btn-info">Search</button>
                        </div>

                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Product Code</th>
                                    <th>Weight</th>
                                    <th>Quantity</th>
                                    <th>Alert Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((item, i) => {
                                    return <tr>
                                        <td>{i + 1}</td>
                                        <td>----</td>
                                        <td>{item.productId}</td>
                                        <td>{item.stocks.sku}</td>
                                        <td>{item.variant.weight}</td>
                                        <td>{item.stocks.qty}</td>
                                        <td>{item.qty}</td>
                                    </tr>
                                })}

                            </tbody>
                        </Table>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductsQuantityAlerts