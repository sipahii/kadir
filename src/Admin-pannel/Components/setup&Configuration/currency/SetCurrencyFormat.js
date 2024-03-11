function SetCurrencyFormats() {
    return (
        <>
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Set Currency Formats</h5>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/business-settings/update" method="POST">
                            <input type="hidden" name="_token" defaultValue="OlhMycqXuIcjZ16H1v7gFG49f12SloCusJTFh8sM" />                 
                               <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="symbol_format" />
                                <div className="col-lg-3">
                                    <label className="control-label">Symbol Format</label>
                                </div>
                                <div className="col-lg-6">
                                    <select className="form-select" aria-label="Default select example">
                                        <option>[Amount][Symbol]</option>
                                        <option value={1}>[Amount][Symbol]</option>
                                        <option value={2}>[Amount][Symbol]</option>
                                        <option value={3}>[Amount][Symbol]</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="decimal_separator" />
                                <div className="col-lg-3">
                                    <label className="control-label">Decimal Separator</label>
                                </div>
                                <div className="col-lg-6">
                                    <select className="form-select" aria-label="Default select example">
                                        <option >1,23,456.70</option>
                                        <option value={1}>1,23,456.70</option>
                                        <option value={2}>1,23,456.70</option>
                                        <option value={3}>1,23,456.70</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <input type="hidden" name="types[]" defaultValue="no_of_decimals" />
                                <div className="col-lg-3">
                                    <label className="control-label">No of decimals</label>
                                </div>
                                <div className="col-lg-6">
                                    <select className="form-select" aria-label="Default select example">
                                        <option>1234.5</option>
                                        <option value={1}>1234.5</option>
                                        <option value={2}>1,23,456.70</option>
                                        <option value={3}>1,23,456.70</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="xtfte">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SetCurrencyFormats;