import React, { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import Hamburger from "../../admin_assets/Hamburger";
import AuthContext from "../../context/AuthContext";
export const HamburgerMenu = () => {
  
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);
  const onClickHandler = ()=>{
      ctx.LogOut();
      navigate('/');
  }
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left ">
          <Menu.Button className="font-poppins inline-flex justify-center w-full px-[2px] py-[2px] text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <Hamburger />
          </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-10 absolute w-96 right-0 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-blue-600/75 text-white" : "text-gray-900"
                  } group flex rounded-md items-center w-full justify-center px-2 py-2 text-md font-normal `}
                >
                  Export data for students
                </button>
              )}
            </Menu.Item>
            <hr className="w-full mr-2 ml-2" />
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-blue-600/75 text-white" : "text-gray-900"
                  } group flex rounded-md justify-center items-center w-full px-2 py-2 text-md font-normal `}
                >
                  Export data
                </button>
              )}
            </Menu.Item>
            <hr className="w-full mr-2 ml-2" />

            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-blue-600/75 text-white" : "text-gray-900"
                  } group flex rounded-md justify-center items-center w-full px-2 py-2 text-md font-normal`}
                  onClick={() => navigate("inf")}
                >
                  Set graduation year 
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-blue-600/75 text-white" : "text-gray-900"
                  } group flex rounded-md justify-center items-center w-full px-2 py-2 text-md font-normal`}
                  onClick={onClickHandler}
                >
                  Log Out 
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default HamburgerMenu;
