import React from 'react';
import { AiFillPlusSquare } from 'react-icons/ai';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAddPurchaseCartMutation, useGetProductSearchQuery } from '../../all-products/allproductsApi/allProductsApi';
import { RxCross1 } from "react-icons/rx"
import { token } from '../../../common/TokenArea';
import axios from 'axios';
import AddProduct from '../../../Pages/addnewProductsPage/addProduct';



function ThirdInput({ setCart, setcartData, setModalShow }) {
    // const [show, setShow] = useState(false);
    const [spinn, setSpinn] = useState(false)
    const handleClose = () => setShow2(false);
    const handleShow = () => setShow2(true);
    const [showData, setShowData] = useState([])
    const [show, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [searchs, setSearch] = useState('');
    const [searchPro, setSearPro] = useState();

    const token = window.localStorage.getItem('token');

    // const { data: searchPro } = useGetProductSearchQuery({ token: token, paylode: searchs });

    const searchProduct = async (payload) => {
        setSpinn(true)
        try {
            const resp = await axios.get(`https://onlineparttimejobs.in/api/product/admin/search/${payload}`, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                },
            });
            setSearPro(resp?.data)
            setSpinn(false)
        } catch (error) {
            setSpinn(false)
            alert('Server !Error')
        }
    };
    const handelChange = (e) => {
        if (e.key === 'Enter') {
            const clone = e.target.value;
            searchProduct(clone)
            // setSearch(clone);
            setShow1(true)
        }
    };
    const setTableItem = async (item) => {
        setcartData(item);
        setModalShow(true)
        setShow1(false)
    };


    return (
        <>
            <div className="row">
                {spinn && <div className="preloaderCount">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
                <div className="col">
                    <div className='orderListSec mb-2'>
                        <input className="form-control" onKeyDown={handelChange} placeholder="Please add products to order list" />
                        <button type='button' className='third-inp-btn' onClick={handleShow} style={{ borderColor: "gray" }}>
                            <AiFillPlusSquare />
                        </button>
                        {show && searchPro?.getSearchedProduct?.length > 0 && <div className="showList">
                            <div style={{ fontSize: "19px" }} onClick={() => { setShow1(false) }}><RxCross1 /></div>
                            {searchPro?.getSearchedProduct.map((item) => {
                                return <h6 key={item._id} style={{ cursor: "pointer" }} onClick={() => setTableItem(item)}>{item?.name}</h6>
                            })}
                        </div>}
                    </div>
                </div>
                <span className='bg-gray'>
                    <Modal show={show2} onHide={handleClose} animation={false} dialogClassName='productManualModal'>
                        <Modal.Header closeButton>
                            {/* <Modal.Title>ADD PRODUCT MANUALLY</Modal.Title> */}
                        </Modal.Header>
                        <Modal.Body>
                            <AddProduct />
                            {/* <div className="col-lg-12">
                                <div className="card">
                                    <form className="form-horizontal" id="create-course-form">
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-from-label" htmlFor="first name">Product Code *</label>
                                                <div className="col-sm-9">
                                                    <input type="text" placeholder="Product Code *" name="" className="form-control" required />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-from-label" htmlFor="first name">Product Name *</label>
                                                <div className="col-sm-9">
                                                    <input type="text" placeholder="Product Name *" name="" className="form-control" required />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-sm-3 col-from-label" htmlFor="email">Product Tax *</label>
                                                <div className="col-sm-9">
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option value={1}>VAT @10%</option>
                                                        <option value={2}>GST @6%</option>
                                                        <option value={3}>VAT @20%</option>
                                                    </select>

                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-sm-3 col-from-label" htmlFor="mobile">Quantity *</label>
                                                <div className="col-sm-9">
                                                    <input type="text" placeholder="Quantity *" name="" className="form-control" required />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-sm-3 col-from-label" htmlFor="password">Product Discount</label>
                                                <div className="col-sm-9">
                                                    <input type="text" placeholder="Product Discount *" name="" className="form-control" required />
                                                </div>
                                            </div>


                                            <div className="form-group row">
                                                <label className="col-sm-3 col-from-label" htmlFor="password">Unit Price *</label>
                                                <div className="col-sm-9">
                                                    <input type="text" placeholder="Unit Price *" name="" className="form-control" required />
                                                </div>
                                            </div>
                                        </div>

                                    </form>

                                </div>
                                <table style={{ width: '100%' }}>
                                    <tbody>
                                        <tr>
                                            <th>Net Unit Price:</th>
                                            <td>0.00</td>
                                            <th>Product Tax:</th>
                                            <td>0.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> */}
                        </Modal.Body>
                        {/* <Modal.Footer>

                            <Button variant="primary" onClick={handleClose}>
                                Submit
                            </Button>
                        </Modal.Footer> */}
                    </Modal>
                </span>

            </div>
        </>
    )
}

export default ThirdInput