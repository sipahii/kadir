import React from 'react'

function ShippingCountries() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card">
                        <form className id action method="GET">
                            <div className="card-header row gutters-5">
                                <div className="col text-center text-md-left">
                                    <h5 className="mb-md-0 h6">Countries</h5>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" id="sort_country" name="sort_country" placeholder="Type country name" fdprocessedid="2fzvqk" />
                                </div>
                                <div className="col-md-1">
                                    <button className="btn btn-primary" type="submit" fdprocessedid="bww6yq">Filter</button>
                                </div>
                            </div>
                        </form>
                        <div className="card-body">
                            <table className="table aiz-table table-striped table-bordered footable footable-1 breakpoint-xl" cellSpacing={0} width="100%" style={{}}>
                                <thead>
                                    <tr className="footable-header">
                                        <th width="10%" className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Name</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Code</th><th className="footable-last-visible" style={{ display: 'table-cell' }}>Show/Hide</th></tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td><td style={{ display: 'table-cell' }}>Zambia</td><td style={{ display: 'table-cell' }}>ZM</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input onchange="update_status(this)" defaultValue={245} type="checkbox" defaultChecked />
                                                <span className="slider round" />
                                            </label>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td><td style={{ display: 'table-cell' }}>Saudi Arabia</td><td style={{ display: 'table-cell' }}>SA</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input onchange="update_status(this)" defaultValue={191} type="checkbox" defaultChecked />
                                                <span className="slider round" />
                                            </label>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>3</td><td style={{ display: 'table-cell' }}>India</td><td style={{ display: 'table-cell' }}>IN</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input onchange="update_status(this)" defaultValue={101} type="checkbox" defaultChecked />
                                                <span className="slider round" />
                                            </label>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>4</td><td style={{ display: 'table-cell' }}>Bangladesh</td><td style={{ display: 'table-cell' }}>BD</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input onchange="update_status(this)" defaultValue={18} type="checkbox" defaultChecked />
                                                <span className="slider round" />
                                            </label>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>5</td><td style={{ display: 'table-cell' }}>Bahrain</td><td style={{ display: 'table-cell' }}>BH</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input onchange="update_status(this)" defaultValue={17} type="checkbox" defaultChecked />
                                                <span className="slider round" />
                                            </label>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>6</td><td style={{ display: 'table-cell' }}>Albania</td><td style={{ display: 'table-cell' }}>AL</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input onchange="update_status(this)" defaultValue={2} type="checkbox" />
                                                <span className="slider round" />
                                            </label>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>7</td><td style={{ display: 'table-cell' }}>Algeria</td><td style={{ display: 'table-cell' }}>DZ</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input onchange="update_status(this)" defaultValue={3} type="checkbox" />
                                                <span className="slider round" />
                                            </label>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>8</td><td style={{ display: 'table-cell' }}>Zimbabwe</td><td style={{ display: 'table-cell' }}>ZW</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input onchange="update_status(this)" defaultValue={246} type="checkbox" />
                                                <span className="slider round" />
                                            </label>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>9</td><td style={{ display: 'table-cell' }}>Andorra</td><td style={{ display: 'table-cell' }}>AD</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input onchange="update_status(this)" defaultValue={5} type="checkbox" />
                                                <span className="slider round" />
                                            </label>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>10</td><td style={{ display: 'table-cell' }}>Angola</td><td style={{ display: 'table-cell' }}>AO</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input onchange="update_status(this)" defaultValue={6} type="checkbox" />
                                                <span className="slider round" />
                                            </label>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>11</td><td style={{ display: 'table-cell' }}>Antarctica</td><td style={{ display: 'table-cell' }}>AQ</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input onchange="update_status(this)" defaultValue={8} type="checkbox" />
                                                <span className="slider round" />
                                            </label>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>12</td><td style={{ display: 'table-cell' }}>Antigua And Barbuda</td><td style={{ display: 'table-cell' }}>AG</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input onchange="update_status(this)" defaultValue={9} type="checkbox" />
                                                <span className="slider round" />
                                            </label>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>13</td><td style={{ display: 'table-cell' }}>Armenia</td><td style={{ display: 'table-cell' }}>AM</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input onchange="update_status(this)" defaultValue={11} type="checkbox" />
                                                <span className="slider round" />
                                            </label>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>14</td><td style={{ display: 'table-cell' }}>Aruba</td><td style={{ display: 'table-cell' }}>AW</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input onchange="update_status(this)" defaultValue={12} type="checkbox" />
                                                <span className="slider round" />
                                            </label>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>15</td><td style={{ display: 'table-cell' }}>Australia</td><td style={{ display: 'table-cell' }}>AU</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input onchange="update_status(this)" defaultValue={13} type="checkbox" />
                                                <span className="slider round" />
                                            </label>
                                        </td></tr></tbody>
                            </table>
                            <div className="aiz-pagination">
                                <nav>
                                    <ul className="pagination">
                                        <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                                            <span className="page-link" aria-hidden="true">‹</span>
                                        </li>
                                        <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                                        <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/countries?page=2">2</a></li>
                                        <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/countries?page=3">3</a></li>
                                        <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/countries?page=4">4</a></li>
                                        <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/countries?page=5">5</a></li>
                                        <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/countries?page=6">6</a></li>
                                        <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/countries?page=7">7</a></li>
                                        <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/countries?page=8">8</a></li>
                                        <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/countries?page=9">9</a></li>
                                        <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/countries?page=10">10</a></li>
                                        <li className="page-item disabled" aria-disabled="true"><span className="page-link">...</span></li>
                                        <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/countries?page=16">16</a></li>
                                        <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/countries?page=17">17</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="https://mmslfashions.in/admin/countries?page=2" rel="next" aria-label="Next »">›</a>
                                        </li>
                                    </ul>
                                </nav>
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

export default ShippingCountries