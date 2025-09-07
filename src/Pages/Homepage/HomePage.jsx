/** @format */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BadgeCheck,
  Heart,
  MessageCircle,
  Plus,
  Search,
  Share,
} from "lucide-react";
import PlayerCard from "./PlayerCard";
import { Link } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import NewsCard from "./NewsCard";
import { Card } from "react-bootstrap";
import { useState } from "react";
import BowlingCard from "./BowlingCard";
import ManufactureCard from "./ManufactureCard";

const proPlayers = [
  {
    name: "Jason Belmonte",
    image: "/player.png",
    level: 8,
    pac: [
      [97, 95, 93],
      [92, 90, 88],
    ],
  },
  {
    name: "Norm Duke",
    image: "/player.png",
    level: 7,
    pac: [
      [96, 94, 92],
      [91, 89, 87],
    ],
  },
  {
    name: "Walter Ray",
    image: "/player.png",
    level: 9,
    pac: [
      [98, 96, 94],
      [93, 91, 89],
    ],
  },
  {
    name: "Pete Weber",
    image: "/player.png",
    level: 6,
    pac: [
      [95, 93, 91],
      [90, 88, 86],
    ],
  },
  {
    name: "Earl Anthony",
    image: "/player.png",
    level: 8,
    pac: [
      [97, 95, 93],
      [92, 90, 88],
    ],
  },
  {
    name: "Chris Barnes",
    image: "/player.png",
    level: 7,
    pac: [
      [96, 94, 92],
      [91, 89, 87],
    ],
  },
  {
    name: "Parker Bohn",
    image: "/player.png",
    level: 9,
    pac: [
      [98, 96, 94],
      [93, 91, 89],
    ],
  },
  {
    name: "Tommy Jones",
    image: "/player.png",
    level: 6,
    pac: [
      [95, 93, 91],
      [90, 88, 86],
    ],
  },
  {
    name: "Mika Koivuniemi",
    image: "/player.png",
    level: 8,
    pac: [
      [97, 95, 93],
      [92, 90, 88],
    ],
  },
  {
    name: "Dominic Barrett",
    image: "/player.png",
    level: 7,
    pac: [
      [96, 94, 92],
      [91, 89, 87],
    ],
  },
  {
    name: "Sean Rash",
    image: "/player.png",
    level: 9,
    pac: [
      [98, 96, 94],
      [93, 91, 89],
    ],
  },
  {
    name: "Bill O'Neill",
    image: "/player.png",
    level: 6,
    pac: [
      [95, 93, 91],
      [90, 88, 86],
    ],
  },
];

const amateurePlayers = [
  {
    name: "Jason Belmonte",
    image: "/player.png",
    level: 8,
    pac: [
      [97, 95, 93],
      [92, 90, 88],
    ],
  },
  {
    name: "Norm Duke",
    image: "/player.png",
    level: 7,
    pac: [
      [96, 94, 92],
      [91, 89, 87],
    ],
  },
  {
    name: "Walter Ray",
    image: "/player.png",
    level: 9,
    pac: [
      [98, 96, 94],
      [93, 91, 89],
    ],
  },
  {
    name: "Pete Weber",
    image: "/player.png",
    level: 6,
    pac: [
      [95, 93, 91],
      [90, 88, 86],
    ],
  },
  {
    name: "Earl Anthony",
    image: "/player.png",
    level: 8,
    pac: [
      [97, 95, 93],
      [92, 90, 88],
    ],
  },
  {
    name: "Chris Barnes",
    image: "/player.png",
    level: 7,
    pac: [
      [96, 94, 92],
      [91, 89, 87],
    ],
  },
  {
    name: "Parker Bohn",
    image: "/player.png",
    level: 9,
    pac: [
      [98, 96, 94],
      [93, 91, 89],
    ],
  },
  {
    name: "Tommy Jones",
    image: "/player.png",
    level: 6,
    pac: [
      [95, 93, 91],
      [90, 88, 86],
    ],
  },
  {
    name: "Mika Koivuniemi",
    image: "/player.png",
    level: 8,
    pac: [
      [97, 95, 93],
      [92, 90, 88],
    ],
  },
  {
    name: "Dominic Barrett",
    image: "/player.png",
    level: 7,
    pac: [
      [96, 94, 92],
      [91, 89, 87],
    ],
  },
  {
    name: "Sean Rash",
    image: "/player.png",
    level: 9,
    pac: [
      [98, 96, 94],
      [93, 91, 89],
    ],
  },
  {
    name: "Bill O'Neill",
    image: "/player.png",
    level: 6,
    pac: [
      [95, 93, 91],
      [90, 88, 86],
    ],
  },
];

