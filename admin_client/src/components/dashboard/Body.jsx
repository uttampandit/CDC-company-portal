import React from "react";
import DataCard from "../common/DataCard";
import Submissions from "./Submissions";

const Body = () => {
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="flex mr-10">
        <DataCard value="500" description="Job Notifications" />
        <DataCard value="300" description="Companies Registered" />
        <DataCard value="200" description="Internship Notifications" />
      </div>
        <Submissions />
    </div>
  );
};

export default Body;
