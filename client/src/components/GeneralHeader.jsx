import React from "react";
import { useNavigate } from "react-router-dom";
import AccountIcon from "../assets/Account_Icon";
import Logo from "../assets/ISM Logo.png";

const GeneralHeader = (props) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mb-10 justify-center">
      <div className="flex  w-full items-center">
        <img
          src={Logo}
          alt="Logo IIT ISM"
          className="h-20 w-20 m-5"
          onClick={() => navigate("/")}
        />
        <h1 className="grow text-center md:font-medium   sm:font-medium sm:text-2xl font-poppins md:text-4xl text-portal-blue">
          Company Registration Portal
        </h1>
      </div>
    </div>
  );
};

export default GeneralHeader;
