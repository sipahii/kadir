import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImFilePicture } from 'react-icons/im';
import { SlCalender } from 'react-icons/sl';
import { FaRupeeSign } from 'react-icons/fa';

function ProfitLossReport() {
    return (
        <>
            <div className="aiz-main-content">
                <section className='profit_loss_main_wrapper'>
                    {/* <div className='row'> */}
                    <div className='d-flex' style={{ borderBottom: '1px solid #dbdee0' }}>
                        <div className='col-lg-8 d-flex' style={{ borderRight: '1px solid #dbdee0' }}>
                            <div className='logo_box'>
                                <GiHamburgerMenu />
                            </div>
                            <div className='profit_loss_text'>
                                Profit and/or Loss
                            </div>
                        </div>
                        <div className='col-lg-4 image_date_box'>
                            <div className='image_dwnld_Sec'>
                                <ImFilePicture />
                            </div>
                            <div className='image_date_Sec'>
                                <SlCalender />
                                <span> 01/05/2023 00:00 - 17/05/2023 10:19</span>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                    <div className='prof_loss_heading'>
                        Please view the Profit and/or Loss report and you can select the date range to customized the report.
                    </div>
                    <div className='proit_loss_banner_sec'>
                        <div className='upper_box_wrapper d-flex'>
                            <div className='col-lg-4 purchase_data'>
                                <div className='purchase_data_inner'>
                                    <div className='heading'>Purchases</div>
                                    <div className='bold'>0.00</div>
                                    <div className='purchases_qty'>0 Purchases</div>
                                    <div className='paid_tax'>0.00 Paid & 0.00 Tax</div>
                                </div>

                            </div>
                            <div className='col-lg-4 sales_data'>
                                <div className='sales_data_inner'>
                                    <div className='heading'>Sales</div>
                                    <div className='bold'><FaRupeeSign />400.00</div>
                                    <div className='purchases_qty'>1 Sales</div>
                                    <div className='paid_tax'>0.00 Paid & 0.00 Tax</div>
                                </div>
                            </div>
                            <div className='col-lg-4 return_data'>
                                <div className='return_data_inner'>
                                    <div className='heading'>Sales</div>
                                    <div className='bold'><FaRupeeSign />0.00</div>
                                    <div className='purchases_qty'>0 Returns</div>
                                    <div className='paid_tax'>0.00 Tax</div>
                                </div>
                            </div>
                        </div>

                        <div className='upper_box_wrapper d-flex'>
                            <div className='col-lg-6 sales_data'>
                                <div className='sales_data_inner'>
                                    <div className='heading'>Payment Recieved</div>
                                    <div className='bold'><FaRupeeSign />2,810.00</div>
                                    <div className='purchases_qty'>2 Recieved</div>
                                    <div className='paid_tax'>0.00 Cash , ₹1,810.00 Credit Card , ₹1,000.00 Cheque , 0.00 Paypal Pro , 0.00 Stripe</div>
                                </div>
                            </div>
                            <div className='col-lg-3 purchase_data'>
                                <div className='purchase_data_inner'>
                                    <div className='heading'>Payment Sent</div>
                                    <div className='bold'>0.00</div>
                                    <div className='purchases_qty'>0 Sent</div>
                                    <div className='paid_tax'>0.00 Paid & 0.00 Tax</div>
                                </div>

                            </div>

                            <div className='col-lg-3 expence_data'>
                                <div className='expence_data_inner'>
                                    <div className='heading'>Expenses</div>
                                    <div className='bold'><FaRupeeSign />0.00</div>
                                    <div className='purchases_qty'>0 Expenses</div>
                                    <div className='paid_tax'>0.00 Tax</div>
                                </div>
                            </div>
                        </div>


                        <div className='upper_box_wrapper d-flex'>
                            <div className='col-lg-4 return_data'>
                                <div className='return_data_inner'>
                                    <div className='heading'>Profit and/or Loss</div>
                                    <div className='bold'><FaRupeeSign />400.00</div>
                                    <div className='purchases_qty'>₹400.00 Sales - 0.00  Purchases</div>
                                    {/* <div className='paid_tax'>0.00 Tax</div> */}
                                </div>
                            </div>

                            <div className='col-lg-4 purchase_data'>
                                <div className='purchase_data_inner'>
                                    <div className='heading'>Payment Sent</div>
                                    <div className='bold'><FaRupeeSign />400.00</div>
                                    <div className='purchases_qty'>₹400.00 Sales - 0.00 Tax -0.00  Purchases</div>
                                    {/* <div className='paid_tax'>0.00 Paid & 0.00 Tax</div> */}
                                </div>

                            </div>

                            <div className='col-lg-4 prof_loss_bg_blue'>
                                <div className='prof_loss_bg_blue_inner'>
                                    <div className='heading'>Expenses</div>
                                    <div className='bold'><FaRupeeSign />0.00</div>
                                    <div className='purchases_qty'>0 Expenses</div>
                                    {/* <div className='paid_tax'>0.00 Tax</div> */}
                                </div>
                            </div>
                        </div>

                        <div className='payment_green_box'>
                            <div className='payment_green_box_inner'>
                                <div className='heading'>Payments</div>
                                <div className='bold'><FaRupeeSign />2,810.00</div>
                                <div className='purchases_qty'>₹2,810.00 Received - 0.00 Refund - 0.00 Sent - 0.00 Expenses - 0.00 Returns</div>
                            </div>
                        </div>

                        <div className='upper_box_wrapper d-flex'>
                            <div className='col-lg-4 bg_blue'>
                                <div className='bg_blue_inner'>
                                    <div className='heading'>The Wooden Handicrafts (WHI)</div>
                                    <div className='bold'><FaRupeeSign />0.00</div>
                                    <div className='purchases_qty'>Sales - Purchases - Returns</div>
                                </div>
                                <div className='bg_blue_inner'>
                                    <p>0.00 Sales - 0.00 Tax = 0.00 Net Sales</p>
                                    <p>0.00 Purchases - 0.00 Tax = 0.00 Net Purchases</p>
                                    <p>0.00 Returns - 0.00 Tax = 0.00 Net Returns</p>
                                </div>
                                <div className='bg_blue_inner'>
                                    <div className='bold'><FaRupeeSign />0.00</div>
                                    <div className='purchases_qty'>Net Sales - Net Purchases - Net Returns</div>
                                </div>
                                <div className='bg_blue_inner'>
                                    <div className='bold'><FaRupeeSign />0.00</div>
                                    <div className='purchases_qty'>0 Expenses</div>
                                </div>
                            </div>
                            <div className='col-lg-4 bg_blue'>
                                <div className='bg_blue_inner'>
                                    <div className='heading'>The Wooden Handicrafts (WHI)</div>
                                    <div className='bold'><FaRupeeSign />400.00</div>
                                    <div className='purchases_qty'>Sales - Purchases - Returns</div>
                                </div>
                                <div className='bg_blue_inner'>
                                    <p>0.00 Sales - 0.00 Tax = 0.00 Net Sales</p>
                                    <p>0.00 Purchases - 0.00 Tax = 0.00 Net Purchases</p>
                                    <p>0.00 Returns - 0.00 Tax = 0.00 Net Returns</p>
                                </div>
                                <div className='bg_blue_inner'>
                                    <div className='bold'><FaRupeeSign />400.00</div>
                                    <div className='purchases_qty'>Net Sales - Net Purchases - Net Returns</div>
                                </div>
                                <div className='bg_blue_inner'>
                                    <div className='bold'><FaRupeeSign />0.00</div>
                                    <div className='purchases_qty'>0 Expenses</div>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>

            </div>
        </>
    )
}

export default ProfitLossReport