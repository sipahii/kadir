
import AddnewPrivacy from "./AddnewPrivacy";
import ListPolicy from "./ListPolicy";

function Add_privacyPolicy() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="align-items-center">
                            <h1 className="h3">Privacy Policy</h1>
                        </div>
                    </div>
                    <div className="row">
                        <AddnewPrivacy />
                    </div>
                    {/* <div className="row">
                        <ListPolicy />
                    </div> */}
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>
        </>
    )
}
export default Add_privacyPolicy;