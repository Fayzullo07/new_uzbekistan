import React from "react";
import { lang, user } from "../../assets";

const Navbar = () => {
  
  return <div className="p-4 lg:px-32 bg-[#0b3064] relative h-24 overflow-hidden z-50">
      <div className="hidden lg:flex">
        <div className="bg-[#077a75] w-24 h-24 absolute top-0 -right-16 rotate-45 z-10" />
        <div className="bg-[#05aa7f] w-24 h-24 absolute top-0 -right-5 rotate-45" />
        <div className="bg-[#05aa7f] w-24 h-24 absolute top-0 right-5 rotate-45" />
        <div className="bg-[#05aa7f] w-24 h-24 absolute top-0 right-14 rotate-45" />
        <div className="bg-[#05aa7f] w-24 h-24 absolute top-0 right-24 rotate-45" />
        <div className="bg-[#05aa7f] w-24 h-24 absolute top-0 right-32 rotate-45" />
        <div className="bg-[#05aa7f] w-24 h-24 absolute top-0 right-40 rotate-45 z-10" />
        <div className="bg-[#087976] w-24 h-24 absolute top-0 right-48 rotate-45 " />
        <div className="bg-[#087976] w-24 h-24 absolute top-0 right-56 rotate-45" />
        <div className="bg-[#087976] w-24 h-24 absolute top-0 right-64 rotate-45 " />
        <div className="bg-[#087976] w-24 h-24 absolute top-0 right-[300px] rotate-45" />
        <div className="bg-[#087976] w-24 h-24 absolute top-0 right-[300px] rotate-45" />
        <div className="border-l border-b border-gray-600 w-24 h-24 absolute top-0 right-[400px] rotate-45" />
        <div className="border-l border-b border-gray-600 w-24 h-24 absolute top-0 right-[500px] rotate-45" />
        <div className="border-l border-b border-gray-600 w-24 h-24 absolute top-0 right-[700px] rotate-45" />
        <div className="border-l border-b border-gray-600 w-24 h-24 absolute top-0 right-[800px] rotate-45" />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center gap-2">
          <div className="w-[2px] h-16 bg-green-500 animate_top">
            <div className="w-[2px] h-6 bg-green-200 animate_left" />
          </div>
          <div className="text-[14px] font-[600] text-white">
            <p className="animate_left">
              New
            </p> <p className="animate_right">
              Uzbekiston
            </p> <p className="animate_left">University</p>
          </div>
        </div>
        <div className="z-20  flex items-center lg:gap-4 gap-2">
          <img src={lang} width={20} className=" rounded-full animate_right" alt="user" />
          <img src={user} width={30} className=" rounded-full animate_left" alt="user" />
        </div>
      </div>
    </div>;
};

export default Navbar;
