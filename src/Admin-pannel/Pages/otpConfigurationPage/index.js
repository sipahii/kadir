// import OtpConfiguration from "../../Components/otpConfiguration/OtpConfiguration";
import OtpTypes from "../../Components/otpConfiguration/OtpTypes";

function OtpConfigurationPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <h4 className="text-center text-muted">Activate OTP</h4>
                    <div className="row">
                        <OtpTypes />
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>
            {/* <OtpConfiguration /> */}
        </>
    )
}
export default OtpConfigurationPage;