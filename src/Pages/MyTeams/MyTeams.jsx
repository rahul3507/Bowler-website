import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Search } from 'lucide-react'
import React from 'react'
import TeamCard from './TeamCard'
import { Modal, ModalBody, ModalContent, ModalTrigger } from '@/components/ui/animated-modal'

const MyTeams = () => {
  const teams = [
    { name: "Teams Name", members: 5, time: "7 days ago", img: "https://assets.aceternity.com/manu.png" },
    { name: "Teams Name", members: 5, time: "7 days ago", img: "https://assets.aceternity.com/manu.png" },
    { name: "Teams Name", members: 5, time: "7 days ago", img: "https://assets.aceternity.com/manu.png" },
    { name: "Teams Name", members: 5, time: "7 days ago", img: "https://assets.aceternity.com/manu.png" },
    { name: "Teams Name", members: 5, time: "7 days ago", img: "https://assets.aceternity.com/manu.png" },
    { name: "Teams Name", members: 5, time: "7 days ago", img: "https://assets.aceternity.com/manu.png" },
    { name: "Teams Name", members: 5, time: "7 days ago", img: "https://assets.aceternity.com/manu.png" },
  ]

  return (
    <div className='flex-1 h-screen overflow-y-auto'>
        {/* Header */}
        <div className="bg-transparent border-b border-[#e8e9e6] p-6">
          <div className="flex flex-col md:flex-row  justify-center md:justify-between  items-center md:items-start ">
            <div className='text-center md:text-left mb-4 md:mb-0'>
              <h1 className="text-xl md:text-2xl font-bold text-primary-heading dark:text-white mb-2">My Teams</h1>
              <p className="text-secondary dark:text-gray-200 text-sm md:text-base">
                Communications from bowling centers, manufacturers, and BowlersNetwork.
              </p>
            </div>
            <div className="relative rounded-4xl dark:bg-gray-300">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tertiary w-4 h-4" />
              <Input placeholder="Overview" className="pl-9 w-64  rounded-4xl bg-white border-gray-200" />
            </div>
          </div>
        </div>

        {/* Teams List Header */}
        <div className="px-6 pt-4 pb-0  md:pb-4 flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-bold text-primary dark:text-gray-200">{teams.length} Teams</h2>
          
          <Modal>
            <ModalTrigger className='bg-primary cursor-pointer flex text-base md:text-lg hover:bg-primary/90 text-button-text gap-2'>
                <Plus size={18} className='m-auto' />
                Create new Team 
            </ModalTrigger>
            <ModalBody>
              <ModalContent>
                <div>heloo</div>
              </ModalContent>
            </ModalBody>
          </Modal>
              
        </div>

        {/* Teams List */}
        <div className="p-6 space-y-2 md:space-y-4">
          {teams.map((team, index) => (
            <TeamCard key={index} name={team.name} members={team.members} time={team.time} img={team.img} />
          ))}
        </div>
    </div>
  )
}

export default MyTeams