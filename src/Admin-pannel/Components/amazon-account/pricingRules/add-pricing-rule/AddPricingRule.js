import Form from "react-bootstrap/Form";

function AddPricingRules() {
  return (
    <>
      <div className="px-15px px-lg-25px">
        <div className="aiz-titlebar text-left mt-2 mb-3">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">Amazon product Price Rule</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Amazon product Price Rule</h5>
          </div>
          <div className="card-body">
            <section className="form-section" style={{width:'50%'}}>
              <div className="row">
                <div className="col-lg-12 mb-4">
                  <div>
                    <label htmlFor="" className="info-lebel">
                      Product Price From
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Product Price From"
                      fdprocessedid="qip4uf"
                    />
                  </div>
                </div>

                {/* <div className="col-lg-4 mb-4">
                  <div>
                    <label htmlFor="" className="info-lebel">
                      Market Place
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>German</option>
                      <option value="1">france</option>
                      <option value="2">italy</option>
                    </Form.Select>
                  </div>
                </div> */}

                <div className="col-lg-12 mb-4">
                  <div>
                    <label htmlFor="" className="info-lebel">
                      Product Price to
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Seller Id"
                      fdprocessedid="qip4uf"
                    />
                  </div>
                </div>

                <div className="col-lg-12 mb-4">
                  <div>
                    <label htmlFor="" className="info-lebel">
                      Operation Type
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Access Key"
                    />
                  </div>
                </div>

                <div className="col-lg-12 mb-4">
                  <div>
                    <label htmlFor="" className="info-lebel">
                      Operation
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Operation"
                    />
                  </div>
                </div>

                <div className="col-lg-4 mb-4">
                  <div>
                    <label htmlFor="" className="info-lebel">
                      Price
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Price"
                    />
                  </div>
                </div>

                <div className="col-lg-12 mb-4">
                  <div>
                    <label htmlFor="" className="info-lebel">
                      Amazon Store
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Amazon Store"
                    />
                  </div>
                </div>

                <div className="col-lg-12 ">
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Status
                  </label>

                  <div className="d-flex">
                    <div className="form-check mr-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Active
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        In Active
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt-3">
                  <button
                    className="btn btn-primary mr-3"
                    fdprocessedid="k103se"
                  >
                    Save
                  </button>
                  <button className="btn btn-danger" fdprocessedid="2o6wft">
                    Cancle
                  </button>
                </div>
              </div>
            </section>
            <div className="aiz-pagination" />
          </div>
        </div>
      </div>
    </>
  );
}
export default AddPricingRules;
