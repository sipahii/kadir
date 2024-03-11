import { Link } from "react-router-dom";

function DigitalProducts() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar text-left mt-2 mb-3">
            <div className="text-md-right">
              <Link to="/admin/digitalproducts/create" className="btn btn-circle btn-info">
                <span>Add New Digital Product</span>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-header row gutters-5">
              <div className="col text-center text-md-left">
                <h5 className="mb-md-0 h6">Digital Products</h5>
              </div>
              <div className="col-md-4">
                <form className id="sort_digital_products" action method="GET">
                  <div className="input-group input-group-sm">
                    <input type="text" className="form-control" id="search" name="search" placeholder="Search" />
                  </div>
                </form>
              </div>
            </div>
            <div className="card-body">
              <table className="table aiz-table mb-0 footable footable-1 breakpoint breakpoint-lg" style={{}}>
                <thead>
                  <tr className="footable-header">
                    <th data-breakpoints="lg" style={{ display: 'none' }}>#</th>
                    <th width="30%" style={{ display: 'table-cell' }}>Name</th>
                    <th data-breakpoints="lg" style={{ display: 'none' }}>Added By</th>
                    <th data-breakpoints="lg" style={{ display: 'none' }}>Photo</th>
                    <th data-breakpoints="lg" style={{ display: 'none' }}>Base Price</th>
                    <th data-breakpoints="lg" style={{ display: 'none' }}>Todays Deal</th>
                    <th data-breakpoints="lg" style={{ display: 'none' }}>Published</th>
                    <th data-breakpoints="lg" style={{ display: 'none' }}>Featured</th>
                    <th data-breakpoints="lg" style={{ display: 'none' }}>Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="footable-empty">
                    <td colSpan={1}>Nothing found</td>
                  </tr>
                </tbody>
              </table>
              <div className="aiz-pagination">
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">

        </div>
      </div>

    </>
  )
}
export default DigitalProducts;