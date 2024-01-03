import { useGetAffiliateLogsQuery } from "../all-products/allproductsApi/allProductsApi"

function AffiliateLogs() {

  const { isLoading, data } = useGetAffiliateLogsQuery();

  console.log('logsData---', data)

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 h6">Affiliate Logs</h5>
            </div>
            <div className="card-body">
              <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                <thead>
                  <tr className="footable-header">
                    <th style={{ display: 'table-cell' }}>#</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Referred By</th><th style={{ display: 'table-cell' }}>Referral User</th><th style={{ display: 'table-cell' }}>Amount</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Order Id</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Referral Type</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Product</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Date</th></tr></thead>
                <tbody>

                  {isLoading ? <h2>Loading...</h2> :
                    data?.map((item, i) => {
                      return <tr key={i}>
                        <td
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          {i + 1}
                        </td>
                        <td style={{ display: "table-cell" }}>{item.referredBy?.firstname + " " + item.referredBy?.lastname}</td>
                        <td style={{ display: "table-cell" }}>{item.referralUser?.firstname + " " + item.referralUser?.lastname}</td>
                        <td style={{ display: "table-cell" }}>{item.points}</td>
                        {/* <td style={{ display: "table-cell" }}>
                        <a href="https://mmslfashions.in/admin/affiliate/verification/1">
                          <span className="badge badge-inline badge-info">
                            Show
                          </span>
                        </a>
                      </td> */}
                        <td style={{ display: "table-cell" }}>{item.order_Id}</td>
                        <td style={{ display: "table-cell" }}>----</td>
                        <td style={{ display: "table-cell" }}>{item.product}</td>
                        <td style={{ display: "table-cell" }}>{item.createdAt}</td>
                      </tr>
                    })
                  }

                </tbody>
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
export default AffiliateLogs