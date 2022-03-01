import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DropDownMenu from "../../reusablecomponents/DropDownMenu";
import GeneralHeader from "../../reusablecomponents/GeneralHeader";
import axios from "axios";
import Posting from "../../reusablecomponents/Posting";
import Card from "../../reusablecomponents/Card";
import { ShareIcon, UploadIcon } from "@heroicons/react/solid";
import { Tab } from "@headlessui/react";
import Loader from "../../reusablecomponents/Loader";
import List from "@mui/material/List";
import { TransitionGroup } from "react-transition-group";
import Collapse from "@mui/material/Collapse";

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
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-blue-400">
      <div className="flex w-full items-center">
        <GeneralHeader heading="Dashboard" />
      </div>

      <div className="flex flex-col">
        <div className="flex w-full pr-10 mb-10">
           
          <div className="w-full flex">
            <Card
              value={`${numberOfJnfPostings}`}
              label={`${
                numberOfJnfPostings > 1 ? "Job Postings" : "Job Posting"
              }`}
            />
            <Card
              value={`1.5 Cr`}
              label={`offered`}
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
              scrolldelay="10"
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
                            <Loader />
                          ) : (
                            companyData.JNF.map((posting) => (
                              <>
                                {numberOfJnfPostings ? <Posting
                                  key={posting._id}
                                  posting={posting}
                                  route={"updatejnf"}
                                /> : <div className="flex items-center justify-center"><p>No Job Postings Yet</p></div>}
                                
                              </>
                            ))
                          )}
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="flex flex-col grow pr-5 pt-5 pb-5 rounded-lg ">
                        <div className="overflow-y-auto flex flex-col w-full h-96">
                          {isLoading ? (
                            <Loader />
                          ) : (
                            companyData.INF.map((posting) => {
                              return <>
                                {numberOfInfPostings ? <Posting
                                  key={posting._id}
                                  posting={posting}
                                  route={"updateinf"}
                                /> : <div className="flex items-center justify-center"><p>No Internship Postings Yet</p></div>
                                }
                                
                              </>
                            })
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
