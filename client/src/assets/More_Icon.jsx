import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronUpIcon } from "@heroicons/react/solid";
const More_Icon = ({ open }) => {
  const navigate = useNavigate();

  const companyId = useParams();


  return (
    <div className="flex">
      <div className="mx-auto bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-2 py-2 text-sm font-medium text-left text-purple-900 bg-tranparent rounded-lg hover:bg-blue-100/20 focus:outline-none focus-visible:ring focus-visible:ring-blue-100 focus-visible:ring-opacity-75">
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
               Hello
               Hello
               Hello
               Hello
               Hello
               Hello
               Hello
               Hello
               Hello
               Hello
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
    // <div>
    //   <Menu as="div" className="relative inline-block text-left">
    //     <div>
    //       <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           viewBox="0 0 20 20"
    //           fill="currentColor"
    //         >
    //           <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
    //         </svg>
    //       </Menu.Button>
    //     </div>

    //     <Transition
    //       as={Fragment}
    //       enter="transition ease-out duration-100"
    //       enterFrom="transform opacity-0 scale-95"
    //       enterTo="transform opacity-100 scale-100"
    //       leave="transition ease-in duration-75"
    //       leaveFrom="transform opacity-100 scale-100"
    //       leaveTo="transform opacity-0 scale-95"
    //     >
    //       <Menu.Items className="z-10 absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    //         <div className="px-1 py-1 ">
    //           <Menu.Item>
    //             {({ active }) => (
    //               <button
    //                 className={`${
    //                   active ? "bg-blue-600/75 text-white" : "text-gray-900"
    //                 } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
    //                 onClick={() => navigate("jnf")}
    //               >
    //                 View
    //               </button>
    //             )}
    //           </Menu.Item>
    //           <Menu.Item>
    //             {({ active }) => (
    //               <button
    //                 className={`${
    //                   active ? "bg-blue-600/75 text-white" : "text-gray-900"
    //                 } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
    //                 onClick={() => navigate("updateInf")}
    //               >
    //                 Update
    //               </button>
    //             )}
    //           </Menu.Item>
    //           <Menu.Item>
    //             {({ active }) => (
    //               <button
    //                 className={`${
    //                   active ? "bg-blue-600/75 text-white" : "text-gray-900"
    //                 } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
    //                 onClick={() => navigate("jnf")}
    //               >
    //                 Delete
    //               </button>
    //             )}
    //           </Menu.Item>
    //         </div>
    //       </Menu.Items>
    //     </Transition>
    //   </Menu>
    // </div>
  );
};

export default More_Icon;
