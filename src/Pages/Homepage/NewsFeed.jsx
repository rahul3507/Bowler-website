/** @format */

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";
import { useLocation } from "react-router-dom";
import NewsCard from "./NewsCard";

const NewsFeed = () => {
  const location = useLocation();
  const newsFeed = location.state?.newsFeed || [];
  return (
    <div className="flex-1 h-screen overflow-y-auto bg-white">
      {/* Header */}
      <div className="bg-transparent border-b border-[#e8e9e6] p-6">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-xl md:text-2xl font-bold text-primary-heading  mb-2">
              News Feed
            </h1>
            <p className="text-secondary  text-sm md:text-base">
              Communications from bowling centers, manufacturers, and
              BowlersNetwork
            </p>
          </div>
          <div className="relative rounded-4xl ">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tertiary w-4 h-4" />
            <Input
              placeholder="Overview"
              className="pl-9 w-64 rounded-4xl bg-white border-gray-200"
            />
          </div>
        </div>
      </div>

      <div className="px-6 pt-2 md:pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {newsFeed.map((news, index) => (
            <NewsCard key={index} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
