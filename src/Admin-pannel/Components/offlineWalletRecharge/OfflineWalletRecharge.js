
function OfflineWalletRecharge() {
    return (
        <>
       <div className="aiz-main-content">
  <div className="px-15px px-lg-25px">
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0 h6">Offline Wallet Recharge Requests</h5>
      </div>
      <div className="card-body">
        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
          <thead>
            <tr className="footable-header">
              <th className="footable-first-visible" style={{display: 'table-cell'}}>#</th><th style={{display: 'table-cell'}}>Name</th><th style={{display: 'table-cell'}}>Amount</th><th style={{display: 'table-cell'}}>Method</th><th style={{display: 'table-cell'}}>TXN ID</th><th style={{display: 'table-cell'}}>Photo</th><th style={{display: 'table-cell'}}>Approval</th><th className="footable-last-visible" style={{display: 'table-cell'}}>Date</th></tr>
          </thead>
          <tbody>
            <tr>
              <td className="footable-first-visible" style={{display: 'table-cell'}}>1</td><td style={{display: 'table-cell'}}>ETG Customer</td><td style={{display: 'table-cell'}}>2000</td><td style={{display: 'table-cell'}}>ICICI Bank</td><td style={{display: 'table-cell'}}>123123</td><td style={{display: 'table-cell'}}>
              </td><td style={{display: 'table-cell'}}>
                <label className="aiz-switch aiz-switch-success mb-0">
                  <input onchange="update_approved(this)" defaultValue={2} type="checkbox" />
                  <span className="slider round" />
                </label>
              </td><td className="footable-last-visible" style={{display: 'table-cell'}}>2022-11-28 10:46:43</td></tr><tr>
              <td className="footable-first-visible" style={{display: 'table-cell'}}>2</td><td style={{display: 'table-cell'}}>Mr Abdul</td><td style={{display: 'table-cell'}}>3000</td><td style={{display: 'table-cell'}}>Cheque Payment</td><td style={{display: 'table-cell'}}>123123</td><td style={{display: 'table-cell'}}>
              </td><td style={{display: 'table-cell'}}>
                <label className="aiz-switch aiz-switch-success mb-0">
                  <input onchange="update_approved(this)" defaultValue={8} type="checkbox" defaultChecked />
                  <span className="slider round" />
                </label>
              </td><td className="footable-last-visible" style={{display: 'table-cell'}}>2022-12-14 12:14:15</td></tr></tbody>
        </table>
        <div className="aiz-pagination">
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
export default OfflineWalletRecharge