function AuthorizeNetCredential() {
    return (
        <>
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Authorize Net</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                            <input type="hidden" name="_token" defaultValue="kXMve4kNuwpLskUZw6eQaBIihyAaanRjWMC2zCTA" />                        <input type="hidden" name="payment_method" defaultValue="authorizenet" />
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="MERCHANT_LOGIN_ID" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">MERCHANT_LOGIN_ID</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="MERCHANT_LOGIN_ID" defaultValue placeholder="MERCHANT_LOGIN_ID" required fdprocessedid="4mr9s" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="MERCHANT_TRANSACTION_KEY" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">MERCHANT_TRANSACTION_KEY</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="MERCHANT_TRANSACTION_KEY" defaultValue placeholder="MERCHANT_TRANSACTION_KEY" required fdprocessedid="123nnq" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-4">
                                    <label className="col-from-label">Authorize Net Sandbox Mode</label>
                                </div>
                                <div className="col-md-8">
                                    <label className="aiz-switch aiz-switch-success mb-0">
                                        <input defaultValue={1} name="authorizenet_sandbox" type="checkbox" defaultChecked />
                                        <span className="slider round" />
                                    </label>
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="zf3jd7">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AuthorizeNetCredential;