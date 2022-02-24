import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import JnfForm from "../../reusablecomponents/JnfForm";

const JnfUpdate = () => {
  const navigate = useNavigate();
  const { companyId, jnfId } = useParams();
  const [jnfdata, setjnfData] = useState({});
  useEffect(async () => {
    try {
      const req = await axios.get(
        `http://localhost:8000/company/${companyId}/jnf/${jnfId}`
      );
      console.log(req.data);
      setjnfData({ ...req.data });
    } catch (e) {
      console.log(e.message);
    }
  }, [jnfId, companyId]);
  const jnfData = {
    jnfdata,
  };
  const registerJnfHandler = async (e, jnfData) => {
    e.preventDefault();
    console.log(jnfData);
    try {
      const res = await axios.post(
        `http://localhost:8000/company/${companyId}/${jnfId}/updatejnf`,
        {
          ...jnfData,
        }
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
