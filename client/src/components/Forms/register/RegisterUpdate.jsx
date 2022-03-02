import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RegisterForm from "../../reusablecomponents/RegisterForm";
import AuthContext from "../../../context/AuthContext";
const RegisterUpdate = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const { companyId } = useParams();
  const companydata = {
    name: "",
    category: "",
    website: "",
    pocName: "",
    designation: "",
    registeredEmail: "",
    mobileNumber: "",
  };
  const [companyData, setCompanyData] = useState({
    ...companydata,
  });

  useEffect(async () => {
    console.log("try useeffect");
    try {
      const req = await axios.get(
        `http://localhost:8000/company/${companyId}`,
        {
          headers: {
            authorization: "Bearer " + ctx.token,
          },
        }
      );
      console.log(req.data.INFO);
      setCompanyData({ ...req.data.INFO });
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  console.log(companyData);

  const handleUpdateCompany = async (e, companyData) => {
    e.preventDefault();
    console.log(companyData);
    try {
      const res = await axios.post(
        `http://localhost:8000/company/${companyId}/updateCompany`,
        {companyData},{headers:{
          authorization:"Bearer "+ctx.token
        }}
      );
      console.log(res);
      navigate(`/dashboard/${companyId}`);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <RegisterForm
      companydata={companyData}
      handleCompanyData={handleUpdateCompany}
      actionLabel={"Update"}
    />
  );
};

export default RegisterUpdate;
