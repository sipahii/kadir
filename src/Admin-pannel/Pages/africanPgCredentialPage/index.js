import FlutterCredential from "../../Components/africanCredential/FlutterCredential";
import PayFastCredential from "../../Components/africanCredential/PayFastCredential";
import PayTmCredential from "../../Components/africanCredential/PayTmCredential";
import PayuMoneyCredential from "../../Components/africanCredential/PayuMoneyCredential";
import RazorPayCredential from "../../Components/africanCredential/RazorPayCredential";
import TingoCredential from "../../Components/africanCredential/TingoCredential";

function AfricanPgCredentialPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <FlutterCredential />
                        <PayFastCredential />
                        <TingoCredential />
                        <RazorPayCredential />
                        <PayuMoneyCredential />
                        {/* <PayuMoneyCredential /> */}
                        <PayTmCredential />
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>
        </>
    )
}
export default AfricanPgCredentialPage;