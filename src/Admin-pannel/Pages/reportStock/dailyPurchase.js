import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';

function DailyPurchase() {

    const [data, setData] = useState(null);

    const getData = async () => {
        const res = await axios.get('https://onlineparttimejobs.in/api/report/dailyPurchaseReports');
        setData(res.data)
    };

    useEffect(() => {
        getData()
    }, []);
    console.log('daily purchase---', data)

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card" style={{ padding: "10px" }}>
                        <h5>Daily Purchases (All Warehouses)</h5>

                        <div style={{ margin: "10px 0", display: "flex", justifyContent: "end" }}>
                            <input style={{ width: '250px' }} placeholder="Search" className="form-control" />
                            <button type="button" style={{ margin: "0 10px" }} className="btn btn-info">Search</button>
                        </div>

                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th className='prevArrow'>
                                        <RxDoubleArrowLeft />
                                    </th>
                                    <th colSpan={5} className='midDate'>May 2023</th>
                                    <th className='nextArrow'>
                                        <RxDoubleArrowRight />
                                    </th>
                                </tr>
                                <tr>
                                    <th>Sunday</th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>ThursDay</th>
                                    <th>Friday</th>
                                    <th>Saturday</th>
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
                            </tbody>
                        </Table>
                    </div>
                </div>

            </div>
        </>
    )
}

export default DailyPurchase