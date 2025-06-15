import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { Bell, ChevronDownIcon } from "lucide-react";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";

export const DashboardHeader = ({
  userName = "Robert",
  userFullName = "Johan Robert",
  userRole = "Admin",
  avatarSrc = "/avator.png",
  avatarFallback = "JR",
}) => {
  const getTimeGreeting = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      return "Good Morning,";
    } else if (hour >= 12 && hour < 17) {
      return "Good Afternoon,";
    } else if (hour >= 17 && hour < 21) {
      return "Good Evening,";
    } else {
      return "Good Night,";
    }
  };

  return (
    <header className="sticky  top-0 z-50 flex w-full  items-center justify-between px-2 md:px-6 md:py-2 py-1 bg-button-bg dark:bg-surface transition-colors duration-200">
      {/* Greeting Section */}
      <div className="flex flex-col w-full  items-start gap-0.5">
        <h1 className="font-medium text-primary text-lg md:text-2xl transition-colors duration-200">
          {getTimeGreeting()} {userName}
        </h1>
        <p className="text-sm md:text-base text-primary transition-colors duration-200">
          Have a nice day
        </p>
      </div>

      {/* User Actions Section */}
      <div className="flex items-center justify-end w-full gap-4">
       
        

        {/* Notifications Button */}
        <Link
          to='/admin-dashboard/notifications'
          variant="outline"
          size="icon"
          className="relative h-6 w-6 md:h-8 md:w-8 rounded-full bg-surface dark:bg-surface-elevated  border-border dark:border-border hover:bg-surface-hover dark:hover:bg-surface-hover transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <Bell className="m-auto pt-2 size-8"/>
          <span className="sr-only">Notifications</span>
          <span className="absolute -top-1 -right-1 h-6 w-6 text-xs p-0.5 bg-white bg-error rounded-full border-2 border-surface dark:border-surface-elevated">12</span>
        </Link>

        {/* User Profile Section */}
        <div className="flex items-center gap-3 group cursor-pointer hover:bg-background-secondary/50 dark:hover:bg-surface-hover/30 rounded-lg px-2 py-1 transition-all duration-200">
          <Avatar className="h-6 w-6 md:h-8 md:w-8 ring-2 ring-border dark:ring-border group-hover:ring-border-primary dark:group-hover:ring-primary transition-all duration-200">
            <AvatarImage
              src={avatarSrc}
              alt={`${userFullName} avatar`}
              className="object-cover"
            />
            <AvatarFallback className="bg-primary text-primary-foreground font-h6-medium">
              {avatarFallback}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col items-start min-w-[101px]">
            
            <div className="flex items-center gap-1.5">
              <span className="font-regular-lg-regular text-text-muted dark:text-text-muted text-xs md:text-base text-primary transition-colors duration-200">
                {userFullName}
              </span>
              <ChevronDownIcon className="h-3 w-3 text-text-muted dark:text-text-muted group-hover:text-interactive dark:group-hover:text-primary transition-all duration-200 group-hover:translate-y-0.5" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
