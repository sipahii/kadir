import React from 'react'
import Suspend from './Suspend'
import Order from './Order'
import Payment from './Payment'
import Cancel from './Cancel'
import Bill from './Bill'

function ColorFulTable({ showCombo, totalPosProductsPrice, bringedDiscountVal, bringedOrderTaxVal, totalPosProductsItem, viewCustomerD }) {
    return (
        <>
            <table className='colorfulTable'>
                <tr>
                    <Suspend />
                    <Order />
                    <Payment showCombo={showCombo} totalPosProductsPrice={totalPosProductsPrice} bringedDiscountVal={bringedDiscountVal} bringedOrderTaxVal={bringedOrderTaxVal} totalPosProductsItem={totalPosProductsItem} viewCustomerD={viewCustomerD} />
                </tr>
                <tr>
                    <Cancel />
                    <Bill showCombo={showCombo} totalPosProductsPrice={totalPosProductsPrice} bringedDiscountVal={bringedDiscountVal} bringedOrderTaxVal={bringedOrderTaxVal} viewCustomerD={viewCustomerD} />
                </tr>
            </table>
        </>
    )
}

export default ColorFulTable 