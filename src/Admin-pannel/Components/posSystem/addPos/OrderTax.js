import React, { useEffect } from 'react';
import { FiEdit } from 'react-icons/fi';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function OrderTax({ bringOrderTaxInpVal, showCombo, SaveData }) {
    const [smShow, setSmShow] = useState(false);
    const [inputVal, setInputval] = useState({ order_tax: '' });

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = inpVal;
        setInputval(clonedObj)
    };

    const submitOrderTaxVal = () => {
        bringOrderTaxInpVal(inputVal)
        // SaveData()
        setSmShow(false)
    }

    return (
        <>
            <td>Order Tax
                <button onClick={() => setSmShow(true)} className="me-2">
                    <FiEdit />
                </button>

                <Modal
                    size="sm"
                    show={smShow}
                    onHide={() => setSmShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            <p> EDIT ORDER TAX</p>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <p>ORDER TAX</p>
                        <select className="form-select" name='order_tax' aria-label="Default select example" onChange={onChangeHandler}>
                            <option value={'No Tax'}>No Tax</option>
                            <option value={'10'}>VAT @10%</option>
                            <option value={'6'}>GST @6%</option>
                            <option value={'20'}>VAT @20%</option>
                        </select>
                        <Button variant="primary" type='button' onClick={submitOrderTaxVal}>
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>
            </td>
            {/* <td>{showCombo?.order_tax}</td> */}
            <td>{inputVal?.order_tax} %</td>
        </>
    )
}

export default OrderTax