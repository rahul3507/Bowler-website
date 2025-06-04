import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Search } from 'lucide-react'
import React from 'react'

const Messages = () => {
  return (
    <div className="flex-1 h-screen overflow-y-auto">
        
            {/* Header */}
        <div className="bg-transparent border-b border-[#e8e9e6] p-6">
              <div className="flex flex-col md:flex-row  justify-center md:justify-between  items-center md:items-start ">
                <div className='text-center md:text-left mb-4 md:mb-0'>
                  <h1 className="text-xl md:text-2xl font-bold text-primary-heading dark:text-white mb-2">Messages</h1>
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
        {/* body */}
        <div className='flex flex-col  p-6 gap-2 md:gap-8'>
            {/* Filters Bar */}
            <div className="flex gap-2 ">
              <div className="relative">
                <Select className="text-secondary ">
                  <SelectTrigger className="w-[180px] text-secondary  bg-transparent dark:bg-gray-100 cursor-pointer">
                    <SelectValue placeholder="All message" className="text-secondary dark:text-black" />
                  </SelectTrigger>
                  <SelectContent className={"text-secondary dark:text-gray-300 bg-white  dark:bg-black"}>
                    <SelectGroup>   
                      <SelectItem value="All message" className="text-xs md:text-sm">All message</SelectItem>
                      <SelectItem value="Unread" className="text-xs md:text-sm">Unread</SelectItem>
                      <SelectItem value="Read" className="text-xs md:text-sm">Read</SelectItem>
                      <SelectItem value="Flagged" className="text-xs md:text-sm">Flagged</SelectItem>
                      <SelectItem value="Arcguved" className="text-xs md:text-sm">Arcguved</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="relative">
                <Select className="text-secondary ">
                  <SelectTrigger className="w-[180px] text-secondary  bg-transparent dark:bg-gray-100 cursor-pointer">
                    <SelectValue placeholder="Newest First" className="text-secondary dark:text-black" />
                  </SelectTrigger>
                  <SelectContent className={"text-secondary dark:text-gray-300 bg-white  dark:bg-black"}>
                    <SelectGroup>   
                      <SelectItem value="apple" className="text-xs md:text-sm">Newest First</SelectItem>
                      <SelectItem value="banana" className="text-xs md:text-sm">Oldest First</SelectItem>
                      <SelectItem value="blueberry" className="text-xs md:text-sm">Sender Name</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            {/* Category Tabs */}
            <div className="flex gap-2">
              <Button className="px-3 md:px-6 py-2 md:py-3 bg-transparent text-sm md:text-base text-secondary dark:text-gray-300 border-gray-300">All</Button>
              <Button className="px-2 md:px-6 py-2 md:py-3 bg-transparent text-sm md:text-base text-secondary dark:text-gray-300 border-gray-300">Bowling Centers</Button>
              <Button className="px-2 md:px-6 py-2 md:py-3 bg-transparent text-sm md:text-base text-secondary dark:text-gray-300 border-gray-300">Manufacturers</Button>
            </div>

            {/* main */}
            <div className="flex flex-row gap-4">
              <div className="flex-1 bg-transparent border-tertiary dark:bg-gray-500 rounded-lg p-4 shadow-md">
                <h2 className="text-lg font-semibold text-[#141b34]">Filters</h2>

                <div className="mt-6">
                  <h3 className="text-[#141b34] font-medium mb-3">Message Status</h3>
                  <div className="space-y-3">
                    <CheckboxItem label="Unread" />
                    <CheckboxItem label="Read" />
                    <CheckboxItem label="Flagged" />
                    <CheckboxItem label="Archived" />
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-[#141b34] font-medium mb-3">Sender Type</h3>
                  <div className="space-y-3">
                    <CheckboxItem label="Bowling Centers" />
                    <CheckboxItem label="Manufacturers" />
                    <CheckboxItem label="System Messages" />
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-[#141b34] font-medium mb-3">Time Period</h3>
                  <div className="space-y-3">
                    <CheckboxItem label="Today" />
                    <CheckboxItem label="This Week" />
                    <CheckboxItem label="This Month" />
                    <CheckboxItem label="Older" />
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-[#141b34] font-medium mb-3">Communication Preferences</h3>

                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-[#141b34]">Bowling Centers</h4>
                      <Switch />
                    </div>
                    <p className="text-xs text-[#9a9ca2]">Receive messages from bowling centers</p>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-[#141b34]">Manufactures</h4>
                      <Switch />
                    </div>
                    <p className="text-xs text-[#9a9ca2]">Receive messages from bowling centers</p>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-[#141b34]">Promotions</h4>
                      <Switch />
                    </div>
                    <p className="text-xs text-[#9a9ca2]">Receive messages from bowling centers</p>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-[#141b34]">System Notifications</h4>
                      <Switch />
                    </div>
                    <p className="text-xs text-[#9a9ca2]">Receive messages from bowling centers</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <button className="w-full py-3 bg-[#8bc342] text-white rounded-md font-medium">Filter</button>
                  <button className="w-full py-3 text-[#ee2e55] bg-white border border-[#d2d5df] rounded-md font-medium">
                    Reset
                  </button>
                </div>
              </div>

            </div>

            
        </div>
    </div>
  )
}

export default Messages

function CheckboxItem({ label }) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id={`checkbox-${label}`}
        className="border-[#d2d5df] data-[state=checked]:bg-[#8bc342] data-[state=checked]:border-[#8bc342]"
      />
      <label htmlFor={`checkbox-${label}`} className="text-sm text-[#141b34]">
        {label}
      </label>
    </div>
  )
}