function WalletRechargeHistory() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className=" align-items-center">
                            <h1 className="h3">Wallet Transaction Report</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="card">
                                <form action="https://mmslfashions.in/admin/wallet-history" method="GET">
                                    <div className="card-header row gutters-5">
                                        <div className="col text-center text-md-left">
                                            <h5 className="mb-md-0 h6">Wallet Transaction</h5>
                                        </div>
                                        <div className="col-md-3 ml-auto">
                                            <div className="dropdown bootstrap-select form-control form-control-sm aiz- mb-2 mb-md-0"><select id="demo-ease" className="form-control form-control-sm aiz-selectpicker mb-2 mb-md-0" name="user_id" tabIndex={-98}>
                                                <option value>Choose User</option>
                                                <option value={8}>
                                                    Azharuddin Shamim
                                                </option>
                                                <option value={10}>
                                                    ETG Customer
                                                </option>
                                                <option value={11}>
                                                    ETG Customer2
                                                </option>
                                                <option value={12}>
                                                    Mr Abdul
                                                </option>
                                            </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" data-id="demo-ease" title="Choose User" fdprocessedid="37zjzo"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Choose User</div></div> </div></button><div className="dropdown-menu " style={{ overflow: 'hidden' }}><div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1} aria-activedescendant="bs-select-1-0" style={{ overflowY: 'auto' }}><ul className="dropdown-menu inner show" role="presentation" style={{ marginTop: 0, marginBottom: 0 }}><li className="selected active"><a role="option" className="dropdown-item active selected" id="bs-select-1-0" tabIndex={0} aria-setsize={5} aria-posinset={1} aria-selected="true"><span className="text">Choose User</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-1" tabIndex={0}><span className="text">
                                                Azharuddin Shamim
                                            </span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-2" tabIndex={0}><span className="text">
                                                ETG Customer
                                            </span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-3" tabIndex={0}><span className="text">
                                                ETG Customer2
                                            </span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-4" tabIndex={0}><span className="text">
                                                Mr Abdul
                                            </span></a></li></ul></div></div></div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group mb-0">
                                                <input type="text" className="form-control form-control-sm aiz-date-range" id="search" name="date_range" placeholder="Daterange" fdprocessedid="784hhc" />
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <button className="btn btn-md btn-primary" type="submit" fdprocessedid="wvx9ae">
                                                Filter
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <div className="card-body">
                                    <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                        <thead>
                                            <tr className="footable-header">
                                                <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Customer</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Date</th><th style={{ display: 'table-cell' }}>Amount</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Payment method</th><th data-breakpoints="lg" className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Approval</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td><td style={{ display: 'table-cell' }}>Azharuddin Shamim</td><td style={{ display: 'table-cell' }}>27-01-2023</td><td style={{ display: 'table-cell' }}>ZK0.00</td><td style={{ display: 'table-cell' }}>Club Point Convert</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    N/A
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td><td style={{ display: 'table-cell' }}>Azharuddin Shamim</td><td style={{ display: 'table-cell' }}>20-12-2022</td><td style={{ display: 'table-cell' }}>ZK1,000.00</td><td style={{ display: 'table-cell' }}>Payfast</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    N/A
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>3</td><td style={{ display: 'table-cell' }}>Mr Abdul</td><td style={{ display: 'table-cell' }}>14-12-2022</td><td style={{ display: 'table-cell' }}>ZK3,000.00</td><td style={{ display: 'table-cell' }}>Cheque Payment</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <span className="badge badge-inline badge-success">Approved</span>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>4</td><td style={{ display: 'table-cell' }}>Mr Abdul</td><td style={{ display: 'table-cell' }}>14-12-2022</td><td style={{ display: 'table-cell' }}>ZK2,000.00</td><td style={{ display: 'table-cell' }}>Payfast</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    N/A
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>5</td><td style={{ display: 'table-cell' }}>ETG Customer2</td><td style={{ display: 'table-cell' }}>10-12-2022</td><td style={{ display: 'table-cell' }}>ZK0.00</td><td style={{ display: 'table-cell' }}>Club Point Convert</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    N/A
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>6</td><td style={{ display: 'table-cell' }}>ETG Customer2</td><td style={{ display: 'table-cell' }}>10-12-2022</td><td style={{ display: 'table-cell' }}>ZK500.00</td><td style={{ display: 'table-cell' }}>Payfast</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    N/A
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>7</td><td style={{ display: 'table-cell' }}>ETG Customer</td><td style={{ display: 'table-cell' }}>10-12-2022</td><td style={{ display: 'table-cell' }}>ZK200.00</td><td style={{ display: 'table-cell' }}>Payfast</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    N/A
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>8</td><td style={{ display: 'table-cell' }}>ETG Customer2</td><td style={{ display: 'table-cell' }}>28-11-2022</td><td style={{ display: 'table-cell' }}>ZK3,000.00</td><td style={{ display: 'table-cell' }}>Payfast</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    N/A
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>9</td><td style={{ display: 'table-cell' }}>ETG Customer</td><td style={{ display: 'table-cell' }}>28-11-2022</td><td style={{ display: 'table-cell' }}>ZK2,000.00</td><td style={{ display: 'table-cell' }}>ICICI Bank</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <span className="badge badge-inline badge-info">Pending</span>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>10</td><td style={{ display: 'table-cell' }}>ETG Customer</td><td style={{ display: 'table-cell' }}>28-11-2022</td><td style={{ display: 'table-cell' }}>ZK3,000.00</td><td style={{ display: 'table-cell' }}>Payfast</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    N/A
                                                </td></tr></tbody>
                                    </table>
                                    <div className="aiz-pagination mt-4">
                                    </div>
                                </div>
                            </div>
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
export default WalletRechargeHistory;