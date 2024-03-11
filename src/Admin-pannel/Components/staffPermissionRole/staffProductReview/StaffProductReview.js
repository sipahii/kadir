
function StaffProductReview() {
  return (
    <>
      <div className="bd-example">
        <ul className="list-group">
          <li className="list-group-item bg-light" aria-current="true">Product Review</li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">View Product Reviews</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={35} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                <div className="p-2 border mt-1 mb-2">
                  <label className="control-label d-flex">Publish Product Review</label>
                  <label className="aiz-switch aiz-switch-success">
                    <input type="checkbox" name="permissions[]" className="form-control demo-sw" defaultValue={36} />
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
export default StaffProductReview;