import React from 'react';
import { useState } from 'react';

function FastMsCredential() {

    const [inputVal, setInputval] = useState({
        AUTH_KEY: '', ENTITY_ID: '', ROUTE: '', Language: '', SENDER_ID: ''
    });

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = inpVal;
        setInputval(clonedObj);
    };

    const submitFastCredentialData = (e) => {
        e.preventDefault();
        const cloneD = { ...inputVal };
        console.log('cloneD--wireless--', cloneD);
        // submitFastCredentialD(cloneD);
        document.getElementById('clear-form').reset();
    };



    return (
        <>
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Fast2SMS Credential</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" onSubmit={submitFastCredentialData}>
                            <div className="form-group row">
                                <div className="col-lg-3">
                                    <label className="col-from-label">AUTH KEY</label>
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" className="form-control" name="AUTH_KEY" placeholder="AUTH KEY" required fdprocessedid="ktjd9o" onChange={onChangeHandler} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-3">
                                    <label className="col-from-label">ENTITY ID</label>
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" className="form-control" name="ENTITY_ID" placeholder="ENTITY ID" fdprocessedid="y46fx" onChange={onChangeHandler} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-3">
                                    <label className="col-from-label">ROUTE</label>
                                </div>
                                <div className="col-lg-6">
                                    <div>
                                        <select class="form-select" name='ROUTE' aria-label="Default select example">
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-3">
                                    <label className="col-from-label">Language</label>
                                </div>
                                <div className="col-lg-6">
                                    <div>
                                        <select class="form-select" name='Language' aria-label="Default select example">
                                            <option value="English">English</option>
                                            <option value="UniCode">UniCode</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-3">
                                    <label className="col-from-label">SENDER ID</label>
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" className="form-control" name="SENDER_ID" placeholder="6 digit SENDER ID" fdprocessedid="ae01na" onChange={onChangeHandler} />
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="yqmfzd">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FastMsCredential