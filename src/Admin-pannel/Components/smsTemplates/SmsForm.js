import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router';
import { useAddSmsListMutation, useEditSmsListMutation, useGetSmsByIdQuery, useGetSmsTemplateQuery } from '../all-products/allproductsApi/allProductsApi';


function SellerAddEditForm() {
    const [validated, setValidated] = useState(false);
    const params = useParams()
    const { data } = useGetSmsTemplateQuery()
    const [status, setStatus] = useState(false)
    const [state, setState] = useState({
        identifier: "",
        sms_body: "",
        template_id: "",
        status: false,

    }
    )

    const [sendDataItem] = useAddSmsListMutation()

    const onChangeHandle = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }

    const [update] = useEditSmsListMutation()

    const sendData = (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        const clone = { ...state, status: status }
        setValidated(true);

        if (params.id) {
            update({ data: clone, id: params.id })
        } else {
            sendDataItem(clone)
        }
    }

    useEffect(() => {
        const filterd = data?.find((item) => {
            return params.id === item._id
        })
        setState(filterd)
    }, [params.id])



    return <div className='container'>
        {params.id ? <h2>Update Sms</h2> : <h2>Add Sms</h2>}
        <Form noValidate validated={validated} onSubmit={sendData}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Identifier</Form.Label>
                <Form.Control type="text" name='identifier' onChange={onChangeHandle} value={state?.identifier} style={{ width: "50%" }} placeholder="Identifier" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Sms Body</Form.Label>
                <Form.Control type="text" name='sms_body' onChange={onChangeHandle} value={state?.sms_body} style={{ width: "50%" }} placeholder="sms_body" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>template Id</Form.Label>
                <Form.Control type="text" name='template_id' onChange={onChangeHandle} value={state?.template_id} style={{ width: "50%" }} placeholder="num_of_reviews" required />
            </Form.Group>

            <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
                <Form.Label>Status</Form.Label>
                <label className="aiz-switch aiz-switch-success mb-0 d-flex">
                    <input name="status" type="checkbox" value="1" onClick={() => setStatus(!status)} checked={status} />
                    <span className="slider round" style={{ marginLeft: "20px" }}></span>
                </label>
            </Form.Group>

            <Button variant="primary" type="submit" >
                Submit
            </Button>
        </Form>
    </div >
}
export default SellerAddEditForm