const newsFeed = [
  {
    name: "Bowling Fanatics",
    profileImg: "/profile1.png",
    postingTime: "2 hours ago",
    description:
      "Hello, asadsasda asdssasd as friends! 🌞 sdf sadfassssss ssssssssss sssss sssssss ssssss sss With the sun shining bright and temperatures rising, there's no better way to beat the heat than with a refreshing dip in the pool! 🏊‍♀️ #SummerVibes",
    newsImage: "/newsfeed.png",
    totalLove: 10,
    comments: 5,
    totalShare: 2,
  },
  {
    name: "Strike Masters",
    profileImg: "/profile2.png",
    postingTime: "5 hours ago",
    description:
      "Check out our latest bowling tips and tricks to improve your game! 🎳 Whether you're a beginner or a seasoned pro, there's always something new to learn. #BowlingTips",
    newsImage: "/newsfeed.png",
    totalLove: 15,
    comments: 8,
    totalShare: 3,
  },
  {
    name: "Pin Pals",
    profileImg: "/profile3.png",
    postingTime: "1 day ago",
    description:
      "Join us for our weekly bowling tournament! Great prizes and fun for all skill levels. Don't miss out! #BowlingTournament",
    newsImage: "/newsfeed.png",
    totalLove: 20,
    comments: 12,
    totalShare: 5,
  },
  {
    name: "Pin Pals",
    profileImg: "/profile3.png",
    postingTime: "1 day ago",
    description:
      "Join us for our weekly bowling tournament! Great prizes and fun for all skill levels. Don't miss out! #BowlingTournament",
    newsImage: "/newsfeed.png",
    totalLove: 20,
    comments: 12,
    totalShare: 5,
  },
  {
    name: "Pin Pals",
    profileImg: "/profile3.png",
    postingTime: "1 day ago",
    description:
      "Join us for our weekly bowling tournament! Great prizes and fun for all skill levels. Don't miss out! #BowlingTournament",
    newsImage: "/newsfeed.png",
    totalLove: 20,
    comments: 12,
    totalShare: 5,
  },
  {
    name: "Pin Pals",
    profileImg: "/profile3.png",
    postingTime: "1 day ago",
    description:
      "Join us for our weekly bowling tournament! Great prizes and fun for all skill levels. Don't miss out! #BowlingTournament",
    newsImage: "/newsfeed.png",
    totalLove: 20,
    comments: 12,
    totalShare: 5,
  },
  {
    name: "Pin Pals",
    profileImg: "/profile3.png",
    postingTime: "1 day ago",
    description:
      "Join us for our weekly bowling tournament! Great prizes and fun for all skill levels. Don't miss out! #BowlingTournament",
    newsImage: "/newsfeed.png",
    totalLove: 20,
    comments: 12,
    totalShare: 5,
  },
  {
    name: "Pin Pals",
    profileImg: "/profile3.png",
    postingTime: "1 day ago",
    description:
      "Join us for our weekly bowling tournament! Great prizes and fun for all skill levels. Don't miss out! #BowlingTournament",
    newsImage: "/newsfeed.png",
    totalLove: 20,
    comments: 12,
    totalShare: 5,
  },
  {
    name: "Pin Pals",
    profileImg: "/profile3.png",
    postingTime: "1 day ago",
    description:
      "Join us for our weekly bowling tournament! Great prizes and fun for all skill levels. Don't miss out! #BowlingTournament",
    newsImage: "/newsfeed.png",
    totalLove: 20,
    comments: 12,
    totalShare: 5,
  },
  {
    name: "Pin Pals",
    profileImg: "/profile3.png",
    postingTime: "1 day ago",
    description:
      "Join us for our weekly bowling tournament! Great prizes and fun for all skill levels. Don't miss out! #BowlingTournament",
    newsImage: "/newsfeed.png",
    totalLove: 20,
    comments: 12,
    totalShare: 5,
  },
  {
    name: "Pin Pals",
    profileImg: "/profile3.png",
    postingTime: "1 day ago",
    description:
      "Join us for our weekly bowling tournament! Great prizes and fun for all skill levels. Don't miss out! #BowlingTournament",
    newsImage: "/newsfeed.png",
    totalLove: 20,
    comments: 12,
    totalShare: 5,
  },
  {
    name: "Pin Pals",
    profileImg: "/profile3.png",
    postingTime: "1 day ago",
    description:
      "Join us for our weekly bowling tournament! Great prizes and fun for all skill levels. Don't miss out! #BowlingTournament",
    newsImage: "/newsfeed.png",
    totalLove: 20,
    comments: 12,
    totalShare: 5,
  },
  {
    name: "Pin Pals",
    profileImg: "/profile3.png",
    postingTime: "1 day ago",
    description:
      "Join us for our weekly bowling tournament! Great prizes and fun for all skill levels. Don't miss out! #BowlingTournament",
    newsImage: "/newsfeed.png",
    totalLove: 20,
    comments: 12,
    totalShare: 5,
  },
];

