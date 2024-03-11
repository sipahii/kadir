import { Form } from "react-bootstrap";

function CreateMap() {
  return (
    <>
      <div className="px-15px px-lg-25px">
        <div className="aiz-titlebar text-left mt-2 mb-3">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">Category Mapping</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Category Mapping</h5>
          </div>
          <div className="card-body">
            <section className="form-section" style={{ width: "50%" }}>
              <div className="row">
                <div className="col-lg-12 mb-4 col-12">
                  <label htmlFor="" className="info-lebel">
                    Select Category
                  </label>
                  <Form.Select aria-label="Default select example">
                    <option>Default Category</option>
                    <option value="1">Clothing</option>
                    <option value="2">Footewear</option>
                    <option value="3">Electronics</option>
                    <option value="4">Decors</option>
                    <option value="5">Amazon Catelog</option>
                  </Form.Select>
                </div>

                <div className="col-lg-12 mb-4 col-12">
                  <label htmlFor="" className="info-lebel">
                    Amazon Parent Category
                  </label>
                  <Form.Select aria-label="Default select example" className="form-select-our">
                    <option>Beauty</option>
                    <option value="1">Books</option>
                    <option value="2">Clothing</option>
                    <option value="3">Helth</option>
                    <option value="4">Home</option>
                    <option value="5">Sports</option>
                  </Form.Select>
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
export default CreateMap;
