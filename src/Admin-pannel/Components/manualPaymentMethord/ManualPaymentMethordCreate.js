import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function ManualPaymentMethordCreate() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 h6">Manual Payment Information</h5>
              </div>
              <form
                action="https://mmslfashions.in/admin/manual_payment_methods"
                method="POST"
              >
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="WIqq8gEmrLeaj9XaMVqpGGclOjifo8bAGpFFf0TS"
                />{" "}
                <div className="card-body">
                  <div className="form-group row">
                    <label className="col-sm-2 col-from-label" htmlFor="type">
                      Type
                    </label>
                    <div className="col-sm-10">
                      <select
                        className="form-select form-control aiz-"
                        aria-label="Default select example"
                      >
                        <option selected>Custom Payment</option>
                        <option value="1">Bank Payment</option>
                        <option value="2">Check Payment</option>
                      </select>
                      {/* <div className="dropdown bootstrap-select form-control aiz-">
                        <select
                          className="form-control aiz-selectpicker"
                          name="type"
                          id="type"
                          required
                          tabIndex={-98}
                        >
                          <option value="custom_payment">Custom Payment</option>
                          <option value="bank_payment">Bank Payment</option>
                          <option value="check_payment">Check Payment</option>
                        </select>
                        <button
                          type="button"
                          className="btn dropdown-toggle btn-light"
                          data-toggle="dropdown"
                          role="combobox"
                          aria-owns="bs-select-1"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          data-id="type"
                          title="Custom Payment"
                          fdprocessedid="3zxy5q"
                        >
                          <div className="filter-option">
                            <div className="filter-option-inner">
                              <div className="filter-option-inner-inner">
                                Custom Payment
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
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 col-from-label" htmlFor="name">
                      Name
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        name="heading"
                        defaultValue
                        placeholder="Name"
                        required
                        fdprocessedid="6h7e8c"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      className="col-md-2 col-form-label"
                      htmlFor="signinSrEmail"
                    >
                      Checkout Thumbnail (438x235)px
                    </label>
                    <div className="col-md-8">
                      <div
                        className="input-group"
                        data-toggle="aizuploader"
                        data-type="image"
                        data-multiple="false"
                      >
                        <div className="input-group-prepend">
                          <div className="input-group-text bg-soft-secondary font-weight-medium">
                            Browse
                          </div>
                        </div>
                        <div className="form-control file-amount" onClick={handleShow}>
                          Choose File
                        </div>
                        <input
                          type="hidden"
                          name="photo"
                          className="selected-files"
                        />
                         <Modal
            // className="modal-content-3 "
            // style={{ height: "100%", width: "1500px" }}
            show={show}
            onHide={handleClose}
            dialogClassName="modal-90w-w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              {/* <Modal.Title id="example-custom-modal-styling-title">
                Modal heading
              </Modal.Title> */}
            </Modal.Header>
            <Modal.Body className="modal-body-2">
              {/* <div className="modal fade show" id="aizUploaderModal" data-backdrop="static" role="dialog" aria-modal="true" style={{zIndex: 1050, display: 'block'}}>
  <div className="modal-dialog modal-adaptive" role="document"> */}
              {/* <div className="modal-content h-100 modal-content-2">
      <div className="modal-header pb-0 bg-light"> */}
              <div className="uppy-modal-nav">
                <ul className="nav nav-tabs border-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active font-weight-medium text-dark"
                      data-toggle="tab"
                      href="#aiz-select-file"
                    >
                      Select File
                    </a>
                  </li>
                  <li className="nav-item">
                    {/* <a
                      className="nav-link font-weight-medium text-dark"
                      data-toggle="tab"
                      href="#aiz-upload-new"
                    >
                      Upload New
                    </a> */}
                    <Form.Group controlId="formFile" className="mb-3">
                      {/* <Form.Label> Upload New</Form.Label> */}
                      <Form.Control type="file" />
                    </Form.Group>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                fdprocessedid="i7ga5a"
              >
                <span aria-hidden="true" />
              </button>
              {/* </div> */}
              <div className="modal-body">
                <div className="tab-content h-100">
                  <div className="tab-pane active h-100" id="aiz-select-file">
                    <div className="aiz-uploader-filter pt-1 pb-3 border-bottom mb-4">
                      <div className="row align-items-center gutters-5 gutters-md-10 position-relative">
                        <div className="col-xl-2 col-md-3 col-5">
                          <div className>
                            {/* Input */}
                            <select
                              className="form-control form-control-xs aiz-selectpicker"
                              name="aiz-uploader-sort"
                              fdprocessedid="o94fnp"
                            >
                              <option value="newest" selected>
                                Sort by newest
                              </option>
                              <option value="oldest">Sort by oldest</option>
                              <option value="smallest">Sort by smallest</option>
                              <option value="largest">Sort by largest</option>
                            </select>
                            {/* End Input */}
                          </div>
                        </div>
                        <div className="col-md-3 col-5">
                          <div className="custom-control custom-radio">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              name="aiz-show-selected"
                              id="aiz-show-selected"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="aiz-show-selected"
                            >
                              Selected Only
                            </label>
                          </div>
                        </div>
                        <div className="col-md-4 col-xl-3 ml-auto mr-0 col-2 position-static">
                          <div className="aiz-uploader-search text-right">
                            <input
                              type="text"
                              className="form-control form-control-xs"
                              name="aiz-uploader-search"
                              placeholder="Search your files"
                              fdprocessedid="tt1iu8"
                            />
                            <i className="search-icon d-md-none">
                              <span />
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                   
                    <div className="aiz-uploader-all clearfix c-scrollbar-light"><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="OEMFF BrandSmall.png" data-value={28}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/ClBKaveL2CshSfloa9MHVGkI3l8coNtciAHjCfS9.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">OEMFF BrandSmall</span><span className="ext flex-shrink-0">.png</span></h6><p>8 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="OEMFF Brand.png" data-value={27}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/FVxTnItYPUQWkUjCwlcPzfjtaWFoZWisOR0p6OWO.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">OEMFF Brand</span><span className="ext flex-shrink-0">.png</span></h6><p>22 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="banner-6.png" data-value={25}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/Nx70PCRmd0brMGlmMCO68H8L2kJo1D8Nmsg25AwV.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">banner-6</span><span className="ext flex-shrink-0">.png</span></h6><p>1 MB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="banner-3.png" data-value={22}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/7Bv6pS1lCcsO6IA6KTfKSrJOFRpdokhsUBEaKHoe.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">banner-3</span><span className="ext flex-shrink-0">.png</span></h6><p>1008 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="banner-2.png" data-value={23}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/QvlEdvbRcJm2YEPtJkDSgF3Cqe6en5gkGN7zUaQK.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">banner-2</span><span className="ext flex-shrink-0">.png</span></h6><p>1 MB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="banner-4.png" data-value={24}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/jbaiLs9zaW6BEZz01pmndGSW5b4odbCIlHcPh49N.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">banner-4</span><span className="ext flex-shrink-0">.png</span></h6><p>1 MB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="banner-5.png" data-value={21}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/woEGB2oL5MC7PMezPymdpRD7RBqC0fnian5nj3FZ.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">banner-5</span><span className="ext flex-shrink-0">.png</span></h6><p>455 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="banner-1.png" data-value={20}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/J2YmbYGVbQWOoaQOdfEFdcrW71ajvUIME7TpwNMz.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">banner-1</span><span className="ext flex-shrink-0">.png</span></h6><p>1 MB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="fertlz_01.jpg" data-value={15}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/v01lSDffgSnZK0HXzyIvBNgzdjnlIuolRvWXoCMA.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">fertlz_01</span><span className="ext flex-shrink-0">.jpg</span></h6><p>150 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="soybean-1379x331.jpg" data-value={14}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/0mM656EXmjvm5VJWhFFvXDaU6W8FZHYfzWCaQOSs.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">soybean-1379x331</span><span className="ext flex-shrink-0">.jpg</span></h6><p>117 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="falcon-logo.png" data-value={13}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/Wnhuad4Xbhfy69Jd8MN8PHGvoGO8hnFcYDs9EnX2.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">falcon-logo</span><span className="ext flex-shrink-0">.png</span></h6><p>4 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="true"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Kynoch-Logo-PNG.png" data-value={12}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/z1CNIkuY8rhgQFW7r8RvWWA0akrBbMCTOPgaKzja.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Kynoch-Logo-PNG</span><span className="ext flex-shrink-0">.png</span></h6><p>30 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="3.png" data-value={10}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/VRg3fxSHDaSL6GfE9o05ropnhBao78kMgl0mvIqR.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">3</span><span className="ext flex-shrink-0">.png</span></h6><p>62 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="4.png" data-value={11}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/X8h9TcK3S4MFhEH7HiV62ewEnG1S3Jgq1UlzvRtu.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">4</span><span className="ext flex-shrink-0">.png</span></h6><p>55 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="2.png" data-value={9}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/zNg9tlDvU7nCORhtIwFGhFzBpbPAoNwUL3FWpkpx.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">2</span><span className="ext flex-shrink-0">.png</span></h6><p>48 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="1.png" data-value={8}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/0fszFBvsXqbAUVAsKTXrOAVHBnuvUvHsVeWjuqji.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">1</span><span className="ext flex-shrink-0">.png</span></h6><p>51 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="cate1.png" data-value={7}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/DgCjfbcutqaF1glvntiF2FqbUNOXKGozoEflL3Qg.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">cate1</span><span className="ext flex-shrink-0">.png</span></h6><p>87 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="favicon-16x16.png" data-value={6}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/vJzLXpWA3m6TDXRLHvfuunmAl2Zb4K1imttT1QqB.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">favicon-16x16</span><span className="ext flex-shrink-0">.png</span></h6><p>743 Bytes</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="favicon-32x32.png" data-value={5}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/qWtVvdVrkexRR41VVaNV6W7yzjMGUVrD3HqfnYNA.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">favicon-32x32</span><span className="ext flex-shrink-0">.png</span></h6><p>2 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="categore-1.png" data-value={4}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/AaGZPAv5UQcsOyE0eV96T1JNQgxmynDDD1cdApbn.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">categore-1</span><span className="ext flex-shrink-0">.png</span></h6><p>121 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="etglogo.png" data-value={1}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/AkvOmGh1LRAnHZmlVDsgPA5f5jgYesnZxVtONnhX.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">etglogo</span><span className="ext flex-shrink-0">.png</span></h6><p>2 KB</p></div></div></div></div></div>

                  </div>
                  <div className="tab-pane h-100" id="aiz-upload-new">
                    <div id="aiz-upload-files" className="h-100">
                      <div
                        className="uppy-Root uppy-Dashboard uppy-Dashboard--animateOpenClose uppy-Dashboard--isInnerWrapVisible"
                        aria-hidden="false"
                        aria-label="File Uploader"
                      >
                        <div className="uppy-Dashboard-overlay" tabIndex={-1} />
                        <div
                          className="uppy-Dashboard-inner"
                          // style={{ width: 750, height: 550 }}
                        >
                          <div className="uppy-Dashboard-innerWrap">
                            <div className="uppy-Dashboard-dropFilesHereHint">
                              Drop your files here
                            </div>
                            <div className="uppy-DashboardAddFiles">
                              <input
                                className="uppy-Dashboard-input"
                                hidden
                                aria-hidden="true"
                                tabIndex={-1}
                                type="file"
                                name="files[]"
                                multiple
                              />
                              <div className="uppy-DashboardTabs">
                                <div className="uppy-Dashboard-dropFilesTitle">
                                  Drop files here, paste or{" "}
                                  <button
                                    type="button"
                                    className="uppy-u-reset uppy-Dashboard-browse"
                                  >
                                    Browse
                                  </button>
                                </div>
                              </div>
                              <div className="uppy-DashboardAddFiles-info" />
                            </div>
                            <span />
                            <span />
                            <span />
                            <div className="uppy-Dashboard-progressindicators">
                              <div
                                className="uppy-StatusBar is-waiting"
                                aria-hidden="true"
                              >
                                <div
                                  className="uppy-StatusBar-progress
                     "
                                  role="progressbar"
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  aria-valuenow={0}
                                  style={{ width: "0%" }}
                                />
                                <div className="uppy-StatusBar-actions" />
                              </div>
                              <div
                                className="uppy uppy-Informer"
                                aria-hidden="true"
                              >
                                <p role="alert"> </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="modal-footer justify-content-between bg-light">
                <div className="flex-grow-1 overflow-hidden d-flex">
                  <div className>
                    <div className="aiz-uploader-selected">0 File selected</div>
                    <button
                      type="button"
                      className="btn-link btn btn-sm p-0 aiz-uploader-selected-clear"
                      fdprocessedid="j1e0m"
                    >
                      Clear
                    </button>
                  </div>
                  <div className="mb-0 ml-3">
                    <button
                      type="button"
                      className="btn btn-sm btn-primary mr-3"
                      id="uploader_prev_btn"
                      fdprocessedid="elnjj"
                      disabled="disabled"
                    >
                      Prev
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-primary"
                      id="uploader_next_btn"
                      fdprocessedid="qlbfz9"
                      disabled="disabled"
                    >
                      Next
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-primary"
                  data-toggle="aizUploaderAddSelected"
                  fdprocessedid="gjlfjc"
                >
                  Add Files
                </button>
              </div> */}
              {/* </div>
    </div> 
   </div>
</div> */}
            </Modal.Body>
            <Modal.Footer className="modal-footer-2">
                {/* <Button variant="secondary" onClick={handleClose3}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose3}>
              Save Changes
            </Button> */}
            <div className="modal-footer justify-content-between bg-light">
                <div className="flex-grow-1 overflow-hidden d-flex">
                  <div className>
                    <div className="aiz-uploader-selected">0 File selected</div>
                    <button
                      type="button"
                      className="btn-link btn btn-sm p-0 aiz-uploader-selected-clear"
                      fdprocessedid="j1e0m"
                    >
                      Clear
                    </button>
                  </div>
                  <div className="mb-0 ml-3">
                    <button
                      type="button"
                      className="btn btn-sm btn-primary mr-3"
                      id="uploader_prev_btn"
                      fdprocessedid="elnjj"
                      disabled="disabled"
                    >
                      Prev
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-primary"
                      id="uploader_next_btn"
                      fdprocessedid="qlbfz9"
                      disabled="disabled"
                    >
                      Next
                    </button>
                  </div>
                </div>
                <div className="button-sectionn">
                <Button
                  type="button"
                  className="btn btn-sm btn-primary"
                  data-toggle="aizUploaderAddSelected"
                  fdprocessedid="gjlfjc"
                >
                  Add Files
                </Button>
                </div>
              </div>
            </Modal.Footer>
          </Modal>
                      </div>
                      <div className="file-preview box sm"></div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 col-from-label">
                      Payment Instruction
                    </label>
                    <div className="col-sm-10">
                      <textarea
                        className="aiz-text-editor"
                        name="description"
                        style={{ display: "none" }}
                        defaultValue={""}
                      />
                      <div className="note-editor note-frame card">
                        <div className="note-dropzone">
                          <div className="note-dropzone-message" />
                        </div>
                        <div
                          className="note-toolbar card-header"
                          role="toolbar"
                        >
                          <div className="note-btn-group btn-group note-font">
                            <button
                              type="button"
                              className="note-btn btn btn-light btn-sm note-btn-bold"
                              tabIndex={-1}
                              title
                              aria-label="Bold (CTRL+B)"
                              data-original-title="Bold (CTRL+B)"
                            >
                              <i className="note-icon-bold" />
                            </button>
                            <button
                              type="button"
                              className="note-btn btn btn-light btn-sm note-btn-underline"
                              tabIndex={-1}
                              title
                              aria-label="Underline (CTRL+U)"
                              data-original-title="Underline (CTRL+U)"
                            >
                              <i className="note-icon-underline" />
                            </button>
                            <button
                              type="button"
                              className="note-btn btn btn-light btn-sm note-btn-italic"
                              tabIndex={-1}
                              title
                              aria-label="Italic (CTRL+I)"
                              data-original-title="Italic (CTRL+I)"
                            >
                              <i className="note-icon-italic" />
                            </button>
                            <button
                              type="button"
                              className="note-btn btn btn-light btn-sm"
                              tabIndex={-1}
                              title
                              aria-label="Remove Font Style (CTRL+\)"
                              data-original-title="Remove Font Style (CTRL+\)"
                            >
                              <i className="note-icon-eraser" />
                            </button>
                          </div>
                          <div className="note-btn-group btn-group note-para">
                            <button
                              type="button"
                              className="note-btn btn btn-light btn-sm"
                              tabIndex={-1}
                              title
                              aria-label="Unordered list (CTRL+SHIFT+NUM7)"
                              data-original-title="Unordered list (CTRL+SHIFT+NUM7)"
                            >
                              <i className="note-icon-unorderedlist" />
                            </button>
                            <button
                              type="button"
                              className="note-btn btn btn-light btn-sm"
                              tabIndex={-1}
                              title
                              aria-label="Ordered list (CTRL+SHIFT+NUM8)"
                              data-original-title="Ordered list (CTRL+SHIFT+NUM8)"
                            >
                              <i className="note-icon-orderedlist" />
                            </button>
                            <div className="note-btn-group btn-group">
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm dropdown-toggle"
                                tabIndex={-1}
                                data-toggle="dropdown"
                                title
                                aria-label="Paragraph"
                                data-original-title="Paragraph"
                              >
                                <i className="note-icon-align-left" />
                              </button>
                              <div
                                className="note-dropdown-menu dropdown-menu"
                                role="list"
                              >
                                <div className="note-btn-group btn-group note-align">
                                  <button
                                    type="button"
                                    className="note-btn btn btn-light btn-sm"
                                    tabIndex={-1}
                                    title
                                    aria-label="Align left (CTRL+SHIFT+L)"
                                    data-original-title="Align left (CTRL+SHIFT+L)"
                                  >
                                    <i className="note-icon-align-left" />
                                  </button>
                                  <button
                                    type="button"
                                    className="note-btn btn btn-light btn-sm"
                                    tabIndex={-1}
                                    title
                                    aria-label="Align center (CTRL+SHIFT+E)"
                                    data-original-title="Align center (CTRL+SHIFT+E)"
                                  >
                                    <i className="note-icon-align-center" />
                                  </button>
                                  <button
                                    type="button"
                                    className="note-btn btn btn-light btn-sm"
                                    tabIndex={-1}
                                    title
                                    aria-label="Align right (CTRL+SHIFT+R)"
                                    data-original-title="Align right (CTRL+SHIFT+R)"
                                  >
                                    <i className="note-icon-align-right" />
                                  </button>
                                  <button
                                    type="button"
                                    className="note-btn btn btn-light btn-sm"
                                    tabIndex={-1}
                                    title
                                    aria-label="Justify full (CTRL+SHIFT+J)"
                                    data-original-title="Justify full (CTRL+SHIFT+J)"
                                  >
                                    <i className="note-icon-align-justify" />
                                  </button>
                                </div>
                                <div className="note-btn-group btn-group note-list">
                                  <button
                                    type="button"
                                    className="note-btn btn btn-light btn-sm"
                                    tabIndex={-1}
                                    title
                                    aria-label="Outdent (CTRL+[)"
                                    data-original-title="Outdent (CTRL+[)"
                                  >
                                    <i className="note-icon-align-outdent" />
                                  </button>
                                  <button
                                    type="button"
                                    className="note-btn btn btn-light btn-sm"
                                    tabIndex={-1}
                                    title
                                    aria-label="Indent (CTRL+])"
                                    data-original-title="Indent (CTRL+])"
                                  >
                                    <i className="note-icon-align-indent" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="note-btn-group btn-group note-style">
                            <div className="note-btn-group btn-group">
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm dropdown-toggle"
                                tabIndex={-1}
                                data-toggle="dropdown"
                                title
                                aria-label="Style"
                                data-original-title="Style"
                              >
                                <i className="note-icon-magic" />
                              </button>
                              <div
                                className="note-dropdown-menu dropdown-menu dropdown-style"
                                role="list"
                                aria-label="Style"
                              >
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-value="p"
                                  role="listitem"
                                  aria-label="p"
                                >
                                  <p>Normal</p>
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-value="blockquote"
                                  role="listitem"
                                  aria-label="blockquote"
                                >
                                  <blockquote className="blockquote">
                                    Blockquote
                                  </blockquote>
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-value="pre"
                                  role="listitem"
                                  aria-label="pre"
                                >
                                  <pre>Code</pre>
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-value="h1"
                                  role="listitem"
                                  aria-label="h1"
                                >
                                  <h1>Header 1</h1>
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-value="h2"
                                  role="listitem"
                                  aria-label="h2"
                                >
                                  <h2>Header 2</h2>
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-value="h3"
                                  role="listitem"
                                  aria-label="h3"
                                >
                                  <h3>Header 3</h3>
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-value="h4"
                                  role="listitem"
                                  aria-label="h4"
                                >
                                  <h4>Header 4</h4>
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-value="h5"
                                  role="listitem"
                                  aria-label="h5"
                                >
                                  <h5>Header 5</h5>
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-value="h6"
                                  role="listitem"
                                  aria-label="h6"
                                >
                                  <h6>Header 6</h6>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="note-btn-group btn-group note-color">
                            <div className="note-btn-group btn-group note-color note-color-all">
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm note-current-color-button"
                                tabIndex={-1}
                                title
                                aria-label="Recent Color"
                                data-original-title="Recent Color"
                                data-backcolor="#FFFF00"
                                data-forecolor="#000000"
                              >
                                <i
                                  className="note-icon-font note-recent-color"
                                  style={{
                                    backgroundColor: "rgb(255, 255, 0)",
                                    color: "rgb(0, 0, 0)",
                                  }}
                                />
                              </button>
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm dropdown-toggle"
                                tabIndex={-1}
                                data-toggle="dropdown"
                                title
                                aria-label="More Color"
                                data-original-title="More Color"
                              />
                              <div
                                className="note-dropdown-menu dropdown-menu"
                                role="list"
                              >
                                <div className="note-palette">
                                  <div className="note-palette-title">
                                    Background Color
                                  </div>
                                  <div>
                                    <button
                                      type="button"
                                      className="note-color-reset btn btn-light"
                                      data-event="backColor"
                                      data-value="inherit"
                                    >
                                      Transparent
                                    </button>
                                  </div>
                                  <div
                                    className="note-holder"
                                    data-event="backColor"
                                  >
                                    <div>
                                      <button
                                        type="button"
                                        className="note-color-select btn btn-light"
                                        data-event="openPalette"
                                        data-value="backColorPicker"
                                      >
                                        Select
                                      </button>
                                      <input
                                        type="color"
                                        id="backColorPicker"
                                        className="note-btn note-color-select-btn"
                                        defaultValue="#FFFF00"
                                        data-event="backColorPalette"
                                      />
                                    </div>
                                    <div
                                      className="note-holder-custom"
                                      id="backColorPalette"
                                      data-event="backColor"
                                    >
                                      <div className="note-color-palette">
                                        <div className="note-color-row">
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="#FFFFFF"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="#FFFFFF"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="#FFFFFF"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="#FFFFFF"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="#FFFFFF"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="#FFFFFF"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="#FFFFFF"
                                          />
                                          <button
                                            type="button"
                                            className="note-color-btn"
                                            style={{
                                              backgroundColor: "#FFFFFF",
                                            }}
                                            data-event="backColor"
                                            data-value="#FFFFFF"
                                            title
                                            aria-label="#FFFFFF"
                                            data-toggle="button"
                                            tabIndex={-1}
                                            data-original-title="#FFFFFF"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="note-palette">
                                      <div className="note-palette-title">
                                        Text Color
                                      </div>
                                      <div>
                                        <button
                                          type="button"
                                          className="note-color-reset btn btn-light"
                                          data-event="removeFormat"
                                          data-value="foreColor"
                                        >
                                          Reset to default
                                        </button>
                                      </div>
                                      <div
                                        className="note-holder"
                                        data-event="foreColor"
                                      >
                                        <div>
                                          <button
                                            type="button"
                                            className="note-color-select btn btn-light"
                                            data-event="openPalette"
                                            data-value="foreColorPicker"
                                          >
                                            Select
                                          </button>
                                          <input
                                            type="color"
                                            id="foreColorPicker"
                                            className="note-btn note-color-select-btn"
                                            defaultValue="#000000"
                                            data-event="foreColorPalette"
                                          />
                                        </div>
                                        <div
                                          className="note-holder-custom"
                                          id="foreColorPalette"
                                          data-event="foreColor"
                                        >
                                          <div className="note-color-palette">
                                            <div className="note-color-row">
                                              <button
                                                type="button"
                                                className="note-color-btn"
                                                style={{
                                                  backgroundColor: "#FFFFFF",
                                                }}
                                                data-event="foreColor"
                                                data-value="#FFFFFF"
                                                title
                                                aria-label="#FFFFFF"
                                                data-toggle="button"
                                                tabIndex={-1}
                                                data-original-title="#FFFFFF"
                                              />
                                              <button
                                                type="button"
                                                className="note-color-btn"
                                                style={{
                                                  backgroundColor: "#FFFFFF",
                                                }}
                                                data-event="foreColor"
                                                data-value="#FFFFFF"
                                                title
                                                aria-label="#FFFFFF"
                                                data-toggle="button"
                                                tabIndex={-1}
                                                data-original-title="#FFFFFF"
                                              />
                                              <button
                                                type="button"
                                                className="note-color-btn"
                                                style={{
                                                  backgroundColor: "#FFFFFF",
                                                }}
                                                data-event="foreColor"
                                                data-value="#FFFFFF"
                                                title
                                                aria-label="#FFFFFF"
                                                data-toggle="button"
                                                tabIndex={-1}
                                                data-original-title="#FFFFFF"
                                              />
                                              <button
                                                type="button"
                                                className="note-color-btn"
                                                style={{
                                                  backgroundColor: "#FFFFFF",
                                                }}
                                                data-event="foreColor"
                                                data-value="#FFFFFF"
                                                title
                                                aria-label="#FFFFFF"
                                                data-toggle="button"
                                                tabIndex={-1}
                                                data-original-title="#FFFFFF"
                                              />
                                              <button
                                                type="button"
                                                className="note-color-btn"
                                                style={{
                                                  backgroundColor: "#FFFFFF",
                                                }}
                                                data-event="foreColor"
                                                data-value="#FFFFFF"
                                                title
                                                aria-label="#FFFFFF"
                                                data-toggle="button"
                                                tabIndex={-1}
                                                data-original-title="#FFFFFF"
                                              />
                                              <button
                                                type="button"
                                                className="note-color-btn"
                                                style={{
                                                  backgroundColor: "#FFFFFF",
                                                }}
                                                data-event="foreColor"
                                                data-value="#FFFFFF"
                                                title
                                                aria-label="#FFFFFF"
                                                data-toggle="button"
                                                tabIndex={-1}
                                                data-original-title="#FFFFFF"
                                              />
                                              <button
                                                type="button"
                                                className="note-color-btn"
                                                style={{
                                                  backgroundColor: "#FFFFFF",
                                                }}
                                                data-event="foreColor"
                                                data-value="#FFFFFF"
                                                title
                                                aria-label="#FFFFFF"
                                                data-toggle="button"
                                                tabIndex={-1}
                                                data-original-title="#FFFFFF"
                                              />
                                              <button
                                                type="button"
                                                className="note-color-btn"
                                                style={{
                                                  backgroundColor: "#FFFFFF",
                                                }}
                                                data-event="foreColor"
                                                data-value="#FFFFFF"
                                                title
                                                aria-label="#FFFFFF"
                                                data-toggle="button"
                                                tabIndex={-1}
                                                data-original-title="#FFFFFF"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="note-color-palette">
                                          <div className="note-color-row">
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#000000",
                                              }}
                                              data-event="foreColor"
                                              data-value="#000000"
                                              title
                                              aria-label="Black"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Black"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#424242",
                                              }}
                                              data-event="foreColor"
                                              data-value="#424242"
                                              title
                                              aria-label="Tundora"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Tundora"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#636363",
                                              }}
                                              data-event="foreColor"
                                              data-value="#636363"
                                              title
                                              aria-label="Dove Gray"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Dove Gray"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#9C9C94",
                                              }}
                                              data-event="foreColor"
                                              data-value="#9C9C94"
                                              title
                                              aria-label="Star Dust"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Star Dust"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#CEC6CE",
                                              }}
                                              data-event="foreColor"
                                              data-value="#CEC6CE"
                                              title
                                              aria-label="Pale Slate"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Pale Slate"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#EFEFEF",
                                              }}
                                              data-event="foreColor"
                                              data-value="#EFEFEF"
                                              title
                                              aria-label="Gallery"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Gallery"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#F7F7F7",
                                              }}
                                              data-event="foreColor"
                                              data-value="#F7F7F7"
                                              title
                                              aria-label="Alabaster"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Alabaster"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#FFFFFF",
                                              }}
                                              data-event="foreColor"
                                              data-value="#FFFFFF"
                                              title
                                              aria-label="White"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="White"
                                            />
                                          </div>
                                          <div className="note-color-row">
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#FF0000",
                                              }}
                                              data-event="foreColor"
                                              data-value="#FF0000"
                                              title
                                              aria-label="Red"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Red"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#FF9C00",
                                              }}
                                              data-event="foreColor"
                                              data-value="#FF9C00"
                                              title
                                              aria-label="Orange Peel"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Orange Peel"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#FFFF00",
                                              }}
                                              data-event="foreColor"
                                              data-value="#FFFF00"
                                              title
                                              aria-label="Yellow"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Yellow"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#00FF00",
                                              }}
                                              data-event="foreColor"
                                              data-value="#00FF00"
                                              title
                                              aria-label="Green"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Green"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#00FFFF",
                                              }}
                                              data-event="foreColor"
                                              data-value="#00FFFF"
                                              title
                                              aria-label="Cyan"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Cyan"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#0000FF",
                                              }}
                                              data-event="foreColor"
                                              data-value="#0000FF"
                                              title
                                              aria-label="Blue"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Blue"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#9C00FF",
                                              }}
                                              data-event="foreColor"
                                              data-value="#9C00FF"
                                              title
                                              aria-label="Electric Violet"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Electric Violet"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#FF00FF",
                                              }}
                                              data-event="foreColor"
                                              data-value="#FF00FF"
                                              title
                                              aria-label="Magenta"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Magenta"
                                            />
                                          </div>
                                          <div className="note-color-row">
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#F7C6CE",
                                              }}
                                              data-event="foreColor"
                                              data-value="#F7C6CE"
                                              title
                                              aria-label="Azalea"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Azalea"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#FFE7CE",
                                              }}
                                              data-event="foreColor"
                                              data-value="#FFE7CE"
                                              title
                                              aria-label="Karry"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Karry"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#FFEFC6",
                                              }}
                                              data-event="foreColor"
                                              data-value="#FFEFC6"
                                              title
                                              aria-label="Egg White"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Egg White"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#D6EFD6",
                                              }}
                                              data-event="foreColor"
                                              data-value="#D6EFD6"
                                              title
                                              aria-label="Zanah"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Zanah"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#CEDEE7",
                                              }}
                                              data-event="foreColor"
                                              data-value="#CEDEE7"
                                              title
                                              aria-label="Botticelli"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Botticelli"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#CEE7F7",
                                              }}
                                              data-event="foreColor"
                                              data-value="#CEE7F7"
                                              title
                                              aria-label="Tropical Blue"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Tropical Blue"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#D6D6E7",
                                              }}
                                              data-event="foreColor"
                                              data-value="#D6D6E7"
                                              title
                                              aria-label="Mischka"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Mischka"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#E7D6DE",
                                              }}
                                              data-event="foreColor"
                                              data-value="#E7D6DE"
                                              title
                                              aria-label="Twilight"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Twilight"
                                            />
                                          </div>
                                          <div className="note-color-row">
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#E79C9C",
                                              }}
                                              data-event="foreColor"
                                              data-value="#E79C9C"
                                              title
                                              aria-label="Tonys Pink"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Tonys Pink"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#FFC69C",
                                              }}
                                              data-event="foreColor"
                                              data-value="#FFC69C"
                                              title
                                              aria-label="Peach Orange"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Peach Orange"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#FFE79C",
                                              }}
                                              data-event="foreColor"
                                              data-value="#FFE79C"
                                              title
                                              aria-label="Cream Brulee"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Cream Brulee"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#B5D6A5",
                                              }}
                                              data-event="foreColor"
                                              data-value="#B5D6A5"
                                              title
                                              aria-label="Sprout"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Sprout"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#A5C6CE",
                                              }}
                                              data-event="foreColor"
                                              data-value="#A5C6CE"
                                              title
                                              aria-label="Casper"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Casper"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#9CC6EF",
                                              }}
                                              data-event="foreColor"
                                              data-value="#9CC6EF"
                                              title
                                              aria-label="Perano"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Perano"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#B5A5D6",
                                              }}
                                              data-event="foreColor"
                                              data-value="#B5A5D6"
                                              title
                                              aria-label="Cold Purple"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Cold Purple"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#D6A5BD",
                                              }}
                                              data-event="foreColor"
                                              data-value="#D6A5BD"
                                              title
                                              aria-label="Careys Pink"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Careys Pink"
                                            />
                                          </div>
                                          <div className="note-color-row">
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#E76363",
                                              }}
                                              data-event="foreColor"
                                              data-value="#E76363"
                                              title
                                              aria-label="Mandy"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Mandy"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#F7AD6B",
                                              }}
                                              data-event="foreColor"
                                              data-value="#F7AD6B"
                                              title
                                              aria-label="Rajah"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Rajah"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#FFD663",
                                              }}
                                              data-event="foreColor"
                                              data-value="#FFD663"
                                              title
                                              aria-label="Dandelion"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Dandelion"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#94BD7B",
                                              }}
                                              data-event="foreColor"
                                              data-value="#94BD7B"
                                              title
                                              aria-label="Olivine"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Olivine"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#73A5AD",
                                              }}
                                              data-event="foreColor"
                                              data-value="#73A5AD"
                                              title
                                              aria-label="Gulf Stream"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Gulf Stream"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#6BADDE",
                                              }}
                                              data-event="foreColor"
                                              data-value="#6BADDE"
                                              title
                                              aria-label="Viking"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Viking"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#8C7BC6",
                                              }}
                                              data-event="foreColor"
                                              data-value="#8C7BC6"
                                              title
                                              aria-label="Blue Marguerite"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Blue Marguerite"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#C67BA5",
                                              }}
                                              data-event="foreColor"
                                              data-value="#C67BA5"
                                              title
                                              aria-label="Puce"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Puce"
                                            />
                                          </div>
                                          <div className="note-color-row">
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#CE0000",
                                              }}
                                              data-event="foreColor"
                                              data-value="#CE0000"
                                              title
                                              aria-label="Guardsman Red"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Guardsman Red"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#E79439",
                                              }}
                                              data-event="foreColor"
                                              data-value="#E79439"
                                              title
                                              aria-label="Fire Bush"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Fire Bush"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#EFC631",
                                              }}
                                              data-event="foreColor"
                                              data-value="#EFC631"
                                              title
                                              aria-label="Golden Dream"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Golden Dream"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#6BA54A",
                                              }}
                                              data-event="foreColor"
                                              data-value="#6BA54A"
                                              title
                                              aria-label="Chelsea Cucumber"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Chelsea Cucumber"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#4A7B8C",
                                              }}
                                              data-event="foreColor"
                                              data-value="#4A7B8C"
                                              title
                                              aria-label="Smalt Blue"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Smalt Blue"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#3984C6",
                                              }}
                                              data-event="foreColor"
                                              data-value="#3984C6"
                                              title
                                              aria-label="Boston Blue"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Boston Blue"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#634AA5",
                                              }}
                                              data-event="foreColor"
                                              data-value="#634AA5"
                                              title
                                              aria-label="Butterfly Bush"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Butterfly Bush"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#A54A7B",
                                              }}
                                              data-event="foreColor"
                                              data-value="#A54A7B"
                                              title
                                              aria-label="Cadillac"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Cadillac"
                                            />
                                          </div>
                                          <div className="note-color-row">
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#9C0000",
                                              }}
                                              data-event="foreColor"
                                              data-value="#9C0000"
                                              title
                                              aria-label="Sangria"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Sangria"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#B56308",
                                              }}
                                              data-event="foreColor"
                                              data-value="#B56308"
                                              title
                                              aria-label="Mai Tai"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Mai Tai"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#BD9400",
                                              }}
                                              data-event="foreColor"
                                              data-value="#BD9400"
                                              title
                                              aria-label="Buddha Gold"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Buddha Gold"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#397B21",
                                              }}
                                              data-event="foreColor"
                                              data-value="#397B21"
                                              title
                                              aria-label="Forest Green"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Forest Green"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#104A5A",
                                              }}
                                              data-event="foreColor"
                                              data-value="#104A5A"
                                              title
                                              aria-label="Eden"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Eden"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#085294",
                                              }}
                                              data-event="foreColor"
                                              data-value="#085294"
                                              title
                                              aria-label="Venice Blue"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Venice Blue"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#311873",
                                              }}
                                              data-event="foreColor"
                                              data-value="#311873"
                                              title
                                              aria-label="Meteorite"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Meteorite"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#731842",
                                              }}
                                              data-event="foreColor"
                                              data-value="#731842"
                                              title
                                              aria-label="Claret"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Claret"
                                            />
                                          </div>
                                          <div className="note-color-row">
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#630000",
                                              }}
                                              data-event="foreColor"
                                              data-value="#630000"
                                              title
                                              aria-label="Rosewood"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Rosewood"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#7B3900",
                                              }}
                                              data-event="foreColor"
                                              data-value="#7B3900"
                                              title
                                              aria-label="Cinnamon"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Cinnamon"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#846300",
                                              }}
                                              data-event="foreColor"
                                              data-value="#846300"
                                              title
                                              aria-label="Olive"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Olive"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#295218",
                                              }}
                                              data-event="foreColor"
                                              data-value="#295218"
                                              title
                                              aria-label="Parsley"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Parsley"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#083139",
                                              }}
                                              data-event="foreColor"
                                              data-value="#083139"
                                              title
                                              aria-label="Tiber"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Tiber"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#003163",
                                              }}
                                              data-event="foreColor"
                                              data-value="#003163"
                                              title
                                              aria-label="Midnight Blue"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Midnight Blue"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#21104A",
                                              }}
                                              data-event="foreColor"
                                              data-value="#21104A"
                                              title
                                              aria-label="Valentino"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Valentino"
                                            />
                                            <button
                                              type="button"
                                              className="note-color-btn"
                                              style={{
                                                backgroundColor: "#4A1031",
                                              }}
                                              data-event="foreColor"
                                              data-value="#4A1031"
                                              title
                                              aria-label="Loulou"
                                              data-toggle="button"
                                              tabIndex={-1}
                                              data-original-title="Loulou"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="note-color-palette">
                                      <div className="note-color-row">
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#000000" }}
                                          data-event="backColor"
                                          data-value="#000000"
                                          title
                                          aria-label="Black"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Black"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#424242" }}
                                          data-event="backColor"
                                          data-value="#424242"
                                          title
                                          aria-label="Tundora"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Tundora"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#636363" }}
                                          data-event="backColor"
                                          data-value="#636363"
                                          title
                                          aria-label="Dove Gray"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Dove Gray"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#9C9C94" }}
                                          data-event="backColor"
                                          data-value="#9C9C94"
                                          title
                                          aria-label="Star Dust"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Star Dust"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#CEC6CE" }}
                                          data-event="backColor"
                                          data-value="#CEC6CE"
                                          title
                                          aria-label="Pale Slate"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Pale Slate"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#EFEFEF" }}
                                          data-event="backColor"
                                          data-value="#EFEFEF"
                                          title
                                          aria-label="Gallery"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Gallery"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#F7F7F7" }}
                                          data-event="backColor"
                                          data-value="#F7F7F7"
                                          title
                                          aria-label="Alabaster"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Alabaster"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#FFFFFF" }}
                                          data-event="backColor"
                                          data-value="#FFFFFF"
                                          title
                                          aria-label="White"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="White"
                                        />
                                      </div>
                                      <div className="note-color-row">
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#FF0000" }}
                                          data-event="backColor"
                                          data-value="#FF0000"
                                          title
                                          aria-label="Red"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Red"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#FF9C00" }}
                                          data-event="backColor"
                                          data-value="#FF9C00"
                                          title
                                          aria-label="Orange Peel"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Orange Peel"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#FFFF00" }}
                                          data-event="backColor"
                                          data-value="#FFFF00"
                                          title
                                          aria-label="Yellow"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Yellow"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#00FF00" }}
                                          data-event="backColor"
                                          data-value="#00FF00"
                                          title
                                          aria-label="Green"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Green"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#00FFFF" }}
                                          data-event="backColor"
                                          data-value="#00FFFF"
                                          title
                                          aria-label="Cyan"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Cyan"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#0000FF" }}
                                          data-event="backColor"
                                          data-value="#0000FF"
                                          title
                                          aria-label="Blue"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Blue"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#9C00FF" }}
                                          data-event="backColor"
                                          data-value="#9C00FF"
                                          title
                                          aria-label="Electric Violet"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Electric Violet"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#FF00FF" }}
                                          data-event="backColor"
                                          data-value="#FF00FF"
                                          title
                                          aria-label="Magenta"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Magenta"
                                        />
                                      </div>
                                      <div className="note-color-row">
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#F7C6CE" }}
                                          data-event="backColor"
                                          data-value="#F7C6CE"
                                          title
                                          aria-label="Azalea"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Azalea"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#FFE7CE" }}
                                          data-event="backColor"
                                          data-value="#FFE7CE"
                                          title
                                          aria-label="Karry"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Karry"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#FFEFC6" }}
                                          data-event="backColor"
                                          data-value="#FFEFC6"
                                          title
                                          aria-label="Egg White"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Egg White"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#D6EFD6" }}
                                          data-event="backColor"
                                          data-value="#D6EFD6"
                                          title
                                          aria-label="Zanah"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Zanah"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#CEDEE7" }}
                                          data-event="backColor"
                                          data-value="#CEDEE7"
                                          title
                                          aria-label="Botticelli"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Botticelli"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#CEE7F7" }}
                                          data-event="backColor"
                                          data-value="#CEE7F7"
                                          title
                                          aria-label="Tropical Blue"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Tropical Blue"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#D6D6E7" }}
                                          data-event="backColor"
                                          data-value="#D6D6E7"
                                          title
                                          aria-label="Mischka"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Mischka"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#E7D6DE" }}
                                          data-event="backColor"
                                          data-value="#E7D6DE"
                                          title
                                          aria-label="Twilight"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Twilight"
                                        />
                                      </div>
                                      <div className="note-color-row">
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#E79C9C" }}
                                          data-event="backColor"
                                          data-value="#E79C9C"
                                          title
                                          aria-label="Tonys Pink"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Tonys Pink"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#FFC69C" }}
                                          data-event="backColor"
                                          data-value="#FFC69C"
                                          title
                                          aria-label="Peach Orange"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Peach Orange"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#FFE79C" }}
                                          data-event="backColor"
                                          data-value="#FFE79C"
                                          title
                                          aria-label="Cream Brulee"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Cream Brulee"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#B5D6A5" }}
                                          data-event="backColor"
                                          data-value="#B5D6A5"
                                          title
                                          aria-label="Sprout"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Sprout"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#A5C6CE" }}
                                          data-event="backColor"
                                          data-value="#A5C6CE"
                                          title
                                          aria-label="Casper"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Casper"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#9CC6EF" }}
                                          data-event="backColor"
                                          data-value="#9CC6EF"
                                          title
                                          aria-label="Perano"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Perano"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#B5A5D6" }}
                                          data-event="backColor"
                                          data-value="#B5A5D6"
                                          title
                                          aria-label="Cold Purple"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Cold Purple"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#D6A5BD" }}
                                          data-event="backColor"
                                          data-value="#D6A5BD"
                                          title
                                          aria-label="Careys Pink"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Careys Pink"
                                        />
                                      </div>
                                      <div className="note-color-row">
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#E76363" }}
                                          data-event="backColor"
                                          data-value="#E76363"
                                          title
                                          aria-label="Mandy"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Mandy"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#F7AD6B" }}
                                          data-event="backColor"
                                          data-value="#F7AD6B"
                                          title
                                          aria-label="Rajah"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Rajah"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#FFD663" }}
                                          data-event="backColor"
                                          data-value="#FFD663"
                                          title
                                          aria-label="Dandelion"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Dandelion"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#94BD7B" }}
                                          data-event="backColor"
                                          data-value="#94BD7B"
                                          title
                                          aria-label="Olivine"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Olivine"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#73A5AD" }}
                                          data-event="backColor"
                                          data-value="#73A5AD"
                                          title
                                          aria-label="Gulf Stream"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Gulf Stream"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#6BADDE" }}
                                          data-event="backColor"
                                          data-value="#6BADDE"
                                          title
                                          aria-label="Viking"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Viking"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#8C7BC6" }}
                                          data-event="backColor"
                                          data-value="#8C7BC6"
                                          title
                                          aria-label="Blue Marguerite"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Blue Marguerite"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#C67BA5" }}
                                          data-event="backColor"
                                          data-value="#C67BA5"
                                          title
                                          aria-label="Puce"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Puce"
                                        />
                                      </div>
                                      <div className="note-color-row">
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#CE0000" }}
                                          data-event="backColor"
                                          data-value="#CE0000"
                                          title
                                          aria-label="Guardsman Red"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Guardsman Red"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#E79439" }}
                                          data-event="backColor"
                                          data-value="#E79439"
                                          title
                                          aria-label="Fire Bush"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Fire Bush"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#EFC631" }}
                                          data-event="backColor"
                                          data-value="#EFC631"
                                          title
                                          aria-label="Golden Dream"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Golden Dream"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#6BA54A" }}
                                          data-event="backColor"
                                          data-value="#6BA54A"
                                          title
                                          aria-label="Chelsea Cucumber"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Chelsea Cucumber"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#4A7B8C" }}
                                          data-event="backColor"
                                          data-value="#4A7B8C"
                                          title
                                          aria-label="Smalt Blue"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Smalt Blue"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#3984C6" }}
                                          data-event="backColor"
                                          data-value="#3984C6"
                                          title
                                          aria-label="Boston Blue"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Boston Blue"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#634AA5" }}
                                          data-event="backColor"
                                          data-value="#634AA5"
                                          title
                                          aria-label="Butterfly Bush"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Butterfly Bush"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#A54A7B" }}
                                          data-event="backColor"
                                          data-value="#A54A7B"
                                          title
                                          aria-label="Cadillac"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Cadillac"
                                        />
                                      </div>
                                      <div className="note-color-row">
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#9C0000" }}
                                          data-event="backColor"
                                          data-value="#9C0000"
                                          title
                                          aria-label="Sangria"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Sangria"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#B56308" }}
                                          data-event="backColor"
                                          data-value="#B56308"
                                          title
                                          aria-label="Mai Tai"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Mai Tai"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#BD9400" }}
                                          data-event="backColor"
                                          data-value="#BD9400"
                                          title
                                          aria-label="Buddha Gold"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Buddha Gold"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#397B21" }}
                                          data-event="backColor"
                                          data-value="#397B21"
                                          title
                                          aria-label="Forest Green"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Forest Green"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#104A5A" }}
                                          data-event="backColor"
                                          data-value="#104A5A"
                                          title
                                          aria-label="Eden"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Eden"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#085294" }}
                                          data-event="backColor"
                                          data-value="#085294"
                                          title
                                          aria-label="Venice Blue"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Venice Blue"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#311873" }}
                                          data-event="backColor"
                                          data-value="#311873"
                                          title
                                          aria-label="Meteorite"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Meteorite"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#731842" }}
                                          data-event="backColor"
                                          data-value="#731842"
                                          title
                                          aria-label="Claret"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Claret"
                                        />
                                      </div>
                                      <div className="note-color-row">
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#630000" }}
                                          data-event="backColor"
                                          data-value="#630000"
                                          title
                                          aria-label="Rosewood"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Rosewood"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#7B3900" }}
                                          data-event="backColor"
                                          data-value="#7B3900"
                                          title
                                          aria-label="Cinnamon"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Cinnamon"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#846300" }}
                                          data-event="backColor"
                                          data-value="#846300"
                                          title
                                          aria-label="Olive"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Olive"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#295218" }}
                                          data-event="backColor"
                                          data-value="#295218"
                                          title
                                          aria-label="Parsley"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Parsley"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#083139" }}
                                          data-event="backColor"
                                          data-value="#083139"
                                          title
                                          aria-label="Tiber"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Tiber"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#003163" }}
                                          data-event="backColor"
                                          data-value="#003163"
                                          title
                                          aria-label="Midnight Blue"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Midnight Blue"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#21104A" }}
                                          data-event="backColor"
                                          data-value="#21104A"
                                          title
                                          aria-label="Valentino"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Valentino"
                                        />
                                        <button
                                          type="button"
                                          className="note-color-btn"
                                          style={{ backgroundColor: "#4A1031" }}
                                          data-event="backColor"
                                          data-value="#4A1031"
                                          title
                                          aria-label="Loulou"
                                          data-toggle="button"
                                          tabIndex={-1}
                                          data-original-title="Loulou"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="note-btn-group btn-group note-table">
                            <div className="note-btn-group btn-group">
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm dropdown-toggle"
                                tabIndex={-1}
                                data-toggle="dropdown"
                                title
                                aria-label="Table"
                                data-original-title="Table"
                              >
                                <i className="note-icon-table" />
                              </button>
                              <div
                                className="note-dropdown-menu dropdown-menu note-table"
                                role="list"
                                aria-label="Table"
                              >
                                <div className="note-dimension-picker">
                                  <div
                                    className="note-dimension-picker-mousecatcher"
                                    data-event="insertTable"
                                    data-value="1x1"
                                    style={{ width: "10em", height: "10em" }}
                                  >
                                    <div className="note-dimension-picker-highlighted">
                                      <div className="note-dimension-picker-unhighlighted" />
                                      <div className="note-dimension-display">
                                        1 x 1
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="note-btn-group btn-group note-insert">
                            <button
                              type="button"
                              className="note-btn btn btn-light btn-sm"
                              tabIndex={-1}
                              title
                              aria-label="Link (CTRL+K)"
                              data-original-title="Link (CTRL+K)"
                            >
                              <i className="note-icon-link" />
                            </button>
                            <button
                              type="button"
                              className="note-btn btn btn-light btn-sm"
                              tabIndex={-1}
                              title
                              aria-label="Picture"
                              data-original-title="Picture"
                            >
                              <i className="note-icon-picture" />
                            </button>
                            <button
                              type="button"
                              className="note-btn btn btn-light btn-sm"
                              tabIndex={-1}
                              title
                              aria-label="Video"
                              data-original-title="Video"
                            >
                              <i className="note-icon-video" />
                            </button>
                          </div>
                          <div className="note-btn-group btn-group note-view">
                            <button
                              type="button"
                              className="note-btn btn btn-light btn-sm btn-fullscreen"
                              tabIndex={-1}
                              title
                              aria-label="Full Screen"
                              data-original-title="Full Screen"
                            >
                              <i className="note-icon-arrows-alt" />
                            </button>
                            <button
                              type="button"
                              className="note-btn btn btn-light btn-sm"
                              tabIndex={-1}
                              title
                              aria-label="Undo (CTRL+Z)"
                              data-original-title="Undo (CTRL+Z)"
                            >
                              <i className="note-icon-undo" />
                            </button>
                            <button
                              type="button"
                              className="note-btn btn btn-light btn-sm"
                              tabIndex={-1}
                              title
                              aria-label="Redo (CTRL+Y)"
                              data-original-title="Redo (CTRL+Y)"
                            >
                              <i className="note-icon-redo" />
                            </button>
                          </div>
                        </div>
                        <div className="note-editing-area">
                          <div className="note-handle">
                            <div className="note-control-selection">
                              <div className="note-control-selection-bg" />
                              <div className="note-control-holder note-control-nw" />
                              <div className="note-control-holder note-control-ne" />
                              <div className="note-control-holder note-control-sw" />
                              <div className="note-control-sizing note-control-se" />
                              <div className="note-control-selection-info" />
                            </div>
                          </div>
                          <textarea
                            className="note-codable"
                            aria-multiline="true"
                            defaultValue={""}
                          />
                          <div
                            className="note-editable card-block"
                            contentEditable="true"
                            role="textbox"
                            aria-multiline="true"
                            spellCheck="true"
                            autoCorrect="true"
                            style={{ height: 200 }}
                          >
                            <p>
                              <br />
                            </p>
                          </div>
                        </div>
                        <output
                          className="note-status-output"
                          role="status"
                          aria-live="polite"
                        >
                          <div className="note-statusbar" role="status">
                            <output
                              className="note-status-output"
                              aria-live="polite"
                            />
                            <div className="note-resizebar" aria-label="Resize">
                              <div className="note-icon-bar">
                                <div className="note-icon-bar">
                                  <div className="note-icon-bar" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </output>
                        <div
                          className="modal note-modal link-dialog"
                          aria-hidden="false"
                          tabIndex={-1}
                          role="dialog"
                          aria-label="Insert Link"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h4 className="modal-title">Insert Link</h4>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                  aria-hidden="true"
                                >
                                  ×
                                </button>
                              </div>
                              <div className="modal-body">
                                <div className="form-group note-form-group">
                                  <label
                                    htmlFor="note-dialog-link-txt-16760313274201"
                                    className="note-form-label"
                                  >
                                    Text to display
                                  </label>
                                  <input
                                    id="note-dialog-link-txt-16760313274201"
                                    className="note-link-text form-control note-form-control note-input"
                                    type="text"
                                  />
                                </div>
                                <div className="form-group note-form-group">
                                  <label
                                    htmlFor="note-dialog-link-url-16760313274201"
                                    className="note-form-label"
                                  >
                                    To what URL should this link go?
                                  </label>
                                  <input
                                    id="note-dialog-link-url-16760313274201"
                                    className="note-link-url form-control note-form-control note-input"
                                    type="text"
                                    defaultValue="http://"
                                  />
                                </div>
                                <div className="form-check sn-checkbox-open-in-new-window">
                                  <label className="form-check-label">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked
                                      aria-label="Open in new window"
                                      aria-checked="true"
                                    />{" "}
                                    Open in new window
                                  </label>
                                </div>
                                <div className="form-check sn-checkbox-use-protocol">
                                  <label className="form-check-label">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      defaultChecked
                                      aria-label="Use default protocol"
                                      aria-checked="true"
                                    />{" "}
                                    Use default protocol
                                  </label>
                                </div>
                              </div>
                              <div className="modal-footer">
                                <input
                                  type="button"
                                  href="#"
                                  className="btn btn-primary note-btn note-btn-primary note-link-btn"
                                  defaultValue="Insert Link"
                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="note-popover popover in note-link-popover bottom">
                          <div className="arrow">
                            <div className="popover-content note-children-container">
                              <span>
                                <a target="_blank" />
                                &nbsp;
                              </span>
                              <div className="note-btn-group btn-group note-link">
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Edit"
                                  data-original-title="Edit"
                                >
                                  <i className="note-icon-link" />
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Unlink"
                                  data-original-title="Unlink"
                                >
                                  <i className="note-icon-chain-broken" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="modal note-modal"
                          aria-hidden="false"
                          tabIndex={-1}
                          role="dialog"
                          aria-label="Insert Image"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h4 className="modal-title">Insert Image</h4>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                  aria-hidden="true"
                                >
                                  ×
                                </button>
                              </div>
                              <div className="modal-body">
                                <div className="form-group note-form-group note-group-select-from-files">
                                  <label
                                    htmlFor="note-dialog-image-file-16760313274201"
                                    className="note-form-label"
                                  >
                                    Select from files
                                  </label>
                                  <input
                                    id="note-dialog-image-file-16760313274201"
                                    className="note-image-input form-control-file note-form-control note-input"
                                    type="file"
                                    name="files"
                                    accept="image/*"
                                    multiple="multiple"
                                  />
                                </div>
                                <div className="form-group note-group-image-url">
                                  <label
                                    htmlFor="note-dialog-image-url-16760313274201"
                                    className="note-form-label"
                                  >
                                    Image URL
                                  </label>
                                  <input
                                    id="note-dialog-image-url-16760313274201"
                                    className="note-image-url form-control note-form-control note-input"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="modal-footer">
                                <input
                                  type="button"
                                  href="#"
                                  className="btn btn-primary note-btn note-btn-primary note-image-btn"
                                  defaultValue="Insert Image"
                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="note-popover popover in note-image-popover bottom">
                          <div className="arrow">
                            <div className="popover-content note-children-container">
                              <div className="note-btn-group btn-group note-resize">
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Resize full"
                                  data-original-title="Resize full"
                                >
                                  <span className="note-fontsize-10">100%</span>
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Resize half"
                                  data-original-title="Resize half"
                                >
                                  <span className="note-fontsize-10">50%</span>
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Resize quarter"
                                  data-original-title="Resize quarter"
                                >
                                  <span className="note-fontsize-10">25%</span>
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Original size"
                                  data-original-title="Original size"
                                >
                                  <i className="note-icon-rollback" />
                                </button>
                              </div>
                              <div className="note-btn-group btn-group note-float">
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Float Left"
                                  data-original-title="Float Left"
                                >
                                  <i className="note-icon-float-left" />
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Float Right"
                                  data-original-title="Float Right"
                                >
                                  <i className="note-icon-float-right" />
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Remove float"
                                  data-original-title="Remove float"
                                >
                                  <i className="note-icon-rollback" />
                                </button>
                              </div>
                              <div className="note-btn-group btn-group note-remove">
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Remove Image"
                                  data-original-title="Remove Image"
                                >
                                  <i className="note-icon-trash" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="note-popover popover in note-table-popover bottom">
                          <div className="arrow">
                            <div className="popover-content note-children-container">
                              <div className="note-btn-group btn-group note-add">
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm btn-md"
                                  tabIndex={-1}
                                  title
                                  aria-label="Add row below"
                                  data-original-title="Add row below"
                                >
                                  <i className="note-icon-row-below" />
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm btn-md"
                                  tabIndex={-1}
                                  title
                                  aria-label="Add row above"
                                  data-original-title="Add row above"
                                >
                                  <i className="note-icon-row-above" />
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm btn-md"
                                  tabIndex={-1}
                                  title
                                  aria-label="Add column left"
                                  data-original-title="Add column left"
                                >
                                  <i className="note-icon-col-before" />
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm btn-md"
                                  tabIndex={-1}
                                  title
                                  aria-label="Add column right"
                                  data-original-title="Add column right"
                                >
                                  <i className="note-icon-col-after" />
                                </button>
                              </div>
                              <div className="note-btn-group btn-group note-delete">
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm btn-md"
                                  tabIndex={-1}
                                  title
                                  aria-label="Delete row"
                                  data-original-title="Delete row"
                                >
                                  <i className="note-icon-row-remove" />
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm btn-md"
                                  tabIndex={-1}
                                  title
                                  aria-label="Delete column"
                                  data-original-title="Delete column"
                                >
                                  <i className="note-icon-col-remove" />
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm btn-md"
                                  tabIndex={-1}
                                  title
                                  aria-label="Delete table"
                                  data-original-title="Delete table"
                                >
                                  <i className="note-icon-trash" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="modal note-modal"
                          aria-hidden="false"
                          tabIndex={-1}
                          role="dialog"
                          aria-label="Insert Video"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h4 className="modal-title">Insert Video</h4>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                  aria-hidden="true"
                                >
                                  ×
                                </button>
                              </div>
                              <div className="modal-body">
                                <div className="form-group note-form-group row-fluid">
                                  <label
                                    htmlFor="note-dialog-video-url-16760313274201"
                                    className="note-form-label"
                                  >
                                    Video URL{" "}
                                    <small className="text-muted">
                                      (YouTube, Vimeo, Vine, Instagram,
                                      DailyMotion or Youku)
                                    </small>
                                  </label>
                                  <input
                                    id="note-dialog-video-url-16760313274201"
                                    className="note-video-url form-control note-form-control note-input"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="modal-footer">
                                <input
                                  type="button"
                                  href="#"
                                  className="btn btn-primary note-btn note-btn-primary note-video-btn"
                                  defaultValue="Insert Video"
                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="modal note-modal"
                          aria-hidden="false"
                          tabIndex={-1}
                          role="dialog"
                          aria-label="Help"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h4 className="modal-title">Help</h4>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                  aria-hidden="true"
                                >
                                  ×
                                </button>
                              </div>
                              <div
                                className="modal-body"
                                style={{ maxHeight: 300, overflow: "scroll" }}
                              >
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>ENTER</kbd>
                                </label>
                                <span>Insert Paragraph</span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>CTRL+Z</kbd>
                                </label>
                                <span>Undoes the last command</span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>CTRL+Y</kbd>
                                </label>
                                <span>Redoes the last command</span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>TAB</kbd>
                                </label>
                                <span>Tab</span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>SHIFT+TAB</kbd>
                                </label>
                                <span>Untab</span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>CTRL+B</kbd>
                                </label>
                                <span>Set a bold style</span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>CTRL+I</kbd>
                                </label>
                                <span>Set a italic style</span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>CTRL+U</kbd>
                                </label>
                                <span>Set a underline style</span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>CTRL+SHIFT+S</kbd>
                                </label>
                                <span>Set a strikethrough style</span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>CTRL+BACKSLASH</kbd>
                                </label>
                                <span>Clean a style</span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>CTRL+SHIFT+L</kbd>
                                </label>
                                <span>Set left align</span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>CTRL+SHIFT+E</kbd>
                                </label>
                                <span>Set center align</span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>CTRL+SHIFT+R</kbd>
                                </label>
                                <span>Set right align</span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>CTRL+SHIFT+J</kbd>
                                </label>
                                <span>Set full align</span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>CTRL+SHIFT+NUM7</kbd>
                                </label>
                                <span>Toggle unordered list</span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>CTRL+SHIFT+NUM8</kbd>
                                </label>
                                <span>Toggle ordered list</span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>CTRL+LEFTBRACKET</kbd>
                                </label>
                                <span>Outdent on current paragraph</span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>CTRL+RIGHTBRACKET</kbd>
                                </label>
                                <span>Indent on current paragraph</span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>CTRL+NUM0</kbd>
                                </label>
                                <span>
                                  Change current block's format as a paragraph(P
                                  tag)
                                </span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>CTRL+NUM1</kbd>
                                </label>
                                <span>Change current block's format as H1</span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>CTRL+NUM2</kbd>
                                </label>
                                <span>Change current block's format as H2</span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>CTRL+NUM3</kbd>
                                </label>
                                <span>Change current block's format as H3</span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>CTRL+NUM4</kbd>
                                </label>
                                <span>Change current block's format as H4</span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>CTRL+NUM5</kbd>
                                </label>
                                <span>Change current block's format as H5</span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>CTRL+NUM6</kbd>
                                </label>
                                <span>Change current block's format as H6</span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>CTRL+ENTER</kbd>
                                </label>
                                <span>Insert horizontal rule</span>
                                <div className="help-list-item" />
                                <label style={{ width: 180, marginRight: 10 }}>
                                  <kbd>CTRL+K</kbd>
                                </label>
                                <span>Show Link Dialog</span>
                              </div>
                              <div className="modal-footer">
                                <p className="text-center">
                                  <a
                                    href="http://summernote.org/"
                                    target="_blank"
                                  >
                                    Summernote 0.8.16
                                  </a>{" "}
                                  ·{" "}
                                  <a
                                    href="https://github.com/summernote/summernote"
                                    target="_blank"
                                  >
                                    Project
                                  </a>{" "}
                                  ·{" "}
                                  <a
                                    href="https://github.com/summernote/summernote/issues"
                                    target="_blank"
                                  >
                                    Issues
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="bank_payment_data" style={{ display: "none" }}>
                    <div id="bank_payment_informations">
                      <div className="form-group row">
                        <div className="row">
                          <label className="col-sm-2 col-from-label">
                            Bank Information
                          </label>
                          <div className="col-sm-8">
                            <div className="row">
                              <div className="col-sm-3">
                                <input
                                  type="text"
                                  id="bank_name"
                                  name="bank_name[]"
                                  className="form-control"
                                  placeholder="Bank Name"
                                />
                              </div>
                              <div className="col-sm-3">
                                <input
                                  type="text"
                                  id="account_name"
                                  name="account_name[]"
                                  className="form-control"
                                  placeholder="Account Name"
                                />
                              </div>
                              <div className="col-sm-3">
                                <input
                                  type="text"
                                  id="account_number"
                                  name="account_number[]"
                                  className="form-control"
                                  placeholder="Account Number"
                                />
                              </div>
                              <div className="col-sm-3">
                                <input
                                  type="text"
                                  id="routing_number"
                                  name="routing_number[]"
                                  className="form-control"
                                  placeholder="Routing Number"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <button
                              type="button"
                              className="btn btn-primary"
                              onclick="addBankInfoRow()"
                            >
                              Add More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-3 text-right">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      fdprocessedid="fec77"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
              <div className="d-none" id="bank_info_row">
                <div className="form-group row">
                  <div className="row">
                    <label className="col-sm-2 col-from-label">
                      Bank Information
                    </label>
                    <div className="col-sm-8">
                      <div className="row">
                        <div className="col-sm-3">
                          <input
                            type="text"
                            name="bank_name[]"
                            className="form-control"
                            placeholder="Bank Name"
                          />
                        </div>
                        <div className="col-sm-3">
                          <input
                            type="text"
                            name="account_name[]"
                            className="form-control"
                            placeholder="Account Name"
                          />
                        </div>
                        <div className="col-sm-3">
                          <input
                            type="text"
                            name="account_number[]"
                            className="form-control"
                            placeholder="Account Number"
                          />
                        </div>
                        <div className="col-sm-3">
                          <input
                            type="text"
                            name="routing_number[]"
                            className="form-control"
                            placeholder="Routing Number"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onclick="removeBankInfoRow(this)"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
          {/*p class="mb-0">&copy;  v6.3.3</p*/}
        </div>
      </div>
    </>
  );
}
export default ManualPaymentMethordCreate;
