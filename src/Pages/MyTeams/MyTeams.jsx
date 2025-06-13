
import { Input } from '@/components/ui/input'
import { Plus, Search } from 'lucide-react'
import  { useState } from 'react'
import TeamCard from './TeamCard'
import { Modal, ModalBody, ModalContent, ModalTrigger } from '@/components/ui/animated-modal'
import CreateTeam from './CreateTeam'

const MyTeams = () => {
  const allMembers = [
    { id: '1', name: 'John Smith', membersimg: "https://assets.aceternity.com/manu.png" },
    { id: '2', name: 'Sarah Johnson', membersimg: "https://assets.aceternity.com/manu.png" },
    { id: '3', name: 'Mike Wilson', membersimg: "https://assets.aceternity.com/manu.png" },
    { id: '4', name: 'Emily Davis', membersimg: "https://assets.aceternity.com/manu.png" },
    { id: '5', name: 'Alex Thompson', membersimg: "https://assets.aceternity.com/manu.png" },
    { id: '6', name: 'blex Thompson', membersimg: "https://assets.aceternity.com/manu.png" },
    { id: '7', name: 'Jsohn Smith', membersimg: "https://assets.aceternity.com/manu.png" },
    { id: '8', name: 'aSarah Johnson', membersimg: "https://assets.aceternity.com/manu.png" },
    { id: '9', name: 'sMike Wilson', membersimg: "https://assets.aceternity.com/manu.png" },
    { id: '10', name: 'vEmily Davis', membersimg: "https://assets.aceternity.com/manu.png" },
    { id: '11', name: 'aAlex Thompson', membersimg: "https://assets.aceternity.com/manu.png" },
    { id: '12', name: 'sAlex Thompson', membersimg: "https://assets.aceternity.com/manu.png" },
  ]

  const [teams, setTeams] = useState([
    {
      id: '1',
      name: "Teams Name",
      members: [
        { id: '1', name: 'John Smith', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '2', name: 'Sarah Johnson', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '3', name: 'Mike Wilson', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '4', name: 'Emily Davis', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '5', name: 'Alex Thompson', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '5', name: 'Alex Thompson', membersimg: "https://assets.aceternity.com/manu.png" },
      ],
      time: "7 days ago",
      img: "https://assets.aceternity.com/manu.png"
    },
    {
      id: '2',
      name: "Teams Name",
      members: [
        { id: '1', name: 'John Smith', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '2', name: 'Sarah Johnson', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '3', name: 'Mike Wilson', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '4', name: 'Emily Davis', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '5', name: 'Alex Thompson', membersimg: "https://assets.aceternity.com/manu.png" },
      ],
      time: "7 days ago",
      img: "https://assets.aceternity.com/manu.png"
    },
    {
      id: '3',
      name: "Teams Name",
      members: [
        { id: '1', name: 'John Smith', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '2', name: 'Sarah Johnson', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '3', name: 'Mike Wilson', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '4', name: 'Emily Davis', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '5', name: 'Alex Thompson', membersimg: "https://assets.aceternity.com/manu.png" },
      ],
      time: "7 days ago",
      img: "https://assets.aceternity.com/manu.png"
    },
    {
      id: '4',
      name: "Teams Name",
      members: [
        { id: '1', name: 'John Smith', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '2', name: 'Sarah Johnson', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '3', name: 'Mike Wilson', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '4', name: 'Emily Davis', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '5', name: 'Alex Thompson', membersimg: "https://assets.aceternity.com/manu.png" },
      ],
      time: "7 days ago",
      img: "https://assets.aceternity.com/manu.png"
    },
    {
      id: '5',
      name: "Teams Name",
      members: [
        { id: '1', name: 'John Smith', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '2', name: 'Sarah Johnson', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '3', name: 'Mike Wilson', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '4', name: 'Emily Davis', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '5', name: 'Alex Thompson', membersimg: "https://assets.aceternity.com/manu.png" },
      ],
      time: "7 days ago",
      img: "https://assets.aceternity.com/manu.png"
    },
    {
      id: '6',
      name: "Teams Name",
      members: [
        { id: '1', name: 'John Smith', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '2', name: 'Sarah Johnson', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '3', name: 'Mike Wilson', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '4', name: 'Emily Davis', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '5', name: 'Alex Thompson', membersimg: "https://assets.aceternity.com/manu.png" },
      ],
      time: "7 days ago",
      img: "https://assets.aceternity.com/manu.png"
    },
    {
      id: '7',
      name: "Teams Name",
      members: [
        { id: '1', name: 'John Smith', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '2', name: 'Sarah Johnson', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '3', name: 'Mike Wilson', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '4', name: 'Emily Davis', membersimg: "https://assets.aceternity.com/manu.png" },
        { id: '5', name: 'Alex Thompson', membersimg: "https://assets.aceternity.com/manu.png" },
      ],
      time: "7 days ago",
      img: "https://assets.aceternity.com/manu.png"
    },
  ])



  const handleCreateTeam = (newTeam) => {
    const teamWithId = {
      ...newTeam,
      id: Date.now().toString(),
      time: generateTimeAgo()
    }
    setTeams(prev => [teamWithId, ...prev])
    
  }

  const generateTimeAgo = () => {
    return 'Just now'
  }

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
          <ModalTrigger 
            className='bg-button-bg cursor-pointer flex text-base md:text-lg hover:bg-button-bg/90 text-button-text gap-2'
            
          >
            <Plus size={18} className='m-auto' />
            Create new Team 
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <CreateTeam 
                allMembers={allMembers} 
                onCreateTeam={handleCreateTeam}
                
              />
            </ModalContent>
          </ModalBody>
        </Modal>
      </div>

      {/* Teams List */}
      <div className="p-6 space-y-2 md:space-y-4">
        {teams.map((team) => (
          <TeamCard key={team.id} name={team.name} members={team.members.length} time={team.time} img={team.img} />
        ))}
      </div>
    </div>
  )
}

export default MyTeams