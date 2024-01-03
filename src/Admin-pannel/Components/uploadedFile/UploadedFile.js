import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import UploadedFile2 from "./UploadedFile2";

function UploadedFile() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar text-left mt-2 mb-3">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="h3">All uploaded files</h1>
              </div>
              <div className="col-md-6 text-md-right">
                <Link
                  to="/admin/uploaded-files/create"
                  className="btn btn-primary"
                >
                  <span>Upload New File</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="card">
            <form id="sort_uploads" action>
              <div className="card-header row gutters-5">
                <div className="col">
                  <h5 className="mb-0 h6">All files</h5>
                </div>
                <div className="col-lg-2 dropdown mb-2 mb-md-0">
                  <select
                    className="form-select form-control form-control-xs aiz-selectpicker"
                    aria-label="Default select example"
                  >
                    <option selected> Bulk Action</option>
                    <option value="1">Delete selection</option>
                  </select>
                  {/* <button className="btn border dropdown-toggle" type="button" data-toggle="dropdown" fdprocessedid="6duqvc">
              Bulk Action
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#" onclick="bulk_delete()"> Delete selection</a>
            </div> */}
                </div>
                <div className="col-md-3 ml-auto mr-0">
                  <select
                    className="form-select form-control form-control-xs aiz-selectpicker"
                    aria-label="Default select example"
                  >
                    <option selected>Sort by newest</option>
                    <option value="1">Sort by oldest</option>
                    <option value="2">Sort by smallest</option>
                    <option value="3">Sort by largest</option>
                  </select>
                  {/* <div className="dropdown bootstrap-select form-control form-control-xs aiz-">
                    <select
                      className="form-control form-control-xs aiz-selectpicker"
                      name="sort"
                      onchange="sort_uploads()"
                      tabIndex={-98}
                    >
                      <option value="newest">Sort by newest</option>
                      <option value="oldest">Sort by oldest</option>
                      <option value="smallest">Sort by smallest</option>
                      <option value="largest">Sort by largest</option>
                    </select>
                    <button
                      type="button"
                      className="btn dropdown-toggle btn-light"
                      data-toggle="dropdown"
                      role="combobox"
                      aria-owns="bs-select-1"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      title="Sort by newest"
                      fdprocessedid="725h6hd"
                    >
                      <div className="filter-option">
                        <div className="filter-option-inner">
                          <div className="filter-option-inner-inner">
                            Sort by newest
                          </div>
                        </div>{" "}
                      </div>
                    </button>
                    <div className="dropdown-menu ">
                      <div
                        className="inner show"
                        role="listbox"
                        id="bs-select-1"
                        tabIndex={-1}
                      >
                        <ul
                          className="dropdown-menu inner show"
                          role="presentation"
                        />
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control form-control-xs"
                    name="search"
                    placeholder="Search your files"
                    defaultValue
                    fdprocessedid="fprqp"
                  />
                </div>
                <div className="col-auto">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    fdprocessedid="v2yhf8"
                  >
                    Search
                  </button>
                </div>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <div className="aiz-checkbox-inline">
                    <label className="aiz-checkbox">
                      Select All
                      <input type="checkbox" className="check-all" />
                      <span className="aiz-square-check" />
                    </label>
                  </div>
                </div>
                <div className="row gutters-5">
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={167}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public/uploads/all/PKbKwT2SXjyDLMuMc5By1bjKs866MFEPt1ZX8m0p.png"
                            target="_blank"
                            download="Screenshot 2022-12-15 at 8.19.31 PM.png"
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public/uploads/all/PKbKwT2SXjyDLMuMc5By1bjKs866MFEPt1ZX8m0p.png"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/167"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={167}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Screenshot 2022-12-15 at 8.19.31 PM.png"
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/PKbKwT2SXjyDLMuMc5By1bjKs866MFEPt1ZX8m0p.png"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">
                              Screenshot 2022-12-15 at 8.19.31 PM
                            </span>
                            <span className="ext">.png</span>
                          </h6>
                          <p>134.41 KB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={166}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public/uploads/all/B3gTltTRc418UcKyARCIqCE2rlLjM3jDfDhrGmBh.jpg"
                            target="_blank"
                            download="DSC_1168.jpg"
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public/uploads/all/B3gTltTRc418UcKyARCIqCE2rlLjM3jDfDhrGmBh.jpg"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/166"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={166}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="DSC_1168.jpg"
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/B3gTltTRc418UcKyARCIqCE2rlLjM3jDfDhrGmBh.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">
                              DSC_1168
                            </span>
                            <span className="ext">.jpg</span>
                          </h6>
                          <p>67.38 KB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={40}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/40"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={40}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={41}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/41"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={41}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={42}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/42"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={42}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={43}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/43"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={43}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={44}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/44"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={44}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={45}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/45"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={45}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={46}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/46"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={46}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={47}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/47"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={47}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={48}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/48"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={48}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={49}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/49"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={49}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={50}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/50"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={50}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={51}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/51"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={51}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={52}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/52"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={52}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={53}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/53"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={53}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={54}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/54"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={54}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={55}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/55"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={55}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={56}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/56"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={56}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={57}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/57"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={57}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={58}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/58"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={58}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={59}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/59"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={59}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={60}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/60"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={60}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={61}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/61"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={61}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={62}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/62"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={62}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={63}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/63"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={63}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={64}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/64"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={64}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={65}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/65"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={65}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={66}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/66"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={66}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={67}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/67"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={67}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={68}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/68"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={68}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={69}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/69"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={69}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={70}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/70"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={70}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={71}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/71"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={71}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={72}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/72"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={72}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={73}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/73"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={73}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={74}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/74"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={74}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={75}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/75"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={75}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={76}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/76"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={76}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={77}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/77"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={77}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={78}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/78"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={78}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={79}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/79"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={79}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={80}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/80"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={80}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={81}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/81"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={81}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={82}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/82"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={82}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={83}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/83"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={83}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={84}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/84"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={84}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={85}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/85"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={85}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={86}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/86"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={86}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={87}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/87"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={87}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={88}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/88"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={88}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={89}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/89"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={89}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={90}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/90"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={90}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={91}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/91"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={91}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={92}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/92"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={92}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={93}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/93"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={93}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={94}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/94"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={94}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={95}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/95"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={95}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={96}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/96"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={96}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto w-140px w-lg-220px">
                    <div className="aiz-file-box">
                      <div className="dropdown-file">
                        <a className="dropdown-link" data-toggle="dropdown">
                          <i className="la la-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="detailsInfo(this)"
                            data-id={97}
                          >
                            <i className="las la-info-circle mr-2" />
                            <span>Details Info</span>
                          </a>
                          <a
                            href="https://mmslfashions.in/public"
                            target="_blank"
                            download="Unknown."
                            className="dropdown-item"
                          >
                            <i className="la la-download mr-2" />
                            <span>Download</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item"
                            onclick="copyUrl(this)"
                            data-url="https://mmslfashions.in/public"
                          >
                            <i className="las la-clipboard mr-2" />
                            <span>Copy Link</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item confirm-alert"
                            data-href="https://mmslfashions.in/admin/uploaded-files/destroy/97"
                            data-target="#delete-modal"
                          >
                            <i className="las la-trash mr-2" />
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                      <div className="select-box">
                        <div className="aiz-checkbox-inline">
                          <label className="aiz-checkbox">
                            <input
                              type="checkbox"
                              className="check-one"
                              name="id[]"
                              defaultValue={97}
                            />
                            <span className="aiz-square-check" />
                          </label>
                        </div>
                      </div>
                      <div
                        className="card card-file aiz-uploader-select c-default"
                        title="Unknown."
                      >
                        <div className="card-file-thumb">
                          <img
                            src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg"
                            className="img-fit"
                          />
                        </div>
                        <div className="card-body">
                          <h6 className="d-flex">
                            <span className="text-truncate title">Unknown</span>
                            <span className="ext">.</span>
                          </h6>
                          <p>0 B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aiz-pagination mt-3">
                  <nav>
                    <ul className="pagination">
                      <li
                        className="page-item disabled"
                        aria-disabled="true"
                        aria-label="« Previous"
                      >
                        <span className="page-link" aria-hidden="true">
                          ‹
                        </span>
                      </li>
                      <li className="page-item active" aria-current="page">
                        <span className="page-link">1</span>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link"
                          href="https://mmslfashions.in/admin/uploaded-files?page=2"
                        >
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link"
                          href="https://mmslfashions.in/admin/uploaded-files?page=3"
                        >
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link"
                          href="https://mmslfashions.in/admin/uploaded-files?page=2"
                          rel="next"
                          aria-label="Next »"
                        >
                          ›
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
          {/*p class="mb-0">&copy;  v6.3.3</p*/}
        </div>
      </div>
    </>
  );
}
export default UploadedFile;
