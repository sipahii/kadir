import axios from "axios";
import { useEffect, useState } from "react";
import ProductDescriptionWrapper from "../productDescriptionWrapper/productDescriptionWrapper";

function MultiLangFormBlogCateg({
  data,
  item,
  i,
  params,
  sendData,
  onChangeHandler,
  setValue,
  category,
  onImageChangeHandler,
  handleDescription,
}) {
  const token = window.localStorage.getItem("token");

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0 h6">
          {params?.uid ? "Update" : "Add"} Blog Information ssddee (
          {item?.lable})
        </h5>
      </div>
      <div className="card-body">
        <form id="create-course-form" className="form-horizontal">
          <div className="form-group row">
            <label className="col-md-3 col-form-label">
              Name
              <span className="text-danger">*</span>
            </label>
            <div className="col-md-9">
              <input
                type="text"
                placeholder="Name"
                id="title"
                name="name"
                value={item?.name}
                className="form-control"
                required
                onChange={(e) => {
                  onChangeHandler(e, item.language_id);
                }}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-md-3 col-form-label">
              Lavel
              <span className="text-danger">*</span>
            </label>
            <div className="col-md-9">
              <input
                type="number"
                placeholder="Higher number has high priority"
                name="level"
                value={item?.level}
                id="lavel"
                className="form-control"
                required
                onChange={(e) => {
                  onChangeHandler(e, item.language_id);
                }}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3 col-form-label">
              Parent Category
              <span className="text-danger">*</span>
            </label>
            <div className="col-md-9">
              <select
                className="form-select"
                name="parent_id"
                value={item?.parent_id}
                onChange={(e) => {
                  onChangeHandler(e, item.language_id);
                }}
                required
              >
                <option>Select Parent Industry</option>
                <option value="null">Null</option>
                {category &&
                  category?.map((item, i) => {
                    return (
                      <option key={item._id} value={item._id}>
                        {item.name}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3 col-form-label">Banner</label>
            <div className="col-md-9">
              <div>
                {item?.banner?.url && (
                  <img
                    src={item?.banner?.url}
                    style={{ width: "100px", height: "100px" }}
                  />
                )}
                <div className="input-group" data-type="image">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-soft-secondary font-weight-medium">
                      Browse
                    </div>
                  </div>
                  <div className="form-control file-amount">
                    <input
                      type="file"
                      name="banner"
                      className="selected-files"
                      onChange={(e) => {
                        onImageChangeHandler(e, item.language_id, "banner");
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="file-preview box sm"></div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3 col-form-label">Icon </label>
            <div className="col-md-9">
              <div>
                {item?.icon?.url && (
                  <img
                    src={item?.icon?.url}
                    style={{ width: "100px", height: "100px" }}
                  />
                )}
                <div className="input-group" data-type="image">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-soft-secondary font-weight-medium">
                      Browse
                    </div>
                  </div>
                  <div className="form-control file-amount">
                    <input
                      type="file"
                      name="icon"
                      className="selected-files"
                      onChange={(e) => {
                        onImageChangeHandler(e, item.language_id, "icon");
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {i == 0 && (
            <div className="form-group row">
              <label className="col-md-3 col-form-label">
                Slug
                <span className="text-danger">*</span>
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  placeholder="Slug"
                  name="slug"
                  value={item?.slug}
                  id="slug"
                  className="form-control"
                  required
                  onChange={(e) => {
                    onChangeHandler(e, item.language_id);
                  }}
                />
              </div>
            </div>
          )}
          <div className="form-group row">
            <label className="col-md-3 col-form-label">Video Link</label>
            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                name="video"
                value={item?.video}
                placeholder="Video Link"
                onChange={(e) => {
                  onChangeHandler(e, item.language_id);
                }}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3 col-form-label">Meta Title</label>
            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                name="meta_title"
                value={item?.meta_title}
                placeholder="Meta Title"
                onChange={(e) => {
                  onChangeHandler(e, item.language_id);
                }}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3 col-form-label">Meta Description</label>
            <div className="col-md-9">
              <textarea
                name="meta_description"
                rows={5}
                className="form-control"
                value={item?.meta_description}
                onChange={(e) => {
                  onChangeHandler(e, item.language_id);
                }}
                required
              />
            </div>
          </div>
          <ProductDescriptionWrapper
            productDescription={item?.description}
            callBackWithHtml={handleDescription}
          />

          <div
            className="col-lg-12 mt-3"
            style={{ display: "flex", justifyContent: "end" }}
          >
            {data.length == i + 1 ? (
              <div className="form-group text-right mt-4">
                <button
                  type="button"
                  className="btn btn-primary"
                  fdprocessedid="uzw7ye"
                  onClick={sendData}
                >
                  Save
                </button>
                <button className="btn btn-danger ms-2">Cancel</button>
              </div>
            ) : (
              <div className="form-group text-right mt-4">
                {i !== 0 && (
                  <button
                    type="submit"
                    className="btn btn-primary"
                    fdprocessedid="uzw7ye"
                    onClick={() => {
                      setValue(i - 1);
                    }}
                  >
                    Prev
                  </button>
                )}
                <button
                  type="submit"
                  className="btn btn-primary"
                  fdprocessedid="uzw7ye"
                  onClick={() => {
                    setValue(i + 1);
                  }}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
export default MultiLangFormBlogCateg;
