import { Button } from '@/components/ui/button'
import React from 'react'

const Media = () => {
  return (
    <div className="flex-1 px-0  md:px-6 pb-6">
        <div className="p-6 flex">
          {/* Videos Grid */}
          <div className="flex-1 grid grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border rounded-md overflow-hidden">
                <div className="relative bg-[#d9d9d9] h-40">
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-[#8bc342] text-white px-3 py-1 rounded-full text-sm">12:00</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-[#141b34]">Pro Tips: Spare Conversion</h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-[#9a9ca2]">
                    <div className="flex items-center gap-1">
                      <span>18k views</span>
                    </div>
                    <span>3 weeks ago</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Panel */}
          <div className="w-[300px] ml-6">
            <div className="border rounded-md p-6">
              <h2 className="text-xl font-bold text-[#1e2d5e]">Media Gallery</h2>
              <p className="text-[#596050] mt-2">Upload photos and videos of your bowling performances</p>

              <Button className="w-full mt-6 bg-[#8bc342] hover:bg-[#8bc342]/90">Upload Media</Button>

              <div className="mt-8 text-center">
                <p className="text-[#596050]">Premium feature: Upgrade to upload photos and videos</p>
                <Button variant="outline" className="w-full mt-4 border-[#8bc342] text-[#8bc342] hover:bg-[#8bc342]/10">
                  Upgrade to Premium
                </Button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Media
