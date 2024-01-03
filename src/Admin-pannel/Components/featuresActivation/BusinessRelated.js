function BusinessRelated() {
    return (
        <>
            <h4 className="text-center text-muted mt-4">Business Related</h4>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Vendor System Activation</h3>
                        </div>
                        <div className="card-body text-center">
                            <label className="aiz-switch aiz-switch-success mb-0">
                                <input type="checkbox" onchange="updateSettings(this, 'vendor_system_activation')" defaultChecked />
                                <span className="slider round" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Classified Product</h3>
                        </div>
                        <div className="card-body text-center">
                            <label className="aiz-switch aiz-switch-success mb-0">
                                <input type="checkbox" onchange="updateSettings(this, 'classified_product')" />
                                <span className="slider round" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Wallet System Activation</h3>
                        </div>
                        <div className="card-body text-center">
                            <label className="aiz-switch aiz-switch-success mb-0">
                                <input type="checkbox" onchange="updateSettings(this, 'wallet_system')" defaultChecked />
                                <span className="slider round" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Coupon System Activation</h3>
                        </div>
                        <div className="card-body text-center">
                            <label className="aiz-switch aiz-switch-success mb-0">
                                <input type="checkbox" onchange="updateSettings(this, 'coupon_system')" defaultChecked />
                                <span className="slider round" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Pickup Point Activation</h3>
                        </div>
                        <div className="card-body text-center">
                            <label className="aiz-switch aiz-switch-success mb-0">
                                <input type="checkbox" onchange="updateSettings(this, 'pickup_point')" defaultChecked />
                                <span className="slider round" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Conversation Activation</h3>
                        </div>
                        <div className="card-body text-center">
                            <label className="aiz-switch aiz-switch-success mb-0">
                                <input type="checkbox" onchange="updateSettings(this, 'conversation_system')" defaultChecked />
                                <span className="slider round" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Seller Product Manage By Admin</h3>
                        </div>
                        <div className="card-body text-center">
                            <label className="aiz-switch aiz-switch-success mb-0">
                                <input type="checkbox" onchange="updateSettings(this, 'product_manage_by_admin')" defaultChecked />
                                <span className="slider round" />
                            </label>
                            <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                After activate this option Cash On Delivery of Seller product will be managed by Admin.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Admin Approval On Seller Product</h3>
                        </div>
                        <div className="card-body text-center">
                            <label className="aiz-switch aiz-switch-success mb-0">
                                <input type="checkbox" onchange="updateSettings(this, 'product_approve_by_admin')" defaultChecked />
                                <span className="slider round" />
                            </label>
                            <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                After activate this option, Admin approval need to seller product.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Email Verification</h3>
                        </div>
                        <div className="card-body text-center">
                            <label className="aiz-switch aiz-switch-success mb-0">
                                <input type="checkbox" onchange="updateSettings(this, 'email_verification')" />
                                <span className="slider round" />
                            </label>
                            <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                You need to configure SMTP correctly to enable this feature. <a href="https://mmslfashions.in/admin/smtp-settings">Configure Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Product Query Activation</h3>
                        </div>
                        <div className="card-body text-center">
                            <label className="aiz-switch aiz-switch-success mb-0">
                                <input type="checkbox" onchange="updateSettings(this, 'product_query_activation')" defaultChecked />
                                <span className="slider round" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Wholesale Product for Seller</h3>
                        </div>
                        <div className="card-body text-center">
                            <label className="aiz-switch aiz-switch-success mb-0">
                                <input type="checkbox" onchange="updateSettings(this, 'seller_wholesale_product')" defaultChecked />
                                <span className="slider round" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Auction Product for Seller</h3>
                        </div>
                        <div className="card-body text-center">
                            <label className="aiz-switch aiz-switch-success mb-0">
                                <input type="checkbox" onchange="updateSettings(this, 'seller_auction_product')" defaultChecked />
                                <span className="slider round" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BusinessRelated