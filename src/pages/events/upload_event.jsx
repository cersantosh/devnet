import React, { useState } from "react";

const EventUploadForm = () => {
  const [selectedEventPoster, setSelectedEventPosition] = useState(null);
  const handleEventPosterChange = (e) => {
    const file = e.target.files[0];
    setSelectedEventPosition(file);
  };

  const handleEventSubmit = () => {};

  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold mb-4">Upload an Event</h1>

      <form>
        {/* Event Poster */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Event Poster <span className="text-[red]">*</span>
          </label>
          <input
            type="file"
            accept="image/*"
            className="mb-4 p-2 w-full border rounded-md"
            onChange={handleEventPosterChange}
            required
          />
          {selectedEventPoster && (
            <img src={URL.createObjectURL(selectedEventPoster)} alt="" />
          )}
        </div>

        {/* Event Title */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Event Title <span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            className="mb-4 p-2 w-full border rounded-md"
            placeholder="Enter event title"
            required
          />
        </div>

        {/* Event Type */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Event Type <span className="text-[red]">*</span>
          </label>
          <select
            className="block border w-full px-4 py-2 mt-1 leading-5 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 sm:text-sm"
            name="event-type"
            id="event-type"
          >
            <option value="hackathons">Hackathons</option>
            <option value="quizzes">Quizzes</option>
            <option value="workshop">Workshops</option>
          </select>
        </div>

        {/* Event Description */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Event Description <span className="text-[red]">*</span>
          </label>
          <textarea
            placeholder="Enter event description"
            className="mb-4 p-2 w-full border rounded-md min-h-[100px]"
            required
          />
        </div>

        {/* Event Date and Time */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Event Date and Time <span className="text-[red]">*</span>
          </label>
          <input
            type="datetime-local"
            className="mb-4 p-2 w-full border rounded-md"
            required
          />
        </div>

        {/* Event Location */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Event Location <span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            className="mb-4 p-2 w-full border rounded-md"
            placeholder="Enter event location"
            required
          />
        </div>

        {/* Organizer Information */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Organizer Information <span className="text-[red]">*</span>
          </label>
          <textarea
            placeholder="Enter organizer information"
            className="mb-4 p-2 w-full border rounded-md min-h-[100px]"
            required
          />
        </div>

        {/* Registration Link */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            How to apply <span className="text-[red]">*</span>
          </label>
          <textarea
            type="text"
            className="mb-4 p-2 w-full border rounded-md"
            placeholder="Enter registration details"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <input
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 hover:cursor-pointer"
          onClick={handleEventSubmit}
          value="Upload Event"
        />
      </form>
    </div>
  );
};

export default EventUploadForm;
