import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Clock, DollarSign } from "lucide-react";

export default function TournamentsCard({ event, acceptEvent, cancelEvent }) {
  const viewDetailsClass =
    event.status === "new"
      ? " flex-1 bg-transparent border border-button-bg text-button-bg py-2 px-4 rounded-md"
      : " flex-1 bg-button-bg hover:bg-button-bg/90 text-white py-2 px-4 rounded-md";

  return (
    <div className="border border-[#d2d5df] rounded-md overflow-hidden bg-white">
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-base md:text-xl font-bold text-primary">{event.title}</h3>
          {event.isPremium && (
            <span className="bg-[#3b82f6] text-white text-xs px-3 py-1 rounded-full">Premium</span>
          )}
        </div>

        
          <div className="space-y-3 mb-4">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 text-secondary mr-2" />
              <span className="text-xs md:text-base text-secondary">{event.location}</span>
            </div>

            {event.status !== "new" && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-secondary mr-2" />
                <span className="text-xs md:text-base text-secondary">{event.date}</span>
              </div>

              <div className="flex items-center">
                <DollarSign className="h-4 w-4 text-secondary mr-1" />
                <span className="text-xs md:text-base text-secondary">{event.price}</span>
              </div>
            </div>)}

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="h-4 w-4 text-secondary mr-2" />
                <span className="text-xs md:text-base text-secondary">{event.type}</span>
              </div>
              
              {event.status !== "new" && (
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-secondary mr-1" />
                <span className="text-xs md:text-base text-secondary">{event.registerBy}</span>
              </div>)}
            </div>
          </div>
       

        {event.status === "cancelled" && <div className="mb-4 text-red-500">Cancelled</div>}

        <div className="flex gap-3">
          <Button className={viewDetailsClass}>View Details</Button>

          {event.status === "new" && (
            <Button
              onClick={() => acceptEvent(event.id)}
              className="flex-1 bg-[#8bc342] hover:bg-[#7ab33b] text-white py-2 px-4 rounded-md"
            >
              Accept
            </Button>
          )}

          {event.status === "active" && (
            <Button
              onClick={() => cancelEvent(event.id)}
              className="flex-1 border bg-transparent border-custom-red text-custom-red hover:bg-gray-100 py-2 px-4 rounded-md"
            >
              Cancel Registration
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}