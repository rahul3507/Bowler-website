import { MapPin, Calendar, Users, Clock, DollarSign } from "lucide-react"

export default function TournamentsCard({ event }) {
  return (
    <div className="border border-[#d2d5df] rounded-md overflow-hidden bg-white">
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-bold text-[#1e2d5e]">{event.title}</h3>
          {event.isPremium && <span className="bg-[#3b82f6] text-white text-xs px-3 py-1 rounded-full">Premium</span>}
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 text-[#596050] mr-2" />
            <span className="text-sm text-[#596050]">{event.location}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 text-[#596050] mr-2" />
              <span className="text-sm text-[#596050]">{event.date}</span>
            </div>

            <div className="flex items-center">
              <DollarSign className="h-4 w-4 text-[#596050] mr-1" />
              <span className="text-sm text-[#596050]">{event.price}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Users className="h-4 w-4 text-[#596050] mr-2" />
              <span className="text-sm text-[#596050]">{event.type}</span>
            </div>

            <div className="flex items-center">
              <Clock className="h-4 w-4 text-[#596050] mr-1" />
              <span className="text-sm text-[#596050]">{event.registerBy}</span>
            </div>
          </div>
        </div>

        {event.status === "cancelled" && <div className={`mb-4 ${event.cancelColor || "text-red-500"}`}>Cancelled</div>}

        <div className="flex gap-3">
          <button className="flex-1 bg-[#8bc342] hover:bg-[#7ab33b] text-white py-2 rounded-md">View Details</button>

          {event.status !== "cancelled" && (
            <button className="flex-1 border border-[#ee2e55] text-[#ee2e55] hover:bg-[#ee2e55] hover:text-white py-2 rounded-md">
              Cancel Registration
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
