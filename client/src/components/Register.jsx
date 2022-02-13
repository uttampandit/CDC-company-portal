import React, { useState } from "react";
import Logo from "../assets/ISM Logo.png";
import AccountIcon from "../assets/Account_Icon";

const Register = () => {
  const [companyData, setCompanyData] = useState({
    name: "",
    category: "",
    website: "",
    pocName: "",
    designation: "",
    registeredEmail: "",
    mobileNumber: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCompanyData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(companyData);

    alert("Register userflow is remaining");
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col">
        <div className="w-full flex items-center">
          <img src={Logo} alt="Logo IIT ISM" className="h-20 w-20 m-5" />
          <div></div>
          <h1 className="grow text-center p-5 font-bold font-poppins text-5xl text-portal-blue">
            Register
          </h1>
          <div className="m-5">
            <AccountIcon />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <form className="w-1/2">
            <label className="font-poppins w-full text-gray-700 text-sm font-bold">
              Company Name
            </label>
            <input
              name="name"
              value={companyData.name}
              onChange={handleChange}
              type="text"
              className="font-poppins mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label className="font-poppins w-full text-gray-700 text-sm font-bold ">
              Website
            </label>
            <input
              name="website"
              value={companyData.website}
              onChange={handleChange}
              type="text"
              pattern="www.*"
              className="font-poppins mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label className="font-poppins w-full text-gray-700 text-sm font-bold ">
              Category
            </label>
            <input
              name="category"
              value={companyData.category}
              onChange={handleChange}
              type="text"
              className="font-poppins mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <span className="divide-y-2"></span>
            <label className="font-poppins w-full text-gray-700 text-sm font-bold">
              Name
            </label>
            <input
              name="pocName"
              value={companyData.pocName}
              onChange={handleChange}
              type="text"
              className="font-poppins mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label className="font-poppins w-full text-gray-700 text-sm font-bold">
              Designation
            </label>
            <input
              name="designation"
              value={companyData.designation}
              onChange={handleChange}
              type="text"
              className="font-poppins mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label className="font-poppins w-full text-gray-700 text-sm font-bold">
              Registered Email
            </label>
            <input
              name="registeredEmail"
              value={companyData.registeredEmail}
              onChange={handleChange}
              type="email"
              className="font-poppins mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label className="font-poppins w-full text-gray-700 text-sm font-bold">
              Mobile Number
            </label>
            <input
              name="mobileNumber"
              value={companyData.mobileNumber}
              type="tel"
              onChange={handleChange}
              className="font-poppins mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              onClick={handleSubmit}
              className="font-poppins w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
