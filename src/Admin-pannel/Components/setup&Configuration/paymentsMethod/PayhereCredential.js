function PayhereCredential() {
    return (
        <>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6 ">Payhere Credential</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                            <input type="hidden" name="_token" defaultValue="kXMve4kNuwpLskUZw6eQaBIihyAaanRjWMC2zCTA" />                        <input type="hidden" name="payment_method" defaultValue="payhere" />
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="PAYHERE_MERCHANT_ID" />
                                <div className="col-md-4">
                                    <label className="col-from-label">PAYHERE MERCHANT ID</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="PAYHERE_MERCHANT_ID" defaultValue placeholder="PAYHERE MERCHANT ID" required fdprocessedid="1p6xtv" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="PAYHERE_SECRET" />
                                <div className="col-md-4">
                                    <label className="col-from-label">PAYHERE SECRET</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="PAYHERE_SECRET" defaultValue placeholder="PAYHERE SECRET" required fdprocessedid="9py7o4" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="PAYHERE_CURRENCY" />
                                <div className="col-md-4">
                                    <label className="col-from-label">PAYHERE CURRENCY</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="PAYHERE_CURRENCY" defaultValue="USD" placeholder="PAYHERE CURRENCY" required fdprocessedid="u5hn2" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-4">
                                    <label className="col-from-label">Payhere Sandbox Mode</label>
                                </div>
                                <div className="col-md-8">
                                    <label className="aiz-switch aiz-switch-success mb-0">
                                        <input defaultValue={1} name="payhere_sandbox" type="checkbox" />
                                        <span className="slider round" />
                                    </label>
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="tm6dv">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PayhereCredential;