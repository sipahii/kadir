import React from 'react';
// import axios from "axios"
// import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"

function RegisterReport() {

    // const [data, setData] = useState(null)

    // const getData = async () => {
    //     const res = await axios.get(`https://onlineparttimejobs.in/api/productStocks`)
    //     setData(res.data)
    // }

    // useEffect(() => {
    //     getData()
    // }, [])

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card" style={{ padding: "10px" }}>
                        <h5>Register Report</h5>

                        <div style={{ margin: "10px 0", display: "flex", justifyContent: "end" }}>
                            <input style={{ width: '250px' }} placeholder="Search" className="form-control" />
                            <button type="button" style={{ margin: "0 10px" }} className="btn btn-info">Search</button>
                        </div>

                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Open Time</th>
                                    <th>Close Time</th>
                                    <th>User</th>
                                    <th>Cash in hand</th>
                                    <th>CC Slips</th>
                                    <th>Cheques</th>
                                    <th>Total Cash</th>
                                    <th>Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>name</td>
                                    <td>
                                        #
                                    </td>
                                    <td>hello</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>name</td>
                                    <td>
                                        #
                                    </td>
                                    <td>hello</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>name</td>
                                    <td>
                                        #
                                    </td>
                                    <td>hello</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                    <td>hello ji</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>name</td>
                                    <td>
                                        #
                                    </td>
                                    <td>hello</td>
                                    <td>hello ji</td>
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

export default RegisterReport