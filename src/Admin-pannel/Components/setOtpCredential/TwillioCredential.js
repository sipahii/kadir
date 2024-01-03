import React, { useEffect, useState } from 'react';
import { useGetOTPCredentialListsQuery, useUpdateOtpCredentialMutation } from '../all-products/allproductsApi/allProductsApi';
import { ToastContainer, toast } from 'react-toastify';

function TwillioCredential() {
  const [allData, setallData] = useState(null)

  const [inputVal, setInputval] = useState({
    value: ''
  });

  const { isLoading, data } = useGetOTPCredentialListsQuery();


  useEffect(() => {
    const objD = { ...data }
    if (data) {
      setallData(data)
      setInputval(objD)
    }
  }, [data]);


  const onChangeHandler = (e) => {
    const i = e.target.name;
    const inpVal = e.target.value;
    const id = e.target.id
    const placH = e.target.placeholder
    // console.log('placH---', placH)

    const updated = allData[+placH].config.map((val, i) => {
      if (i === +id) {
        return { ...val, [e.target.name]: inpVal }
      } else {
        return val
      }
    })
    // console.log('updated--', updated)
    const allD = [...allData]

    const innerAllD = { ...allD[0] }


    innerAllD.config = updated
    // console.log('allD-----', allD)
    allD.splice(+placH, 1, innerAllD);

    setallData(allD)

    // const clonedObj = { ...inputVal };
    // clonedObj[inpName] = inpVal;
    // setInputval(clonedObj);
  };

  const [submitOtpCredentialD, response] = useUpdateOtpCredentialMutation();

  const submitTwillioCredentialData = (i) => {

    const cloneD = [...allData];
    const abc = cloneD[i].config;
    const finalD = { config: abc, id: cloneD[i]._id }
    console.log('finalD--', finalD);
    submitOtpCredentialD(finalD);
    document.getElementById('clear-form').reset();
  };


  const toastSuccessMessage = () => {
    toast.success("OTP Credential Updated Successfully !", {
      position: "top-center"
    })
  };

  const toastErrorMessage = () => {
    toast.error("OTP Credential not Updated !", {
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
      toastErrorMessage()
    };
  }, [response]);


  console.log('response---', response)

  return (
    <>

      {allData && allData.map((item, i) => {
        return <div className="col-lg-6" key={i}>
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 h6">{item.name}</h5>
            </div>
            <div className="card-body">
              <form className="form-horizontal" id='clear-form' onSubmit={submitTwillioCredentialData}>

                {item.config?.map((inpItem, index) => {
                  // console.log('inpItem----', inpItem)
                  return <div className="form-group row" key={index}>
                    <div className="col-lg-3">
                      <label className="col-from-label">{inpItem.field}</label>
                    </div>
                    <div className="col-lg-6">
                      <input type="text" className="form-control" id={index} name={'value'} value={inpItem.value || inpItem.valye || inpItem.valUe} placeholder={i} required fdprocessedid="p8ysmd" onChange={onChangeHandler} />
                    </div>
                  </div>
                })}



                {/* <div className="form-group row">
                  <div className="col-lg-3">
                    <label className="col-from-label">TWILIO AUTH TOKEN</label>
                  </div>
                  <div className="col-lg-6">
                    <input type="text" className="form-control" name="TWILIO_AUTH_TOKEN" placeholder="TWILIO AUTH TOKEN" required fdprocessedid="ljiplq" onChange={onChangeHandler} />
                  </div>
                </div>
                <div className="form-group row">
                  <input type="hidden" name="types[]" defaultValue="VALID_TWILLO_NUMBER" />
                  <div className="col-lg-3">
                    <label className="col-from-label">VALID TWILIO NUMBER</label>
                  </div>
                  <div className="col-lg-6">
                    <input type="text" className="form-control" name="VALID_TWILLO_NUMBER" placeholder="VALID TWILLO NUMBER" fdprocessedid="wrof99" onChange={onChangeHandler} />
                  </div>
                </div> */}

                <div className="form-group mb-0 text-right">
                  <button type="button" onClick={() => submitTwillioCredentialData(i)} className="btn btn-sm btn-primary" fdprocessedid="rchano">Save</button>
                </div>

              </form>
            </div>
          </div>
          <ToastContainer />
        </div>
      })}


    </>
  )
}

export default TwillioCredential