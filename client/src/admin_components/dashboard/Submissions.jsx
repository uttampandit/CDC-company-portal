import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../common/Loader";
import Submission from "../common/Submission";

const Submissions = ({ isLoading, companies }) => {



  return (
    <div className="flex grow flex-col p-5 rounded-md bg-white/60 m-10">
      <h1 className="font-poppins font-bold text-portal-blue">Submissions</h1>
      <p className="divider font-extralight mb-5"></p>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {companies.map((company) => (
            <Submission key={company._id} company={company} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Submissions;
