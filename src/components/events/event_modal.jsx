import React from "react";
import { useState } from "react";
import PostSettings from "../post/post_settings";
const EventModal = ({ event, onClick }) => {
  const [isSettingClicked, setIsSettingClicked] = useState(false);
  const closePostSettings = () => {
    setIsSettingClicked(false);
  };
  const togglePostSettings = (event) => {
    event.stopPropagation();
    setIsSettingClicked(!isSettingClicked);
  };
  return (
    <div
      className="bg-white rounded-lg shadow-lg mb-3 relative w-full"
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
