import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between md:py-4 md:px-2 ">
      <Icon
        onClickCapture={() => setOpen(true)}
        className="h-10 w-10 cursor-pointer md:hidden"
        icon="ic:baseline-menu-open"
      />
      <h1 className="font-bold text-2xl hidden md:inline-block">Dashboard</h1>
      {open && <Sidebar open={open} setOpen={setOpen} />}

      <input className="rounded-2xl px-4 py-1 text-sm w-1/2 md:w-max" type="search" placeholder="Search Projects" />

      <div className="flex   ">
        <div className="flex rounded-full bg-white p-2 relative cursor-pointer    ">
          <Icon className="h-6 w-6 " icon="bxs:bell" />
        </div>
        <div className="relative right-4 top-0  flex h-5 w-5 items-center justify-center  rounded-full bg-orange-600 cursor-pointer">
          <span className="text-xs text-white">16</span>
        </div>

        <div className="flex bg-orange-600 rounded-full  items-center justify-center cursor-pointer">
<img className="h-10 w-10 p-1 rounded-full object-cover object-top" src="https://i0.wp.com/mytechoffer.com/wp-content/uploads/2022/05/2e2fac9d4a392456e511345021592dd2.jpeg?resize=700%2C884&ssl=1" alt="profile" />
      </div>


      </div>

   

    </div>
  );
};

export default Navbar;
