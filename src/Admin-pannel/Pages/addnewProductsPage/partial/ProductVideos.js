const ProductVideo = ({ item, onChangeHandler }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0 h6">Product Videos</h5>
      </div>
      <div className="card-body">
        <div className="form-group row">
          <label className="col-md-3 col-from-label">Video Provider</label>
          <div className="col-md-8">
            <select
              className="form-select"
              value={item?.video_provider}
              aria-label="Default select example"
              name="video_provider"
              onChange={(e) => {
                onChangeHandler(e, item.language_id);
              }}
            >
              <option value="youtube">Youtube</option>
              <option value="dailymotion">Dailymotion</option>
              <option value="vimeo">Vimeo</option>
            </select>
          </div>
        </div>

        <div className="form-group row">
          <label className="col-md-3 col-from-label">Video Link</label>
          <div className="col-md-8">
            <input
              type="text"
              value={item?.video_link}
              className="form-control"
              name="video_link"
              placeholder="Video Link"
              fdprocessedid="2pggse"
              onChange={(e) => {
                onChangeHandler(e, item.language_id);
              }}
            />
            <small className="text-muted">
              Use proper link without extra parameter. Don't use short share
              link/embeded iframe code.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVideo;
