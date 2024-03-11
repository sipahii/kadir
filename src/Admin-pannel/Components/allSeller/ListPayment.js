import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useDeletePaymentMutation } from '../all-products/allproductsApi/allProductsApi';

function ListPayment(props) {
    const [data, setData] = useState()
    const [deletePay, { isError, isSuccess, isLoading }] = useDeletePaymentMutation()

    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/transaction/list/${props.item}`)
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    const deletePayment = (id) => {
        deletePay(id)
    }

    useEffect(() => {
        if (isSuccess) {
            alert('Payment Delete Successfully')
            getData()
        }
    }, [isSuccess])

    useEffect(() => {
        if (isError) {
            alert('Payment Delete Faild')
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
                    VIEW PAYMENTS
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {isLoading && <div className="preloaderCount">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Reference No</th>
                            <th>Amount</th>
                            <th>Paid by</th>
                            <th style={{ display: "flex", justifyContent: "center" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.length ? data.map((item) => {
                            return <tr key={item}>
                                <td>{item.createdAt}</td>
                                <td>123</td>
                                <td>{item.Amount}</td>
                                <td>{item.paymentMethod}</td>
                                <td className="text-right footable-last-visible" style={{ display: 'table-cell', whiteSpace: 'nowrap' }}>
                                   
                                    <Link to='#' className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                        <i className="las la-edit" />
                                    </Link>

                                    <button type="button" onClick={() => { deletePayment(item._id) }} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                        <i className="las la-trash" />
                                    </button>

                                </td>
                            </tr>
                        }) : <tr><td><h5>NO PAYMENTS</h5></td></tr>}


                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ListPayment