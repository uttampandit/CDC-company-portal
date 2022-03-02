import React, { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import Hamburger from "../../admin_assets/Hamburger";
import AuthContext from "../../context/AuthContext";
import { useRef } from "react";
import axios from "axios";
export const HamburgerMenu = () => {
  const refA = useRef();
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);
  const onClickHandler = ()=>{
      ctx.LogOut();
      navigate('/');
  }
  const fn = async () => {
    const res = await axios.get(`http://localhost:8000/company/companies`,{headers:{
      authorization:"Bearer "+ctx.token
    }});
    console.log(res);
    const datas = res.data;
    let x = ["Company Details\n\n"];
    function makeCsv(rows) {
      return rows.map((r) => r.join(",")).join("\n");
    }
    datas.forEach((data,ind)=>{
      delete data.INFO.password;
      delete data.INFO.pocName;
      delete data.INFO.designation;
      delete data.INFO.registeredEmail;
      delete data.INFO.mobileNumber;
      delete data.createdAt;
      delete data.updatedAt;
      delete data.__v;
      data.JNF.forEach((jnf)=>{
        delete jnf._id;
      })
      data.INF.forEach((inf)=>{
        delete inf._id;
      })
      let entries = [`Company ${ind+1}\n`];
      let infoEntries = Object.entries(data.INFO);
      entries = entries.concat([...infoEntries]);
      console.log(entries);
      // x.concat(makeCsv(entries));
      // x.push("\n\n","JNF\n\n");

      // //going for jnf and inf
      // const y = [];
      // var sz = data.JNF.length;
      // for(let i = 0;i<data.JNF.length;i++){
      //     const arr = data.JNF[i];
      //     const arr2 = Object.entries(arr);
      //     const arr3 = makeCsv(arr2);
      //     x.push(`JNF:${i+1}\n`)
      //     x.push(arr3);
      //     x.push("\n\n");
      // }
      
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
    })  
    console.log(x);
    const blob = new Blob(x);
      console.log(refA);
      refA.current.href =  URL.createObjectURL(blob);
  }


  return (
    <div className="w-16">
      <Menu as="div" className="relative inline-block text-left">
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
                  <a download="student.csv" ref={refA}  id="a" onClick={fn()}>Export data for students</a>
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
                  Export data(.csv File)
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
