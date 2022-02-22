import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/ISM Logo.png";

const Header = () => {

  const navigate = useNavigate();

  return (
    <div className="flex w-full">
      <img src={Logo} className="h-20 w-20 m-5" onClick={() => navigate("/")}/>
      <Nav />
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex grow justify-end items-center p-5">
        <h1 className="p-5 text-portal-blue font-bold font-poppins">Home</h1>
        <h1 className="p-5 text-portal-blue font-bold font-poppins">About us</h1>
        <h1 className="p-5 text-portal-blue font-bold font-poppins">Placement Info</h1>
        <h1 className="p-5 text-portal-blue font-bold font-poppins">Contact us</h1>
      </div>
  )
}

export default Header;
