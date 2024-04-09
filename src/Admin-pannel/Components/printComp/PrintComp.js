import React, { useEffect, useState } from "react";
// import './AddPosComp.css';
import './PrintComp.css';
import { useGetPOSUserDetailIdQuery } from "../all-products/allproductsApi/allProductsApi";
import axios from "axios";

export const ComponentToPrint = React.forwardRef((props, ref) => {
    // const [sellerDetailD, setSellerDetailD] = useState();
    const { totalPosProductsPrice, showCombo, bringedOrderTaxVal, bringedDiscountVal, viewCustomerD, cutomerId, sellerDetailD, finalpaymentResponseD } = props;

    const calculatedOrderTaxAmount = totalPosProductsPrice * bringedOrderTaxVal?.order_tax / 100;
    const calculatedFinalTotalPayableAmount = totalPosProductsPrice + calculatedOrderTaxAmount - bringedDiscountVal.discount;
    const token = window.localStorage.getItem('token');
    // const sellerID = window.localStorage.getItem('isSellerId');
    // const isSellerLogin = window.localStorage.getItem("isSellerLogin");

    const { isLoading, data: CustomerDetailData } = useGetPOSUserDetailIdQuery({ id: cutomerId, token: token });

    console.log('CustomerDetailData---PrintCOmp--', CustomerDetailData)
    console.log('showCombo---PrintCOmp---', showCombo)

    // const getSellerdetailDataForAdmin = () => {
    //     const res = axios.get(`https://stagingapi.mshfdc.co.in/api/sellerList/${sellerID}`, {
    //         headers: {
    //             'Authorization': `Bearer ${token}`
    //         }
    //     });
    //     console.log('SellerDetailForAdmin--', res?.data)
    //     // setSellerDetailD(res?.data)
    // };

    // const getSellerdetailDataForSeller = () => {
    //     const res = axios.get(`https://stagingapi.mshfdc.co.in/api/sellerList/${sellerID}`, {
    //         headers: {
    //             'Authorization': `Bearer ${token}`
    //         }
    //     });
    //     console.log('SellerDetailForSeller--', res?.data)
    //     // setSellerDetailD(res?.data)
    // };

    // useEffect(() => {
    //     if (isSellerLogin) {
    //         getSellerdetailDataForSeller();
    //     } else {
    //         getSellerdetailDataForAdmin();
    //     }
    // }, []);


    return (
        <>
            {/* <div ref={ref} className="p-5">
                <h1 style={{ textAlign: 'center' }}>Mamas Seller</h1>
                <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Bill</h2>

                <div className="text-left custo-info">
                   
                    <img style={{ width: '150px', height: '150px', marginRight: '20px' }} src={CustomerDetailData?.profilePhoto?.url}></img>
                   
                    <p>Customer Name: <spana>{CustomerDetailData?.firstname + " " + CustomerDetailData?.lastname}</spana></p>
                   
                    <p>Email: <spana>{CustomerDetailData?.email}</spana></p>
                 
                    <p>Phone No: <spana>{CustomerDetailData?.mobile}</spana></p>
                </div>

                <table className="table big-font">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Variant</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showCombo && showCombo?.cart?.products.map((item, i) => {
                            return <tr key={i}>
                                <td className='txt-bold ps-1' style={{ display: 'table-cell' }}>{i + 1}</td>
                                <td style={{ display: 'table-cell' }}>
                                    <span className='txt-bold ps-1'>{item?.productName}</span>
                                </td>
                                <td style={{ display: 'table-cell' }}>
                                    {item.variant.weight}
                                </td>
                                <td className='txt-bold ps-1 text-end' style={{ display: 'table-cell' }}>{item?.sale_rate}</td>
                                <td className='txt-bold ps-1 text-end' style={{ display: 'table-cell' }}>{item?.qty}</td>
                                <td className='txt-bold ps-1 text-end' style={{ display: 'table-cell' }}>{item?.subtotal}</td>
                                
                            </tr>
                        })}

                    </tbody>
                </table>
                <div className="text-right">
                    <h1>Total : {totalPosProductsPrice}</h1>
                    <h1>Order tax : {bringedOrderTaxVal.order_tax} %</h1>
                    <h1>Discount : {bringedDiscountVal.discount}</h1>
                    <h1>Total Payable Amount : {calculatedFinalTotalPayableAmount}</h1>
                </div>
            </div> */}



            <div ref={ref} style={{ fontfamily: 'arial, sans-serif', width: '100%', margin: '0 auto', border: '1px solid gray' }} classname="">

                <div className="comp-logo-wrapper">
                    <div className="log-secs">
                        {/* <img className="logo-image" src={CustomerDetailData?.profilePhoto?.url} alt="logo" /> */}
                        <img className="logo-image" src="https://evehicleform.mshfdc.co.in/static/media/logo-removebg-preview.89aa6ca988e65059e9ff.png" alt="logo" />
                        <span className="comp-name">{sellerDetailD && sellerDetailD?.firstname + " " + sellerDetailD?.lastname}</span>
                    </div>
                    <div className="comp-info-sec">
                        {/* <p className="info-text">Office No 102, Bin Alshaikh Holding, Bank Street, Maharashtra, India</p> */}
                        <p className="info-text">{`Office No 124 ${sellerDetailD?.addressLine1 + " " + sellerDetailD?.city + " " + sellerDetailD?.state + " " + sellerDetailD?.country}`}</p>
                        <p className="info-text">Mobile: {sellerDetailD?.mobile}</p>
                        <p className="info-text">Website: https://macautoindia.com</p>
                    </div>
                </div>

                <div className="invoice-details" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', padding: '0 10px', backgroundColor: 'gray', color: '#fff' }}>
                    <div className="invoice" style={{ padding: '5px 0' }}>
                        <h6 style={{ color: '#fff' }}><strong>Invoice Number:</strong>
                            {finalpaymentResponseD?.order_invoiceNo}
                        </h6>
                        <h6 style={{ color: '#fff' }}><strong>Order No:</strong>
                            {finalpaymentResponseD?.order_referenceNo}
                        </h6>
                        <h6 style={{ color: '#fff' }}><strong>Order Date:</strong>
                            {finalpaymentResponseD?.order_invoiceDate}
                        </h6>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="billing-address" style={{ display: 'flex', justifyContent: 'space-between', padding: 0 }}>
                        <div style={{ padding: 0, flex: 1 }}>
                            <h5 style={{ backgroundColor: 'gray', color: '#fff', padding: 10 }}>Ship To:</h5>
                            <ul>
                                <li>
                                    <strong>Name:</strong>
                                    <span>
                                        <span>
                                            {CustomerDetailData?.firstname + " " + CustomerDetailData?.lastname}
                                        </span>
                                    </span>
                                </li>
                                <li>
                                    <strong>Address Line 1:</strong>
                                    <span>
                                        <span>
                                            Maharashtra
                                        </span>
                                    </span>
                                </li>
                                <li>
                                    <strong>City:</strong>
                                    <span>
                                        Maharashtra
                                    </span>
                                </li>
                                <li>
                                    <strong>Country:</strong>
                                    <span>
                                        India
                                    </span>
                                </li>
                                <li>
                                    <strong>Email:</strong>
                                    <span>
                                        {CustomerDetailData?.email}
                                    </span>
                                </li>
                                <li>
                                    <strong>Phone:</strong>
                                    <span>
                                        {CustomerDetailData?.mobile}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div style={{ padding: 0, flex: 1 }}>
                            <h5 style={{ backgroundColor: 'gray', color: '#fff', padding: 10 }}>Payment Method:</h5>
                            <ul>
                                <li>
                                    <span>
                                        <span>
                                            Cash on Delivery
                                        </span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="print-comp-table-sec" style={{ padding: 10 }}>
                        Discount value
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Variant</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {showCombo && showCombo?.cart?.products.map((item, i) => {
                                    return <tr key={i}>
                                        <td className='txt-bold ps-1' style={{ display: 'table-cell' }}>{i + 1}</td>
                                        <td style={{ display: 'table-cell' }}>
                                            <span className='txt-bold ps-1'>{item?.productName}</span>
                                        </td>
                                        <td style={{ display: 'table-cell' }}>
                                            {item.variant.weight}
                                        </td>
                                        <td className='txt-bold ps-1 text-end' style={{ display: 'table-cell' }}>{item?.sale_rate}</td>
                                        <td className='txt-bold ps-1 text-end' style={{ display: 'table-cell' }}>{item?.qty}</td>
                                        <td className='txt-bold ps-1 text-end' style={{ display: 'table-cell' }}>{item?.subtotal}</td>

                                    </tr>
                                })}
                            </tbody>

                            <tr>
                                <th colSpan={4}>Sub Total</th>
                                <td colSpan={3}>{showCombo?.cart?.subTotal}</td>
                            </tr>
                            <tr> <td style={{ padding: 5 }} /> </tr>
                            <tr>
                                <th colSpan={4}>Shipping and Handling</th>
                                <td colSpan={3}>00</td>
                            </tr>
                            <tr> <td style={{ padding: 5 }} /> </tr>
                            <tr>
                                <th colSpan={4}>Grand Total</th>
                                {/* <td colSpan={3}>{calculatedFinalTotalPayableAmount}</td> */}
                                <td colSpan={3}>{showCombo?.cart?.grandTotal}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
});