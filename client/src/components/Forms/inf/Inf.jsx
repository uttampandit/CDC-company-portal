import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InfForm from "../../reusablecomponents/InfForm";
import AuthContext from "../../../context/AuthContext";
const Inf = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const { companyId } = useParams();
  const infData = {
    designation: "",
    typeOfInternship: "Jan-June 2022 Dual Degree/ Integrated M. Tech courses only(2022 batch)",
    description: "",
    modeOfInternship: "Virtual",
    placeOfPosting: "",
    stipendPerMonth: "",
    isPPO: false,
    ctcIfPpo: "",
  };
  const registerInfHandler = (e, infData) => {
    e.preventDefault();
    console.log({...infData });
    console.log(companyId);
    navigate(
      `/dashboard/${companyId}/previewInf`,
      { state : { ...infData }},
      {
        headers: {
          authorization: "Bearer " + ctx.token,
        },
      }
    );

     
  };

  return (
    <InfForm
      infdata={infData}
      handleinfdata={registerInfHandler}
      actionLabel={"Preview"}
    />
  );
};

export default Inf;
