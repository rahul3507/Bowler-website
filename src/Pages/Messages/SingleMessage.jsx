import { Flag, MoreHorizontal } from "lucide-react";

function SingleMessage() {
  return (
    <div className="border-b border-[#d2d5df] p-6">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-[#d9d9d9] flex-shrink-0"></div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-[#141b34]">Downtown Lanes</h3>
              <span className="text-xs text-[#9a9ca2]">Sent to 15 players</span>
            </div>
            <h4 className="font-semibold text-[#1e2d5e]">New Tournament Announced!</h4>
            <p className="text-sm text-[#596050] mt-1">
              Join us for out Summer Classic tournament on June 10th. Early registration discounts available!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="text-xs text-[#9a9ca2]">1 day ago</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#8bc342]"></div>
            <button className="text-[#8bc342]">
              <Flag className="w-4 h-4" />
            </button>
            <button className="text-[#9a9ca2]">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SingleMessage;