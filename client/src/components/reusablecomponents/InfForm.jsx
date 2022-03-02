import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GeneralHeader from "./GeneralHeader";
import GeneralInputField from "./GeneralInputField";

const InfForm = (props) => {
  const { infdata, handleinfdata, actionLabel } = props;
  const [infData, setInfData] = useState({
    ...infdata,
  });
  
  useEffect(() => {
    setInfData(infdata);
  }, [infdata]);

  const handleInfChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setInfData((prevState) => ({ ...prevState, [name]: value }));
  };
  console.log(infData);
  const handleInfSubmit = async (e) => {
    await handleinfdata(e, infData);
  };

  return (
    <div className="flex flex-col w-full h-full bg-gradient-to-t from-blue-200">
      <GeneralHeader />

      <div className="flex w-full pb-10 justify-center items-center">
        <div className="flex flex-col w-2/3 bg-white/60 rounded-md p-5">
          <h1 className="font-poppins text-gray-700 text-1xl font-bold">
            Internship Notification Form
          </h1>
          <p className="divider font-extralight mb-5 mt-2"></p>
          <form className="w-full">
            <GeneralInputField
              label="Designation"
              name="designation"
              value={infData.designation}
              onChange={handleInfChange}
            />
            <div className="flex mb-7 items-center">
              <label className="font-poppins w-32 text-gray-700 text-sm font-bold">
                Type of internship
              </label>
              <select
                name="typeOfInternship"
                value={infData.typeOfInternship}
                onChange={handleInfChange}
                className="ml-3 mr-10 mb-3 block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option>
                Jan-June 2022 Dual Degree/ Integrated M. Tech courses only(2022 batch)
                </option>
                <option>
                  May-July 2022 Pre-final year students of ALL courses (2023 batch)
                </option>
                <option>
                  July-Dec 2022 M. Tech/ MBA-Business Analytics courses only (2023 batch)
                </option>
              </select>
            </div>
            <GeneralInputField
              label="Description"
              name="description"
              value={infData.description}
              onChange={handleInfChange}
            />
            <div className="flex mb-7 items-center">
              <label className="font-poppins w-32 text-gray-700 text-sm font-bold">
                Mode of Internship
              </label>
              <select
                name="modeOfInternship"
                value={infData.modeOfInternship}
                onChange={handleInfChange}
                className="ml-3 mr-10 mb-3 block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option>Virtual</option>
                <option>In person</option>
              </select>
            </div>
            <GeneralInputField
              label="Place of posting"
              name="placeOfPosting"
              value={infData.placeOfPosting}
              onChange={handleInfChange}
            />
            <GeneralInputField
              label="Stipend per month"
              name="stipendPerMonth"
              value={infData.stipendPerMonth}
              onChange={handleInfChange}
            />
            <div className="mb-7 ">
              <label className="w-32 font-poppins text-gray-700 text-sm font-bold mr-2">
                Provision for PPO
              </label>

              <input
                name="isPPO"
                type="checkbox"
                checked={infData.isPPO}
                onChange={handleInfChange}
                className="ml-2"
              />
            </div>
            {infData.isPPO && (
              <GeneralInputField
                label="CTC if PPO"
                name="ctcIfPpo"
                value={infData.ctcIfPpo}
                onChange={handleInfChange}
              />
            )}

            <div className="flex w-full justify-center">
              <button
                onClick={handleInfSubmit}
                className="font-poppins w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {actionLabel}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InfForm;
