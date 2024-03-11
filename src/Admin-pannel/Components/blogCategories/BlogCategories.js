import { Link } from "react-router-dom";
import { useDeleteBlogCategoryMutation, useGetBlogsCategoryQuery } from "../all-products/allproductsApi/allProductsApi";

function BlogCategories() {

  const { isLoading, data } = useGetBlogsCategoryQuery();
  console.log(data);

  const [deleteBlogcat, response] = useDeleteBlogCategoryMutation();

  const deleteBlogCategoryData = (id) => {
    deleteBlogcat(id)
  }

  console.log(response);

  if (response.isSuccess === true) {
    alert('SellerBanner deleted Successfully')
  }

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar text-left mt-2 mb-3">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="h3 " id="bg_categories">All Blog Categories</h1>
              </div>
              <div className="col-md-6 text-md-right">
                <Link to="create" className="btn btn-primary add_categories">
                  <span className="text_categories">Add New category</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header d-block d-md-flex">
              <h5 className="mb-0 h6">Blog Categories</h5>
              <form id="sort_categories">
                <div className="box-inline pad-rgt pull-left">
                  <div style={{ minWidth: 200 }}>
                    <input type="text" className="form-control" id="search" name="search" placeholder="Type name & Enter" />
                  </div>
                </div>
              </form>
            </div>
            <div className="card-body">


              {isLoading ? <h2>Loading...</h2>
                : <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                  <thead>
                    <tr className="footable-header">
                      <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                      <th width="30%" style={{ display: 'table-cell' }}>Name</th>
                      {/* <th width="30%" style={{ display: 'table-cell' }}>Banner Name</th> */}
                      {/* <th width="30%" style={{ display: 'table-cell' }}>Image</th> */}
                      <th data-breakpoints="md" className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th>
                    </tr>
                  </thead>
                  <tbody>

                    {data && data.map((item, i) => {
                      return <tr key={item._id}>
                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>{i + 1}</td>

                        <td style={{ display: 'table-cell' }}>
                          {item.name}
                        </td>

                        {/* <td style={{ display: 'table-cell' }}>
                          Banner 2
                        </td> */}

                        {/* <td style={{ display: 'table-cell' }}>
                          Banner 2
                        </td> */}

                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                          <Link to={`edit/${item._id}`} className="btn btn-soft-info btn-icon btn-circle btn-sm" title="Approved">
                            <i className="las la-edit" />
                          </Link>

                          <button type="button" onClick={() => deleteBlogCategoryData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                            <i className="las la-trash" />
                          </button>
                        </td>

                      </tr>
                    })}

                  </tbody>
                </table>
              }

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
export default BlogCategories;