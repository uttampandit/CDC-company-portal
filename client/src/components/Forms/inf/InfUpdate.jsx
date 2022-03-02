import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InfForm from "../../reusablecomponents/InfForm";
import AuthContext from "../../../context/AuthContext";

const InfUpdate = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const { companyId, infId } = useParams();
  const [infdata, setInfData] = useState({});
  useEffect(async () => {
    try {
      const req = await axios.get(
        `http://localhost:8000/company/${companyId}/inf/${infId}`
      ,{headers:{
        authorization:"Bearer "+ctx.token
      }});
      console.log(req.data);
      setInfData({ ...req.data });
    } catch (e) {
      console.log(e.message);
    }
  }, [infId, companyId]);
   
  const registerInfHandler = async (e, infData) => {
    e.preventDefault();
    console.log(infData);
    try {
      const res = await axios.post(
        `http://localhost:8000/company/${companyId}/${infId}/updateinf`,
        {
          ...infData,
        },{headers:{
          authorization:"Bearer "+ctx.token
        }}
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
