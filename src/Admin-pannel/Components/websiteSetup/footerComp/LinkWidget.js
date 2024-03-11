function LinkWidget() {
    return (
        <>
            <div className="col-lg-12">
                <div className="card shadow-none bg-light">
                    <div className="card-header">
                        <h6 className="mb-0">Link Widget One</h6>
                    </div>
                    <div className="card-body">
                        <form action="https://mmslfashions.in/admin/business-settings/update" method="POST" encType="multipart/form-data">
                            <input type="hidden" name="_token" defaultValue="MfWj9eEof7fNq0mKB42pyG49sPDPkHAVyVSS7UBT" />    							<div className="form-group">
                                <label>Title (Translatable)</label>
                                <input type="hidden" name="types[][en]" defaultValue="widget_one" />
                                <input type="text" className="form-control" placeholder="Widget title" name="widget_one" defaultValue fdprocessedid="370vgu" />
                            </div>
                            <div className="form-group">
                                <label>Links - (Translatable Label)</label>
                                <div className="w3-links-target">
                                    <input type="hidden" name="types[][en]" defaultValue="widget_one_labels" />
                                    <input type="hidden" name="types[]" defaultValue="widget_one_links" />
                                </div>
                                <button type="button" className="btn btn-soft-secondary btn-sm" data-toggle="add-more" data-content="<div class=&quot;row gutters-5&quot;>
    										<div class=&quot;col-4&quot;>
    											<div class=&quot;form-group&quot;>
    												<input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Label&quot; name=&quot;widget_one_labels[]&quot;>
    											</div>
    										</div>
    										<div class=&quot;col&quot;>
    											<div class=&quot;form-group&quot;>
    												<input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;http://&quot; name=&quot;widget_one_links[]&quot;>
    											</div>
    										</div>
    										<div class=&quot;col-auto&quot;>
    											<button type=&quot;button&quot; class=&quot;mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger&quot; data-toggle=&quot;remove-parent&quot; data-parent=&quot;.row&quot;>
    												<i class=&quot;las la-times&quot;></i>
    											</button>
    										</div>
    									</div>" data-target=".w3-links-target" fdprocessedid="kprrxd">
                                    Add New
                                </button>
                            </div>
                            <div className="text-right">
                                <button type="submit" className="btn btn-primary" fdprocessedid="j0en0r">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LinkWidget;