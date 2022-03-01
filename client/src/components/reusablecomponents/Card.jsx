import React from "react";

const Card = (props) => {
  return (
    <div className="flex flex-col p-10 w-full bg-white rounded-lg ml-10 justify-center items-center">
      <h1 className="font-poppins text-portal-blue text-4xl font-bold w-full text-center">
        {props.value}
      </h1>
      <p className="font-poppins text-portal-blue font-semibold">
        {props.label}
      </p>
    </div>
  );
};

export default Card;
