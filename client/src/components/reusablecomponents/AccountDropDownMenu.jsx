import React, { Fragment, useRef,useContext ,useEffect } from "react";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, UsersIcon } from "@heroicons/react/solid";
import Account_Icon from "../../assets/Account_Icon";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
//import { render } from "@headlessui/react/dist/utils/render";

const AccountDropDownMenu = () => {     
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);  
    const refa = useRef();
    

    const { companyId } = useParams();
    const fn = async () => {
    const res = await axios.get(`http://localhost:8000/company/${companyId}`,{headers:{
      authorization:"Bearer "+ctx.token
    }});
    console.log(res);
    const data = res.data;
    const entries = Object.entries(data.INFO);
    function makeCsv(rows) {
      return rows.map((r) => r.join(",")).join("\n");
    }

          const arr = data.JNF[i];
          const arr2 = Object.entries(arr);
          const arr3 = makeCsv(arr2);
          x.push(`JNF:${i+1}\n`)
          x.push(arr3);
          x.push("\n\n");
      }
      
      x.push("INF\n\n");
      var sz1 = data.INF.length;
      for(let i=0;i<sz1;i++)
      {
          const arr = data.INF[i];
          const arr2 = Object.entries(arr);
          const arr3 = makeCsv(arr2);
          x.push(`INF:${i+1}\n`)
          x.push(arr3);
      }
      console.log(x);
      // const el = document.getElementById('al');
      // console.log(el);
      const blob = new Blob(x);
      console.log(refa);
      refa.current.href =  URL.createObjectURL(blob);
  }
  
  useEffect(()=>{
    console.log(refa.current);
    
  },[])

  return(
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white   rounded-md  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <Account_Icon />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-10 absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-blue-600/75 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    onClick={() => navigate("updateCompany")}
                  >
                    Edit Company Profile
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-blue-600/75 text-white" : "text-gray-900"
                    }
                     group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <a download="export.csv" ref={refa} id="al" onClick={fn()}>Export Data</a>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-blue-600/75 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Contact Us
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-blue-600/75 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    onClick={() => {
                      ctx.LogOut();
                      navigate("/");
                    }}
                  >
                    LogOut
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default AccountDropDownMenu;
