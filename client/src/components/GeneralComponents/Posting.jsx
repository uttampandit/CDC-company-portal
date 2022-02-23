import React, { useState } from "react";
import { useParams } from "react-router-dom";
import More_Icon from "../../assets/More_Icon";


const Posting = (props) => {

  const [open, setopen] = useState(false);

  return (
    <div className="flex flex-col w-full ">
    <div className="flex pb-5 pt-5 pr-5 pl-5">
      <p className="font-poppins pr-5 text-portal-blue">{props.serialNo}</p>
      <div className="flex grow">
        <p className="font-poppins text-portal-blue">
          {props.designation}
        </p>
      </div>
        <More_Icon open={open}/>
      </div>
      
      <hr className="divider"></hr>
    </div>
  );
};

export default Posting;
