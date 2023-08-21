import React, { useState } from "react";

const BottomNav = () => {
  const [hover_h, setHoverH] = useState(false);
  const navs = [
    { id: 1, slug: "/announcements", name: "Announcements" },
    { id: 2, slug: "/courses", name: "Courses" },
    { id: 3, slug: "/time-table", name: "Time Table" },
    { id: 4, slug: "/grades", name: "Grades" },
    { id: 5, slug: "/my-information", name: "My Information" },
    { id: 6, slug: "/student-service", name: "Student Service" }
  ];
  return (
    <div className="p-4 lg:px-32 animate_top bg-white relative">
      <ul className=" hidden md:flex flex-wrap md:gap-6 gap-1">
        {navs.map(item =>
          <li
            key={item.id}
            className={`${item.slug == "/my-information"
              ? "bg-gray-200"
              : ""} md:text-[16px] text-[10px] p-1 md:px-2 hover:bg-gray-300 text-gray-600 hover:text-black duration-500 rounded`}
          >
            <a href={`#${item.slug}`}>
              {item.name}
            </a>
          </li>
        )}
      </ul>

      <button
        onMouseEnter={() => setHoverH(true)}
        onMouseLeave={() => setHoverH(false)}
        className="flex md:hidden"
      >
        {" "}<i className="fa fa-bars" />{" "}
      </button>
      <ul
        onMouseEnter={() => setHoverH(true)}
        onMouseLeave={() => setHoverH(false)}
        className={`${hover_h
          ? "animate_h"
          : "hidden"} rounded border overflow-hidden flex flex-col md:gap-6 gap-1 absolute top-0 bg-white z-50 p-2`}
      >
        {navs.map(item =>
          <li
            onClick={() => setHoverH(false)}
            key={item.id}
            className={`${item.slug == "/my-information"
              ? "bg-gray-200"
              : ""} text-[16px] p-1 px-2 hover:bg-gray-300 text-gray-600 hover:text-black duration-500 rounded`}
          >
            <a href={`#${item.slug}`}>
              {item.name}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default BottomNav;
