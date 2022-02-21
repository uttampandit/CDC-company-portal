import React, { useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const { companyid } = useParams();
  const navigate = useNavigate();

  const [infData, setInfData] = useState({
    designation: "",
    typeOfInternship:
      "Jan-June 2022 Dual Degree/ Integrated M. Tech courses only (2022 batch)",
    description: "",
    modeOfInternship: "Virtual",
    placeOfPosting: "",
    stipendPerMonth: "",
    isPPO: false,
    ctcIfPpo: "",
  });

  const [jnfData, setJnfData] = useState({
    designation: "",
    placeOfPosting: "",
    description: "",
    ctcInLpa: "",
    ctcBreakup: "",
    bondDetails: "",
  });

  const handleInfChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setInfData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleInfSubmit = async (e) => {
    e.preventDefault();

    try {
      const req = await axios.post(
        `http://localhost:8000/company/${companyid}/inf`,
        infData
      );
      navigate(`/dashboard/${companyid}`);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleJnfChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setJnfData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleJnfSubmit = async (e) => {
    e.preventDefault();

    try {
      const req = await axios.post(
        `http://localhost:8000/company/${companyid}/jnf`,
        jnfData
      );
      console.log(req);
      navigate(`/dashboard/${companyid}`);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <DataContext.Provider
      value={{
        infData,
        handleInfChange,
        handleInfSubmit,
        jnfData,
        handleJnfChange,
        handleJnfSubmit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
