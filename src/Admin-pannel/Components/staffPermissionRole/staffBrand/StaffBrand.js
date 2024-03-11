
function StaffBrand() {
  return (
    <>
      <div className="bd-example">
        <ul className="list-group">
          <li className="list-group-item bg-light" aria-current="true">Brand</li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">View All Brands</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={19} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">Add Brand</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={20} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">Edit Brand</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={21} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">Delete Brand</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={22} />
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
export default StaffBrand;