import React from "react";
import GeneralInputField from "../../reusablecomponents/GeneralInputField";
import GeneralHeader from "../../reusablecomponents/GeneralHeader";

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center w-full bg-gradient-to-t from-blue-200">
      <GeneralHeader />
      <div className="flex flex-col mb-10 grow justify-start w-2/3 p-5 bg-white/60 rounded-md">
        <h1 className="font-poppins text-gray-700 text-1xl font-bold">Login</h1>
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
        <div className="flex w-full justify-evenly pl-10 pr-10">
          <button className="bg-blue-400 p-2 font-poppins text-white rounded-md">Login</button>
          <button className="bg-blue-400 p-2 font-poppins text-white rounded-md">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
