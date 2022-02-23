import React from "react";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col grow">
      <div className="flex md:flex-row sm:flex-col justify-center m-10">
        <div className="flex p-12 w-2/3 flex-col justify-center items-center bg-white/60 rounded-xl">
          <div className="flex justify-center items-center mb-10">
              <p className="fadeInDown flex font-semibold font-poppins text-center leading-snug text-6xl text-portal-blue tracking-wide">
                Company Registration Portal
              </p>
          </div>

          <div className="fadeInUp flex w-full justify-center items-center">
            <button
              className="bg-blue-500 text-white font-poppins mr-2 p-2 pl-10 pr-10 rounded-lg"
              onClick={() => navigate("/register")}
            >
              Get Started
            </button>
            <button className="bg-blue-500 text-white font-poppins ml-2 p-2 pl-12 pr-12 rounded-lg">
              Explore
            </button>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Body;
