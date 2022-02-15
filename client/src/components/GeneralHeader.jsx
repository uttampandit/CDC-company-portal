import React from "react";
import { useNavigate } from "react-router-dom";
import AccountIcon from "../assets/Account_Icon";
import Logo from "../assets/ISM Logo.png";


const GeneralHeader = (props) => {

  const navigate = useNavigate();
  return (
    <div className="flex w-full items-center">
      <img src={Logo} alt="Logo IIT ISM" alt="ism logo" className="h-20 w-20 m-5" onClick={navigate("/")}/>
      <h1 className="grow text-center p-5 font-bold font-poppins text-5xl text-portal-blue">
        {props.heading}
      </h1>
      <div className="m-5">
        <AccountIcon />
      </div>
    </div>
  );
};

export default GeneralHeader;
