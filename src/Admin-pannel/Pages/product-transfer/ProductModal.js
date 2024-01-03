import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-router-dom';

function ProductModal(props) {

// console.log(props.cartData);

    let selectedVariants = []

    const sendData = (data) => {
        let flag = false
        let index ;

        if (selectedVariants?.length === 0) {
            selectedVariants.push(data)
        } else {
            for (let i = 0; i < selectedVariants.length; i++) {
                if (selectedVariants[i].variant_id === data.variant_id) {
                    flag = true
                    index = i
                }
            }
            if (index) {
                selectedVariants.splice(index, 1)
            }
            if (!flag) {
                selectedVariants.push(data)
            }
        }
       
    }

    return <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Product Transfer
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Select Variant</h4>
            <table className="table table-bordered physical_product_show">
                <thead>

                    <tr>
                        <td><label className="control-label">#</label></td>
                        <td><label className="control-label">Product Name</label></td>
                        <td><label className="control-label">SKU</label></td>
                        <td><label className="control-label">Variant</label></td>
                        <td><label className="control-label">Actual Rate</label></td>
                    </tr>

                </thead>

                <tbody>



                </tbody>

            </table>
        </Modal.Body>
        <Modal.Footer>
            <button type="button" class="btn btn-success" onClick={() => props.SaveData(selectedVariants)} style={{ margin: "12px 0", width: "200px" }}>Add To Cart</button>
        </Modal.Footer>
    </Modal>
}
export default ProductModal