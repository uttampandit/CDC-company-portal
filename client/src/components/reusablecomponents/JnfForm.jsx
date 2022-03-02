
import React, { useState, useEffect } from "react";

import GeneralHeader from "./GeneralHeader";
import GeneralInputField from "./GeneralInputField";

const JnfForm = (props) => {
  const { jnfdata, handlejnfdata, actionLabel } = props;

  const [jnfData, setJnfData] = useState({
    ...jnfdata,
  });

  useEffect(() => {
    setJnfData(jnfdata);
  }, []);

  const handleJnfChange = (e) => {
    const target = e.target;
    const name = e.target.name;
    const value = target.value;

    setJnfData((prevState) => ({ ...prevState, [name]: value }));
  };
  console.log(jnfData);
  const handleJnfSubmit = async (e) => {
    await handlejnfdata(e, jnfData);
    console.log(jnfdata);
  };

  return (
    <div className="flex flex-col h-full justify-center items-center w-full bg-gradient-to-t from-blue-200">
      <GeneralHeader />
      <div className="flex flex-col mb-10 grow justify-center w-2/3 p-5 bg-white/60 rounded-md">
        <h1 className="font-poppins text-gray-700 text-1xl font-bold">
          Job Notification Form
        </h1>
        <p className="divider font-light mb-5">Job Details</p>
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

          <p className="divider font-light mb-5 ">Salary Details</p>

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
          <div className="flex w-full justify-center">
            <button
              onClick={handleJnfSubmit}
              className="font-poppins w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {actionLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JnfForm;
