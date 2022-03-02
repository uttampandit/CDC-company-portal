import React from "react";
import Logo from "../../assets/ISM Logo.png";
import Hamburger from "../../admin_assets/Hamburger";
import HamburgerMenu from "../common/HamburgerMenu";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full flex-col mb-10 justify-center">
      <div className="flex  w-full items-center">
        <img src={Logo} alt="Logo IIT ISM" className="h-20 w-20 m-5" onClick={()=>{navigate('/admin')}} />
        <h1 className="grow text-center md:font-medium   sm:font-medium sm:text-2xl font-poppins md:text-4xl text-portal-blue">
          Admin
        </h1>
          <div className="pr-8">
          <HamburgerMenu />
          </div>
      </div>
    </div>
  );
};

export default Header;
