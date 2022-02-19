import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GeneralHeader from "./GeneralHeader";

import { useParams } from "react-router-dom";
import axios from "axios";

const Jnf = () => {
  const navigate = useNavigate();
  const { companyid } = useParams();
  const [jnfData, setJnfData] = useState({
    designation: "",
    placeOfPosting: "",
    description: "",
    ctcInLpa: "",
    ctcBreakup: "",
    bondDetails: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setJnfData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const req = axios.post(
        `http://localhost:8000/company/${companyid}/jnf`,{
        jnfData,}
      );
      navigate(`/dashboard/${companyid}`);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="flex flex-col w-full bg-gradient-to-t from-blue-200">
      <GeneralHeader />

      <div className="flex flex-col justify-center w-1/2 p-5">
        <h1 className="font-poppins text-gray-700 text-1xl font-bold">
          Job Notification Form
        </h1>
        <p className="divider font-extralight mb-5 mt-2"></p>
        <form className="w-full">
          <label className="font-poppins w-full text-gray-700 text-sm font-bold">
            Designation
          </label>
          <input
            name="designation"
            value={jnfData.designation}
            type="text"
            onChange={handleChange}
            className="font-poppins mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label className="font-poppins w-full text-gray-700 text-sm font-bold">
            Place of posting
          </label>
          <input
            name="placeOfPosting"
            value={jnfData.placeOfPosting}
            type="text"
            onChange={handleChange}
            className="font-poppins mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label className="font-poppins w-full text-gray-700 text-sm font-bold">
            Description
          </label>
          <input
            name="description"
            value={jnfData.description}
            type="text"
            onChange={handleChange}
            className="font-poppins mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label className="font-poppins w-full text-gray-700 text-sm font-bold">
            CTC in LPA
          </label>
          <input
            name="ctcInLpa"
            value={jnfData.ctcInLpa}
            type="text"
            onChange={handleChange}
            className="font-poppins mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label className="font-poppins w-full text-gray-700 text-sm font-bold">
            CTC breakup
          </label>
          <input
            name="ctcBreakup"
            value={jnfData.ctcBreakup}
            type="text"
            onChange={handleChange}
            className="font-poppins mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <div className="flex items-center mb-3">
          <label className="font-poppins w-32 text-gray-700 text-sm font-bold">
            Bond Details
          </label>
          <input
            name="bondDetails"
            value={jnfData.bondDetails}
            type="text"
            onChange={handleChange}
            className="font-poppins w-full mr-10 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          </div>
          
          <button
            onClick={handleSubmit}
            className="mt-4 font-poppins w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Preview
          </button>
        </form>
      </div>
    </div>
  );
};

export default Jnf;
