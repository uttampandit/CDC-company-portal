import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "../../assets/ISM Logo.png";
import AccountDropDownMenu from "./AccountDropDownMenu";
import AuthContext from "../../context/AuthContext";
const GeneralHeader = (props) => {
  const {companyId} = useParams();
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="flex w-full flex-col mb-10 justify-center">
      <div className="flex  w-full items-center">
        <img
          src={Logo}
          alt="Logo IIT ISM"
          className="h-20 w-20 m-5"
          onClick={() =>{
            if(ctx.isLoggedIn){
              navigate(`/dashboard/${companyId}`);
            }else{
              navigate('/');
            }
          }}
        />
        <h1 className="grow text-center md:font-medium   sm:font-medium sm:text-2xl font-poppins md:text-4xl text-portal-blue">
          Company Registration Portal
        </h1>
        <div className="m-5">
          <AccountDropDownMenu />
        </div>
      </div>
    </div>
  );
};

export default GeneralHeader;
