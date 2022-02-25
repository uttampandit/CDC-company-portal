import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DropDownMenu from "../reusablecomponents/DropDownMenu";
import GeneralHeader from "../reusablecomponents/GeneralHeader";
import axios from "axios";
import Posting from "../reusablecomponents/Posting";
import Card from "../reusablecomponents/Card";
import { ShareIcon, UploadIcon } from "@heroicons/react/solid";
import { Tab } from "@headlessui/react";

const DashBoard = () => {
  const { companyId } = useParams();
  const [companyData, setCompanyData] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const res = await axios.get(`http://localhost:8000/company/${companyId}`);
    setCompanyData({ ...res.data });
    setIsLoading(false);
  }, [companyData]);

  const numberOfInfPostings = isLoading ? " " : companyData.INF.length;
  const numberOfJnfPostings = isLoading ? " " : companyData.JNF.length;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-blue-200">
      <div className="flex w-full items-center">
        <GeneralHeader heading="Dashboard" />
      </div>

      <div className="flex flex-col">
        <div className="flex w-full pr-10 pl-10 mb-10">
          <div className="flex flex-col w-1/3 bg-white/60 p-5 rounded-md ">
            <h1 className="font-poppins text-portal-blue font-bold">
              Quick Toolbar
            </h1>
            <p className="divider font-extralight mb-2"></p>
            <div className="flex justify-between w-full">
              <div className="bg-blue-600/75 rounded-full m-2 hover:bg-blue-600 text-white inline-flex justify-center px-[4px] py-[4px] text-sm">
                <UploadIcon className="w-5 h-5 " aria-hidden="true" />
              </div>
              <div className="bg-blue-600/75 rounded-full m-2 hover:bg-blue-600 text-white inline-flex justify-center px-[4px] py-[4px] text-sm">
                <ShareIcon className="w-5 h-5 " aria-hidden="true" />
              </div>
              <div className="bg-blue-600/75 rounded-full m-2 hover:bg-blue-600 text-white inline-flex justify-center px-[4px] py-[4px] text-sm">
                <UploadIcon className="w-5 h-5 " aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="w-2/3 flex">
            <Card
              value={`${numberOfJnfPostings}`}
              label={`${
                numberOfJnfPostings > 1 ? "Job Postings" : "Job Posting"
              }`}
            />
            <Card
              value={`${numberOfInfPostings}`}
              label={`${
                numberOfInfPostings > 1
                  ? "Internship Postings"
                  : "Internship Posting"
              }`}
            />
          </div>
        </div>

        <div className="flex w-full pr-10 pl-10 mb-10">
          <div className="flex flex-col w-1/3 bg-white/50 p-5 rounded-md">
            <h1 className="font-poppins text-portal-blue font-bold">
              Information Panel
            </h1>
            <p className="divider font-extralight mb-2"></p>
            <marquee
              behaiviour="sliding"
              direction="up"
              scrollamount="2"
              className="flex flex-col justify-center items-center h-full"
            >
              <p className="font-poppins p-2 text-blue-500 underline font-medium">
                Placement procedure download
              </p>
              <p className="font-poppins p-2 text-blue-500 underline font-medium">
                Important Dates for placements
              </p>
              <p className="font-poppins p-2 text-blue-500 underline font-medium">
                Process overview PDF
              </p>
              <p className="font-poppins p-2 text-blue-500 underline font-medium">
                Important annoucement for all companies
              </p>
            </marquee>
          </div>

          <div className="flex flex-col w-2/3 bg-white/50 pt-4 pr-5 pl-10 ml-12 rounded-md">
            <div className="flex flex-col items-end">
              <Tab.Group>
                <div className="flex w-full items-end">
                  <Tab.List className={`w-full justify-start items-start`}>
                    <div className="flex justify-center w-full">
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <div
                            className={`${
                              selected
                                ? "bg-blue-500 text-white rounded-md"
                                : "bg-transparent text-portal-blue"
                            }
                                  p-2 mr-10`}
                          >
                            <button className="font-poppins font-bold">
                              Job postings
                            </button>
                          </div>
                        )}
                      </Tab>
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <div
                            className={`${
                              selected
                                ? "bg-blue-500 text-white rounded-md"
                                : "bg-transparent text-portal-blue"
                            }
                                  p-2 ml-10`}
                          >
                            <button className="font-poppins font-bold">
                              Internship postings
                            </button>
                          </div>
                        )}
                      </Tab>
                    </div>
                  </Tab.List>
                  <div className="flex pr-2">
                    <DropDownMenu />
                  </div>
                </div>

                <p className="divider font-extralight mb-2 w-full "></p>

                <div className="w-full">
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="flex flex-col grow pr-5 pt-5 pb-5 rounded-lg ">
                        <div className="overflow-y-auto flex flex-col w-full h-96">
                          {isLoading ? (
                            <h1>Loading</h1>
                          ) : (
                            companyData.JNF.map((posting) => (
                              <Posting posting={posting} route={"updatejnf"} />
                            ))
                          )}
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="flex flex-col grow pr-5 pt-5 pb-5 rounded-lg ">
                        <div className="overflow-y-auto flex flex-col w-full h-96">
                          {isLoading ? (
                            <h1>Loading</h1>
                          ) : (
                            companyData.INF.map((posting) => (
                              <Posting posting={posting} route={"updateinf"} />
                            ))
                          )}
                        </div>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </div>
              </Tab.Group>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
