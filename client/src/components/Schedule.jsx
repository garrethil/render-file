import events from "../assets/Data.js";

const Schedule = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="underline text-center">Upcoming Events</h2>
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white p-4 shadow-md rounded-md flex items-center"
          >
            <div className="w-1/3 text-lg mx-3 font-semibold">{event.date}</div>
            <div className="w-1/3 text-md font-medium">{event.game}</div>
            <div className="w-1/3 text-sm text-gray-600">{event.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
