import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge, Bookmark, Lock, MessageCircle, Share, ThumbsUp } from "lucide-react";
import { useLocation } from "react-router-dom";
import TournamentsCard from "./TournamentsCard";

const TournamentDetails = () => {
  const location = useLocation();
  const { event = {}, events = [], acceptEvent = () => {}, cancelEvent = () => {} } = location.state || {};

  return (
    <div className="flex flex-col lg:flex-row p-6 gap-2 md:gap-8">
      <div className="flex-1 p-6">
        {/* Premium Content Section */}
        <div className="bg-[#d9d9d9] rounded-lg p-12 text-center mb-6">
          <Lock className="w-16 h-16 text-[#9a9ca2] mx-auto mb-4" />
          <h2 className="text-base md:text-xl font-semibold text-primary mb-2">Premium Content</h2>
          <p className="text-[#9a9ca2] mb-6">This video is available exclusive to premium members.</p>
          <Button className="bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white px-8">
            Upgrade to Premium
          </Button>
        </div>

        {/* Video Info */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#1e2d5e] mb-3">{event.title || "Tournament Title"}</h2>
          <div className="flex items-center gap-4 text-[#9a9ca2] mb-4">
            <span>18k views</span>
            <span>•</span>
            <span>{event.date || "Date not available"}</span>
            <span>•</span>
            {event.isPremium && <Badge className="bg-[#3b82f6] text-white">Premium</Badge>}
          </div>

          {/* Engagement Buttons */}
          <div className="flex items-center gap-6 mb-6">
            <Button className="flex bg-transparent items-center gap-2 text-primary hover:bg-transparent/90">
              <ThumbsUp className="w-5 h-5" />
              <span>2.5k</span>
            </Button>
            <Button className="flex bg-transparent items-center gap-2 text-primary hover:bg-transparent/90">
              <MessageCircle className="w-5 h-5" />
              <span>Comments</span>
            </Button>
            <Button className="flex bg-transparent items-center gap-2 text-primary hover:bg-transparent/90">
              <Share className="w-5 h-5" />
              <span>Share</span>
            </Button>
            <Button className="flex bg-transparent items-center gap-2 text-primary hover:bg-transparent/90">
              <Bookmark className="w-5 h-5" />
              <span>Save</span>
            </Button>
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
              {event.description ||
                "Watch the thrilling conclusion to the tournament as the top bowlers compete for the title. Featuring expert commentary and exclusive behind-the-scenes footage."}
            </p>
          </div>

          {/* Tags */}
          <div className="flex gap-2">
            <Button className="flex bg-transparent items-center gap-2 text-primary hover:bg-transparent/90">
              Bowling
            </Button>
            <Button className="flex bg-transparent items-center gap-2 text-primary hover:bg-transparent/90">
              Tutorial
            </Button>
            <Button className="flex bg-transparent items-center gap-2 text-primary hover:bg-transparent/90">
              Technique
            </Button>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-full lg:w-96 p-6 border-l border-[#e9eaef]">
        <h3 className="text-base md:text-xl font-bold text-primary mb-4">Other Tournaments</h3>
        <div className="grid grid-cols-1 gap-6">
          {events.map((evt) => (
            <TournamentsCard 
              key={evt.id} 
              events={events} 
              event={evt} 
              acceptEvent={acceptEvent} 
              cancelEvent={cancelEvent} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TournamentDetails;