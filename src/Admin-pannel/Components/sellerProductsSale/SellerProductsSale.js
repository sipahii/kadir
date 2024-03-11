function SellerProductsSale() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className=" align-items-center">
                            <h1 className="h3">Seller Based Selling Report</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="card">
                                <div className="card-body">
                                    <form action="https://mmslfashions.in/admin/seller_sale_report" method="GET">
                                        <div className="form-group row offset-lg-2">
                                            <label className="col-md-3 col-form-label">Sort by verificarion status :</label>
                                            <div className="col-md-5">

                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>sort by status</option>
                                                    <option value={1}>One</option>
                                                    <option value={2}>Two</option>
                                                    <option value={3}>Three</option>
                                                </select>


                                                {/* <div className="dropdown bootstrap-select from-control aiz-"><select className="from-control aiz-selectpicker" name="verification_status" required tabIndex={-98}>
                                                    <option value={1}>Approved</option>
                                                    <option value={0}>Non Approved</option>
                                                </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Approved" fdprocessedid="s2n46"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Approved</div></div> </div></button><div className="dropdown-menu " style={{ overflow: 'hidden' }}><div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1} aria-activedescendant="bs-select-1-0" style={{ overflowY: 'auto' }}><ul className="dropdown-menu inner show" role="presentation" style={{ marginTop: 0, marginBottom: 0 }}><li className="selected active"><a role="option" className="dropdown-item active selected" id="bs-select-1-0" tabIndex={0} aria-setsize={2} aria-posinset={1} aria-selected="true"><span className="text">Approved</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-1" tabIndex={0}><span className="text">Non Approved</span></a></li></ul></div></div></div> */}
                                            </div>
                                            <div className="col-md-2">
                                                <button className="btn btn-primary" type="submit" fdprocessedid="d3wtsr">Filter</button>
                                            </div>
                                        </div>
                                    </form>
                                    <table className="table table-bordered aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                        <thead>
                                            <tr className="footable-header">
                                                <th className="footable-first-visible" style={{ display: 'table-cell' }}>Seller Name</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Shop Name</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Number of Product Sale</th><th className="footable-last-visible" style={{ display: 'table-cell' }}>Order Amount</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>Abaris Seller</td><td style={{ display: 'table-cell' }}>--</td><td style={{ display: 'table-cell' }}>
                                                    9
                                                </td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                                    ZK1,390.00
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
export default SellerProductsSale;