import React, { useEffect, useState } from "react";
import DataCard from "../common/DataCard";
import Submissions from "./Submissions";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
const Body = () => {
const ctx = useContext(AuthContext);
  const [companyDatabase, setCompanyDatabase] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(async () => {
    const res = await axios.get(`http://localhost:8000/company/companies`,
      {headers:{
        authorization:"Bearer "+ctx.token
      }}
    );
    setCompanyDatabase({ ...res.data });
    setIsLoading(false);
  }, []);

  const companies = Object.keys(companyDatabase).map((company) => {return companyDatabase[company].INFO})
  let allInf = 0;
  Object.keys(companyDatabase).map((company) => {companyDatabase[company].INF.forEach(element => {
    allInf++;
  });})
  let allJnf = 0;
  Object.keys(companyDatabase).map((company) => {companyDatabase[company].INF.forEach(element => {
    allJnf++;
  });})


  return (
    <div className="flex flex-col justify-center w-full">
      <div className="flex mr-10">
        <DataCard value={allInf} description="Job Notifications" />
        <DataCard value={companies.length} description="Companies Registered" />
        <DataCard value={allJnf} description="Internship Notifications" />
      </div>
        <Submissions isLoading={isLoading} companies={companies}/>
    </div>
  );
};

export default Body;
