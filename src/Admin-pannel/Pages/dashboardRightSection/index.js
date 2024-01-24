// import AsideBar from "../../../Customer-Panal/components/dashbord/AsideBar";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
// import TopNavSeller from "../../../venderFile/vender-components/same/TopNavSeller";
// import AsideSeller from "../../../venderFile/vender-components/asideSeller/AsideSeller";
// import TopNavSeller from "../../../venderFile/vender-components/same/TopNavSeller";
import AsideAdmin from "../../Components/asideAdim/AsideAdmin";
import TopNavSeller from "../../Components/same/TopNavSeller";

function DashboardRightSectionAdmin({ setshow }) {
  const [isActive, setIsActive] = useState("");

  const isLogin = window.localStorage.getItem("adminIslogin");
  const location = useLocation();
  useEffect(() => {
    setshow(false);
  }, []);

  useEffect(() => {
    hideOverlay();
  }, [location.pathname]);

  const showSidebar = () => {
    setIsActive(!isActive);
  };
  const hideOverlay = () => {
    setIsActive(false);
  };
  return (
    <>
      <div className="aiz-main-wrapper">
        <aside className="navigation-drawer">
          <div className="content">
            <hr></hr>
            <div onClick={showSidebar}>All Modules</div>
            <hr></hr>
          </div>
        </aside>
        {isActive && (
          <div className="overLayScreen" onClick={hideOverlay}>
            {" "}
          </div>
        )}
        <AsideAdmin isActive={isActive} />

        <div className="aiz-content-wrapper aiz-main-wrapper-2">
          <TopNavSeller showSidebar={showSidebar} />
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
export default DashboardRightSectionAdmin;
