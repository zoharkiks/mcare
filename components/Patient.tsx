import { Icon } from "@iconify/react";
import React from "react";

const Patient = () => {
  return (
    <div className="flex flex-col items-center rounded-lg bg-[#f8896d] p-4 relative text-white  ">
        <div className="rounded-full bg-white p-1 mb-2">
          <img
            src="https://thumbs.dreamstime.com/b/old-man-20313005.jpg"
            alt="man"
            className="h-20 w-20 rounded-full object-cover"
          />
        </div>
        <Icon className="h-6 w-6 text-white absolute top-4 right-4" icon="clarity:settings-solid" />

      <h1 className="font-medium">Mike Williams</h1>
      <p className="text-sm">Last Checkin: 1 Sep 2022</p>
      <div className="grid grid-cols-2 gap-x-10 my-4">
        <div className="flex flex-col">
          <span>Sex</span>
          <span>Age</span>
          <span>Department</span>
        </div>
        <div className="flex flex-col">
          <span>: Male</span>
          <span>: 88</span>
          <span>: Cardiology</span>
        </div>
      </div>
      <button className="bg-white text-black py-2 px-4 rounded-lg text-xs font-bold"> See More</button>
    </div>
  );
};

export default Patient;
