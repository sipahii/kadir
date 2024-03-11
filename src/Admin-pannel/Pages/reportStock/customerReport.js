import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function CustomerReport() {

    const [data, setData] = useState(null)

    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/report/supplierReport`)
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    console.log('customer data----', data)

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card" style={{ padding: "10px" }}>
                        <h5>Customer Report</h5>

                        <div style={{ margin: "10px 0", display: "flex", justifyContent: "end" }}>
                            <input style={{ width: '250px' }} placeholder="Search" className="form-control" />
                            <button type="button" style={{ margin: "0 10px" }} className="btn btn-info">Search</button>
                        </div>

                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Company</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email Adress</th>
                                    <th>Total Purchases</th>
                                    <th>Total Amount</th>
                                    <th>Paid</th>
                                    <th>Balance</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((item, i) => {
                                    return <tr key={i}>
                                        <td>1</td>
                                        <td>name</td>
                                        <td>{item.seller[0].firstname + item.seller[0].lastname}</td>
                                        <td>{item.seller[0].mobile}</td>
                                        <td>{item.seller[0].email}</td>
                                        <td>{item.totalaPurchases}</td>
                                        <td>{item.totalAmount}</td>
                                        <td>{item.paid}</td>
                                        <td>{item.balance}</td>
                                        <td>----</td>
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

export default CustomerReport