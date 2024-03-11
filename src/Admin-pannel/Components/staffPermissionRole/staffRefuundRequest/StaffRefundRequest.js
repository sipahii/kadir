
function StaffRefundRequest(){
  return(
    <>
      <div className="bd-example">
        <ul className="list-group">
          <li className="list-group-item bg-light" aria-current="true">Refund Request</li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">View Refund Requests</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={169} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">Accept Refund Request</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={170} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">Reject Refund Request</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={171} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">View Approved Refund Requests</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={172} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">View Rejected Refund Requests</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={173} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">Refund Request Configuration</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={174} />
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
export default StaffRefundRequest