import React from "react";
import { useNavigate } from "react-router-dom";
import Heritage from "../assets/heritage_circle.png";
import CareerDevelopmentCenter from "../assets/career_development_center.png";

const Body = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col grow">
      <div className="flex md:flex-row sm:flex-col justify-center">
        <div className="flex flex-col justify-start items-start m-12">
          <div className="flex justify-center items-center mb-10">
            <p className="font-semibold font-poppins text-center leading-snug text-5xl text-portal-blue tracking-wide">
              Company Registration Portal
            </p>
          </div>

          <div className="flex w-full justify-center items-center">
            <button
              className="bg-blue-500 text-white font-poppins mr-2 p-2 pl-12 pr-12 rounded-lg"
              onClick={() => navigate("/register")}
            >
              Get Started
            </button>
            <button className="bg-blue-500 text-white font-poppins ml-2 p-2 pl-12 pr-12 rounded-lg">
              Our Students
            </button>
          </div>
        </div>
        <div className="flex grow justify-center items-start w-full">
          <div>
            <img
              className="relative rounded-full bg-clip-content w-96 h-96"
              src={Heritage}
              alt="heritage building"
            />
          </div>

          <div className="flex items-center h-screen">
            <img
              className="relative -bottom-8 rounded-full bg-clip-content w-40 h-40"
              src={CareerDevelopmentCenter}
              alt="career deveopment center"
            />
          </div>
        </div>
      </div>

      <div className="flex">
        <hr className="heritage-animation absolute -bottom-[350px] left-[250px] -z-10 -rotate-45 rounded-full border-blue-200 border-[100px] origin-[0%_50%]" />
        <hr className="career-animation absolute -bottom-[300px] left-[720px] -z-10 -rotate-45 rounded-full border-blue-300 border-[55px] origin-left" />
      </div>
    </div>
  );
};

export default Body;
