/** @format */

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const PlayerCard = ({ name, image, level, pac }) => {
  return (
    <Card className="relative bg-white border-2 border-gray-200 rounded-3xl w-72 h-92 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-purple-400"></div>
      <CardContent className="p-1 text-center">
        <div className="">
          <span className="text-xs text-[#878c81]">Level</span>
          <div className="text-3xl font-bold text-[#1e2d5e]">{level}</div>
        </div>
        <div className="h-28 w-full mx-auto mb-3 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={name}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex w-full justify-between">
          <h3 className="font-semibold text-[#1e2d5e] mb-2">{name}</h3>
          <Button
            variant="outline"
            size="sm"
            className="mb-3 text-[#3b82f6] border-none"
          >
            <Plus className="w-3 h-3 mr-1" />
            Follow
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            {pac[0].map((value, index) => (
              <div key={index} className="text-[#878c81]">
                {value} PAC
              </div>
            ))}
          </div>
          <div>
            {pac[1].map((value, index) => (
              <div key={index} className="text-[#878c81]">
                {value} PAC
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
