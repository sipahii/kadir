import React from 'react'

function MSegatCredential() {
    return (
        <>
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">MSEGAT Credential</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/otp-credentials-update" method="POST">
                            <input type="hidden" name="otp_method" defaultValue="msegat" />
                            <input type="hidden" name="_token" defaultValue="yvsI85OUsNWahvVWddcBV8G0DeeFRu9FCTlKnQDo" />                        <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="MSEGAT_API_KEY" />
                                <div className="col-lg-3">
                                    <label className="col-from-label">MSEGAT_API_KEY</label>
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" className="form-control" name="MSEGAT_API_KEY" defaultValue placeholder="MSEGAT_API_KEY" required fdprocessedid="snq4qd" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="MSEGAT_USERNAME" />
                                <div className="col-lg-3">
                                    <label className="col-from-label">MSEGAT_USERNAME</label>
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" className="form-control" name="MSEGAT_USERNAME" defaultValue placeholder="MSEGAT_USERNAME" required fdprocessedid="cygw44" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="MSEGAT_USER_SENDER" />
                                <div className="col-lg-3">
                                    <label className="col-from-label">MSEGAT_USER_SENDER</label>
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" className="form-control" name="MSEGAT_USER_SENDER" defaultValue placeholder="MSEGAT_USER_SENDER" required fdprocessedid="tj3va7" />
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="klbaq">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MSegatCredential