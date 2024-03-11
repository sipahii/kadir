import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FiMail } from "react-icons/fa";
import { BsTwitter, BsInstagram, BsPinterest } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { MdCall } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import "./Footer.css";
function Footer() {
  return (
    <>
      {/* Start Footer Section */}
      <section className="footer-section footer-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="aboutCompanyText">
                <h3>About Seller</h3>
                <p>
                  Zambia's largest Agri Inputs Marketplace Platform providing
                  Agricultural Machinery, Agriculture Equipment, Agricultural
                  Products, Poultry Equipment, Chemical Pesticides, Organic
                  Insecticides, etc. Our clientele includes Farmers, Nurseries,
                  FPOs, NGOs and other Institutional Growers.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Office Address</h3>
                </div>

                <p>
                  4th Floor, B2 Building, Cerebrum IT Park, Chadiza City, Chadiza
                  Nagar, Africa – 411014.
                </p>
                <ul className="footer-social">
                  <li>
                    <a href="#" className="facebook">
                      <FaFacebookF />
                    </a>
                  </li>

                  <li>
                    <a href="#" className="twitter">
                      <BsTwitter />
                    </a>
                  </li>

                  <li>
                    <a href="#" className="instagram">
                      <BsInstagram />
                    </a>
                  </li>

                  <li>
                    <a href="#" className="likedin">
                      <FaLinkedinIn />
                    </a>
                  </li>

                  <li>
                    <a href="#" className="pinterest">
                      <BsPinterest />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Our Support</h3>
                </div>

                <ul className="footer-quick-links">
                  <li>
                    <Link to="/">Help and Ordering</Link>
                  </li>
                  <li>
                    <Link to="/">Return & Cancellation</Link>
                  </li>
                  <li>
                    <Link to="/">Delevery Schedule</Link>
                  </li>
                  <li>
                    <Link to="tel:08889802047">Get a Call</Link>
                  </li>
                  <li>
                    <Link to="/">Online Enquiry</Link>
                  </li>
                  <li>
                    <Link to="/">My Account</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Contact info</h3>
                </div>

                <div className="footer-info-contact">
                  <div className="topIcon">
                    <GoLocation />
                    <span>
                      <h3>Location</h3>
                      2750 Quadra Street Victoria Road, <br /> Zambia
                    </span>
                  </div>
                </div>

                <div className="footer-info-contact">
                  <div className="topIcon">
                    <MdCall />
                    <span>
                      <h3>Call Us</h3>
                      <a href="tel:+882-569-756">+ 123-456-7890</a>
                    </span>
                  </div>
                </div>

                <div className="footer-info-contact">
                  <div className="topIcon">
                    <HiMail />
                    <span>
                      <h3>Email Us</h3>
                      <a href="/cdn-cgi/l/email-protection#670f020b0b082713150e010b02144904080a">
                        <span
                          className="__cf_email__"
                          data-cfemail="4733352e212b223407202a262e2b6924282a"
                        >
                          demoseller@mail.com
                        </span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Newsletter</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur aing elit, sed do
                  eiusmod tempor.
                </p>

                <form className="newsletter-form">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter your email"
                    name="EMAIL"
                    required
                    autoComplete="off"
                  />
                  <button type="submit">
                    Subscribe Now
                    <i className="flaticon-plus"></i>
                  </button>
                  <div id="validator-newsletter" className="form-result"></div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="copyright-area-content">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <p>
                    Copyright @
                    <script
                      data-cfasync="false"
                      src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
                    ></script>
                    <script>document.write(new Date().getFullYear())</script>{" "}
                    Demo Seller. All Rights Reserved by
                    <a href="https://AbarisSoftech.com/" target="_blank">
                      Demo Seller
                    </a>
                  </p>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <ul>
                    <li>
                      <Link to="/">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link to="/">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Footer Section */}
    </>
  );
}

export default Footer;
