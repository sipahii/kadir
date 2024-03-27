import React, { useEffect } from 'react';
import { FiEdit } from 'react-icons/fi';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useGetPOSDiscountDataQuery } from '../../all-products/allproductsApi/allProductsApi';

function Discount({ bringDiscountInpVal, showCombo, SaveData }) {
    const [smShow2, setSmShow2] = useState(false);

    const [inputVal, setInputVal] = useState({ discount: '', discount_type: '' });

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = inpVal;
        setInputVal(clonedObj)
    };

    const submitOrderDiscountVal = () => {
        bringDiscountInpVal(inputVal)
        // SaveData()
        setSmShow2(false)
    }

    return (
        <>
            <td>Discount
                <button onClick={() => setSmShow2(true)} className="me-2">
                    <FiEdit />
                </button>

                <Modal
                    size="sm"
                    show={smShow2}
                    onHide={() => setSmShow2(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            <p> EDIT ORDER DISCOUNT</p>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Footer className='text-align-start'>
                        {/* <p>Order Discount</p> */}
                        <form>
                            <label>Discount Amount</label>
                            <input className='form-control mb-1' name='discount' placeholder='0' type='text' onChange={onChangeHandler} />
                            {/* <div>
                                <label>Discount Type</label>
                                <select className="form-select" name='discount_type' aria-label="Default select example" onChange={onChangeHandler}>
                                    <option value={'Amount'}>Amount</option>
                                    <option value={'Percent'}>Percent</option>
                                </select>
                            </div> */}
                        </form>
                        <Button variant="primary" type='button' onClick={submitOrderDiscountVal}>
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>

            </td>
            {/* <td className='text-right'>{showCombo?.discount}</td> */}
            <td className='text-right'>{inputVal?.discount}</td>
        </>
    )
}

export default Discount