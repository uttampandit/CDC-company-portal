import { Disclosure } from "@headlessui/react";
import { ChevronDoubleDownIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { Checkbox } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CoursesCheckbox from "./CoursesCheckbox";
import GeneralHeader from "./GeneralHeader";
import GeneralInputField from "./GeneralInputField";

const JnfForm = (props) => {
  const { jnfdata, handlejnfdata, actionLabel } = props;

  const [open, setOpen] = useState(false);

  const [jnfData, setJnfData] = useState({
    ...jnfdata,
  });

  const handleOpen = () => {
    setOpen(!open);
  };

  const [selectAllState, setSelectAllState] = useState(false);

  const [FourthYearBTechProgram, setFourthYearBTechProgram] = useState({
    courses : [
    {
      key: 2,
      name: "chemicalEngineering",
      label: "Chemical Engineering",
      state: false,
    },
    {
      key: 3,
      name: "civilEngineering",
      label: "Civil Engineering",
      state: false,
    },
    {
      key: 4,
      name: "computerScienceEngineering",
      label: "Computer Science Engineering",
      state: false,
    },
    {
      key: 5,
      name: "electricalEngineering",
      label: "Electrical Engineering",
      state: false,
    },
    {
      key: 6,
      name: "electronicsAndCommunicationEngineering",
      label: "Electronics & Communication Engineering",
      state: false,
    },
    {
      key: 7,
      name: "electronicsAndInstrumentationEngineering",
      label: "Electronics & Instrumentation Engineering",
      state: false,
    },
    {
      key: 8,
      name: "engineeringPhysics",
      label: "Engineering Physics",
      state: false,
    },
    {
      key: 9,
      name: "environmentalEngineering",
      label: "Environmental Engineering",
      state: false,
    },
    {
      key: 10,
      name: "mechanicalEngineering",
      label: "Mechanical Engineering",
      state: false,
    },
    {
      key: 11,
      name: "mineralAndMetallurgicalEngineering",
      label: "Mineral & Metallurgical Engineering",
      state: false,
    },
    {
      key: 12,
      name: "miningEngineering",
      label: "Mining Engineering",
      state: false,
    },
    {
      key: 13,
      name: "miningMachineryEngineering",
      label: "Mining Machinery Engineering",
      state: false,
    },
    {
      key: 14,
      name: "petroleumEngineering",
      label: "Petroleum Engineering",
      state: false,
    },
  ]});

  const handleFourthYearBTechProgram = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    console.log(e.target.checked)

    const name = e.target.name
    const checked = e.target.checked
    // setFourthYearBTechProgram((prevState, [name]) => ({
    //   courses : prevState.courses.map(
    //     course => course.name === name ? { ...course, state: value} : course
    //   )
    // }))

    setFourthYearBTechProgram((prevState) => ({
      courses : prevState.courses.map(
        course => course.name === name ? { ...course, state: checked} : course
      )
    }))
  }

  const handleSelectAll = (key) => {
    setSelectAllState(!selectAllState)
  }

  useEffect(() => {
    setJnfData(jnfdata);
  }, [jnfdata]);

  const handleJnfChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setJnfData((prevState) => ({ ...prevState, [name]: value }));
  };
  console.log(jnfData);
  const handleJnfSubmit = async (e) => {
    await handlejnfdata(e, jnfData);
  };

  return (
    <div className="flex flex-col h-full justify-center items-center w-full bg-gradient-to-t from-blue-200">
      <GeneralHeader />
      <div className="flex flex-col mb-10 grow justify-center w-2/3 p-5 bg-white/60 rounded-md">
        <h1 className="font-poppins text-gray-700 text-1xl font-bold">
          Job Notification Form
        </h1>
        <p className="divider font-light mb-5">Job Details</p>
        <form className="w-full">
          <GeneralInputField
            label="Designation"
            name="designation"
            value={jnfData.designation}
            onChange={handleJnfChange}
          />
          <GeneralInputField
            label="Place of posting"
            name="placeOfPosting"
            value={jnfData.placeOfPosting}
            onChange={handleJnfChange}
          />
          <GeneralInputField
            label="Description"
            name="description"
            value={jnfData.description}
            onChange={handleJnfChange}
          />

          <p className="divider font-light mb-5 ">Salary Details</p>

          <GeneralInputField
            label="CTC in LPA"
            name="ctcInLpa"
            value={jnfData.ctcInLpa}
            onChange={handleJnfChange}
          />
          <GeneralInputField
            label="CTC breakup"
            name="ctcBreakup"
            value={jnfData.ctcBreakup}
            onChange={handleJnfChange}
          />
          <GeneralInputField
            label="Bond Details"
            name="bondDetails"
            value={jnfData.bondDetails}
            onChange={handleJnfChange}
          />

          <p className="divider font-light mb-5">
            Eligible Courses and Disciplines
          </p>

          <CoursesAndDisciplines
            year="4-Year B. Tech Programs"
            open={open}
            selectAllState={selectAllState}
            onSelectAllCheck={handleSelectAll}
            FourthYearBTechProgram={FourthYearBTechProgram}
            handleFourthYearBTechProgram={handleFourthYearBTechProgram}
            onOpen={handleOpen}
            handleJnfChange={handleJnfChange}
          />
          <div className="flex w-full justify-center">
            <button
              onClick={handleJnfSubmit}
              className="font-poppins w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {actionLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const CoursesAndDisciplines = ({
  year,
  FourthYearBTechProgram,
  selectAllState,
  handleFourthYearBTechProgram,
  open,
  onOpen,
  onCoursesCheck,
  onSelectAllCheck
}) => {
  return (
    <div>
      <label className=" underline text-center font-poppins text-gray-700 text-sm font-bold">
        {year}
      </label>
      <div className="flex flex-col mt-2 mb-5 bg-white rounded-md">
        <div className="flex">
          <div className="flex w-full justify-evenly p-2">
            <p className="font-poppins text-portal-blue font-medium pt-1">
              Courses
            </p>
            <div className="flex items-center">
              <p className="font-poppins text-portal-blue font-medium pt-1 pr-2">
                Select Checkboxes
              </p>
            </div>
          </div>
          <div className="mr-5 mt-2" onClick={() => onOpen()}>
            <ChevronDownIcon
              className={`${
                open ? "transform rotate-180" : ""
              } w-5 h-5 text-purple-500`}
              aria-hidden="true"
            />
          </div>
        </div>
        {open && (
          <div className="w-full">
            <p className="border-[1px] rounded-md border-blue-400 font-extralight mb-3 mr-2 ml-5"></p>
            <div className="w-full">
              <CoursesCheckbox
                name={`selectAll`}
                label="Select All"
                checked={selectAllState}
                onChecked={onSelectAllCheck}
              />

              {
                FourthYearBTechProgram.courses.map((course) => {
                  return <CoursesCheckbox
                  key={ course.key}
                  label={ course.label}
                  name={ course.name}
                  checked={ course.state || selectAllState}
                  onChecked={(e) => handleFourthYearBTechProgram(e)}
                /> 
                })
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JnfForm;

 