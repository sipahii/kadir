import React from 'react';
import { Table } from 'react-bootstrap';

function AdjustmentsReport() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card" style={{ padding: "10px" }}>
                        <h5>Adjustments Report</h5>

                        <div style={{ margin: "10px 0", display: "flex", justifyContent: "end" }}>
                            <input style={{ width: '250px' }} placeholder="Search" className="form-control" />
                            <button type="button" style={{ margin: "0 10px" }} className="btn btn-info">Search</button>
                        </div>

                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Date</th>
                                    <th>Reference Number</th>
                                    <th>Warehouse</th>
                                    <th>Created by</th>
                                    <th>Note</th>
                                    <th>Products</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>name</td>
                                    <td>name</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>name</td>
                                    <td>name</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>name</td>
                                    <td>name</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AdjustmentsReport