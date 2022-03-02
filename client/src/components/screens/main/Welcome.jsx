import React from "react";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col grow">
      <div className="flex md:flex-row sm:flex-col justify-center m-10">
        <div className="flex p-12 w-2/3 flex-col justify-center items-center bg-white/60 rounded-xl">
          <div className="flex justify-center items-center mb-10">
            <div className="fadeInDown flex flex-col justify-center items-center">
              <p className="flex font-semibold font-poppins text-center leading-snug text-7xl text-portal-blue tracking-wide pb-4">
                Company
                Portal
              </p>
              <p className="flex font-medium pb-4 font-poppins text-center leading-snug text-3xl text-portal-blue   tracking-wide">
                Career Development Center <br /> IIT(ISM) Dhanbad
              </p>
            </div>
          </div>

          <div className="fadeInUp flex w-full justify-center items-center">
            <button
              className="bg-blue-500 text-white w-1/2 font-poppins mr-2 p-2 pl-10 pr-10 rounded-lg"
              onClick={() => navigate("/login")}
            >
              Get Started
            </button>
             
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Body;
