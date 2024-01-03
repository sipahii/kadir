import React from 'react'
import PaymentConfiguration from './PaymentConfiguration'
import NotificationConfiguration from './NotificationConfiguration'
import PickupLocationForDeliveryBoy from './PickupLocationForDeliveryBoy'

function DeliveryBoyConfiguration() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <PaymentConfiguration />
                        <NotificationConfiguration />
                    </div>


                    <div className="row">
                        <PickupLocationForDeliveryBoy />

                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>
        </>
    )
}

export default DeliveryBoyConfiguration