import { Flag, MoreHorizontal, MoreHorizontalIcon, MoreVertical } from "lucide-react";

function SingleMessage({ message, onMessageClick, onFlagToggle }) {
  const handleMessageClick = () => {
    onMessageClick(message.id);
  };

  const handleFlagClick = (e) => {
    e.stopPropagation(); // Prevent triggering message click
    onFlagToggle(message.id);
  };

  return (
    <div 
      className={`border border-gray-200 mb-2 p-2 md:p-6 cursor-pointer ${
        message.read ? 'bg-transparent' : 'bg-gray-100'
      }`}
      onClick={handleMessageClick}
    >
      <div className="flex justify-between">
        <div className="flex gap-4 w-full">
          <div className="w-10 md:w-12 md:h-12 h-10 mt-1 rounded-full bg-[#d9d9d9] flex-shrink-0">
            <img
              src={message.profileImage}
              alt={message.name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-start gap-1 md:gap-6">
              {/* Left */}
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-primary text-base md:text-xl">{message.name}</h3>
                  <span className="text-xs md:text-sm text-tertiary">{message.senderType}</span>
                </div>
                <h4 className="font-semibold text-primary text-base md:text-xl">{message.title}</h4>
              </div>
              {/* right */}
              <div className="flex justify-end w-full md:w-fit items-end gap-2 md:gap-4">
                <span className="text-xs md:text-sm text-tertiary">{message.sendingTime}</span>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${message.read ? 'bg-transparent' : 'bg-[#8bc342]'}`}></div>
                  <button 
                    className={`bg-transparent cursor-pointer ${
                      message.flag ? 'text-red-500' : 'text-[#E5940C]'
                    } hover:opacity-80`}
                    onClick={handleFlagClick}
                  >
                    <Flag className="w-4 h-4" />
                  </button>
                  <button className="text-primary cursor-pointer bg-transparent hover:text-primary/90">
                    <MoreHorizontalIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            <p className="text-sm w-full md:text-base text-secondary mt-1">
              {message.content}
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default SingleMessage;