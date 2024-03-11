function ContactInfoWidget() {
    return (
        <>
            <div className="col-lg-6">
                <div className="card shadow-none bg-light">
                    <div className="card-header">
                        <h6 className="mb-0">Contact Info Widget</h6>
                    </div>
                    <div className="card-body">
                        <form action="https://mmslfashions.in/admin/business-settings/update" method="POST" encType="multipart/form-data">
                            <input type="hidden" name="_token" defaultValue="MfWj9eEof7fNq0mKB42pyG49sPDPkHAVyVSS7UBT" />                                <div className="form-group">
                                <label>Contact address (Translatable)</label>
                                <input type="hidden" name="types[][en]" defaultValue="contact_address" />
                                <input type="text" className="form-control" placeholder="Address" name="contact_address" defaultValue="Sector 63 Noida" fdprocessedid="kp33wr" />
                            </div>
                            <div className="form-group">
                                <label>Contact phone</label>
                                <input type="hidden" name="types[]" defaultValue="contact_phone" />
                                <input type="text" className="form-control" placeholder="Phone" name="contact_phone" defaultValue="+91-9971090286" fdprocessedid="q904pm" />
                            </div>
                            <div className="form-group">
                                <label>Contact email</label>
                                <input type="hidden" name="types[]" defaultValue="contact_email" />
                                <input type="text" className="form-control" placeholder="Email" name="contact_email" defaultValue="chinu26.pradeep@gmail.com" fdprocessedid="bx51do" />
                            </div>
                            <div className="text-right">
                                <button type="submit" className="btn btn-primary" fdprocessedid="wfxdh">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactInfoWidget;