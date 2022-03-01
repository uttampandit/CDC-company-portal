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
    courses : [
      {
        key: 2,
        name: "chemicalEngineering",
        label: "Chemical Engineering",
        state: false,
      },
      {
        key: 3,
        name: "civilEngineering",
        label: "Civil Engineering",
        state: false,
      },
      {
        key: 4,
        name: "computerScienceEngineering",
        label: "Computer Science Engineering",
        state: false,
      },
      {
        key: 5,
        name: "electricalEngineering",
        label: "Electrical Engineering",
        state: false,
      },
      {
        key: 6,
        name: "electronicsAndCommunicationEngineering",
        label: "Electronics & Communication Engineering",
        state: false,
      },
      {
        key: 7,
        name: "electronicsAndInstrumentationEngineering",
        label: "Electronics & Instrumentation Engineering",
        state: false,
      },
      {
        key: 8,
        name: "engineeringPhysics",
        label: "Engineering Physics",
        state: false,
      },
      {
        key: 9,
        name: "environmentalEngineering",
        label: "Environmental Engineering",
        state: false,
      },
      {
        key: 10,
        name: "mechanicalEngineering",
        label: "Mechanical Engineering",
        state: false,
      },
      {
        key: 11,
        name: "mineralAndMetallurgicalEngineering",
        label: "Mineral & Metallurgical Engineering",
        state: false,
      },
      {
        key: 12,
        name: "miningEngineering",
        label: "Mining Engineering",
        state: false,
      },
      {
        key: 13,
        name: "miningMachineryEngineering",
        label: "Mining Machinery Engineering",
        state: false,
      },
      {
        key: 14,
        name: "petroleumEngineering",
        label: "Petroleum Engineering",
        state: false,
      },
    ]
    
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
