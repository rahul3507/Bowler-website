import  { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../../components/ui/sidebar";
import { CiHome } from "react-icons/ci";
import { LuMessageCircleMore, LuUsers } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Calendar, ChartColumn } from "lucide-react";

export default function Dashboard() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Fixed isHomeActive function to correctly check multiple paths
  const isHomeActive = () => {
    const path = location.pathname;
    return path === "/dashboard" || path === "/dashboard/players" || path === "/dashboard/newsfeed";
  };

  const isMyTeamsActive = () => {
    return location.pathname.includes("/dashboard/myteams");
  };

  const isAnalyticsActive = () => {
    return location.pathname.includes("/dashboard/analytics");
  };

  const isTournamentsActive = () => {
    return location.pathname.includes("/dashboard/tournaments");
  };

  const isMessagesActive = () => {
    return location.pathname.includes("/dashboard/messages");
  };

  const isProfileActive = () => {
    return location.pathname.includes("/dashboard/profile");
  };

  return (
    <div
      className={cn(
        " flex w-full  flex-1 flex-col overflow-hidden rounded-md  border-neutral-200 bg-white md:flex-row dark:border-white dark:bg-neutral-800",
        "h-[60vh]"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between px-1 md:px-2 bg-sidebar text-white min-h-screen  gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <div className={`mb-6 mt-0 md:mt-3 ${!open ? 'mx-auto' : ''}`}>
              {open ? <Logo /> : <LogoIcon />}
            </div>
            <hr className="w-full text-white"/>
            <div className="mt-8 text-white flex flex-col gap-2">
              <div>
                <ul className="space-y-2 text-sm md:text-base">
                  <li>
                    <NavLink
                      to="/dashboard"
                      className={() =>
                        ` py-2 px-0 flex font-medium transition-colors rounded-sm md:rounded-lg  ${
                          isHomeActive()
                            ? "bg-button-bg  "
                            : "bg-transparent  hover:bg-button-bg/45 "
                        }`
                      }
                    >
                      {!open ? <CiHome className="w-6 h-6 m-auto"/> :  <div className="flex px-2 gap-2">
                        <CiHome className="w-6 h-6"/>
                        Home
                      </div>}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/messages"
                      className={() =>
                        ` py-2 px-0 flex font-medium transition-colors rounded-sm md:rounded-lg ${
                          isMessagesActive()
                            ? "bg-button-bg py-0 "
                            : "bg-transparent  hover:bg-button-bg/45 "
                        }`
                      }
                    >
                      {!open ? <LuMessageCircleMore className="w-6 h-6 m-auto"/> :  <div className="flex px-2 gap-2">
                        <LuMessageCircleMore className="w-6 h-6"/>
                        Messages
                      </div>}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/myteams"
                      className={() =>
                        ` py-2 px-0 flex font-medium transition-colors rounded-sm md:rounded-lg ${
                          isMyTeamsActive()
                            ? "bg-button-bg py-0 "
                            : "bg-transparent  hover:bg-button-bg/45 "
                        }`
                      }
                    >
                      {!open ? <LuUsers className="w-6 h-6 m-auto"/> :  <div className="flex px-2 gap-2">
                        <LuUsers className="w-6 h-6"/>
                        My Teams
                      </div>}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/analytics"
                      className={() =>
                        ` py-2 px-0 flex font-medium transition-colors rounded-sm md:rounded-lg ${
                          isAnalyticsActive()
                            ? "bg-button-bg py-0 "
                            : "bg-transparent  hover:bg-button-bg/45 "
                        }`
                      }
                    >
                      {!open ? <ChartColumn className="w-6 h-6 m-auto"/> :  <div className="flex px-2 gap-2">
                        <ChartColumn className="w-6 h-6"/>
                        Analytics
                      </div>}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/tournaments"
                      className={() =>
                        ` py-2 px-0 flex font-medium transition-colors rounded-sm md:rounded-lg ${
                          isTournamentsActive()
                            ? "bg-button-bg py-0 "
                            : "bg-transparent  hover:bg-button-bg/45 "
                        }`
                      }
                    >
                      {!open ? <Calendar className="w-6 h-6 m-auto"/> :  <div className="flex px-2 gap-2">
                        <Calendar className="w-6 h-6"/>
                        Tournaments
                      </div>}
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <NavLink
            to="/dashboard/profile"
            className={() =>
              ` py-0 px-2 flex font-medium transition-colors rounded-sm md:rounded-lg ${
                isProfileActive()
                  ? "bg-button-bg py-0 "
                  : "bg-transparent  hover:bg-button-bg/45 "
              }`
            }
          >
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
                    alt="Avatar"
                  />
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
      <div
        className=" shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-transparent dark:bg-white"
      />
      <div className="h-9 w-9 md:h-15 md:w-15 shrink-0 rounded-full bg-transparent">
        <img src="/Bowling-logo.svg" alt="" />
      </div>
      <span
        className="font-medium text-base md:text-xl whitespace-pre text-white dark:text-white"
      >
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
      <div
        className="h-7 w-7 shrink-0 rounded-full rounded-bl-sm bg-transparent"
      >
        <img src="/Bowling-logo.svg" alt="" />
      </div>
    </a>
  );
};