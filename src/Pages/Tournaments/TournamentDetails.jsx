import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge, Bookmark, Lock, MessageCircle, Share, ThumbsUp } from 'lucide-react'
import React from 'react'
import TournamentsList from './TournamentList'

const TournamentDetails = () => {
  return (
    <div className="flex flex-col p-6 gap-2 md:gap-8">
        <div className="flex-1 p-6">
          {/* Premium Content Section */}
          <div className="bg-[#d9d9d9] rounded-lg p-12 text-center mb-6">
            <Lock className="w-16 h-16 text-[#9a9ca2] mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-[#141b34] mb-2">Premium Content</h2>
            <p className="text-[#9a9ca2] mb-6">This video is available exclusive to premium members.</p>
            <Button className="bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white px-8">Upgrade to Premium</Button>
          </div>

          {/* Video Info */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#1e2d5e] mb-3">2024 National Bowling Championship Finals</h2>
            <div className="flex items-center gap-4 text-[#9a9ca2] mb-4">
              <span>18k views</span>
              <span>•</span>
              <span>May 12, 2024</span>
              <span>•</span>
              <Badge className="bg-[#3b82f6] text-white">Premium</Badge>
            </div>

            {/* Engagement Buttons */}
            <div className="flex items-center gap-6 mb-6">
              <button className="flex items-center gap-2 text-[#9a9ca2] hover:text-[#1e2d5e]">
                <ThumbsUp className="w-5 h-5" />
                <span>2.5k</span>
              </button>
              <button className="flex items-center gap-2 text-[#9a9ca2] hover:text-[#1e2d5e]">
                <MessageCircle className="w-5 h-5" />
                <span>Comments</span>
              </button>
              <button className="flex items-center gap-2 text-[#9a9ca2] hover:text-[#1e2d5e]">
                <Share className="w-5 h-5" />
                <span>Share</span>
              </button>
              <button className="flex items-center gap-2 text-[#9a9ca2] hover:text-[#1e2d5e]">
                <Bookmark className="w-5 h-5" />
                <span>Save</span>
              </button>
            </div>

            {/* Creator Info */}
            <div className="flex items-center gap-3 mb-6">
              <Avatar className="w-12 h-12">
                <AvatarFallback className="bg-[#d2d5df] text-[#1e2d5e]">BKT</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-[#1e2d5e]">BKT</h3>
                <p className="text-[#9a9ca2] text-sm">Official bowling content provider</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-semibold text-[#1e2d5e] mb-3">Description</h3>
              <p className="text-[#9a9ca2] leading-relaxed">
                Watch the thrilling conclusion to the 2024 National Bowling Championship as the top bowlers compete for
                the title. Featuring expert commentary and exclusive behind the-scenes footage.
              </p>
            </div>

            {/* Tags */}
            <div className="flex gap-2">
              <Badge variant="outline" className="border-[#d2d5df] text-[#9a9ca2]">
                Bowling
              </Badge>
              <Badge variant="outline" className="border-[#d2d5df] text-[#9a9ca2]">
                Tutorial
              </Badge>
              <Badge variant="outline" className="border-[#d2d5df] text-[#9a9ca2]">
                Technique
              </Badge>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 p-6 border-l border-[#e9eaef]">
          {/* Tabs */}
          {/* <TournamentsCard/> */}
        
        </div>
    </div>
  )
}

export default TournamentDetails