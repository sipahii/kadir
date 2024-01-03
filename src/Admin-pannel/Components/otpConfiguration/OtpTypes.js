import { useEffect, useState } from "react";
import { useGetOtpConfigurationListQuery, useUpdateOTPConfigurationMutation } from "../all-products/allproductsApi/allProductsApi";
import { ToastContainer, toast } from "react-toastify";

function OtpTypes() {

    const [inputVal, setInputVal] = useState({
        value: null
    });

    const [statusD, setStatusD] = useState()

    const onChangeHandler = (e) => {
        setStatusD(!statusD)
        const inpval = e.target.value;
        const inpName = e.target.name;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = inpval
    };

    const [updateOTPData, response] = useUpdateOTPConfigurationMutation();

    const submitStatusValue = (id) => {
        const sendData = { value: statusD, id: id }
        console.log('sendData----', sendData)
        updateOTPData(sendData)
    }

    const { isLoading, data } = useGetOtpConfigurationListQuery();
    console.log('otpConfigData-----', data);

    useEffect(() => {
        if (data) {
            const clonedData = { ...data };
            setInputVal(clonedData[0]);
            setStatusD(clonedData[0])
            console.log('clonedData---', clonedData)
        }
    }, [data]);

    console.log('inputVal----', inputVal.type)
    console.log('statusD----', statusD);

    const toastSuccessMessage = () => {
        toast.success("OTP Type Updated Successfully !", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("OTP Type Not Updated !", {
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
    }, [response])


    return (
        <>
            {data && data.map((item, i) => {
                return <div className="col-md-4" key={i}>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6">{inputVal?.type}</h3>
                        </div>
                        <div className="card-body text-center">
                            <label className="aiz-switch aiz-switch-success mb-0">
                                <input type="checkbox" name="value" onChange={onChangeHandler} checked={statusD?.value} />
                                <span className="slider round" onClick={() => submitStatusValue(item._id)} />
                            </label>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            })}
        </>
    )
}
export default OtpTypes;