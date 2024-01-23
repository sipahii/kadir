import React, { useEffect, useState } from "react";
import TextEditor from "../../common/TextEditor";

function ProductDescriptionWrapper({ productDescription, callBackWithHtml }) {
  const [data, setData] = useState(productDescription);
  const handleData = (htmlValue) => {
    callBackWithHtml(htmlValue);
  };

  return (
    <div className="row">
      <div className="card mt-2 rest-part physical_product_show">
        <div className="card-header">
          <h4 className="mb-0">Description</h4>
        </div>
        <div
          className="col-lg-12"
          style={{ padding: 25 + "px", margin: 5 + "px" }}
        >
          <TextEditor
            handleData={handleData}
            productDescription={productDescription}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDescriptionWrapper;
