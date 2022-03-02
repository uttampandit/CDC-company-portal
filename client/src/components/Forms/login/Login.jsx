import React, { useState, useContext } from "react";
import GeneralInputField from "../../reusablecomponents/GeneralInputField";
import GeneralHeader from "../../reusablecomponents/GeneralHeader";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import axios from "axios";
import UndrawIdeas from "../../../assets/UndrawIdeas";

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
    try {
      const res = await axios.post(`http://localhost:8000/company/login`, {
        ...loginCredentials,
      });
      console.log(res.data);
      if (res.data) {
        const { id, token, isAdmin } = res.data;
        console.log("token :", token);
        ctx.Login(token);
        if (isAdmin) navigate("/admin");
        else navigate(`/dashboard/${id}`);
      } else {
        console.log("wrong credentials");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
    // Login();
    // navigate('/dashboard/companyId');
  };
  return (
    <div className="flex flex-col overflow-hidden h-screen justify-start items-center bg-gradient-to-t from-blue-200">
      <GeneralHeader />
      <div className="flex grow w-full pl-10 mb-10 pr-20 justify-center items-center">
        <div className="flex flex-col w-full p-10 bg-white/60 rounded-md">
          <h1 className="font-poppins text-gray-700 text-1xl font-bold text-center">
            Login
          </h1>
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
          <div className="flex w-full justify-around pl-10 pr-10">
            <button
              className="bg-blue-400 w-full mr-5 placeholder:p-2 font-poppins text-white rounded-md"
              onClick={submitHandler}
            >
              Login
            </button>
            <button
              className="bg-blue-400 p-2 w-full ml-5 font-poppins text-white rounded-md"
              onClick={registerButtonHandler}
            >
              Register Company
            </button>
          </div>
        </div>

        <div className="flex pl-20">
          <UndrawIdeas />
        </div>
      </div>
    </div>
  );
};

export default Login;
