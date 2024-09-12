import React from "react";
import { Outlet } from "react-router-dom";
import Swayambhu from "../assets/Swayambhu.png";

const Header = () => {
  return (
    <>
      <header className=" bg-blue-50 w-full">
        <div className="container mx-auto px-4  ">
          <div className="flex justify-between items-center py-4">
            <div className="logo flex w-22 h-16 ">
              <img src={Swayambhu} alt="" />
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