const bowlingCenters = [
  { image: "/Bowling.png", title: "Aster Medical", description: "Jamiu Jimoh" },
  {
    image: "/Bowling.png",
    title: "Bowling Center 2",
    description: "Description 2",
  },
  {
    image: "/Bowling.png",
    title: "Bowling Center 3",
    description: "Description 3",
  },
  {
    image: "/Bowling.png",
    title: "Bowling Center 4",
    description: "Description 4",
  },
  {
    image: "/Bowling.png",
    title: "Bowling Center 5",
    description: "Description 5",
  },
  {
    image: "/Bowling.png",
    title: "Bowling Center 6",
    description: "Description 6",
  },
  {
    image: "/Bowling.png",
    title: "Bowling Center 7",
    description: "Description 7",
  },
  {
    image: "/Bowling.png",
    title: "Bowling Center 8",
    description: "Description 8",
  },
  {
    image: "/Bowling.png",
    title: "Bowling Center 9",
    description: "Description 9",
  },
  {
    image: "/Bowling.png",
    title: "Bowling Center 10",
    description: "Description 10",
  },
];

const manufactures = [
  { image: "/Bowling.png", title: "Aster Medical" },
  { image: "/manufacture.png", title: "Bowling Center 2" },
  { image: "/manufacture.png", title: "Bowling Center 3" },
  { image: "/manufacture.png", title: "Bowling Center 4" },
  { image: "/manufacture.png", title: "Bowling Center 5" },
  { image: "/manufacture.png", title: "Bowling Center 6" },
  { image: "/manufacture.png", title: "Bowling Center 7" },
  { image: "/manufacture.png", title: "Bowling Center 8" },
  { image: "/manufacture.png", title: "Bowling Center 9" },
  { image: "/manufacture.png", title: "Bowling Center 10" },
];
const HomePage = () => {
  const [showAllBowlingCenters, setShowAllBowlingCenters] = useState(false);
  const [showAllManufacture, setShowAllManufacture] = useState(false);
  return (
    <div className="flex-1 h-screen overflow-y-auto bg-white ">
      {/* Header */}
      <div className="bg-transparent border-b border-[#e8e9e6] p-6">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-xl md:text-2xl font-bold text-primary-heading  mb-2">
              Home
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
        {/* pro players */}
        <div className="mb-2 md:mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-3xl font-bold text-primary ">
              Pro Players
            </h2>
            <Button
              asChild
              variant="link"
              className="bg-transparent border-none text-sm text-[#3B82F6] md:text-lg p-0"
            >
              <Link
                to="/dashboard/players"
                state={{ players: proPlayers, title: "Pro Players" }}
              >
                See All
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {proPlayers.slice(0, 5).map((player, index) => (
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

        {/* Amateure player */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-3xl font-bold text-primary">
              Amateure Players
            </h2>
            <Button
              asChild
              variant="link"
              className="bg-transparent border-none text-sm text-[#3B82F6] md:text-lg p-0"
            >
              <Link
                to="/dashboard/players"
                state={{ players: amateurePlayers, title: "Amateure Players" }}
              >
                See All
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {amateurePlayers.slice(0, 5).map((player, index) => (
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

        {/* news feed */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-3xl font-bold text-primary">
              News Feed
            </h2>
            <Button
              asChild
              variant="link"
              className="bg-transparent border-none text-sm text-[#3B82F6] md:text-lg p-0"
            >
              <Link to="/dashboard/newsfeed" state={{ newsFeed: newsFeed }}>
                See All
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {newsFeed.slice(0, 4).map((news, index) => (
              <NewsCard key={index} news={news} />
            ))}
          </div>
        </div>

        {/* Bowling Center */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-3xl font-bold text-primary">
              Bowling Center
            </h2>
            <Button
              variant="link"
              className="bg-transparent border-none text-sm text-[#3B82F6] md:text-lg p-0"
              onClick={() => setShowAllBowlingCenters(!showAllBowlingCenters)}
            >
              {showAllBowlingCenters ? "Show Less" : "See All"}
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 ">
            {(showAllBowlingCenters
              ? bowlingCenters
              : bowlingCenters.slice(0, 5)
            ).map((center, index) => (
              <BowlingCard
                key={index}
                image={center.image}
                title={center.title}
                description={center.description}
              />
            ))}
          </div>
        </div>

        {/* Manufacture  */}

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-3xl font-bold text-primary">
              Manufacture
            </h2>
            <Button
              variant="link"
              className="bg-transparent border-none text-sm text-[#3B82F6] md:text-lg p-0"
              onClick={() => setShowAllManufacture(!showAllManufacture)}
            >
              {showAllManufacture ? "Show Less" : "See All"}
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 ">
            {(showAllManufacture ? manufactures : manufactures.slice(0, 5)).map(
              (center, index) => (
                <ManufactureCard
                  key={index}
                  image={center.image}
                  title={center.title}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
