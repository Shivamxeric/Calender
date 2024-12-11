import React from 'react';
import EventList from './EventList';
import EventForm from './EventForm';

const Modal = ({
  selectedDay,
  events,
  eventForm,
  setEventForm,
  handleEventSubmit,
  closeModal,
  deleteEvent,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-gradient-to-br from-white to-gray-100 p-6 rounded-2xl shadow-2xl w-full max-w-md transform transition duration-300 hover:scale-105">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 shadow-md hover:bg-red-600 hover:scale-110 transition duration-300"
          onClick={closeModal}
          aria-label="Close Modal"
        >
          ✕
        </button>

        {/* Modal Header */}
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Events for <span className="text-blue-500">{selectedDay}</span>
        </h3>

        {/* Event List */}
        <div className="mb-6">
          <EventList events={events[selectedDay]} deleteEvent={deleteEvent} />
        </div>

        {/* Add Event Section */}
        <h3 className="text-xl font-bold text-gray-700 mb-4 text-center">
          Add Event
        </h3>
        <EventForm
          eventForm={eventForm}
          setEventForm={setEventForm}
          handleEventSubmit={handleEventSubmit}
        />

        {/* Cancel Button */}
        <div className="flex justify-center mt-4">
          <button
            className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-600 hover:scale-110 transform transition duration-300"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
