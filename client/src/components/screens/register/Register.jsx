import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import axios from "axios";
import GeneralHeader from "../../reusablecomponents/GeneralHeader";

const Register = ({ actionLabel }) => {
  const ctx = useContext(AuthContext);
  const [companyData, setCompanyData] = useState({
    name: "",
    category: "",
    website: "",
    pocName: "",
    designation: "",
    registeredEmail: "",
    mobileNumber: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCompanyData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();

    console.log(companyData);

    try {
      const req = await axios.post("http://localhost:8000/company/create", {
        companyData,
      });
      console.log(req);
      const {companyId,token} = req.data;
      console.log("This is registered company Id : " + companyId);
      console.log("token :",token);
      ctx.Login(token);
      navigate(`/dashboard/${companyId}`);
    } catch (e) {
      console.log(e);
    }
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
              <div className="flex item-center pr-4">
                <label className="font-poppins w-32 text-gray-700 text-sm font-bold">
                  Company Name
                </label>
                <input
                  name="name"
                  value={companyData.name}
                  onChange={handleChange}
                  type="text"
                  className="w-full text-sm font-poppins shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                />
              </div>

              <br />
              <div className="flex items-center pr-4 ">
                <label className="flex font-poppins w-32 text-gray-700 text-sm font-bold">
                  Website
                </label>

                <input
                  name="website"
                  value={companyData.website}
                  onChange={handleChange}
                  type="text"
                  pattern="www.*"
                  className="w-full text-sm font-poppins shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                />
              </div>

              <br />
              <div className="flex items-center pr-4">
                <label className="font-poppins w-32 text-gray-700 text-sm font-bold ">
                  Category
                </label>
                <input
                  name="category"
                  value={companyData.category}
                  onChange={handleChange}
                  type="text"
                  className="font-poppins text-sm w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                />
              </div>
              <br />
              <p className="divider font-extralight mb-2 mt-2">
                Personnel Details
              </p>
              <div className="flex items-center pr-4">
                <label className="flex font-poppins w-32 text-gray-700 text-sm font-bold ">
                  Name
                </label>
                <input
                  name="pocName"
                  value={companyData.pocName}
                  onChange={handleChange}
                  type="text"
                  className="mt-2 mb-5 text-sm font-poppins w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center pr-4 mb-5">
                <label className="flex font-poppins w-32 text-gray-700 text-sm font-bold">
                  Designation
                </label>
                <input
                  name="designation"
                  value={companyData.designation}
                  onChange={handleChange}
                  type="text"
                  className="font-poppins text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center pr-4 mb-5">
                <label className="font-poppins w-32 text-gray-700 text-sm font-bold">
                  Registered Email
                </label>
                <input
                  name="registeredEmail"
                  value={companyData.registeredEmail}
                  onChange={handleChange}
                  type="email"
                  className="font-poppins text-sm w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center pr-4 mb-3">
                <label className="font-poppins w-32 text-gray-700 text-sm font-bold">
                  Mobile Number
                </label>
                <input
                  name="mobileNumber"
                  value={companyData.mobileNumber}
                  type="tel"
                  onChange={handleChange}
                  className="font-poppins text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center pr-4 mb-3">
                <label className="font-poppins w-32 text-gray-700 text-sm font-bold">
                  Password
                </label>
                <input
                  name="password"
                  value={companyData.password}
                  type="tel"
                  onChange={handleChange}
                  className="font-poppins text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex w-full justify-center">
                <button
                  onClick={handleSubmit}
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

export default Register;
