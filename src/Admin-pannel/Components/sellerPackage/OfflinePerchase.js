import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function OfflinePerchase(props) {
    const [state, setState] = useState({
        icic: true,
        cheque: false
    })

    const [values, setvalues] = useState({
        package_name: props.items?.name,
        package_id: props.items._id,
        seller_id: window.localStorage.getItem('isSellerId'),
        packageType: "offline",
        transType: 'bank',
        price: props.items.amount,
        transactionId: ""
    })

    const [file, setFile] = useState()

    const changeHandle = (e) => {
        const clone = { ...values }
        clone[e.target.name] = e.target.value
        setvalues(clone)
    }

    const chengePhoto = (e) => {
        setFile(e.target.files[0])
    }

    const changeMethode = (str) => {
        const clone = { ...state }
        if (str === 'icici') {
            clone.icic = true
            clone.cheque = false
        } else {
            clone.cheque = true
            clone.icic = false
        }
        setState(clone)
    }

    const sendData = async () => {
        const fromData = new FormData()
        fromData.append('package_name', values.package_name);
        fromData.append('package_id', values.package_id);
        fromData.append('seller_id', values.seller_id);
        fromData.append('packageType', values.packageType);
        fromData.append('price', values.price);
        fromData.append('transType', state.icic ? "bank" : "cheque");
        fromData.append('transactionId', values.transactionId);
        fromData.append('image', file);

    
        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/packagePaymentHistory/add_PackagePayment`, fromData)
            alert(" Package Purchase Successfully")
            props.onHide()
        } catch (error) {
            alert("Server Error Not Package Not Purchase ")
        }
    }


    return <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='innerbuyPackagepay'
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Offline Package Payment
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className="align-items-center gutters-5 row">
                            <div className="col-6 col-md-4" onClick={() => changeMethode('icici')}>
                                <label className="aiz-megabox d-block mb-3">
                                    <input value="ICICI Bank" id="payment_option" type="radio" name="payment_option" onchange="toggleManualPaymentData(1)" checked="" />
                                    <span className="d-block p-3 aiz-megabox-elem" style={state?.icic ? { border: "1px solid #2E294E" } : { border: "none" }}>
                                        <img src="https://bucket-name.s3.region.amazonaws.com/uploads/all/qWtVvdVrkexRR41VVaNV6W7yzjMGUVrD3HqfnYNA.png" className="img-fluid mb-2" />
                                        <span className="d-block text-center">
                                            <span className="d-block fw-600 fs-15">ICICI Bank</span>
                                        </span>
                                    </span>
                                </label>
                            </div>
                            <div className="col-6 col-md-4" onClick={() => changeMethode('cheque')}>
                                <label className="aiz-megabox d-block mb-3">
                                    <input value="Cheque Payment" id="payment_option" type="radio" name="payment_option" onchange="toggleManualPaymentData(2)" checked="" />
                                    <span className={`d-block p-3 aiz-megabox-elem ${state.cheque && 'borderColorss'}`}>
                                        <img src="https://bucket-name.s3.region.amazonaws.com/uploads/all/Wnhuad4Xbhfy69Jd8MN8PHGvoGO8hnFcYDs9EnX2.png" className="img-fluid mb-2" />
                                        <span className="d-block text-center">
                                            <span className="d-block fw-600 fs-15">Cheque Payment</span>
                                        </span>
                                    </span>
                                </label>
                            </div>
                        </div>



                        {state.icic ? <div className="card mb-3 p-3">
                            <div id="manual_payment_description">
                                <div><p>ICICI Bank Ltd Bank Details</p></div>
                                <ul>
                                    <li>Bank Name - ICICI Bank Ltd, Account Name - 11223344, Account Number - 101010, Routing Number - 123456</li>
                                </ul>
                            </div>
                        </div> :

                            <div className="card mb-3 p-3">
                                <div id="manual_payment_description">
                                    <div><p>Cheque Payment&nbsp;</p></div>
                                </div>
                            </div>

                        }



                        <div className="card mb-3 p-3">
                            <div className="row">
                                <div className="col-md-3">
                                    <label>Transaction ID <span className="text-danger">*</span></label>
                                </div>
                                <div className="col-md-9">
                                    <input type="text" className="form-control mb-3" name="transactionId" value={values.transactionId} onChange={changeHandle} placeholder="Transaction ID" required="" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Photo</label>
                                <div className="col-md-9">
                                    <div className="input-group" data-toggle="aizuploader" data-type="image">
                                        <input type="file" name="photo" onChange={chengePhoto} className="selected-files form-control" />
                                    </div>
                                    <div className="file-preview box sm">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            <Button onClick={sendData}>Submit</Button>
        </Modal.Footer>
    </Modal>

}
export default OfflinePerchase