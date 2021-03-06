import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import JnfForm from "../../reusablecomponents/JnfForm";
import AuthContext from "../../../context/AuthContext";

const JnfUpdate = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const { companyId, jnfId } = useParams();
  const [jnfdata, setjnfData] = useState({});
  useEffect(async () => {
    try {
      const req = await axios.get(
        `http://localhost:8000/company/${companyId}/jnf/${jnfId}`,{headers:{
          authorization:"Bearer "+ctx.token
        }}
      );
      console.log(req.data);
      setjnfData({ ...req.data });
    } catch (e) {
      console.log(e.message);
    }
  }, [jnfId, companyId]);

  const registerJnfHandler = async (e, jnfData) => {
    e.preventDefault();
    console.log(jnfData);
    try {
      const res = await axios.post(
        `http://localhost:8000/company/${companyId}/${jnfId}/updatejnf`,
        {
          ...jnfData,
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
    <JnfForm
      jnfdata={jnfdata}
      handlejnfdata={registerJnfHandler}
      actionLabel={"Update"}
    />
  );
};

export default JnfUpdate;
