function ProductsConversation({ data }) {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6">{data.title}</h5>
                        </div>
                        <div className="card-body">
                            <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" cellSpacing={0} width="100%" style={{}}>
                                <thead>
                                    <tr className="footable-header">
                                        <th data-breakpoints="lg" style={{ display: 'table-cell' }}>#</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Date</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Title</th><th style={{ display: 'table-cell' }}>Sender</th><th style={{ display: 'table-cell' }}>Receiver</th><th width="10%" className="text-right" style={{ display: 'table-cell' }}>Options</th></tr>
                                </thead>
                                <tbody>
                                    <tr className="footable-empty"><td colSpan={6}>Nothing found</td></tr></tbody>
                            </table>
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
export default ProductsConversation;