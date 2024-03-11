function IzicoCredential() {
    return (
        <>
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Iyzico Credential</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                            <input type="hidden" name="_token" defaultValue="kXMve4kNuwpLskUZw6eQaBIihyAaanRjWMC2zCTA" />                        <input type="hidden" name="payment_method" defaultValue="iyzico" />
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="IYZICO_API_KEY" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">IYZICO API KEY</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="IYZICO_API_KEY" defaultValue placeholder="IYZICO API KEY" required fdprocessedid="ms8t3u" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="IYZICO_SECRET_KEY" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">IYZICO SECRET KEY</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="IYZICO_SECRET_KEY" defaultValue placeholder="IYZICO SECRET KEY" required fdprocessedid="2csyj" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-4">
                                    <label className="col-from-label">IYZICO Sandbox Mode</label>
                                </div>
                                <div className="col-md-8">
                                    <label className="aiz-switch aiz-switch-success mb-0">
                                        <input defaultValue={1} name="iyzico_sandbox" type="checkbox" defaultChecked />
                                        <span className="slider round" />
                                    </label>
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="wauue8">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default IzicoCredential;