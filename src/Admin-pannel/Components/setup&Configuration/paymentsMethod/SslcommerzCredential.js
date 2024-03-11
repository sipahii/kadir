function SslcommerzCredential() {
    return (
        <>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header ">
                        <h5 className="mb-0 h6">Sslcommerz Credential</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                            <input type="hidden" name="_token" defaultValue="kXMve4kNuwpLskUZw6eQaBIihyAaanRjWMC2zCTA" />                        <input type="hidden" name="payment_method" defaultValue="sslcommerz" />
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="SSLCZ_STORE_ID" />
                                <div className="col-md-4">
                                    <label className="col-from-label">Sslcz Store Id</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="SSLCZ_STORE_ID" defaultValue placeholder="Sslcz Store Id" required fdprocessedid="b0qmgi" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="SSLCZ_STORE_PASSWD" />
                                <div className="col-md-4">
                                    <label className="col-from-label">Sslcz store password</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="SSLCZ_STORE_PASSWD" defaultValue placeholder="Sslcz store password" required fdprocessedid="az8t" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-4">
                                    <label className="col-from-label">Sslcommerz Sandbox Mode</label>
                                </div>
                                <div className="col-md-8">
                                    <label className="aiz-switch aiz-switch-success mb-0">
                                        <input defaultValue={1} name="sslcommerz_sandbox" type="checkbox" defaultChecked />
                                        <span className="slider round" />
                                    </label>
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="zm759">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SslcommerzCredential;