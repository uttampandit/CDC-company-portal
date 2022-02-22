import React, { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import GeneralHeader from "./GeneralHeader";

const DashBoard = () => {
  const { companyId } = useParams();
  console.log(companyId);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-blue-200">
      <div className="flex w-full items-center">
        <GeneralHeader heading="Dashboard" />
      </div>

      <div className="flex">
        <div className="flex flex-col justify-start pr-4 items-center w-1/4 ">
          <div className="flex flex-col w-full pt-3">
            <h1 className="ml-5 font-poppins text-portal-blue font-bold">
              Menu
            </h1>
            <p className="divider font-extralight ml-2 mb-5 w-full"></p>
          </div>
          <div className="flex flex-col  bg-white m-5 h-full rounded-lg">
            <h1 className="font-poppins m-4 font-semibold text-1xl text-portal-blue">
              Update Job Postings
            </h1>
            <h1 className="font-poppins m-4 font-semibold text-1xl text-portal-blue">
              Update Intern Postings
            </h1>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex items-end">
            <h1 className="grow font-poppins text-portal-blue font-bold">
              Recent postings
            </h1>
            <div className="flex mr-64  ">
              <DropDownMenu />
            </div>
          </div>
          <p className="divider mr-48 font-extralight mb-5"></p>
          <div className="flex flex-col justify-center items-center grow w-3/4 bg-white m-5 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
