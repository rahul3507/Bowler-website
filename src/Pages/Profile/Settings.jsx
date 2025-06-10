import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState, useRef } from "react"
import { Check } from "lucide-react"
const Settings = () => {
      const [isLoading, setIsLoading] = useState(false);
      const [isSaved, setIsSaved] = useState(false);
      const [isLoading2, setIsLoading2] = useState(false);
      const [isSaved2, setIsSaved2] = useState(false);
      const [isLoading3, setIsLoading3] = useState(false);
      const [isSaved3, setIsSaved3] = useState(false);
      const handleSave3= async () => {
              setIsLoading3(true);
              // Simulate API call
              await new Promise(resolve => setTimeout(resolve, 1000));
              setIsLoading3(false);
              setIsSaved3(true);
              setTimeout(() => setIsSaved3(false), 3000);
            };
      const handleSave2 = async () => {
              setIsLoading2(true);
              // Simulate API call
              await new Promise(resolve => setTimeout(resolve, 1000));
              setIsLoading2(false);
              setIsSaved2(true);
              setTimeout(() => setIsSaved2(false), 3000);
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
  const profileFileInputRef = useRef(null)

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

  
  return (
    <div className="flex-1 px-0  md:px-6 pb-6 space-y-2 md:space-y-6">
            <div className="w-full border border-gray-200  rounded-lg p-2 md:p-6 bg-transparent ">
                <h2 className="text-lg md:text-2xl font-semibold text-primary mb-0 md:mb-1 text-center md:text-start">General Information</h2>
                <p className="text-secondary text-sm md:text-lg mb-4 md:mb-8 text-center md:text-start">Update your personal information adn how ti appears on hour profile.</p>
    
                <div className="flex flex-col md:flex-row  gap-6 md:gap-12">
                  {/* Left Column - Avatar */}
                  <div className="flex-1 flex-col text-center  items-center">
                    <Avatar className="w-32 h-32 md:w-48 bg-gray-200 md:h-48 mb-6  mx-auto">
                      {profileImage ? (
                        <AvatarImage src={profileImage} alt="Profile" className="object-cover" />
                      ) : (
                        <AvatarFallback className="bg-grborder-gray-200  w-full h-full"></AvatarFallback>
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
                      className="bg-[#d2d5df] border-gray-200  text-primary hover:bg-grborder-gray-200 "
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
                      <Input id="firstName" placeholder="John" className="mt-2 text-xs md:text-sm border-gray-200 " />
                    </div>
    
                    <div>
                      <Label htmlFor="displayName" className="text-secondary text-sm md:text-base font-medium">
                        Display Name
                      </Label>
                      <Input id="displayName" placeholder="John" className="mt-2 text-xs md:text-sm border-gray-200 " />
                    </div>
    
                    <div>
                      <Label htmlFor="bio" className="text-secondary text-sm md:text-base font-medium">
                        Bio
                      </Label>
                      <Textarea id="bio" placeholder="John" className="mt-2 border-gray-200  text-xs md:text-sm min-h-[100px]" />
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
    
            <div className="w-full border border-gray-200  rounded-lg p-2 md:p-6 bg-transparent ">
                <h2 className="text-lg md:text-2xl font-semibold text-primary mb-0 md:mb-1 text-center md:text-start">Contact  Information</h2>
                <p className="text-secondary text-sm md:text-lg mb-4 md:mb-8 text-center md:text-start">Update your contact details and communication performances.</p>

                <div className="flex flex-col space-y-2 md:space-y-6">
                    <div className="">
                        <Label htmlFor="password" className="text-secondary text-sx md:text-base font-medium mb-2 md:mb-3">
                        password
                        </Label>
                        <Input id="password" placeholder="johan.doe@example.com" className="mt-1 text-xs md:text-sm bg-transparent border-gray-200 " />
                    </div>

                    <div>
                        <Label htmlFor="phone" className="text-secondary text-sx md:text-base font-medium mb-2 md:mb-3">
                        Phone Number
                        </Label>
                        <Input id="phone" placeholder="+1 (555) 123-4567" className="mt-1 bg-transparent border-gray-200 " />
                    </div>

                    <div>
                        <Label htmlFor="city" className="text-secondary text-sx md:text-base font-medium mb-2 md:mb-3">
                        City
                        </Label>
                        <Input id="city" placeholder="New York" className="mt-1 bg-transparent border-gray-200 " />
                    </div>

                    <div>
                        <Label htmlFor="state" className="text-secondary text-sx md:text-base font-medium mb-2 md:mb-3">
                        State
                        </Label>
                        <Input id="state" placeholder="NY" className="mt-1 bg-transparent border-gray-200 " />
                    </div>
                </div>

                <div className="flex justify-end mt-6">
                        <Button
                                            onClick={handleSave2}
                                            disabled={isLoading2}
                                            className={`px-7 py-3 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
                                            isLoading2
                                                ? 'bg-gray-400 cursor-not-allowed'
                                                : isSaved2
                                                ? 'bg-button-bg hover:bg-green-700'
                                                : 'bg-button-bg hover:bg-green-600 transform hover:scale-105 active:scale-95'
                                            } shadow-lg hover:shadow-xl`}
                                        >
                                            {isLoading2 ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Saving...
                                            </>
                                            ) : isSaved2 ? (
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


            <div className="w-full border border-gray-200  rounded-lg p-2 md:p-6 bg-transparent ">
                <h2 className="text-lg md:text-2xl font-semibold text-primary mb-0 md:mb-1 text-center md:text-start">Account Security</h2>
                <p className="text-secondary text-sm md:text-lg mb-4 md:mb-8 text-center md:text-start">Manage your password and account security settings.</p>

                <div className="flex flex-col space-y-2 md:space-y-6">
                    <div className="">
                        <Label htmlFor="password" className="text-secondary text-sx md:text-base font-medium mb-2 md:mb-3">
                        Password
                        </Label>
                        <Input id="password" type='password' className="mt-1 text-xs md:text-sm bg-transparent border-gray-200 " />
                    </div>

                    <div>
                        <Label htmlFor="new-password" className="text-secondary text-sx md:text-base font-medium mb-2 md:mb-3">
                        New Password
                        </Label>
                        <Input id="new-password" type='password' className="mt-1 bg-transparent border-gray-200 " />
                    </div>

                    <div>
                        <Label htmlFor="confirm-password" className="text-secondary text-sx md:text-base font-medium mb-2 md:mb-3">
                        Confirm Password
                        </Label>
                        <Input id="confirm-password" type='password'  className="mt-1 bg-transparent border-gray-200 " />
                    </div>

                    
                </div>

                <div className="flex justify-end mt-6">
                        <Button
                                            onClick={handleSave3}
                                            disabled={isLoading3}
                                            className={`px-7 py-3 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
                                            isLoading3
                                                ? 'bg-gray-400 cursor-not-allowed'
                                                : isSaved3
                                                ? 'bg-button-bg hover:bg-green-700'
                                                : 'bg-button-bg hover:bg-green-600 transform hover:scale-105 active:scale-95'
                                            } shadow-lg hover:shadow-xl`}
                                        >
                                            {isLoading3 ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Saving...
                                            </>
                                            ) : isSaved3 ? (
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
  )
}

export default Settings
