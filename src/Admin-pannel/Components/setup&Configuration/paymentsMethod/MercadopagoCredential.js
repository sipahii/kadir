function MercadopagoCredential() {
    return (
        <>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6 ">Mercadopago Credential</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                            <input type="hidden" name="payment_method" defaultValue="paypal" />
                            <input type="hidden" name="_token" defaultValue="kXMve4kNuwpLskUZw6eQaBIihyAaanRjWMC2zCTA" />                        <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="MERCADOPAGO_KEY" />
                                <div className="col-md-4">
                                    <label className="col-from-label">Mercadopago Key</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="MERCADOPAGO_KEY" defaultValue placeholder="Mercadopago Key" required fdprocessedid="x6a7vj" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="MERCADOPAGO_ACCESS" />
                                <div className="col-md-4">
                                    <label className="col-from-label">Mercadopago Access</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="MERCADOPAGO_ACCESS" defaultValue placeholder="Mercadopago Access" required fdprocessedid="5ppz9" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="MERCADOPAGO_CURRENCY" />
                                <div className="col-lg-4">
                                    <label className="col-from-label">MERCADOPAGO CURRENCY</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="MERCADOPAGO_CURRENCY" defaultValue placeholder="MERCADOPAGO CURRENCY" required fdprocessedid="9mkzru" />
                                    <br />
                                    <div className="alert alert-primary" role="alert">
                                        Currency must be <b>es-AR</b> or <b>es-CL</b> or <b>es-CO</b> or <b>es-MX</b> or <b>es-VE</b> or <b>es-UY</b> or <b>es-PE</b> or <b>pt-BR</b><br />
                                        If kept empty, <b>en-US</b> will be used automatically
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="oaspxr">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MercadopagoCredential;