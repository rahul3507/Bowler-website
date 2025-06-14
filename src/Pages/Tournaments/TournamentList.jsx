import { useState } from "react";
import TournamentsCard from "./TournamentsCard";
import { Button } from "@/components/ui/button";
import { Modal, ModalBody, ModalContent, ModalTrigger } from '@/components/ui/animated-modal'
import { Plus } from "lucide-react";
import CreateTournament from "./CreateTournament";

export default function TournamentsList() {
  const [activeTab, setActiveTab] = useState("all");
  const [filters, setFilters] = useState({
    contentType: {
      singles: false,
      doubles: false,
      team: false,
      proArm: false,
      senior: false,
    },
    accessLevel: {
      any: false,
      under50: false,
    },
    duration: 25,
    skill: {
      beginner: false,
      intermediate: false,
      professional: false,
    },
  });

  const [events, setEvents] = useState([
    {
      id: 1,
      title: "City Championship",
      location: "Downtown Lanes, New York, NY",
      date: "May 15, 2025",
      price: "$85",
      type: "Singles",
      registerBy: "Register by May 10, 2025",
      status: "active",
      isPremium: true,
    },
    {
      id: 2,
      title: "City Championship",
      location: "Downtown Lanes, New York, NY",
      date: "May 15, 2025",
      price: "$85",
      type: "Singles",
      registerBy: "Register by May 10, 2025",
      status: "active",
      isPremium: true,
    },
    {
      id: 3,
      title: "City Championship",
      location: "Downtown Lanes, New York, NY",
      date: "May 15, 2025",
      price: "$85",
      type: "Singles",
      registerBy: "Register by May 10, 2025",
      status: "cancelled",
    },
    {
      id: 4,
      title: "City Championship",
      location: "Downtown Lanes, New York, NY",
      date: "May 15, 2025",
      price: "$85",
      type: "Singles",
      registerBy: "",
      status: "new",
    },
  ]);

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const acceptEvent = (eventId) => {
    setEvents(
      events.map((event) =>
        event.id === eventId && event.status === "new"
          ? { ...event, status: "active", registerBy: `Register by ${formatDate(new Date())}` }
          : event
      )
    );
  };

  const cancelEvent = (eventId) => {
    setEvents(
      events.map((event) =>
        event.id === eventId && event.status === "active"
          ? { ...event, status: "cancelled" }
          : event
      )
    );
  };

  const handleFilterChange = (category, item) => {
    setFilters((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [item]: !prev[category][item],
      },
    }));
  };

  const handleDurationChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      duration: Number.parseInt(e.target.value),
    }));
  };

  const resetFilters = () => {
    setFilters({
      contentType: {
        singles: false,
        doubles: false,
        team: false,
        proArm: false,
        senior: false,
      },
      accessLevel: {
        any: false,
        under50: false,
      },
      duration: 25,
      skill: {
        beginner: false,
        intermediate: false,
        professional: false,
      },
    });
  };

  const filteredEvents =
    activeTab === "all"
      ? events
      : activeTab === "registered"
      ? events.filter((event) => event.status === "active")
      : events.filter((event) => event.status === "cancelled");

  return (
    <div className="flex flex-col p-6 gap-2 md:gap-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl md:text-2xl font-bold text-primary dark:text-gray-200">Tournaments</h2>
        <Modal>
          <ModalTrigger
            className="bg-button-bg py-1 px-2 md:px-4 md:py-1.5 cursor-pointer flex text-base md:text-lg hover:bg-button-bg/90 text-button-text gap-2"
          >
            <Plus size={18} className="m-auto" />
            Create new Tournament
          </ModalTrigger>
          <ModalBody>
            <ModalContent className='overflow-auto'>
              <CreateTournament/>
            </ModalContent>
          </ModalBody>
        </Modal>
      </div>
      <div className="flex gap-2">
        <TabButton active={activeTab === "all"} onClick={() => setActiveTab("all")} label="All Tournament" />
        <TabButton active={activeTab === "registered"} onClick={() => setActiveTab("registered")} label="Registered" />
        <TabButton active={activeTab === "cancelled"} onClick={() => setActiveTab("cancelled")} label="Cancelled" />
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Panel */}
        <div className="w-full md:w-[300px] border border-[#d2d5df] rounded-md p-5">
          <h3 className="text-base md:text-xl font-bold text-primary mb-4">Filters</h3>

          <div className="mb-6">
            <h4 className="text-secondary text-sm md:text-lg font-medium mb-3">Content Type</h4>
            <div className="space-y-2">
              <CheckboxItem
                id="singles"
                label="Singles"
                checked={filters.contentType.singles}
                onChange={() => handleFilterChange("contentType", "singles")}
              />
              <CheckboxItem
                id="doubles"
                label="Doubles"
                checked={filters.contentType.doubles}
                onChange={() => handleFilterChange("contentType", "doubles")}
              />
              <CheckboxItem
                id="team"
                label="Team"
                checked={filters.contentType.team}
                onChange={() => handleFilterChange("contentType", "team")}
              />
              <CheckboxItem
                id="proArm"
                label="Pro-Arm"
                checked={filters.contentType.proArm}
                onChange={() => handleFilterChange("contentType", "proArm")}
              />
              <CheckboxItem
                id="senior"
                label="Senior"
                checked={filters.contentType.senior}
                onChange={() => handleFilterChange("contentType", "senior")}
              />
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-secondary text-sm md:text-lg font-medium mb-3">Access Level</h4>
            <div className="space-y-2">
              <CheckboxItem
                id="any"
                label="Any"
                checked={filters.accessLevel.any}
                onChange={() => handleFilterChange("accessLevel", "any")}
              />
              <CheckboxItem
                id="under50"
                label="Under $50"
                checked={filters.accessLevel.under50}
                onChange={() => handleFilterChange("accessLevel", "under50")}
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between mb-1">
              <h4 className="text-secondary text-sm md:text-lg font-medium">Duration</h4>
              <span className="text-sm text-secondary">2-60+ min</span>
            </div>
            <input
              type="range"
              min="0"
              max="60"
              value={filters.duration}
              onChange={handleDurationChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1e2d5e]"
            />
          </div>

          <div className="mb-6">
            <h4 className="text-secondary text-sm md:text-lg font-medium mb-3">Upload Date</h4>
            <div className="space-y-2">
              <CheckboxItem
                id="beginner"
                label="Beginner"
                checked={filters.skill.beginner}
                onChange={() => handleFilterChange("skill", "beginner")}
              />
              <CheckboxItem
                id="intermediate"
                label="Intermediate"
                checked={filters.skill.intermediate}
                onChange={() => handleFilterChange("skill", "intermediate")}
              />
              <CheckboxItem
                id="professional"
                label="Professional"
                checked={filters.skill.professional}
                onChange={() => handleFilterChange("skill", "professional")}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Button className="bg-[#8bc342] hover:bg-[#7ab33b] text-white py-2 px-4 rounded-md">Apply Filters</Button>
            <Button
              onClick={resetFilters}
              className="text-primary bg-transparent py-2 px-4 rounded-md border border-[#d2d5df] hover:bg-gray-100"
            >
              Reset
            </Button>
          </div>
        </div>

        {/* Events List */}
        <div className="flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredEvents.map((event) => (
              <TournamentsCard key={event.id} events={events} event={event} acceptEvent={acceptEvent} cancelEvent={cancelEvent} />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button className="bg-[#8bc342] hover:bg-[#7ab33b] text-white py-2 px-8 rounded-md">Load More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckboxItem({ id, label, checked, onChange }) {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-gray-300 text-[#8bc342] focus:ring-[#8bc342]"
      />
      <label htmlFor={id} className="ml-2 text-sm text-[#596050]">
        {label}
      </label>
    </div>
  );
}

function TabButton({ active, onClick, label }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-sm text-xs md:text-sm font-medium hover:cursor-pointer border border-gray-200 ${
        active ? "bg-button-bg text-white" : "bg-transparent text-secondary hover:bg-button-bg/90 "
      }`}
    >
      {label}
    </button>
  );
}