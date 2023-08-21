import React from "react";
import BottomNav from "../components/BottomNav/BottomNav";
import Profile from "../components/Profile/Profile";

const Home = () => {
  return (
    <>
      <BottomNav />
      <div className="p-4 lg:px-32">
        <div className="flex justify-between items-center">
          <div>
            
        <h2 className="font-[700] md:text-2xl">My Information</h2>
        <div className="flex items-center justify-normal gap-1 text-gray-600">

          <i className="fa fa-home text-sm"></i> 
          <i className="fa fa-chevron-right text-sm"></i>
          <p className="text-black font-[500]">Home</p>
          <i className="fa fa-chevron-right text-sm"></i>
          <p>Account</p>
        </div>
          </div>
        <div className="flex justify-center items-center gap-2">
          <button className="p-1 px-2 border rounded-md bg-white md:text-lg hover:scale-105 duration-300">New Projects</button>
          <button className="p-1 px-2 rounded-md bg-gray-800 text-white md:text-lg hover:scale-105 duration-300">Reports</button>
        </div>
        </div>
      </div>
      <Profile/>
    </>
  );
};

export default Home;
