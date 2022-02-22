import React from "react";
import Logo from "../assets/ISM Logo.png";
import Hamburger from "../assets/Hamburger";

const Header = (props) => {
  return (
    <div className="flex w-full flex-col mb-10 justify-center">
      <div className="flex  w-full items-center">
        <img
          src={Logo}
          alt="Logo IIT ISM"
          className="h-20 w-20 m-5"
        />
        <h1 className="grow text-center md:font-medium   sm:font-medium sm:text-2xl font-poppins md:text-4xl text-portal-blue">
          Admin
        </h1>
        <button className="m-5">
          <Hamburger />
        </button>
      </div>
    </div>
  );
};

export default Header;
