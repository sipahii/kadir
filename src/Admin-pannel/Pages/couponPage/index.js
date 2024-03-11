import { Link } from "react-router-dom";
import CouponInformation from "../../Components/couponInformation/CouponInformation";

function CouponPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">All Coupons</h1>
                            </div>
                            <div className="col-md-6 text-md-right">
                                <Link to="/admin/coupon/create" className="btn btn-circle btn-info">
                                    <span>Add New Coupon</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <CouponInformation />
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>

        </>
    )
}
export default CouponPage;