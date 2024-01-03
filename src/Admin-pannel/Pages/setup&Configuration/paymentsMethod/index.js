import React from 'react'
import AmarPayCredential from '../../../Components/setup&Configuration/paymentsMethod/AmarPayCredential';
import AuthorizeNetCredential from '../../../Components/setup&Configuration/paymentsMethod/AuthorizeNetCredential';
import BkashCredential from '../../../Components/setup&Configuration/paymentsMethod/BkashCredential';
import InstamojoCredential from '../../../Components/setup&Configuration/paymentsMethod/InstamojoCredential';
import IzicoCredential from '../../../Components/setup&Configuration/paymentsMethod/IzicoCredential';
import MercadopagoCredential from '../../../Components/setup&Configuration/paymentsMethod/MercadopagoCredential';
import NagadCredential from '../../../Components/setup&Configuration/paymentsMethod/NagadCredentials';
import NgeniusCredential from '../../../Components/setup&Configuration/paymentsMethod/NgeniusCredential';
import PayhereCredential from '../../../Components/setup&Configuration/paymentsMethod/PayhereCredential';
import Payku from '../../../Components/setup&Configuration/paymentsMethod/Payku';
import PaypalCredential from '../../../Components/setup&Configuration/paymentsMethod/PaypalCredential';
import PaystackCredential from '../../../Components/setup&Configuration/paymentsMethod/PaystackCredential';
import RazorPayCredential from '../../../Components/setup&Configuration/paymentsMethod/RazorPayCredential';
import SslcommerzCredential from '../../../Components/setup&Configuration/paymentsMethod/SslcommerzCredential';
import StripeCredential from '../../../Components/setup&Configuration/paymentsMethod/StripeCredential';
import VoguePayCredential from '../../../Components/setup&Configuration/paymentsMethod/VoguePayCredential';

function PaymentsMethodPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <PaypalCredential />
                        <StripeCredential />
                        <MercadopagoCredential />
                        <BkashCredential />
                        <NagadCredential />
                        <SslcommerzCredential />
                        <AmarPayCredential />
                        <IzicoCredential />
                        <InstamojoCredential />
                        <PaystackCredential />
                        <PayhereCredential />
                        <NgeniusCredential />
                        <VoguePayCredential />
                        <RazorPayCredential />
                        <AuthorizeNetCredential />
                        <Payku />
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>

        </>
    )
}
export default PaymentsMethodPage;