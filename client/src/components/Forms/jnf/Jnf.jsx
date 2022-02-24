import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import JnfForm from "../../reusablecomponents/JnfForm";

const Jnf = () => {
  const navigate = useNavigate();
  const { companyId } = useParams();

  const jnfdata = {
    designation: "",
    placeOfPosting: "",
    description: "",
    ctcInLpa: "",
    ctcBreakup: "",
    bondDetails: "",
  };

  const registerJnfHandler = async (e, jnfdata) => {
    e.preventDefault();

    try {
      const req = await axios.post(
        `http://localhost:8000/company/${companyId}/jnf`,
        jnfdata
      );

      navigate(`/dashboard/${companyId}`);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <JnfForm
      jnfdata={jnfdata}
      handlejnfdata={registerJnfHandler}
      actionLabel={"Submit"}
    />
  );
};

export default Jnf;
