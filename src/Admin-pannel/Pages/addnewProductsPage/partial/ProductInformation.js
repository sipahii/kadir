import Multiselect from "multiselect-react-dropdown";
import { RxCross1 } from "react-icons/rx";

const ProductInforamation = ({
  item,
  onChangeHandler,
  existPro,
  setCategoryIds,
  categ,
  industryData,
  setFinalCatDIndus,
  isSellerLogin,
  sellerD,
  brandData,
  unitMast,
  tags,
  onchangeImges,
  removetagTag,
  onchangeImges1,
  changettriPro,
  handleTagKeyDown,
  data1,
  proAtt,
  changeValues,
  removeRowAt,
}) => {
  console.log("item.attributeList", item.attributeList);
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0 h6">Product Information {item.lable}</h5>
      </div>
      <div className="card-body">
        <div className="form-group row">
          <label className="col-md-3 col-from-label">
            Product Name <span className="text-danger">*</span>
          </label>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              value={item?.name}
              name="name"
              placeholder="Product Name"
              required
              fdprocessedid="3bss68"
              onChange={(e) => {
                onChangeHandler(e, item.language_id);
              }}
            />
            {existPro && (
              <div style={{ color: "red" }}>product already exists with !</div>
            )}
          </div>
        </div>

        <div className="form-group row" id="category">
          <label className="col-md-3 col-from-label">
            Category <span className="text-danger">*</span>
          </label>
          <div className="col-md-8">
            <Multiselect
              isObject={true}
              displayValue="name"
              options={categ}
              showCheckbox
              selectedValues={item?.category_id}
              onRemove={(selectedCat) => {
                const selectedIds = selectedCat.map((cat) => {
                  return cat;
                });
                setCategoryIds(selectedIds);
              }}
              onSelect={(selectedCat) => {
                const selectedIds = selectedCat.map((cat) => {
                  return cat;
                });
                setCategoryIds(selectedIds);
              }}
            />
          </div>
        </div>
        <div className="form-group row" id="category">
          <label className="col-md-3 col-from-label">
            Industry <span className="text-danger">*</span>
          </label>
          <div className="col-md-8">
            <Multiselect
              isObject={true}
              displayValue="name"
              options={industryData}
              showCheckbox
              selectedValues={[]}
              onRemove={(selectedCat) => {
                const selectedIds = selectedCat.map((cat) => {
                  return cat._id;
                });
                setFinalCatDIndus(selectedIds);
              }}
              onSelect={(selectedCat) => {
                const selectedIds = selectedCat.map((cat) => {
                  return cat._id;
                });
                setFinalCatDIndus(selectedIds);
              }}
            />
          </div>
        </div>

        {isSellerLogin === "false" && (
          <div className="form-group row" id="seller">
            <label className="col-md-3 col-from-label">Seller</label>
            <div className="col-md-8">
              <select
                className="form-select"
                aria-label="Default select example"
                value={item?.seller_id}
                name="seller_id"
                onChange={(e) => {
                  onChangeHandler(e, item.language_id);
                }}
              >
                <option>Select Seller</option>
                {sellerD?.length &&
                  sellerD?.map((item) => {
                    return (
                      <option value={item._id} key={item._id}>
                        {item.firstname + " " + item.lastname}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
        )}

        <div className="form-group row" id="brand">
          <label className="col-md-3 col-from-label">Brand</label>
          <div className="col-md-8">
            <select
              className="form-select"
              value={item?.brand_id}
              aria-label="Default select example"
              name="brand_id"
              onChange={(e) => {
                onChangeHandler(e, item.language_id);
              }}
            >
              <option>Select Brand</option>
              {brandData.data?.length &&
                brandData.data.map((item) => {
                  return (
                    <option value={item._id} key={item._id}>
                      {item.name || item._id}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>

        <div className="form-group row">
          <label className="col-md-3 col-from-label">Unit</label>
          <div className="col-md-8">
            <select
              className="form-select"
              value={item?.unit}
              aria-label="Default select example"
              name="unit"
              onChange={(e) => {
                onChangeHandler(e, item.language_id);
              }}
            >
              <option value={1}>Select Unit</option>
              {unitMast?.length &&
                unitMast?.map((item) => {
                  return (
                    <option value={item.name} key={item._id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-3 col-from-label">
            Weight <small>(In Kg)</small>
          </label>
          <div className="col-md-8">
            <input
              type="text"
              value={item?.weights}
              className="form-control"
              name="weights"
              step="0.01"
              placeholder="weight"
              fdprocessedid="sq5qc3"
              onChange={(e) => {
                onChangeHandler(e, item.language_id);
              }}
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-md-3 col-from-label">
            Minimum Purchase Qty <span className="text-danger">*</span>
          </label>
          <div className="col-md-8">
            <input
              type="number"
              value={item?.minimum_purchase_qty}
              lang="en"
              className="form-control"
              name="minimum_purchase_qty"
              required
              fdprocessedid="d0gl3m"
              onChange={(e) => {
                onChangeHandler(e, item.language_id);
              }}
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-md-3 col-from-label">
            Tags <span className="text-danger">*</span>
          </label>
          <div className="col-md-8">
            <div className="tags_inp_wrapper">
              <div className="tags-input-container">
                {tags.map((tag, index) => {
                  return (
                    <div className="tag-item" key={index}>
                      <span className="text">{tag}</span>
                      <span
                        className="close"
                        onClick={() => removetagTag(index)}
                      >
                        &times;
                      </span>
                    </div>
                  );
                })}
                <input
                  type="text"
                  onKeyDown={(e) => {
                    handleTagKeyDown(e, item.language_id);
                  }}
                  placeholder="type some text"
                  className="tags-input"
                  name="tags"
                  // onChange={(e) => {
                  //   onChangeHandler(e, item.language_id);
                  // }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="form-group row">
          <label className="col-md-3 col-from-label">Barcode</label>
          <div className="col-md-8">
            <input
              type="text"
              value={item?.barcode}
              className="form-control"
              name="barcode"
              placeholder="Barcode"
              fdprocessedid="ifjwoo"
              onChange={(e) => {
                onChangeHandler(e, item.language_id);
              }}
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-md-3 col-from-label">Gallery Images</label>
          <div className="col-md-8">
            <input
              type="file"
              className="form-control"
              name="gallery_image"
              multiple
              accept="image/*"
              onChange={(e) => {
                onchangeImges(e, item.language_id);
              }}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-3 col-from-label">Thumbnail Image</label>
          <div className="col-md-8">
            <input
              type="file"
              name="mainImage_url"
              accept="image/*"
              className="form-control"
              onChange={(e) => {
                onchangeImges1(e, item.language_id);
              }}
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-md-3 col-from-label"> Product Attribute </label>

          <div className="col-md-8">
            <select
              className="form-select"
              aria-label="Default select example"
              name="attributeList"
              onChange={changettriPro}
              // value={item?.attributeList?.name}
              // value="first"
              defaultValue={item?.attributeList?._id || 1}
            >
              <option value={1}>Select Unit</option>
              {data1 &&
                data1.map((item) => {
                  return (
                    <option value={item._id} key={item._id} id={item._id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        {proAtt && (
          <div className="form-group row">
            <label className="col-md-3 col-from-label">
              Set Attribute Values
            </label>
            <div className="col-md-8">
              {proAtt?.values &&
                proAtt.values.map((item, i) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        margin: "5px 0",
                      }}
                      key={i}
                    >
                      <label className="col-md-3 col-from-label">
                        {item?.name}
                      </label>
                      <input
                        placeholder="Value"
                        name={item?._id}
                        className="form-control"
                        value={item?.value}
                        onChange={(e) => changeValues(e, item)}
                      />
                      <div
                        style={{
                          fontSize: "17px",
                          margin: "0 5px",
                        }}
                      >
                        {" "}
                        <RxCross1
                          onClick={() => {
                            removeRowAt(item?._id);
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        <div className="form-group row">
          <label className="col-md-3 col-from-label">Refundable</label>
          <div className="col-md-8">
            <label className="aiz-switch aiz-switch-success mb-0">
              <input
                type="checkbox"
                name={"refundable"}
                checked={item.refundable}
                onChange={(e) => {
                  onChangeHandler(e, item.language_id, !item.refundable);
                }}
              />
              <span />
            </label>
          </div>
        </div>

        <div className="form-group row">
          <label className="col-md-3 col-from-label">Quotation</label>
          <div className="col-md-8">
            <label className="aiz-switch aiz-switch-success mb-0">
              <input
                type="checkbox"
                name={"quotation"}
                checked={item.quotation}
                onChange={(e) => {
                  onChangeHandler(e, item.language_id, !item.quotation);
                }}
              />
              <span />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInforamation;
