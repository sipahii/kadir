function S3FileSystemActivation() {
    return (
        <>
            <div className="col-xxl-6">
                <div className="card">
                    <div className="card-header">
                        <h3 className="fs-18 mb-0 text-center">S3 File System Activation</h3>
                    </div>
                    <div className="card-body">
                        <label className="aiz-switch mb-0">
                            <input type="checkbox" onchange="updateSettings(this, 'FILESYSTEM_DRIVER')" />
                            <span />
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default S3FileSystemActivation;