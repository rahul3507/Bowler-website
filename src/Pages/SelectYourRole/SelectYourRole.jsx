import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";

import toast, { Toaster } from 'react-hot-toast';


export const SelectYourRole = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const roles = [
    {
      id: "amateur",
      title: "Amateur",
      description:
        "The Amateur Player is a standard user role designed for recreational and league bowlers. This role emphasizes engagement, progression, and community interaction through XP-based activities and trading card customization.",
      badge: "Free",
    },
    {
      id: "pro-player",
      title: "Pro Player",
      description:
        "The Amateur Player is a standard user role designed for recreational and league bowlers. This role emphasizes engagement, progression, and community interaction through XP-based activities and trading card customization.",
      badge: "Premium",
    },
    {
      id: "bowling-center",
      title: "Bowling Center",
      description:
        "The Amateur Player is a standard user role designed for recreational and league bowlers. This role emphasizes engagement, progression, and community interaction through XP-based activities and trading card customization.",
      badge: "Premium",
    },
    {
      id: "manufacturer",
      title: "Manufacturer",
      description:
        "The Amateur Player is a standard user role designed for recreational and league bowlers. This role emphasizes engagement, progression, and community interaction through XP-based activities and trading card customization.",
      badge: "Premium",
    },
  ];

  const handleContinue = () => {
    if (selectedRole) {
      // Navigate to signup page with selected role as state
      navigate("/signup", { state: { selectedRole } });
    } 
    else {
      toast.error("Please select a role before continuing.");
    }
  };

  return (
    <div className="bg-transparent  flex flex-row justify-center w-full">
      <div className="flex flex-col w-full max-w-[800px] items-center gap-6 ">
        <h1 className="relative mb-6 self-stretch font-['Poppins',Helvetica] font-semibold text-primary-heading text-xl md:text-3xl text-center tracking-[0] leading-[normal]">
          Select Your Role
        </h1>

        <RadioGroup
          value={selectedRole}
          onValueChange={setSelectedRole}
          className="grid  grid-cols-1  md:grid-cols-2 w-full gap-10 md:gap-4 md:gap-x-10 "
        >
          {roles.map((role, index) => (
            <div className={`w-full mb-0  ${index === 1 ? "md:mt-9" : "mt-0"} ${
                    index === 3 ? "md:mt-9" : "mt-0"
                  }`} key={role.id}>
                <Card
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`w-full  ${
                    role.id === selectedRole
                      ? "border border-solid border-[#e7e9e6] [background:linear-gradient(134deg,rgba(30,45,94,1)_0%,rgba(63,94,196,1)_100%)]"
                      : "bg-white shadow-01"
                  } rounded-xl relative cursor-pointer  transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg`}
                >
                  <Badge
                    className="absolute top-[-18px] left-6 bg-white text-custom-red font-lg-medium border border-solid border-[#e7e9e6] rounded-lg px-3 h-9"
                    variant="outline"
                  >
                    {role.badge}
                  </Badge>

                  <CardContent className="flex flex-col items-center justify-center gap-4 px-6 py-4">
                    <div className="flex items-center justify-around gap-34 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex items-center gap-3 relative flex-1 grow">
                        {role.id != selectedRole && (
                          <div className="relative w-8 h-8 rounded-2xl border-[2.67px] border-solid border-primary flex items-center justify-center">
                            <RadioGroupItem
                              value={role.id}
                              id={role.id}
                              className="sr-only"
                            />
                          </div>
                        )}
                        
                        <div
                          className={`relative text-lg md:text-2xl  flex-1 mt-[-1.00px] font-semibold  ${
                            role.id === selectedRole
                              ? "text-white"
                              : "text-primary-heading"
                          } `}
                        >
                          {role.title}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`relative self-stretch font-base-regular text-sm md:text-base  ${
                        role.id === selectedRole ? "text-gray-300" : "text-secondary"
                      } `}
                    >
                      {role.description}
                    </div>
                  </CardContent>
                </Card>
            </div>
          ))}
        </RadioGroup>

        <div className="w-full flex justify-center md:justify-end">
          <Button onClick={handleContinue} className="w-48 bg-button-bg text-button-text rounded-lg py-6 font-base-medium">
            Continue
          </Button>
        </div>
      </div>
      
    </div>
  );
};