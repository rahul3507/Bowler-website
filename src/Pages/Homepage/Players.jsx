/** @format */

import React from "react";
import { useLocation } from "react-router-dom";
import PlayerCard from "./PlayerCard";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
const Players = () => {
  const location = useLocation();
  const players = location.state?.players || [];
  const title = location.state?.title || "All Players";
  return (
    <div className="flex-1 h-screen overflow-y-auto bg-white">
      {/* Header */}
      <div className="bg-transparent border-b border-[#e8e9e6] p-6">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-xl md:text-2xl font-bold text-primary-heading mb-2">
              {title}
            </h1>
            <p className="text-secondary text-sm md:text-base">
              Communications from bowling centers, manufacturers, and
              BowlersNetwork
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

      <div className=" px-6 pt-2 md:pt-6 flex flex-wrap justify-center md:justify-around gap-4">
        {players.map((player, index) => (
          <PlayerCard
            key={index}
            name={player.name}
            image={player.image}
            level={player.level}
            pac={player.pac}
          />
        ))}
      </div>
    </div>
  );
};

export default Players;
