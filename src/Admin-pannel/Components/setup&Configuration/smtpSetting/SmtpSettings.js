
import Form from 'react-bootstrap/Form';
function SmtpSettings() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">SMTP Settings</h5>
                </div>

                <div className="card-body">

                  <form className="form-horizontal" action="https://mmslfashions.in/admin/env_key_update" method="POST">
                    <input type="hidden" name="_token" defaultValue="mA5KQp7HZlXz1fB8P6Hv66tiXkkVBymNn0MEMOHZ" />
                    <div className="form-group row">
                      <input type="hidden" name="types[]" defaultValue="MAIL_DRIVER" />
                      <label className="col-md-3 col-form-label">Type</label>
                      <div className="col-md-9">
                        <Form.Select aria-label="Default select example">
                          <option>SMTP</option>
                          <option value="1" className='suc'>Send Mail</option>
                          <option value="2" className='suc'>SMTP</option>
                          <option value="3" className='suc'>Mailgun</option>
                        </Form.Select>
                      </div>
                    </div>
                    <div id="smtp">
                      <div className="form-group row">
                        <input type="hidden" name="types[]" defaultValue="MAIL_HOST" />
                        <div className="col-md-3">
                          <label className="col-from-label">MAIL HOST</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control inp-control" name="MAIL_HOST" defaultValue placeholder="MAIL HOST" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <input type="hidden" name="types[]" defaultValue="MAIL_PORT" />
                        <div className="col-md-3">
                          <label className="col-from-label">MAIL PORT</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control inp-control" name="MAIL_PORT" defaultValue={465} placeholder="MAIL PORT" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <input type="hidden" name="types[]" defaultValue="MAIL_USERNAME" />
                        <div className="col-md-3">
                          <label className="col-from-label">MAIL USERNAME</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control inp-control" name="MAIL_USERNAME" defaultValue placeholder="MAIL USERNAME" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <input type="hidden" name="types[]" defaultValue="MAIL_PASSWORD" />
                        <div className="col-md-3">
                          <label className="col-from-label">MAIL PASSWORD</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control inp-control" name="MAIL_PASSWORD" defaultValue placeholder="MAIL PASSWORD" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <input type="hidden" name="types[]" defaultValue="MAIL_ENCRYPTION" />
                        <div className="col-md-3">
                          <label className="col-from-label">MAIL ENCRYPTION</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control inp-control" name="MAIL_ENCRYPTION" defaultValue="ssl" placeholder="MAIL ENCRYPTION" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <input type="hidden" name="types[]" defaultValue="MAIL_FROM_ADDRESS" />
                        <div className="col-md-3">
                          <label className="col-from-label">MAIL FROM ADDRESS</label>
                        </div>
                        <div className="col-md-9">
                          <input type="email" className="form-control inp-control" name="MAIL_FROM_ADDRESS" defaultValue placeholder="MAIL FROM ADDRESS" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <input type="hidden" name="types[]" defaultValue="MAIL_FROM_NAME" />
                        <div className="col-md-3">
                          <label className="col-from-label">MAIL FROM NAME</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control inp-control" name="MAIL_FROM_NAME" defaultValue="no-reply" placeholder="MAIL FROM NAME" />
                        </div>
                      </div>
                    </div>
                    <div id="mailgun" style={{ display: 'none' }}>
                      <div className="form-group row">
                        <input type="hidden" name="types[]" defaultValue="MAILGUN_DOMAIN" />
                        <div className="col-md-3">
                          <label className="col-from-label">MAILGUN DOMAIN</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control inp-control" name="MAILGUN_DOMAIN" defaultValue placeholder="MAILGUN DOMAIN" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <input type="hidden" name="types[]" defaultValue="MAILGUN_SECRET" />
                        <div className="col-md-3">
                          <label className="col-from-label">MAILGUN SECRET</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control inp-control" name="MAILGUN_SECRET" defaultValue placeholder="MAILGUN SECRET" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-0 text-right">
                      <button type="submit" className="btn btn-primary">Save Configuration</button>
                    </div>
                  </form>

                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">Test SMTP configuration</h5>
                </div>
                <div className="card-body">

                  <form action="https://mmslfashions.in/admin/newsletter/test/smtp" method="post">
                    <input type="hidden" name="_token" defaultValue="mA5KQp7HZlXz1fB8P6Hv66tiXkkVBymNn0MEMOHZ" />
                    <div className="row">
                      <div className="col">
                        <input type="email" className="form-control" name="email" defaultValue="seoabaris@gmail.com" placeholder="Enter your email address" />
                      </div>
                      <div className="col-auto">
                        <button type="submit" className="btn btn-primary">Send test email</button>
                      </div>
                    </div>
                  </form>

                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">Instruction</h5>
                </div>
                <div className="card-body">
                  <p className="text-danger red-danger">Please be carefull when you are configuring SMTP. For incorrect configuration you will get error at the time of order place, new registration, sending newsletter.</p>
                  <h6 className="text-muted">For Non-SSL</h6>
                  <ul className="list-group">
                    <li className="list-group-item text-dark">Select sendmail for Mail Driver if you face any issue after configuring smtp as Mail Driver</li>
                    <li className="list-group-item text-dark">Set Mail Host according to your server Mail Client Manual Settings</li>
                    <li className="list-group-item text-dark">Set Mail port as 587</li>
                    <li className="list-group-item text-dark">Set Mail Encryption as ssl if you face issue with tls</li>
                  </ul>
                  <br />
                  <h6 className="text-muted">For SSL</h6>
                  <ul className="list-group mar-no">
                    <li className="list-group-item text-dark">Select sendmail for Mail Driver if you face any issue after configuring smtp as Mail Driver</li>
                    <li className="list-group-item text-dark">Set Mail Host according to your server Mail Client Manual Settings</li>
                    <li className="list-group-item text-dark">Set Mail port as 465</li>
                    <li className="list-group-item text-dark">Set Mail Encryption as ssl</li>
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
export default SmtpSettings