import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useDeleteDeleveryMutation } from '../all-products/allproductsApi/allProductsApi';
import DeleveryAdd from './DeleveryAdd';


function ListDelevery(props) {

    const [DelmodalShow, setDelModalShow] = useState(false);
    const [dataVal, setDataVal] = useState(null)
    const [show, setShow] = useState(false);
    const [deleteDeleveryList, { isError, isSuccess, isLoading }] = useDeleteDeleveryMutation()

    const handleClose = () => setShow(false);
    const handleShow = (data) => {
        setDataVal(data)
        setShow(true)
    };
    const [data, setData] = useState()

    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/delivery/order/${props.id}`)
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    const deleteDelevery = async (id) => {
        deleteDeleveryList(id)
    }

    useEffect(() => {
        if (isSuccess) {
            alert('Delevery Delete Successfully')
            getData()
        }
    }, [isSuccess])

    useEffect(() => {
        if (isError) {
            alert('Delevery Delete Faild')
        }
    }, [isError])
    const [value , setValue] = useState(null)

    const editValue = (val)=>{
        setValue(val)
        setDelModalShow(true)
        setShow(false)
    }

    return <>
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    List Delevery
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Reference No</th>
                            <th>Status</th>
                            <th>Received by</th>
                            <th style={{ display: "flex", justifyContent: "center" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.length ? data.map((item) => {
                            return <tr key={item}>
                                <td>{item.createdAt}</td>
                                <td>{item.sale_reference_no}</td>
                                <td>{item.status}</td>
                                <td>{item.received_by}</td>
                                <td className="text-right footable-last-visible" style={{ display: 'table-cell', whiteSpace: 'nowrap' }}>
                                    <button className="btn btn-soft-success btn-icon btn-circle btn-sm" title="View" onClick={() => { handleShow(item) }}>
                                        <i className="las la-eye" />
                                    </button>
                                    <button className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit" onClick={()=>{editValue(item)}}>
                                        <i className="las la-edit" />
                                    </button>

                                    <button type="button" onClick={() => { deleteDelevery(item._id) }} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                        <i className="las la-trash" />
                                    </button>

                                </td>
                            </tr>
                        }) : <tr><td><h5>NO Delevery</h5></td></tr>}


                    </tbody>
                </Table>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>

        {/* Edit section */}

        {DelmodalShow && <DeleveryAdd
            show={DelmodalShow}
            value={value}
            onHide={() => setDelModalShow(false)}
            getData={getData}
        />}


        {/* detail section */}
        <Modal show={show} style={{
            height: '490px',
            width: '537px',
            margin: 'auto',
        }} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Delivery Detail</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>Order Id : {dataVal?.order_id}</h6>
                <h6>Received by : {dataVal?.received_by}</h6>
                <h6>Sale Reference : {dataVal?.sale_reference_no}</h6>
                <h6>Status : {dataVal?.status}</h6>
                <h6 style={{ color: 'red' }}>Shipping Address </h6>

                <h6>Country : {dataVal?.shippingAddress_save?.country}</h6>
                <h6>State : {dataVal?.shippingAddress_save?.state}</h6>
                <h6>City : {dataVal?.shippingAddress_save?.city}</h6>
                <h6>Zip : {dataVal?.shippingAddress_save?.zip}</h6>
            </Modal.Body>

        </Modal>


    </>





}
export default ListDelevery