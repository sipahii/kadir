import { Link } from "react-router-dom";

function NewAmazonAccount() {
  return (
    <>
      <div className="px-15px px-lg-25px">
        <div className="aiz-titlebar text-left mt-2 mb-3">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">New Amazon Account</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">New Amazon Account</h5>
            <div className="col-md-6 text-md-right">
              <Link
                className="btn btn-circle btn-info"
                to="/admin/new-amazon-account/new-amazon-ac-Info"
              >
                <span>Add New Amazon Account</span>
              </Link>
            </div>
          </div>
          <div className="card-body">
            {/* <div className="col-lg-3 mb-4 col-12">
              <Form.Select aria-label="Default select example">
                <option>Actions</option>
                <option value="1">One</option>
              </Form.Select>
            </div> */}

            <table className="table table-3">
              <thead>
                <tr>
                  <th className="table-secondary" scope="col">
                    Serial No
                  </th>
                  <th className="table-secondary" scope="col">
                    Store Name
                  </th>
                  <th className="table-secondary" scope="col">
                    Amazon Marketplace
                  </th>
                  <th className="table-secondary" scope="col">
                    Seller Id
                  </th>

                  <th className="table-secondary" scope="col">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">1</td>
                  <td scope="row">Kaster USA</td>
                  <td>US</td>
                  <td>A12233BYKZ</td>
                  <td>
                    <Link
                      className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2"
                      title="View"
                      to="/admin/new-amazon-account/new-amazon-ac-edit"
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
                      className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2"
                      title="delete"
                      fdprocessedid="yghhlt"
                    >
                      <i className="las la-trash icon-icon" />
                    </button>
                  </td>
                </tr>

                <tr>
                  <td scope="row">2</td>
                  <td scope="row">Azarbekistan</td>
                  <td>Emarate</td>
                  <td>A12233BYKZ</td>
                  <td>
                    <Link
                      className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2"
                      title="View"
                      to="/admin/new-amazon-account/new-amazon-ac-edit"
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
                      className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2"
                      title="delete"
                      fdprocessedid="yghhlt"
                    >
                      <i className="las la-trash icon-icon" />
                    </button>
                  </td>
                </tr>

                <tr>
                  <td scope="row">3</td>
                  <td scope="row">Kaster USA</td>
                  <td>US</td>
                  <td>A12233BYKZ</td>
                  <td>
                    <Link
                      className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2"
                      title="View"
                      to="/admin/new-amazon-account/new-amazon-ac-edit"
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
                      className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2"
                      title="delete"
                      fdprocessedid="yghhlt"
                    >
                      <i className="las la-trash icon-icon" />
                    </button>
                  </td>
                </tr>

                <tr>
                  <td scope="row">4</td>
                  <td scope="row">Kandhar</td>
                  <td>UAE</td>
                  <td>A12233BYKZ</td>
                  <td>
                    <Link
                      className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2"
                      title="View"
                      to="/admin/new-amazon-account/new-amazon-ac-edit"
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
                      className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2"
                      title="delete"
                      fdprocessedid="yghhlt"
                    >
                      <i className="las la-trash icon-icon" />
                    </button>
                  </td>
                </tr>

                <tr>
                  <td scope="row">5</td>
                  <td scope="row">Norway</td>
                  <td>UAE</td>
                  <td>A12233BYKZ</td>
                  <td>
                    <Link
                      className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2"
                      title="View"
                      to="/admin/new-amazon-account/new-amazon-ac-edit"
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
                      className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2"
                      title="delete"
                      fdprocessedid="yghhlt"
                    >
                      <i className="las la-trash icon-icon" />
                    </button>
                  </td>
                </tr>

                <tr>
                  <td scope="row">6</td>
                  <td scope="row">Xender</td>
                  <td></td>
                  <td>A12233BYKZ</td>
                  <td>
                    <a
                      className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2"
                      title="View"
                      href="/admin/add-ring-size"
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
                    </a>
                    <button
                      type="button"
                      className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2"
                      title="delete"
                      fdprocessedid="yghhlt"
                    >
                      <i className="las la-trash icon-icon" />
                    </button>
                  </td>
                </tr>

                <tr>
                  <td scope="row">7</td>
                  <td scope="row">Asgard</td>
                  <td>galaxy</td>
                  <td>A1BYKZ</td>
                  <td>
                    <a
                      className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2"
                      title="View"
                      href="/admin/add-ring-size"
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
                    </a>
                    <button
                      type="button"
                      className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2"
                      title="delete"
                      fdprocessedid="yghhlt"
                    >
                      <i className="las la-trash icon-icon" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="aiz-pagination" />
          </div>
        </div>
      </div>
    </>
  );
}
export default NewAmazonAccount;
