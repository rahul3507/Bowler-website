import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";

export const SelectYourRole = () => {
  // Role data for mapping
  const roles = [
    {
      id: "amateur",
      title: "Amateur",
      description:
        "The Amateur Player is a standard user role designed for recreational and league bowlers. This role emphasizes engagement, progression, and community interaction through XP-based activities and trading card customization.",
      badge: "Free",
      position: "top-0 left-0",
    },
    {
      id: "pro-player",
      title: "Pro Player",
      description:
        "The Amateur Player is a standard user role designed for recreational and league bowlers. This role emphasizes engagement, progression, and community interaction through XP-based activities and trading card customization.",
      badge: "Premium",
      position: "top-12 left-[413px]",
    },
    {
      id: "bowling-center",
      title: "Bowling Center",
      description:
        "The Amateur Player is a standard user role designed for recreational and league bowlers. This role emphasizes engagement, progression, and community interaction through XP-based activities and trading card customization.",
      badge: "Premium",
      position: "top-[350px] left-0",
    },
    {
      id: "manufacturer",
      title: "Manufacturer",
      description:
        "The Amateur Player is a standard user role designed for recreational and league bowlers. This role emphasizes engagement, progression, and community interaction through XP-based activities and trading card customization.",
      badge: "Premium",
      position: "top-[390px] left-[413px]",
      special: true,
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] h-[1040px]">
        <div className="relative w-[2056px] h-[1662px] top-[-311px] left-[-308px]">
          {/* Background gradients */}
          <div className="absolute w-[2056px] h-[1662px] top-0 left-0">
            <div className="absolute w-[645px] h-[714px] top-0 left-0">
              <div className="absolute w-[472px] h-[472px] top-0 left-[173px] rounded-[236px] blur-[500px] [background:linear-gradient(180deg,rgba(238,46,85,0.1)_0%,rgba(136,26,49,0.1)_100%)]" />
              <div className="absolute w-[472px] h-[472px] top-[242px] left-0 bg-[#1e2d5e1a] rounded-[236px] blur-[500px]" />
            </div>
            <div className="absolute w-[645px] h-[714px] top-[948px] left-[1411px]">
              <div className="absolute w-[472px] h-[472px] top-0 left-[173px] rounded-[236px] blur-[500px] [background:linear-gradient(180deg,rgba(238,46,85,0.1)_0%,rgba(136,26,49,0.1)_100%)]" />
              <div className="absolute w-[472px] h-[472px] top-[242px] left-0 bg-[#1e2d5e1a] rounded-[236px] blur-[500px]" />
            </div>
          </div>

          {/* Main content */}
          <div className="flex flex-col w-[838px] items-end gap-8 p-6 absolute top-[368px] left-[609px]">
            <div className="flex flex-col items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
              <h1 className="relative self-stretch h-12 mt-[-1.00px] font-['Poppins',Helvetica] font-semibold text-black text-[32px] text-center tracking-[0] leading-[normal]">
                Select Your Role
              </h1>

              <div className="relative self-stretch w-full h-[694px]">
                <RadioGroup defaultValue="manufacturer">
                  {roles.map((role) => (
                    <div key={role.id} className={`absolute ${role.position}`}>
                      <Card
                        className={`w-[377px] ${
                          role.special
                            ? "border border-solid border-[#e7e9e6] [background:linear-gradient(134deg,rgba(30,45,94,1)_0%,rgba(63,94,196,1)_100%)]"
                            : "bg-white shadow-01"
                        } rounded-xl relative`}
                      >
                        <Badge
                          className="absolute top-[-18px] left-6 bg-white text-[#ee2e55] font-lg-medium border border-solid border-[#e7e9e6] rounded-lg px-3 h-9"
                          variant="outline"
                        >
                          {role.badge}
                        </Badge>

                        <CardContent className="flex flex-col items-center justify-center gap-4 px-6 py-10">
                          <div className="flex items-center justify-around gap-[131px] relative self-stretch w-full flex-[0_0_auto]">
                            <div className="flex items-center gap-3 relative flex-1 grow">
                              {!role.special && (
                                <div className="relative w-8 h-8 rounded-2xl border-[2.67px] border-solid border-[#1e2d5e] flex items-center justify-center">
                                  <RadioGroupItem
                                    value={role.id}
                                    id={role.id}
                                    className="sr-only"
                                  />
                                </div>
                              )}
                              <div
                                className={`relative flex-1 mt-[-1.00px] font-h4-semibold font-[number:var(--h4-semibold-font-weight)] ${role.special ? "text-white" : "text-black"} text-[length:var(--h4-semibold-font-size)] tracking-[var(--h4-semibold-letter-spacing)] leading-[var(--h4-semibold-line-height)] [font-style:var(--h4-semibold-font-style)]`}
                              >
                                {role.title}
                              </div>
                            </div>
                          </div>

                          <div
                            className={`relative self-stretch font-base-regular font-[number:var(--base-regular-font-weight)] ${role.special ? "text-[#c1c1c1]" : "text-[#5d5d5d]"} text-[length:var(--base-regular-font-size)] tracking-[var(--base-regular-letter-spacing)] leading-[var(--base-regular-line-height)] [font-style:var(--base-regular-font-style)]`}
                          >
                            {role.description}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>

            <Button className="w-[200px] bg-[#8bc342] text-white rounded-lg px-6 py-4 font-base-medium">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
