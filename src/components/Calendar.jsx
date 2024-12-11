import React from 'react';

const Calendar = ({ currentDate, handlePrevMonth, handleNextMonth, daysInMonth, startOfMonth, today, openModal }) => {
  return (
    <div className="w-full max-w-full sm:max-w-lg mx-auto p-4 bg-gradient-to-br from-blue-300 via-purple-300 to-pink-400 rounded-lg shadow-xl">
      {/* Navigation Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:scale-105 active:scale-95 transform transition duration-300 shadow-md mb-4 sm:mb-0"
          onClick={handlePrevMonth}
        >
          Previous
        </button>
        <h2 className="text-2xl font-bold text-gray-800 drop-shadow-lg">
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </h2>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:scale-105 active:scale-95 transform transition duration-300 shadow-md"
          onClick={handleNextMonth}
        >
          Next
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 sm:gap-4">
        {/* Empty slots for days before the first day of the month */}
        {[...Array(startOfMonth)].map((_, i) => (
          <div key={i} className="h-12 sm:h-16"></div>
        ))}
        {/* Days of the Month */}
        {[...Array(daysInMonth(currentDate.getMonth(), currentDate.getFullYear()))].map((_, i) => {
          const day = i + 1;
          const dateKey = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${day}`;
          return (
            <div
              key={day}
              className={`h-12 sm:h-16 rounded-lg flex items-center justify-center text-lg font-medium text-gray-700 bg-white shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition transform duration-300 cursor-pointer ${
                today.toDateString() ===
                new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString()
                  ? 'bg-yellow-300'
                  : ''
              }`}
              onClick={() => openModal(dateKey)}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
