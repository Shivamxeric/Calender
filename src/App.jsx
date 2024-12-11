import React, { useState, useEffect } from 'react';
import Calendar from './components/Calendar';
import Modal from './components/Modal';
import './App.css';

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState(() => JSON.parse(localStorage.getItem('events')) || {});
  const [selectedDay, setSelectedDay] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [eventForm, setEventForm] = useState({ name: '', startTime: '', endTime: '', description: '' });

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const today = new Date();

  const handlePrevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  const handleNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  const openModal = (day) => {
    setSelectedDay(day);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedDay(null);
    setEventForm({ name: '', startTime: '', endTime: '', description: '' });
  };
  const handleEventSubmit = () => {
    if (!events[selectedDay]) events[selectedDay] = [];
    const updatedEvents = { ...events, [selectedDay]: [...events[selectedDay], { ...eventForm }] };
    setEvents(updatedEvents);
    closeModal();
  };
  const deleteEvent = (index) => {
    const updatedEvents = { ...events, [selectedDay]: events[selectedDay].filter((_, i) => i !== index) };
    setEvents(updatedEvents);
  };

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center p-4">
      <header className="text-2xl font-bold mb-4">Event Calendar</header>
      <Calendar
        currentDate={currentDate}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
        daysInMonth={daysInMonth}
        startOfMonth={startOfMonth}
        today={today}
        openModal={openModal}
      />
      {modalOpen && (
        <Modal
          selectedDay={selectedDay}
          events={events}
          eventForm={eventForm}
          setEventForm={setEventForm}
          handleEventSubmit={handleEventSubmit}
          closeModal={closeModal}
          deleteEvent={deleteEvent}
        />
      )}
    </div>
  );
};

export default App;
