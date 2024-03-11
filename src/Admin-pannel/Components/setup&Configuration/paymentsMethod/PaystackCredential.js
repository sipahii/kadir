function PaystackCredential() {
    return (
        <>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6 ">PayStack Credential</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                            <input type="hidden" name="_token" defaultValue="kXMve4kNuwpLskUZw6eQaBIihyAaanRjWMC2zCTA" />                        <input type="hidden" name="payment_method" defaultValue="paystack" />
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="PAYSTACK_PUBLIC_KEY" />
                                <div className="col-md-4">
                                    <label className="col-from-label">PUBLIC KEY</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="PAYSTACK_PUBLIC_KEY" defaultValue placeholder="PUBLIC KEY" required fdprocessedid="0qbcvm" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="PAYSTACK_SECRET_KEY" />
                                <div className="col-md-4">
                                    <label className="col-from-label">SECRET KEY</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="PAYSTACK_SECRET_KEY" defaultValue placeholder="SECRET KEY" required fdprocessedid="i80vs8" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="MERCHANT_EMAIL" />
                                <div className="col-md-4">
                                    <label className="col-from-label">MERCHANT EMAIL</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="MERCHANT_EMAIL" defaultValue placeholder="MERCHANT EMAIL" required fdprocessedid="llf99a" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="PAYSTACK_CURRENCY_CODE" />
                                <div className="col-md-4">
                                    <label className="col-from-label">PAYSTACK CURRENCY CODE</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="PAYSTACK_CURRENCY_CODE" defaultValue placeholder="PAYSTACK CURRENCY CODE" required fdprocessedid="1v5q9" />
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="stvw1">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PaystackCredential;