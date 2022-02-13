import React from "react";
import { useNavigate } from "react-router-dom";
import WelcomeLogo from "../assets/Welcome_Logo";

const Body = () => {

    const navigate = useNavigate();
  return (
    <div className="flex grow">
      <div className="flex md:flex-row sm:flex-col w-full ">
        <div className="flex flex-col justify-center items-center mb-20">
          <div className="">
            <p className="p-5 font-bold font-poppins text-5xl tracking-wide text-portal-blue">
              Hire Students from
              <br />
              IIT(ISM) Dhanbad
            </p>
          </div>

          <div className="flex w-full">
            <span className="grow">
              <button className="bg-blue-500 text-white font-poppins m-5 p-2 pl-10 pr-10 rounded-lg" onClick={() => navigate("/register")}>
                Get Started
              </button>
            </span>

            <button className="bg-blue-500 text-white font-poppins m-5 p-2 pl-10 pr-10 rounded-lg">
              Our Students
            </button>
          </div>
        </div>
        <div className="flex flex-row grow justify-center items-center">
          <WelcomeLogo />
        </div>
      </div>
    </div>
  );
};

export default Body;
