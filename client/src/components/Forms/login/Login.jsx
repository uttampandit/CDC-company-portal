import React, { useState, useContext } from "react";
import GeneralInputField from "../../reusablecomponents/GeneralInputField";
import GeneralHeader from "../../reusablecomponents/GeneralHeader";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import axios from "axios";

const Login = () => {
  
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const registerButtonHandler = (e) => {
    navigate("/register");
  };
  const [loginCredentials, setLogin] = useState({
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogin((prevState) => ({ ...prevState, [name]: value }));
  };
  const submitHandler = async (e) => {
    
    e.preventDefault();
    console.log(loginCredentials);
    try{
      const res = await axios.post(`http://localhost:8000/company/login`,{...loginCredentials});
      console.log(res.data);
     if(res.data){
      const {companyId,token} = res.data;
      console.log("token :",token);
      ctx.Login(token);
    navigate(`/dashboard/${companyId}`);
     }else{
       console.log('wrong credentials')
       navigate('/');
     }
    }catch(e){
      console.log(e);
    }
    // Login();
    // navigate('/dashboard/companyId');
  };
  return (
    <div className="flex flex-col min-h-screen justify-center items-center w-full bg-gradient-to-t from-blue-200">
      <GeneralHeader />
      <div className="flex flex-col mb-10 grow justify-start w-2/3 p-5 bg-white/60 rounded-md">
        <h1 className="font-poppins text-gray-700 text-1xl font-bold">Login</h1>
        <p className="divider font-light mb-5"></p>
        <GeneralInputField
          label={`Email`}
          name="email"
          value={loginCredentials.email}
          onChange={onChangeHandler}
        />
        <GeneralInputField
          label={`Password`}
          name="password"
          value={loginCredentials.password}
          onChange={onChangeHandler}
        />
        <div className="flex w-full justify-evenly pl-10 pr-10">
          <button
            className="bg-blue-400 p-2 font-poppins text-white rounded-md"
            onClick={submitHandler}
          >
            Login
          </button>
          <button
            className="bg-blue-400 p-2 font-poppins text-white rounded-md"
            onClick={registerButtonHandler}
          >
            Register Company
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
