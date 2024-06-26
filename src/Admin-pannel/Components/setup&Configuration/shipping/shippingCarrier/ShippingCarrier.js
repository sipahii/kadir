import React from 'react'
import { Link } from 'react-bootstrap-icons'

function ShippingCarrier() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">All Carriers</h1>
                            </div>
                            <div className="col-md-6 text-md-right">
                                <Link to="#" className="btn btn-primary">
                                    <span>Add New Carrier</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header row gutters-5">
                                    <div className="col text-center text-md-left">
                                        <h5 className="mb-md-0 h6">Carriers</h5>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                        <thead>
                                            <tr className="footable-header">
                                                <th style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Logo</th><th style={{ display: 'table-cell' }}>Name</th><th style={{ display: 'table-cell' }}>Transit Time</th><th style={{ display: 'table-cell' }}>Status</th><th style={{ textAlign: 'right', display: 'table-cell' }}>Options</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr className="footable-empty"><td colSpan={6}>Nothing found</td></tr></tbody>
                                    </table>
                                    <div className="aiz-pagination">
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
export default ShippingCarrier