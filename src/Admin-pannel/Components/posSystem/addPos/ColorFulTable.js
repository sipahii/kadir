import React, { useState } from 'react'
import Suspend from './Suspend'
import Order from './Order'
import Payment from './Payment'
import Cancel from './Cancel'
import Bill from './Bill'

function ColorFulTable({ showCombo, totalPosProductsPrice, bringedDiscountVal, bringedOrderTaxVal, totalPosProductsItem, viewCustomerD, cutomerId, sellerDetailD }) {
    const [finalpaymentResponseD, setFinalpaymentResponseD] = useState();

    const bringPaymnetresponseData = (paymentResponseD) => {
        setFinalpaymentResponseD(paymentResponseD)
    }

    return (
        <>
            <table className='colorfulTable'>
                <tr>
                    <Suspend />
                    <Order />
                    <Payment showCombo={showCombo} totalPosProductsPrice={totalPosProductsPrice} bringedDiscountVal={bringedDiscountVal} bringedOrderTaxVal={bringedOrderTaxVal} totalPosProductsItem={totalPosProductsItem} viewCustomerD={viewCustomerD} bringPaymnetresponseData={bringPaymnetresponseData} />
                </tr>
                <tr>
                    <Cancel />
                    <Bill showCombo={showCombo} totalPosProductsPrice={totalPosProductsPrice} bringedDiscountVal={bringedDiscountVal} bringedOrderTaxVal={bringedOrderTaxVal} viewCustomerD={viewCustomerD} cutomerId={cutomerId} sellerDetailD={sellerDetailD} finalpaymentResponseD={finalpaymentResponseD} />
                </tr>
            </table>
        </>
    )
}

export default ColorFulTable 