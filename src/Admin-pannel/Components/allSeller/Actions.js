import { useState } from "react"
import { GiBanknote } from "react-icons/gi"
import { HiAnnotation } from "react-icons/hi"
import { RxCross1 } from "react-icons/rx"
import { Link } from "react-router-dom"
import ListPayment from "./ListPayment"
import AddPayments from "./AddPayments"
import { AiOutlineUnorderedList } from "react-icons/ai"
import { MdAddShoppingCart } from "react-icons/md"
import DeleveryAdd from "./DeleveryAdd"
import ListDelevery from "./ListDelevery"

function Actions({ item, deleteOrderData }) {

    const [modalShowPay, setModalShowPay] = useState(false);
    const [DelmodalShow, setDelModalShow] = useState(false);
    const [ListDmodalShow, setListDModalShow] = useState(false);

    const [state, setState] = useState(false)
    const [modalShow, setModalShow] = useState(false);

    return <div style={{ position: "relative" }}>
        {state && <div className="actionBtn">
            <div style={{ display: "flex", justifyContent: "end" }} onClick={() => setState(false)}><RxCross1 /></div>
            <div>
                <Link
                    className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2"
                    to={`/admin/all_orders/order-Details/${item._id}`}
                    title="View"
                >
                    <i className="las la-eye" />
                </Link>
                <Link to={`/admin/all_orders/order-Details/${item._id}`}>
                    View
                </Link>

            </div>

            <div>
                <button type="button" onClick={() => deleteOrderData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm" title="delete">
                    <i className="las la-trash" />
                </button>
                <div style={{ marginLeft: "8px", cursor: "pointer" }} onClick={() => deleteOrderData(item._id)}>Delete</div>
            </div>

            <div>
                <div className="rountStr">
                    <GiBanknote />
                </div>
                <div style={{ marginLeft: "8px", cursor: "pointer" }} onClick={() => setModalShow(true)}>View Payments</div>

                {modalShow && <ListPayment
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    item={item._id}
                />}
            </div>

            <div>
                <div className="rountStr">
                    <HiAnnotation />
                </div>
                <div style={{ marginLeft: "8px", cursor: "pointer" }} onClick={() => setModalShowPay(true)}>Add Payment</div>


                {modalShowPay && <AddPayments
                    show={modalShowPay}
                    onHide={() => setModalShowPay(false)}
                    item={item}
                />}
            </div>

            <div style={{ marginLeft: "2px", cursor: "pointer" }} onClick={() => setDelModalShow(true)}>
                <div className="rountStr" style={{ marginRight: "5px" }}>
                    <MdAddShoppingCart />
                </div>
                Add Delivered
            </div>


            {DelmodalShow && <DeleveryAdd
                show={DelmodalShow}
                onHide={() => setDelModalShow(false)}
                item={item}
            />}




            <div style={{ marginLeft: "2px", cursor: "pointer" }} onClick={() => setListDModalShow(true)}>
                <div className="rountStr" style={{ marginRight: "5px" }}>
                    <AiOutlineUnorderedList />
                </div>
                List Delivered
            </div>

            {ListDmodalShow && <ListDelevery
                show={ListDmodalShow}
                onHide={() => setListDModalShow(false)}
                id={item._id}
            />}



        </div>}

        <div className="actionBtns" onClick={() => setState(!state)}>
            Action
        </div>
    </div>
}
export default Actions