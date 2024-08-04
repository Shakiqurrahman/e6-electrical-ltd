import React from "react";
import { IoCall } from "react-icons/io5";
import logo from "../../assets/images/logo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="max-width h-24 flex justify-between items-center">
        {/* logo  */}
        <div className="flex items-center">
          <img className="w-20" src={logo} alt="Logo of E6 Electronics Ltd" />
          <div>
            <h2 className="uppercase font-bold text-[26px] leading-tight text-primary">
              E6 Electrical LTD
            </h2>
            <p className="uppercase text-[12px]">
              Excellence In Electrical services
            </p>
          </div>
        </div>
        {/* contact information */}
        <div className="flex items-center gap-3">
          <IoCall className="text-4xl text-primary" />
          <span>
            <a
              className="text-[26px] font-semibold leading-none"
              href="tel:1234567890"
            >
              1234567890
            </a>
            <p className="text-sm">Mon to Sat 8:00 AM to 6:00 PM</p>
          </span>
        </div>
      </div>
      {/* navigation */}
      <Navbar />
    </header>
  );
};

export default Header;
