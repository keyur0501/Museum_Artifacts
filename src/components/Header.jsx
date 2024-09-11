import React from "react";
import { Link, Outlet } from "react-router-dom";
import damru from "../assets/Damru.png";
import Swayambhu from "../assets/Swayambhu.png";

const Header = () => {
  return (
    <>
      <header className=" bg-blue-50 w-full">
        <div className="container mx-auto px-4  ">
          <div className="flex justify-between items-center py-4">
            <div className="logo flex w-20 h-10 ">
              {/* <img src={damru} alt="" />
              <img src={Swayambhu} alt="" /> */}
              logo
            </div>
            <nav className="navbar">
              <Link to="/" className="text-blue-600 hover:underline">
                Home
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
