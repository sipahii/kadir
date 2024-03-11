import FastMsCredential from "./FastMsCredential";
import MSegatCredential from "./MSegatCredential";
import MimSmsCredential from "./MimSmsCredential";
import MimoCredential from "./MimoCredential";
import NexmoCredential from "./NexmoCredential";
import SSLWirelessCredential from "./SSLWirelessCredential";
import TwillioCredential from "./TwillioCredential";

function SetOtpCredential() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <TwillioCredential />
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>

        </>
    )
}
export default SetOtpCredential;