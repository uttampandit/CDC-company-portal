import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GeneralHeader from "./GeneralHeader";
import axios from "axios";

const Inf = () => {
  const navigate = useNavigate();
  const { companyid } = useParams();
  const [infData, setInfData] = useState({
    designation: "",
    typeOfInternship:
      "Jan-June 2022 Dual Degree/ Integrated M. Tech courses only (2022 batch)",
    description:
      "Jan-June 2022 Dual Degree/ Integrated M. Tech courses only (2022) batch",
    modeOfInternship: "Virtual",
    placeOfPosting: "",
    stipendPerMonth: "",
    isPPO: false,
    ctcIfPpo: "",
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setInfData((prevState) => ({ ...prevState, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:8000/${companyid}/inf`,
        infData
      );
      navigate(`/dashboard/${companyid}`);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="flex flex-col w-full">
      <GeneralHeader heading="Internship Notification Form" />

      <div className="w-full flex justify-center items-center">
        <form className="w-1/2">
          <label className="font-poppins w-full text-gray-700 text-sm font-bold">
            Designation
          </label>
          <input
            name="designation"
            value={infData.designation}
            type="text"
            onChange={handleChange}
            className="font-poppins mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label className="font-poppins w-full text-gray-700 text-sm font-bold">
            Description
          </label>
          <input
            name="description"
            value={infData.description}
            type="text"
            onChange={handleChange}
            className="font-poppins mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label className="font-poppins w-full text-gray-700 text-sm font-bold">
            Type of internship
          </label>
          <select
            name="typeOfInternship"
            value={infData.typeOfInternship}
            onChange={handleChange}
            className="mb-3 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option>
              Jan-June 2022 Dual Degree/ Integrated M. Tech courses only (2022
              batch)
            </option>
            <option>

              May-July 2022 Pre-final year students of ALL courses (2023 batch)
            </option>
            <option>
              July-Dec 2022 M. Tech/ MBA-Business Analytics courses only (2023
              batch)
            </option>
          </select>
          <label className="font-poppins w-full text-gray-700 text-sm font-bold">
            Place of posting
          </label>
          <input
            name="placeOfPosting"
            value={infData.placeOfPosting}
            type="text"
            onChange={handleChange}
            className="font-poppins mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label className="font-poppins w-full text-gray-700 text-sm font-bold">
            Mode of Internship
          </label>
          <select
            name="modeOfInternship"
            value={infData.modeOfInternship}
            onChange={handleChange}
            className="mb-3 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option>Virtual</option>
            <option>In person</option>
          </select>
          <label className="font-poppins w-full text-gray-700 text-sm font-bold">
            Stipend per month
          </label>
          <input
            name="stipendPerMonth"
            value={infData.stipendPerMonth}
            type="text"
            onChange={handleChange}
            className="font-poppins mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label className="font-poppins w-full text-gray-700 text-sm font-bold mr-2">
            Provision for PPO
          </label>

          <input
            name="isPPO"
            type="checkbox"
            checked={infData.isPPO}
            onChange={handleChange}
          />{" "}
          <br />
          {infData.isPPO && (
            <div className="mt-2 mb-2">
              <label className="font-poppins w-full text-gray-700 text-sm font-bold">
                CTC if PPO
              </label>
              <input
                name="ctcIfPpo"
                checked={infData.ctcIfPpo}
                type="text"
                onChange={handleChange}
                className="font-poppins mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          )}
          <button
            onClick={handleSubmit}
            className="font-poppins w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Inf;
