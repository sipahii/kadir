import { Link } from "react-router-dom";

function AllFlashDeals() {
    return (
        <>
            <div className="aiz-titlebar text-left mt-2 mb-3">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="h3">All Flash Deals</h1>
                    </div>
                    <div className="col-md-6 text-md-right">
                        <Link to="/admin/flash_deals/create" className="btn btn-circle btn-info">
                            <span>Create New Flash Deal</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AllFlashDeals;