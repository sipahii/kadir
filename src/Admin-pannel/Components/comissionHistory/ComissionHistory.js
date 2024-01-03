function ComissionHistory() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className=" align-items-center">
                            <h1 className="h3">Commission History Report</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="card">
                                <form action="https://mmslfashions.in/admin/commission-log" method="GET">
                                    <div className="card-header row gutters-5">
                                        <div className="col text-center text-md-left">
                                            <h5 className="mb-md-0 h6">Commission History</h5>
                                        </div>
                                        <div className="col-md-3 ml-auto">
                                            <div className="dropdown bootstrap-select form-control form-control-sm aiz- mb-2 mb-md-0"><select id="demo-ease" className="form-control form-control-sm aiz-selectpicker mb-2 mb-md-0" name="seller_id" tabIndex={-98}>
                                                <option value>Choose Seller</option>
                                                <option value={3}>
                                                    Abaris Seller
                                                </option>
                                            </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" data-id="demo-ease" title="Choose Seller" fdprocessedid="qoaoji"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Choose Seller</div></div> </div></button><div className="dropdown-menu " style={{ overflow: 'hidden' }}><div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1} aria-activedescendant="bs-select-1-0" style={{ overflowY: 'auto' }}><ul className="dropdown-menu inner show" role="presentation" style={{ marginTop: 0, marginBottom: 0 }}><li className="selected active"><a role="option" className="dropdown-item active selected" id="bs-select-1-0" tabIndex={0} aria-setsize={2} aria-posinset={1} aria-selected="true"><span className="text">Choose Seller</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-1" tabIndex={0}><span className="text">
                                                Abaris Seller
                                            </span></a></li></ul></div></div></div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group mb-0">
                                                <input type="text" className="form-control form-control-sm aiz-date-range" id="search" name="date_range" placeholder="Daterange" fdprocessedid="rzommi" />
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <button className="btn btn-md btn-primary" type="submit" fdprocessedid="1d1vq">
                                                Filter
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <div className="card-body">
                                    <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                        <thead>
                                            <tr className="footable-header">
                                                <th style={{ display: 'table-cell' }}>#</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Order Code:</th><th style={{ display: 'table-cell' }}>Admin Commission</th><th style={{ display: 'table-cell' }}>Seller Earning</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Created At</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr className="footable-empty"><td colSpan={5}>Nothing found</td></tr></tbody>
                                    </table>
                                    <div className="aiz-pagination mt-4">
                                    </div>
                                </div>      </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>


        </>
    )
}
export default ComissionHistory;