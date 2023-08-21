import React from "react";

const Footer = () => {
  return <div className="p-4 lg:px-32">
      <div className="flex items-center justify-between text-gray-400">
        <div className="md:text-[16px] text-[12px]">
          2023 © New Uzbekistan University
        </div>
        <div className="md:text-[16px] flex items-center gap-2 text-gray-400 sm:text-[12px]">
          <p>About</p>
          <p>Support</p>
          <p>FAQ</p>
        </div>
      </div>
    </div>;
};

export default Footer;
