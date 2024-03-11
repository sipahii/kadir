import { useGetRefferalUsersQuery } from "../all-products/allproductsApi/allProductsApi"

function RefferalUsers() {

  const { isLoading, data } = useGetRefferalUsersQuery();
  console.log('refferalusersData----', data)

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 h6">Refferal Users</h5>
            </div>
            <div className="card-body">
              <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                <thead>
                  <tr className="footable-header">
                    <th style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Reffered By</th>
                    <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Email(Reffered by)</th>
                    <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Mobile(Reffered by)</th>
                    <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Reffered To</th>
                    <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Email(Reffered to)</th>
                    <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Mobile(Reffered to)</th>
                    {/* <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Reffered By</th> */}
                  </tr>
                </thead>
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
                        <td style={{ display: "table-cell" }}>{item.reffered_by?.user_id?.firstname + " " + item.reffered_by?.user_id?.lastname}</td>
                        <td style={{ display: "table-cell" }}>{item.reffered_by?.email}</td>
                        <td style={{ display: "table-cell" }}>{item.reffered_by?.mobile}</td>
                        <td style={{ display: "table-cell" }}>{item.reffered_to?.firstname + " " + item.reffered_to?.lastname}</td>
                        <td style={{ display: "table-cell" }}>{item.reffered_to?.email}</td>
                        <td style={{ display: "table-cell" }}>{item.reffered_to?.mobile}</td>
                        {/* <td style={{ display: "table-cell" }}>---</td> */}

                        {/* <td style={{ display: "table-cell" }}>
                          <a href="https://mmslfashions.in/admin/affiliate/verification/1">
                            <span className="badge badge-inline badge-info">
                              Show
                            </span>
                          </a>
                        </td> */}
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
export default RefferalUsers