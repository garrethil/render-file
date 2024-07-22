import { useState, useEffect } from "react";
import axios from "axios";
import { useAdmin } from "../utils/AdminContext"; // Adjust the import path as needed

const Schedule = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAdmin } = useAdmin();
  const [newEvent, setNewEvent] = useState({
    date: "",
    game: "",
    location: "",
  });
  const [editingEvent, setEditingEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://renderfile-6f797c2d85db.herokuapp.com/api"
        );
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

  const handleDeleteEvent = async (id) => {
    try {
      await axios.delete(
        `https://renderfile-6f797c2d85db.herokuapp.com/api/${id}`
      );
      setEvents(events.filter((event) => event._id !== id));
    } catch (err) {
      console.error("Error deleting event:", err);
    }
  };

  const handleUpdateEvent = async (id) => {
    setEditingEvent(events.find((event) => event._id === id));
  };

  const saveUpdatedEvent = async (id) => {
    try {
      const response = await axios.put(
        `https://renderfile-6f797c2d85db.herokuapp.com/api/${id}`,
        editingEvent
      );
      setEvents(
        events.map((event) => (event._id === id ? response.data : event))
      );
      setEditingEvent(null);
    } catch (err) {
      console.error("Error updating event:", err);
    }
  };

  const handleAddEvent = async () => {
    try {
      const response = await axios.post(
        "https://renderfile-6f797c2d85db.herokuapp.com/api",
        newEvent
      );
      setEvents([...events, response.data]);
      setNewEvent({ date: "", game: "", location: "" });
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
            className="bg-white p-4 shadow-md rounded-md flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4"
          >
            {editingEvent && editingEvent._id === event._id ? (
              <>
                <input
                  type="text"
                  value={editingEvent.date}
                  onChange={(e) =>
                    setEditingEvent({ ...editingEvent, date: e.target.value })
                  }
                  className="w-full sm:w-1/3 text-md sm:text-lg mx-3 font-semibold text-center sm:text-left border"
                />
                <input
                  type="text"
                  value={editingEvent.game}
                  onChange={(e) =>
                    setEditingEvent({ ...editingEvent, game: e.target.value })
                  }
                  className="w-full sm:w-1/3 text-sm sm:text-md font-medium text-center sm:text-left border"
                />
                <input
                  type="text"
                  value={editingEvent.location}
                  onChange={(e) =>
                    setEditingEvent({
                      ...editingEvent,
                      location: e.target.value,
                    })
                  }
                  className="w-full sm:w-1/3 text-xs sm:text-sm text-gray-600 text-center sm:text-left border"
                />
                <button
                  onClick={() => saveUpdatedEvent(event._id)}
                  className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingEvent(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <div className="w-full sm:w-1/3 text-md sm:text-lg mx-3 font-semibold text-center sm:text-left">
                  {event.date}
                </div>
                <div className="w-full sm:w-1/3 text-sm sm:text-md font-medium text-center sm:text-left">
                  {event.game}
                </div>
                <div className="w-full sm:w-1/3 text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                  {event.location}
                </div>
                {isAdmin && (
                  <div className="w-full sm:w-1/3 text-center sm:text-left">
                    <button
                      onClick={() => handleUpdateEvent(event._id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteEvent(event._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
        {isAdmin && (
          <div className="bg-white p-4 shadow-md rounded-md flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
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
