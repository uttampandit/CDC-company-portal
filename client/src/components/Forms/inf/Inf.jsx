import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InfForm from "../../reusablecomponents/InfForm";

const Inf = () => {
  const navigate = useNavigate();
  const { companyId } = useParams();
  console.log(companyId);
  const infData = {
    designation: "",
    typeOfInternship:
      "Jan-June 2022 Dual Degree/ Integrated M. Tech courses only (2022 batch)",
    description: "",
    modeOfInternship: "Virtual",
    placeOfPosting: "",
    stipendPerMonth: "",
    isPPO: false,
    ctcIfPpo: "",
  };
  const registerInfHandler = async (e, infData) => {
    e.preventDefault();

    try {
      const req = await axios.post(
        `http://localhost:8000/company/${companyId}/inf`,
        infData
      );

      navigate(`/dashboard/${companyId}`);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <InfForm
      infdata={infData}
      handleinfdata={registerInfHandler}
      actionLabel={"Submit"}
    />
  );
};

export default Inf;
