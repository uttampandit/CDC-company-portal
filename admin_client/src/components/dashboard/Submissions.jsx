import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../common/Loader";
import Submission from "../common/Submission";

const Submissions = () => {
  const [companyDatabase, setCompanyDatabase] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const res = await axios.get(`http://localhost:8000/companies`);
    setCompanyDatabase({ ...res.data });
    setIsLoading(false);
  }, []);

  console.log({ ...companyDatabase });

  return (
    <div className="flex grow flex-col p-5 rounded-md bg-white/60 m-10">
      <h1 className="font-poppins font-bold text-portal-blue">Submissions</h1>
      <p className="divider font-extralight mb-5"></p>
        {isLoading ? <Loader /> : 
        <div>
        </div>}
      <Submission />
    </div>
  );
};

export default Submissions;
