import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import axios from 'axios';

function MostViewedProducts() {

    const [data, setData] = useState(null)

    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/report/productView`)
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, []);

    console.log('data-----', data)

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card" style={{ padding: "10px" }}>
                        <h5>Most Viewed Products</h5>
                        <ul className='report_nav_list'>
                            <li className='mr-right'>
                                <span className='bag_logo'>
                                    <FiShoppingBag />
                                </span>
                                <Link to="#">Varient Products</Link>
                            </li>
                            <li>
                                <span className='bag_logo'>
                                    <FiShoppingBag />
                                </span>
                                <Link to="#">Simple Products</Link>
                            </li>
                        </ul>

                        <div className='entries_btn_wrapper'>
                            <div className='show_entries'>
                                <span>Show</span>
                                <select className="form-select entries_box" aria-label="Default select example">
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <span>entries</span>
                            </div>
                            <ul className='download_btn_wrapper'>
                                <li>
                                    <button>CSV</button>
                                </li>
                                <li>
                                    <button>Excel</button>
                                </li>
                                <li>
                                    <button>Pdf</button>
                                </li>
                                <li>
                                    <button>Print</button>
                                </li>
                            </ul>
                        </div>

                        <div style={{ margin: "10px 0", display: "flex", justifyContent: "end" }}>
                            <input style={{ width: '250px' }} placeholder="Search" className="form-control" />
                            <button type="button" style={{ margin: "0 10px" }} className="btn btn-info">Search</button>
                        </div>

                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product Name</th>
                                    <th>Total Views</th>
                                </tr>
                            </thead>
                            <tbody>

                                {data && data.map((item, i) => {
                                    console.log('item----', item.name[0])
                                    return <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>
                                           {item.name[0]}
                                        </td>
                                        <td>{item.count}</td>
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

export default MostViewedProducts