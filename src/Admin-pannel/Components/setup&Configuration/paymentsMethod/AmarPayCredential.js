function AmarPayCredential() {
    return (
        <>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header ">
                        <h5 className="mb-0 h6">Aamarpay Credential</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                            <input type="hidden" name="_token" defaultValue="kXMve4kNuwpLskUZw6eQaBIihyAaanRjWMC2zCTA" />                        <input type="hidden" name="payment_method" defaultValue="aamarpay" />
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="AAMARPAY_STORE_ID" />
                                <div className="col-md-4">
                                    <label className="col-from-label">Aamarpay Store Id</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="AAMARPAY_STORE_ID" defaultValue placeholder="Aamarpay Store Id" required fdprocessedid="225er" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="AAMARPAY_SIGNATURE_KEY" />
                                <div className="col-md-4">
                                    <label className="col-from-label">Aamarpay signature key</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="AAMARPAY_SIGNATURE_KEY" defaultValue placeholder="Aamarpay signature key" required fdprocessedid="2ujbq" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-4">
                                    <label className="col-from-label">Aamarpay Sandbox Mode</label>
                                </div>
                                <div className="col-md-8">
                                    <label className="aiz-switch aiz-switch-success mb-0">
                                        <input defaultValue={1} name="aamarpay_sandbox" type="checkbox" />
                                        <span className="slider round" />
                                    </label>
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="n2648j">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AmarPayCredential;