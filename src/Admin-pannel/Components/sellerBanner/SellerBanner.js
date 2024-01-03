import { SlideshowLightbox } from "lightbox.js-react"
import { Link } from "react-router-dom";
import { useDeleteSellerBannerMutation, useGetBannerQuery } from "../all-products/allproductsApi/allProductsApi";


function SellerBanner() {

  const { data, isLoading } = useGetBannerQuery()
  console.log(data);

  const [deleteSellerBanner, response] = useDeleteSellerBannerMutation();

  const deleteSellerBannerData = (id) => {
    deleteSellerBanner(id)
  }

  console.log(response);

  if (response.isSuccess === true) {
    alert('SellerBanner deleted Successfully')
  }

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar mt-2 mb-4">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="h3">Banners</h1>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header row gutters-5">
              <div className="col">
                <h5 className="mb-md-0 h6">All Banners</h5>
              </div>
              <div className="col-md-4">
                <form className id="sort_brands" action method="GET">
                  <div className="input-group input-group-sm">
                    <input type="text" className="form-control" id="search" name="search" placeholder="Search" fdprocessedid="ef32ek" />
                  </div>
                </form>
              </div>
            </div>
            <div className="card-body">

              {isLoading ? <h2>Loading...</h2>
                : <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                  <thead>
                    <tr className="footable-header">
                      <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th width="30%" style={{ display: 'table-cell' }}>Seller Name</th><th width="20%" style={{ display: 'table-cell' }}>Description</th><th width="20%" style={{ display: 'table-cell' }}>Background</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Approval</th><th data-breakpoints="md" className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th></tr>
                  </thead>
                  <tbody>

                    {data && data.map((item, i) => {
                      return <tr>
                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>{i + 1}</td>

                        <td style={{ display: 'table-cell' }}>
                          {item.title}
                        </td>

                        <td style={{ display: 'table-cell' }}>
                          {item.descriptions}
                        </td>

                        <td style={{ display: 'table-cell' }}>
                          <Link to="#" className="text-reset">
                            <img style={{ width: '50px', height: '50px' }} src={item.background} className="mr-1" />
                          </Link>
                        </td>

                        <td style={{ display: 'table-cell' }}>
                          <span className="badge badge-inline badge-info">Pending</span>
                        </td>

                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                          <Link to={`edit/${item._id}`} className="btn btn-soft-info btn-icon btn-circle btn-sm" title="Approved">
                            <i className="las la-edit" />
                          </Link>

                          <button type="button" onClick={() => deleteSellerBannerData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
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
          {/*p class="mb-0">&copy;  v6.3.3</p*/}
        </div>
      </div>

    </>
  )
}
export default SellerBanner