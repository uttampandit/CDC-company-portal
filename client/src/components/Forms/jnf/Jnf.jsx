import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import JnfForm from "../../reusablecomponents/JnfForm";
import AuthContext from "../../../context/AuthContext";

const Jnf = () => {
  const navigate = useNavigate();
  const { companyId } = useParams();
const ctx = useContext(AuthContext);
  const jnfdata = {
    designation: "",
    placeOfPosting: "",
    description: "",
    ctcInLpa: "",
    ctcBreakup: "",
    bondDetails: "",
  };

  const registerJnfHandler = async (e, jnfData) => {
    e.preventDefault();

    navigate(
      `/dashboard/${companyId}/previewJnf`,
      { state : { ...jnfData }},
      {
        headers: {
          authorization: "Bearer " + ctx.token,
        },
      }
    );

    // try {
    //   const req = await axios.post(
    //     `http://localhost:8000/company/${companyId}/jnf`,
    //     jnfdata,
    //     {headers:{
    //       authorization:"Bearer "+ctx.token
    //     }}
    //   );

    //   navigate(`/dashboard/${companyId}`);
    // } catch (e) {
    //   console.log(e.message);
    // }
  };

  return (
    <JnfForm
      jnfdata={jnfdata}
      handlejnfdata={registerJnfHandler}
      actionLabel={"Preview"}
    />
  );
};

export default Jnf;
