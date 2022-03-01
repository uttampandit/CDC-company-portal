import React from "react";

const CoursesCheckbox = ({ label, name, checked, onChecked }) => {
  return (
    <div className="flex flex-col justify-evenly items-center ">
      <div className="flex p-2 mr-20">
        <p className="text-start w-80">{label}</p>
        <input
          name={name}
          type={`checkbox`}
          checked={checked}
          onChange={(key) => onChecked(key)}
          className="w-32"
        />
      </div>
      <div className="flex w-full pr-8 pl-8">
        <p className="border-[1px] w-full rounded-md border-blue-50 font-extralight"></p>
      </div>
    </div>
  );
};

export default CoursesCheckbox;
