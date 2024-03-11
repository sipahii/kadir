function PosConfigurationAdmin() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <h4 className="text-center text-muted">POS Activation for Seller</h4>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">POS Activation for Seller</h5>
                                </div>
                                <div className="card-body text-center">
                                    <label className="aiz-switch aiz-switch-success mb-0">
                                        <input type="checkbox" onchange="updateSettings(this, 'pos_activation_for_seller')" defaultChecked />
                                        <span className="slider round" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>

        </>
    )
}
export default PosConfigurationAdmin;