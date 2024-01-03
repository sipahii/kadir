function NgeniusCredential() {
    return (
        <>
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Ngenius Credential</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                            <input type="hidden" name="_token" defaultValue="kXMve4kNuwpLskUZw6eQaBIihyAaanRjWMC2zCTA" />                        <input type="hidden" name="payment_method" defaultValue="ngenius" />
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="NGENIUS_OUTLET_ID" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">NGENIUS OUTLET ID</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="NGENIUS_OUTLET_ID" defaultValue placeholder="NGENIUS OUTLET ID" required fdprocessedid="pufs4" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="NGENIUS_API_KEY" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">NGENIUS API KEY</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="NGENIUS_API_KEY" defaultValue="==" placeholder="NGENIUS API KEY" required fdprocessedid="f20nj" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="NGENIUS_CURRENCY" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">NGENIUS CURRENCY</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="NGENIUS_CURRENCY" defaultValue="AED" placeholder="NGENIUS CURRENCY" required fdprocessedid="xhny28" />
                                    <br />
                                    <div className="alert alert-primary" role="alert">
                                        Currency must be <b>AED</b> or <b>USD</b> or <b>EUR</b><br />
                                        If kept empty, <b>AED</b> will be used automatically
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="bjxsyn">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NgeniusCredential;