import React from "react";
import NavBar from "../../components/navigation/nav_bar";
import EventModal from "../../components/events/event_modal.jsx";
import { eventsType } from "../../constants/events_constant.js";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/buttons/search_bar.jsx";

const EventsHome = () => {
  const navigate = useNavigate();
  const events = [
    {
      title: "Event 1",
      dateTime: "2024-02-22",
      poster: "url_to_event_poster_1",
      description: "Description of Event 1",
      type: "Hackathons",
      location: "Location of Event 1",
      organizerInfo: "organizer_info",
      registration: "registration_link_1",
    },
    {
      title: "Event 1",
      dateTime: "2024-02-22",
      poster: "url_to_event_poster_1",
      description: "Description of Event 1",
      type: "Hackathons",
      location: "Location of Event 1",
      organizerInfo: "organizer_info",
      registration: "registration_link_1",
    },
    {
      title: "Event 1",
      dateTime: "2024-02-22",
      poster: "url_to_event_poster_1",
      description: "Description of Event 1",
      type: "Hackathons",
      location: "Location of Event 1 ",
      organizerInfo: "organizer_info",
      registration: "registration_link_1",
    },
  ];

  const showEventDetails = (eventDetails) => {
    navigate("/event_details", {
      state: {
        eventDetails,
      },
    });
  };
  return (
    <div>
      <NavBar />
      <EventSearchAndFilter />
      <div className="flex flex-wrap gap-2 justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((event, index) => (
          <div className="w-[300px]" key={index}>
           <EventModal event={events[0]} onClick={() => showEventDetails(events[0])} />
          </div>
        ))}
      </div>
    </div>
  );
};

const EventSearchAndFilter = () => {
  const fromDateRef = useRef();
  const toDateRef = useRef();
  return (
    <div className="p-8 flex flex-col justify-center items-center">
      {/* Search Bar */}
      <SearchBar placeholder="Search Events ..." />

      {/* Filter Options */}
      <div className="flex space-x-4 mt-2">
        <div className="flex items-center">
          <select
            name=""
            id=""
            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="" disabled selected>
              Select Event Type
            </option>
            {eventsType.map((eventType, index) => (
              <option value={eventType.toLowerCase()} key={index}>
                {eventType}
              </option>
            ))}
          </select>
        </div>
        <div className="flex">
          <input
            type="text"
            ref={fromDateRef}
            placeholder="From"
            onClick={() => (fromDateRef.current.type = "date")}
            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <input
            type="text"
            placeholder="To"
            ref={toDateRef}
            onClick={() => (toDateRef.current.type = "date")}
            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
      </div>
      <button className="py-2 px-4 bg-blue-500 text-white rounded-md mt-2 w-[100px]">
        Filter
      </button>
    </div>
  );
};

export default EventsHome;
