import React from 'react'

function FacebookComment() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Facebook Comment Setting</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/facebook-comment" method="POST">
                                        <input type="hidden" name="_token" defaultValue="yG9jLpRgd5N8rU1r6JOumPp4iFe6UqKm7Oj0VLfC" />                        <div className="form-group row">
                                            <div className="col-md-5">
                                                <label className="col-from-label">Facebook Comment</label>
                                            </div>
                                            <div className="col-md-7">
                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                    <input defaultValue={1} name="facebook_comment" type="checkbox" />
                                                    <span className="slider round" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="FACEBOOK_APP_ID" />
                                            <div className="col-md-5">
                                                <label className="col-from-label">Facebook App ID</label>
                                            </div>
                                            <div className="col-md-7">
                                                <input type="text" className="form-control" name="FACEBOOK_APP_ID" defaultValue placeholder="Facebook App ID" required fdprocessedid="ibf977" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="o9ole">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card bg-gray-light">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Please be carefull when you are configuring Facebook Comment. For incorrect configuration you will not get comment section on your user-end site.</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group mar-no">
                                        <li className="list-group-item text-dark">
                                            1. Login into your facebook page
                                        </li>
                                        <li className="list-group-item text-dark">
                                            2. After then go to this URL https://developers.facebook.com/apps/.
                                        </li>
                                        <li className="list-group-item text-dark">
                                            3. Create Your App.
                                        </li>
                                        <li className="list-group-item text-dark">
                                            4. In Dashboard page you will get your App ID.
                                        </li>
                                    </ul>
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

export default FacebookComment