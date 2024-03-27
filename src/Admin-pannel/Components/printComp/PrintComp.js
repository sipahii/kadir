import React from "react";
import { useGetPOSUserDetailIdQuery } from "../all-products/allproductsApi/allProductsApi";

export const ComponentToPrint = React.forwardRef((props, ref) => {
    const { totalPosProductsPrice, showCombo, bringedOrderTaxVal, bringedDiscountVal, viewCustomerD, cutomerId } = props
    const calculatedOrderTaxAmount = totalPosProductsPrice * bringedOrderTaxVal?.order_tax / 100;
    const calculatedFinalTotalPayableAmount = totalPosProductsPrice + calculatedOrderTaxAmount - bringedDiscountVal.discount;

    const { isLoading, data: CustomerDetailData } = useGetPOSUserDetailIdQuery({ id: cutomerId, token: window.localStorage.getItem('token') });



    return (
        <div ref={ref} className="p-5">
            <h1 style={{ textAlign: 'center' }}>Mego Seller</h1>
            <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Bill</h2>

            <div className="text-left custo-info">
                {/* <img style={{ width: '150px', height: '150px', marginRight: '20px' }} src={viewCustomerD && viewCustomerD[0]?.profilePhoto?.url}></img> */}
                <img style={{ width: '150px', height: '150px', marginRight: '20px' }} src={CustomerDetailData?.profilePhoto?.url}></img>
                {/* <p>Customer Name: <spana>{viewCustomerD && viewCustomerD[0]?.firstname + " " + viewCustomerD && viewCustomerD[0]?.lastname}</spana></p> */}
                <p>Customer Name: <spana>{CustomerDetailData?.firstname + " " + CustomerDetailData?.lastname}</spana></p>
                {/* <p>Email: <spana>{viewCustomerD && viewCustomerD[0]?.email}</spana></p> */}
                <p>Email: <spana>{CustomerDetailData?.email}</spana></p>
                {/* <p>Phone No: <spana>{viewCustomerD && viewCustomerD[0]?.mobile}</spana></p> */}
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
                                {/* <span className='txt-bold ps-1'></span> */}{item.variant.weight}
                            </td>
                            <td className='txt-bold ps-1 text-end' style={{ display: 'table-cell' }}>{item?.sale_rate}</td>
                            <td className='txt-bold ps-1 text-end' style={{ display: 'table-cell' }}>{item?.qty}</td>
                            <td className='txt-bold ps-1 text-end' style={{ display: 'table-cell' }}>{item?.subtotal}</td>
                            {/* <td className='txt-bold ps-1' style={{ display: 'table-cell' }}></td> */}
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
        </div>
    );
});