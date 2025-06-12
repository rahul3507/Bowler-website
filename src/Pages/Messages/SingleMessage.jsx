import { Flag, MoreHorizontal, MoreHorizontalIcon, MoreVertical } from "lucide-react";

function SingleMessage() {
  return (
    <div className="border-b border-[#d2d5df] p-6">
      <div className="flex justify-between">
        <div className="flex gap-4 w-full">
          <div className="w-10 h-10 rounded-full bg-[#d9d9d9] flex-shrink-0">
            <img
              src="https://via.placeholder.com/40"
              alt="Downtown Lanes"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-start gap-1 md:gap-6">
              {/* Left */}
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-primary text-base md:text-xl">Downtown Lanes</h3>
                  <span className="text-xs md:text-sm text-tertiary">Sent to 15 players</span>
                </div>
                <h4 className="font-semibold text-primary text-base md:text-xl">New Tournament Announced!</h4>
              </div>
              {/* right */}
              <div className="flex justify-end w-full md:w-fit items-end gap-2 md:gap-4">
                <span className="text-xs md:text-sm text-tertiary">1 day ago</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#8bc342]"></div>
                  <button className="bg-transparent cursor-pointer text-[#E5940C] hover:text-[#E5940C]">
                    <Flag className="w-4 h-4" />
                  </button>
                  <button className="text-primary cursor-pointer bg-transparent hover:text-primary/90">
                    <MoreHorizontalIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            <p className="text-sm w-full  md:text-base text-secondary mt-1">
              Join us for out Summer Classic tournament on June 10th. Early registration discounts available!
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
export default SingleMessage;