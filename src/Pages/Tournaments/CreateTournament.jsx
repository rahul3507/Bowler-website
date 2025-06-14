import  { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function CreateTournament() {
  const [formData, setFormData] = useState({
    tournamentName: 'City Championship',
    location: 'Downtown Lanes, New York, NY',
    tournamentType: 'Single',
    registrationFee: '$85',
    eventDate: 'johnsmith@gmail.com',
    lastDate: 'johnsmith@gmail.com',
    details: 'Passionate bowler with 10 years of experience. league champion 2023.'
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const tournamentTypes = ['Single', 'Double', 'Team', 'Mixed'];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    console.log('Tournament data:', formData);
    // Handle form submission
  };

  return (
    <div className="w-full mx-auto bg-white p-8 rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className=" text-lg md:text-2xl font-bold text-gray-800">Create New Tournament</h1>
        
      </div>

      <div className="space-y-1 md:space-y-3">
        {/* Tournament Name */}
        <div>
          <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
            Tournament Name
          </label>
          <Input
            type="text"
            value={formData.tournamentName}
            onChange={(e) => handleInputChange('tournamentName', e.target.value)}
            className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder="Enter tournament name"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
            Location
          </label>
          <Input
            type="text"
            value={formData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder="Enter location"
          />
        </div>

        {/* Tournament Type */}

        <div>
          <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
            Tournament Type
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-left flex items-center justify-between"
            >
              <span className="text-gray-700">{formData.tournamentType}</span>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                {tournamentTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => {
                      handleInputChange('tournamentType', type);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Registration Fee */}
        <div>
          <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
            Registration Fee
          </label>
          <Input
            type="text"
            value={formData.registrationFee}
            onChange={(e) => handleInputChange('registrationFee', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder="Enter registration fee"
          />
        </div>

        {/* Event Date and Last Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
              Event Date
            </label>
            <Input
              type="text"
              value={formData.eventDate}
              onChange={(e) => handleInputChange('eventDate', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="Enter event date"
            />
          </div>
          
          <div>
            <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
              Last Date
            </label>
            <Input
              type="text"
              value={formData.lastDate}
              onChange={(e) => handleInputChange('lastDate', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="Enter last date"
            />
          </div>
        </div>

        {/* Details */}
        <div>
          <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
            Details
          </label>
          <textarea
            value={formData.details}
            onChange={(e) => handleInputChange('details', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-vertical"
            placeholder="Enter tournament details"
          />
        </div>

        {/* Submit Button */}
        <div className="">
          <Button
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-3 rounded-lg transition-colors focus:ring-2 focus:ring-green-500 focus:ring-offset-2 outline-none"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}