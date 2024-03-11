function InstamojoCredential() {
    return (
        <>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6 ">Instamojo Credential</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                            <input type="hidden" name="_token" defaultValue="kXMve4kNuwpLskUZw6eQaBIihyAaanRjWMC2zCTA" />                        <input type="hidden" name="payment_method" defaultValue="instamojo" />
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="IM_API_KEY" />
                                <div className="col-md-4">
                                    <label className="col-from-label">API KEY</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="IM_API_KEY" defaultValue placeholder="IM API KEY" required fdprocessedid="85u63g" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="IM_AUTH_TOKEN" />
                                <div className="col-md-4">
                                    <label className="col-from-label">AUTH TOKEN</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="IM_AUTH_TOKEN" defaultValue placeholder="IM AUTH TOKEN" required fdprocessedid="rmdnjn" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-4">
                                    <label className="col-from-label">Instamojo Sandbox Mode</label>
                                </div>
                                <div className="col-md-8">
                                    <label className="aiz-switch aiz-switch-success mb-0">
                                        <input defaultValue={1} name="instamojo_sandbox" type="checkbox" defaultChecked />
                                        <span className="slider round" />
                                    </label>
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="ev69yg">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default InstamojoCredential;