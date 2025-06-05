
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const General = () => {
  return (
    <div className="flex-1 px-6 pb-6">
          <div className="max-w-4xl">
            <h2 className="text-xl font-semibold text-[#141b34] mb-2">General Information</h2>
            <p className="text-[#9a9ca2] mb-8">Update your personal information adn how ti appears on hour profile.</p>

            <div className="flex gap-12">
              {/* Left Column - Avatar */}
              <div className="flex flex-col items-center">
                <Avatar className="w-32 h-32 mb-4">
                  <AvatarFallback className="bg-[#d9d9d9] w-full h-full"></AvatarFallback>
                </Avatar>
                <Button variant="outline" className="bg-[#d2d5df] border-[#d2d5df] text-[#141b34] hover:bg-[#d9d9d9]">
                  Change Avatar
                </Button>
              </div>

              {/* Right Column - Form */}
              <div className="flex-1 space-y-6">
                <div>
                  <Label htmlFor="firstName" className="text-[#141b34] font-medium">
                    First Name
                  </Label>
                  <Input id="firstName" placeholder="John" className="mt-2 border-[#e8e9e6]" />
                </div>

                <div>
                  <Label htmlFor="displayName" className="text-[#141b34] font-medium">
                    Display Name
                  </Label>
                  <Input id="displayName" placeholder="John" className="mt-2 border-[#e8e9e6]" />
                </div>

                <div>
                  <Label htmlFor="bio" className="text-[#141b34] font-medium">
                    Bio
                  </Label>
                  <Textarea id="bio" placeholder="John" className="mt-2 border-[#e8e9e6] min-h-[100px]" />
                </div>

                <div className="flex justify-end pt-4">
                  <Button className="bg-[#1e2d5e] hover:bg-[#141b34] text-white px-8">Save Change</Button>
                </div>
              </div>
            </div>

            {/* Trading Card Section */}
            <div className="mt-16 flex gap-8 items-start">
              <div className="flex-shrink-0">
                <Avatar className="w-24 h-24">
                  <AvatarFallback className="bg-[#d9d9d9] w-full h-full"></AvatarFallback>
                </Avatar>
              </div>

              <div className="flex-1">
                <p className="text-[#9a9ca2] mb-4 max-w-md">
                  Your digital trading card is automatically generated based on your profile information and bowling
                  statistics. Premium members can customize their cards with additional images and stats.
                </p>

                <div className="text-center mb-4">
                  <p className="text-[#9a9ca2] text-sm">New York, NY</p>
                </div>

                <div className="grid grid-cols-4 gap-8 mb-6">
                  <div className="text-center">
                    <p className="text-[#9a9ca2] text-sm">Avg. Score</p>
                    <p className="text-2xl font-bold text-[#141b34]">187</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#9a9ca2] text-sm">High Game</p>
                    <p className="text-2xl font-bold text-[#141b34]">245</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#9a9ca2] text-sm">Style</p>
                    <p className="text-lg font-semibold text-[#141b34]">hook</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#9a9ca2] text-sm">Hand</p>
                    <p className="text-lg font-semibold text-[#141b34]">Right</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#fcd5dd] text-[#ee2e55] px-3 py-1 rounded-full text-sm font-medium">Level 12</div>
                  <Button className="bg-[#8bc342] hover:bg-[#111b05] text-white">Upgrade to Premium</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default General