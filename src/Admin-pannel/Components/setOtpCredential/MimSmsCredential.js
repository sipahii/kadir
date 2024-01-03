import React from 'react'

function MimSmsCredential() {
    return (
        <>
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">MIMSMS Credential</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/otp-credentials-update" method="POST">
                            <input type="hidden" name="otp_method" defaultValue="mimsms" />
                            <input type="hidden" name="_token" defaultValue="yvsI85OUsNWahvVWddcBV8G0DeeFRu9FCTlKnQDo" />                        <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="MIM_API_KEY" />
                                <div className="col-lg-3">
                                    <label className="col-from-label">MIM_API_KEY</label>
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" className="form-control" name="MIM_API_KEY" defaultValue placeholder="MIM_API_KEY" required fdprocessedid="bohr7r" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="MIM_SENDER_ID" />
                                <div className="col-lg-3">
                                    <label className="col-from-label">MIM_SENDER_ID</label>
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" className="form-control" name="MIM_SENDER_ID" defaultValue placeholder="MIM_SENDER_ID" required fdprocessedid="g3uo1k" />
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="zygwc">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MimSmsCredential