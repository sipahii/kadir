
function SellerCommission() {
    return (
        <>
        <div className="aiz-main-content">
  <div className="px-15px px-lg-25px">
    <div className="row">
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header">
            <h3 className="mb-0 h6 text-center">Seller Commission Activatation</h3>
          </div>
          <div className="card-body text-center">
            <label className="aiz-switch aiz-switch-success mb-0">
              <input type="checkbox" onchange="updateSettings(this, 'vendor_commission_activation')" />
              <span className="slider round" />
            </label>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header">
            <h3 className="mb-0 h6 text-center">Category Based Commission</h3>
          </div>
          <div className="card-body text-center">
            <label className="aiz-switch aiz-switch-success mb-0">
              <input type="checkbox" onchange="updateSettings(this, 'category_wise_commission')" defaultChecked />
              <span className="slider round" />
            </label>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Seller Commission</h5>
          </div>
          <div className="card-body">
            <form className="form-horizontal" action="https://mmslfashions.in/admin/vendor_commission_update" method="POST" encType="multipart/form-data">
              <input type="hidden" name="_token" defaultValue="AKVy8smy6QbFWJTzlnCGdan7zurhMubXStmAxapI" />                    <div className="form-group row">
                <label className="col-md-4 col-from-label">Seller Commission</label>
                <div className="col-md-8">
                  <input type="hidden" name="types[]" defaultValue="vendor_commission" />
                  <div className="input-group">
                    <input type="number" lang="en" min={0} step="0.01" defaultValue={20} placeholder="Seller Commission" name="vendor_commission" className="form-control" fdprocessedid="fusv1" />
                    <div className="input-group-append">
                      <span className="input-group-text">%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group mb-0 text-right">
                <button type="submit" className="btn btn-primary" fdprocessedid="bkql3v">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Note</h5>
          </div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item text-muted">
                1. 20% of seller product price will be deducted from seller earnings.
              </li>
              <li className="list-group-item text-muted">
                2. If Category Based Commission is enbaled, Set seller commission percentage 0..
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Withdraw Seller Amount</h5>
          </div>
          <div className="card-body">
            <form className="form-horizontal" action="https://mmslfashions.in/admin/vendor_commission_update" method="POST" encType="multipart/form-data">
              <input type="hidden" name="_token" defaultValue="AKVy8smy6QbFWJTzlnCGdan7zurhMubXStmAxapI" />                    <div className="form-group row">
                <label className="col-md-4 col-from-label">Minimum Seller Amount Withdraw</label>
                <div className="col-md-8">
                  <input type="hidden" name="types[]" defaultValue="minimum_seller_amount_withdraw" />
                  <div className="input-group">
                    <input type="number" lang="en" min={0} step="0.01" defaultValue placeholder="Minimum Seller Amount Withdraw" name="minimum_seller_amount_withdraw" className="form-control" required fdprocessedid="cu0sz6i" />
                  </div>
                </div>
              </div>
              <div className="form-group mb-0 text-right">
                <button type="submit" className="btn btn-primary" fdprocessedid="1nqibi">Save</button>
              </div>
            </form>
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
export default SellerCommission