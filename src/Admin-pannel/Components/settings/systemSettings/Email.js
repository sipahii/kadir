import React, { useEffect, useState } from 'react'
import { useGetSettingEmailQuery, useGetSettingMoneyAndNumberFormatQuery, useUpdateMoneyFormatMutation, useUpdateSettingEmailMutation } from '../../all-products/allproductsApi/allProductsApi';
import { ToastContainer, toast } from 'react-toastify';

function Email() {

    const [inputVal, setInputval] = useState({
        EmailProtocol: ""
    });

    const { isLoading, data } = useGetSettingEmailQuery();
    console.log('emailD----', data)

    useEffect(() => {
        const clon = { ...data }
        if (data) {
            setInputval(clon);
        }
    }, [data]);

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    const [updateEmailD, response] = useUpdateSettingEmailMutation();

    const submitUpdatEmailD = () => {
        const abc = { ...inputVal }
        console.log('abc----', abc)
        updateEmailD(abc)
        document.getElementById("create-course-form").reset();
    };

    const toastSuccessMessage = () => {
        toast.success("EmailSetting Updated Successfully !", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("EmailSetting not Updated !", {
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
            <div className="scheduler-border">
                <legend className="scheduler-border">Email</legend>
                <div className="row">
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Email Protocol *</label>
                        <select name="EmailProtocol" id="rows_per_page" className="form-select" onChange={onChangeHandler}>
                            <option value={'phpMailFUnction'} >PHP Mail Function</option>
                            <option value={'send mail'} >Send Mail</option>
                            <option value={'smtp'} >SMTP</option>
                        </select>
                    </div>
                </div>
                <button className="btn btn-primary m-3 pe-5" type='button' onClick={submitUpdatEmailD} style={{ width: '60px', textAlign: 'end' }}>Save</button>
                <ToastContainer />
            </div>
        </>
    )
}

export default Email