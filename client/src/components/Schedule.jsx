import events from "../assets/Data.js";

const Schedule = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="underline text-center text-lg sm:text-xl lg:text-2xl mb-4">
        Upcoming Events
      </h2>
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white p-4 shadow-md rounded-md flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4"
          >
            <div className="w-full sm:w-1/3 text-md sm:text-lg mx-3 font-semibold text-center sm:text-left">
              {event.date}
            </div>
            <div className="w-full sm:w-1/3 text-sm sm:text-md font-medium text-center sm:text-left">
              {event.game}
            </div>
            <div className="w-full sm:w-1/3 text-xs sm:text-sm text-gray-600 text-center sm:text-left">
              {event.location}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
