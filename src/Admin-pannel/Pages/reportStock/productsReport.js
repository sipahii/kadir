import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap'

function ProductsReport() {

    const [data, setData] = useState(null)

    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/report/productReport`)
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    console.log('product data----', data)

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card" style={{ padding: "10px" }}>
                        <h5>Products Report</h5>

                        <div style={{ margin: "10px 0", display: "flex", justifyContent: "end" }}>
                            <input style={{ width: '250px' }} placeholder="Search" className="form-control" />
                            <button type="button" style={{ margin: "0 10px" }} className="btn btn-info">Search</button>
                        </div>

                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product Code</th>
                                    <th>Product Name</th>
                                    <th>Purchased</th>
                                    <th>Sold</th>
                                    <th>Profit and/or Loss</th>
                                    <th>Stock(Qty)Amt</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.products.map((item, i) => {
                                    return <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{item._id.sku}</td>
                                        <td>{item.product[0]?.name}</td>
                                        <td>{item.purchase}</td>
                                        <td>{item.sold}</td>
                                        <td>{item.profit}</td>
                                        <td></td>
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

export default ProductsReport