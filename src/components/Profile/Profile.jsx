import React, { useState } from "react";
import { user } from "../../assets";

import CountUp from "react-countup";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const buttons = [
    { id: 1, name: "Overview" },
    { id: 2, name: "Settings" },
    { id: 3, name: "Billings" },
    { id: 4, name: "Statements" },
    { id: 5, name: "Referrals" },
    { id: 6, name: "API Keys" },
    { id: 7, name: "Logs" }
  ];

  return (
    <div className="p-4 lg:px-32 bg-gray-100">
      <div className="md:p-6 p-2 bg-white rounded-md grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="flex justify-start items-center gap-4  md:col-span-2 animate_left">
          <div className="p-2 relative">
            <img
              src={user}
              alt="user"
              className=" w-28 rounded-full"
            />
            <div className="w-3 h-3 bg-green-500 rounded-full right-3.5 bottom-6 border border-white absolute" />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center ">
              <h2 className="md:text-[24px] font-semibold">Max Smith</h2>
              <i className="mx-1 fa-regular text-blue-500 fa-circle-check" />
              <div className=" px-1 rounded text-[10px] bg-green-200 text-green-500 flex items-center justify-center">
                Upgrade To Pro
              </div>
            </div>
            <div className="flex gap-2">
              <p className="text-gray-500 text-xs flex items-center gap-1">
                <i className="fa fa-user p-0.5 text-[10px] border rounded-full" />Developer
              </p>
            </div>
            <div className="flex gap-2">
              <button className="animate_top p-0.5 px-2 bg-blue-500 text-white font-[400] tracking-wide rounded hover:shadow-xl hover:scale-105 duration-500">
                Follow
              </button>
              <button className="animate_bottom p-0.5 px-2 border border-blue-500 font-[400] text-blue-500 rounded hover:shadow-xl hover:scale-105 duration-500">
                Hire Me
              </button>
            </div>
          </div>
        </div>
        <div className=" md:col-span-1">
          <div className="mb-6">
            <div className="flex items-center justify-between ">
              <p>Pofile Compleation </p>
              <p>%50</p>
            </div>
            <div className="h-1.5 bg-gray-200  my-1 rounded-lg">
              <div className={`h-1.5 bg-green-400 rounded-lg w-[50%]`} />
            </div>
          </div>
          <div className=" flex items-center justify-between lg:gap-4 gap-2">
            <div className="text-center border-2 border-dotted rounded-lg py-2 w-32 animate_left">
              <b>
                <i className="fa fa-arrow-up text-green-400 mr-2" />${<CountUp enableScrollSpy start={0} end={4500} duration={3} />}
              </b>
              <p className="text-gray-400 font-[500]">Earning</p>
            </div>
            <div className="text-center border-2 border-dotted rounded-lg py-2 w-32 animate_bottom">
              <b>
                <i className="fa fa-arrow-down text-red-400 mr-2" />{" "}
                <CountUp enableScrollSpy start={0} end={75} duration={3} />
              </b>
              <p className="text-gray-400 font-[500]">Projects</p>
            </div>
            <div className="text-center border-2 border-dotted rounded-lg py-2  w-32 animate_right">
              <b>
                <i className="fa fa-arrow-up text-green-400 mr-2" />%{<CountUp enableScrollSpy start={0} end={60} duration={3} />}
              </b>
              <p className="text-gray-400 font-[500]">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 p-0.5">
        {buttons.map(item =>
          <button
            key={item.id}
            className={`${item.name == "Overview"
              ? "bg-white font-[400]"
              : "font-[100]"} p-1 md:px-2 mx-0.5 hover:bg-white  rounded-md drop-shadow duration-500 animate_bottom sm:text-[18px] text-[10px]`}
          >
            {item.name}
          </button>
        )}
 
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2 ">
        <div className="bg-white p-5 animate_left">
          <div className=" flex justify-between  mb-2">
            <h2 className="font-[600]">Profile Deteils</h2>
            <div
              className="bg-blue-400 p-1 px-2 rounded text-white cursor-pointer hover:scale-105 duration-500 font-[500]"
              onClick={() => setEdit(!edit)}
            >
              {!edit ? <i className="fa fa-edit" /> : "Save"}
            </div>
          </div>
          <div className="flex items-center justify-between ">
            <div className="grid gap-2">
              <p className="text-gray-400">Full Name</p>
              <p className="text-gray-400">
                Company <i className="fa fa-" />
              </p>
              <p className="text-gray-400">
                Contack Phone <i className="fa fa-" />
              </p>
              <p className="text-gray-400">Company Site</p>
              <p className="text-gray-400">Country</p>
              <p className="text-gray-400">Communicatyion</p>
              <p className="text-gray-400">Allow Changes</p>
            </div>
            <div className="grid gap-2 ">
              <input
                type="text"
                defaultValue={"Max Smith"}
                disabled={!edit}
                className={`${edit
                  ? "border rounded-md"
                  : "border border-transparent"} outline-none text-start text-[16px] font-[500] bg-transparent w-36`}
              />
              <input
                type="text"
                defaultValue={"Keenthemes"}
                disabled={!edit}
                className={`${edit
                  ? "border rounded-md"
                  : "border border-transparent"} outline-none text-start text-[16px] font-[500] bg-transparent w-36`}
              />
              <input
                type="text"
                defaultValue={"044 3276 454 935"}
                disabled={!edit}
                className={`${edit
                  ? "border rounded-md"
                  : "border border-transparent"} outline-none text-start text-[16px] font-[500] bg-transparent w-36`}
              />
              <input
                type="text"
                defaultValue={"keenthemes.com"}
                disabled={!edit}
                className={`${edit
                  ? "border rounded-md"
                  : "border border-transparent"} outline-none text-start text-[16px] font-[500] bg-transparent w-36`}
              />
              <input
                type="text"
                defaultValue={"Germany"}
                disabled={!edit}
                className={`${edit
                  ? "border rounded-md"
                  : "border border-transparent"} outline-none text-start text-[16px] font-[500] bg-transparent w-36`}
              />
              <input
                type="text"
                defaultValue={"Email, Phone"}
                disabled={!edit}
                className={`${edit
                  ? "border rounded-md"
                  : "border border-transparent"} outline-none text-start text-[16px] font-[500] bg-transparent w-36`}
              />
              <input
                type="text"
                defaultValue={"Yes"}
                disabled={!edit}
                className={`${edit
                  ? "border rounded-md"
                  : "border border-transparent"} outline-none text-start text-[16px] font-[500] bg-transparent w-36`}
              />
            </div>
          </div>
          <div className="flex items-center justify-between" />
          <div className="flex items-center justify-between" />
        </div>
        <div className="bg-white p-5 rounded-lg animate_right">
          <h2 className="font-[600] mb-2">About</h2>
          <p className="text-gray-500 text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            dolore optio expedita, ut consectetur sint quisquam ipsa adipisci.
            Ratione tempora ipsum dignissimos maxime quo aspernatur at quas
            illum quod atque velit delectus voluptatibus consequuntur dolor enim
            quibusdam omnis laudantium nostrum est voluptatum recusandae,
            necessitatibus cupiditate soluta iure. Saepe, quibusdam. Placeat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
