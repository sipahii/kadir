function RazorPayCredential() {
    return (
        <>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6 ">RazorPay Credential</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                            <input type="hidden" name="_token" defaultValue="kXMve4kNuwpLskUZw6eQaBIihyAaanRjWMC2zCTA" />                        <input type="hidden" name="payment_method" defaultValue="razorpay" />
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="RAZOR_KEY" />
                                <div className="col-md-4">
                                    <label className="col-from-label">RAZOR KEY</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="RAZOR_KEY" defaultValue placeholder="RAZOR KEY" required fdprocessedid="rlm5nd" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="RAZOR_SECRET" />
                                <div className="col-md-4">
                                    <label className="col-from-label">RAZOR SECRET</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="RAZOR_SECRET" defaultValue placeholder="RAZOR SECRET" required fdprocessedid="dovnc" />
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="6wmj8l">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RazorPayCredential;