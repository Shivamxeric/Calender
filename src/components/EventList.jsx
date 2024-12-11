import React from 'react';

const EventList = ({ events, deleteEvent }) => {
  if (!events || events.length === 0)
    return (
      <p className="text-gray-500 text-center italic py-4 animate-pulse">
        No events for this day.
      </p>
    );

  return (
    <ul className="space-y-4">
      {events.map((event, i) => (
        <li
          key={i}
          className="bg-gradient-to-br from-blue-50 to-purple-100 p-4 rounded-lg shadow-lg flex justify-between items-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
        >
          {/* Event Details */}
          <div className="flex-1">
            <h4 className="font-bold text-lg text-gray-800">{event.name}</h4>
            <p className="text-gray-600 text-sm">
              {event.startTime} - {event.endTime}
            </p>
            {event.description && (
              <p className="text-gray-500 text-sm italic mt-1">
                {event.description}
              </p>
            )}
          </div>

          {/* Delete Button */}
          <button
            className="ml-4 px-3 py-2 bg-red-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transform hover:scale-110 active:scale-95 transition duration-300"
            onClick={() => deleteEvent(i)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default EventList;
