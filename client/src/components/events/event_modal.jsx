import React from "react";
const EventModal = ({ event, onClick }) => {

  return (
    <div
      className="bg-white rounded-lg shadow-lg mb-3 relative w-full cursor-pointer"
      onClick={onClick}
    >
      <div className="p-4 flex flex-col justify-center items-center">
        <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
        <div className="flex">
          <p className="text-sm text-gray-500 mb-1">
            {event.type} | {event.location}
          </p>
        </div>
        <p className="text-sm text-gray-500 mb-1">{event.dateTime}</p>
      </div>
    </div>
  );
};

export default EventModal;
