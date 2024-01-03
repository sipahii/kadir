import AboutWidget from '../../../Components/websiteSetup/footerComp/AboutWidget';
import ContactInfoWidget from '../../../Components/websiteSetup/footerComp/ContactInfoWidget';
import CopyRightWidget from '../../../Components/websiteSetup/footerComp/CopyRIghtWidget';
import LinkWidget from '../../../Components/websiteSetup/footerComp/LinkWidget';
import PaymentMethodWidget from '../../../Components/websiteSetup/footerComp/PaymentMethodWidget';
import SocialLinkWidget from '../../../Components/websiteSetup/footerComp/SocialLinkWidget';

function FooterPage() {

   
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col">
                                <h1 className="h3">Website Footer</h1>
                            </div>
                        </div>
                    </div>
                    <ul className="nav nav-tabs nav-fill border-light">
                        <li className="nav-item">
                            <a className="nav-link text-reset  active  py-3" href="https://mmslfashions.in/admin/website/footer?lang=en">
                                <img src="https://mmslfashions.in/public/assets/img/flags/en.png" height={11} className="mr-1" />
                                <span>English</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-reset  bg-soft-dark border-light border-left-0  py-3" href="https://mmslfashions.in/admin/website/footer?lang=bd">
                                <img src="https://mmslfashions.in/public/assets/img/flags/bd.png" height={11} className="mr-1" />
                                <span>Bangla</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-reset  bg-soft-dark border-light border-left-0  py-3" href="https://mmslfashions.in/admin/website/footer?lang=sa">
                                <img src="https://mmslfashions.in/public/assets/img/flags/sa.png" height={11} className="mr-1" />
                                <span>Arabic</span>
                            </a>
                        </li>
                    </ul>
                    <div className="card">
                        <div className="card-header">
                            <h6 className="fw-600 mb-0">Footer Widget</h6>
                        </div>
                        <div className="card-body">
                            <div className="row gutters-10">
                                <AboutWidget />
                                <ContactInfoWidget />
                                <LinkWidget />

                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h6 className="fw-600 mb-0">Footer Bottom</h6>
                        </div>
                        <form action="https://mmslfashions.in/admin/business-settings/update" method="POST" encType="multipart/form-data">
                            <input type="hidden" name="_token" defaultValue="MfWj9eEof7fNq0mKB42pyG49sPDPkHAVyVSS7UBT" />           <div className="card-body">
                                <CopyRightWidget />
                                <SocialLinkWidget />
                                <PaymentMethodWidget />
                                <div className="text-right">
                                    <button type="submit" className="btn btn-primary" fdprocessedid="ggbf2m">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>

        </>
    )
}
export default FooterPage;