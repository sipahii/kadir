import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function PerchasePackage(props) {

    const changePaymenet = (e) => {
        if (e.target.value === '1') {
            props.onlineShow()
        } else {
            props.offlineShow()
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='innerbuyPackage'
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Select Payment Type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <label for="floatingInputDisabled">Payment Type</label>

                            <select className="form-select form-select-sm" onChange={changePaymenet} aria-label=".form-select-sm example">
                                <option selected>Open this select menu</option>
                                <option value="1">Online Payment</option>
                                <option value="2">Offline Payment</option>
                            </select>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>



    );
}
export default PerchasePackage