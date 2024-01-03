import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function PurchasesReport() {

    const [data, setData] = useState(null)

    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/purchase`)
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    console.log('purchase data----', data)

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card" style={{ padding: "10px" }}>
                        <h5>Purchases Report</h5>

                        <div style={{ margin: "10px 0", display: "flex", justifyContent: "end" }}>
                            <input style={{ width: '250px' }} placeholder="Search" className="form-control" />
                            <button type="button" style={{ margin: "0 10px" }} className="btn btn-info">Search</button>
                        </div>

                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Date</th>
                                    <th>Reference No</th>
                                    <th>Warehouse</th>
                                    <th>Supplier</th>
                                    <th>Product(Qty)</th>
                                    <th>Grand Total</th>
                                    <th>Paid</th>
                                    <th>Balance</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((item, i) => {
                                    return <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{item.date}</td>
                                        <td>{item.referenceNo}</td>
                                        <td>{item.pickupPoints.pickupPoint_name}</td>
                                        <td>{item.supplier?.map((item, i) => {
                                            return <span key={i}>{item.firstname + item.lastname}</span>
                                        })}</td>
                                        <td>{item.products.map((item, i) => {
                                            return <div key={i}>{item.product_id?.name + "(" + item.qty + ")"}</div>
                                        })}</td>
                                        <td>{item.grandTotal}</td>
                                        <td>{item.Paid}</td>
                                        <td>{item.Balance}</td>
                                        <td>{item.status[0]?.orderStatusId?.orderStatusName}</td>
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

export default PurchasesReport