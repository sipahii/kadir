
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function VstockModal(props) {
    let selectedVariants = []
    const [values, setValues] = useState(props?.cartData)
    const sendData = (data, i) => {
        let flag = false
        let index;
        console.log(data);
        if (selectedVariants?.length === 0) {
            selectedVariants.push({ productName: props?.cartData?.name, ...data, productId: props?.cartData?._id, variant: props?.cartData?.variations[i]._id, })
        } else {
            for (let i = 0; i < selectedVariants.length; i++) {
                if (selectedVariants[i]._id === data._id) {
                    flag = true
                    index = i
                }
            }
            if (index) {
                selectedVariants.splice(index, 1)
            }
            if (!flag) {
                selectedVariants.push({ productName: props?.cartData?.name, ...data, productId: props?.cartData?._id, variant: props?.cartData?.variations[i]._id })
            }
        }
    }

    const setQty = (i) => {
        const maped = values.map((item,ind) => {
            if (ind == i.target.id) {
                const obj = { ...item, qty: +i.target.value }
                return obj
            }else{
                return item
            }
        })
        setValues(maped)
    }

    return <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Select Variant
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <table className="table table-bordered physical_product_show">
                <thead>

                    <tr>
                        {/* <td><label className="control-label">#</label></td> */}
                        <td><label className="control-label">Product Name</label></td>
                        <td><label className="control-label">SKU</label></td>
                        <td><label className="control-label">Variant</label></td>
                        <td><label className="control-label">Available</label></td>
                        <td><label className="control-label">Quantity</label></td>
                    </tr>

                </thead>

                <tbody>

                    {values && values.map((item, i) => {
                        return <tr>
                            {/* <td>
                                <Form>
                                    <Form.Check
                                        onClick={() => sendData(item, i)}
                                        inline
                                        name="group1"
                                        type='checkbox'
                                        id={`inline-checkbox-1`}
                                    />
                                </Form>
                            </td> */}
                            <td>
                                <label name="productName" className="control-label">{item?.productId?.name}</label>
                            </td>
                            <td>
                                <input type="text" disabled value={item?.variantId?.sku} name="sku" className="form-control" />
                            </td>
                            <td>
                                <input type="text" disabled value={item?.variantId.weight} name="rate" className="form-control" />
                            </td>
                            <td>
                                <input type="text" disabled value={item?.serialNo?.length} name="avalab" className="form-control" />
                            </td>
                            <td>
                                <input type="text" value={item?.qty} name="qty" id={i} onChange={setQty} className="form-control" />
                            </td>

                        </tr>
                    })}

                </tbody>

            </table>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={() => props.SaveData(values)}>Send</Button>
        </Modal.Footer>
    </Modal>

}

export default VstockModal