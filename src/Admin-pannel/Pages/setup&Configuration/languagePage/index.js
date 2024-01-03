import { Link } from "react-router-dom";
import DefaultLanguage from "../../../Components/setup&Configuration/languages/DefaultLanguage";
import ImportAppTranslations from "../../../Components/setup&Configuration/languages/ImportAppTranslations";
import Language from "../../../Components/setup&Configuration/languages/Language";

function LanguagesPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <DefaultLanguage />
                        <ImportAppTranslations />
                    </div>
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="align-items-center">
                            <div className="text-md-right">
                                <Link to="/admin/languages/create" className="btn btn-circle btn-info">
                                    <span>Add New Language</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Language />
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>

        </>
    )
}
export default LanguagesPage;