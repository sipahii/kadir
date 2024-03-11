import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import eng from "../../../assets/img/header/en.png";
import bangla from "../../../assets/img/header/bd.png";
import saudi from "../../../assets/img/header/sa.png";
import "./TopHeader.css";
import { Link } from "react-router-dom";
function TopHeader() {
  return (
    <>
      <div className="topHeaderSec">
        <div className="container">
          <div className="topHeaderInfo">
            {/* <div className="languageOption">
              <div className="countryOption">
                <select name="" id="">
                  <option value="america">America</option>
                  <option value="india">India</option>
                </select>
              </div>
              <div className="rupeesOption">
                <select name="" id="">
                  <option value="america">America</option>
                  <option value="india">India</option>
                </select>
              </div>
            </div> */}
            <div className="freeReturn">
              <p>free return, standard shipping orders ZK99+</p>
            </div>
            <div className="rightList">
              <div className="pageLinks">
                <ul>
                  <li>
                    <Link to="/">My Account</Link>
                  </li>
                  <li>
                    <Link to="/">About us </Link>
                  </li>
                  <li>
                    <Link to="/">Blog</Link>
                  </li>
                  <li>
                    <Link to="/">My Wishlist</Link>
                  </li>
                  <li>
                    <Link to="/">Cart</Link>
                  </li>
                  <li>
                    <Link to="/">Login </Link>
                  </li>
                </ul>
              </div>
              <div className="miscel">
                <div className="optionSelect">
                  <div className="lang">
                    <select name="" id="">
                      <option value="england">
                        {" "}
                        England

                      </option>
                      <option value="bangladesh">
                        {" "}
                        Bangladesh

                      </option>
                      <option value="saudi">
                        {" "}
                        Saudi

                      </option>
                    </select>
                  </div>
                  <div className="rupees">
                    <select name="" id="">
                      <option value="america">USD</option>
                      <option value="india">India</option>
                    </select>
                  </div>
                </div>
                <div className="socialMedia">
                  <ul>
                    <li>
                      <a href="#">
                        <GrFacebookOption />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <AiOutlineTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <AiOutlineInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TopHeader;
