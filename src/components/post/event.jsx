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
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Event Title <span className="text-[red]">*</span>
        </label>
        <input
          type="text"
          className="mb-4 p-2 w-full border rounded-md"
          placeholder="Enter event title"
          required
        />

        {/* Event Type */}
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Event Type <span className="text-[red]">*</span>
        </label>
        <input
          type="text"
          className="mb-4 p-2 w-full border rounded-md"
          placeholder="Enter event type (Hackathons, Quizzes, Workshop, etc.)"
          required
        />

        {/* Event Description */}
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Event Description <span className="text-[red]">*</span>
        </label>
        <textarea
          placeholder="Enter event description"
          className="mb-4 p-2 w-full border rounded-md min-h-[100px]"
          required
        />

        {/* Event Date and Time */}
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Event Date and Time <span className="text-[red]">*</span>
        </label>
        <input
          type="datetime-local"
          className="mb-4 p-2 w-full border rounded-md"
          required
        />

        {/* Event Location */}
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Event Location <span className="text-[red]">*</span>
        </label>
        <input
          type="text"
          className="mb-4 p-2 w-full border rounded-md"
          placeholder="Enter event location"
          required
        />

        {/* Organizer Information */}
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Organizer Information <span className="text-[red]">*</span>
        </label>
        <textarea
          placeholder="Enter organizer information"
          className="mb-4 p-2 w-full border rounded-md min-h-[100px]"
          required
        />

        {/* Registration Link */}
        <label className="block text-sm font-medium text-gray-600 mb-2">
          How to apply <span className="text-[red]">*</span>
        </label>
        <textarea
          type="text"
          className="mb-4 p-2 w-full border rounded-md"
          placeholder="Enter registration details"
          required
        ></textarea>

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
