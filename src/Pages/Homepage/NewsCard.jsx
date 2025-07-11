import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageCircle, Share, Plus, Share2, MessageSquareMore } from "lucide-react";

const NewsCard = ({ news }) => {
  const { name, profileImg, postingTime, description, newsImage, totalLove, comments, totalShare } = news;
  
  const [isExpanded, setIsExpanded] = useState(false);
  
  const words = description.split(' ');
  const isLongDescription = words.length > 25;
  const shortDescription = words.slice(0, 25).join(' ') + (isLongDescription ? '...' : '');
  
  return (
    <Card className="bg-white  h-[470px]">
      <CardContent className="px-4  ">
        <div className="flex items-center gap-2 mb-3 ">
          <div className="h-6 w-6 md:h-8 md:w-8 rounded-full overflow-hidden bg-gray-200">
            <img
              src={profileImg || "/placeholder.svg"}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-sm md:text-base text-primary">{name}</div>
            <div className="text-xs text-tertiary">{postingTime}</div>
          </div>
          <Button variant="outline" size="sm" className="text-[#3b82f6] border-none">
            <Plus className="w-3 h-3 mr-1" />
            Follow
          </Button>
        </div>
        
        <div className="mb-3 max-h-20 overflow-y-auto">
          <p className="text-xs md:text-sm text-secondary">
            {isExpanded ? description : shortDescription}
            {isLongDescription && (
              <Button
                variant="link"
                className="text-[#3b82f6] bg-transparent border-none p-0 pl-2 h-auto inline"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? ' See less' : ' see more'}
              </Button>
            )}
          </p>
        </div>
        
        <div className="mb-3 rounded-lg overflow-hidden">
          <img
            src={newsImage || "/placeholder.svg"}
            alt="News image"
            className="w-full max-h-72 object-cover"
          />
        </div>
        
        <div className="flex items-center justify-between text-xs text-secondary">
          <Button variant="ghost" size="sm" className="p-0 h-auto text-secondary py-1 border-none bg-transparent">
            <Heart className="w-4 h-4 mr-1" />
            {totalLove}
          </Button>
          <Button variant="ghost" size="sm" className="p-0 h-auto text-secondary py-1 border-none bg-transparent">
            <MessageSquareMore  className="w-4 h-4 mr-1" />
            {comments}
          </Button>
          <Button variant="ghost" size="sm" className="p-0 h-auto text-secondary py-1 border-none bg-transparent">
            <Share2  className="w-4 h-4 mr-1" />
            {totalShare}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;