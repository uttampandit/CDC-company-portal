import React from "react";
import BorderDesign from "../../../assets/BorderDesign";
import DirectorLogo from "../../../assets/director_image_circle.png";
import MissionCard from "../../reusablecomponents/MissionCard";

const VisionMission = () => {
  return (
    <div>
      <div className="flex flex-col h-screen items-center bg-gradient-to-b from-blue-300">
        <p className="font-poppins z-20 text-portal-blue pt-10 text-5xl">
          Vision
        </p>
        <div className="flex pt-20 w-full justify-end items-center">
          <div className="pl-10 pr-10">
            <p className="text-gray-500 text-2xl p-10 rounded-md font-extralight bg-white/60 shadow-2xl">
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
        <h1 className="absolute w-full -bottom-[800px] font-poppins text-[200px] text-start text-blue-200/20">
          Mission
        </h1>
      </div>
      <div className="h-screen bg-gradient-to-t">
        <p className="font-poppins z-20 text-portal-blue w-full pl-20 pt-5 text-5xl">
          Mission
        </p>
        <div className="flex justify-evenly pt-32 pl-10">
          <MissionCard
            mission={`To educate and train manpower in various disciplines of engineering and technology, management
        , applied sciences and applied arts at the graduate, postgraduate and research levels`}
          />
          <MissionCard
            mission={`To participate directly in the planning and solving of engineering and managerial problems of relevance to 
            Indian industry and to society at large.`}
          />
          <MissionCard
            mission={`To develop and conduct continuing education programmes for practicing engineers and managers.`}
          />
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
