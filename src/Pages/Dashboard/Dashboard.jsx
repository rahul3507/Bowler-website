"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../../components/ui/sidebar";
import { AiOutlineHome } from "react-icons/ai";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { href, NavLink, Outlet, useLocation } from "react-router-dom";

  export default function Dashboard() {
    const location = useLocation();
    const isHomeActive = () => {
      return (location.pathname.includes('/dashboard/home'))       
      };

  // const links = [
  //   {
  //     label: "Dashboard",
  //     href: "/dashboard/homepage",

      
  //     icon: (
  //       <IconBrandTabler className="h-6 w-6 shrink-0 text-white dark:text-neutral-200" />
  //     ),
  //   },
  //   {
  //     label: "Profile",
  //     href: "#",
  //     icon: (
  //       <IconUserBolt className="h-6 w-6 shrink-0 text-white dark:text-neutral-200" />
  //     ),
  //   },
  //   {
  //     label: "Settings",
  //     href: "#",
  //     icon: (
  //       <IconSettings className="h-6 w-6 shrink-0 text-white dark:text-neutral-200" />
  //     ),
  //   },
  //   {
  //     label: "Logout",
  //     href: "#",
  //     icon: (
  //       <IconArrowLeft className="h-6 w-6 shrink-0 text-white dark:text-neutral-200" />
  //     ),
  //   },
  // ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        " flex w-full  flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-white dark:bg-neutral-800",
        // for your use case, use `h-screen` instead of `h-[60vh]`
        "h-[60vh]"
      )}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between bg-sidebar text-white h-screen gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <div className="my-6 ">
              {open ? <Logo /> : <LogoIcon />}
            </div>
            <hr className="w-full text-white"/>
            <div className="mt-8 text-white flex flex-col gap-2">
              {/* {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))} */}
              <div>
                <ul className="space-y-2">
                
                  <li>
                    <NavLink
                      to="/dashboard/home"
                      className={() =>
                        `block py-3 px-4 font-medium transition-colors rounded-lg ${
                          isHomeActive()
                            ? "bg-button-bg text-white"
                            : "text-button-text hover:bg-button-bg "
                        }`
                      }
                    >
                      <AiOutlineHome />
                      Home
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={60}
                    height={60}
                    alt="Avatar" />
                ),
              }} />
          </div>
        </SidebarBody>
      </Sidebar>
      <Outlet />
    </div>
  );
}
export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-white">
      <div
        className="h-6 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-lg md:text-xl whitespace-pre text-white dark:text-white">
        Bowlersnetwork
      </motion.span>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm  font-normal text-white">
      <div
        className="h-6 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-white dark:bg-white" />
    </a>
  );
};

