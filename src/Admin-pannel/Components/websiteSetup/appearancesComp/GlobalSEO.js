import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function GlobalSEO() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h6 className="fw-600 mb-0">Global SEO</h6>
                </div>
                <div className="card-body">
                    <form action="https://mmslfashions.in/admin/business-settings/update" method="POST" encType="multipart/form-data">
                        <input type="hidden" name="_token" defaultValue="MfWj9eEof7fNq0mKB42pyG49sPDPkHAVyVSS7UBT" />    					<div className="form-group row">
                            <label className="col-md-3 col-from-label">Meta Title</label>
                            <div className="col-md-8">
                                <input type="hidden" name="types[]" defaultValue="meta_title" />
                                <input type="text" className="form-control" placeholder="Title" name="meta_title" defaultValue="ETG - a global conglomerate with diverse expertise encompassing the full supply chain" fdprocessedid="xi31l8" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Meta description</label>
                            <div className="col-md-8">
                                <input type="hidden" name="types[]" defaultValue="meta_description" />
                                <textarea className="resize-off form-control" placeholder="Description" name="meta_description" defaultValue={"ETG - a global conglomerate with diverse expertise encompassing the full supply chain"} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Keywords</label>
                            <div className="col-md-8">
                                <input type="hidden" name="types[]" defaultValue="meta_keywords" />
                                <textarea className="resize-off form-control" placeholder="Keyword, Keyword" name="meta_keywords" defaultValue={"ETG - a global conglomerate with diverse expertise encompassing the full supply chain"} />
                                <small className="text-muted">Separate with coma</small>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Meta Image</label>
                            <div className="col-md-8">
                                <div className="input-group " data-toggle="aizuploader" data-type="image" onClick={handleShow}>
                                    <div className="input-group-prepend">
                                        <div className="input-group-text bg-soft-secondary">Browse</div>
                                    </div>
                                    <div className="form-control file-amount">1 File selected</div>
                                    <input type="hidden" name="types[]" defaultValue="meta_image" />
                                    <input type="hidden" name="meta_image" defaultValue={1} className="selected-files" />
                                </div>
                                <div className="file-preview box"><div className="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id={1} title="etglogo.png"><div className="align-items-center align-self-stretch d-flex justify-content-center thumb"><img src="https://mmslfashions.in/public/uploads/all/AkvOmGh1LRAnHZmlVDsgPA5f5jgYesnZxVtONnhX.png" className="img-fit" /></div><div className="col body"><h6 className="d-flex"><span className="text-truncate title">etglogo</span><span className="ext flex-shrink-0">.png</span></h6><p>2 KB</p></div><div className="remove"><button className="btn btn-sm btn-link remove-attachment" type="button" fdprocessedid="il7nvg"><i className="la la-close" /></button></div></div></div>
                            </div>
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
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" fdprocessedid="rf9ago" onClick={handleClose}>
                                            <span aria-hidden="true" />
                                        </button>
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
                                            <div className="aiz-uploader-all clearfix c-scrollbar-light"><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="OEMFF BrandSmall.png" data-value={28}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/ClBKaveL2CshSfloa9MHVGkI3l8coNtciAHjCfS9.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">OEMFF BrandSmall</span><span className="ext flex-shrink-0">.png</span></h6><p>8 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="OEMFF Brand.png" data-value={27}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/FVxTnItYPUQWkUjCwlcPzfjtaWFoZWisOR0p6OWO.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">OEMFF Brand</span><span className="ext flex-shrink-0">.png</span></h6><p>22 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="banner-6.png" data-value={25}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/Nx70PCRmd0brMGlmMCO68H8L2kJo1D8Nmsg25AwV.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">banner-6</span><span className="ext flex-shrink-0">.png</span></h6><p>1 MB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="banner-3.png" data-value={22}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/7Bv6pS1lCcsO6IA6KTfKSrJOFRpdokhsUBEaKHoe.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">banner-3</span><span className="ext flex-shrink-0">.png</span></h6><p>1008 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="banner-2.png" data-value={23}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/QvlEdvbRcJm2YEPtJkDSgF3Cqe6en5gkGN7zUaQK.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">banner-2</span><span className="ext flex-shrink-0">.png</span></h6><p>1 MB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="banner-4.png" data-value={24}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/jbaiLs9zaW6BEZz01pmndGSW5b4odbCIlHcPh49N.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">banner-4</span><span className="ext flex-shrink-0">.png</span></h6><p>1 MB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="banner-5.png" data-value={21}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/woEGB2oL5MC7PMezPymdpRD7RBqC0fnian5nj3FZ.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">banner-5</span><span className="ext flex-shrink-0">.png</span></h6><p>455 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="banner-1.png" data-value={20}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/J2YmbYGVbQWOoaQOdfEFdcrW71ajvUIME7TpwNMz.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">banner-1</span><span className="ext flex-shrink-0">.png</span></h6><p>1 MB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="fertlz_01.jpg" data-value={15}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/v01lSDffgSnZK0HXzyIvBNgzdjnlIuolRvWXoCMA.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">fertlz_01</span><span className="ext flex-shrink-0">.jpg</span></h6><p>150 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="soybean-1379x331.jpg" data-value={14}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/0mM656EXmjvm5VJWhFFvXDaU6W8FZHYfzWCaQOSs.jpg" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">soybean-1379x331</span><span className="ext flex-shrink-0">.jpg</span></h6><p>117 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="falcon-logo.png" data-value={13}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/Wnhuad4Xbhfy69Jd8MN8PHGvoGO8hnFcYDs9EnX2.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">falcon-logo</span><span className="ext flex-shrink-0">.png</span></h6><p>4 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="Kynoch-Logo-PNG.png" data-value={12}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/z1CNIkuY8rhgQFW7r8RvWWA0akrBbMCTOPgaKzja.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">Kynoch-Logo-PNG</span><span className="ext flex-shrink-0">.png</span></h6><p>30 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="3.png" data-value={10}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/VRg3fxSHDaSL6GfE9o05ropnhBao78kMgl0mvIqR.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">3</span><span className="ext flex-shrink-0">.png</span></h6><p>62 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="4.png" data-value={11}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/X8h9TcK3S4MFhEH7HiV62ewEnG1S3Jgq1UlzvRtu.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">4</span><span className="ext flex-shrink-0">.png</span></h6><p>55 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="2.png" data-value={9}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/zNg9tlDvU7nCORhtIwFGhFzBpbPAoNwUL3FWpkpx.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">2</span><span className="ext flex-shrink-0">.png</span></h6><p>48 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="1.png" data-value={8}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/0fszFBvsXqbAUVAsKTXrOAVHBnuvUvHsVeWjuqji.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">1</span><span className="ext flex-shrink-0">.png</span></h6><p>51 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="cate1.png" data-value={7}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/DgCjfbcutqaF1glvntiF2FqbUNOXKGozoEflL3Qg.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">cate1</span><span className="ext flex-shrink-0">.png</span></h6><p>87 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="favicon-16x16.png" data-value={6}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/vJzLXpWA3m6TDXRLHvfuunmAl2Zb4K1imttT1QqB.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">favicon-16x16</span><span className="ext flex-shrink-0">.png</span></h6><p>743 Bytes</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="favicon-32x32.png" data-value={5}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/qWtVvdVrkexRR41VVaNV6W7yzjMGUVrD3HqfnYNA.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">favicon-32x32</span><span className="ext flex-shrink-0">.png</span></h6><p>2 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="categore-1.png" data-value={4}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/AaGZPAv5UQcsOyE0eV96T1JNQgxmynDDD1cdApbn.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">categore-1</span><span className="ext flex-shrink-0">.png</span></h6><p>121 KB</p></div></div></div></div><div className="aiz-file-box-wrap" aria-hidden="false" data-selected="false"><div className="aiz-file-box"><div className="card card-file aiz-uploader-select" title="etglogo.png" data-value={1}><div className="card-file-thumb"><img src="//mmslfashions.in/public/uploads/all/AkvOmGh1LRAnHZmlVDsgPA5f5jgYesnZxVtONnhX.png" className="img-fit" /></div><div className="card-body"><h6 className="d-flex"><span className="text-truncate title">etglogo</span><span className="ext flex-shrink-0">.png</span></h6><p>2 KB</p></div></div></div></div></div>
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
                        <div className="text-right">
                            <button type="submit" className="btn btn-primary" fdprocessedid="rv0mwb">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default GlobalSEO;