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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:8000/${companyid}/jnf`,
        jnfData
      );
      navigate(`/dashboard/${companyid}`);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <GeneralHeader heading="Job Notification Form" />

      <div className="w-full flex justify-center items-center">
        <form className="w-1/2">
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
          <label className="font-poppins w-full text-gray-700 text-sm font-bold">
            Bond Details
          </label>
          <input
            name="bondDetails"
            value={jnfData.bondDetails}
            type="text"
            onChange={handleChange}
            className="font-poppins mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
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

export default Jnf;
