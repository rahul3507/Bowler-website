import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"

const HomePage = () => {
  return (
    <div className='flex-1 h-screen overflow-y-auto'>
      {/* Header */}
      <div className="bg-transparent border-b border-[#e8e9e6] p-6">
        <div className="flex flex-col md:flex-row  justify-center md:justify-between  items-center md:items-start ">
          <div className='text-center md:text-left mb-4 md:mb-0'>
            <h1 className="text-xl md:text-2xl font-bold text-primary-heading dark:text-white mb-2">Home</h1>
            <p className="text-secondary dark:text-gray-200 text-sm md:text-base">
              Communications from bowling centers, manufacturers, and BowlersNetwork
            </p>
          </div>
          <div className="relative rounded-4xl dark:bg-gray-300">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tertiary w-4 h-4" />
            <Input placeholder="Overview" className="pl-9 w-64  rounded-4xl bg-white border-gray-200" />
          </div>
        </div>
      </div>

      <div className="px-6 pt-2 md:pt-6">
        {/* pro players */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-[#1e2d5e]">Pro Players</h2>
            <Button variant="link" className="text-[#3b82f6] text-sm p-0">
              See All
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3,4].map((i) => (
              <Card key={i} className="relative bg-white border-2 border-[#d2d5df] rounded-3xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-purple-400"></div>
                <CardContent className="p-4 text-center">
                  <div className="mb-2">
                    <span className="text-xs text-[#878c81]">Level</span>
                    <div className="text-3xl font-bold text-[#1e2d5e]">8</div>
                  </div>
                  <div className="w-20 h-20 mx-auto mb-3 rounded-lg overflow-hidden">
                    <image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Jason Belmonte"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-[#1e2d5e] mb-2">Jason Belmonte</h3>
                  <Button variant="outline" size="sm" className="mb-3 text-[#3b82f6] border-[#3b82f6]">
                    <Plus className="w-3 h-3 mr-1" />
                    Follow
                  </Button>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="text-[#878c81]">97 PAC</div>
                      <div className="text-[#878c81]">97 PAC</div>
                      <div className="text-[#878c81]">97 PAC</div>
                    </div>
                    <div>
                      <div className="text-[#878c81]">97 PAC</div>
                      <div className="text-[#878c81]">97 PAC</div>
                      <div className="text-[#878c81]">97 PAC</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default HomePage