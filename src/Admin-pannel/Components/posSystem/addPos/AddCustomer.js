import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiFillPlusSquare } from 'react-icons/ai';
import { useAddPOSCustomerMutation, useGetPOSCustomerGroupQuery } from '../../all-products/allproductsApi/allProductsApi';
import { toast } from 'react-toastify';

function AddCustomer() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { isLoading, data: customerGroupData } = useGetPOSCustomerGroupQuery();

    const [inputVal, setinputVal] = useState({
        country: '', firstname: '', city: '', state: '', lastname: '', mobile: '', zip: '', landmark: '', province: '', email: '', company: '', addressLine1: '', addressLine2: '', role_id: ''
    })

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = inpVal;
        setinputVal(clonedObj)
    };

    const [addPOSCustomerD, response] = useAddPOSCustomerMutation();

    const submitAddCustomerData = () => {
        const clone = { ...inputVal };
        addPOSCustomerD(clone);
        handleClose()
    };


    const toastSuccessMessage = () => {
        toast.success("Customer added Successfully", {
            position: "top-center"
        })
    };

    const toasterroeMessage = () => {
        toast.error('Customer not added', {
            position: 'top-center'
        })
    }

    useEffect(() => {
        if (response.isSuccess === true) {
            toastSuccessMessage()
        };
    }, [response]);

    useEffect(() => {
        if (response.isError === true) {
            toasterroeMessage()
        };
    }, [response])


    return (
        <>
            <span className='bg-gray'>
                <button type='button' onClick={handleShow}>
                    <AiFillPlusSquare />
                </button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Customer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Please fill in the information below. The field labels marked with * are required input fields.</p>

                        <div className="aiz-main-content">
                            <div className="px-15px px-lg-25px">
                                <div className="row">
                                    <div className="col-lg-6 mx-auto">
                                        <div className="card">
                                            <form className="form-horizontal" id="create-course-form" onSubmit={submitAddCustomerData}>
                                                <div className="card-body">

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="first name">First Name *</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="Name" name="firstname" className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="last name">Last Name *</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="Name" name="lastname" className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="first name">Customer Group *</label>
                                                        <div className="col-sm-9">
                                                            <select className="form-select" name='role_id' aria-label="Default select example" onChange={onChangeHandler}>
                                                                {customerGroupData && customerGroupData.map((item, i) => {
                                                                    return <option value={item._id} key={i}>{item.customerRole_name}</option>
                                                                })}

                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">Company</label>
                                                        <div className="col-sm-9">
                                                            <input type="email" placeholder="COmpany" name="company" className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>

                                                    {/* <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="email">Unique Customer ID</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="Unique Customer ID" autoComplete="off" name="" className="form-control" required />
                                                        </div>
                                                    </div> */}

                                                    {/* <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="mobile">GST Number</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="GST Number" name="" className="form-control" required />
                                                        </div>
                                                    </div> */}

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">Phone *</label>
                                                        <div className="col-sm-9">
                                                            <input type="number" placeholder="Phone" name="mobile" className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">Email *</label>
                                                        <div className="col-sm-9">
                                                            <input type="email" placeholder="Email" name="email" className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>


                                                    {/* <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">Address *</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="Address *" name="" className="form-control" required />
                                                        </div>
                                                    </div> */}

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="email">Country</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="Country" autoComplete="off" name="country" className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">City</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="city" name="city" className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">State</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="state" name="state" className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">Zip</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="Zip" name="zip" className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">Address Lane 1</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="Address Lane 1" name="addressLine1" className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">Address Lane 2</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="Address Lane 2" name="addressLine2" className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">Land Mark</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="Land Mark" name="landmark" className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">Province</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="Province" name="province" className="form-control" required onChange={onChangeHandler} />
                                                        </div>
                                                    </div>

                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    {/* <div className="col-lg-6 mx-auto">
                                        <div className="card">
                                            <form className="form-horizontal" id="create-course-form">
                                                <div className="card-body">

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="first name">Price Group</label>
                                                        <div className="col-sm-9">
                                                            <select className="form-select" aria-label="Default select example">
                                                                <option value={'Default'}>Default</option>
                                                                <option value={'Retail'}>Retail</option>
                                                                <option value={'Wholesale'}>Wholesale</option>
                                                            </select>

                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="first name">Postal Code</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="Postal Code" name="" className="form-control" required />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="mobile">Customer Custom Field 1</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="Customer Custom Field 1" name="" className="form-control" required />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">Customer Custom Field 2</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="Customer Custom Field 2" name="" className="form-control" required />
                                                        </div>
                                                    </div>


                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">Customer Custom Field 3</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="Customer Custom Field 3" name="" className="form-control" required />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">Customer Custom Field 4</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="Customer Custom Field 4" name="" className="form-control" required />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">Customer Custom Field 5</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="Customer Custom Field 5" name="" className="form-control" required />
                                                        </div>

                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-from-label" htmlFor="password">Customer Custom Field 6</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" placeholder="Customer Custom Field 6" name="" className="form-control" required />
                                                        </div>
                                                    </div>

                                                </div>
                                            </form>
                                        </div>
                                    </div> */}

                                </div>
                            </div>
                            <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto"></div>

                        </div>

                    </Modal.Body>
                    <Modal.Footer>

                        <Button variant="primary" type='button' onClick={submitAddCustomerData}>
                            Add Customer
                        </Button>
                    </Modal.Footer>
                </Modal>
            </span>
        </>
    )
}

export default AddCustomer