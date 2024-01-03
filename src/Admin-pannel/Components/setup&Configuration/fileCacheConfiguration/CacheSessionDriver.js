function CacheSessionDriver() {
    return (
        <>
            <div className="col-xxl-6">
                <div className="card">
                    <div className="card-header">
                        <h3 className="fs-18 mb-0 text-center">Cache &amp; Session Driver</h3>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                            <input type="hidden" name="payment_method" defaultValue="paypal" />
                            <input type="hidden" name="_token" defaultValue="t1kIjSzA66IWcAwVqC8sgvte7FLgAx9ARqaAs2hQ" />                        <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="CACHE_DRIVER" />
                                <div className="col-lg-4">
                                    <label className="control-label">CACHE_DRIVER</label>
                                </div>
                                <div className="col-lg-8">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>File</option>
                                        <option value={2}>redis</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="SESSION_DRIVER" />
                                <div className="col-lg-4">
                                    <label className="control-label">SESSION_DRIVER</label>
                                </div>
                                <div className="col-lg-8">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>File</option>
                                        <option value={2}>redis</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-12 text-right">
                                    <button className="btn btn-primary" type="submit" fdprocessedid="6tjtyk">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CacheSessionDriver;