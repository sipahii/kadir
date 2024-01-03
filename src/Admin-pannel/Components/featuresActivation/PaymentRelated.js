function PaymentRelated() {
    return (
        <>
            <h4 className="text-center text-muted mt-4">Payment Related</h4>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header text-center bord-btm">
                            <h3 className="mb-0 h6 text-center">Paypal Payment Activation</h3>
                        </div>
                        <div className="card-body">
                            <div className="clearfix">
                                <img className="float-left" src="https://mmslfashions.in/public/assets/img/cards/paypal.png" height={30} />
                                <label className="aiz-switch aiz-switch-success mb-0 float-right">
                                    <input type="checkbox" onchange="updateSettings(this, 'paypal_payment')" />
                                    <span className="slider round" />
                                </label>
                            </div>
                            <div className="alert text-center" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                You need to configure Paypal correctly to enable this feature. <a href="https://mmslfashions.in/admin/payment-method">Configure Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Stripe Payment Activation</h3>
                        </div>
                        <div className="card-body text-center">
                            <div className="clearfix">
                                <img className="float-left" src="https://mmslfashions.in/public/assets/img/cards/stripe.png" height={30} />
                                <label className="aiz-switch aiz-switch-success mb-0 float-right">
                                    <input type="checkbox" onchange="updateSettings(this, 'stripe_payment')" />
                                    <span className="slider round" />
                                </label>
                            </div>
                            <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                You need to configure Stripe correctly to enable this feature. <a href="https://mmslfashions.in/admin/payment-method">Configure Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Mercadopago Payment Activation</h3>
                        </div>
                        <div className="card-body text-center">
                            <div className="clearfix">
                                <img className="float-left" src="https://mmslfashions.in/public/assets/img/cards/mercadopago.png" height={30} />
                                <label className="aiz-switch aiz-switch-success mb-0 float-right">
                                    <input type="checkbox" onchange="updateSettings(this, 'mercadopago_payment')" />
                                    <span className="slider round" />
                                </label>
                            </div>
                            <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                You need to configure Mercadopago correctly to enable this feature. <a href="https://mmslfashions.in/admin/payment-method">Configure Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">SSlCommerz Activation</h3>
                        </div>
                        <div className="card-body text-center">
                            <div className="clearfix">
                                <img className="float-left" src="https://mmslfashions.in/public/assets/img/cards/sslcommerz.png" height={30} />
                                <label className="aiz-switch aiz-switch-success mb-0 float-right">
                                    <input type="checkbox" onchange="updateSettings(this, 'sslcommerz_payment')" />
                                    <span className="slider round" />
                                </label>
                            </div>
                            <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                You need to configure SSlCommerz correctly to enable this feature. <a href="https://mmslfashions.in/admin/payment-method">Configure Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Instamojo Payment Activation</h3>
                        </div>
                        <div className="card-body text-center">
                            <div className="clearfix">
                                <img className="float-left" src="https://mmslfashions.in/public/assets/img/cards/instamojo.png" height={30} />
                                <label className="aiz-switch aiz-switch-success mb-0 float-right">
                                    <input type="checkbox" onchange="updateSettings(this, 'instamojo_payment')" />
                                    <span className="slider round" />
                                </label>
                            </div>
                            <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                You need to configure Instamojo Payment correctly to enable this feature. <a href="https://mmslfashions.in/admin/payment-method">Configure Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Razor Pay Activation</h3>
                        </div>
                        <div className="card-body text-center">
                            <div className="clearfix">
                                <img className="float-left" src="https://mmslfashions.in/public/assets/img/cards/rozarpay.png" height={30} />
                                <label className="aiz-switch aiz-switch-success mb-0 float-right">
                                    <input type="checkbox" onchange="updateSettings(this, 'razorpay')" />
                                    <span className="slider round" />
                                </label>
                            </div>
                            <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                You need to configure Razor correctly to enable this feature. <a href="https://mmslfashions.in/admin/payment-method">Configure Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">PayStack Activation</h3>
                        </div>
                        <div className="card-body text-center">
                            <div className="clearfix">
                                <img className="float-left" src="https://mmslfashions.in/public/assets/img/cards/paystack.png" height={30} />
                                <label className="aiz-switch aiz-switch-success mb-0 float-right">
                                    <input type="checkbox" onchange="updateSettings(this, 'paystack')" />
                                    <span className="slider round" />
                                </label>
                            </div>
                            <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                You need to configure PayStack correctly to enable this feature. <a href="https://mmslfashions.in/admin/payment-method">Configure Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">VoguePay Activation</h3>
                        </div>
                        <div className="card-body text-center">
                            <div className="clearfix">
                                <img className="float-left" src="https://mmslfashions.in/public/assets/img/cards/vogue.png" height={30} />
                                <label className="aiz-switch aiz-switch-success mb-0 float-right">
                                    <input type="checkbox" onchange="updateSettings(this, 'voguepay')" />
                                    <span className="slider round" />
                                </label>
                            </div>
                            <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                You need to configure VoguePay correctly to enable this feature. <a href="https://mmslfashions.in/admin/payment-method">Configure Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Payhere Activation</h3>
                        </div>
                        <div className="card-body text-center">
                            <div className="clearfix">
                                <img className="float-left" src="https://mmslfashions.in/public/assets/img/cards/payhere.png" height={30} />
                                <label className="aiz-switch aiz-switch-success mb-0 float-right">
                                    <input type="checkbox" onchange="updateSettings(this, 'payhere')" />
                                    <span className="slider round" />
                                </label>
                            </div>
                            <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                You need to configure Payhere correctly to enable this feature. <a href="https://mmslfashions.in/admin/payment-method">Configure Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Ngenius Activation</h3>
                        </div>
                        <div className="card-body text-center">
                            <div className="clearfix">
                                <img className="float-left" src="https://mmslfashions.in/public/assets/img/cards/ngenius.png" height={30} />
                                <label className="aiz-switch aiz-switch-success mb-0 float-right">
                                    <input type="checkbox" onchange="updateSettings(this, 'ngenius')" />
                                    <span className="slider round" />
                                </label>
                            </div>
                            <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                You need to configure Ngenius correctly to enable this feature. <a href="https://mmslfashions.in/admin/payment-method">Configure Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Iyzico Activation</h3>
                        </div>
                        <div className="card-body text-center">
                            <div className="clearfix">
                                <img className="float-left" src="https://mmslfashions.in/public/assets/img/cards/iyzico.png" height={30} />
                                <label className="aiz-switch aiz-switch-success mb-0 float-right">
                                    <input type="checkbox" onchange="updateSettings(this, 'iyzico')" defaultChecked />
                                    <span className="slider round" />
                                </label>
                            </div>
                            <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                You need to configure iyzico correctly to enable this feature. <a href="https://mmslfashions.in/admin/payment-method">Configure Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Bkash Activation</h3>
                        </div>
                        <div className="card-body text-center">
                            <div className="clearfix">
                                <img className="float-left" src="https://mmslfashions.in/public/assets/img/cards/bkash.png" height={30} />
                                <label className="aiz-switch aiz-switch-success mb-0 float-right">
                                    <input type="checkbox" onchange="updateSettings(this, 'bkash')" />
                                    <span className="slider round" />
                                </label>
                            </div>
                            <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                You need to configure bkash correctly to enable this feature. <a href="https://mmslfashions.in/admin/payment-method">Configure Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Nagad Activation</h3>
                        </div>
                        <div className="card-body text-center">
                            <div className="clearfix">
                                <img className="float-left" src="https://mmslfashions.in/public/assets/img/cards/nagad.png" height={30} />
                                <label className="aiz-switch aiz-switch-success mb-0 float-right">
                                    <input type="checkbox" onchange="updateSettings(this, 'nagad')" />
                                    <span className="slider round" />
                                </label>
                            </div>
                            <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                You need to configure nagad correctly to enable this feature. <a href="https://mmslfashions.in/admin/payment-method">Configure Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Proxy Pay Activation</h3>
                        </div>
                        <div className="card-body text-center">
                            <div className="clearfix">
                                <img className="float-left" src="https://mmslfashions.in/public/assets/img/cards/proxypay.png" height={30} />
                                <label className="aiz-switch aiz-switch-success mb-0 float-right">
                                    <input type="checkbox" onchange="updateSettings(this, 'proxypay')" defaultChecked />
                                    <span className="slider round" />
                                </label>
                            </div>
                            <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                You need to configure proxypay correctly to enable this feature. <a href="https://mmslfashions.in/admin/payment-method">Configure Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Amarpay Activation</h3>
                        </div>
                        <div className="card-body text-center">
                            <div className="clearfix">
                                <img className="float-left" src="https://mmslfashions.in/public/assets/img/cards/aamarpay.png" height={30} />
                                <label className="aiz-switch aiz-switch-success mb-0 float-right">
                                    <input type="checkbox" onchange="updateSettings(this, 'aamarpay')" />
                                    <span className="slider round" />
                                </label>
                            </div>
                            <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                You need to configure amarpay correctly to enable this feature. <a href="https://mmslfashions.in/admin/payment-method">Configure Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Authorize Net Activation</h3>
                        </div>
                        <div className="card-body text-center">
                            <div className="clearfix">
                                <img className="float-left" src="https://mmslfashions.in/public/assets/img/cards/authorizenet.png" height={30} />
                                <label className="aiz-switch aiz-switch-success mb-0 float-right">
                                    <input type="checkbox" onchange="updateSettings(this, 'authorizenet')" />
                                    <span className="slider round" />
                                </label>
                            </div>
                            <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                You need to configure authorize net correctly to enable this feature. <a href="https://mmslfashions.in/admin/payment-method">Configure Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Payku Activation</h3>
                        </div>
                        <div className="card-body text-center">
                            <div className="clearfix">
                                <img className="float-left" src="https://mmslfashions.in/public/assets/img/cards/payku.png" height={30} />
                                <label className="aiz-switch aiz-switch-success mb-0 float-right">
                                    <input type="checkbox" onchange="updateSettings(this, 'payku')" />
                                    <span className="slider round" />
                                </label>
                            </div>
                            <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                You need to configure payku net correctly to enable this feature. <a href="https://mmslfashions.in/admin/payment-method">Configure Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Cash Payment Activation</h3>
                        </div>
                        <div className="card-body text-center">
                            <div className="clearfix">
                                <img className="float-left" src="https://mmslfashions.in/public/assets/img/cards/cod.png" height={30} />
                                <label className="aiz-switch aiz-switch-success mb-0 float-right">
                                    <input type="checkbox" onchange="updateSettings(this, 'cash_payment')" defaultChecked />
                                    <span className="slider round" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PaymentRelated;