import React from "react";
import BorderDesign from "../../../assets/BorderDesign";
import DirectorLogo from "../../../assets/director_image_circle.png";

const VisionMission = () => {
  return (
    <div>
      <div className="flex flex-col h-screen items-center bg-gradient-to-b from-blue-300">
        <p className="font-poppins z-20 text-portal-blue pt-10 text-5xl">
          Vision
        </p>
        <h1 className="absolute top-[520px] z-10 font-poppins text-[200px] text-blue-200/40">
          Vision
        </h1>
        <div className="flex pt-10 w-full justify-end items-center">
          <div className="pl-10 pr-10">
            <p className="text-white text-2xl p-10 rounded-md bg-white/20 font-extralight">
              To be a nationally and internationally acclaimed premier
              institution of higher technical and scientific education with
              social commitment having an ethos for intellectual excellence,
              where initiative is nurtured, where new ideas, research and
              scholarship flourish, where intellectual honesty is the norm and
              from which will emerge the leaders and innovators of tomorrow in
              the realm of technology.
            </p>
          </div>
          <img
            src={DirectorLogo}
            alt="Director Logo"
            className="h-60 w-60 z-20 m-5"
          />
        </div>
        <h1 className="absolute w-full -bottom-[800px] z-10 font-poppins text-[200px] text-start text-blue-200/20">
          Mission
        </h1>
      </div>
      <div className="h-screen bg-gradient-to-t">
        <p className="font-poppins text-portal-blue w-full pl-20 pt-5 text-5xl">Mission</p>
      </div>
    </div>
  );
};

const TopWave = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#bfdbfe"
        fill-opacity="1"
        d="M0,128L60,133.3C120,139,240,149,360,128C480,107,600,53,720,58.7C840,64,960,128,1080,160C1200,192,1320,192,1380,192L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      ></path>
    </svg>
  );
};

export default VisionMission;
