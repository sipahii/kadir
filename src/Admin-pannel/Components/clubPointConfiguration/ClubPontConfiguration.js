import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useEditPointToWalletMutation, useGetPointToWalletDataQuery } from "../all-products/allproductsApi/allProductsApi";

function ClubPointConfiguration() {

  const [inputVal, setInputval] = useState({ Points: "" });

  const changeHandler = (e) => {
    const inpName = e.target.name;
    const inpVal = e.target.value;
    const clonedObj = { ...inputVal }
    clonedObj[inpName] = inpVal
    setInputval(clonedObj)
  };

  const [editPoinToWalletD, response] = useEditPointToWalletMutation();

  const submitPointToWalletData = (e) => {
    e.preventDefault();
    editPoinToWalletD(inputVal)
    document.getElementById("create-course-form").reset();
  };

  const { data } = useGetPointToWalletDataQuery();

  console.log('clubInputData', data);

  useEffect(() => {
    const clon = { ...data }
    setInputval(clon)
  }, [data]);


  const toastSuccessMessage = () => {
    toast.success("PointToWallet Edited Successfully !", {
      position: "top-center"
    })
  };

  const toastErroeMessage = () => {
    toast.error("Error PointToWallet not Edited !", {
      position: "top-center"
    })
  }

  useEffect(() => {
    if (response.isSuccess === true) {
      toastSuccessMessage()
    };
  }, [response]);

  useEffect(() => {
    if (response.isError === true) {
      toastErroeMessage()
    };
  }, [response]);


  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">Convert Point To Wallet</h5>
                </div>
                <div className="card-body">
                  <form className="form-horizontal" id="create-course-form" onSubmit={submitPointToWalletData}>

                    <div className="form-group row">
                      <div className="col-lg-4">
                        <label className="col-from-label">Set Point For ZK1.00</label>
                      </div>
                      <div className="col-lg-5">
                        <input type="number" className="form-control" name="Points" value={inputVal?.Points} required fdprocessedid="z97e4q" onChange={changeHandler} />
                      </div>
                      <div className="col-lg-3">
                        <label className="col-from-label">Points</label>
                      </div>
                    </div>
                    <div className="form-group mb-3 text-right">
                      <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="m3ae2r">Save</button>
                    </div>
                  </form>
                  <i className="fs-12"><b>Note: You need to activate wallet option first before using club point addon.</b></i>
                </div>
              </div>
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
export default ClubPointConfiguration