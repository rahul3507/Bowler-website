import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ChevronDown, Search, X } from 'lucide-react'
import { FileUpload } from "@/components/ui/file-upload";

import { useState } from 'react';

const CreateTeam = ({ allMembers = [], onCreateTeam }) => {
  const [teamName, setTeamName] = useState('')
  const [selectedMembers, setSelectedMembers] = useState([])
  const [teamImage, setTeamImage] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [isSelectOpen, setIsSelectOpen] = useState(false)

  // Filter members based on search term
  const filteredMembers = allMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleMemberToggle = (member) => {
    setSelectedMembers(prev => {
      const isSelected = prev.some(m => m.id === member.id)
      if (isSelected) {
        return prev.filter(m => m.id !== member.id)
      } else {
        return [...prev, member]
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!teamName.trim()) {
      alert('Please enter a team name')
      return
    }
    
    if (selectedMembers.length === 0) {
      alert('Please select at least one member')
      return
    }

    const newTeam = {
      name: teamName,
      members: selectedMembers,
      img: teamImage || "https://assets.aceternity.com/manu.png"
    }

    onCreateTeam(newTeam)
    
    // Reset form
    setTeamName('')
    setSelectedMembers([])
    setTeamImage('')
    setSearchTerm('')
  }

  const handleFileUpload = (files) => {
    if (files.length > 0) {
      const file = files[0]
      // In a real app, you'd upload this to a server and get a URL back
      // For now, we'll use a placeholder or create an object URL
      const imageUrl = URL.createObjectURL(file)
      setTeamImage(imageUrl)
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className='text-lg md:text-2xl text-secondary font-medium'>Create New Team</h2>
      </div>
      
      <div>
        <form onSubmit={handleSubmit} className="p-6 space-y-3">
          {/* Team Name */}
          <div className="space-y-2">
            <label htmlFor="teamName" className="block text-sm md:text-lg font-medium text-secondary">
              Team Name
            </label>
            <input
              id="teamName"
              type="text"
              placeholder="Team Name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="w-full px-4 py-2 bg-transparent border border-gray-200 rounded-lg focus:ring-2 text-xs md:text-base text-secondary"
              required
            />
          </div>

          {/* Select Member */}
          <div className="space-y-2">
            <label className="block text-sm md:text-lg font-medium text-secondary">
              Select Member
            </label>
            
            <div className="relative">
              <Select open={isSelectOpen} onOpenChange={setIsSelectOpen}>
                <SelectTrigger className="w-full bg-transparent text-secondary text-xs md:text-sm cursor-pointer">
                  <SelectValue placeholder={
                    selectedMembers.length > 0 
                      ? `${selectedMembers.length} member(s) selected`
                      : "Select Bowler"
                  } />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup className='text-secondary text-xs md:text-sm'>
                    <SelectLabel>
                      <div className="relative rounded-2xl dark:bg-gray-300">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tertiary w-4 h-4" />
                        <Input 
                          placeholder="Search bowler..." 
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-9 w-full rounded-4xl bg-white border-gray-200" 
                        />
                      </div>
                    </SelectLabel>
                    
                    <div className="max-h-48 overflow-y-auto">
                      {filteredMembers.length > 0 ? (
                        filteredMembers.map((member) => (
                          <SelectItem 
                            key={member.id} 
                            value={member.id}
                            onClick={(e) => {
                              e.preventDefault()
                              handleMemberToggle(member)
                            }}
                          >
                            <div className="flex justify-between w-full bg-transparent items-center">
                              <div className='flex justify-center items-center'>
                                <img 
                                  src={member.membersimg} 
                                  alt={member.name}
                                  className="w-6 h-6 bg-gray-300 rounded-full mr-4"
                                />
                                <h2 className="text-secondary text-sm font-semibold">{member.name}</h2>
                              </div>
                              
                            </div>
                          </SelectItem>
                        ))
                      ) : (
                        <div className="p-4 text-center text-gray-500">
                          No members found
                        </div>
                      )}
                    </div>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Selected Members Display */}
            {selectedMembers.length > 0 && (
              <div className="mt-2 p-2 border border-gray-200 rounded-lg">
                <p className="text-sm text-secondary mb-2">Selected Members:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedMembers.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-xs"
                    >
                      <img 
                        src={member.membersimg} 
                        alt={member.name}
                        className="w-4 h-4 rounded-full"
                      />
                      <span>{member.name}</span>
                      <button
                        type="button"
                        onClick={() => handleMemberToggle(member)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Upload Image */}
          <div className="space-y-2">
            <label className="block text-sm md:text-lg font-medium text-secondary">
              Upload Image
            </label>
            <div className='border border-gray-200 w-full'>
              <FileUpload onChange={handleFileUpload} />
            </div>
            {teamImage && (
              <div className="mt-2">
                <img 
                  src={teamImage} 
                  alt="Team" 
                  className="w-20 h-20 object-cover rounded-lg border"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className='w-full flex justify-end'>
            <Button
              type="submit"
              className="bg-button-bg hover:bg-button-bg/90 disabled:bg-button-bg/40 disabled:cursor-not-allowed text-white font-medium py-0 px-4 rounded-lg transition-colors duration-200 transform active:scale-95"
            >
              Create Team
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTeam