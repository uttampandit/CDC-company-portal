import React, { useEffect, useState } from "react";
import GeneralHeader from "./GeneralHeader";
import GeneralInputField from "./GeneralInputField";

const   RegisterForm = (props) => {
  const { companydata, handleCompanyData, actionLabel } = props;

  const [companyData, setCompanyData] = useState({
    ...companydata,
  });

  useEffect(() => {
    setCompanyData(companydata);
  }, [companydata]);

  const handleCompanyChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCompanyData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleCompanySubmit = async (e) => {
    e.preventDefault();
      console.log(companyData);
    await handleCompanyData(e, companyData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-blue-200">
      <div className="flex flex-col">
        <GeneralHeader />
        <div className="flex w-full justify-center pl-10 pr-10 mb-10">
          <div className="flex flex-col w-2/3 bg-white/60 p-5 rounded-md justify-center ml-10">
            <h1 className="font-poppins text-portal-blue text-1xl font-bold">
              Register
            </h1>
            <form className="w-full">
              <p className="divider font-extralight mb-5">Company Details</p>
              <GeneralInputField
                label={`Company Name`}
                name="name"
                value={companyData.name}
                onChange={handleCompanyChange}
              />
              <GeneralInputField
                label={`Website`}
                name="website"
                value={companyData.website}
                onChange={handleCompanyChange}
              />
              <GeneralInputField
                label={`Category`}
                name="category"
                value={companyData.category}
                onChange={handleCompanyChange}
              />

              <p className="divider font-extralight mb-2 mt-2">
                Personnel Details
              </p>
              <GeneralInputField
                label={`Name`}
                name="pocName"
                value={companyData.pocName}
                onChange={handleCompanyChange}
              />
              <GeneralInputField
                label={`Designation`}
                name="designation"
                value={companyData.designation}
                onChange={handleCompanyChange}
              />
              <GeneralInputField
                label={`Registered Email`}
                name="registeredEmail"
                value={companyData.registeredEmail}
                onChange={handleCompanyChange}
              />
              <GeneralInputField
                label={`Mobile Number`}
                name="mobileNumber"
                value={companyData.mobileNumber}
                onChange={handleCompanyChange}
              />
              <div className="flex w-full justify-center">
                <button
                  onClick={handleCompanySubmit}
                  className="font-poppins mt-5 mb-5 w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  {actionLabel}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
