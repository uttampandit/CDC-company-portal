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
       

        <div className="flex flex-col w-3/4 ml-5">
          <div className="flex items-end">
            <h1 className="grow font-poppins text-portal-blue font-bold">
              Recent postings
            </h1>
            <div className="flex mb-1">
              <DropDownMenu />
            </div>
          </div>
          <p className="divider font-extralight mb-2"></p>
          <div className="flex flex-col justify-center items-center grow bg-white m-5 rounded-lg ">
            <h1 className="p-5">Posting </h1>
            <h1 className="p-5">Posting </h1>
            <h1 className="p-5">Posting </h1>
            <h1 className="p-5">Posting </h1>
            <h1 className="p-5">Posting </h1>
            <h1 className="p-5">Posting </h1>
          </div>
        </div>


        <div className="flex flex-col justify-start p-4 items-start grow">
        <h1 className="font-poppins text-portal-blue font-bold">
              Notifications
            </h1>
          <p className="divider w-full font-extralight mb-2"></p>
          <div className="flex flex-col bg-white p-2 mt-5 rounded-lg w-full">
            <h1 className="p-3">Notifications</h1>
            <h1 className="p-3">Notifications</h1>
            <h1 className="p-3">Notifications</h1>
            <h1 className="p-3">Notifications</h1>
            <h1 className="p-3">Notifications</h1>
            <h1 className="p-3">Notifications</h1>
            <h1 className="p-3">Notifications</h1>
            <h1 className="p-3">Notifications</h1>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashBoard;
