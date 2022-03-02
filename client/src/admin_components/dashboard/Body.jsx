import React, { useEffect, useState } from "react";
import DataCard from "../common/DataCard";
import Submissions from "./Submissions";
import axios from "axios";

const Body = () => {

  const [companyDatabase, setCompanyDatabase] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(async () => {
    const res = await axios.get(`http://localhost:8000/companies`);
    setCompanyDatabase({ ...res.data });
    setIsLoading(false);
  }, []);

  const companies = Object.keys(companyDatabase).map((company) => {return companyDatabase[company]})

  console.log(companies);

  let allInf = 0;
  Object.keys(companyDatabase).map((company) => {companyDatabase[company].INF.forEach(element => {
    allInf++;
  });})
  let allJnf = 0;
  Object.keys(companyDatabase).map((company) => {companyDatabase[company].JNF.forEach(element => {
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
