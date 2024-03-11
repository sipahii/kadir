import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useAddNewSellerPackageMutation } from "../../all-products/allproductsApi/allProductsApi";

function CreatePackage() {

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
  const [addNewSellerPackageD, response] = useAddNewSellerPackageMutation();

  const submitNewSellerPackageData = (e) => {
    e.preventDefault();
    addNewSellerPackageD(inputVal)
    console.log('input val', inputVal)
    document.getElementById("create-course-form").reset();
  };

  const toastSuccessMessage = () => {
    toast.success("NewSellerPackage added Successfully", {
      position: "top-center"
    })
  };

  useEffect(() => {
    if (response.isSuccess === true) {
      toastSuccessMessage()
    };

    if (response.isError === true) {
      alert('!Error NewSellerPackage not added')
    };
  }, [response])

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="col-lg-10 mx-auto">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 h6">Create New Seller Package</h5>
              </div>

              <form className="form-horizontal" id="create-course-form" onSubmit={submitNewSellerPackageData}>

                <div className="card-body">
                  <div className="form-group row">
                    <label className="col-sm-2 col-from-label" htmlFor="name">Package Name</label>
                    <div className="col-sm-10">
                      <input type="text" placeholder="Name" name="name" className="form-control" required fdprocessedid="wle4vm" onChange={changeHandler} />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-2 col-from-label" htmlFor="amount">Amount</label>
                    <div className="col-sm-10">
                      <input type="number" placeholder="Amount" name="amount" className="form-control" required fdprocessedid="2fzobh" onChange={changeHandler} />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-2 col-from-label" htmlFor="product_upload_limit">Product Upload Limit</label>
                    <div className="col-sm-10">
                      <input type="number" placeholder="Product Upload Limit" name="productUploadlimit" className="form-control" required fdprocessedid="zpnue" onChange={changeHandler} />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-2 col-from-label" htmlFor="duration">Duration</label>
                    <div className="col-sm-10">
                      <input type="number" placeholder="Validity in number of days" name="duration" className="form-control" required fdprocessedid="mazzs" onChange={changeHandler} />
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

    </>
  )
}
export default CreatePackage