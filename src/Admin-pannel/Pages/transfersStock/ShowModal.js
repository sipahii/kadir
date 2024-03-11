
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ShowModal({ handleClose, show, id }) {

    const [data, setData] = useState(null)

    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/transferStock/${id}`)
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Stock Transfer Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <label for="basic-url" class="form-label">Date</label>
                        <h6>{data?.date}</h6>
                    </div>
                    <div className='col-3'>
                        <label for="basic-url" class="form-label">From pickupPoints</label>
                        <h6>{data?.FrompickupPoints?.pickupPoint_name}</h6>
                    </div>
                    <div className='col-3'>
                        <label for="basic-url" class="form-label">To pickupPoints</label>
                        <h6>{data?.TopickupPoints?.pickupPoint_name}</h6>
                    </div>
                    <div className='col-3'>
                        <label for="basic-url" class="form-label">Reference No</label>
                        <h6>{data?.referenceNo}</h6>
                    </div>
                    <div className='col-3'>
                        <label for="basic-url" class="form-label">Shipping Cost</label>
                        <h6>{data?.shipping_Cost}</h6>
                    </div>
                    <div className='col-3'>
                        <label for="basic-url" class="form-label">Supplier</label>
                        <h6>{data?.supplier[0].firstname + " " + data?.supplier[0].lastname}</h6>
                    </div>

                    <div className='col-3'>
                        <label for="basic-url" class="form-label">Status</label>
                        <h6>{data?.status[0].statusId?.name}</h6>
                    </div>
                </div>
            </div>

            <div className='container' style={{ marginTop: "20px" }}>
                <div className='row'>
                    <div className='col-12'>
                        <table className="table table-bordered physical_product_show">
                            <thead>
                                <tr>
                                    <td><label className="control-label">#</label></td>
                                    <td><label className="control-label">Product Name</label></td>
                                    <td><label className="control-label">Variant</label></td>
                                    <td><label className="control-label">SKU</label></td>
                                    <td><label className="control-label">Quantity</label></td>
                                    <td><label className="control-label">Net Unit Cost</label></td>
                                    <td><label className="control-label">Product Tax</label></td>
                                    <td><label className="control-label">SubTotal</label></td>
                                </tr>

                            </thead>

                            <tbody>

                                {data && data.products.map((item, i) => {
                                    return <tr key={i}>
                                        <td>
                                            {i + 1}
                                        </td>
                                        <td>
                                            <label name="varient" className="control-label">{item.product_id.name}</label>
                                        </td>

                                        <td>
                                            <input type="text" disabled value={item?.variant_id?.weight} name="sku" className="form-control" />
                                        </td>
                                        <td>
                                            <input type="text" disabled value={item?.sku} name="sku" className="form-control" />
                                        </td>

                                        <td>
                                            <input type="number" disabled name="current_qty" className="form-control" value={item?.qty} defaultValue='1' />
                                        </td>
                                        <td>
                                            <input type="number" disabled name="current_qty" className="form-control" value={item?.netUnit_Cost} defaultValue='1' />
                                        </td>
                                        <td>
                                            <input type="number" disabled name="current_qty" className="form-control" value={item?.tax} defaultValue='1' />
                                        </td>
                                        <td>
                                            <input type="number" disabled name="current_qty" className="form-control" value={item?.subTotal} defaultValue='1' />
                                        </td>

                                    </tr>
                                })}

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>


        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
}
export default ShowModal