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
          <p className="block text-sm font-medium text-gray-600 mb-2">
            Event Poster
          </p>
          <img
            src="assets/images/image2.jpg"
            alt="Event Poster"
            className="w-[300px] h-[300px] rounded-md object-cover"
          />
        </div>

        {/* Event Title */}
        <div className="mb-6">
          <p className="block text-sm font-medium text-gray-600 mb-2">
            Event Title
          </p>
          <p className="text-lg font-semibold">{eventDetails.title}</p>
        </div>

        {/* Event Description */}
        <div className="mb-6">
          <p className="block text-sm font-medium text-gray-600 mb-2">
            Event Description
          </p>
          <p className="text-gray-700">{eventDetails.description}</p>
        </div>

        {/* Organizer Information */}
        <div className="mb-6">
          <p className="block text-sm font-medium text-gray-600 mb-2">
            Organizer Information
          </p>
          <p className="text-gray-700">{eventDetails.organizerInfo}</p>
        </div>

        <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Event Type
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Event date and time
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Event location
            </th>
            
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">{eventDetails.type}</td>
            <td className="px-6 py-4 whitespace-nowrap">{eventDetails.dateTime}</td>
            <td className="px-6 py-4 whitespace-nowrap">{eventDetails.location}</td>
          </tr>
        </tbody>
      </table>

  

        {/* Registration Link */}
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          <a href="" target="_blank">
            Apply Now
          </a>
        </button>
      </div>
    </div>
  );
};

export default EventDetailsPage;
