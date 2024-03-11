function SystemRelated() {
    return (
        <>
            <h4 className="text-center text-muted">System</h4>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6 text-center">HTTPS Activation</h5>
                        </div>
                        <div className="card-body text-center">
                            <label className="aiz-switch aiz-switch-success mb-0">
                                <input type="checkbox" onchange="updateSettings(this, 'FORCE_HTTPS')" defaultChecked />
                                <span className="slider round" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Maintenance Mode Activation</h3>
                        </div>
                        <div className="card-body text-center">
                            <label className="aiz-switch aiz-switch-success mb-0">
                                <input type="checkbox" onchange="updateSettings(this, 'maintenance_mode')" />
                                <span className="slider round" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 h6 text-center">Disable image encoding?</h3>
                        </div>
                        <div className="card-body text-center">
                            <label className="aiz-switch aiz-switch-success mb-0">
                                <input type="checkbox" onchange="updateSettings(this, 'disable_image_optimization')" />
                                <span className="slider round" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SystemRelated;