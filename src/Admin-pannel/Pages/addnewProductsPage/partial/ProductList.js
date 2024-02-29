import { AiTwotoneDelete } from "react-icons/ai";
import { Button, Popconfirm } from "antd";
import { DatabaseFilled, QuestionCircleOutlined } from "@ant-design/icons";
import { ColorVariant } from "../../../Components/addNewProductsComponents/ColorVariant";

const ProductList = ({
  item,
  onChangeHandler,
  isVariantLoading,
  updatedVariants,
  deleteRow,
  sellerD,
  pickUp,
  updateVarientPriceAndAttributes,
  deleteAllRow,
  coppiedPriceToAllVarient,
  deleteImage,
}) => {
  return (
    <div className="card mt-2 rest-part col-lg-12">
      <div className="card-header">
        <h4 className="mb-0">Product price &amp; stock</h4>
      </div>
      <div className="card-body">
        <div className="form-group row">
          <label className="col-md-3 col-from-label">Global Attribute</label>
          <div className="col-md-8">
            <label className="aiz-switch aiz-switch-success mb-0">
              <input
                type="checkbox"
                name={"isGlobalAttribute"}
                checked={item?.isGlobalAttribute}
                onChange={(e) => {
                  onChangeHandler(
                    e,
                    item?.language_id?._id,
                    !item.isGlobalAttribute
                  );
                }}
              />
              <span />
            </label>
          </div>
        </div>

        <div className="form-group row">
          <label className="col-md-3 col-from-label">Global Image</label>
          <div className="col-md-8">
            <label className="aiz-switch aiz-switch-success mb-0">
              <input
                type="checkbox"
                name={"isGlobalImage"}
                checked={item?.isGlobalImage}
                onChange={(e) => {
                  onChangeHandler(
                    e,
                    item?.language_id?._id,
                    !item?.isGlobalImage
                  );
                }}
              />
              <span />
            </label>
          </div>
        </div>
        <div>
          <Popconfirm
            title="Are you sure to delete All Variations?"
            description="Are you sure to delete All Variations?"
            icon={
              <QuestionCircleOutlined
                style={{
                  color: "red",
                }}
              />
            }
            onConfirm={deleteAllRow}
          >
            <Button
              danger
              className="d-flex align-items-center gap-10"
              style={{ gap: "10px", marginBottom: "10px" }}
            >
              <AiTwotoneDelete /> Delete All Variation
            </Button>
          </Popconfirm>
        </div>

        <div className="row align-items-end">
          <div
            className="col-12 sku_combination table-responsive form-group"
            id="sku_combination"
          >
            <table className="table table-bordered physical_product_show">
              <thead>
                <tr>
                  <td>
                    <label className="control-label">#</label>
                  </td>
                  <td>
                    <label className="control-label">Variant</label>
                  </td>
                  <td>
                    <label className="control-label">Unique ID</label>
                  </td>
                  <td>
                    <label className="control-label">Pricing</label>
                  </td>
                  <td>
                    <label className="control-label">Set Attribute</label>
                  </td>
                  <td>
                    <label className="control-label">Gallery Images</label>
                  </td>
                  <td>
                    <label className="">Thumbnail Image</label>
                  </td>
                </tr>
              </thead>

              <tbody>
                {isVariantLoading && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        className="loader_spinner spinner-border text-primary"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </td>
                  </tr>
                )}

                {updatedVariants &&
                  updatedVariants?.map((variantItem, i) => {
                    return (
                      <ColorVariant
                        deleteRow={deleteRow}
                        key={i}
                        sellerD={sellerD}
                        item={item}
                        data={variantItem}
                        pickUp={pickUp}
                        index={i}
                        updateVarientDetails={updateVarientPriceAndAttributes}
                        coppiedPriceToAllVarient={coppiedPriceToAllVarient}
                        deleteImage={deleteImage}
                      />
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
