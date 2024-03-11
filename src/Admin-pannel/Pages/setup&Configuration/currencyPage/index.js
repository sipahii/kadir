import AllCurrency from "../../../Components/setup&Configuration/currency/AllCurrency";
import SetCurrencyFormats from "../../../Components/setup&Configuration/currency/SetCurrencyFormat";
import SystemDefaultCurrency from "../../../Components/setup&Configuration/currency/SystemDefaultCurrency";


function CurrencyPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <SystemDefaultCurrency />
                        <SetCurrencyFormats />
                    </div>
                    <AllCurrency />
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>


        </>
    )
}
export default CurrencyPage;