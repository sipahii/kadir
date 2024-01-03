import Form from 'react-bootstrap/Form';

function ProductsReview() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="align-items-center">
                            <h1 className="h3">Product Reviews</h1>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <div className="row flex-grow-1">
                                <div className="col">
                                    <h5 className="mb-0 h6">Product Reviews</h5>
                                </div>
                                <div className="col-md-6 col-xl-4 ml-auto mr-0">
                                    <form className id="sort_by_rating">
                                        <div className style={{ minWidth: 200 }}>
                                            <Form.Select aria-label="Default select example">
                                                <option>Filter by Rating</option>
                                                <option value="1">Rating (High &gt; Low)</option>
                                                <option value="2">Rating (Low &gt; High)</option>
                                            </Form.Select>
                                            {/* <div className="dropdown bootstrap-select form-control aiz-">
                                                <select className="form-control aiz-selectpicker" name="rating" id="rating" tabIndex={-98}>
                                                    <option value>Filter by Rating</option>
                                                    <option value="rating,desc">Rating (High &gt; Low)</option>
                                                    <option value="rating,asc">Rating (Low &gt; High)</option>
                                                </select>



                                                <button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" data-id="rating" title="Filter by Rating" fdprocessedid="9bdg6"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Filter by Rating</div></div> </div>
                                                </button>
                                                <div className="dropdown-menu " style={{ overflow: 'hidden' }}>
                                                    <div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1} aria-activedescendant="bs-select-1-0" style={{ overflowY: 'auto' }}><ul className="dropdown-menu inner show" role="presentation" style={{ marginTop: 0, marginBottom: 0 }}><li className="selected active"><a role="option" className="dropdown-item active selected" id="bs-select-1-0" tabIndex={0} aria-setsize={3} aria-posinset={1} aria-selected="true"><span className="text">Filter by Rating</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-1" tabIndex={0}><span className="text">Rating (High &gt; Low)</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-2" tabIndex={0}><span className="text">Rating (Low &gt; High)</span></a></li></ul>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table aiz-table mb-0 footable footable-1 breakpoint breakpoint-sm" style={{}}>
                                <thead>
                                    <tr className="footable-header">
                                        <th data-breakpoints="lg">#</th>
                                        <th style={{ display: 'table-cell' }}>Product</th>
                                        <th data-breakpoints="lg" >Product Owner</th>
                                        <th data-breakpoints="lg" >Customer</th>
                                        <th style={{ display: 'table-cell' }}>Rating</th>
                                        <th data-breakpoints="lg">Comment</th>
                                        <th data-breakpoints="lg">Published</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="footable-empty">
                                        <td colSpan={7}>Nothing found</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="aiz-pagination">
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
export default ProductsReview;