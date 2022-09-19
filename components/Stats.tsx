import { Icon } from "@iconify/react";
import React from "react";

const Stats = ({title,stats, icon,iconColor,textColor,iconBackground}) => {
  return (
    <div className="grid grid-cols-2 bg-white py-6 rounded-2xl h-max  ">
      <div className="  flex flex-col items-center justify-center ">
        <div className={`rounded-full ${iconBackground} p-3`}>
          <Icon
            icon={`${icon}`}
            className={`h-9 w-9 ${iconColor}`}
          />
        </div>
      </div>

      <div className="flex flex-col justify-between  ">
        <h3 className="font-semibold text-sm  ">{title}</h3>
        <p className={`${textColor} text-2xl font-medium`}>{stats}</p>
      </div>
    </div>
  );
};

export default Stats;
