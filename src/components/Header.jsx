import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" bg-blue-50">
        <div className="header flex justify-between items-center m-auto container ">
          <div className="logo flex ">LOGO</div>
          <div className="navbar">
            <ul className="flex gap-3">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
