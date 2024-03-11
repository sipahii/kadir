import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

function PayoutRequest() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 h6">Seller Withdraw Request</h5>
            </div>
            <div className="card-body">
              <table
                className="table aiz-table mb-0 footable footable-1 breakpoint-xl"
                style={{}}
              >
                <thead>
                  <tr className="footable-header">
                    <th
                      data-breakpoints="lg"
                      className="footable-first-visible"
                      style={{ display: "table-cell" }}
                    >
                      #
                    </th>
                    <th data-breakpoints="lg" style={{ display: "table-cell" }}>
                      Date
                    </th>
                    <th style={{ display: "table-cell" }}>Seller</th>
                    <th data-breakpoints="lg" style={{ display: "table-cell" }}>
                      Total Amount to Pay
                    </th>
                    <th style={{ display: "table-cell" }}>Requested Amount</th>
                    <th
                      data-breakpoints="lg"
                      width="40%"
                      style={{ display: "table-cell" }}
                    >
                      Message
                    </th>
                    <th data-breakpoints="lg" style={{ display: "table-cell" }}>
                      Status
                    </th>
                    <th
                      data-breakpoints="lg"
                      width="15%"
                      className="text-right footable-last-visible"
                      style={{ display: "table-cell" }}
                    >
                      Options
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className="footable-first-visible"
                      style={{ display: "table-cell" }}
                    >
                      1
                    </td>
                    <td style={{ display: "table-cell" }}>
                      2022-11-28 11:32:50
                    </td>
                    <td style={{ display: "table-cell" }}>
                      Abaris Seller (Abaris Products)
                    </td>
                    <td style={{ display: "table-cell" }}>ZK28.40</td>
                    <td style={{ display: "table-cell" }}>ZK50.00</td>
                    <td style={{ display: "table-cell" }}>
                      Please send us t payment.
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <span className="badge badge-inline badge-success">
                        Paid
                      </span>
                    </td>
                    <td
                      className="text-right footable-last-visible"
                      style={{ display: "table-cell" }}
                    >
                      <a
                        onClick={handleShow}
                        className="btn btn-soft-warning btn-icon btn-circle btn-sm"
                        href="javascript:void(0);"
                        title="Pay Now"
                      >
                        <i className="las la-money-bill" />
                      </a>
                      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pay to seller</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
      <div>
  <table className="table table-striped table-bordered">
    <tbody>
      <tr>
        <td>Due to seller</td>
        <td>ZK28.40</td>
      </tr>
      <tr>
        <td>Requested Amount is</td>
        <td>ZK50.00</td>
      </tr>
      <tr>
        <td>Bank Name</td>
        <td>ICICI BANK LTD</td>
      </tr>
      <tr>
        <td>Bank Account Name</td>
        <td>123456</td>
      </tr>
      <tr>
        <td>Bank Account Number</td>
        <td>ABARIS PRODUCTS</td>
      </tr>
      <tr>
        <td>Bank Routing Number</td>
        <td>123123</td>
      </tr>
    </tbody>
  </table>
  <input type="hidden" name="shop_id" defaultValue={1} />
  <input type="hidden" name="payment_withdraw" defaultValue="withdraw_request" />
  <input type="hidden" name="withdraw_request_id" defaultValue={1} />
  <div className="form-group row">
    <label className="col-sm-3 col-from-label" htmlFor="amount">Requested Amount</label>
    <div className="col-sm-9">
      <input type="number" lang="en" min={0} step="0.01" name="amount" id="amount" defaultValue="28.4" className="form-control" required fdprocessedid="mj9kql" />
    </div>
  </div>
  <div className="form-group row">
    <label className="col-sm-3 col-from-label" htmlFor="payment_option">Payment method</label>
    <div className="col-sm-9">
      <select name="payment_option" id="payment_option" className="form-control demo-select2-placeholder" required fdprocessedid="vty4a8">
        <option value>Select Payment Method</option>
        <option value="cash">Cash</option>
        <option value="bank_payment">Bank Payment</option>
      </select>
    </div>
  </div>
</div>

        
   
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancle
          </Button>
          <Button variant="success" onClick={handleClose}>
            Pay
          </Button>
        </Modal.Footer>
      </Modal>
                      <a
                        onClick={handleShow2}
                        className="btn btn-soft-success btn-icon btn-circle btn-sm"
                        href="javascript:void(0);"
                        title="Message View"
                      >
                        <i className="las la-eye" />
                      </a>
                      <Modal dialogClassName="seller-msg-moddle" show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Seller Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="from-group row">
  <div className="col-lg-2">
    <label>Message</label>
  </div>
  <div className="col-lg-10">
    <textarea name="meta_description" rows={8} className="form-control" defaultValue={"Please send us t payment."} />
  </div>
</div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
                      <Link
                        to="/admin/seller/payment-show"
                        className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                        title="Payment History"
                      >
                        <i className="las la-history" />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="aiz-pagination"></div>
            </div>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
          {/*p class="mb-0">&copy;  v6.3.3</p*/}
        </div>
      </div>
    </>
  );
}
export default PayoutRequest;
