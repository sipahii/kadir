function RedisConfiguration() {
    return (
        <>
            <div className="col-xxl-6">
                <div className="card">
                    <div className="card-header">
                        <h3 className="fs-18 mb-0 text-center">Redis Configuration (If you use redis as any of the drivers)</h3>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/payment_method_update" method="POST">
                            <input type="hidden" name="payment_method" defaultValue="paypal" />
                            <input type="hidden" name="_token" defaultValue="t1kIjSzA66IWcAwVqC8sgvte7FLgAx9ARqaAs2hQ" />                        <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="REDIS_HOST" />
                                <div className="col-lg-4">
                                    <label className="control-label">REDIS_HOST</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="REDIS_HOST" defaultValue="127.0.0.1" placeholder="REDIS_HOST" required fdprocessedid="9z2yx" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="REDIS_PASSWORD" />
                                <div className="col-lg-4">
                                    <label className="control-label">REDIS_PASSWORD</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="REDIS_PASSWORD" defaultValue placeholder="REDIS_PASSWORD" fdprocessedid="go2rte" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="REDIS_PORT" />
                                <div className="col-lg-4">
                                    <label className="control-label">REDIS_PORT</label>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" name="REDIS_PORT" defaultValue={6379} placeholder="REDIS_PORT" required fdprocessedid="5qhcak" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-12 text-right">
                                    <button className="btn btn-primary" type="submit" fdprocessedid="6wvuo">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RedisConfiguration;