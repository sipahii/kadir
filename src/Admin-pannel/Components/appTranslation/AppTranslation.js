function AppTranslation() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card">
                        <div className="card-header row gutters-5">
                            <div className="col text-center text-md-left">
                                <h5 className="mb-md-0 h6">English</h5>
                            </div>
                            <div className="col-md-4">
                                <form className id="sort_keys" action method="GET">
                                    <div className="input-group input-group-sm">
                                        <input type="text" className="form-control" id="search" name="search" placeholder="Type key & Enter" fdprocessedid="3tzn3" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/languages/app-translations/key_value_store" method="POST">
                            <input type="hidden" name="_token" defaultValue="OlhMycqXuIcjZ16H1v7gFG49f12SloCusJTFh8sM" />            <input type="hidden" name="id" defaultValue={1} />
                            <div className="card-body">
                                <table className="table table-striped table-bordered demo-dt-basic" id="tranlation-table" cellSpacing={0} width="100%">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th width="30%">Key</th>
                                            <th width="30%">Default Value</th>
                                            <th width="30%">Translated Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                                <div className="aiz-pagination">
                                </div>
                                <div className="form-group mb-0 text-right">
                                    <button type="button" className="btn btn-primary" onclick="copyTranslation()" fdprocessedid="cyy9sj">Copy Translations</button>
                                    <button type="submit" className="btn btn-primary" fdprocessedid="8ko9ba">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>
        </>
    )
}
export default AppTranslation