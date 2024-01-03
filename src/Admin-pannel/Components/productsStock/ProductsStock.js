function ProductsStock({ data }) {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className=" align-items-center">
                            <h1 className="h3">Product wise stock report</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="card">
                                {/*card body*/}
                                <div className="card-body">
                                    <form action="https://mmslfashions.in/admin/stock_report" method="GET">
                                        <div className="form-group row offset-lg-2">
                                            <label className="col-md-3 col-form-label">Sort by Category :</label>
                                            <div className="col-md-5">
                                                <div className="dropdown bootstrap-select from-control aiz-">
                                                    <select id="demo-ease" className="from-control aiz-selectpicker" name="category_id" required tabIndex={-98}>
                                                        <option value={1}>Fertilizer</option>
                                                        <option value={2}>Specialty Fertilizer</option>
                                                        <option value={3}>Agro Chemicals</option>
                                                        <option value={4}>Tools &amp; Equipments</option>
                                                        <option value={5}>Seeds</option>
                                                        <option value={6}>Polymer Polyolefin</option>
                                                        <option value={7}>Insecticide</option>
                                                        <option value={8}>Straight Fertilizer</option>
                                                        <option value={9}>Foliar Fertilizer</option>
                                                        <option value={10}>Water Soluble Fertilizer</option>
                                                        <option value={11}>Blended Fartilizer</option>
                                                        <option value={12}>Enhanced Granular Blends</option>
                                                        <option value={13}>Herbicide</option>
                                                        <option value={14}>Animal DIP</option>
                                                        <option value={15}>Fumigant</option>
                                                        <option value={16}>Fungicide</option>
                                                        <option value={17}>Nematode</option>
                                                        <option value={18}>Plant Regulator</option>
                                                        <option value={19}>Inoculant</option>
                                                        <option value={20}>Maize Seed</option>
                                                        <option value={21}>Vegetable Seed</option>
                                                        <option value={22}>Soybean Seeds</option>
                                                        <option value={23}>EIHL Others</option>
                                                        <option value={24}>Animal Feed</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <div className="col-md-2">
                                                <button className="btn btn-primary" type="submit" fdprocessedid="nnpg49">Filter</button>
                                            </div>
                                        </div>
                                    </form>
                                    <table className="table table-bordered aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                        <thead>
                                            <tr className="footable-header">
                                                <th className="footable-first-visible" style={{ display: 'table-cell' }}>{data.theadTitle}</th>
                                                <th className="footable-last-visible" style={{ display: 'table-cell' }}>{data.theadDescription}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>PRILLED UREA 50KG BAG</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>10</td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>Ammonium Sulphate</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>99</td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>Ammonium Sulphate</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>99</td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>Ammonium Sulphate</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>99</td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>test11</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>100</td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>17:17:17  50 KG BAG</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>10</td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>AMMONIUM NITRATE 10 KG BAG</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>9</td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>AMMONIUM NITRATE 25 KG BAG</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>10</td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>AMMONIUM NITRATE 5 KG BAG</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>10</td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>AMMONIUM NITRATE IN 50 KG BAG</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>10</td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>AS (CAPROLACTAM) IN BULK</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>10</td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>AS (GRANULAR) IN 5 KG BAG</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>10</td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>AS (GRANULAR) IN 50 KG BAG</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>10</td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>CAN - CAN 27% IN 25 KG BAG</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>10</td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>CAN - CAN 27% IN 50 KG BAG</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>10</td></tr></tbody>
                                    </table>
                                    <div className="aiz-pagination mt-4">
                                        <nav>
                                            <ul className="pagination">
                                                <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                                                    <span className="page-link" aria-hidden="true">‹</span>
                                                </li>
                                                <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/stock_report?page=2">2</a></li>
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/stock_report?page=3">3</a></li>
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/stock_report?page=4">4</a></li>
                                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/stock_report?page=5">5</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="https://mmslfashions.in/admin/stock_report?page=2" rel="next" aria-label="Next »">›</a>
                                                </li>
                                            </ul>
                                        </nav>
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
export default ProductsStock;