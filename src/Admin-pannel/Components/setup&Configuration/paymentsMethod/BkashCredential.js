function BkashCredential() {
    return (
        <>
            <div className="col-md-6">
                            <div className="card">
                                <div className="card-header ">
                                    <h5 className="mb-0 h6">Bkash Credential</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                                        <input type="hidden" name="_token" defaultValue="kXMve4kNuwpLskUZw6eQaBIihyAaanRjWMC2zCTA" />                        <input type="hidden" name="payment_method" defaultValue="bkash" />
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="BKASH_CHECKOUT_APP_KEY" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">BKASH CHECKOUT APP KEY</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="BKASH_CHECKOUT_APP_KEY" defaultValue placeholder="BKASH CHECKOUT APP KEY" required fdprocessedid="gpcml" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="BKASH_CHECKOUT_APP_SECRET" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">BKASH CHECKOUT APP SECRET</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="BKASH_CHECKOUT_APP_SECRET" defaultValue placeholder="BKASH CHECKOUT APP SECRET" required fdprocessedid="oahca8" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="BKASH_CHECKOUT_USER_NAME" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">BKASH CHECKOUT USER NAME</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="BKASH_CHECKOUT_USER_NAME" defaultValue placeholder="BKASH CHECKOUT USER NAME" required fdprocessedid="rsqq9" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="BKASH_CHECKOUT_PASSWORD" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">BKASH CHECKOUT PASSWORD</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="BKASH_CHECKOUT_PASSWORD" defaultValue placeholder="BKASH CHECKOUT PASSWORD" required fdprocessedid="exdeza" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-4">
                                                <label className="col-from-label">Bkash Sandbox Mode</label>
                                            </div>
                                            <div className="col-md-8">
                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                    <input defaultValue={1} name="bkash_sandbox" type="checkbox" defaultChecked />
                                                    <span className="slider round" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="rgyo4">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
        </>
    )
}
export default BkashCredential;