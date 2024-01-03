import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAddDeleveryMutation, useGetAllStaffsQuery, useUpdateDeleveryMutation } from '../all-products/allproductsApi/allProductsApi';
import { Spinner } from 'react-bootstrap';

function DeleveryAdd(props) {

    const [sendValue, { isError, isLoading, isSuccess }] = useAddDeleveryMutation()
    const { data } = useGetAllStaffsQuery()

    const [updateDelev, { isError: delvErr, isLoading: delLoad, isSuccess: delSucc }] = useUpdateDeleveryMutation()

    const [shippingAddress_save, setshippingAddress_save] = useState({
        country: "",
        state: "",
        city: "",
        zip: ""
    })

    const [state, setState] = useState({
        date: '',
        status: 'Pending',
        sale_reference_no: '',
        delivered_by: '643aedb211b57e222dffe64e',
        received_by: '',
        note: '',
        order_id: props.item?._id,
    })

    useEffect(() => {
        if (props?.value) {
            setState(props.value)
            setshippingAddress_save(props.value.shippingAddress_save)
        }
    }, [props?.value])

    const getValue = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }

    const updateShipAdd = (e) => {
        const clone = { ...shippingAddress_save }
        clone[e.target.name] = e.target.value
        setshippingAddress_save(clone)
    }

    const sendData = () => {
        const clone = { ...state, shippingAddress_save: { ...shippingAddress_save } }
        if (props.value) {
            updateDelev({data:clone , id:props.value._id});
        } else {
            sendValue(clone);
        }

    }

    useEffect(() => {
        if (isSuccess) {
            alert('Add DELIVERY Successfully')
            props.onHide()
        }
    }, [isSuccess])

    useEffect(() => {
        if (isError) {
            alert('Add DELIVERY Faild')
        }
    }, [isError])



    useEffect(() => {
        if (delSucc) {
            alert('Update DELIVERY Successfully')
            props.onHide()
            props.getData()
        }
    }, [delSucc])

    useEffect(() => {
        if (delvErr) {
            alert('Update DELIVERY Faild')
        }
    }, [delvErr])
    return <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Add DELIVERY
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {delLoad && <div className="preloaderCount">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
            <h6>Order Id : {props.item?._id}</h6>
            <h6>Please fill in the information below. The field labels marked with * are required input fields.</h6>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <label className="form-label">Date *</label>
                        <input type="date" value={state.date} name='date' onChange={getValue} className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <div className='col'>
                        <label className="form-label">Status *</label>
                        <select className="form-select" name='status' onChange={getValue} aria-label="Default select example">
                            <option selected value="Pending">Pending</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Packing">Packing</option>
                        </select>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <label className="form-label">Delivery Reference No *</label>
                        <input type="text" value={state.sale_reference_no} name='sale_reference_no' onChange={getValue} className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <div className='col'>
                        <label className="form-label">Delivered by</label>
                        <select className="form-select" name='delivered_by' onChange={getValue} aria-label="Default select example">
                            {data ? data.map((item) => {
                                return <option value={item._id}>{item.firstname + " " + item.lastname}</option>
                            }) : 'd'}
                        </select>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-6'>
                        <label className="form-label">Received by</label>
                        <input type="text" value={state.received_by} name='received_by' onChange={getValue} className="form-control" aria-describedby="emailHelp" />
                    </div>
                </div>

                <div className='row'>
                    <label className="form-label" style={{ fontSize: "17px", marginTop: "10px" }}>Shipping Address</label>
                    <div className='col-6'>
                        <label className="form-label">Country</label>
                        <input type="text" value={shippingAddress_save?.country} name='country' onChange={updateShipAdd} className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <div className='col-6'>
                        <label className="form-label">state</label>
                        <input type="text" value={shippingAddress_save?.state} name='state' onChange={updateShipAdd} className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <div className='col-6'>
                        <label className="form-label">City</label>
                        <input type="text" value={shippingAddress_save?.city} name='city' onChange={updateShipAdd} className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <div className='col-6'>
                        <label className="form-label">Zip</label>
                        <input type="text" value={shippingAddress_save?.zip} name='zip' onChange={updateShipAdd} className="form-control" aria-describedby="emailHelp" />
                    </div>
                </div>

                <div className='row'>
                    <label for="floatingTextarea2">Comments</label>
                    <div className="form-floating">
                        <textarea className="form-control" name='note' value={state.note} onChange={getValue} placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                    </div>
                </div>

            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button style={{ display: "flex", alignItems: "center" }} onClick={sendData}>Submit  {isLoading && <Spinner style={{ marginLeft: "5px" }} animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}</Button>
        </Modal.Footer>
    </Modal>
}

export default DeleveryAdd