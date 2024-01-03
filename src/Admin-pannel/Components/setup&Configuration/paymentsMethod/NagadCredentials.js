function NagadCredential() {
    return (
        <>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6 ">Nagad Credential</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                            <input type="hidden" name="_token" defaultValue="kXMve4kNuwpLskUZw6eQaBIihyAaanRjWMC2zCTA" />                        <input type="hidden" name="payment_method" defaultValue="nagad" />
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="NAGAD_MODE" />
                                <div className="col-md-4">
                                    <label className="col-from-label">NAGAD MODE</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="NAGAD_MODE" defaultValue placeholder="NAGAD MODE" required fdprocessedid="wbvl4l" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="NAGAD_MERCHANT_ID" />
                                <div className="col-md-4">
                                    <label className="col-from-label">NAGAD MERCHANT ID</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="NAGAD_MERCHANT_ID" defaultValue placeholder="NAGAD MERCHANT ID" required fdprocessedid="ebmv4h" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="NAGAD_MERCHANT_NUMBER" />
                                <div className="col-md-4">
                                    <label className="col-from-label">NAGAD MERCHANT NUMBER</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="NAGAD_MERCHANT_NUMBER" defaultValue placeholder="NAGAD MERCHANT NUMBER" required fdprocessedid="iprvq" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="NAGAD_PG_PUBLIC_KEY" />
                                <div className="col-md-4">
                                    <label className="col-from-label">NAGAD PG PUBLIC KEY</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="NAGAD_PG_PUBLIC_KEY" defaultValue placeholder="NAGAD PG PUBLIC KEY" required fdprocessedid="6vea5u" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="NAGAD_MERCHANT_PRIVATE_KEY" />
                                <div className="col-md-4">
                                    <label className="col-from-label">NAGAD MERCHANT PRIVATE KEY</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="NAGAD_MERCHANT_PRIVATE_KEY" defaultValue placeholder="NAGAD MERCHANT PRIVATE KEY" required fdprocessedid="pk0vc9" />
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="2csm58">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NagadCredential;