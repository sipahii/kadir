import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function UploadCreate() {
    function importData() {
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = _ => {

                  let files =   Array.from(input.files);
                  console.log(files);
              };
        input.click();
        
      }
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar text-left mt-2 mb-3">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="h3">Upload New File</h1>
              </div>
              <div className="col-md-6 text-md-right">
                <Link
                  to="/admin/uploaded-files"
                  className="btn btn-link text-reset"
                >
                  <i className="las la-angle-left" />
                  <span>Back to uploaded files</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 h6">Drag &amp; drop your files</h5>
            </div>
            <div className="card-body">
              <div
                id="aiz-upload-files"
                className="h-420px"
                style={{ minHeight: "65vh" }}
              >
                <div
                  className="uppy-Root uppy-Dashboard uppy-Dashboard--animateOpenClose uppy-size--md uppy-size--lg uppy-size--xl uppy-Dashboard--isInnerWrapVisible"
                  aria-hidden="false"
                  aria-label="File Uploader"
                >
                  <div className="uppy-Dashboard-overlay" tabIndex={-1} />
                  <div
                    className="uppy-Dashboard-inner"
                    style={{ width: 750, height: 550 }}
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
                              onClick={importData}
                              className="uppy-u-reset uppy-Dashboard-browse"
                              fdprocessedid="tyl8gc"
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
                        <div className="uppy uppy-Informer" aria-hidden="true">
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
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
          {/*p class="mb-0">&copy;  v6.3.3</p*/}
        </div>
      </div>
    </>
  );
}
export default UploadCreate;
