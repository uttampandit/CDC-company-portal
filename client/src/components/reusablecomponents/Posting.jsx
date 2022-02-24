import { PencilIcon, TrashIcon } from "@heroicons/react/solid";
import React, { Fragment, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import More_Icon from "../../assets/More_Icon";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";

const Posting = ({ posting, route }) => {
  const [open, setopen] = useState(false);

  const navigate = useNavigate();

  const handleChange = () => setopen(!open);

  return (
    <div className="flex flex-col w-full bg-white rounded-lg mb-3">
      <div className="flex p-5">
        <div className="flex grow">
          <p className="font-poppins text-portal-blue">{posting.designation}</p>
        </div>
        <More_Icon open={open} onChange={handleChange} />
      </div>
      {open && (
        <div className="flex pr-5 pl-5 justify-start items-start">
          <p className="grow font-poppins text-sm font-light">
            {posting.description}
          </p>
          <button className="font-poppins rounded mt-5 mb-5 mr-2 bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 focus:outline-none focus:shadow-outline">
            <PencilIcon
              className="w-4 h-4 text-white"
              aria-hidden="true"
              onClick={() => navigate(`${route}/${posting._id}`)}
            />
          </button>
          <DeleteButton />
        </div>
      )}
    </div>
  );
};

const DeleteButton = () => {
  let [isOpen, setIsOpen] = useState(false);

  const closeDialogState = () => {
    setIsOpen(false);
  };
  const openDialogState = () => {
    setIsOpen(true);
  };

  const deletePosting = async () => {
    await axios.delete("")
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          onClick={openDialogState}
          className="font-poppins mt-5 mb-5 bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
                    onClick={() => {
                      closeDialogState();

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
