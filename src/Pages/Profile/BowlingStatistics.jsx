import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import React from 'react'

const BowlingStatistics = () => {
  return (
    <div className="flex-1 px-0  md:px-6 pb-6">
        <div className="w-full border border-gray-200 rounded-lg p-2 md:p-6 bg-transparent ">
            <h2 className="text-lg md:text-2xl font-semibold text-primary mb-0 md:mb-1 text-center md:text-start">Bowling Statistics</h2>
            <p className="text-secondary text-sm md:text-lg mb-4 md:mb-8 text-center md:text-start">Update your profile information.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 mb-8">
              {/* Row 1 */}
              <div className="space-y-2">
                <Label htmlFor="average-score" className="text-secondary text-sm md:text-lg ">
                  Average Score
                </Label>
                <Input id="average-score" defaultValue="187" className="bg-transparent border-gray-200 text-secondary text-xs md:text-base" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="high-game" className="text-secondary text-sm md:text-lg">
                  High Game
                </Label>
                <Input id="high-game" defaultValue="245" className="bg-transparent border-gray-200 text-secondary text-xs md:text-base" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="high-series" className="text-secondary text-sm md:text-lg">
                  High Series
                </Label>
                <Input id="high-series" defaultValue="678" className="bg-transparent border-gray-200 text-secondary text-xs md:text-base" />
              </div>

              {/* Row 2 */}
              <div className="space-y-2">
                <Label htmlFor="bowling-style" className="text-secondary text-sm md:text-lg">
                  Bowling Style
                </Label>
                <Input
                  id="bowling-style"
                  defaultValue="Hook"
                  className="bg-transparent border-gray-200 text-secondary text-xs md:text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dominant-hand" className="text-secondary text-sm md:text-lg">
                  Dominant Hand
                </Label>
                <Input
                  id="dominant-hand"
                  defaultValue="Right"
                  className="bg-transparent border-gray-200 text-secondary text-xs md:text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rev-rate" className="text-secondary text-sm md:text-lg">
                  Rev Rate (RPM)
                </Label>
                <Input id="rev-rate" defaultValue="350" className="bg-transparent border-gray-200 text-secondary text-xs md:text-base" />
              </div>

              {/* Row 3 */}
              <div className="space-y-2">
                <Label htmlFor="ball-speed" className="text-secondary text-sm md:text-lg">
                  Ball Speed (MPH)
                </Label>
                <Input id="ball-speed" defaultValue="10" className="bg-transparent border-gray-200 text-secondary text-xs md:text-base" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="years-bowling" className="text-secondary text-sm md:text-lg">
                  Years Bowling
                </Label>
                <Input id="years-bowling" defaultValue="10" className="bg-transparent border-gray-200 text-secondary text-xs md:text-base" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="leagues" className="text-secondary text-sm md:text-lg">
                  Leagues
                </Label>
                <Input
                  id="leagues"
                  defaultValue="Friday Night Mixed"
                  className="bg-transparent border-gray-200 text-secondary text-xs md:text-base"
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-center md:justify-end ">
              <Button className="bg-button-bg hover:bg-button-bg/90 text-white text-sm md:text-base px-8 py-2">Save Statistics</Button>
            </div>



        </div>
      
    </div>
  )
}

export default BowlingStatistics
