import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState, useRef } from "react"
import { Check } from "lucide-react"

const General = () => {

      const [isLoading, setIsLoading] = useState(false);
      const [isSaved, setIsSaved] = useState(false);
      const [isLoadingUpgrade, setIsLoadingUpgrade] = useState(false);
      const [isSavedUpgrade, setIsSavedUpgrade] = useState(false);
      const handleUpgrade = async () => {
              setIsLoadingUpgrade(true);
              // Simulate API call
              await new Promise(resolve => setTimeout(resolve, 1000));
              setIsLoadingUpgrade(false);
              setIsSavedUpgrade(true);
              setTimeout(() => setIsSavedUpgrade(false), 3000);
            };

      const handleSave = async () => {
              setIsLoading(true);
              // Simulate API call
              await new Promise(resolve => setTimeout(resolve, 1000));
              setIsLoading(false);
              setIsSaved(true);
              setTimeout(() => setIsSaved(false), 3000);
            };
  
  const [profileImage, setProfileImage] = useState(null)
  const [tradingCardImage, setTradingCardImage] = useState(null)
  const profileFileInputRef = useRef(null)
  const tradingCardFileInputRef = useRef(null)

  const handleImageUpload = (event, setImage) => {
    const file = event.target.files[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImage(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleProfileImageClick = () => {
    profileFileInputRef.current?.click()
  }

  const handleTradingCardImageClick = () => {
    tradingCardFileInputRef.current?.click()
  }

  return (
    <div className="flex-1 px-0  md:px-6 pb-6">
          <div className="w-full border border-gray-200 rounded-lg p-2 md:p-6 bg-transparent ">
            <h2 className="text-lg md:text-2xl font-semibold text-primary mb-0 md:mb-1 text-center md:text-start">General Information</h2>
            <p className="text-secondary text-sm md:text-lg mb-4 md:mb-8 text-center md:text-start">Update your personal information adn how ti appears on hour profile.</p>

            <div className="flex flex-col md:flex-row  gap-6 md:gap-12">
              {/* Left Column - Avatar */}
              <div className="flex-1 flex-col text-center  items-center">
                <Avatar className="w-32 h-32 md:w-48 md:h-48 mb-6  mx-auto">
                  {profileImage ? (
                    <AvatarImage src={profileImage} alt="Profile" className="object-cover" />
                  ) : (
                    <AvatarFallback className="bg-[#d9d9d9] w-full h-full"></AvatarFallback>
                  )}
                </Avatar>
                <input
                  type="file"
                  ref={profileFileInputRef}
                  onChange={(e) => handleImageUpload(e, setProfileImage)}
                  accept="image/*"
                  className="hidden"
                />
                <Button 
                  variant="outline" 
                  className="bg-[#d2d5df] border-gray-200 text-primary hover:bg-[#d9d9d9]"
                  onClick={handleProfileImageClick}
                >
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
                                        'Save Change'
                                        )}
                      </Button>
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
                        <Avatar 
                          className="w-20 h-20 md:w-28 md:h-28 mx-auto cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={handleTradingCardImageClick}
                        >
                          {tradingCardImage ? (
                            <AvatarImage src={tradingCardImage} alt="Trading Card" className="object-cover" />
                          ) : (
                            <AvatarFallback className="bg-gray-200 w-full h-full"></AvatarFallback>
                          )}
                        </Avatar>
                        <input
                          type="file"
                          ref={tradingCardFileInputRef}
                          onChange={(e) => handleImageUpload(e, setTradingCardImage)}
                          accept="image/*"
                          className="hidden"
                        />

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
                    <Button
                                        onClick={handleUpgrade}
                                        disabled={isLoadingUpgrade}
                                        className={`px-7 py-3 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
                                        isLoadingUpgrade
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : isSavedUpgrade
                                            ? 'bg-button-bg hover:bg-green-700'
                                            : 'bg-button-bg hover:bg-green-600 transform hover:scale-105 active:scale-95'
                                        } shadow-lg hover:shadow-xl`}
                                    >
                                        {isLoadingUpgrade ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Upgrading...
                                        </>
                                        ) : isSavedUpgrade ? (
                                        <>
                                            <Check className="w-5 h-5" />
                                            Upgraded!
                                        </>
                                        ) : (
                                        'Upgrade to Premium'
                                        )}
                      </Button> </div>
            </div>
        </div>
  )
}

export default General