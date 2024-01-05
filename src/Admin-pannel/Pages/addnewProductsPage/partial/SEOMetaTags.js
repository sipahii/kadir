const SEOMetaTags = ({ onChangeHandler, item }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0 h6">SEO Meta Tags</h5>
      </div>
      <div className="card-body">
        <div className="form-group row">
          <label className="col-md-3 col-from-label">Meta Title</label>
          <div className="col-md-8">
            <input
              type="text"
              value={item?.meta_title}
              className="form-control"
              name="meta_title"
              placeholder="Meta Title"
              fdprocessedid="1hz7zu"
              onChange={(e) => {
                onChangeHandler(e, item.language_id);
              }}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-3 col-from-label">Meta Keyword</label>
          <div className="col-md-8">
            <input
              type="text"
              value={item?.meta_keywords}
              className="form-control"
              name="meta_keywords"
              placeholder="Meta Key Word"
              fdprocessedid="1hz7zu"
              onChange={(e) => {
                onChangeHandler(e, item.language_id);
              }}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-3 col-from-label">Slug</label>
          <div className="col-md-8">
            <input
              type="text"
              value={item?.slug}
              className="form-control"
              name="slug"
              placeholder="Slug"
              fdprocessedid="1hz7zu"
              onChange={(e) => {
                onChangeHandler(e, item.language_id);
              }}
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-md-3 col-from-label"></label>
          <div className="col-md-8">
            <button type="button" className="btn btn-primary">
              Fetch AI Content
            </button>
          </div>
        </div>

        <div className="form-group row">
          <label className="col-md-3 col-from-label">Description</label>
          <div className="col-md-8">
            <textarea
              name="meta_description"
              value={item?.meta_description}
              rows={8}
              className="form-control"
              onChange={(e) => {
                onChangeHandler(e, item.language_id);
              }}
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-md-3 col-from-label"></label>
          <div className="col-md-8">
            <button type="button" className="btn btn-primary">
              Fetch AI Content
            </button>
          </div>
        </div>

        <div className="form-group row">
          <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">
            Meta Image
          </label>
          <div className="col-md-8">
            <div
              className="input-group"
              data-toggle="aizuploader"
              data-type="image"
            >
              <div className="input-group-prepend">
                <div className="input-group-text bg-soft-secondary font-weight-medium">
                  Browse
                </div>
              </div>
              <div className="form-control file-amount">
                <input
                  type="file"
                  name="meta_image"
                  className="selected-files"
                  onChange={(e) => {
                    onChangeHandler(e, item.language_id);
                  }}
                />
              </div>
            </div>
            <div className="file-preview box sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOMetaTags;
