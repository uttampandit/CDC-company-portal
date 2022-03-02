import React, { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronUpIcon } from "@heroicons/react/solid";
const More_Icon = ({ open, onChange }) => {

  return (
    <div className="flex">
      <ChevronUpIcon
        className={`${
          open ? "transform rotate-180" : ""
        } w-5 h-5 text-purple-500`}
        onClick={onChange}
      />
    </div>
  );
};

export default More_Icon;
