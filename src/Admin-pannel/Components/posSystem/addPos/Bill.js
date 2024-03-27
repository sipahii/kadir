import React, { useRef } from 'react';
import { useState } from 'react';
import { ComponentToPrint } from '../../printComp/PrintComp';
import { useReactToPrint } from 'react-to-print';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

function Bill({ showCombo, totalPosProductsPrice, bringedDiscountVal, bringedOrderTaxVal, viewCustomerD, cutomerId }) {
    // const [smShow, setSmShow] = useState(false);

    const componentRef = useRef();
    const handleReactToPrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const handlePrint = () => {
        console.log('viewCustomerD--PrintD--', viewCustomerD)
        handleReactToPrint()
    };




    return (
        <>
            <td className='bg-deepblue'>
                <div style={{ display: 'none' }}>
                    <ComponentToPrint showCombo={showCombo} totalPosProductsPrice={totalPosProductsPrice} bringedOrderTaxVal={bringedOrderTaxVal} bringedDiscountVal={bringedDiscountVal} viewCustomerD={viewCustomerD} cutomerId={cutomerId} ref={componentRef} />
                </div>
                <button onClick={handlePrint}>Bill</button>

            </td>

            {/* <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        <p>Please add product before payment. Thank you!</p>
                    </Modal.Title>

                </Modal.Header>

                <Modal.Footer>
                    <Button variant="primary" onClick={() => setSmShow(false)}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal> */}


        </>
    )
}

export default Bill