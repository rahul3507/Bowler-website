import { Modal, ModalBody, ModalContent, ModalTrigger } from '@/components/ui/animated-modal'
import { Input } from '@/components/ui/input'
import { Plus, Search } from 'lucide-react'
import React from 'react'
import TournamentsList from './TournamentList'
import { Outlet } from 'react-router-dom'

const Tournaments = () => {
  return (
    <div className='flex-1 h-screen overflow-y-auto'>
      {/* Header */}
      <div className="bg-transparent border-b border-[#e8e9e6] p-6">
        <div className="flex flex-col md:flex-row  justify-center md:justify-between  items-center md:items-start ">
          <div className='text-center md:text-left mb-4 md:mb-0'>
            <h1 className="text-xl md:text-2xl font-bold text-primary-heading dark:text-white mb-2">Tournaments</h1>
            <p className="text-secondary dark:text-gray-200 text-sm md:text-base">
              Watch tutorials, pro matches, and exclusive bowling content
            </p>
          </div>
          <div className="relative rounded-4xl dark:bg-gray-300">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tertiary w-4 h-4" />
            <Input placeholder="Overview" className="pl-9 w-64  rounded-4xl bg-white border-gray-200" />
          </div>
        </div>
      </div>

      

      <div>
          <Outlet/>
      </div>



    </div>
  )
}

export default Tournaments