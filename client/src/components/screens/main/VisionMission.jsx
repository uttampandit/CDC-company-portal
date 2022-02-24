import React from "react";
import BorderDesign from "../../../assets/BorderDesign";

const VisionMission = () => {
  return (
    <div className="flex flex-col h-screen items-center bg-gradient-to-b from-blue-300">
        <h1 className="font-poppins text-3xl p-5">Vision & Mission</h1>
        <BorderDesign />
        
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
