import React from 'react'

function GoogleAnalytical() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Facebook Pixel Setting</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/facebook_pixel" method="POST">
                                        <input type="hidden" name="_token" defaultValue="yG9jLpRgd5N8rU1r6JOumPp4iFe6UqKm7Oj0VLfC" />                        <div className="form-group row">
                                            <div className="col-lg-3">
                                                <label className="col-from-label">Facebook Pixel</label>
                                            </div>
                                            <div className="col-md-7">
                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                    <input defaultValue={1} name="facebook_pixel" type="checkbox" />
                                                    <span className="slider round" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="FACEBOOK_PIXEL_ID" />
                                            <div className="col-lg-3">
                                                <label className="col-from-label">Facebook Pixel ID</label>
                                            </div>
                                            <div className="col-md-7">
                                                <input type="text" className="form-control" name="FACEBOOK_PIXEL_ID" defaultValue placeholder="Facebook Pixel ID" required fdprocessedid="1844te" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="dcldlo">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card bg-gray-light">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Please be carefull when you are configuring Facebook pixel.</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group mar-no">
                                        <li className="list-group-item text-dark">1. Log in to Facebook and go to your Ads Manager account.</li>
                                        <li className="list-group-item text-dark">2. Open the Navigation Bar and select Events Manager.</li>
                                        <li className="list-group-item text-dark">3. Copy your Pixel ID from underneath your Site Name and paste the number into Facebook Pixel ID field.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Google Analytics Setting</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/google_analytics" method="POST">
                                        <input type="hidden" name="_token" defaultValue="yG9jLpRgd5N8rU1r6JOumPp4iFe6UqKm7Oj0VLfC" />                        <div className="form-group row">
                                            <div className="col-lg-3">
                                                <label className="col-from-label">Google Analytics</label>
                                            </div>
                                            <div className="col-md-7">
                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                    <input defaultValue={1} name="google_analytics" type="checkbox" />
                                                    <span className="slider round" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="TRACKING_ID" />
                                            <div className="col-lg-3">
                                                <label className="col-from-label">Tracking ID</label>
                                            </div>
                                            <div className="col-md-7">
                                                <input type="text" className="form-control" name="TRACKING_ID" defaultValue placeholder="Tracking ID" required fdprocessedid="6k0tbn" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="xezjer">Save</button>
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

export default GoogleAnalytical