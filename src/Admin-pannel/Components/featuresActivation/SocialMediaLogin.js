function SocialMediaLogin() {
    return (
        <>
            <h4 className="text-center text-muted mt-4">Social Media Login</h4>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Facebook login</h3>
                        </div>
                        <div className="card-body text-center">
                            <label className="aiz-switch aiz-switch-success mb-0">
                                <input type="checkbox" onchange="updateSettings(this, 'facebook_login')" defaultChecked />
                                <span className="slider round" />
                            </label>
                            <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                You need to configure Facebook Client correctly to enable this feature. <a href="https://mmslfashions.in/admin/social-login">Configure Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Google login</h3>
                        </div>
                        <div className="card-body text-center">
                            <label className="aiz-switch aiz-switch-success mb-0">
                                <input type="checkbox" onchange="updateSettings(this, 'google_login')" defaultChecked />
                                <span className="slider round" />
                            </label>
                            <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                You need to configure Google Client correctly to enable this feature. <a href="https://mmslfashions.in/admin/social-login">Configure Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Twitter login</h3>
                        </div>
                        <div className="card-body text-center">
                            <label className="aiz-switch aiz-switch-success mb-0">
                                <input type="checkbox" onchange="updateSettings(this, 'twitter_login')" defaultChecked />
                                <span className="slider round" />
                            </label>
                            <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                                You need to configure Twitter Client correctly to enable this feature. <a href="https://mmslfashions.in/admin/social-login">Configure Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SocialMediaLogin;