import React, { useState } from 'react'

function SSLWirelessCredential() {

    const [inputVal, setInputval] = useState({
        SSL_SMS_API_TOKEN: '', SSL_SMS_SID: '', SSL_SMS_URL: '',
    });

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = inpVal;
        setInputval(clonedObj);
    };

    const submitSSLWirelessCredentialData = (e) => {
        e.preventDefault();
        const cloneD = { ...inputVal };
        console.log('cloneD--wireless--', cloneD);
        // submitNexmoCredentialD(cloneD);
        document.getElementById('clear-form').reset();
    };


    return (
        <>
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">SSL Wireless Credential</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" onSubmit={submitSSLWirelessCredentialData}>
                            <div className="form-group row">
                                <div className="col-lg-3">
                                    <label className="col-from-label">SSL SMS API TOKEN</label>
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" className="form-control" name="SSL_SMS_API_TOKEN" placeholder="SSL SMS API TOKEN" required fdprocessedid="a7dg1m" onChange={onChangeHandler} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-3">
                                    <label className="col-from-label">SSL SMS SID</label>
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" className="form-control" name="SSL_SMS_SID" placeholder="SSL SMS SID" required fdprocessedid="796w" onChange={onChangeHandler} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-3">
                                    <label className="col-from-label">SSL SMS URL</label>
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" className="form-control" name="SSL_SMS_URL" placeholder="SSL SMS URL" fdprocessedid="efnla" onChange={onChangeHandler} />
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="v05m04">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SSLWirelessCredential