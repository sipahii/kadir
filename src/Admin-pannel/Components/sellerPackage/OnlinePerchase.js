import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function OnlinePerchase(props) {
    return <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='innerbuyPackage'
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Purchase Your Package
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <label for="floatingInputDisabled">Payment Type</label>

                        <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Open this select menu</option>

                            <option value="1">Iyzico</option>
                            <option value="2">flutterwave</option>
                            <option value="2">payfast</option>
                        </select>
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            <Button >Submit</Button>
        </Modal.Footer>
    </Modal>

}
export default OnlinePerchase