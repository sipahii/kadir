import React from 'react'

function GoogleRecaptcha() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="mb-0 h6">Google reCAPTCHA Setting</h3>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/google_recaptcha" method="POST">
                                        <input type="hidden" name="_token" defaultValue="yG9jLpRgd5N8rU1r6JOumPp4iFe6UqKm7Oj0VLfC" />                        <div className="form-group row">
                                            <div className="col-md-4">
                                                <label className="control-label">Google reCAPTCHA</label>
                                            </div>
                                            <div className="col-md-8">
                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                    <input defaultValue={1} name="google_recaptcha" type="checkbox" />
                                                    <span className="slider round" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="CAPTCHA_KEY" />
                                            <div className="col-md-4">
                                                <label className="control-label">Site KEY</label>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" name="CAPTCHA_KEY" defaultValue placeholder="Site KEY" required fdprocessedid="gmj1ml" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="nqj448">Save</button>
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

export default GoogleRecaptcha