import PreviousMap from "postcss/lib/previous-map";
import React from "react";

const DataCard = (props) => {
  return (
    <div className="flex flex-col p-12 bg-white rounded-lg m-10">
        <h1 className="font-poppins text-portal-blue text-4xl p-2 font-bold w-full text-center">{props.value}</h1>
      <p className="font-poppins text-portal-blue font-semibold">{props.description}</p>
    </div>
  );
};

export default DataCard;
