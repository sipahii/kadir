import React, { useState } from 'react';

function OTPCompo() {
    const [loginForm, setLoginForm] = useState({
        mobile: "",

    });

    const handleChangeLogin = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        const cloneData = { ...loginForm };
        cloneData[name] = value;
        setLoginForm(cloneData);
    };

    const submitMobileNo = () => {

    };


    return (
        <div className="registrationDetail" style={{ backgroundColor: 'purple' }}   >
            {/* // style={{ backgroundColor: getDat?.backgroundColor ? getDat?.backgroundColor : '#9013FE' }} */}
            <div className="container">
                <div className="registrationInfo d-block">
                    <div className="registerContent" style={{ paddingBottom: '0' }}>
                        <div className="contentFooter">
                            <img style={{ width: "170px" }}
                                // src={getDat?.logoImage?.url ? getDat?.logoImage?.url : login}
                                src='https://res.cloudinary.com/ddk7r5yth/image/upload/v1700134795/owbjkxwcukld63odusm8.jpg'
                                alt="Login" className="img-fluid" />
                        </div>
                        <div className="contentHeader">
                            <h5 style={{ color: 'black', textAlign: 'center' }}>Mar'x Entertainment Worldwide</h5>
                        </div>

                    </div>
                    <div className="registerForm">
                        <h4 className="mb-4"
                            style={{ color: '#9013FE', textAlign: "center" }}
                        // style={{ color: getDat?.backgroundColor ? getDat?.backgroundColor : '#9013FE', textAlign: "center" }}
                        >Please Enter OTP.</h4>
                        <form className="registerFormField" onSubmit={submitMobileNo}>
                            <div className="mb-3">
                                <input
                                    type="number"
                                    placeholder="Enter Otp"
                                    className="form-control"
                                    autoComplete="off"
                                    name="mobile"
                                    onChange={handleChangeLogin}
                                />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                                <button type='submit' className='btn btn-primary'>Verify Otp</button>
                            </div>
                            {/* <div className="mb-3">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="form-control"
                                    autoComplete="off"
                                    name="password"
                                    onChange={handleChangeLogin}
                                />
                            </div> */}

                            {/* {isError && <h4 style={{ color: "red" }}>login Fail ! </h4>}
                            {isSuccess && <h4>login Successfully !</h4>} */}

                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OTPCompo