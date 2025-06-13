import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"

import PlayerCard from "./PlayerCard"

const proPlayers = [
  { name: "Jason Belmonte", image: "/player.png", level: 8, pac: [[97, 95, 93], [92, 90, 88]] },
  { name: "Norm Duke", image: "/player.png", level: 7, pac: [[96, 94, 92], [91, 89, 87]] },
  { name: "Walter Ray", image: "/player.png", level: 9, pac: [[98, 96, 94], [93, 91, 89]] },
  { name: "Pete Weber", image: "/player.png", level: 6, pac: [[95, 93, 91], [90, 88, 86]] },
  { name: "Earl Anthony", image: "/player.png", level: 8, pac: [[97, 95, 93], [92, 90, 88]] },
  { name: "Chris Barnes", image: "/player.png", level: 7, pac: [[96, 94, 92], [91, 89, 87]] },
  { name: "Parker Bohn", image: "/player.png", level: 9, pac: [[98, 96, 94], [93, 91, 89]] },
  { name: "Tommy Jones", image: "/player.png", level: 6, pac: [[95, 93, 91], [90, 88, 86]] },
  { name: "Mika Koivuniemi", image: "/player.png", level: 8, pac: [[97, 95, 93], [92, 90, 88]] },
  { name: "Dominic Barrett", image: "/player.png", level: 7, pac: [[96, 94, 92], [91, 89, 87]] },
  { name: "Sean Rash", image: "/player.png", level: 9, pac: [[98, 96, 94], [93, 91, 89]] },
  { name: "Bill O'Neill", image: "/player.png", level: 6, pac: [[95, 93, 91], [90, 88, 86]] },
]

const HomePage = () => {
  return (
    <div className='flex-1 h-screen overflow-y-auto'>
      {/* Header */}
      <div className="bg-transparent border-b border-[#e8e9e6] p-6">
        <div className="flex flex-col md:flex-row  justify-center md:justify-between  items-center md:items-start ">
          <div className='text-center md:text-left mb-4 md:mb-0'>
            <h1 className="text-xl md:text-2xl font-bold text-primary-heading dark:text-white mb-2">Home</h1>
            <p className="text-secondary dark:text-gray-200 text-sm md:text-base">
              Communications from bowling centers, manufacturers, and BowlersNetwork
            </p>
          </div>
          <div className="relative rounded-4xl dark:bg-gray-300">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tertiary w-4 h-4" />
            <Input placeholder="Overview" className="pl-9 w-64  rounded-4xl bg-white border-gray-200" />
          </div>
        </div>
      </div>

      <div className="px-6 pt-2 md:pt-6">
        {/* pro players */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-3xl font-bold text-primary">Pro Players</h2>
            <Button variant="link" className="bg-transparent border-none text-sm text-[#3B82F6] md:text-lg p-0">
              See All
            </Button>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {proPlayers.map((player, index) => (
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
      </div>
    </div>
  )
}

export default HomePage