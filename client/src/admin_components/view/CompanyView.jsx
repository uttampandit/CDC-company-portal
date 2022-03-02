import React, { Fragment, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../dashboard/Header";
import { Tab } from "@headlessui/react";
import Loader from "../common/Loader";
import Posting from "../common/Posting";
import JnfPosting from "../common/JnfPosting";
import InfPosting from "../common/InfPosting";

const CompanyView = () => {
  const { state } = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-t from-blue-400">
      <Header />
      <div className="flex grow w-full h-full">
        <div className="flex flex-col grow justify-center items-center w-full">
          <div className="flex grow w-11/12 bg-white/60 rounded-md justify-center items-start p-2">
            <div className="flex flex-col justify-center w-full items-center rounded-md m-5">
              <div className="flex items-start justify-start w-full">
                <h1 className="font-poppins text-gray-700 text-1xl font-bold">
                  Company Details
                </h1>
              </div>

              <p className="divider w-full font-light mb-5"></p>
              <FieldComponent label={"Company Name"} value={state.INFO.name} />
              <FieldComponent label={"Website"} value={state.INFO.website} />
              <FieldComponent label={"Category"} value={state.INFO.category} />
            </div>

            <div className="flex flex-col justify-center w-full items-center rounded-md m-5">
              <div className="flex items-start justify-start w-full">
                <h1 className="font-poppins text-gray-700 text-1xl font-bold">
                  Personnel Details
                </h1>
              </div>

              <p className="divider w-full font-light mb-5"></p>

              <FieldComponent label={"Name"} value={state.INFO.pocName} />
              <FieldComponent
                label={"Designation"}
                value={state.INFO.designation}
              />
              <FieldComponent
                label={"Registered Email"}
                value={state.INFO.registeredEmail}
              />
              <FieldComponent
                label={"Mobile Number"}
                value={state.INFO.mobileNumber}
              />
            </div>
          </div>
          <PostingDiv company={state} />
        </div>
      </div>
    </div>
  );
};

const PostingDiv = ({ company }) => {

    const numberOfInfPostings =  company.INF.length;
  const numberOfJnfPostings = company.JNF.length;

  console.log(numberOfInfPostings)

  return (
    <div className="flex flex-col w-11/12 bg-white/50 pt-4 pr-5 pl-10 mt-10 mb-10 rounded-md">
      <div className="flex flex-col">
        <Tab.Group>
          <div className="flex w-full items-center">
            <Tab.List className={`w-full justify-start items-start`}>
              <div className="flex justify-center w-full">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <p
                      className={`${
                        selected
                          ? "text-portal-blue border-b-2 border-blue-400"
                          : "bg-transparent text-portal-blue "
                      }
                                  p-2 mr-10  pl-10 pr-10 pt-2 pb-2 font-poppins font-bold hover:bg-blue-300/20`}
                    >
                      Job postings
                    </p>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <p
                      className={`${
                        selected
                          ? "border-b-2 border-blue-400"
                          : "bg-transparent"
                      }
                                  pl-10 pr-10 pt-2 pb-2 ml-16 hover:bg-blue-300/20 text-portal-blue font-poppins font-bold`}
                    >
                      Internship postings
                    </p>
                  )}
                </Tab>
              </div>
            </Tab.List>
            <div className="flex pr-2"></div>
          </div>

          <p className="divider font-extralight mb-2 w-full "></p>

          <div className="w-full">
            <Tab.Panels>
              <Tab.Panel>
                <div className="flex flex-col grow pr-5 pt-5 pb-5 rounded-lg ">
                  <div className="overflow-y-auto flex flex-col w-full h-96">
                    {company.JNF.map((posting) => (
                      <>
                        {numberOfJnfPostings == 0 ? (
                          <div className="flex h-full w-full items-center justify-center">
                            <button
                              className="flex bg-blue-400 text-white font-poppins rounded-md items-center px-2 py-2 text-sm"
                              onClick={() => navigate("jnf")}
                            >
                              No posting
                            </button>
                          </div>
                        ) : (
                          <JnfPosting
                            key={posting._id}
                            posting={posting}
                          />
                        )}
                      </>
                    ))}
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="flex flex-col grow pr-5 pt-5 pb-5 rounded-lg ">
                  <div className="overflow-y-auto flex flex-col w-full h-96">
                    {company.INF.map((posting) => {
                      return (
                        <>
                          {numberOfInfPostings == 0 ? (
                            <div className="flex h-full w-full items-center justify-center">
                              <button
                                className="flex bg-blue-400 text-white font-poppins rounded-md items-center px-2 py-2 text-sm"
                                onClick={() => navigate("inf")}
                              >
                                No posting
                              </button>
                            </div>
                          ) : (
                            <InfPosting
                              key={posting._id}
                              posting={posting}
                            />
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </div>
  );
};

const FieldComponent = ({ label, value }) => {
  return (
    <div className="flex p-5 mb-2 items-center justify-center w-full">
      <p className="font-poppins w-1/3 text-gray-700 text-sm font-bold">
        {label}
      </p>
      <p className="text-gray-700 w-2/3 text-md font-normal">{value}</p>
    </div>
  );
};

export default CompanyView;
