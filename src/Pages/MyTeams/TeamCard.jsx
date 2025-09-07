/** @format */

import { MessageCircle } from "lucide-react";
import React from "react";
import { LuMessageCircleMore } from "react-icons/lu";

function TeamCard({ name, members, time, img }) {
  return (
    <div className="border rounded-lg p-2 md:p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src={img} alt={name} className="w-12 h-12 rounded-full" />
        <div>
          <h3 className="font-bold text-base md:text-xl lg:text-2xl  text-primary">
            {name}
          </h3>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="text-blue-500 dark:text-blue-300  text-xs md:text-base">
              {members} Members
            </span>
            <span className="text-secondary  text-xs md:text-base">
              Created {time}
            </span>
          </div>
        </div>
      </div>
      <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
        <LuMessageCircleMore size={20} className="text-primary" />
      </button>
    </div>
  );
}

export default TeamCard;
