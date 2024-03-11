import ActivationTypes from "../../Components/africanPgConfiguration/ActivationTypes";
import FlutterActivation from "./FlutterActivation";
import PayFastActivation from "./PayFastActivation";
import PayTmActivation from "./PayTmActivation";
import PayUMoneyActivation from "./PayUMoneyActivation";
import RazorPayActivation from "./RazorPayActivation";
import TingoActivation from "./TingoActivation";

function AfricanPgConfigurationPage() {

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <FlutterActivation />
                        <PayFastActivation />
                        <TingoActivation />
                        <RazorPayActivation />
                        <PayUMoneyActivation />
                        <PayTmActivation />
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>
        </>
    )
}
export default AfricanPgConfigurationPage;