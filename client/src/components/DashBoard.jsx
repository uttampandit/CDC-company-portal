import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import GeneralHeader from "./ResusableComponents/GeneralHeader";
import axios from "axios";
import Posting from "./ResusableComponents/Posting"

const DashBoard = () => {
  const { companyId } = useParams();
  const [companyData, setCompanyData] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const res = await axios.get(`http://localhost:8000/company/${companyId}`);
    setCompanyData({ ...res.data });
    setIsLoading(false);
  }, []);

  console.log(companyData.JNF);

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
          <div className="flex flex-col grow bg-white mr-5 mt-5 mb-5 rounded-lg ">
            <div className="overflow-y-auto flex flex-col w-full h-96">
              {isLoading ? <h1>Loading</h1> : companyData.JNF.map((posting) => <Posting posting={posting} />)  }
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start p-4 items-start grow">
          <h1 className="font-poppins text-portal-blue font-bold">
            Notifications
          </h1>
          <p className="divider w-full font-extralight mb-2"></p>
          <div className="flex flex-col overflow-y-auto bg-white h-96 p-2 mt-5 rounded-lg w-full">
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
