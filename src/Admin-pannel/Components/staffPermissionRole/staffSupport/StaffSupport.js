
function StaffSupport(){
  return (
    <>
      <div className="bd-example">
        <ul className="list-group">
          <li className="list-group-item bg-light" aria-current="true">Support</li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">View All Support Tickets</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={97} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">Reply To Support Tickets</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={98} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">View All Product Queries</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={99} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">Reply To Product Queries</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={100} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">View All Product Conversations</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={212} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">Reply To Product Conversations</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={213} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">Delete Product Conversations</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={214} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">View All Product Conversations</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={215} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">Reply To Product Conversations</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={216} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">Delete Product Conversations</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={217} />
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
export default StaffSupport