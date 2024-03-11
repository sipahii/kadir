import { IoMdContact } from 'react-icons/io'
import { BiUpload } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'
import { FaFilter } from 'react-icons/fa'
import { AiOutlineFileText } from 'react-icons/ai'
import { TfiReload } from 'react-icons/tfi'
import { BiSearch } from 'react-icons/bi'
import { Link } from "react-router-dom"

import React from 'react'
function Customers() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row size-column'>
                    <div className='row'>
                        <div className='col-md-6'>
                            {/* <button className='btn btn-primary ml-1'><span className='mr-1'><AiOutlinePlus /></span>New Customer</button> */}
                            <Link
                                className="btn btn-primary "
                                to="/admin/new-customers"
                            >
                                <BiUpload className='mr-1' /> <span>New Customers</span>
                            </Link>
                            <Link
                                className="btn btn-primary "
                                to="/admin/import-customers"
                            >
                                <BiUpload className='mr-1' /> <span>Import Customers</span>
                            </Link>
                            {/* <button className='btn btn-primary ml-1'><span className='mr-1'><BiUpload /></span>Import Customers</button> */}
                            <button className='btn btn-outline-primary ml-1'><span className='mr-1'><IoMdContact /></span>Contacts</button>
                        </div>
                        <div className='col-md-2'></div>
                        <div className='col-md-2'></div>
                        <div className='col-md-2 text-right'>
                            <button type="" className='btn btn-outline-primary'><span><FaFilter /></span></button>
                        </div>
                    </div>
                    <div className='card mt-3'>
                        <div className="card-body">

                            <div className="col-md-12">
                                <h4>
                                    <span><AiOutlineFileText /> Total Summery</span>
                                </h4>




                            </div>
                            <div className='row'>
                                <div className="col-md-2 d-flex">
                                    <h4 className='mr-2'>16</h4>
                                    <span className='mt-1'>Total Customers</span>
                                    <div className="vr ml-3" />

                                </div>
                                <div className="col-md-2 d-flex">
                                    <h4 className='mr-2'>16</h4>
                                    <span className='mt-1 '>Active Customers</span>
                                    <div className="vr ml-3" />

                                </div>
                                <div className="col-md-2 d-flex">
                                    <h4 className='mr-2'>0</h4>
                                    <span className='mt-1'>Inactive Customers</span>
                                    <div className="vr ml-3" />

                                </div>
                                <div className="col-md-2 d-flex">
                                    <h4 className='mr-2'>16</h4>
                                    <span className='mt-1'>Active Contacts</span>
                                    <div className="vr ml-3" />

                                </div>
                                <div className="col-md-2 d-flex">
                                    <h4 className='mr-2'>0</h4>
                                    <span className='mt-1'>InActive Contacts</span>
                                    <div className="vr ml-3" />

                                </div>
                                <div className="col-md-2 d-flex">
                                    <h4 className='mr-2'>0</h4>
                                    <span className='mt-1 '>Contacts LoggedIn...</span>

                                </div>
                            </div>
                            <hr className='border border-1 border-secondary opacity-50' />
                            <div className="col-md-12 d-flex">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="" className='mt-2 ml-2'>Exclude Inactive Customers</label>
                            </div>
                            <div className="d-flex mt-2">
                                <div className='col-md-2'>
                                    <select name="" id="" className='form-select'>
                                        <option value="0">0</option>
                                        <option value="0">10</option>
                                        <option value="0">50</option>
                                        <option value="0">100</option>
                                    </select>
                                </div>
                                <div className='col-md-4 text-left btn-group'>
                                    <button type="button" className='btn btn-outline-secondary'>Export</button>
                                    <button type="button" className='btn btn-outline-secondary'>Bulk actions</button>
                                    <button type="button" className='btn btn-outline-secondary'><span><TfiReload /></span></button>
                                </div>
                                <div className='col-md-3'></div>
                                <div className='col-md-3 text-right btn-group'>
                                    <button type="button" className='btn btn-outline-secondary'><span><BiSearch /></span></button>
                                    <input type="search" name="" id="" className='form-control' placeholder='search' />
                                </div>
                            </div>
                            <div className='col-md-12 mt-3'>
                                <div className='table-responsive'>
                                    <table className='table table-secondary' style={{ width: '1500px' }}>
                                        <thead>
                                            <tr>
                                                <th><input type="checkbox" name="" id="" /></th>
                                                <th><span># <select name="" id=""></select></span></th>
                                                <th>Company <span><select name="" id=""></select></span></th>
                                                <th>Primary Contact <span><select name="" id=""></select></span></th>
                                                <th>Primary Email <span><select name="" id=""></select></span></th>
                                                <th>Phone <span><select name="" id=""></select></span></th>
                                                <th>Active <span><select name="" id=""></select></span></th>
                                                <th>Group <span><select name="" id=""></select></span></th>
                                                <th>Date Created <span><select name="" id=""></select></span></th>
                                                <th>Father's Name <span><select name="" id=""></select></span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input type="checkbox" name="" id="" /></td>
                                                <td>GROCER TRADING COMPANY</td>
                                                <td>Amjad India</td>
                                                <td>abarisproducts@gmail.com</td>
                                                <td>9287389243</td>
                                                <td></td>
                                                <td></td>
                                                <td>12/10/2023</td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className='row mb-3 g-3 mt-3'>
                                <div className='col-md-12'>
                                    <ul className="pagination justify-content-end pagination-primary">
                                        <li className="page-item"><a className="btn disabled" role='button' href="#">Previous</a></li>
                                        <li className="page-item"><a className="btn disabled btn-primary" role='button' href="#">1</a></li>
                                        <li className="page-item"><a className="btn disabled" role='button' href="#">Next</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Customers