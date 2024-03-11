import React from 'react'

function FacebookChat() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Facebook Chat Setting</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal" action="https://mmslfashions.in/admin/facebook_chat" method="POST">
                                        <input type="hidden" name="_token" defaultValue="yG9jLpRgd5N8rU1r6JOumPp4iFe6UqKm7Oj0VLfC" />                        <div className="form-group row">
                                            <div className="col-md-3">
                                                <label className="col-from-label">Facebook Chat</label>
                                            </div>
                                            <div className="col-md-7">
                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                    <input defaultValue={1} name="facebook_chat" type="checkbox" />
                                                    <span className="slider round" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="FACEBOOK_PAGE_ID" />
                                            <div className="col-md-3">
                                                <label className="col-from-label">Facebook Page ID</label>
                                            </div>
                                            <div className="col-md-7">
                                                <input type="text" className="form-control" name="FACEBOOK_PAGE_ID" defaultValue placeholder="Facebook Page ID" required fdprocessedid="sqopla" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="qmq47v">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card bg-gray-light">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Please be carefull when you are configuring Facebook chat. For incorrect configuration you will not get messenger icon on your user-end site.</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group mar-no">
                                        <li className="list-group-item text-dark">1. Login into your facebook page</li>
                                        <li className="list-group-item text-dark">2. Find the About option of your facebook page.</li>
                                        <li className="list-group-item text-dark">3. At the very bottom, you can find the “Facebook Page ID”.</li>
                                        <li className="list-group-item text-dark">4. Go to Settings of your page and find the option of "Advance Messaging".</li>
                                        <li className="list-group-item text-dark">5. Scroll down that page and you will get "white listed domain".</li>
                                        <li className="list-group-item text-dark">6. Set your website domain name.</li>
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

export default FacebookChat