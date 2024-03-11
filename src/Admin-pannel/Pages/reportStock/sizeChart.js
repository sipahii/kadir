import React from 'react';
import { Table } from 'react-bootstrap';

function SizeChart() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card" style={{ padding: "10px" }}>
                        <h5>Size Chart Templates</h5>

                        <div className='entries_btn_wrapper mt-5'>
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
                                    <th>Template Name</th>
                                    <th>Template Code</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>name</td>
                                    <td>10</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>name</td>
                                    <td>10</td>
                                  
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>name</td>
                                    <td>10</td>
                                  
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SizeChart