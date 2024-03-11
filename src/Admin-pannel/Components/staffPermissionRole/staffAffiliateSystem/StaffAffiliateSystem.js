
function StaffAffiliateSystem(){
  return (
    <>
      <div className="bd-example">
        <ul className="list-group">
          <li className="list-group-item bg-light" aria-current="true">Affiliate System</li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">Affiliate Registration Form Config</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={175} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">Affiliate Configurations</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={176} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">View Affiliate Users</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={177} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">Pay To Affiliate User</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={178} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">Affiliate Users Payment History</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={179} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">View All Referral Users</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={180} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">View Affiliate Withdraw Requests</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={181} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">Accept Affiliate Withdraw Requests</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={182} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">Reject Affiliate Withdraw Request</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={183} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">View Affiliate Logs</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={184} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
export default StaffAffiliateSystem;