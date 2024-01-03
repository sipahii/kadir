function Payku() {
    return (
        <>
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Payku</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                            <input type="hidden" name="_token" defaultValue="kXMve4kNuwpLskUZw6eQaBIihyAaanRjWMC2zCTA" />                        <input type="hidden" name="payment_method" defaultValue="payku" />
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="PAYKU_BASE_URL" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">PAYKU_BASE_URL</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="PAYKU_BASE_URL" defaultValue placeholder="PAYKU_BASE_URL" required fdprocessedid="sqq1sr" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="PAYKU_PUBLIC_TOKEN" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">PAYKU_PUBLIC_TOKEN</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="PAYKU_PUBLIC_TOKEN" defaultValue placeholder="PAYKU_PUBLIC_TOKEN" required fdprocessedid="ncnjt8" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="PAYKU_PRIVATE_TOKEN" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">PAYKU_PRIVATE_TOKEN</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="PAYKU_PRIVATE_TOKEN" defaultValue placeholder="PAYKU_PRIVATE_TOKEN" required fdprocessedid="njhoza" />
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="x0qlm">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Payku;