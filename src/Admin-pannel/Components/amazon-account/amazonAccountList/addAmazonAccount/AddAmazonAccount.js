import Form from "react-bootstrap/Form";

import "./AddAmazonAccount.css";
function AddAmazonAccount() {
  return (
    <>
      <div className="px-15px px-lg-25px">
        <div className="aiz-titlebar text-left mt-2 mb-3">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">Add Amazon Account</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Add Amazon Account</h5>
          </div>
          <div className="card-body">
            <section className="form-section">
              <div className="row">
                <div className="col-lg-4 mb-4">
                  <div>
                    <label htmlFor="" className="info-lebel">
                      Store Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Store Name"
                      fdprocessedid="qip4uf"
                    />
                  </div>
                </div>

                <div className="col-lg-4 mb-4">
                  <div>
                    <label htmlFor="" className="info-lebel">
                      Attribute set
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Default</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                    </Form.Select>
                  </div>
                </div>

                <div className="col-lg-4 mb-4">
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
                </div>

                <div className="col-lg-4 mb-4">
                  <div>
                    <label htmlFor="" className="info-lebel">
                      Seller Id
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

                <div className="col-lg-4 mb-4">
                  <div>
                    <label htmlFor="" className="info-lebel">
                      Access Key of AWS IAM User
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

                <div className="col-lg-4 mb-4">
                  <div>
                    <label htmlFor="" className="info-lebel">
                      Secret Key of AWS IAM User
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Secret Key"
                    />
                  </div>
                </div>

                <div className="col-lg-4 mb-4">
                  <div>
                    <label htmlFor="" className="info-lebel">
                      App Client ID from Seller Central
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Client ID"
                    />
                  </div>
                </div>

                <div className="col-lg-4 mb-4">
                  <div>
                    <label htmlFor="" className="info-lebel">
                      The Corresponding client secret
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Corresponding client secret"
                    />
                  </div>
                </div>

                <div className="col-lg-4 mb-4">
                  <div>
                    <label htmlFor="" className="info-lebel">
                      Refresh Token
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Refresh Token"
                    />
                  </div>
                </div>

                <div className="col-lg-4 mb-4">
                  <div>
                    <label htmlFor="" className="info-lebel">
                      AWS IAM entity for ARN
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>User</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                    </Form.Select>
                  </div>
                </div>

                {/* <div className="col-lg-3 ">
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
                <div className="col-lg-3 mt-3">
                  <button
                    className="btn btn-primary mr-3"
                    fdprocessedid="k103se"
                  >
                    Save
                  </button>
                  <button className="btn btn-danger" fdprocessedid="2o6wft">
                    Cancle
                  </button>
                </div> */}
              </div>
            </section>
            <div className="aiz-pagination" />
          </div>
        </div>
      </div>
    </>
  );
}
export default AddAmazonAccount;
