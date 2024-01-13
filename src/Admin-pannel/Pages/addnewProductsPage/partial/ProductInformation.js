import Multiselect from "multiselect-react-dropdown";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import Button from "react-bootstrap/Button";

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
  // onchangeImges1,
  changettriPro,
  handleTagKeyDown,
  data1,
  proAtt,
  changeValues,
  removeRowAt,
}) => {
  const [sel, setSel] = useState([]);
  const [finalCatD, setFinalCatD] = useState();
  const [selectedIds, setSelectedIds] = useState([]);
  useEffect(() => {
    if (proAtt) {
      const maped = proAtt?.map((item) => {
        return {
          _id: item?.attributeSetMaster?._id,
          name: item?.attributeSetMaster?.name,
        };
      });
      if (maped.length) setSel(maped);
    }
    if (item?.industry_id?.length && industryData) {
      let ids = industryData?.filter((list) => {
        if (item.industry_id.includes(list?._id)) {
          return { name: list?.name };
        }
      });
      setSelectedIds(ids);
    }
    return () => {
      setSelectedIds([]);
      setFinalCatD([]);
      setSel([]);
    };
  }, [proAtt, item?.industry_id, industryData]);

  const getGlobalAttributesList = async () => {
    const res = await axios.post(
      "https://onlineparttimejobs.in/api/attributeSetMaster/categ/get",
      { id: finalCatD }
    );
    changettriPro(res?.data);
  };
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
                onChangeHandler(e, item?.language_id?._id);
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
                const selectedIds = selectedCat?.map((cat) => {
                  return cat;
                });
                setCategoryIds(selectedIds);
              }}
              onSelect={(selectedCat) => {
                const selectedIds = selectedCat?.map((cat) => {
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
              selectedValues={selectedIds}
              onRemove={(selectedCat) => {
                const selectedIds = selectedCat?.map((cat) => {
                  return cat._id;
                });
                setFinalCatDIndus(selectedIds);
              }}
              onSelect={(selectedCat) => {
                const selectedIds = selectedCat?.map((cat) => {
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
                  onChangeHandler(e, item?.language_id?._id);
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
                onChangeHandler(e, item?.language_id?._id);
              }}
            >
              <option>Select Brand</option>
              {brandData.data?.length &&
                brandData.data?.map((item) => {
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
                onChangeHandler(e, item?.language_id?._id);
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
                onChangeHandler(e, item?.language_id?._id);
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
                onChangeHandler(e, item?.language_id?._id);
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
                {tags?.map((tag, index) => {
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
                    handleTagKeyDown(e, item?.language_id?._id);
                  }}
                  placeholder="type some text"
                  className="tags-input"
                  name="tags"
                  // onChange={(e) => {
                  //   onChangeHandler(e, item?.language_id?._id);
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
                onChangeHandler(e, item?.language_id?._id);
              }}
            />
          </div>
        </div>

        <div className="form-group row">
          {!!item?.images?.length && (
            <>
              <div className="col-md-3"></div>
              <div className="col-md-9">
                <img
                  src={item.images[0]?.url}
                  height={"100"}
                  width={"100"}
                  alt="gallaryImage"
                />
              </div>
            </>
          )}
          <label className="col-md-3 col-from-label">Gallery Images</label>
          <div className="col-md-8">
            <input
              type="file"
              className="form-control"
              name="gallery_image"
              multiple
              accept="image/*"
              onChange={(e) => {
                onchangeImges(e, item?.language_id?._id);
              }}
            />
          </div>
        </div>
        <div className="form-group row">
          {!!item?.mainImage_url?.url && (
            <>
              <div className="col-md-3"></div>
              <div className="col-md-9">
                <img
                  src={item.mainImage_url?.url}
                  height={"100"}
                  width={"100"}
                  alt="mainImage_url"
                />
              </div>
            </>
          )}
          <label className="col-md-3 col-from-label">Thumbnail Image</label>
          <div className="col-md-8">
            <input
              type="file"
              name="mainImage_url"
              accept="image/*"
              className="form-control"
              onChange={(e) => {
                onchangeImges(e, item?.language_id?._id);
              }}
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-md-3 col-from-label"> Product Attribute </label>

          <div className="col-md-8">
            <div className="form-group row">
              {/* <label className="col-md-3 col-from-label"> Attribute </label> */}

              <div className="col-md-12 d-flex classatt">
                <Multiselect
                  isObject={true}
                  displayValue="name"
                  options={data1}
                  showCheckbox
                  selectedValues={sel}
                  onRemove={(selectedCat) => {
                    const selectedIds = selectedCat?.map((cat) => {
                      return cat._id;
                    });
                    setFinalCatD(selectedIds);
                  }}
                  onSelect={(selectedCat) => {
                    const selectedIds = selectedCat?.map((cat) => {
                      return cat._id;
                    });
                    setFinalCatD(selectedIds);
                  }}
                />
                <Button onClick={getGlobalAttributesList} variant="success">
                  Click
                </Button>
              </div>
            </div>
          </div>
        </div>
        {proAtt && (
          <div className="form-group row">
            <label className="col-md-3 col-from-label">
              Set Attribute Values
            </label>
            <div className="col-md-8">
              <div>
                {proAtt &&
                  proAtt?.map((item, i) => {
                    return (
                      !!item?.list?.length && (
                        <div className="mainboxatt" key={i}>
                          <div className="col-4">
                            {item.attributeSetMaster.name}
                          </div>
                          <div>
                            {item?.list?.map((val, v) => {
                              return (
                                <div
                                  key={v}
                                  style={{
                                    display: "flex",
                                    alignContent: "baseline",
                                    margin: "7px 0",
                                  }}
                                >
                                  <label className="col-md-3 col-from-label">
                                    {val.attribute.name}
                                  </label>
                                  <input
                                    placeholder="Value"
                                    name={val?.attribute._id}
                                    value={val.value}
                                    id={i}
                                    className="form-control"
                                    onChange={(e) => {
                                      changeValues(e, val.attribute._id);
                                    }}
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
                                        removeRowAt(val?.attribute._id, i);
                                      }}
                                    />
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )
                    );
                  })}
              </div>
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
                  onChangeHandler(e, item?.language_id?._id, !item.refundable);
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
                  onChangeHandler(e, item?.language_id?._id, !item.quotation);
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
