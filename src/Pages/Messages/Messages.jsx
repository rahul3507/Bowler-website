import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Search } from 'lucide-react'
import React, { useState } from 'react'
import SingleMessage from './SingleMessage'

const Messages = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Downtown Lanes",
      profileImage: "https://via.placeholder.com/40",
      title: "New Tournament Announced!",
      sendingTime: "1 day ago",
      senderType: "Bowling Centers",
      read: false,
      flag: false,
      content: "Join us for our Summer Classic tournament on June 10th. Early registration discounts available!"
    },
    {
      id: 2,
      name: "Strike Pro Equipment",
      profileImage: "https://via.placeholder.com/40",
      title: "New Ball Collection Available",
      sendingTime: "2 days ago",
      senderType: "Manufacturers",
      read: false,
      flag: false,
      content: "Check out our latest collection of professional bowling balls with advanced core technology."
    },
    {
      id: 3,
      name: "System Notification",
      profileImage: "https://via.placeholder.com/40",
      title: "Profile Update Required",
      sendingTime: "3 days ago",
      senderType: "System Messages",
      read: true,
      flag: false,
      content: "Please update your profile information to continue receiving personalized recommendations."
    },
    {
      id: 4,
      name: "Sunset Bowling Center",
      profileImage: "https://via.placeholder.com/40",
      title: "League Registration Open",
      sendingTime: "5 days ago",
      senderType: "Bowling Centers",
      read: false,
      flag: true,
      content: "Fall league registration is now open. Join us for competitive bowling every Tuesday evening."
    },
    {
      id: 5,
      name: "Brunswick Corp",
      profileImage: "https://via.placeholder.com/40",
      title: "Equipment Maintenance Tips",
      sendingTime: "1 week ago",
      senderType: "Manufacturers",
      read: true,
      flag: false,
      content: "Learn how to properly maintain your bowling equipment for optimal performance and longevity."
    },
    {
      id: 6,
      name: "Galaxy Lanes",
      profileImage: "https://via.placeholder.com/40",
      title: "Special Event This Weekend",
      sendingTime: "1 week ago",
      senderType: "Bowling Centers",
      read: false,
      flag: false,
      content: "Join us for cosmic bowling this Saturday night with special lighting and music."
    },
    {
      id: 7,
      name: "Storm Products",
      profileImage: "https://via.placeholder.com/40",
      title: "Product Warranty Extension",
      sendingTime: "2 weeks ago",
      senderType: "Manufacturers",
      read: true,
      flag: true,
      content: "We're extending the warranty on all Storm bowling balls purchased in the last 6 months."
    },
    {
      id: 8,
      name: "BowlersNetwork",
      profileImage: "https://via.placeholder.com/40",
      title: "New Feature Available",
      sendingTime: "2 weeks ago",
      senderType: "System Messages",
      read: false,
      flag: false,
      content: "Try our new score tracking feature to monitor your progress over time."
    },
    {
      id: 9,
      name: "Championship Lanes",
      profileImage: "https://via.placeholder.com/40",
      title: "Youth Program Starting Soon",
      sendingTime: "3 weeks ago",
      senderType: "Bowling Centers",
      read: true,
      flag: false,
      content: "Enroll your kids in our youth bowling program starting next month. Ages 8-16 welcome."
    }
  ]);

  const handleMessageClick = (messageId) => {
    setMessages(prevMessages =>
      prevMessages.map(message =>
        message.id === messageId ? { ...message, read: true } : message
      )
    );
  };

  const handleFlagToggle = (messageId) => {
    setMessages(prevMessages =>
      prevMessages.map(message =>
        message.id === messageId ? { ...message, flag: !message.flag } : message
      )
    );
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredMessages = messages.filter(message => {
    if (activeFilter === 'All') return true;
    return message.senderType === activeFilter;
  });

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
              <Button 
                className={`px-3 md:px-6 py-2 md:py-3 text-sm md:text-base border-gray-300 ${
                  activeFilter === 'All' 
                    ? 'bg-button-bg text-button-text hover:bg-button-bg/80' 
                    : 'bg-transparent hover:bg-button-bg/70 hover:text-white text-secondary dark:text-gray-300'
                }`}
                onClick={() => handleFilterChange('All')}
              >
                All
              </Button>
              <Button 
                className={`px-2 md:px-6 py-2 md:py-3 text-sm md:text-base border-gray-300 ${
                  activeFilter === 'Bowling Centers' 
                    ? 'bg-button-bg text-button-text hover:bg-button-bg/80' 
                    : 'bg-transparent hover:bg-button-bg/70 hover:text-white text-secondary dark:text-gray-300'
                }`}
                onClick={() => handleFilterChange('Bowling Centers')}
              >
                Bowling Centers
              </Button>
              <Button 
                className={`px-2 md:px-6 py-2 md:py-3 text-sm md:text-base border-gray-300 ${
                  activeFilter === 'Manufacturers' 
                    ? 'bg-button-bg text-button-text hover:bg-button-bg/80' 
                    : 'bg-transparent hover:bg-button-bg/70 hover:text-white text-secondary dark:text-gray-300'
                }`}
                onClick={() => handleFilterChange('Manufacturers')}
              >
                Manufacturers
              </Button>
            </div>

            {/* main */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="max-w-90 bg-transparent border-tertiary dark:border-gray-500 rounded-lg p-4 shadow-md">
                <h2 className="text-lg md:text-xl font-semibold text-primary dark:text-gray-200">Filters</h2>

                <div className="mt-2 md:mt-3">
                  <h3 className="text-secondary dark:text-gray-300 text-base md:text-lg font-medium mb-3">Message Status</h3>
                  <div className="space-y-3">
                    <CheckboxItem label="Unread" />
                    <CheckboxItem label="Read" />
                    <CheckboxItem label="Flagged" />
                    <CheckboxItem label="Archived" />
                  </div>
                </div>

                <div className="mt-2 md:mt-3">
                  <h3 className="text-secondary dark:text-gray-300 text-base md:text-lg font-medium mb-3">Sender Type</h3>
                  <div className="space-y-3">
                    <CheckboxItem label="Bowling Centers" />
                    <CheckboxItem label="Manufacturers" />
                    <CheckboxItem label="System Messages" />
                  </div>
                </div>

                <div className="mt-2 md:mt-3">
                  <h3 className="text-secondary dark:text-gray-300 text-base md:text-lg font-medium mb-3">Time Period</h3>
                  <div className="space-y-3">
                    <CheckboxItem label="Today" />
                    <CheckboxItem label="This Week" />
                    <CheckboxItem label="This Month" />
                    <CheckboxItem label="Older" />
                  </div>
                </div>

                <div className="mt-2 md:mt-3">
                  <h3 className="text-secondary dark:text-gray-300 text-base md:text-lg font-medium ">Communication Preferences</h3>

                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-secondary dark:text-gray-300 text-sm md:text-base">Bowling Centers</h4>
                      <Switch />
                    </div>
                    <p className="text-xs md:text-sm text-tertiary dark:text-gray-400 ">Receive messages from bowling centers</p>
                  </div>

                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-secondary dark:text-gray-300 text-sm md:text-base">Manufactures</h4>
                      <Switch />
                    </div>
                    <p className="text-xs md:text-sm text-tertiary dark:text-gray-400 ">Receive messages from manufacturers</p>
                  </div>

                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-secondary dark:text-gray-300 text-sm md:text-base">Promotions</h4>
                      <Switch />
                    </div>
                    <p className="text-xs md:text-sm text-tertiary dark:text-gray-400 ">Receive messages from promotions</p>
                  </div>

                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-secondary dark:text-gray-300 text-sm md:text-base">System Notifications</h4>
                      <Switch />
                    </div>
                    <p className="text-xs md:text-sm text-tertiary dark:text-gray-400 ">Receive messages from system notifications</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Button className="w-full py-2 bg-button-bg hover:bg-button-bg/80 text-white rounded-md font-medium text-sm md:text-base">Filter</Button>
                  <Button className="w-full py-2 text-custom-red bg-white border border-tertiary rounded-md font-medium text-sm md:text-base hover:bg-gray-100">
                    Reset
                  </Button>
                </div>
              </div>

              {/* Messages List */}
              <div className="flex-1 overflow-auto">
                {filteredMessages.map((message) => (
                  <SingleMessage 
                    key={message.id} 
                    message={message}
                    onMessageClick={handleMessageClick}
                    onFlagToggle={handleFlagToggle}
                  />
                ))}
              </div>

            </div>

          </div>
    </div>
  )
}

export default Messages

function CheckboxItem({ label }) {
  return (
    <div className="flex items-center cursor-pointer gap-2">
      <Checkbox
        id={`checkbox-${label}`}
        className="border-primary cursor-pointer dark:border-gray-300 bg-transparent "
      />
      <label htmlFor={`checkbox-${label}`} className="text-sm text-secondary dark:text-gray-300">
        {label}
      </label>
    </div>
  )
}