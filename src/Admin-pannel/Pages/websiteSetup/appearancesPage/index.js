import CookiesAgreement from "../../../Components/websiteSetup/appearancesComp/CookiesAgreement";
import CustomScript from "../../../Components/websiteSetup/appearancesComp/CustomScript";
import General from "../../../Components/websiteSetup/appearancesComp/General";
import GlobalSEO from "../../../Components/websiteSetup/appearancesComp/GlobalSEO";
import WebsitePopUp from "../../../Components/websiteSetup/appearancesComp/WebsitePopUp";

function AppearancesPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <General />
                            {/* <GlobalSEO /> */}
                            {/* <CookiesAgreement />
                            <WebsitePopUp /> */}
                            <CustomScript />
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
export default AppearancesPage;