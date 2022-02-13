import React from "react";
import AccountIcon from "../assets/Account_Icon";
import Logo from "../assets/ISM Logo.png";


const GeneralHeader = (props) => {
  return (
    <div className="flex w-full items-center">
      <img src={Logo} alt="Logo IIT ISM" className="h-20 w-20 m-5" />
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
