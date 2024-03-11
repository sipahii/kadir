
import axios from 'axios';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ReplyModal(props) {
    const [state, setState] = useState({
        question_id: props.saveData?._id,
        status: props.saveData?.status,
        answer: ''
    })
    const handler = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }
    const postQuestion = async ()=>{
        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/product/answer/add_answer`,state,{
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    Authorization: `Bearer ${window.localStorage.getItem('token')}`,
                },
            })
            alert('Update successfully')
            props.getData()
            props.onHide()
        } catch (error) {
            alert('Server Error Update Fail')
        }
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Reply To {props.saveData?.user?.firstname} {props.saveData?.user?.lastname}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Status</label>
                        <Form.Select aria-label="Default select example" name='status' onChange={handler} value={state.status}>
                            <option>Open this select menu</option>
                            <option value="Pending">Pending</option>
                            <option value="Publish">Publish</option>
                            <option value="Rejected">Rejected</option>
                        </Form.Select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Answer</label>
                        <input type="text" className="form-control" name='answer' value={state.answer} onChange={handler} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Detail</label>
                        <input type="text" className="form-control" name='detail' value={state.detail} onChange={handler} id="exampleInputPassword1" />
                    </div>
                    <button type="button" onClick={postQuestion} className="btn btn-primary">Submit</button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                {/* <Button onClick={props.onHide}>Close</Button> */}
            </Modal.Footer>
        </Modal>
    );
}
export default ReplyModal