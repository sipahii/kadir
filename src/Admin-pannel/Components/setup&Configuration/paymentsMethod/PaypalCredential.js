function PaypalCredential() {
    return (
        <>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6 ">Paypal Credential</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                            <input type="hidden" name="payment_method" defaultValue="paypal" />
                            <input type="hidden" name="_token" defaultValue="kXMve4kNuwpLskUZw6eQaBIihyAaanRjWMC2zCTA" />                        <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="PAYPAL_CLIENT_ID" />
                                <div className="col-md-4">
                                    <label className="col-from-label">Paypal Client Id</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="PAYPAL_CLIENT_ID" defaultValue placeholder="Paypal Client Id" required fdprocessedid="p1byac" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="PAYPAL_CLIENT_SECRET" />
                                <div className="col-md-4">
                                    <label className="col-from-label">Paypal Client Secret</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="PAYPAL_CLIENT_SECRET" defaultValue placeholder="Paypal Client Secret" required fdprocessedid="b1g5ed" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-4">
                                    <label className="col-from-label">Paypal Sandbox Mode</label>
                                </div>
                                <div className="col-md-8">
                                    <label className="aiz-switch aiz-switch-success mb-0">
                                        <input defaultValue={1} name="paypal_sandbox" type="checkbox" />
                                        <span className="slider round" />
                                    </label>
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="6gjf0b">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PaypalCredential;