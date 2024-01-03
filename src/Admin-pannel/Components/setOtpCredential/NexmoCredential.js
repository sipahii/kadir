import React, { useState } from 'react'

function NexmoCredential() {

    const [inputVal, setInputval] = useState({
        NEXMO_KEY: '', NEXMO_SECRET: ''
    });

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = inpVal;
        setInputval(clonedObj);
    };

    const submitNexmoCredentialData = (e) => {
        e.preventDefault();
        const cloneD = { ...inputVal };
        console.log('cloneD--nexmo--', cloneD);
        // submitNexmoCredentialD(cloneD);
        document.getElementById('clear-form').reset();
    };



    return (
        <>
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Nexmo Credential</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" id='clear-form' onSubmit={submitNexmoCredentialData}>
                            <div className="form-group row">
                                <div className="col-lg-3">
                                    <label className="col-from-label">NEXMO KEY</label>
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" className="form-control" name="NEXMO_KEY" placeholder="NEXMO KEY" required fdprocessedid="tv25z8" onChange={onChangeHandler} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-3">
                                    <label className="col-from-label">NEXMO SECRET</label>
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" className="form-control" name="NEXMO_SECRET" placeholder="NEXMO SECRET" required fdprocessedid="5ck0f" onChange={onChangeHandler} />
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="ge0wz">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NexmoCredential