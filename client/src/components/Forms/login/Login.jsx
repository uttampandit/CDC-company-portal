import React from "react";
import GeneralInputField from "../../reusablecomponents/GeneralInputField";
import GeneralHeader from "../../reusablecomponents/GeneralHeader";

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen justify-start items-center bg-gradient-to-t from-blue-200">
      <GeneralHeader />
      <div className="flex w-full grow flex-col mb-10 justify-center items-center">

      <div className="flex flex-col w-1/3 p-5 bg-white/60 rounded-md">
        <h1 className="font-poppins text-gray-700 text-1xl font-bold text-center">Login</h1>
        <p className="divider font-light mb-5"></p>
        <GeneralInputField
          label={`Email`}
          name="email"
          value={{}}
          onChange={{}}
        />
        <GeneralInputField
          label={`Password`}
          name="password"
          value={{}}
          onChange={{}}
        />
        <div className="flex justify-evenly pl-10 pr-10">
          <button className="bg-blue-400 p-2 font-poppins text-white rounded-md">Sign Up</button>
          <button className="bg-blue-400 p-2 font-poppins text-white rounded-md">Login</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
