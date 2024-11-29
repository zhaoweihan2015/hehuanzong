import React from "react";
import { Outlet } from "react-router-dom";
import "./index.css"
import HeroInfoPanel from "../../components/HeroProfile";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <div className="left-sidebar">
        <HeroInfoPanel />
      </div>
      <div className="main-content">
        <Outlet />
        <div className="footer">
          <p>Footer Content</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
