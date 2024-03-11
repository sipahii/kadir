import React from 'react';
import { Table } from 'react-bootstrap';

function POSSales() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card" style={{ padding: "10px" }}>
                        <h5>POS Sales (All Warehouses)</h5>

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
                                    <th>Biller</th>
                                    <th>Customer</th>
                                    <th>Grand Total</th>
                                    <th>Paid</th>
                                    <th>Balance</th>
                                    <th>Sale Status</th>
                                    <th>Payment Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>name</td>
                                    <td>name</td>
                                    <td>name</td>
                                    <td>name</td>
                                    <td>name</td>
                                    <td>name</td>
                                    <td>name</td>
                                    <td>name</td>
                                    <td>name</td>
                                    <td>name</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>

            </div>
        </>
    )
}

export default POSSales;