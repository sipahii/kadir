
function VerificationForm() {
    return (
        <>
        <div className="aiz-main-content">
  <div className="px-15px px-lg-25px">
    <div className="col-sm-12">
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0 h6">Seller Verification Form</h5>
        </div>
        <div className="card-body">
          <form action="https://mmslfashions.in/admin/verification/form" method="post">
            <input type="hidden" name="_token" defaultValue="Gg4ztVuENA5SRVWobfiTqHZoeE8KcHxjx34dmZDw" />					<div className="row">
              <div className="col-lg-8 form-horizontal" id="form">
                <div className="form-group row" style={{background: 'rgba(0,0,0,0.1)', padding: '10px 0'}}>
                  <input type="hidden" name="type[]" defaultValue="text" />
                  <div className="col-lg-3">
                    <label className="col-from-label">Text</label>
                  </div>
                  <div className="col-lg-7">
                    <input className="form-control" type="text" name="label[]" defaultValue="Your name" placeholder="Label" fdprocessedid="8bq46s" />
                  </div>
                  <div className="col-lg-2"><span className="btn btn-icon btn-circle icon-lg" onclick="delete_choice_clearfix(this)"><i className="las la-times" /></span></div>
                </div>
                <div className="form-group row" style={{background: 'rgba(0,0,0,0.1)', padding: '10px 0'}}>
                  <input type="hidden" name="type[]" defaultValue="text" />
                  <div className="col-lg-3">
                    <label className="col-from-label">Text</label>
                  </div>
                  <div className="col-lg-7">
                    <input className="form-control" type="text" name="label[]" defaultValue="Shop name" placeholder="Label" fdprocessedid="hw2sw5" />
                  </div>
                  <div className="col-lg-2"><span className="btn btn-icon btn-circle icon-lg" onclick="delete_choice_clearfix(this)"><i className="las la-times" /></span></div>
                </div>
                <div className="form-group row" style={{background: 'rgba(0,0,0,0.1)', padding: '10px 0'}}>
                  <input type="hidden" name="type[]" defaultValue="text" />
                  <div className="col-lg-3">
                    <label className="col-from-label">Text</label>
                  </div>
                  <div className="col-lg-7">
                    <input className="form-control" type="text" name="label[]" defaultValue="Email" placeholder="Label" fdprocessedid="zjezh4h" />
                  </div>
                  <div className="col-lg-2"><span className="btn btn-icon btn-circle icon-lg" onclick="delete_choice_clearfix(this)"><i className="las la-times" /></span></div>
                </div>
                <div className="form-group row" style={{background: 'rgba(0,0,0,0.1)', padding: '10px 0'}}>
                  <input type="hidden" name="type[]" defaultValue="text" />
                  <div className="col-lg-3">
                    <label className="col-from-label">Text</label>
                  </div>
                  <div className="col-lg-7">
                    <input className="form-control" type="text" name="label[]" defaultValue="License No" placeholder="Label" fdprocessedid="4pmtzu" />
                  </div>
                  <div className="col-lg-2"><span className="btn btn-icon btn-circle icon-lg" onclick="delete_choice_clearfix(this)"><i className="las la-times" /></span></div>
                </div>
                <div className="form-group row" style={{background: 'rgba(0,0,0,0.1)', padding: '10px 0'}}>
                  <input type="hidden" name="type[]" defaultValue="text" />
                  <div className="col-lg-3">
                    <label className="col-from-label">Text</label>
                  </div>
                  <div className="col-lg-7">
                    <input className="form-control" type="text" name="label[]" defaultValue="Full Address" placeholder="Label" fdprocessedid="uladkd" />
                  </div>
                  <div className="col-lg-2"><span className="btn btn-icon btn-circle icon-lg" onclick="delete_choice_clearfix(this)"><i className="las la-times" /></span></div>
                </div>
                <div className="form-group row" style={{background: 'rgba(0,0,0,0.1)', padding: '10px 0'}}>
                  <input type="hidden" name="type[]" defaultValue="text" />
                  <div className="col-lg-3">
                    <label className="col-from-label">Text</label>
                  </div>
                  <div className="col-lg-7">
                    <input className="form-control" type="text" name="label[]" defaultValue="Phone Number" placeholder="Label" fdprocessedid="6wdbyg" />
                  </div>
                  <div className="col-lg-2"><span className="btn btn-icon btn-circle icon-lg" onclick="delete_choice_clearfix(this)"><i className="las la-times" /></span></div>
                </div>
                <div className="form-group row" style={{background: 'rgba(0,0,0,0.1)', padding: '10px 0'}}>
                  <input type="hidden" name="type[]" defaultValue="file" />
                  <div className="col-lg-3">
                    <label className="col-from-label">File</label>
                  </div>
                  <div className="col-lg-7">
                    <input className="form-control" type="text" name="label[]" defaultValue="Tax Papers" placeholder="Label" fdprocessedid="2euxyk" />
                  </div>
                  <div className="col-lg-2"><span className="btn btn-icon btn-circle icon-lg" onclick="delete_choice_clearfix(this)"><i className="las la-times" /></span></div>
                </div>
              </div>
              <div className="col-lg-4">
                <ul className="list-group">
                  <li className="list-group-item btn" style={{textAlign: 'left'}} onclick="appenddToForm('text')">Text Input</li>
                  <li className="list-group-item btn" style={{textAlign: 'left'}} onclick="appenddToForm('select')">Select</li>
                  <li className="list-group-item btn" style={{textAlign: 'left'}} onclick="appenddToForm('multi-select')">Multiple Select</li>
                  <li className="list-group-item btn" style={{textAlign: 'left'}} onclick="appenddToForm('radio')">Radio</li>
                  <li className="list-group-item btn" style={{textAlign: 'left'}} onclick="appenddToForm('file')">File</li>
                </ul>
              </div>
            </div>
            <div className="form-group mb-0 text-right">
              <button type="submit" className="btn btn-primary" fdprocessedid="t5ijzb">Save</button>
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
export default VerificationForm