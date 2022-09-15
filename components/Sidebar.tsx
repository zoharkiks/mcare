import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Sidebar = ({setOpen,open}) => {


  return (
    <div className="fixed left-0 top-0 flex items-center justify-between h-screen flex-col border-r-2 bg-white  py-8 ">
     <Icon onClick={()=>setOpen(false)} className="absolute top-2 right-2 cursor-pointer md:hidden" icon="ant-design:close-outlined" />
      <h1 className=" text-3xl font-bold text-orange-600">
        M.<span className="text-black">Care</span>
      </h1>
      {/* Links */}
      <div className="flex flex-col font-medium text-gray-600 space-y-3 mb-40  ">
        <div className="flex cursor-pointer items-center space-x-3 linkEffects">
          <Icon className="h-5 w-5" icon="ep:menu" />
          <h2 className="">Dashboard</h2>
        </div>

        <div className="flex items-center space-x-3 cursor-pointer linkEffects ">
        <Icon className='h-5 w-5' icon="akar-icons:calendar" />
<h2 className=''>Appointment</h2>
        </div>

        <div className="flex items-center ju space-x-3 cursor-pointer linkEffects">
        <Icon className='h-5 w-5' icon="icon-park-outline:stethoscope" />
<h2 className=''>Doctors</h2>
        </div>

        <div className="flex items-center space-x-3 cursor-pointer linkEffects">
        <Icon className='h-5 w-5' icon="bi:house" />
<h2 className=''>Departments</h2>
        </div>

        <div className="flex items-center space-x-3 cursor-pointer linkEffects ">
        <Icon className='h-5 w-5' icon="bi:telephone" />
<h2 className=''>Calls</h2>
        </div>

        <div className="flex items-center space-x-3 cursor-pointer linkEffects">
        <Icon className='h-5 w-5' icon="bi:chat" />
<h2 className=''>Chats</h2>
        </div>
      </div>

      {/* SignOut */}
      <div className="flex items-center  justify-evenly cursor-pointer space-x-4">
      <Icon className="h-6 w-6 text-orange-600" icon="la:sign-out-alt" />
<h2 className="font-bold text-gray-600">Log Out</h2>
      </div>
    </div>
  );
};

export default Sidebar;
