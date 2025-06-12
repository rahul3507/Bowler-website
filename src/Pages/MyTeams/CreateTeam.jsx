import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ChevronDown, Search } from 'lucide-react'
import { FileUpload } from "@/components/ui/file-upload";
const CreateTeam = () => {
  return (
    <div>
        <h2 className='text-lg md:text-2xl text-secondary font-medium '>Create New Team</h2>
        <div>
            <form  className="p-6 space-y-3">
                {/* Team Name */}
                <div className="space-y-2">
                    <label htmlFor="teamName" className="block text-sm md:text-lg font-medium text-secondary">
                        Team Name
                    </label>
                    <input
                    id="teamName"
                    type="text"
                    placeholder="Team Name"
                    className="w-full px-4 py-2 bg-transparent border border-gray-200 rounded-lg focus:ring-2 text-xs md:text-base text-secondary "
                    required
                    />
                </div>

                {/* Select Member */}
                <div className="space-y-2">
                    <label className="block text-sm md:text-lg font-medium text-secondary">
                    Select Member
                    </label>
                    <Select>
                        <SelectTrigger className="w-full bg-transparent text-secondary text-xs md:text-sm cursor-pointer">
                            <SelectValue placeholder="Select Bowler" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup className='text-secondary text-xs md:text-sm'>
                            <SelectLabel>
                                <div className="relative  rounded-2xl dark:bg-gray-300">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tertiary w-4 h-4" />
                                    <Input placeholder="Overview" className="pl-9 w-full  rounded-4xl bg-white border-gray-200" />
                                </div>
                            </SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                {/* Upload Image */}
                <div className="space-y-2">
                    <label className="block text-sm md:text-lg font-medium text-secondary">
                        Upload Image
                    </label>
                    <div className='border  border-gray-200 w-full '>
                        <FileUpload  />
                    </div>
                    
                    
                </div>

                {/* Submit Button */}
                <div className='w-full flex justify-end'>
                    <Button
                            type="submit"
                            
                            className="  bg-button-bg hover:bg-button-bg/90 disabled:bg-button-bg/40 disabled:cursor-not-allowed text-white font-medium py-0 px-4 rounded-lg transition-colors duration-200 transform active:scale-95"
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