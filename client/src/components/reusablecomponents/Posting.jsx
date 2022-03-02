import { PencilIcon, TrashIcon } from "@heroicons/react/solid";
import React, { Fragment, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Dialog, Disclosure, Transition } from "@headlessui/react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { ChevronDownIcon } from "@heroicons/react/solid";

const Posting = ({ posting, route , deleteCallback }) => {
  const [open, setopen] = useState(false);
  const { companyId } = useParams();
  const navigate = useNavigate();
  return (
    <div className="p-5 mb-3 rounded-md w-full bg-white">
      <Disclosure>
        {({ open }) => (
          <div className="flex flex-col">
            <div className="flex">
              <p className="flex w-full">{posting.designation}</p>
              <Disclosure.Button>
                <ChevronDownIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-blue-400`}
                  aria-hidden="true"
                />
              </Disclosure.Button>
            </div>

            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-85 opacity-0"
            >
              <Disclosure.Panel>
                <div className="flex pt-5 justify-start items-start bg-white">
                  <p className="grow font-poppins text-sm font-light">
                    {posting.description}
                  </p>
                  <button className="font-poppins rounded mt-5 mr-2 bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 focus:outline-none focus:shadow-outline">
                    <PencilIcon
                      className="w-4 h-4 text-white"
                      aria-hidden="true"
                      onClick={() => navigate(`${route}/${posting._id}`)}
                    />
                  </button>
                  <DeleteButton id={posting._id} routes={route} deleteCallback={deleteCallback}/>
                </div>
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>
    </div>
  );
};

const DeleteButton = ({ id, routes,deleteCallback }) => {
  const ctx = useContext(AuthContext);
  let [isOpen, setIsOpen] = useState(false);
  const { companyId } = useParams();
  const closeDialogState = () => {
    setIsOpen(false);
  };
  const openDialogState = () => {
    setIsOpen(true);
  };

 

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          onClick={openDialogState}
          className="font-poppins mt-5 bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          <TrashIcon className="w-4 h-4 text-white" aria-hidden="true" />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 blue-glassmorphism overflow-y-auto"
          onClose={closeDialogState}
        >
          <div className="min-h-screen  px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg text-center font-medium leading-6 font-poppins text-gray-900"
                >
                  Delete Posting
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-center text-gray-500 font-poppins">
                    Are you sure you want to delete this posting ?
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="flex w-full font-poppins justify-center items-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-red-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={async () => {
                      closeDialogState();
                      try {
                        let url = "delete";
                        console.log(routes);
                        if (routes.indexOf("jnf") != -1) {
                          url = url + "jnf";
                        } else {
                          url = url + "inf";
                        }
                        const res = await axios.delete(
                          `http://localhost:8000/company/${companyId}/${id}/${url}`,{headers:{
                            authorization:"Bearer "+ctx.token
                          }}
                         
                        );
                        deleteCallback()
                      } catch (e) {
                        console.log(e.message);
                      }
                    }}
                  >
                    Yes delete this posting.
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Posting;
