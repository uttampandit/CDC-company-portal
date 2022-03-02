import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import GeneralHeader from "../../reusablecomponents/GeneralHeader";
import GeneralInputField from "../../reusablecomponents/GeneralInputField";
import RegisterForm from "../../reusablecomponents/RegisterForm";

const Register = () => {
  const companyData = {
    name: "",
    category: "",
    website: "",
    pocName: "",
    designation: "",
    registeredEmail: "",
    mobileNumber: "",
  };

  const navigate = useNavigate();

  const handleSubmit = async (e, companyData) => {
    e.preventDefault();

    try {
      console.log(companyData);
      const req = await axios.post("http://localhost:8000/company/create", {
        companyData,
      });
      console.log(req);
      const companyId = req.data;

      console.log("This is registered company Id" + companyId);
      navigate(`/dashboard/${companyId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <RegisterForm
      handleCompanyData={handleSubmit}
      companydata={companyData}
      actionLabel="Register"
    />
  );
};

export default Register;
