import React from 'react'
import { Link } from "react-router-dom"
import { HiFilter } from 'react-icons/hi';

function EtsyAccount() {
    return (
        <>
            <div className='container'>
                <h4>Etsy Account List</h4>
                <div className="bg-white text-end py-3 px-15px px-lg-25px mt-auto">

                    <Link
                        className="btn btn-danger "
                        to="/admin/new-etsy-account"
                    >
                        <span>Add Etsy Seller Account</span>
                    </Link>

                </div>

            </div>
            <div className="col-sm-3 mt-3">
                <select className="form-select" aria-label="Default select example">
                    <option selected>Action</option>
                    <option value={1}>Active</option>
                    <option value={1}>Inactive</option>
                </select>
            </div>
            <div className="input-group mb-3">

                <span className="input-group-text" id="basic-addon2" style={{ alignItems: 'center' }}>
                    <HiFilter /> Filter
                </span>
            </div>


            <div className='container'>
                <div className="card-body">
                    <table className="table table-3">
                        <thead>
                            <tr>
                                <th className="table-secondary  " scope="col" style={{ backgroundColor: '#1a1a00' }} >
                                    <select className="" style={{ height: 20, width: 25 }}>
                                        <option selected></option>

                                    </select>
                                </th>
                                <th className="table-secondary text-white" scope="col" style={{ backgroundColor: '#1a1a00' }}>
                                    Store Name
                                </th>
                                <th className="table-secondary text-white" scope="col" style={{ backgroundColor: '#1a1a00' }}>
                                    Created At
                                </th>
                                <th className="table-secondary text-white" scope="col" style={{ backgroundColor: '#1a1a00' }}>
                                    Action
                                </th>

                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td scope="row" ><input type="number" style={{ height: 20, width: 20 }} /></td>
                                <td>abcd12345efg</td>
                                <td>defewd</td>
                                <td>nfcdefewd</td>
                            </tr>
                            <tr>
                                <td scope="row"><input type="number" style={{ height: 20, width: 20 }} /></td>
                                <td>abcd12345efg</td>
                                <td>defewd</td>
                                <td>nfcdefewd</td>

                            </tr>
                            <tr>
                                <td scope="row"><input type="number" style={{ height: 20, width: 20, }} /></td>
                                <td>abcd12345efg</td>
                                <td>defewd</td>
                                <td>nfcdefewd</td>

                            </tr>
                            <tr>
                                <td scope="row"><input type="number" style={{ height: 20, width: 20 }} /></td>
                                <td>abcd12345efg</td>
                                <td>defewd</td>
                                <td>nfcdefewd</td>

                            </tr>
                            <tr>
                                <td scope="row"><input type="number" style={{ height: 20, width: 20 }} /></td>
                                <td>abcd12345efg</td>
                                <td>defewd</td>
                                <td>nfcdefewd</td>

                            </tr>
                            <tr>
                                <td scope="row"><input type="number" style={{ height: 20, width: 20 }} /></td>
                                <td>abcd12345efg</td>
                                <td>defewd</td>
                                <td>nfcdefewd</td>

                            </tr>
                            <tr>
                                <td scope="row"><input type="number" style={{ height: 20, width: 20 }} /></td>
                                <td>abcd12345efg</td>
                                <td>defewd</td>
                                <td>nfcdefewd</td>

                            </tr>
                        </tbody>
                    </table>
                    <div className="aiz-pagination" />
                </div>
            </div>



        </>
    )
}
export default EtsyAccount