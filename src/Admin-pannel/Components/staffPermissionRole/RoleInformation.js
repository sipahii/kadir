import StaffAffiliateSystem from "./staffAffiliateSystem/StaffAffiliateSystem";
import StaffAfricanPg from "./staffAfricanPg/StaffAfricanPg";
import StaffAuction from "./staffAuction/StaffAuction";
import StaffBlog from "./staffBlog/StaffBlog";
import StaffBrand from "./staffBrand/StaffBrand";
import StaffClubPoint from "./staffClubPoint/StaffClubPoint";
import StaffCustomer from "./staffCustomer/StaffCustomer";
import StaffMarketing from "./staffMarketing/StaffMarketing";
import StaffOfflinePayment from "./staffOfflinePayment/StaffOfflinePayment";
import StaffOtpSystem from "./staffOtpSystem/StaffOtpSystem";
import StaffProduct from "./staffpermissionProduct/StaffProduct";
import StaffPostSystem from "./staffPostSystem/StaffPostSystem";
import StaffProductAttribute from "./staffProductAttribute/StaffProductAttribute";
import StaffProductCategory from "./staffProductCategory/StaffProductCategory";
import StaffProductReview from "./staffProductReview/StaffProductReview";
import StaffRefundRequest from "./staffRefuundRequest/StaffRefundRequest";
import StaffReport from "./staffReport/StaffReport";
import StaffSale from "./staffSale/StaffSale";
import StaffSeller from "./staffSeller/StaffSeller";
import StaffSellerSubscription from "./staffSellerSubscription/StaffSellerSubscription";
import StaffSetup from "./staffSetup/StaffSetup";
import StaffSupport from "./staffSupport/StaffSupport";
import StaffSystem from "./staffSystem/StaffSystem";
import StaffViewstaff from "./staffViewstaff/StaffViewstaff";
import StaffWebsite from "./staffWebsite/StaffWebsite";
import StaffWholesale from "./staffWholesale/StaffWholesale";

function RoleInformation() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="col-lg-12 mx-auto">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 h6">Role Information</h5>
              </div>
              <form action="https://mmslfashions.in/admin/roles" method="POST">
                <input type="hidden" name="_token" defaultValue="S0f7vDDtqJ5NbxPupX86gbiFGZumqx0Q8PyryILc" />

                <div className="card-body">
                  <div className="form-group row">
                    <label className="col-md-3 col-from-label" htmlFor="name">Name</label>
                    <div className="col-md-9">
                      <input type="text" placeholder="Name" id="name" name="name" className="form-control" required />
                    </div>
                  </div>
                  <div className="card-header">
                    <h5 className="mb-0 h6">Permissions</h5>
                  </div>

                  <br />
                  <StaffProduct />
                  <br />
                  <StaffProductCategory />
                  <br />
                  <StaffBrand />
                  <br />
                  <StaffProductAttribute />
                  <br />
                  <StaffProductReview />
                  <br />
                  <StaffSale />
                  <br />
                  <StaffCustomer />
                  <br />
                  <StaffSeller />
                  <br />
                  <StaffReport />
                  <br />
                  <StaffBlog />
                  <br />
                  <StaffMarketing />
                  <br />
                  <StaffSupport />
                  <br />
                  <StaffWebsite />
                  <br />
                  <StaffSetup />
                  <br />
                  <StaffViewstaff />
                  <br />
                  <StaffSystem />
                  <br />
                  <StaffPostSystem />
                  <br />
                  <StaffAuction />
                  <br />
                  <StaffWholesale />
                  <br />
                </div>

                <br />
                <StaffRefundRequest />
                <br />
                <StaffAffiliateSystem />
                <br />
                <StaffOfflinePayment />
                <br />

              </form>
            </div>

            <br />
            <StaffClubPoint />
            <br />
            <StaffOtpSystem />
            <br />
            <StaffAfricanPg />
            <br />
            <StaffSellerSubscription />
            <br />

            <div className="form-group mb-3 mt-3 text-right">
              <button type="submit" className="btn btn-primary">Save</button>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}
export default RoleInformation;