function BulkSMS() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="fs-18 mb-0">Send Bulk SMS</h3>
                                </div>
                                <form className="form-horizontal" action="https://mmslfashions.in/admin/sms-send" method="POST" encType="multipart/form-data">
                                    <input type="hidden" name="_token" defaultValue="Xu5GTasdShJ8Mb4DnbZuXHgHlus31K693Rksc8am" />                <div className="card-body">
                                        <div className="form-group row">
                                            <label className="col-sm-2 control-label" htmlFor="name">Mobile Users</label>
                                            <div className="col-sm-10">
                                                <div className="dropdown bootstrap-select show-tick form-control aiz-"><select className="form-control aiz-selectpicker" data-live-search="true" name="user_phones[]" multiple tabIndex={-98}>
                                                    <option value={"08851746286"}>Abaris Seller - 08851746286</option>
                                                    <option value="+91-8920073535">Azharuddin Shamim - +91-8920073535</option>
                                                    <option value="+aabarissolution@gma">abarissolution@gmail.com - +aabarissolution@gma</option>
                                                </select><button type="button" className="btn dropdown-toggle btn-light bs-placeholder" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Nothing selected" fdprocessedid="2njzn"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Nothing selected</div></div> </div></button><div className="dropdown-menu" style={{ overflow: 'hidden' }}><div className="bs-searchbox"><input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-1" aria-autocomplete="list" /></div><div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1} aria-multiselectable="true" style={{ overflowY: 'auto' }}><ul className="dropdown-menu inner show" role="presentation" style={{ marginTop: 0, marginBottom: 0 }}><li><a role="option" className="dropdown-item" id="bs-select-1-0" tabIndex={0} aria-selected="false"><span className=" bs-ok-default check-mark" /><span className="text">Abaris Seller - 08851746286</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-1" tabIndex={0} aria-selected="false"><span className=" bs-ok-default check-mark" /><span className="text">Azharuddin Shamim - +91-8920073535</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-2" tabIndex={0} aria-selected="false"><span className=" bs-ok-default check-mark" /><span className="text">abarissolution@gmail.com - +aabarissolution@gma</span></a></li></ul></div></div></div>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 control-label" htmlFor="name">SMS content</label>
                                            <div className="col-sm-10">
                                                <textarea className="form-control" name="content" required defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-2 col-form-label">Template ID</label>
                                            <div className="col-md-10">
                                                <input type="text" name="template_id" className="form-control" placeholder="Template ID" fdprocessedid="d2nnob" />
                                                <small className="form-text text-danger">**N.B : Template ID is Required Only for Fast2SMS DLT Manual **</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-primary" type="submit" fdprocessedid="2vptn">Send</button>
                                    </div>
                                </form>
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
export default BulkSMS; 