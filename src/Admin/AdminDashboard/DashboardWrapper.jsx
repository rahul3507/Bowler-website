"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { IconBrandTabler } from "@tabler/icons-react";
import { PiRanking } from "react-icons/pi";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

import { LayoutGrid, LogOut, Newspaper, ScrollText, Trophy, Vote ,} from "lucide-react";
import { Link, Outlet } from "react-router-dom";

export default function DashboardWrapper() {
  const links = [
    {
      label: "Overview",
      href: "/admin-dashboard/overview",
      icon: (
        <LayoutGrid  className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Amateur Player",
      href: "/admin-dashboard/amateur-player",
      icon: (
        <ScrollText className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Pro Player",
      href: "/admin-dashboard/pro-player",
      icon: (
        <Trophy className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Bowling Center",
      href: "/admin-dashboard/bowling-benter",
      icon: (
        <Vote className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Manufacture",
      href: "/admin-dashboard/manufacture",
      icon: (
        <PiRanking
          size={18}
          className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0"
        />
      ),
    },
    {
      label: "Transaction",
      href: "/admin-dashboard/transaction",
      icon: (
        <Newspaper className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Subscription",
      href: "/admin-dashboard/subscription",
      icon: (
        <Newspaper className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-white dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between  h-screen gap-10 bg-[#111B05] ">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo open={open} /> : <LogoIcon />}
            <div className="mt-10 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            {/* <SidebarLink
              link={{
                label: "Logout",
                href: "#",
                icon: (
                  <LogOut className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                ),
              }}
            /> */}
            <SidebarLink
              link={{
                label: "John Doe",
                href: "#",
                icon: (
                  <div className="h-7 w-7 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-medium">
                    N
                  </div>
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="w-full">
        <Outlet/>
      </div>
      
      {/* <Dashboard>{children}</Dashboard> */}
    </div>
    
  );
}
export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-white">
      <div
        className=" shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-transparent dark:bg-white" />
        <div className="h-9 w-9 md:h-15 md:w-15 shrink-0 rounded-full bg-transparent">
          <img src="/Bowling-logo.svg" alt="" />
        </div>
      <span
        
        className="font-medium text-base md:text-xl whitespace-pre text-white dark:text-white">

        Bowlersnetwork
      </span>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm  font-normal text-white">
      <div
        className="h-7 w-7 shrink-0 rounded-full   rounded-bl-sm bg-transparent" >
          <img src="/Bowling-logo.svg" alt="" />
      </div>
    </a>
  );
};


const Dashboard = () => {
  return (
    <div className="flex flex-1 bg-card">
      <div className="p-0 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-y-auto">
        <Outlet/>
      </div>
    </div>
  );
};
