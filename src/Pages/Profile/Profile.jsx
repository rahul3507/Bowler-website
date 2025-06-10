import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Home, BarChart3, MessageSquare, Users, TrendingUp, Trophy, Search, User } from "lucide-react"
import { Button } from '@/components/ui/button'
import { NavLink, Outlet } from 'react-router-dom'

const Profile = () => {
    const [activeTab, setActiveTab] = useState("General")

    const tabs = [
                    { name: "General", to: "/dashboard/profile" },
                    { name: "Bowling Statistics", to: "/dashboard/profile/bowlingstatistics" },
                    { name: "Media", to: "/dashboard/profile" },
                    { name: "Achievement", to: "/dashboard/profile" },
                    { name: "Privacy", to: "/dashboard/profile/privacy" },
                    { name: "Settings", to: "/dashboard/profile" }
                ]
  return (
    <div className="flex-1 h-screen overflow-y-auto">
        
        {/* Header */}
        <div className="bg-transparent border-b border-[#e8e9e6] p-6">
            <div className="flex flex-col md:flex-row  justify-center md:justify-between  items-center md:items-start ">
                <div className='text-center md:text-left mb-4 md:mb-0'>
                  <h1 className="text-xl md:text-2xl font-bold text-primary-heading dark:text-white mb-2">Profile</h1>
                  <p className="text-secondary dark:text-gray-200 text-sm md:text-base">
                    Manage your profile information and settings
                  </p>
                </div>
                <div className="relative rounded-4xl dark:bg-gray-300">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tertiary w-4 h-4" />
                  <Input placeholder="Overview" className="pl-9 w-64  rounded-4xl bg-white border-gray-200" />
                </div>
            </div>
        </div> 

        {/* Tabs */}
        <div className="px-6 pt-2 md:pt-6">
          <div className="flex flex-wrap justify-between md:justify-start gap-1 md:gap-2 mb-2 md:mb-6">
            {tabs.map((tab) => (
              <NavLink
                to={tab.to}
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-sm md:text-base font-medium cursor-pointer  ${
                  activeTab === tab.name
                    ? "bg-button-bg text-white"
                    : "text-secondary bg-transparent hover:bg-gray-200"
                }`}
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
  )
}

export default Profile