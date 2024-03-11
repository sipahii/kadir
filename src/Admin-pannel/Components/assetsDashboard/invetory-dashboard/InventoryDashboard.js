import React, { useState } from 'react'


import { Button } from 'react-bootstrap'
import { AiFillEye } from "react-icons/ai"
import { BsFillCartFill, BsFillCartPlusFill } from 'react-icons/bs'
import { FaShippingFast } from 'react-icons/fa'

import 'lightbox.js-react/dist/index.css'
import InventoryEdit from './inventoryDashboardModals/InventoryEdit';
import InventoryCart from './inventoryDashboardModals/InventoryCart'

function InvetoryDashboard() {
    const [show, setShow] = useState(false);
    const [cartShow, setCartShow] = useState(false);

    const handleButton = () => {
        setShow(!show)
    }
    const cartButtonHandle = () => {
        setCartShow(!cartShow)
    }

    return (
        <>
            <div className="aiz-main-content">

                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3"><strong>Inventory Dashboard</strong></h1>
                            </div>
                            <div className="col-md-6 text-md-right">
                                <Button className='me-2'> <span><BsFillCartPlusFill /></span>Cart : <span className='bg-white text-dark p-2 rounded-2'> 0</span></Button>
                                <Button className='me-2'>Accept : <span className='bg-white text-dark p-2 rounded-2'> 0</span></Button>
                                <Button className='me-2'>Download</Button>
                            </div>
                        </div>

                    </div>

                    <div className="card">
                        <section className='position-absolute w-100 z-3'>
                            {show &&
                                <InventoryEdit handleButton={handleButton} />
                            }
                        </section>

                        <section className='position-absolute w-100 z-3'>
                            {cartShow &&
                                <InventoryCart cartButtonHandle={cartButtonHandle} />
                            }
                        </section>
                        <div className="card-header">
                            <h5 className="mb-0 h6">Inventory Dashboard</h5>
                            <div className="col-md-6 text-md-right">
                            </div>
                        </div>

                        <div className="card-body">

                            <section className="form-section">
                                <div className="row">
                                    {/* <form action=""> */}
                                    <div className="col-lg-3">
                                        <div>
                                            <label for="exampleInputcompany " class="form-label mr-3">Customer</label>
                                        </div>
                                        <div>
                                            <input type="text" className="form-control" id="exampleInputcompany" aria-describedby="emailHelp" placeholder='Customer' />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label for="exampleInputAcc " class="form-label mr-3">Locations</label>
                                        </div>
                                        <div>
                                            <input type="text" className="form-control" id="exampleInputAcc" aria-describedby="emailHelp" placeholder='Locations' />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label for="exampleInputAcc " class="form-label mr-3">Status</label>
                                        </div>
                                        <div>
                                            <input type="text" className="form-control" id="exampleInputAcc" aria-describedby="emailHelp" placeholder='Status' />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label for="exampleInputAcc " class="form-label mr-3">Product Type</label>
                                        </div>
                                        <div>
                                            <input type="text" className="form-control" id="exampleInputAcc" aria-describedby="emailHelp" placeholder='Product Type' />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label for="exampleInputAcc " class="form-label mr-3">Brand</label>
                                        </div>
                                        <div>
                                            <input type="text" className="form-control" id="exampleInputAcc" aria-describedby="emailHelp" placeholder='Brand' />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label for="exampleInputAcc " class="form-label mr-3">Processor</label>
                                        </div>
                                        <div>
                                            <input type="text" className="form-control" id="exampleInputAcc" aria-describedby="emailHelp" placeholder='Processor' />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label for="exampleInputAcc " class="form-label mr-3">Company</label>
                                        </div>
                                        <div>
                                            <input type="text" className="form-control" id="exampleInputAcc" aria-describedby="emailHelp" placeholder='Company' />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <label for="exampleInputAcc " class="form-label mr-3">Account Manager</label>
                                        </div>
                                        <div>
                                            <input type="text" className="form-control" id="exampleInputAcc" aria-describedby="emailHelp" placeholder='Account Manager' />
                                        </div>
                                    </div>

                                    {/* </form> */}
                                </div>

                            </section>


                            <table className="table table-3">
                                <thead>
                                    <tr>
                                        <th class="table-secondary" scope="col">----Actions-----------------</th>
                                        <th class="table-secondary" scope="col">Brand Name</th>
                                        <th class="table-secondary" scope="col">Product Name</th>
                                        <th class="table-secondary" scope="col">Product Type</th>
                                        <th class="table-secondary" scope="col">Service Tag</th>
                                        <th class="table-secondary" scope="col">Processor</th>
                                        <th class="table-secondary" scope="col">Sales Order No</th>
                                        <th class="table-secondary" scope="col">Customer Name </th>
                                        <th class="table-secondary" scope="col">Account Manager</th>
                                        <th class="table-secondary" scope="col">Status</th>
                                        <th class="table-secondary" scope="col">Locations</th>
                                        <th class="table-secondary" scope="col">Transfer Status</th>
                                        <th class="table-secondary" scope="col">Service Start Date</th>
                                        <th class="table-secondary" scope="col">Service End Date</th>
                                    </tr>
                                </thead>
                                <tbody className='position-reletive'>
                                    <tr>
                                        <td>
                                            <div className='w-100'>
                                                <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt" onClick={handleButton}>
                                                    <AiFillEye />
                                                </button>

                                                <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt" onClick={cartButtonHandle}>
                                                    <BsFillCartFill />
                                                </button>
                                                <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                                    <FaShippingFast />
                                                </button>
                                            </div>
                                        </td>
                                        <td>763526</td>

                                        <td>HP Laptop</td>
                                        <td>Laptop Solid</td>
                                        <td>564CDFG67</td>
                                        <td>Core I 5,
                                            <br />
                                            11 Gen,
                                            <br />
                                            8 GB RAM
                                            <br />
                                            1 TB HDD<br />
                                            WIN 11 PRO
                                        </td>
                                        <td>Inactive</td>
                                        <td>Inactive</td>
                                        <td>Inactive</td>
                                        <td>Active</td>
                                        <td>Pune</td>
                                        <td></td>
                                        <td> 07/Feb/2020</td>
                                        <td>06/feb/2021</td>
                                    </tr>
                                </tbody>
                            </table>


                            <div className="aiz-pagination">
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default InvetoryDashboard

