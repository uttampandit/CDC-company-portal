import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GeneralHeader from "./GeneralComponents/GeneralHeader";
import GeneralInputField from "./GeneralComponents/GeneralInputField";
import axios from "axios";

const Jnf = () => {
  const navigate = useNavigate();

  const { companyId } = useParams();

  const [jnfData, setJnfData] = useState({
    designation: "",
    placeOfPosting: "",
    description: "",
    ctcInLpa: "",
    ctcBreakup: "",
    bondDetails: "",
  });

  const handleJnfChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setJnfData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleJnfSubmit = async (e) => {
    e.preventDefault();

    try {
      const req = await axios.post(
        `http://localhost:8000/company/${companyId}/jnf`,
        jnfData
      );
      console.log(req);
      navigate(`/dashboard/${companyId}`);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-gradient-to-t from-blue-200">
      <GeneralHeader />
      <div className="flex flex-col grow justify-center w-1/2 p-5">
        <h1 className="font-poppins text-gray-700 text-1xl font-bold">
          Job Notification Form
        </h1>
        <p className="divider font-extralight mb-5 mt-2"></p>
        <form className="w-full">
          <GeneralInputField
            label="Designation"
            name="designation"
            value={jnfData.designation}
            onChange={handleJnfChange}
          />
          <GeneralInputField
            label="Place of posting"
            name="placeOfPosting"
            value={jnfData.placeOfPosting}
            onChange={handleJnfChange}
          />
          <GeneralInputField
            label="Description"
            name="description"
            value={jnfData.description}
            onChange={handleJnfChange}
          />
          <GeneralInputField
            label="CTC in LPA"
            name="ctcInLpa"
            value={jnfData.ctcInLpa}
            onChange={handleJnfChange}
          />
          <GeneralInputField
            label="CTC breakup"
            name="ctcBreakup"
            value={jnfData.ctcBreakup}
            onChange={handleJnfChange}
          />
          <GeneralInputField
            label="Bond Details"
            name="bondDetails"
            value={jnfData.bondDetails}
            onChange={handleJnfChange}
          />

          <button
            onClick={handleJnfSubmit}
            className="mt-4 font-poppins w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Jnf;
