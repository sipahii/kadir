import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreditDetails from './CreditDetails';
import { useEffect, useState } from 'react';
import { useAddTransactionMutation } from '../all-products/allproductsApi/allProductsApi';

function AddPayments(props) {

    const [showCredit, setshowCredit] = useState(false)
    const [showCheque, setshowCheque] = useState(false)
    const [postData, { isError, isLoading, isSuccess }] = useAddTransactionMutation()

    const [state, setState] = useState({
        date: '',
        paymentMethod: 'cash',
        amount: '',
        currency: '643aedb211b57e222dffe64e',
        orderId: props.item?._id,
        reference_No: ''
    })

    const handelChange = (e) => {
        if (e.target.value === 'CreditCard') {
            setshowCredit(true)
            setshowCheque(false)
            return
        }
        if (e.target.value === 'cheque') {
            setshowCredit(false)
            setshowCheque(true)
            getValue(e)
            return
        }
        else {
            setshowCredit(false)
            setshowCheque(false)
        }
    }

    const getValue = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }
    const sendData = () => {
        postData(state);
    }

    useEffect(() => {
        if (isSuccess) {
            alert('Payment Successfully')
            props.onHide()
        }
    }, [isSuccess])

    useEffect(() => {
        if (isError) {
            alert('Payment Faild')
        }
    }, [isError])

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='namesPay'
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    ADD PAYMENT
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Order ReferenceNo : {props?.item?.order_referenceNo}
                </p>
                <p>
                    Please fill in the information below. The field labels marked with * are required input fields.
                </p>

                <form>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6 mb-3">
                                <label className="form-label">Date *</label>
                                <input type="date" value={state.date} name='date' onChange={getValue} className="form-control" aria-describedby="emailHelp" />
                            </div>

                            <div className="col-6 mb-3">
                                <label className="form-label">Reference No</label>
                                <input type="text" name='reference_No' value={state.reference_No} onChange={getValue} className="form-control" />
                            </div>


                            <div className='row paySection'>
                                <div className="col-6 mb-3">
                                    <label className="form-label">Amount *</label>
                                    <input type="text" name='amount' value={state.amount} onChange={getValue} className="form-control" />
                                </div>
                                <div className="col-6 mb-3">
                                    <label className="form-label">Paying by *</label>
                                    <select className="form-select" name='paymentMethod' onChange={handelChange} aria-label="Default select example">
                                        <option selected value="cash">Cash</option>
                                        {/* <option value="1">Gift Card</option>
                                        <option value="CreditCard">Credit Card</option> */}
                                        <option value="cheque">Cheque</option>
                                        <option value="3">Others</option>
                                    </select>
                                </div>

                                {showCredit && <CreditDetails />}
                                {showCheque && <input type="text" name='checkNo' onChange={getValue} className="form-control" placeholder='Cheque No' />}

                            </div>


                            <div className="col-6 mb-3">
                                <label className="form-label">Attachment</label>
                                <input type="file" name='file' value={state.file} className="form-control" />
                            </div>
                        </div>
                    </div>
                </form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={sendData}>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default AddPayments