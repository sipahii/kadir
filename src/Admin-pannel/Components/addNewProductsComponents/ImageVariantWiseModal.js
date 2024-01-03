import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-router-dom';


function ImageVariantWiseModal({ show, handleClose, vaiants, updatedVariants }) {
    console.log(updatedVariants);

    return <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Variant Wise Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <table className="table table-bordered physical_product_show">
                <thead>

                    <tr>
                        <td><label className="control-label">#</label></td>
                        <td><label className="control-label">Gallary Image</label></td>
                        <td><label className="control-label">Thumnail Image</label></td>
                        <td><label className="control-label">SKU</label></td>
                        <td><label className="control-label">Variant</label></td>
                        <td><label className="control-label">Actual Rate</label></td>
                    </tr>

                </thead>

                <tbody>

                    {updatedVariants && updatedVariants.map((item, i) => {
                        return <tr>
                            <td>
                                {1 + i}
                            </td>
                            <td>
                                <label name="productName" className="control-label">{item?.name}</label>
                            </td>
                            <td>
                                <input type="text" disabled value={item?.sku} name="sku" className="form-control" />
                            </td>
                            <td>
                                <input type="text" disabled value={item?.weight} name="rate" className="form-control" />
                            </td>
                            <td>
                                <input type="text" disabled value={item?.mrp} name="actual_rate" className="form-control" />
                            </td>

                        </tr>
                    })}

                </tbody>

            </table>

        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
}
export default ImageVariantWiseModal