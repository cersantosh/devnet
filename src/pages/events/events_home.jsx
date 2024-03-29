import React from "react";
import NavBar from "../../components/navigation/nav_bar";
import EventModal from "../../components/events/event_modal";
import { eventsType } from "../../constants/events_constant.js";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

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
        organizerInfo : "organizer_info",
        registration: "registration_link_1",
      },
    {
      title: "Event 1",
      dateTime: "2024-02-22",
      poster: "url_to_event_poster_1",
      description: "Description of Event 1",
      type: "Hackathons",
      location: "Location of Event 1",
      organizerInfo : "organizer_info",
      registration: "registration_link_1",
    },
    {
        title: "Event 1",
        dateTime: "2024-02-22",
        poster: "url_to_event_poster_1",
        description: "Description of Event 1",
        type: "Hackathons",
        location: "Location of Event 1",
        organizerInfo : "organizer_info",
        registration: "registration_link_1",
      },
  ];

  const showEventDetails = (eventDetails) => {
    navigate("/event_details", {
        state : {
            eventDetails
        }
    });

  }
  return (
    <div>
      <NavBar />
      <EventSearchAndFilter />
      <div>
        {events.map((event) => (
          <EventModal event={event} onClick={() => showEventDetails(event)} />
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
      <div className="flex justify-center items-center space-x-3 w-full mb-3">
        <input
          type="search"
          className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
          placeholder="Search Events ..."
          required
        />
        <i class="fa-brands fa-searchengin"></i>
      </div>

      {/* Filter Options */}
      <div className="flex space-x-4">
        <div className="flex items-center">
          <select name="" id="" className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option value="" disabled selected>Select Event Type</option>
            {eventsType.map((eventType) => (
              <option value={eventType.toLowerCase()}>{eventType}</option>
            ))}
          </select>
        </div>
        <div className="flex">
          <input type="text" ref={fromDateRef} placeholder="From" onClick={() => fromDateRef.current.type = "date"} className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
          <input type="text" placeholder="To" ref={toDateRef} onClick={() => toDateRef.current.type = "date"} className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
        </div>
      </div>
      <button className="py-2 px-4 bg-blue-500 text-white rounded-md mt-2 w-[100px]">
        Filter
      </button>
    </div>
  );
};

export default EventsHome;
