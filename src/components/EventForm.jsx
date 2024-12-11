import React from 'react';

const EventForm = ({ eventForm, setEventForm, handleEventSubmit }) => {
  return (
    <div className="flex flex-col mb-2 p-4 bg-gradient-to-br from-blue-50 to-purple-100 rounded-lg shadow-lg max-w-md mx-auto">
      {/* Event Name Input */}
      <input
        type="text"
        placeholder="Event Name"
        value={eventForm.name}
        onChange={(e) => setEventForm({ ...eventForm, name: e.target.value })}
        className="border rounded-lg p-3 mb-3 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition duration-300 hover:scale-105"
      />

      {/* Start Time Input */}
      <input
        type="time"
        value={eventForm.startTime}
        onChange={(e) => setEventForm({ ...eventForm, startTime: e.target.value })}
        className="border rounded-lg p-3 mb-3 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform transition duration-300 hover:scale-105"
      />

      {/* End Time Input */}
      <input
        type="time"
        value={eventForm.endTime}
        onChange={(e) => setEventForm({ ...eventForm, endTime: e.target.value })}
        className="border rounded-lg p-3 mb-3 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform transition duration-300 hover:scale-105"
      />

      {/* Description Input */}
      <textarea
        placeholder="Description (Optional)"
        value={eventForm.description}
        onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
        className="border rounded-lg p-3 mb-3 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transform transition duration-300 hover:scale-105"
      ></textarea>

      {/* Submit Button */}
      <button
        className="px-5 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition duration-300"
        onClick={handleEventSubmit}
      >
        Save
      </button>
    </div>
  );
};

export default EventForm;
