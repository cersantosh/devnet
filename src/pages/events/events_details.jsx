import React from "react";
import { useLocation } from "react-router-dom";

const EventDetailsPage = () => {
  const location = useLocation();
  const eventDetails = location.state && location.state.eventDetails;
  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold mb-4">Event Details</h1>

      <div>
        {/* Event Poster */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Event Poster
          </label>
          <img
            src="assets/images/image2.jpg"
            alt="Event Poster"
            className="w-[300px] h-[300px] rounded-md object-cover"
          />
        </div>

        {/* Event Title */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Event Title
          </label>
          <p className="text-lg font-semibold">{eventDetails.title}</p>
        </div>

        {/* Event Type */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Event Type
          </label>
          <p className="text-gray-700">{eventDetails.type}</p>
        </div>

        {/* Event Description */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Event Description
          </label>
          <p className="text-gray-700">
          {eventDetails.description}
          </p>
        </div>

        {/* Event Date and Time */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Event Date and Time
          </label>
          <p className="text-gray-700">{eventDetails.dateTime}</p>
        </div>

        {/* Event Location */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Event Location
          </label>
          <p className="text-gray-700">{eventDetails.location}</p>
        </div>

        {/* Organizer Information */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Organizer Information
          </label>
          <p className="text-gray-700">{eventDetails.organizerInfo}
          </p>
        </div>

        {/* Registration Link */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            How to Apply
          </label>
          <p className="text-gray-700">{eventDetails.registration}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
