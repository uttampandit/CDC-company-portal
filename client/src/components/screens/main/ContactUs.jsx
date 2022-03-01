import React from "react";
import Logo from "../../../assets/ISM Logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";
import NewLogo from "../../../assets/New Logo.png";

const ContactUs = () => {
  return (
    <div className="flex flex-col h-3/4 w-full items-center bg-portal-blue">
      <div className="flex h-full pt-20 items-start">
        <div className="flex flex-col">
          <img src={Logo} alt="Logo IIT ISM" className="h-40 w-40" />
          <img src={NewLogo} alt="Logo IIT ISM" className="w-40" />
        </div>
        <div className="flex flex-col h-full items-start  w-64">
          <p className="font-poppins text-white font-bold">Students</p>
          <p className="text-white hover:text-gray-400 hover:underline">
            Activities
          </p>
          <p className="text-white hover:text-gray-400 hover:underline">
            Top Achievers
          </p>
          <p className="text-white hover:text-gray-400 hover:underline">
            Gallery
          </p>
        </div>
        <div className="flex flex-col h-full items-start w-64">
          <p className="font-poppins text-white font-bold">Academics</p>
          <p className="text-white hover:text-gray-400 hover:underline">
            Departments
          </p>
          <p className="text-white hover:text-gray-400 hover:underline">
            Research Activities
          </p>
        </div>
        <div className="flex flex-col h-full items-start w-64">
          <p className="font-poppins text-white font-bold">Placement</p>
          <p className="text-white hover:text-gray-400 hover:underline ">
            Placement Procedure
          </p>
          <p className="text-white hover:text-gray-400 hover:underline">
            Previour Placement Reports
          </p>
          <p className="text-white hover:text-gray-400 hover:underline">
            Important Dates
          </p>
        </div>
        <div className="flex flex-col h-full items-start w-64">
          <p className="font-poppins text-white font-bold">Contact Us</p>
          <p className="text-white">
            Police Line Road, Main Campus IIT (ISM), near Rani Bandh, Hirapur,
            Sardar Patel Nagar, Dhanbad, Jharkhand 826004
          </p>
          <div className="flex text-white justify-between w-3/4 pt-4">
            <InstagramIcon className={`mr-3`} />
            <TwitterIcon />
            <FacebookIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>
      <div className="pl-8 pr-8 w-full">
        <p className="border-[1px] w-full border-gray-400 font-extralight mb-2"></p>
      </div>
      <div className="text-white mb-2">
        <CopyrightIcon className={`pr-1`} />
        IIT (ISM) All Rights Reserved
      </div>
    </div>
  );
};

export default ContactUs;
