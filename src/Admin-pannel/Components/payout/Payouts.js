
function Payouts() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="card">
            <div className="card-header">
              <h3 className="mb-0 h6">Seller Payments</h3>
            </div>
            <div className="card-body">
              <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                <thead>
                  <tr className="footable-header">
                    <th data-breakpoints="lg" className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Date</th><th style={{ display: 'table-cell' }}>Seller</th><th style={{ display: 'table-cell' }}>Amount</th><th data-breakpoints="lg" className="footable-last-visible" style={{ display: 'table-cell' }}>Payment Details</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td><td style={{ display: 'table-cell' }}>2023-01-13 11:48:11</td><td style={{ display: 'table-cell' }}>
                      Abaris Seller (Abaris Products)
                    </td><td style={{ display: 'table-cell' }}>
                      ZK50.00
                    </td><td className="footable-last-visible" style={{ display: 'table-cell' }}>Bank payment </td></tr></tbody>
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
export default Payouts