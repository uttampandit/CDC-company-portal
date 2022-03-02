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
  const refa = useRef();
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);
  const onClickHandler = ()=>{
      ctx.LogOut();
      navigate('/');
  }
  //company csv
  const fnCompany = async () => {
    const res = await axios.get(`http://localhost:8000/company/companies`,{headers:{
      authorization:"Bearer "+ctx.token
    }});
    const datas = res.data;
    const x = ["All Company Refistered\n\n"];
    function makeCsv(rows) {
      return rows.map((r) => r.join(",")).join("\n");
    }
    var sz = datas.length;
    for(let i=0;i<sz;i++)
    {
      x.push(`Company ${i+1}\n\n`);
      const data = datas[i];
      delete data.INFO.password;
      data.JNF.forEach((jnf)=>{
        delete jnf._id;
      })
      data.INF.forEach((inf)=>{
      delete inf._id;
      })
      const entries = Object.entries(data.INFO);
      x.push("Company datails\n\n");
      x.push(makeCsv(entries));
      x.push("\n\n");
      x.push("JNF\n\n");
      const y = [];
      for(let j = 0;j<data.JNF.length;j++){
          const arr = data.JNF[j];
          const arr2 = Object.entries(arr);
          const arr3 = makeCsv(arr2);
          x.push(`JNF:${j+1}\n`)
          x.push(arr3);
          x.push("\n\n");
      }
      x.push("INF\n\n");
      for(let j=0;j<data.INF.length;j++)
      {
          const arr = data.INF[j];
          const arr2 = Object.entries(arr);
          const arr3 = makeCsv(arr2);
          x.push(`INF:${j+1}\n`)
          x.push(arr3);
          x.push("\n\n");
      }
      
    }
    
    const blob = new Blob(x);
    //console.log(refa);
    refa.current.href =  URL.createObjectURL(blob);
  }






  //fn 
  const fn = async () => {
    const res = await axios.get(`http://localhost:8000/company/companies`,{headers:{
      authorization:"Bearer "+ctx.token
    }});
    const datas = res.data;
    const x = ["All Company Refistered\n\n"];
    function makeCsv(rows) {
      return rows.map((r) => r.join(",")).join("\n");
    }
    var sz = datas.length;
    for(let i=0;i<sz;i++)
    {
      x.push(`Company ${i+1}\n\n`);
      const data = datas[i];
      delete data.INFO.password;
      delete data.INFO.pocName;
      delete data.INFO.designation;
      delete data.INFO.registeredEmail;
      delete data.INFO.mobileNumber;
      data.JNF.forEach((jnf)=>{
        delete jnf._id;
      })
      data.INF.forEach((inf)=>{
      delete inf._id;
      })
      const entries = Object.entries(data.INFO);
      x.push("Company datails\n\n");
      x.push(makeCsv(entries));
      x.push("\n\n");
      x.push("JNF\n\n");
      const y = [];
      for(let j = 0;j<data.JNF.length;j++){
          const arr = data.JNF[j];
          const arr2 = Object.entries(arr);
          const arr3 = makeCsv(arr2);
          x.push(`JNF:${j+1}\n`)
          x.push(arr3);
          x.push("\n\n");
      }
      x.push("INF\n\n");
      for(let j=0;j<data.INF.length;j++)
      {
          const arr = data.INF[j];
          const arr2 = Object.entries(arr);
          const arr3 = makeCsv(arr2);
          x.push(`INF:${j+1}\n`)
          x.push(arr3);
          x.push("\n\n");
      }
      
    }
    
    const blob = new Blob(x);
    //console.log(refa);
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
                  <a download="company.csv" ref={refa}  id="a" onClick={fnCompany()}>Export data(.csv File)</a>
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
