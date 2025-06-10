import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Check } from 'lucide-react'
import React, { useState } from 'react'

const Privacy = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const handleSave = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="flex-1 px-0  md:px-6 pb-6">
        <div className="w-full border border-gray-200 rounded-lg p-2 md:p-6 bg-transparent ">
            <h2 className="text-lg md:text-2xl font-semibold text-primary mb-0 md:mb-1 text-center md:text-start">Privacy Settings</h2>
            <p className="text-secondary text-sm md:text-lg mb-4 md:mb-8 text-center md:text-start">Control what information is visible to others.</p>
            

            <div className='flex justify-between mb-3 md:mb-6'>
                <div>
                    <h4 className='text-secondary font-medium text-xs md:text-base'>Profile Visibility</h4>
                    <p className='text-secondary text-xs md:text-base ' >Control who can see your profile</p>
                </div>
                <div className='my-auto cursor-pointer'>
                    <Select >
                        <SelectTrigger className="w-36 md:w-44 bg-transparent text-secondary cursor-pointer">
                            <SelectValue placeholder="Select " />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem  value="Public" className='cursor-pointer text-xs md:text-base text-secondary'>Public</SelectItem>
                                <SelectItem value="BowlingCommunityOnly" className='cursor-pointer text-xs md:text-base text-secondary'>Bowling Community Only</SelectItem>
                                <SelectItem value="FriendOnly" className='cursor-pointer text-xs md:text-base text-secondary'>Friend Only</SelectItem>
                                <SelectItem value="Private" className='cursor-pointer text-xs md:text-base text-secondary'>Private</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className='flex justify-between mb-3 md:mb-6'>
                <div>
                    <h4 className='text-secondary font-medium text-xs md:text-base'>Stats Visiblitiy</h4>
                    <p className='text-secondary text-xs md:text-base ' >Control who can see you bowling statistics</p>
                </div>
                <div className='my-auto cursor-pointer'>
                    <Select >
                        <SelectTrigger className="w-36 md:w-44 bg-transparent text-secondary cursor-pointer">
                            <SelectValue placeholder="Select " />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem  value="Public" className='cursor-pointer text-xs md:text-base text-secondary'>Public</SelectItem>
                                <SelectItem value="BowlingCommunityOnly" className='cursor-pointer text-xs md:text-base text-secondary'>Bowling Community Only</SelectItem>
                                <SelectItem value="FriendOnly" className='cursor-pointer text-xs md:text-base text-secondary'>Friend Only</SelectItem>
                                <SelectItem value="Private" className='cursor-pointer text-xs md:text-base text-secondary'>Private</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className='flex justify-between mb-3 md:mb-6'>
                <div>
                    <h4 className='text-secondary font-medium text-xs md:text-base'>Communication Preferences</h4>
                    <p className='text-secondary text-xs md:text-base ' >Control who can send you messages</p>
                </div>
                <div className='my-auto cursor-pointer'>
                    <Select >
                        <SelectTrigger className="w-36 md:w-44 bg-transparent text-secondary cursor-pointer">
                            <SelectValue placeholder="Select " />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem  value="Public" className='cursor-pointer text-xs md:text-base text-secondary'>Public</SelectItem>
                                <SelectItem value="BowlingCommunityOnly" className='cursor-pointer text-xs md:text-base text-secondary'>Bowling Community Only</SelectItem>
                                <SelectItem value="FriendOnly" className='cursor-pointer text-xs md:text-base text-secondary'>Friend Only</SelectItem>
                                <SelectItem value="Private" className='cursor-pointer text-xs md:text-base text-secondary'>Private</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="w-full flex justify-center md:justify-end ">
                <Button
                    onClick={handleSave}
                    disabled={isLoading}
                    className={`px-7 py-3 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
                    isLoading
                        ? 'bg-gray-400 cursor-not-allowed'
                        : isSaved
                        ? 'bg-button-bg hover:bg-green-700'
                        : 'bg-button-bg hover:bg-green-600 transform hover:scale-105 active:scale-95'
                    } shadow-lg hover:shadow-xl`}
                >
                    {isLoading ? (
                    <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Saving...
                    </>
                    ) : isSaved ? (
                    <>
                        <Check className="w-5 h-5" />
                        Saved!
                    </>
                    ) : (
                    'Save Privacy Settings'
                    )}
                </Button>
                </div>

        </div>
    </div>
  )
}

export default Privacy
