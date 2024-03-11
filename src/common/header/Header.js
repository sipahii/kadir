import React from "react";
import TopHeader from "./top-header/TopHeader";
import SearchBox from "./search-box/SearchBox";

import "./Header.css";
import Menus from "./menu/Menus";

function Header() {
  const showMenu = () => {
    alert("Show Menu");
  };
  return (
    <>
      <TopHeader />
      <SearchBox showMenu={showMenu} />
      <section className="navbarArea">
        <div className="abaris-nav">
          <div className="container">
            <nav className="navbar navbarItem navbar-expand-md navbar-light">
              <Menus />
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
