function StripeCredential() {
    return (
        <>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6 ">Stripe Credential</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                            <input type="hidden" name="_token" defaultValue="kXMve4kNuwpLskUZw6eQaBIihyAaanRjWMC2zCTA" />                        <input type="hidden" name="payment_method" defaultValue="stripe" />
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="STRIPE_KEY" />
                                <div className="col-md-4">
                                    <label className="col-from-label">Stripe Key</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="STRIPE_KEY" defaultValue placeholder="Stripe Key" required fdprocessedid="k3yvkb" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="STRIPE_SECRET" />
                                <div className="col-md-4">
                                    <label className="col-from-label">Stripe Secret</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="STRIPE_SECRET" defaultValue placeholder="Stripe Secret" required fdprocessedid="g1047h" />
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="vp0s2s">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default StripeCredential;