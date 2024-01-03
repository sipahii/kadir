import React from 'react'

function MimoCredential() {
    return (
        <>
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">MIMO Credential</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/otp-credentials-update" method="POST">
                            <input type="hidden" name="otp_method" defaultValue="mimo" />
                            <input type="hidden" name="_token" defaultValue="yvsI85OUsNWahvVWddcBV8G0DeeFRu9FCTlKnQDo" />                        <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="MIMO_USERNAME" />
                                <div className="col-lg-3">
                                    <label className="col-from-label">MIMO_USERNAME</label>
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" className="form-control" name="MIMO_USERNAME" defaultValue placeholder="MIMO_USERNAME" required fdprocessedid="plmla" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="MIMO_PASSWORD" />
                                <div className="col-lg-3">
                                    <label className="col-from-label">MIMO_PASSWORD</label>
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" className="form-control" name="MIMO_PASSWORD" defaultValue placeholder="MIMO_PASSWORD" required fdprocessedid="p7q33e" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="MIMO_SENDER_ID" />
                                <div className="col-lg-3">
                                    <label className="col-from-label">MIMO_SENDER_ID</label>
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" className="form-control" name="MIMO_SENDER_ID" defaultValue placeholder="MIMO_SENDER_ID" required fdprocessedid="oas8m7" />
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="83bu1i">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MimoCredential