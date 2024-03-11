import React, { useEffect, useState } from 'react'
import { useGetSettingMoneyAndNumberFormatQuery, useUpdateMoneyFormatMutation } from '../../all-products/allproductsApi/allProductsApi';
import { ToastContainer, toast } from 'react-toastify';

function MoneyAddNumberFormat() {

    const [inputVal, setInputval] = useState({
        Decimals: '', qty_decimals: '', SouthAsianCountriesCurrencyFormat: null, DecimalsSeparator: '', ThousandsSeparator: "", DisplayCurrencySymbol: ''
    });

    const { isLoading, data } = useGetSettingMoneyAndNumberFormatQuery();
    // console.log('MoneyFormatD----', data)

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

    const [updateMoneyFormatD, response] = useUpdateMoneyFormatMutation();

    const submitUpdateMoneyFormatD = () => {
        const abc = { ...inputVal }
        updateMoneyFormatD(abc)
        document.getElementById("create-course-form").reset();
    };


    const toastSuccessMessage = () => {
        toast.success("MoneyNumFormat Updated Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("MoneyNumFormat not Updated !", {
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
                <legend className="scheduler-border">Money and Number Format</legend>
                <div className="row">
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Decimals *</label>
                        <select name="Decimals" id="rows_per_page" className="form-select" onChange={onChangeHandler}>
                            <option value={'disable'} >Disable</option>
                            <option value={'1'} >1</option>
                            <option value={'2'} >2</option>
                            <option value={'3'} >3</option>
                            <option value={'4'} >4</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Quantity Decimals *</label>
                        <select name="qty_decimals" id="rows_per_page" className="form-select" onChange={onChangeHandler}>
                            <option value={'disable'} >Disable</option>
                            <option value={'1'} >1</option>
                            <option value={'2'} >2</option>
                            <option value={'3'} >3</option>
                            <option value={'4'} >4</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">South Asian Countries Currency Format *</label>
                        <select name="SouthAsianCountriesCurrencyFormat" id="rows_per_page" className="form-select" onChange={onChangeHandler}>
                            <option value={false} >Disable</option>
                            <option value={true} >Enable</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Decimals Separator *</label>
                        <select name="DecimalsSeparator" id="rows_per_page" className="form-select" onChange={onChangeHandler}>
                            <option value={'dot'} >Dot(.)</option>
                            <option value={'comma'}>comma</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Thousands Separator *</label>
                        <select name="ThousandsSeparator" id="rows_per_page" className="form-select" onChange={onChangeHandler}>
                            <option value={'dot'} >Dot(.)</option>
                            <option value={'comma'}>comma</option>
                            <option value={'space'}>Space</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Display Currency Symbol *</label>
                        <select name="DisplayCurrencySymbol" id="rows_per_page" className="form-select" onChange={onChangeHandler}>
                            <option value={'disable'} >Disable</option>
                            <option value={'before'} >Before</option>
                            <option value={'after'} >After</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Currency Symbol</label>
                        <input type="text" name='CurrencySymbol' value={inputVal?.CurrencySymbol} className="form-control tip" onChange={onChangeHandler} />
                    </div>
                </div>
                <button className="btn btn-primary m-3 pe-5" type='button' onClick={submitUpdateMoneyFormatD} style={{ width: '60px', textAlign: 'end' }}>Save</button>
                <ToastContainer />
            </div>
        </>
    )
}

export default MoneyAddNumberFormat