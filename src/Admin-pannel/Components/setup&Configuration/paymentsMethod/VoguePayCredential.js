function VoguePayCredential() {
    return (
        <>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6 ">VoguePay Credential</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                            <input type="hidden" name="_token" defaultValue="kXMve4kNuwpLskUZw6eQaBIihyAaanRjWMC2zCTA" />                        <input type="hidden" name="payment_method" defaultValue="voguepay" />
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="VOGUE_MERCHANT_ID" />
                                <div className="col-md-4">
                                    <label className="col-from-label">MERCHANT ID</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="VOGUE_MERCHANT_ID" defaultValue="DEMO" placeholder="MERCHANT ID" required fdprocessedid="ivzndi" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-4">
                                    <label className="col-from-label">Sandbox Mode</label>
                                </div>
                                <div className="col-md-8">
                                    <label className="aiz-switch aiz-switch-success mb-0">
                                        <input defaultValue={1} name="voguepay_sandbox" type="checkbox" />
                                        <span className="slider round" />
                                    </label>
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="ju8xfd">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default VoguePayCredential;