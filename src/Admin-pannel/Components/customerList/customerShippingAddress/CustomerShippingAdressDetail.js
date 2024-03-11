import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCustomerShippingAdressByIdQuery } from '../../all-products/allproductsApi/allProductsApi';
import './CustomerShippingAdressDetail.css';

function CustomerShippingAdressDetail() {
    const params = useParams()

    const { data } = useGetCustomerShippingAdressByIdQuery(params.id);
    console.log(data)

    return (
        <>
            <div className='container'>

                <div className='adress_wrapper'>
                    <h4>Customer Shipping Adress Detail</h4>
                    <div className="row">
                        <div className='col-lg-6 add-detail'>
                            <div className='addres'>
                                <div className='add-name-wrapper'>
                                    <h6>Country:</h6> <span>delhi</span>
                                </div>
                                <div className='add-name-wrapper'>
                                    <h6>State:</h6> <span>delhi</span>
                                </div>
                                <div className='add-name-wrapper'>
                                    <h6>City:</h6> <span>delhi</span>
                                </div>
                                <div className='add-name-wrapper'>
                                    <h6>Zip:</h6> <span>delhi</span>
                                </div>
                                <div className='add-name-wrapper'>
                                    <h6>Address Lane 1:</h6> <span>delhi</span>
                                </div>
                                <div className='add-name-wrapper'>
                                    <h6>Address Lane 2:</h6> <span>delhi</span>
                                </div>
                                <div className='add-name-wrapper'>
                                    <h6>Land Mark:</h6> <span>delhi</span>
                                </div>
                                <div className='add-name-wrapper'>
                                    <h6>Province:</h6> <span>delhi</span>
                                </div>
                                <div className='add-name-wrapper'>
                                    <h6>Phone:</h6> <span>delhi</span>
                                </div>
                                <div className='add-name-wrapper'>
                                    <h6>Email:</h6> <span>delhi</span>
                                </div>

                            </div>
                        </div>




                    </div>
                </div>
            </div>

        </>
    )
}

export default CustomerShippingAdressDetail