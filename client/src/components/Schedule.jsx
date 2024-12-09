import { useState, useEffect } from "react";
import axios from "axios";
import { useAdmin } from "../utils/AdminContext";

const Schedule = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedEventId, setExpandedEventId] = useState(null); // Track expanded event
  const { isAdmin } = useAdmin();
  const [newEvent, setNewEvent] = useState({
    date: "",
    game: "",
    location: "",
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api");
        if (response.data && Array.isArray(response.data.events)) {
          setEvents(response.data.events);
        } else {
          throw new Error("Unexpected response format");
        }
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const toggleEventDetails = (eventId) => {
    setExpandedEventId((prevId) => (prevId === eventId ? null : eventId));
  };

  const handleAddEvent = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api", newEvent);
      setEvents([...events, response.data]); // Add new event to the list
      setNewEvent({ date: "", game: "", location: "" }); // Reset form inputs
    } catch (err) {
      console.error("Error adding event:", err);
    }
  };

  if (loading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        Error loading events: {error.message}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="underline text-center text-lg sm:text-xl lg:text-2xl mb-4">
        Upcoming Events
      </h2>
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event._id}
            onClick={() => toggleEventDetails(event._id)}
            className={`p-4 shadow-md hover:shadow-lg rounded-md flex flex-col space-y-2 cursor-pointer ${
              expandedEventId === event._id ? "" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="text-md sm:text-lg font-semibold">
                {event.date}
              </div>
              <div className="text-sm sm:text-md font-medium">{event.game}</div>
              <div className="text-xs sm:text-sm">
                {event.location || "N/A"}
              </div>
            </div>
            {expandedEventId === event._id && (
              <div className="mt-2 p-2 text-center">
                <p className="text-sm sm:text-md">
                  {event.desc || "No details available"}
                </p>
              </div>
            )}
          </div>
        ))}
        {isAdmin && (
          <div className="p-4 shadow-md rounded-md flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <input
              type="text"
              value={newEvent.date}
              onChange={(e) =>
                setNewEvent({ ...newEvent, date: e.target.value })
              }
              placeholder="Date"
              className="w-full sm:w-1/3 text-md sm:text-lg mx-3 font-semibold text-center sm:text-left border"
            />
            <input
              type="text"
              value={newEvent.game}
              onChange={(e) =>
                setNewEvent({ ...newEvent, game: e.target.value })
              }
              placeholder="Game"
              className="w-full sm:w-1/3 text-sm sm:text-md font-medium text-center sm:text-left border"
            />
            <input
              type="text"
              value={newEvent.location}
              onChange={(e) =>
                setNewEvent({ ...newEvent, location: e.target.value })
              }
              placeholder="Location"
              className="w-full sm:w-1/3 text-xs sm:text-sm text-gray-600 text-center sm:text-left border"
            />
            <button
              onClick={handleAddEvent}
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Add Event
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;
