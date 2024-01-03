import AffiliateLinkValidatingTime from "./AffiliateLinkValidatingTime";
import BasicAffiliate from "./BasicAffiliate";
import ProductSharingAffiliate from "./ProductSharingAffiliate";
import SharingAffiliateCategoryWise from "./SharingAffiliateCategoryWise";

function AffiliateConfiguration() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <BasicAffiliate />
            <ProductSharingAffiliate />
          </div>


          <div className="row">

            <SharingAffiliateCategoryWise />

            <div className="col-md-6">
              <div className="card bg-gray-light">
                <div className="card-header">
                  <h5 className="mb-0 h6">
                    <i>
                      N:B: You can not enable Single Product Sharing Affiliate
                      and Category Wise Affiliate at a time.
                    </i>
                  </h5>
                </div>
              </div>
            </div>

            <AffiliateLinkValidatingTime />

          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
          {/*p class="mb-0">&copy;  v6.3.3</p*/}
        </div>
      </div>
    </>
  );
}
export default AffiliateConfiguration;
