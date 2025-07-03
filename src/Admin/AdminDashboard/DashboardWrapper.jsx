/** @format */

"use client";

import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { LayoutGrid, MessageCircleMore } from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function DashboardWrapper() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Active state functions for each route
  const isOverviewActive = () => {
    return location.pathname === "/admin-dashboard";
  };

  const isAmateurPlayerActive = () => {
    return location.pathname.includes("/admin-dashboard/amateur-player");
  };

  const isProPlayerActive = () => {
    return location.pathname.includes("/admin-dashboard/pro-player");
  };

  const isBowlingCenterActive = () => {
    return location.pathname.includes("/admin-dashboard/bowling-center");
  };

  const isManufactureActive = () => {
    return location.pathname.includes("/admin-dashboard/manufacture");
  };

  const isTransactionActive = () => {
    return location.pathname.includes("/admin-dashboard/transaction");
  };

  const isSubscriptionActive = () => {
    return location.pathname.includes("/admin-dashboard/subscription");
  };

  return (
    <div
      className={cn(
        "flex w-full flex-1 flex-col overflow-hidden rounded-md border-neutral-200 bg-white md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between px-1 md:px-2 bg-[#111B05] text-white min-h-screen gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <div className={`mb-6 mt-0 md:mt-3 ${!open ? "mx-auto" : ""}`}>
              {open ? <Logo /> : <LogoIcon />}
            </div>
            <hr className="w-full text-white" />
            <div className="mt-8 text-white flex flex-col gap-2">
              <div>
                <ul className="space-y-2 text-sm md:text-base">
                  <li>
                    <NavLink
                      to="/admin-dashboard"
                      className={() =>
                        `py-2 px-0 flex font-medium transition-colors rounded-sm md:rounded-lg ${
                          isOverviewActive()
                            ? "bg-button-bg"
                            : "bg-transparent hover:bg-button-bg/45"
                        }`
                      }
                    >
                      {!open ? (
                        <LayoutGrid className="w-6 h-6 m-auto" />
                      ) : (
                        <div className="flex px-2 gap-2">
                          <LayoutGrid className="w-6 h-6" />
                          Overview
                        </div>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin-dashboard/amateur-player"
                      className={() =>
                        `py-2 px-0 flex font-medium transition-colors rounded-sm md:rounded-lg ${
                          isAmateurPlayerActive()
                            ? "bg-button-bg"
                            : "bg-transparent hover:bg-button-bg/45"
                        }`
                      }
                    >
                      {!open ? (
                        <MessageCircleMore className="w-6 h-6 m-auto" />
                      ) : (
                        <div className="flex px-2 gap-2">
                          <MessageCircleMore className="w-6 h-6" />
                          Amateur Player
                        </div>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin-dashboard/pro-player"
                      className={() =>
                        `py-2 px-0 flex font-medium transition-colors rounded-sm md:rounded-lg ${
                          isProPlayerActive()
                            ? "bg-button-bg"
                            : "bg-transparent hover:bg-button-bg/45"
                        }`
                      }
                    >
                      {!open ? (
                        <MessageCircleMore className="w-6 h-6 m-auto" />
                      ) : (
                        <div className="flex px-2 gap-2">
                          <MessageCircleMore className="w-6 h-6" />
                          Pro Player
                        </div>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin-dashboard/bowling-center"
                      className={() =>
                        `py-2 px-0 flex font-medium transition-colors rounded-sm md:rounded-lg ${
                          isBowlingCenterActive()
                            ? "bg-button-bg"
                            : "bg-transparent hover:bg-button-bg/45"
                        }`
                      }
                    >
                      {!open ? (
                        <MessageCircleMore className="w-6 h-6 m-auto" />
                      ) : (
                        <div className="flex px-2 gap-2">
                          <MessageCircleMore className="w-6 h-6" />
                          Bowling Center
                        </div>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin-dashboard/manufacture"
                      className={() =>
                        `py-2 px-0 flex font-medium transition-colors rounded-sm md:rounded-lg ${
                          isManufactureActive()
                            ? "bg-button-bg"
                            : "bg-transparent hover:bg-button-bg/45"
                        }`
                      }
                    >
                      {!open ? (
                        <MessageCircleMore className="w-6 h-6 m-auto" />
                      ) : (
                        <div className="flex px-2 gap-2">
                          <MessageCircleMore className="w-6 h-6" />
                          Manufacture
                        </div>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin-dashboard/transaction"
                      className={() =>
                        `py-2 px-0 flex font-medium transition-colors rounded-sm md:rounded-lg ${
                          isTransactionActive()
                            ? "bg-button-bg"
                            : "bg-transparent hover:bg-button-bg/45"
                        }`
                      }
                    >
                      {!open ? (
                        <MessageCircleMore className="w-6 h-6 m-auto" />
                      ) : (
                        <div className="flex px-2 gap-2">
                          <MessageCircleMore className="w-6 h-6" />
                          Transaction
                        </div>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin-dashboard/subscription"
                      className={() =>
                        `py-2 px-0 flex font-medium transition-colors rounded-sm md:rounded-lg ${
                          isSubscriptionActive()
                            ? "bg-button-bg"
                            : "bg-transparent hover:bg-button-bg/45"
                        }`
                      }
                    >
                      {!open ? (
                        <MessageCircleMore className="w-6 h-6 m-auto" />
                      ) : (
                        <div className="flex px-2 gap-2">
                          <MessageCircleMore className="w-6 h-6" />
                          Subscription
                        </div>
                      )}
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <NavLink
            to="/admin-dashboard/profile"
            className={() =>
              `py-0 px-2 flex font-medium transition-colors rounded-sm md:rounded-lg ${
                location.pathname.includes("/admin-dashboard/profile")
                  ? "bg-button-bg"
                  : "bg-transparent hover:bg-button-bg/45"
              }`
            }
          >
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
          </NavLink>
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
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-white"
    >
      <div className="shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-transparent dark:bg-white" />
      <div className="h-9 w-9 md:h-15 md:w-15 shrink-0 rounded-full bg-transparent">
        <img src="/Bowling-logo.svg" alt="" />
      </div>
      <span className="font-medium text-base md:text-xl whitespace-pre text-white dark:text-white">
        Bowlersnetwork
      </span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-white"
    >
      <div className="h-7 w-7 shrink-0 rounded-full rounded-bl-sm bg-transparent">
        <img src="/Bowling-logo.svg" alt="" />
      </div>
    </a>
  );
};
