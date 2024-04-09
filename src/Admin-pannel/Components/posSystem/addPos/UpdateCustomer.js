import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPencilAlt } from 'react-icons/fa'
import { toast } from 'react-toastify';
import { useAddPOSCustomerMutation, useGetPOSCustomerGroupQuery, useGetPOSUserDetailIdQuery } from '../../all-products/allproductsApi/allProductsApi';
import axios from 'axios';

function UpdateCustomer({ viewCustomerD, cutomerId }) {
    const [spinn, setSpinn] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [inputVal, setinputVal] = useState({
        firstname: '', city: '', state: '', lastname: '', mobile: '', zip: '', landmark: '', province: '', email: '', company: '', addressLine1: '', addressLine2: ''
    });
    const token = window.localStorage.getItem('token')
    // const { isLoading, data: customerGroupData } = useGetPOSCustomerGroupQuery();
    const { data: CustomerDetailData } = useGetPOSUserDetailIdQuery({ id: cutomerId, token: token });

    useEffect(() => {
        if (CustomerDetailData) {
            setinputVal(CustomerDetailData)
        }
    }, [CustomerDetailData]);

    console.log("UpdateCustomerResponse---", CustomerDetailData);

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = inpVal;
        setinputVal(clonedObj)
    };

    const toastSuccessMessage = () => {
        toast.success("Customer Updated Successfully", {
            position: "top-center"
        })
    };
    const toasterroeMessage = () => {
        toast.error('Customer not Updated', {
            position: 'top-center'
        })
    };

    const submitAddCustomerData = async () => {
        const clone = { ...inputVal };
        try {
            setSpinn(true)
            const res = await axios.put(`https://onlineparttimejobs.in/api/customer/update_Customer/${cutomerId}`, clone, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setSpinn(false)
            toastSuccessMessage()
        } catch (error) {
            setSpinn(false)
            toasterroeMessage()
        }
        handleClose()
    };


    return (
        <>
            <span className='bg-gray'>
                <button type='button' onClick={handleShow} disabled={!viewCustomerD?.length}>
                    <FaPencilAlt />
                </button>
                <Modal show={show} onHide={handleClose}>
                    {spinn && <div className="preloaderCount">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>}
                    <Modal.Header closeButton>
                        <Modal.Title>Update Customer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Please fill in the information below. The field labels marked with * are required input fields.</p>

                        <div className="aiz-main-content">
                            <div className="px-15px px-lg-25px">
                                <div className="row">
                                    <div className="col-lg-6 mx-auto">
                                        <div className="card">
                                            <form className="form-horizontal" id="create-course-form">
                                                <div className="card-body">

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="first name">First Name *</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="Name" value={inputVal?.firstname} name="firstname" className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="last name">Last Name *</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="Name" value={inputVal?.lastname} name="lastname" className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">Company</label>
                                                        <div className="col-sm-9">
                                                            <input type="email" placeholder="Company" value={inputVal?.Company} name="company" className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">Phone *</label>
                                                        <div className="col-sm-9">
                                                            <input type="number" placeholder="Phone" value={inputVal?.mobile} name="mobile" className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">Email *</label>
                                                        <div className="col-sm-9">
                                                            <input type="email" placeholder="Email" value={inputVal?.email} name="email" className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="email">Country</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="Country" value={inputVal?.country} autoComplete="off" name="country" className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">City</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="city" value={inputVal?.city} name="city" className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">State</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="state" value={inputVal?.state} name="state" className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">Zip</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="Zip" name="zip" value={inputVal?.zip} className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">Address Lane 1</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="Address Lane 1" value={inputVal?.addressLine1} name="addressLine1" className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">Address Lane 2</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="Address Lane 2" value={inputVal?.addressLine2} name="addressLine2" className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">Land Mark</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="Land Mark" value={inputVal?.landmark} name="landmark" className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">Province</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="Province" value={inputVal?.province} name="province" className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>

                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto"></div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>

                        <Button variant="primary" type='button' onClick={submitAddCustomerData}>
                            Update Customer
                        </Button>
                    </Modal.Footer>
                </Modal>
            </span>
        </>
    )
}

export default UpdateCustomer