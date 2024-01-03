// import { Tab, Tabs } from "react-bootstrap"
// import Bangla from "./Bangla"
// import English from "./English"

import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useEditSellerPackageMutation, useGetSellerPackageByIdQuery } from "../Components/all-products/allproductsApi/allProductsApi";
import { useParams } from "react-router-dom";

function UpdateInfo() {

  const [inputVal, setInputval] = useState({
    name: "", amount: "", productUploadlimit: "", duration: "", logo: ''
  });

  const changeHandler = (e) => {
    const inpName = e.target.name;
    const inpVal = e.target.value;
    const clonedObj = { ...inputVal }
    clonedObj[inpName] = inpVal
    setInputval(clonedObj)
  };

  const params = useParams();
  console.log('param-is', params)

  const { data } = useGetSellerPackageByIdQuery(params.id);

  const [editSellerPackageD, response] = useEditSellerPackageMutation();

  const submitEditSellerPackageData = (e) => {
    e.preventDefault();
    editSellerPackageD({ id: params.id, data: inputVal })
    console.log('input val', inputVal)
    document.getElementById("create-course-form").reset();
  };

  const toastSuccessMessage = () => {
    toast.success("SellerPackage Edited Successfully", {
      position: "top-center"
    })
  };

  useEffect(() => {
    const cloneD = { ...data }
    setInputval(cloneD)
  }, [data])

  if (response.isSuccess === true) {
    toastSuccessMessage()
  };

  if (response.isError === true) {
    alert('!Error NewSellerPackage not Edited')
  };
  // useEffect(() => {

  // }, [response])

  return (
    <>

      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="col-lg-10 mx-auto">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 h6">Create New Seller Package</h5>
              </div>

              <form className="form-horizontal" id="create-course-form" onSubmit={submitEditSellerPackageData}>

                <div className="card-body">
                  <div className="form-group row">
                    <label className="col-sm-2 col-from-label" htmlFor="name">Package Name</label>
                    <div className="col-sm-10">
                      <input type="text" placeholder="Name" name="name" value={inputVal?.name} className="form-control" required fdprocessedid="wle4vm" onChange={changeHandler} />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-2 col-from-label" htmlFor="amount">Amount</label>
                    <div className="col-sm-10">
                      <input type="number" placeholder="Amount" name="amount" value={inputVal?.amount} className="form-control" required fdprocessedid="2fzobh" onChange={changeHandler} />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-2 col-from-label" htmlFor="product_upload_limit">Product Upload Limit</label>
                    <div className="col-sm-10">
                      <input type="number" placeholder="Product Upload Limit" name="productUploadlimit" value={inputVal?.productUploadlimit} className="form-control" required fdprocessedid="zpnue" onChange={changeHandler} />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-2 col-from-label" htmlFor="duration">Duration</label>
                    <div className="col-sm-10">
                      <input type="number" placeholder="Validity in number of days" name="duration" value={inputVal?.duration} className="form-control" required fdprocessedid="mazzs" onChange={changeHandler} />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-md-2 col-form-label" htmlFor="signinSrEmail">Package Logo</label>
                    <div className="col-md-10">
                      <div className="input-group" data-toggle="aizuploader" data-type="image" data-multiple="false">
                        <div className="input-group-prepend">
                          <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                        </div>

                        <div className="form-control file-amount" >
                          <input type="file" name="logo" className="selected-files" onChange={changeHandler} />
                        </div>

                      </div>
                      <div className="file-preview box sm">
                      </div>
                    </div>
                  </div>

                  <div className="form-group mb-0 text-right">
                    <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="4sy5ym">Save</button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
          {/*p class="mb-0">&copy;  v6.3.3</p*/}
        </div>
        <ToastContainer />
      </div>


      {/* <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar mt-2 mb-3">
            <h5 className="mb-0 h6">Update Package Information</h5>
          </div>
          <div className="col-lg-10 mx-auto cl">
            <Tabs
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
              className="mb-3 nav nav-tabs nav-fill border-light nav-item"
            >
              <Tab className="nav-link text-reset  active  py-3" eventKey="home" title="English">
                <English />
              </Tab>
              <Tab className="nav-link text-reset border-left-0  py-3" eventKey="profile" title="Bangla">
                <English/>

                <Bangla/>

              </Tab>
              <Tab className="nav-link text-reset   border-left-0  py-3" eventKey="contact" title="Arabic" >
                
                <English/>
              </Tab>
            </Tabs>

            <form className="p-4 color-Change">
              <div className="form-group row">
                <label className="col-sm-2 col-from-label" htmlFor="name">
                  Package Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="form-control"
                    required
                    fdprocessedid="ui6rik"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-from-label" htmlFor="amount">
                  Amount
                </label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    placeholder="Amount"
                    name="amount"
                    className="form-control"
                    required
                    fdprocessedid="nvcsyd"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  className="col-sm-2 col-from-label"
                  htmlFor="product_upload_limit"
                >
                  Product Upload Limit
                </label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    placeholder="Product Upload Limit"
                    name="product_upload_limit"
                    className="form-control"
                    required
                    fdprocessedid="4a4e3r"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-from-label" htmlFor="duration">
                  Duration
                </label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    placeholder="Validity in number of days"
                    name="duration"
                    className="form-control"
                    required
                    fdprocessedid="sujrro"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-2 col-form-label" htmlFor="signinSrEmail">
                  Package Logo
                </label>
                <div className="col-md-10">
                  <div
                    className="input-group"
                    data-toggle="aizuploader"
                    data-type="image"
                    data-multiple="false"
                  >
                    <div className="input-group-prepend">
                      <div className="input-group-text bg-soft-secondary font-weight-medium">
                        Browse
                      </div>
                    </div>
                    <div className="form-control file-amount">
                      <input
                        type="file"
                        name="logo"
                        className="selected-files"
                      />
                    </div>
                  </div>
                  <div className="file-preview box sm">
                    <div
                      className="d-flex justify-content-between align-items-center mt-2 file-preview-item"
                      data-id={12}
                      title="Kynoch-Logo-PNG.png"
                    >
                      <div className="align-items-center align-self-stretch d-flex justify-content-center thumb">
                        <img
                          src="https://mmslfashions.in/public/uploads/all/z1CNIkuY8rhgQFW7r8RvWWA0akrBbMCTOPgaKzja.png"
                          className="img-fit"
                        />
                      </div>
                      <div className="col body">
                        <h6 className="d-flex">
                          <span className="text-truncate title">Kynoch-Logo-PNG</span>
                          <span className="ext flex-shrink-0">.png</span>
                        </h6>
                        <p>30 KB</p>
                      </div>
                      <div className="remove">
                        <button
                          className="btn btn-sm btn-link remove-attachment"
                          type="button"
                          fdprocessedid="dg39md"
                        >
                          <i className="la la-close" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group mb-0 text-right">
                <button
                  type="submit"
                  className="btn btn-sm btn-primary"
                  fdprocessedid="g4qsv8i"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
        
      </div> */}

    </>
  )
}
export default UpdateInfo