import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';

function MonthlyPurchase() {

    const [count, setCount] = useState(2023);
    const [data, setData] = useState(null)

    const getData = async () => {
        const res = await axios.get('https://onlineparttimejobs.in/api/report/monthlyPurchaseReports');
        setData(res.data)
    };

    useEffect(() => {
        getData()
    }, []);

    const decrease = () => {
        setCount(count - 1)
    };

    const increase = () => {
        setCount(count + 1)
    }

    console.log('monthly purchase---', data)

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card" style={{ padding: "10px" }}>
                        <h5>Monthly Purchase (All Warehouses)</h5>

                        <div style={{ margin: "10px 0", display: "flex", justifyContent: "end" }}>
                            <input style={{ width: '250px' }} placeholder="Search" className="form-control" />
                            <button type="button" style={{ margin: "0 10px" }} className="btn btn-info">Search</button>
                        </div>

                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th className='prevArrow'>
                                        <RxDoubleArrowLeft onClick={decrease} />
                                    </th>
                                    <th colSpan={10} className='midDate'>{count}</th>
                                    <th className='nextArrow'>
                                        <RxDoubleArrowRight onClick={increase} />
                                    </th>
                                </tr>
                                <tr>
                                    <th>January</th>
                                    <th>February</th>
                                    <th>March</th>
                                    <th>April</th>
                                    <th>May</th>
                                    <th>June</th>
                                    <th>July</th>
                                    <th>August</th>
                                    <th>September</th>
                                    <th>October</th>
                                    <th>November</th>
                                    <th>December</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>name</td>
                                    <td>name</td>
                                    <td>hello</td>
                                    <td>hello</td>
                                    <td>hello</td>
                                    <td>hello</td>
                                    <td>hello</td>
                                    <td>hello</td>
                                    <td>hello</td>
                                    <td>hello</td>
                                    <td>hello</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MonthlyPurchase;