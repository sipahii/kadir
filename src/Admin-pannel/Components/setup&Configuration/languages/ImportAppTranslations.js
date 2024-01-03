function ImportAppTranslations() {
    return (
        <>
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Import App Translations</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/languages/app-translations/import" method="POST" encType="multipart/form-data">
                            <input type="hidden" name="_token" defaultValue="OlhMycqXuIcjZ16H1v7gFG49f12SloCusJTFh8sM" />
                            <div className="form-group row">
                                <div className="col-lg-3">
                                    <label className="col-from-label">English Trasnlation File</label>
                                </div>
                                <div className="col-lg-6">
                                    <div className="custom-file">
                                        <label className="custom-file-label">
                                            <input type="file" id="lang_file" name="lang_file" className="custom-file-input" required />
                                            <span className="custom-file-name">Choose app_en.arb file</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <button type="submit" className="btn btn-info" fdprocessedid="0g9ezm">Import</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ImportAppTranslations;