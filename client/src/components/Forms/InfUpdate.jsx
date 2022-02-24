import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InfForm from "./ResusableComponents/InfForm";

const InfUpdate = () => {
  const navigate = useNavigate();
  const { companyId, infId } = useParams();
  const [infdata, setInfData] = useState({});
  useEffect(async () => {
    try {
      const req = await axios.get(
        `http://localhost:8000/company/${companyId}/inf/${infId}`
      );
      console.log(req.data);
      setInfData({ ...req.data });
    } catch (e) {
      console.log(e.message);
    }
  }, [infId, companyId]);
  const infData = {
    infdata,
  };
  const registerInfHandler = async (e, infData) => {
    e.preventDefault();
    console.log(infData);
    try {
      const res = axios.post(
        `http://localhost:8000/company/${companyId}/${infId}/update`,
        {
          ...infData,
        }
      );
      navigate(`/dashboard/${companyId}`);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <InfForm
      infdata={infdata}
      handleinfdata={registerInfHandler}
      actionLabel={"Update"}
    />
  );
};

export default InfUpdate;
