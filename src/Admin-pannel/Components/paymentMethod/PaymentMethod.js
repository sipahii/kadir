function PaymentMethod() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6 ">Paypal Credential</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                                        <input type="hidden" name="payment_method" defaultValue="paypal" />
                                        <input type="hidden" name="_token" defaultValue="bZlht2QD73bDkPhHtuYc3AVcfnrS42HFjF5kM5xe" />                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="PAYPAL_CLIENT_ID" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">Paypal Client Id</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="PAYPAL_CLIENT_ID" defaultValue placeholder="Paypal Client Id" required fdprocessedid="z5hune" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="PAYPAL_CLIENT_SECRET" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">Paypal Client Secret</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="PAYPAL_CLIENT_SECRET" defaultValue placeholder="Paypal Client Secret" required fdprocessedid="sjozkar" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-4">
                                                <label className="col-from-label">Paypal Sandbox Mode</label>
                                            </div>
                                            <div className="col-md-8">
                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                    <input defaultValue={1} name="paypal_sandbox" type="checkbox" />
                                                    <span className="slider round" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="fueu6">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6 ">Stripe Credential</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                                        <input type="hidden" name="_token" defaultValue="bZlht2QD73bDkPhHtuYc3AVcfnrS42HFjF5kM5xe" />                        <input type="hidden" name="payment_method" defaultValue="stripe" />
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="STRIPE_KEY" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">Stripe Key</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="STRIPE_KEY" defaultValue placeholder="Stripe Key" required fdprocessedid="jum3fn" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="STRIPE_SECRET" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">Stripe Secret</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="STRIPE_SECRET" defaultValue placeholder="Stripe Secret" required fdprocessedid="g8ik7j" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="gzu8c5">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6 ">Mercadopago Credential</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                                        <input type="hidden" name="payment_method" defaultValue="paypal" />
                                        <input type="hidden" name="_token" defaultValue="bZlht2QD73bDkPhHtuYc3AVcfnrS42HFjF5kM5xe" />                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="MERCADOPAGO_KEY" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">Mercadopago Key</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="MERCADOPAGO_KEY" defaultValue placeholder="Mercadopago Key" required fdprocessedid="pr99f" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="MERCADOPAGO_ACCESS" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">Mercadopago Access</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="MERCADOPAGO_ACCESS" defaultValue placeholder="Mercadopago Access" required fdprocessedid="citc07" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="MERCADOPAGO_CURRENCY" />
                                            <div className="col-lg-4">
                                                <label className="col-from-label">MERCADOPAGO CURRENCY</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" className="form-control" name="MERCADOPAGO_CURRENCY" defaultValue placeholder="MERCADOPAGO CURRENCY" required fdprocessedid="tttsa" />
                                                <br />
                                                <div className="alert alert-primary" role="alert">
                                                    Currency must be <b>es-AR</b> or <b>es-CL</b> or <b>es-CO</b> or <b>es-MX</b> or <b>es-VE</b> or <b>es-UY</b> or <b>es-PE</b> or <b>pt-BR</b><br />
                                                    If kept empty, <b>en-US</b> will be used automatically
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="yzwx6p">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header ">
                                    <h5 className="mb-0 h6">Bkash Credential</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                                        <input type="hidden" name="_token" defaultValue="bZlht2QD73bDkPhHtuYc3AVcfnrS42HFjF5kM5xe" />                        <input type="hidden" name="payment_method" defaultValue="bkash" />
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="BKASH_CHECKOUT_APP_KEY" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">BKASH CHECKOUT APP KEY</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="BKASH_CHECKOUT_APP_KEY" defaultValue placeholder="BKASH CHECKOUT APP KEY" required fdprocessedid="rius19" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="BKASH_CHECKOUT_APP_SECRET" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">BKASH CHECKOUT APP SECRET</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="BKASH_CHECKOUT_APP_SECRET" defaultValue placeholder="BKASH CHECKOUT APP SECRET" required fdprocessedid="53b8om" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="BKASH_CHECKOUT_USER_NAME" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">BKASH CHECKOUT USER NAME</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="BKASH_CHECKOUT_USER_NAME" defaultValue placeholder="BKASH CHECKOUT USER NAME" required fdprocessedid="du2y1s" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="BKASH_CHECKOUT_PASSWORD" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">BKASH CHECKOUT PASSWORD</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="BKASH_CHECKOUT_PASSWORD" defaultValue placeholder="BKASH CHECKOUT PASSWORD" required fdprocessedid="jpprb5" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-4">
                                                <label className="col-from-label">Bkash Sandbox Mode</label>
                                            </div>
                                            <div className="col-md-8">
                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                    <input defaultValue={1} name="bkash_sandbox" type="checkbox" defaultChecked />
                                                    <span className="slider round" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="0l9lld">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6 ">Nagad Credential</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                                        <input type="hidden" name="_token" defaultValue="bZlht2QD73bDkPhHtuYc3AVcfnrS42HFjF5kM5xe" />                        <input type="hidden" name="payment_method" defaultValue="nagad" />
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="NAGAD_MODE" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">NAGAD MODE</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="NAGAD_MODE" defaultValue placeholder="NAGAD MODE" required fdprocessedid="hhslcl" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="NAGAD_MERCHANT_ID" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">NAGAD MERCHANT ID</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="NAGAD_MERCHANT_ID" defaultValue placeholder="NAGAD MERCHANT ID" required fdprocessedid="j1zzsq" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="NAGAD_MERCHANT_NUMBER" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">NAGAD MERCHANT NUMBER</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="NAGAD_MERCHANT_NUMBER" defaultValue placeholder="NAGAD MERCHANT NUMBER" required fdprocessedid="t2s1s" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="NAGAD_PG_PUBLIC_KEY" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">NAGAD PG PUBLIC KEY</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="NAGAD_PG_PUBLIC_KEY" defaultValue placeholder="NAGAD PG PUBLIC KEY" required fdprocessedid="851qj" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="NAGAD_MERCHANT_PRIVATE_KEY" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">NAGAD MERCHANT PRIVATE KEY</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="NAGAD_MERCHANT_PRIVATE_KEY" defaultValue placeholder="NAGAD MERCHANT PRIVATE KEY" required fdprocessedid="dwr3qh" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="0nid4">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header ">
                                    <h5 className="mb-0 h6">Sslcommerz Credential</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                                        <input type="hidden" name="_token" defaultValue="bZlht2QD73bDkPhHtuYc3AVcfnrS42HFjF5kM5xe" />                        <input type="hidden" name="payment_method" defaultValue="sslcommerz" />
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="SSLCZ_STORE_ID" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">Sslcz Store Id</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="SSLCZ_STORE_ID" defaultValue placeholder="Sslcz Store Id" required fdprocessedid="z1hj2" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="SSLCZ_STORE_PASSWD" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">Sslcz store password</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="SSLCZ_STORE_PASSWD" defaultValue placeholder="Sslcz store password" required fdprocessedid="gib5k" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-4">
                                                <label className="col-from-label">Sslcommerz Sandbox Mode</label>
                                            </div>
                                            <div className="col-md-8">
                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                    <input defaultValue={1} name="sslcommerz_sandbox" type="checkbox" defaultChecked />
                                                    <span className="slider round" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="0e418b">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header ">
                                    <h5 className="mb-0 h6">Aamarpay Credential</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                                        <input type="hidden" name="_token" defaultValue="bZlht2QD73bDkPhHtuYc3AVcfnrS42HFjF5kM5xe" />                        <input type="hidden" name="payment_method" defaultValue="aamarpay" />
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="AAMARPAY_STORE_ID" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">Aamarpay Store Id</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="AAMARPAY_STORE_ID" defaultValue placeholder="Aamarpay Store Id" required fdprocessedid="0mjean" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="AAMARPAY_SIGNATURE_KEY" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">Aamarpay signature key</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="AAMARPAY_SIGNATURE_KEY" defaultValue placeholder="Aamarpay signature key" required fdprocessedid="yssono" />
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
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="krqnp">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Iyzico Credential</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                                        <input type="hidden" name="_token" defaultValue="bZlht2QD73bDkPhHtuYc3AVcfnrS42HFjF5kM5xe" />                        <input type="hidden" name="payment_method" defaultValue="iyzico" />
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="IYZICO_API_KEY" />
                                            <div className="col-lg-4">
                                                <label className="col-from-label">IYZICO API KEY</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" className="form-control" name="IYZICO_API_KEY" defaultValue placeholder="IYZICO API KEY" required fdprocessedid="tshs" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="IYZICO_SECRET_KEY" />
                                            <div className="col-lg-4">
                                                <label className="col-from-label">IYZICO SECRET KEY</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" className="form-control" name="IYZICO_SECRET_KEY" defaultValue placeholder="IYZICO SECRET KEY" required fdprocessedid="q13eor" />
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
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="6w3c3p">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6 ">Instamojo Credential</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                                        <input type="hidden" name="_token" defaultValue="bZlht2QD73bDkPhHtuYc3AVcfnrS42HFjF5kM5xe" />                        <input type="hidden" name="payment_method" defaultValue="instamojo" />
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="IM_API_KEY" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">API KEY</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="IM_API_KEY" defaultValue placeholder="IM API KEY" required fdprocessedid="b9aox7" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="IM_AUTH_TOKEN" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">AUTH TOKEN</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="IM_AUTH_TOKEN" defaultValue placeholder="IM AUTH TOKEN" required fdprocessedid="qcavus6" />
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
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="ifcr5e">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6 ">PayStack Credential</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                                        <input type="hidden" name="_token" defaultValue="bZlht2QD73bDkPhHtuYc3AVcfnrS42HFjF5kM5xe" />                        <input type="hidden" name="payment_method" defaultValue="paystack" />
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="PAYSTACK_PUBLIC_KEY" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">PUBLIC KEY</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="PAYSTACK_PUBLIC_KEY" defaultValue placeholder="PUBLIC KEY" required fdprocessedid="dmf0np" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="PAYSTACK_SECRET_KEY" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">SECRET KEY</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="PAYSTACK_SECRET_KEY" defaultValue placeholder="SECRET KEY" required fdprocessedid="3shoqt" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="MERCHANT_EMAIL" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">MERCHANT EMAIL</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="MERCHANT_EMAIL" defaultValue placeholder="MERCHANT EMAIL" required fdprocessedid="1nmhxb" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="PAYSTACK_CURRENCY_CODE" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">PAYSTACK CURRENCY CODE</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="PAYSTACK_CURRENCY_CODE" defaultValue placeholder="PAYSTACK CURRENCY CODE" required fdprocessedid="8l3dwc" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="ybqssk">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6 ">Payhere Credential</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                                        <input type="hidden" name="_token" defaultValue="bZlht2QD73bDkPhHtuYc3AVcfnrS42HFjF5kM5xe" />                        <input type="hidden" name="payment_method" defaultValue="payhere" />
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="PAYHERE_MERCHANT_ID" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">PAYHERE MERCHANT ID</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="PAYHERE_MERCHANT_ID" defaultValue placeholder="PAYHERE MERCHANT ID" required fdprocessedid="13imv" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="PAYHERE_SECRET" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">PAYHERE SECRET</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="PAYHERE_SECRET" defaultValue placeholder="PAYHERE SECRET" required fdprocessedid="4jq9kn" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="PAYHERE_CURRENCY" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">PAYHERE CURRENCY</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="PAYHERE_CURRENCY" defaultValue="USD" placeholder="PAYHERE CURRENCY" required fdprocessedid="y1h3wo" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-4">
                                                <label className="col-from-label">Payhere Sandbox Mode</label>
                                            </div>
                                            <div className="col-md-8">
                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                    <input defaultValue={1} name="payhere_sandbox" type="checkbox" />
                                                    <span className="slider round" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="pwwf7">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Ngenius Credential</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                                        <input type="hidden" name="_token" defaultValue="bZlht2QD73bDkPhHtuYc3AVcfnrS42HFjF5kM5xe" />                        <input type="hidden" name="payment_method" defaultValue="ngenius" />
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="NGENIUS_OUTLET_ID" />
                                            <div className="col-lg-4">
                                                <label className="col-from-label">NGENIUS OUTLET ID</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" className="form-control" name="NGENIUS_OUTLET_ID" defaultValue placeholder="NGENIUS OUTLET ID" required fdprocessedid="x18toe" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="NGENIUS_API_KEY" />
                                            <div className="col-lg-4">
                                                <label className="col-from-label">NGENIUS API KEY</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" className="form-control" name="NGENIUS_API_KEY" defaultValue="==" placeholder="NGENIUS API KEY" required fdprocessedid="p4vpvm" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="NGENIUS_CURRENCY" />
                                            <div className="col-lg-4">
                                                <label className="col-from-label">NGENIUS CURRENCY</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" className="form-control" name="NGENIUS_CURRENCY" defaultValue="AED" placeholder="NGENIUS CURRENCY" required fdprocessedid="te28al" />
                                                <br />
                                                <div className="alert alert-primary" role="alert">
                                                    Currency must be <b>AED</b> or <b>USD</b> or <b>EUR</b><br />
                                                    If kept empty, <b>AED</b> will be used automatically
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="l66d8w">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6 ">VoguePay Credential</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                                        <input type="hidden" name="_token" defaultValue="bZlht2QD73bDkPhHtuYc3AVcfnrS42HFjF5kM5xe" />                        <input type="hidden" name="payment_method" defaultValue="voguepay" />
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="VOGUE_MERCHANT_ID" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">MERCHANT ID</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="VOGUE_MERCHANT_ID" defaultValue="DEMO" placeholder="MERCHANT ID" required fdprocessedid="ls3pcf" />
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
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="p3xr5i">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6 ">RazorPay Credential</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                                        <input type="hidden" name="_token" defaultValue="bZlht2QD73bDkPhHtuYc3AVcfnrS42HFjF5kM5xe" />                        <input type="hidden" name="payment_method" defaultValue="razorpay" />
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="RAZOR_KEY" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">RAZOR KEY</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="RAZOR_KEY" defaultValue placeholder="RAZOR KEY" required fdprocessedid="95ti6p" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="RAZOR_SECRET" />
                                            <div className="col-md-4">
                                                <label className="col-from-label">RAZOR SECRET</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="RAZOR_SECRET" defaultValue placeholder="RAZOR SECRET" required fdprocessedid="1n91v4" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="zoq3r">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Authorize Net</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                                        <input type="hidden" name="_token" defaultValue="bZlht2QD73bDkPhHtuYc3AVcfnrS42HFjF5kM5xe" />                        <input type="hidden" name="payment_method" defaultValue="authorizenet" />
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="MERCHANT_LOGIN_ID" />
                                            <div className="col-lg-4">
                                                <label className="col-from-label">MERCHANT_LOGIN_ID</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" className="form-control" name="MERCHANT_LOGIN_ID" defaultValue placeholder="MERCHANT_LOGIN_ID" required fdprocessedid="n80ss" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="MERCHANT_TRANSACTION_KEY" />
                                            <div className="col-lg-4">
                                                <label className="col-from-label">MERCHANT_TRANSACTION_KEY</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" className="form-control" name="MERCHANT_TRANSACTION_KEY" defaultValue placeholder="MERCHANT_TRANSACTION_KEY" required fdprocessedid="ix6we8" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-4">
                                                <label className="col-from-label">Authorize Net Sandbox Mode</label>
                                            </div>
                                            <div className="col-md-8">
                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                    <input defaultValue={1} name="authorizenet_sandbox" type="checkbox" defaultChecked />
                                                    <span className="slider round" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="ugv1i">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Payku</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                                        <input type="hidden" name="_token" defaultValue="bZlht2QD73bDkPhHtuYc3AVcfnrS42HFjF5kM5xe" />                        <input type="hidden" name="payment_method" defaultValue="payku" />
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="PAYKU_BASE_URL" />
                                            <div className="col-lg-4">
                                                <label className="col-from-label">PAYKU_BASE_URL</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" className="form-control" name="PAYKU_BASE_URL" defaultValue placeholder="PAYKU_BASE_URL" required fdprocessedid="1lyl8u" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="PAYKU_PUBLIC_TOKEN" />
                                            <div className="col-lg-4">
                                                <label className="col-from-label">PAYKU_PUBLIC_TOKEN</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" className="form-control" name="PAYKU_PUBLIC_TOKEN" defaultValue placeholder="PAYKU_PUBLIC_TOKEN" required fdprocessedid="5ftg0r" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="PAYKU_PRIVATE_TOKEN" />
                                            <div className="col-lg-4">
                                                <label className="col-from-label">PAYKU_PRIVATE_TOKEN</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" className="form-control" name="PAYKU_PRIVATE_TOKEN" defaultValue placeholder="PAYKU_PRIVATE_TOKEN" required fdprocessedid="mcmmaa" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="g8lzih">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>
        </>
    )
}
export default PaymentMethod;