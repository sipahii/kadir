import BusinessRelated from "../../../Components/featuresActivation/BusinessRelated";
import PaymentRelated from "../../../Components/featuresActivation/PaymentRelated";
import SocialMediaLogin from "../../../Components/featuresActivation/SocialMediaLogin";
import SystemRelated from "../../../Components/featuresActivation/SystemRelated";

function FeaturesActivationPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <SystemRelated />
                    <BusinessRelated />
                    <PaymentRelated />
                    <SocialMediaLogin />
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>
        </>
    )
}
export default FeaturesActivationPage;