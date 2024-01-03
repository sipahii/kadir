function SmsTemplates() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">SMS Templates</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-3">
                                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                <a className="nav-link" id="v-pills-tab-2" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-profile" aria-selected="false">Phone Number Verification</a>
                                                <a className="nav-link" id="v-pills-tab-2" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-profile" aria-selected="false">Password Reset</a>
                                                <a className="nav-link" id="v-pills-tab-2" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-profile" aria-selected="false">Order Placement</a>
                                                <a className="nav-link" id="v-pills-tab-2" data-toggle="pill" href="#v-pills-4" role="tab" aria-controls="v-pills-profile" aria-selected="false">Delivery Status Change</a>
                                                <a className="nav-link" id="v-pills-tab-2" data-toggle="pill" href="#v-pills-5" role="tab" aria-controls="v-pills-profile" aria-selected="false">Payment Status Change</a>
                                                <a className="nav-link active" id="v-pills-tab-2" data-toggle="pill" href="#v-pills-6" role="tab" aria-controls="v-pills-profile" aria-selected="true">Assign Delivery Boy</a>
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <div className="tab-content" id="v-pills-tabContent">
                                                <div className="tab-pane fade" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-tab-1">
                                                    <form action="https://mmslfashions.in/admin/sms-templates/1" method="POST">
                                                        <input name="_method" type="hidden" defaultValue="PATCH" />
                                                        <input type="hidden" name="_token" defaultValue="yvsI85OUsNWahvVWddcBV8G0DeeFRu9FCTlKnQDo" />
                                                        <div className="form-group row">
                                                            <label className="col-md-2 col-form-label">SMS Body</label>
                                                            <div className="col-md-10">
                                                                <textarea name="body" className="form-control" placeholder="Type.." rows={6} required defaultValue={"[[code]] is your verification code for [[site_name]]."} />
                                                                <small className="form-text text-danger">**N.B : Do Not Change The Variables Like [[ ____ ]].**</small>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-md-2 col-form-label">Template ID</label>
                                                            <div className="col-md-10">
                                                                <input type="text" name="template_id" defaultValue className="form-control" placeholder="Template ID" fdprocessedid="eb823q" />
                                                                <small className="form-text text-danger">**N.B : Template ID is Required Only for Fast2SMS DLT Manual**</small>
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-3 text-right">
                                                            <button type="submit" className="btn btn-primary" fdprocessedid="9fhqv">Update Settings</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-tab-1">
                                                    <form action="https://mmslfashions.in/admin/sms-templates/2" method="POST">
                                                        <input name="_method" type="hidden" defaultValue="PATCH" />
                                                        <input type="hidden" name="_token" defaultValue="yvsI85OUsNWahvVWddcBV8G0DeeFRu9FCTlKnQDo" />
                                                        <div className="form-group row">
                                                            <label className="col-md-2 col-form-label">SMS Body</label>
                                                            <div className="col-md-10">
                                                                <textarea name="body" className="form-control" placeholder="Type.." rows={6} required defaultValue={"Your password reset code is [[code]]."} />
                                                                <small className="form-text text-danger">**N.B : Do Not Change The Variables Like [[ ____ ]].**</small>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-md-2 col-form-label">Template ID</label>
                                                            <div className="col-md-10">
                                                                <input type="text" name="template_id" defaultValue className="form-control" placeholder="Template ID" />
                                                                <small className="form-text text-danger">**N.B : Template ID is Required Only for Fast2SMS DLT Manual**</small>
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-3 text-right">
                                                            <button type="submit" className="btn btn-primary">Update Settings</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-tab-1">
                                                    <form action="https://mmslfashions.in/admin/sms-templates/3" method="POST">
                                                        <input name="_method" type="hidden" defaultValue="PATCH" />
                                                        <input type="hidden" name="_token" defaultValue="yvsI85OUsNWahvVWddcBV8G0DeeFRu9FCTlKnQDo" />                                                                                            <div className="form-group row">
                                                            <div className="col-md-2">
                                                                <label className="col-from-label">Activation</label>
                                                            </div>
                                                            <div className="col-md-10">
                                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                                    <input defaultValue={1} name="status" type="checkbox" defaultChecked />
                                                                    <span className="slider round" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-md-2 col-form-label">SMS Body</label>
                                                            <div className="col-md-10">
                                                                <textarea name="body" className="form-control" placeholder="Type.." rows={6} required defaultValue={"Your order has been placed and Order Code is [[order_code]]"} />
                                                                <small className="form-text text-danger">**N.B : Do Not Change The Variables Like [[ ____ ]].**</small>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-md-2 col-form-label">Template ID</label>
                                                            <div className="col-md-10">
                                                                <input type="text" name="template_id" defaultValue className="form-control" placeholder="Template ID" />
                                                                <small className="form-text text-danger">**N.B : Template ID is Required Only for Fast2SMS DLT Manual**</small>
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-3 text-right">
                                                            <button type="submit" className="btn btn-primary">Update Settings</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="tab-pane fade" id="v-pills-4" role="tabpanel" aria-labelledby="v-pills-tab-1">
                                                    <form action="https://mmslfashions.in/admin/sms-templates/4" method="POST">
                                                        <input name="_method" type="hidden" defaultValue="PATCH" />
                                                        <input type="hidden" name="_token" defaultValue="yvsI85OUsNWahvVWddcBV8G0DeeFRu9FCTlKnQDo" />                                                                                            <div className="form-group row">
                                                            <div className="col-md-2">
                                                                <label className="col-from-label">Activation</label>
                                                            </div>
                                                            <div className="col-md-10">
                                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                                    <input defaultValue={1} name="status" type="checkbox" defaultChecked />
                                                                    <span className="slider round" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-md-2 col-form-label">SMS Body</label>
                                                            <div className="col-md-10">
                                                                <textarea name="body" className="form-control" placeholder="Type.." rows={6} required defaultValue={"Your delivery status has been updated to [[delivery_status]]  for Order code : [[order_code]]"} />
                                                                <small className="form-text text-danger">**N.B : Do Not Change The Variables Like [[ ____ ]].**</small>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-md-2 col-form-label">Template ID</label>
                                                            <div className="col-md-10">
                                                                <input type="text" name="template_id" defaultValue className="form-control" placeholder="Template ID" />
                                                                <small className="form-text text-danger">**N.B : Template ID is Required Only for Fast2SMS DLT Manual**</small>
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-3 text-right">
                                                            <button type="submit" className="btn btn-primary">Update Settings</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="tab-pane fade" id="v-pills-5" role="tabpanel" aria-labelledby="v-pills-tab-1">
                                                    <form action="https://mmslfashions.in/admin/sms-templates/5" method="POST">
                                                        <input name="_method" type="hidden" defaultValue="PATCH" />
                                                        <input type="hidden" name="_token" defaultValue="yvsI85OUsNWahvVWddcBV8G0DeeFRu9FCTlKnQDo" />                                                                                            <div className="form-group row">
                                                            <div className="col-md-2">
                                                                <label className="col-from-label">Activation</label>
                                                            </div>
                                                            <div className="col-md-10">
                                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                                    <input defaultValue={1} name="status" type="checkbox" defaultChecked />
                                                                    <span className="slider round" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-md-2 col-form-label">SMS Body</label>
                                                            <div className="col-md-10">
                                                                <textarea name="body" className="form-control" placeholder="Type.." rows={6} required defaultValue={"Your payment status has been updated to [[payment_status]] for Order code : [[order_code]]"} />
                                                                <small className="form-text text-danger">**N.B : Do Not Change The Variables Like [[ ____ ]].**</small>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-md-2 col-form-label">Template ID</label>
                                                            <div className="col-md-10">
                                                                <input type="text" name="template_id" defaultValue className="form-control" placeholder="Template ID" />
                                                                <small className="form-text text-danger">**N.B : Template ID is Required Only for Fast2SMS DLT Manual**</small>
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-3 text-right">
                                                            <button type="submit" className="btn btn-primary">Update Settings</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="tab-pane fade show active" id="v-pills-6" role="tabpanel" aria-labelledby="v-pills-tab-1">
                                                    <form action="https://mmslfashions.in/admin/sms-templates/6" method="POST">
                                                        <input name="_method" type="hidden" defaultValue="PATCH" />
                                                        <input type="hidden" name="_token" defaultValue="yvsI85OUsNWahvVWddcBV8G0DeeFRu9FCTlKnQDo" />                                                                                            <div className="form-group row">
                                                            <div className="col-md-2">
                                                                <label className="col-from-label">Activation</label>
                                                            </div>
                                                            <div className="col-md-10">
                                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                                    <input defaultValue={1} name="status" type="checkbox" defaultChecked />
                                                                    <span className="slider round" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-md-2 col-form-label">SMS Body</label>
                                                            <div className="col-md-10">
                                                                <textarea name="body" className="form-control" placeholder="Type.." rows={6} required defaultValue={"You are assigned to deliver an order. Order code : [[order_code]]"} />
                                                                <small className="form-text text-danger">**N.B : Do Not Change The Variables Like [[ ____ ]].**</small>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-md-2 col-form-label">Template ID</label>
                                                            <div className="col-md-10">
                                                                <input type="text" name="template_id" defaultValue className="form-control" placeholder="Template ID" />
                                                                <small className="form-text text-danger">**N.B : Template ID is Required Only for Fast2SMS DLT Manual**</small>
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-3 text-right">
                                                            <button type="submit" className="btn btn-primary">Update Settings</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
export default SmsTemplates;