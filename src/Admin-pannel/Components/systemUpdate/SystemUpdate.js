import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function SystemUpdate() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-8 col-xxl-6 mx-auto">
              <div className="card">
                <div className="card-header d-block d-md-flex">
                  <h3 className="h6 mb-0">Update your system</h3>
                  <span>Current verion: 6.3.3</span>
                </div>
                <div className="card-body">
                  <div className="alert alert-info mb-5">
                    <ul className="mb-0">
                      <li className>
                        Make sure your server has matched with all requirements.
                        <a href="https://mmslfashions.in/admin/system/server-status">Check Here</a>
                      </li>
                      <li className>Download latest version from codecanyon.</li>
                      <li className>Extract downloaded zip. You will find updates.zip file in those extraced files.</li>
                      <li className>Upload that zip file here and click update now.</li>
                      <li className>If you are using any addon make sure to update those addons after updating.</li>
                      <li className>Please turn off maintenance mode before updating.</li>
                    </ul>
                  </div>
                  <form action="https://mmslfashions.in/update" method="post" encType="multipart/form-data">
                    <input type="hidden" name="_token" defaultValue="jIjrVbjy8Ep5xDq5RYiVN5pj3oHbvX0CWNbXD8at" />						<div className="row gutters-5">
                      <div className="col-md">
                        <div className="input-group " data-toggle="aizuploader" data-type="archive">
                          <div className="input-group-prepend">
                            <div className="input-group-text bg-soft-secondary" onClick={() => setShow(true)}>Browse</div>
                          </div>
                          <div className="form-control file-amount" onClick={() => setShow(true)}>Choose File</div>
                          <input type="hidden" name="update_zip" defaultValue className="selected-files" />

                          <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton className='pb-0 bg-light'>
                              {/* <Modal.Title>Modal heading</Modal.Title> */}

                              <div className="modal-header">
                                <div className="uppy-modal-nav">
                                  <ul className="nav nav-tabs border-0">
                                    <li className="nav-item">
                                      <a className="nav-link active font-weight-medium text-dark" data-toggle="tab" href="#aiz-select-file">Select File</a>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link font-weight-medium text-dark" data-toggle="tab" href="#aiz-upload-new">Upload New</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                            </Modal.Header>
                            <Modal.Body>
                              {/* <div className="modal-body"> */}
                              <div className="tab-content h-100">
                                <div className="tab-pane active h-100" id="aiz-select-file">
                                  <div className="aiz-uploader-filter pt-1 pb-3 border-bottom mb-4">
                                    <div className="row align-items-center gutters-5 gutters-md-10 position-relative">
                                      <div className="col-xl-2 col-md-3 col-5">
                                        <div className>
                                          {/* Input */}
                                          <select className="form-control form-control-xs aiz-selectpicker" name="aiz-uploader-sort" fdprocessedid="irf1if">
                                            <option value="newest" selected>Sort by newest</option>
                                            <option value="oldest">Sort by oldest</option>
                                            <option value="smallest">Sort by smallest</option>
                                            <option value="largest">Sort by largest</option>
                                          </select>
                                          {/* End Input */}
                                        </div>
                                      </div>
                                      <div className="col-md-3 col-5">
                                        <div className="custom-control custom-radio">
                                          <input type="checkbox" className="custom-control-input" name="aiz-show-selected" id="aiz-show-selected" />
                                          <label className="custom-control-label" htmlFor="aiz-show-selected">
                                            Selected Only
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-md-4 col-xl-3 ml-auto mr-0 col-2 position-static">
                                        <div className="aiz-uploader-search text-right">
                                          <input type="text" className="form-control form-control-xs" name="aiz-uploader-search" placeholder="Search your files" fdprocessedid="xrbxjl" />
                                          <i className="search-icon d-md-none"><span /></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                </div>
                                <div className="tab-pane h-100" id="aiz-upload-new">
                                  <div id="aiz-upload-files" className="h-100">
                                    <div className="uppy-Root uppy-Dashboard uppy-Dashboard--animateOpenClose uppy-Dashboard--isInnerWrapVisible" aria-hidden="false" aria-label="File Uploader">
                                      <div className="uppy-Dashboard-overlay" tabIndex={-1} />
                                      <div className="uppy-Dashboard-inner" style={{ width: 750, height: 550 }}>
                                        <div className="uppy-Dashboard-innerWrap">
                                          <div className="uppy-Dashboard-dropFilesHereHint">Drop your files here</div>
                                          <div className="uppy-DashboardAddFiles">
                                            <input className="uppy-Dashboard-input" hidden aria-hidden="true" tabIndex={-1} type="file" name="files[]" multiple />
                                            <div className="uppy-DashboardTabs">
                                              <div className="uppy-Dashboard-dropFilesTitle">Drop files here, paste or <button type="button" className="uppy-u-reset uppy-Dashboard-browse">Browse</button>
                                              </div>
                                            </div>
                                            <div className="uppy-DashboardAddFiles-info" />
                                          </div>
                                          <span />
                                          <span />
                                          <span />
                                          <div className="uppy-Dashboard-progressindicators">
                                            <div className="uppy-StatusBar is-waiting" aria-hidden="true">
                                              <div className="uppy-StatusBar-progress  " role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0} style={{ width: '0%' }} />

                                              <div className="uppy-StatusBar-actions" />
                                            </div>
                                            <div className="uppy uppy-Informer" aria-hidden="true">
                                              <p role="alert">
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* </div> */}
                            </Modal.Body>
                            <Modal.Footer className='modal-footer justify-content-between bg-light'>
                              <div className="flex-grow-1 overflow-hidden d-flex">
                                <div className>
                                  <div className="aiz-uploader-selected">0 File selected</div>
                                  <button type="button" className="btn-link btn btn-sm p-0 aiz-uploader-selected-clear" fdprocessedid="1y2zyf">Clear</button>
                                </div>
                                <div className="mb-0 ml-3">
                                  <button type="button" className="btn btn-sm btn-primary me-2" id="uploader_prev_btn" disabled="disabled">Prev</button>
                                  <button type="button" className="btn btn-sm btn-primary" id="uploader_next_btn" disabled="disabled">Next</button>
                                </div>
                              </div>
                              <button type="button" className="btn btn-sm btn-primary " data-toggle="aizUploaderAddSelected" fdprocessedid="edrfkp" onClick={handleClose}>Add Files</button>

                            </Modal.Footer>
                          </Modal>
                        </div>
                        <div className="file-preview box" />
                      </div>
                      <div className="col-md-auto">
                        <button type="submit" className="btn btn-primary btn-block">Update Now</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto"></div>
      </div>
    </>
  )
}
export default SystemUpdate;