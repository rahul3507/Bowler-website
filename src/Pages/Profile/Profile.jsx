/** @format */

import { Input } from "@/components/ui/input";
import React from "react";
import {
  Home,
  BarChart3,
  MessageSquare,
  Users,
  TrendingUp,
  Trophy,
  Search,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink, Outlet } from "react-router-dom";

const Profile = () => {
  const tabs = [
    { name: "General", to: "/dashboard/profile", end: true },
    { name: "Bowling Statistics", to: "/dashboard/profile/bowlingstatistics" },
    { name: "Media", to: "/dashboard/profile/media" },
    { name: "Privacy", to: "/dashboard/profile/privacy" },
    { name: "Settings", to: "/dashboard/profile/settings" },
  ];

  return (
    <div className="flex-1 h-screen overflow-y-auto bg-white">
      {/* Header */}
      <div className="bg-transparent border-b border-[#e8e9e6] p-6">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-xl md:text-2xl font-bold text-primary-heading mb-2">
              Profile
            </h1>
            <p className="text-secondary text-sm md:text-base">
              Manage your profile information and settings
            </p>
          </div>
          <div className="relative rounded-4xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tertiary w-4 h-4" />
            <Input
              placeholder="Overview"
              className="pl-9 w-64 rounded-4xl bg-white border-gray-200"
            />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 pt-2 md:pt-6">
        <div className="flex flex-wrap justify-center md:justify-start gap-1 md:gap-2 mb-2 md:mb-6">
          {tabs.map((tab) => (
            <NavLink
              to={tab.to}
              end={tab.end}
              key={tab.name}
              className={({ isActive }) =>
                `px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-sm md:text-base font-medium cursor-pointer ${
                  isActive
                    ? "bg-button-bg text-white"
                    : "text-secondary bg-transparent hover:bg-gray-200"
                }`
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
