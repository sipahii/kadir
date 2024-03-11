import React from 'react'

function Shippingstates() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <h1 className="h3">All States</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="card">
                                <form className id="sort_cities" action method="GET">
                                    <div className="card-header row gutters-5">
                                        <div className="col text-center text-md-left">
                                            <h5 className="mb-md-0 h6">States</h5>
                                        </div>
                                        <div className="col-md-3">
                                            <input type="text" className="form-control" id="sort_state" name="sort_state" placeholder="Type state name" fdprocessedid="onumq" />
                                        </div>
                                        <div className="col-md-3">
                                            <div className="dropdown bootstrap-select form-control aiz-"><select className="form-control aiz-selectpicker" data-live-search="true" id="sort_country" name="sort_country" tabIndex={-98}>
                                                <option value>Select country</option>
                                                <option value={17}>
                                                    Bahrain
                                                </option>
                                                <option value={18}>
                                                    Bangladesh
                                                </option>
                                                <option value={101}>
                                                    India
                                                </option>
                                                <option value={191}>
                                                    Saudi Arabia
                                                </option>
                                                <option value={245}>
                                                    Zambia
                                                </option>
                                            </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" data-id="sort_country" title="Select country" fdprocessedid="0vj8v"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Select country</div></div> </div></button><div className="dropdown-menu " style={{ maxHeight: 251, overflow: 'hidden' }}><div className="bs-searchbox"><input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-1" aria-autocomplete="list" aria-activedescendant="bs-select-1-0" /></div><div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1} style={{ maxHeight: 185, overflowY: 'auto' }}><ul className="dropdown-menu inner show" role="presentation" style={{ marginTop: 0, marginBottom: 0 }}><li className="selected active"><a role="option" className="dropdown-item active selected" id="bs-select-1-0" tabIndex={0} aria-setsize={6} aria-posinset={1} aria-selected="true"><span className="text">Select country</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-1" tabIndex={0}><span className="text">
                                                Bahrain
                                            </span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-2" tabIndex={0}><span className="text">
                                                Bangladesh
                                            </span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-3" tabIndex={0}><span className="text">
                                                India
                                            </span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-4" tabIndex={0}><span className="text">
                                                Saudi Arabia
                                            </span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-5" tabIndex={0}><span className="text">
                                                Zambia
                                            </span></a></li></ul></div></div></div>
                                        </div>
                                        <div className="col-md-1">
                                            <button className="btn btn-primary" type="submit" fdprocessedid="8snpjj">Filter</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="card-body">
                                    <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                        <thead>
                                            <tr className="footable-header">
                                                <th width="10%" className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Name</th><th style={{ display: 'table-cell' }}>Country</th><th style={{ display: 'table-cell' }}>Show/Hide</th><th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Action</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td><td style={{ display: 'table-cell' }}>West Bengal</td><td style={{ display: 'table-cell' }}>India</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={41} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/states/41/edit" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td><td style={{ display: 'table-cell' }}>Uttarakhand</td><td style={{ display: 'table-cell' }}>India</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={39} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/states/39/edit" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>3</td><td style={{ display: 'table-cell' }}>Uttar Pradesh</td><td style={{ display: 'table-cell' }}>India</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={38} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/states/38/edit" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>4</td><td style={{ display: 'table-cell' }}>Delhi</td><td style={{ display: 'table-cell' }}>India</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={10} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/states/10/edit" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>5</td><td style={{ display: 'table-cell' }}>Goa</td><td style={{ display: 'table-cell' }}>India</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={11} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/states/11/edit" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>6</td><td style={{ display: 'table-cell' }}>Gujarat</td><td style={{ display: 'table-cell' }}>India</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={12} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/states/12/edit" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>7</td><td style={{ display: 'table-cell' }}>Haryana</td><td style={{ display: 'table-cell' }}>India</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={13} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/states/13/edit" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>8</td><td style={{ display: 'table-cell' }}>Kerala</td><td style={{ display: 'table-cell' }}>India</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={19} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/states/19/edit" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>9</td><td style={{ display: 'table-cell' }}>Karnataka</td><td style={{ display: 'table-cell' }}>India</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={17} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/states/17/edit" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>10</td><td style={{ display: 'table-cell' }}>Andhra Pradesh</td><td style={{ display: 'table-cell' }}>India</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={2} type="checkbox" />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/states/2/edit" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>11</td><td style={{ display: 'table-cell' }}>Arunachal Pradesh</td><td style={{ display: 'table-cell' }}>India</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={3} type="checkbox" />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/states/3/edit" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>12</td><td style={{ display: 'table-cell' }}>Uttar Pradesh</td><td style={{ display: 'table-cell' }}>India</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={4122} type="checkbox" />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/states/4122/edit" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>13</td><td style={{ display: 'table-cell' }}>Bihar</td><td style={{ display: 'table-cell' }}>India</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={5} type="checkbox" />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/states/5/edit" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>14</td><td style={{ display: 'table-cell' }}>Chandigarh</td><td style={{ display: 'table-cell' }}>India</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={6} type="checkbox" />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/states/6/edit" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>15</td><td style={{ display: 'table-cell' }}>Daman and Diu</td><td style={{ display: 'table-cell' }}>India</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={9} type="checkbox" />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/states/9/edit" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                </td></tr></tbody>
                                    </table>
                                    <div className="aiz-pagination">
                                        <nav>
                                            <ul className="pagination">
                                                <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                                                    <span className="page-link" aria-hidden="true">‹</span>
                                                </li>
                                                <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/states?page=2">2</a></li>
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/states?page=3">3</a></li>
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/states?page=4">4</a></li>
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/states?page=5">5</a></li>
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/states?page=6">6</a></li>
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/states?page=7">7</a></li>
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/states?page=8">8</a></li>
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/states?page=9">9</a></li>
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/states?page=10">10</a></li>
                                                <li className="page-item disabled" aria-disabled="true"><span className="page-link">...</span></li>
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/states?page=272">272</a></li>
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/states?page=273">273</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="https://mmslfashions.in/admin/states?page=2" rel="next" aria-label="Next »">›</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Add New State</h5>
                                </div>
                                <div className="card-body">
                                    <form action="https://mmslfashions.in/admin/states" method="POST">
                                        <input type="hidden" name="_token" defaultValue="yG9jLpRgd5N8rU1r6JOumPp4iFe6UqKm7Oj0VLfC" />    					<div className="form-group mb-3">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" placeholder="Name" name="name" className="form-control" required fdprocessedid="4v6isa" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="country">Country</label>
                                            <div className="dropdown bootstrap-select select2 form-control aiz-"><select className="select2 form-control aiz-selectpicker" name="country_id" data-toggle="select2" data-placeholder="Choose ..." data-live-search="true" tabIndex={-98}>
                                                <option value={17}>
                                                    Bahrain
                                                </option>
                                                <option value={18}>
                                                    Bangladesh
                                                </option>
                                                <option value={101}>
                                                    India
                                                </option>
                                                <option value={191}>
                                                    Saudi Arabia
                                                </option>
                                                <option value={245}>
                                                    Zambia
                                                </option>
                                            </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" title="Bahrain" fdprocessedid="myt9q8"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Bahrain</div></div> </div></button><div className="dropdown-menu " style={{ overflow: 'hidden' }}><div className="bs-searchbox"><input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-2" aria-autocomplete="list" aria-activedescendant="bs-select-2-0" /></div><div className="inner show" role="listbox" id="bs-select-2" tabIndex={-1} style={{ overflowY: 'auto' }}><ul className="dropdown-menu inner show" role="presentation" style={{ marginTop: 0, marginBottom: 0 }}><li className="selected active"><a role="option" className="dropdown-item active selected" id="bs-select-2-0" tabIndex={0} aria-setsize={5} aria-posinset={1} aria-selected="true"><span className="text">
                                                Bahrain
                                            </span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-1" tabIndex={0}><span className="text">
                                                Bangladesh
                                            </span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-2" tabIndex={0}><span className="text">
                                                India
                                            </span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-3" tabIndex={0}><span className="text">
                                                Saudi Arabia
                                            </span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-4" tabIndex={0}><span className="text">
                                                Zambia
                                            </span></a></li></ul></div></div></div>
                                        </div>
                                        <div className="form-group mb-3 text-right">
                                            <button type="submit" className="btn btn-primary" fdprocessedid="ebiqdb">Save</button>
                                        </div>
                                    </form>
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

export default Shippingstates