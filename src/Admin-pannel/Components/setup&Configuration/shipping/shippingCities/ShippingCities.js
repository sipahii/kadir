import React from 'react'

function ShippingCities() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <h1 className="h3">All cities</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="card">
                                <form className id="sort_cities" action method="GET">
                                    <div className="card-header row gutters-5">
                                        <div className="col text-center text-md-left">
                                            <h5 className="mb-md-0 h6">Cities</h5>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="text" className="form-control" id="sort_city" name="sort_city" placeholder="Type city name & Enter" fdprocessedid="f8kvy7" />
                                        </div>
                                        <div className="col-md-4">
                                            <div className="dropdown bootstrap-select form-control aiz-"><select className="form-control aiz-selectpicker" data-live-search="true" id="sort_state" name="sort_state" tabIndex={-98}>
                                                <option value>Select State</option>
                                                <option value={10}>
                                                    Delhi
                                                </option>
                                                <option value={11}>
                                                    Goa
                                                </option>
                                                <option value={12}>
                                                    Gujarat
                                                </option>
                                                <option value={13}>
                                                    Haryana
                                                </option>
                                                <option value={17}>
                                                    Karnataka
                                                </option>
                                                <option value={19}>
                                                    Kerala
                                                </option>
                                                <option value={38}>
                                                    Uttar Pradesh
                                                </option>
                                                <option value={39}>
                                                    Uttarakhand
                                                </option>
                                                <option value={41}>
                                                    West Bengal
                                                </option>
                                            </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" data-id="sort_state" title="Select State" fdprocessedid="wwi2gd"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Select State</div></div> </div></button><div className="dropdown-menu " style={{ maxHeight: 251, overflow: 'hidden' }}><div className="bs-searchbox"><input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-1" aria-autocomplete="list" aria-activedescendant="bs-select-1-0" /></div><div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1} style={{ maxHeight: 185, overflowY: 'auto' }}><ul className="dropdown-menu inner show" role="presentation" style={{ marginTop: 0, marginBottom: 0 }}><li className="selected active"><a role="option" className="dropdown-item active selected" id="bs-select-1-0" tabIndex={0} aria-setsize={10} aria-posinset={1} aria-selected="true"><span className="text">Select State</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-1" tabIndex={0}><span className="text">
                                                Delhi
                                            </span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-2" tabIndex={0}><span className="text">
                                                Goa
                                            </span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-3" tabIndex={0}><span className="text">
                                                Gujarat
                                            </span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-4" tabIndex={0}><span className="text">
                                                Haryana
                                            </span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-5" tabIndex={0}><span className="text">
                                                Karnataka
                                            </span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-6" tabIndex={0}><span className="text">
                                                Kerala
                                            </span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-7" tabIndex={0}><span className="text">
                                                Uttar Pradesh
                                            </span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-8" tabIndex={0}><span className="text">
                                                Uttarakhand
                                            </span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-9" tabIndex={0}><span className="text">
                                                West Bengal
                                            </span></a></li></ul></div></div></div>
                                        </div>
                                        <div className="col-md-1">
                                            <button className="btn btn-primary" type="submit" fdprocessedid="kp109">Filter</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="card-body">
                                    <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                        <thead>
                                            <tr className="footable-header">
                                                <th data-breakpoints="lg" className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Name</th><th style={{ display: 'table-cell' }}>State</th><th style={{ display: 'table-cell' }}>Area Wise Shipping Cost</th><th style={{ display: 'table-cell' }}>Show/Hide</th><th data-breakpoints="lg" className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td><td style={{ display: 'table-cell' }}>Aquem</td><td style={{ display: 'table-cell' }}>Goa</td><td style={{ display: 'table-cell' }}>ZK0.00</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={710} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/cities/edit/710?lang=en" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                    <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/cities/destroy/710" title="Delete">
                                                        <i className="las la-trash" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td><td style={{ display: 'table-cell' }}>Bicholim</td><td style={{ display: 'table-cell' }}>Goa</td><td style={{ display: 'table-cell' }}>ZK0.00</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={717} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/cities/edit/717?lang=en" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                    <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/cities/destroy/717" title="Delete">
                                                        <i className="las la-trash" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>3</td><td style={{ display: 'table-cell' }}>Bandora</td><td style={{ display: 'table-cell' }}>Goa</td><td style={{ display: 'table-cell' }}>ZK0.00</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={713} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/cities/edit/713?lang=en" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                    <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/cities/destroy/713" title="Delete">
                                                        <i className="las la-trash" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>4</td><td style={{ display: 'table-cell' }}>Arpora</td><td style={{ display: 'table-cell' }}>Goa</td><td style={{ display: 'table-cell' }}>ZK0.00</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={711} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/cities/edit/711?lang=en" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                    <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/cities/destroy/711" title="Delete">
                                                        <i className="las la-trash" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>5</td><td style={{ display: 'table-cell' }}>Caranzalem</td><td style={{ display: 'table-cell' }}>Goa</td><td style={{ display: 'table-cell' }}>ZK0.00</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={720} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/cities/edit/720?lang=en" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                    <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/cities/destroy/720" title="Delete">
                                                        <i className="las la-trash" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>6</td><td style={{ display: 'table-cell' }}>Calapor</td><td style={{ display: 'table-cell' }}>Goa</td><td style={{ display: 'table-cell' }}>ZK0.00</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={718} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/cities/edit/718?lang=en" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                    <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/cities/destroy/718" title="Delete">
                                                        <i className="las la-trash" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>7</td><td style={{ display: 'table-cell' }}>Altinho</td><td style={{ display: 'table-cell' }}>Goa</td><td style={{ display: 'table-cell' }}>ZK0.00</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={709} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/cities/edit/709?lang=en" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                    <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/cities/destroy/709" title="Delete">
                                                        <i className="las la-trash" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>8</td><td style={{ display: 'table-cell' }}>Bardez</td><td style={{ display: 'table-cell' }}>Goa</td><td style={{ display: 'table-cell' }}>ZK0.00</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={714} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/cities/edit/714?lang=en" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                    <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/cities/destroy/714" title="Delete">
                                                        <i className="las la-trash" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>9</td><td style={{ display: 'table-cell' }}>Bambolim</td><td style={{ display: 'table-cell' }}>Goa</td><td style={{ display: 'table-cell' }}>ZK0.00</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={712} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/cities/edit/712?lang=en" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                    <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/cities/destroy/712" title="Delete">
                                                        <i className="las la-trash" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>10</td><td style={{ display: 'table-cell' }}>Aldona</td><td style={{ display: 'table-cell' }}>Goa</td><td style={{ display: 'table-cell' }}>ZK0.00</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={708} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/cities/edit/708?lang=en" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                    <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/cities/destroy/708" title="Delete">
                                                        <i className="las la-trash" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>11</td><td style={{ display: 'table-cell' }}>Betora</td><td style={{ display: 'table-cell' }}>Goa</td><td style={{ display: 'table-cell' }}>ZK0.00</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={716} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/cities/edit/716?lang=en" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                    <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/cities/destroy/716" title="Delete">
                                                        <i className="las la-trash" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>12</td><td style={{ display: 'table-cell' }}>Candolim</td><td style={{ display: 'table-cell' }}>Goa</td><td style={{ display: 'table-cell' }}>ZK0.00</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={719} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/cities/edit/719?lang=en" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                    <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/cities/destroy/719" title="Delete">
                                                        <i className="las la-trash" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>13</td><td style={{ display: 'table-cell' }}>Benaulim</td><td style={{ display: 'table-cell' }}>Goa</td><td style={{ display: 'table-cell' }}>ZK0.00</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={715} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/cities/edit/715?lang=en" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                    <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/cities/destroy/715" title="Delete">
                                                        <i className="las la-trash" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>14</td><td style={{ display: 'table-cell' }}>New Delhi</td><td style={{ display: 'table-cell' }}>Delhi</td><td style={{ display: 'table-cell' }}>ZK0.00</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={707} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/cities/edit/707?lang=en" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                    <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/cities/destroy/707" title="Delete">
                                                        <i className="las la-trash" />
                                                    </a>
                                                </td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>15</td><td style={{ display: 'table-cell' }}>Delhi</td><td style={{ display: 'table-cell' }}>Delhi</td><td style={{ display: 'table-cell' }}>ZK0.00</td><td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input onchange="update_status(this)" defaultValue={706} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/cities/edit/706?lang=en" title="Edit">
                                                        <i className="las la-edit" />
                                                    </a>
                                                    <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/cities/destroy/706" title="Delete">
                                                        <i className="las la-trash" />
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
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/cities?page=2">2</a></li>
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/cities?page=3">3</a></li>
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/cities?page=4">4</a></li>
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/cities?page=5">5</a></li>
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/cities?page=6">6</a></li>
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/cities?page=7">7</a></li>
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/cities?page=8">8</a></li>
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/cities?page=9">9</a></li>
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/cities?page=10">10</a></li>
                                                <li className="page-item disabled" aria-disabled="true"><span className="page-link">...</span></li>
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/cities?page=3195">3195</a></li>
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/cities?page=3196">3196</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="https://mmslfashions.in/admin/cities?page=2" rel="next" aria-label="Next »">›</a>
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
                                    <h5 className="mb-0 h6">Add New city</h5>
                                </div>
                                <div className="card-body">
                                    <form action="https://mmslfashions.in/admin/cities" method="POST">
                                        <input type="hidden" name="_token" defaultValue="yG9jLpRgd5N8rU1r6JOumPp4iFe6UqKm7Oj0VLfC" />    					<div className="form-group mb-3">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" placeholder="Name" name="name" className="form-control" required fdprocessedid="lidkib" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="country">State</label>
                                            <div className="dropdown bootstrap-select select2 form-control aiz- dropup"><select className="select2 form-control aiz-selectpicker" name="state_id" data-toggle="select2" data-placeholder="Choose ..." data-live-search="true" tabIndex={-98}>
                                                <option value={10}>Delhi</option>
                                                <option value={11}>Goa</option>
                                                <option value={12}>Gujarat</option>
                                                <option value={13}>Haryana</option>
                                                <option value={17}>Karnataka</option>
                                                <option value={19}>Kerala</option>
                                                <option value={38}>Uttar Pradesh</option>
                                                <option value={39}>Uttarakhand</option>
                                                <option value={41}>West Bengal</option>
                                            </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" title="Delhi" fdprocessedid="r80vx"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Delhi</div></div> </div></button><div className="dropdown-menu " style={{ maxHeight: 251, overflow: 'hidden' }}><div className="bs-searchbox"><input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-2" aria-autocomplete="list" aria-activedescendant="bs-select-2-0" /></div><div className="inner show" role="listbox" id="bs-select-2" tabIndex={-1} style={{ maxHeight: 185, overflowY: 'auto' }}><ul className="dropdown-menu inner show" role="presentation" style={{ marginTop: 0, marginBottom: 0 }}><li className="selected active"><a role="option" className="dropdown-item active selected" id="bs-select-2-0" tabIndex={0} aria-setsize={9} aria-posinset={1} aria-selected="true"><span className="text">Delhi</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-1" tabIndex={0}><span className="text">Goa</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-2" tabIndex={0}><span className="text">Gujarat</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-3" tabIndex={0}><span className="text">Haryana</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-4" tabIndex={0}><span className="text">Karnataka</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-5" tabIndex={0}><span className="text">Kerala</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-6" tabIndex={0}><span className="text">Uttar Pradesh</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-7" tabIndex={0}><span className="text">Uttarakhand</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-8" tabIndex={0}><span className="text">West Bengal</span></a></li></ul></div></div></div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="name">Cost</label>
                                            <input type="number" min={0} step="0.01" placeholder="Cost" name="cost" className="form-control" required fdprocessedid="9j35kl" />
                                        </div>
                                        <div className="form-group mb-3 text-right">
                                            <button type="submit" className="btn btn-primary" fdprocessedid="45in5g">Save</button>
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

export default ShippingCities