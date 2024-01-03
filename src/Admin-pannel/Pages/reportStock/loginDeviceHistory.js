import React from 'react';
import { Table } from 'react-bootstrap';

function LoginDeviceHistory() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card" style={{ padding: "10px" }}>
                        <h5>Device History</h5>

                        <div style={{ margin: "10px 0", display: "flex", justifyContent: "end" }}>
                            <input style={{ width: '250px' }} placeholder="Search" className="form-control" />
                            <button type="button" style={{ margin: "0 10px" }} className="btn btn-info">Search</button>
                        </div>

                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>User Name</th>
                                    <th>IP Address</th>
                                    <th>Platform</th>
                                    <th>Browser</th>
                                    <th>Logged In At</th>
                                    <th>Logged Out At</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div>
                                            <b>
                                                <span className='text-dark'>Name: </span>
                                            </b>
                                            demoseller
                                        </div>
                                        <b>
                                            <span className='text-dark'>Email: </span>
                                        </b>
                                        demoseller@gmail.com
                                    </td>
                                    <td>1213133dkks</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div>
                                            <b>
                                                <span className='text-dark'>Name: </span>
                                            </b>
                                            demoseller
                                        </div>
                                        <b>
                                            <span className='text-dark'>Email: </span>
                                        </b>
                                        demoseller@gmail.com
                                    </td>
                                    <td>1213133dkks</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div>
                                            <b>
                                                <span className='text-dark'>Name: </span>
                                            </b>
                                            demoseller
                                        </div>
                                        <b>
                                            <span className='text-dark'>Email: </span>
                                        </b>
                                        demoseller@gmail.com
                                    </td>
                                    <td>1213133dkks</td>
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

export default LoginDeviceHistory