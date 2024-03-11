import AllFlashDeals from "../../Components/allFlashDeals/AllFlashDeals";
import FlashDeals from "../../Components/flashDeals/FlashDeals";

function FlashDealsPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <AllFlashDeals />
                    <FlashDeals />
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>

        </>
    )
}
export default FlashDealsPage;