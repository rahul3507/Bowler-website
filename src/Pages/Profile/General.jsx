
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const General = () => {
  return (
    <div className="flex-1 px-0  md:px-6 pb-6">
          <div className="w-full border border-gray-200 rounded-lg p-2 md:p-6 bg-transparent ">
            <h2 className="text-lg md:text-2xl font-semibold text-primary mb-0 md:mb-1 text-center md:text-start">General Information</h2>
            <p className="text-secondary text-sm md:text-lg mb-4 md:mb-8 text-center md:text-start">Update your personal information adn how ti appears on hour profile.</p>

            <div className="flex flex-col md:flex-row  gap-6 md:gap-12">
              {/* Left Column - Avatar */}
              <div className="flex-1 flex-col text-center  items-center">
                <Avatar className="w-32 h-32 md:w-48 md:h-48 mb-6  mx-auto">
                  <AvatarFallback className="bg-[#d9d9d9] w-full h-full"></AvatarFallback>
                </Avatar>
                <Button variant="outline" className="bg-[#d2d5df] border-gray-200 text-primary hover:bg-[#d9d9d9]">
                  Change Avatar
                </Button>
              </div>

              {/* Right Column - Form */}
              <div className="flex-4 space-y-3 md:space-y-6">
                <div>
                  <Label htmlFor="firstName" className="text-secondary text-sm md:text-base font-medium">
                    First Name
                  </Label>
                  <Input id="firstName" placeholder="John" className="mt-2 text-xs md:text-sm border-gray-200" />
                </div>

                <div>
                  <Label htmlFor="displayName" className="text-secondary text-sm md:text-base font-medium">
                    Display Name
                  </Label>
                  <Input id="displayName" placeholder="John" className="mt-2 text-xs md:text-sm border-gray-200" />
                </div>

                <div>
                  <Label htmlFor="bio" className="text-secondary text-sm md:text-base font-medium">
                    Bio
                  </Label>
                  <Textarea id="bio" placeholder="John" className="mt-2 border-gray-200 text-xs md:text-sm min-h-[100px]" />
                </div>

                <div className="flex justify-center md:justify-end pt-2 md:pt-4">
                  <Button className="bg-primary text-sm md:text-base hover:bg-[#141b34] text-white py-0 md:py-4  px-8">Save Change</Button>
                </div>
              </div>
            </div>

            
          </div>


            <div className="w-full mt-2 md:mt-6   bg-transparent flex flex-col md:flex-row  gap-6 md:gap-12">
                {/* Trading Card Section */}
                <div className=" flex-1 gap-4 md:gap-8 p-2 md:p-6 rounded-lg border border-gray-200 items-start">
                    <div className="flex w-full justify-end items-center  gap-4 ">
                        <button className="bg-[#fcd5dd] w-20  text-custom-red px-3 py-1 rounded-full text-sm font-medium">Level 12</button>
                    </div>
                    
                    <div className="flex-shrink-0 text-center  items-center">
                        <Avatar className="w-20 h-20 md:w-28 md:h-28 mx-auto">
                            <AvatarFallback className="bg-gray-200 w-full h-full"></AvatarFallback>
                        </Avatar>


                        <div className="text-center mb-4 mt-6">
                            <p className="text-primary font-semibold mb-2 text-lg md:text-xl">John Smith</p>
                            <p className="text-tertiary text-sm md:text-lg">New York, NY</p>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6">
                            <div className="text-center">
                                <p className="text-tertiary text-xs md:text-base">Avg. Score</p>
                                <p className=" text-sm md:text-lg font-bold text-secondary">187</p>
                            </div>
                            <div className="text-center">
                                <p className="text-tertiary text-xs md:text-base">High Game</p>
                                <p className=" text-sm md:text-lg font-bold text-secondary">245</p>
                            </div>
                            <div className="text-center">
                                <p className="text-tertiary text-xs md:text-base">Style</p>
                                <p className="text-sm md:text-lg font-semibold text-secondary">hook</p>
                            </div>
                            <div className="text-center">
                                <p className="text-tertiary text-xs md:text-base">Hand</p>
                                <p className="text-sm md:text-lg font-semibold text-secondary">Right</p>
                            </div>
                        </div>

                    
                </div>
                </div>
                <div className="flex-4 my-auto text-center md:text-left">
                    <p className="text-tertiary mb-4 text-sm md:text-lg">
                        Your digital trading card is automatically generated based on your profile information and bowling
                        statistics. Premium members can customize their cards with additional images and stats.
                    </p>
                    <Button className="bg-button-bg hover:bg-button-bg/90 text-white text-xs md:text-base">Upgrade to Premium</Button>
                </div>
            </div>
        </div>
  )
}

export default General