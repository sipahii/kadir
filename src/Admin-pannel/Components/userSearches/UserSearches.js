function UserSearches() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h1 className="h6">User Search Report</h1>
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                        <thead>
                                            <tr className="footable-header">
                                                <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Search By</th><th className="footable-last-visible" style={{ display: 'table-cell' }}>Number searches</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td><td style={{ display: 'table-cell' }}>das</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>3</td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td><td style={{ display: 'table-cell' }}>dcs</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>1</td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>3</td><td style={{ display: 'table-cell' }}>ammonium nitrate</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>1</td></tr><tr>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>4</td><td style={{ display: 'table-cell' }}>test</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>1</td></tr></tbody>
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
export default UserSearches;