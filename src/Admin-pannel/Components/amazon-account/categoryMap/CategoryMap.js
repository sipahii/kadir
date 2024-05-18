import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";


function CategoryMap() {
  return (
    <>
      <div className="px-15px px-lg-25px">
        <div className="aiz-titlebar text-left mt-2 mb-3">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">Category Mapping For Export</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Category Mapping For Export List</h5>
            <div className="col-md-6 text-md-right">
              <Link className="btn btn-circle btn-info" to="create-mapping">
                <span>Create Mapping</span>
              </Link>
            </div>
          </div>
          <div className="card-body">
            

            <table className="table table-3">
              <thead>
                <tr>
                  <th className="table-secondary" scope="col">
                    Serial No
                  </th>
                  <th className="table-secondary" scope="col">
                    Store Category
                  </th>
                  <th className="table-secondary" scope="col">
                    Amazon Child Category Name
                  </th>
                  <th className="table-secondary" scope="col">
                    Amazon Parent Category
                  </th>

                  {/* <th className="table-secondary" scope="col">
                    Action
                  </th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">1</td>
                  <td scope="row">variant</td>
                  <td>trouger</td>
                  <td>Clothing type</td>
                  {/* <td>
                    <Link
                      className="btn btn-primary btn-icon btn-circle btn-sm me-2 btn-circle-2"
                      title="View"
                      to="/admin/amazon-account-info/account-info"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 1024 1024"
                        className="icon-icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z" />
                      </svg>
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger btn-icon btn-circle btn-sm btn-circle-2"
                      title="delete"
                      fdprocessedid="yghhlt"
                    >
                      <i className="las la-trash icon-icon" />
                    </button>
                  </td> */}
                </tr>

                <tr>
                  <td scope="row">1</td>
                  <td scope="row">Clothing</td>
                  <td>Pants</td>
                  <td>Clothing</td>
                  {/* <td>
                    <Link
                      className="btn btn-primary btn-icon btn-circle btn-sm me-2 btn-circle-2"
                      title="View"
                      to="/admin/amazon-account-info/account-info"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 1024 1024"
                        className="icon-icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z" />
                      </svg>
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger btn-icon btn-circle btn-sm btn-circle-2"
                      title="delete"
                      fdprocessedid="yghhlt"
                    >
                      <i className="las la-trash icon-icon" />
                    </button>
                  </td> */}
                </tr>
              </tbody>
            </table>

            <div className="pageFooter">
              <div className="row">
                <div className="col-md-6">
                  <div className="showEntry">
                    <p>
                      Showing 1 to 3 of 3 entries (filtered from 12 total
                      entries)
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="paginationPart">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className="page-item">
                          <a className="page-link" href="#">
                            <BiChevronLeft />
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            <BiChevronRight />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="aiz-pagination" />
          </div>
        </div>
      </div>
    </>
  );
}
export default CategoryMap;