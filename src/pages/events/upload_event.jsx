import React, { useState } from "react";
import { useForm } from "react-hook-form";
import userService from "../../services/user_service";
import eventService from "../../services/event_service";

const EventUploadForm = () => {
  const { register, handleSubmit } = useForm();
  const [selectedEventPoster, setSelectedEventPosition] = useState(null);
  const [eventTitle, setEventTitle] = useState("");
  const [eventType, setEventType] = useState("hackathons");
  const [eventdescription, setEventDescription] = useState("");
  const [eventDateTime, setDateTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventOrganizerInfo, setEventOrganizerInfo] = useState("");
  const [eventRegistrationLink, setEventRegistrationLink] = useState("");
  const [error, setError] = useState(null);

  const handleEventPosterChange = (e) => {
    const file = e.target.files[0];
    setSelectedEventPosition(file);
  };
  const handleEventTitle = (e) => {
    setEventTitle(e.target.value);
  };
  const handleEventType = (e) => {
    setEventType(e.target.value);
  };
  const handleEventDescription = (e) => {
    setEventDescription(e.target.value);
  };
  const handleEventDateTime = (e) => {
    setDateTime(e.target.value);
  };
  const handleEventLocation = (e) => {
    setEventLocation(e.target.value);
  };
  const handleEventOrganizerInfo = (e) => {
    setEventOrganizerInfo(e.target.value);
  };
  const handleEventRegistrationLink = (e) => {
    setEventRegistrationLink(e.target.value);
  };

  const handleEventSubmit = async (e) => {
    e.preventDefault();
    const eventDetails = new FormData();

    eventDetails.append("event_poster", selectedEventPoster);
    eventDetails.append("title", eventTitle);
    eventDetails.append("event_type", eventType);
    eventDetails.append("description", eventdescription);
    eventDetails.append("event_date", eventDateTime);
    eventDetails.append("location", eventLocation);
    eventDetails.append("organizer_info", eventOrganizerInfo);
    eventDetails.append("registration_link", eventRegistrationLink);

    console.log("FormData entries:");
    for (const pair of eventDetails.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
    //  try {
    //    await eventService.createEvent(eventDetails);
    //  } catch (error) {
    //    console.error("Error creating event:", error);
    //  }
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Request timed out"));
      }, 10000); // 10 seconds timeout
    });

    try {
      const response = await Promise.race([
        fetch("/event/create", {
          method: "POST",
          body: eventDetails,
        }),
        timeoutPromise,
      ]);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle successful response
      const data = await response.json();
      console.log("Image uploaded successfully:", data);

      // Clear form fields after successful upload
      // setImage(null);
      // setTitle("");
      // setDescription("");
      // setCategory("nature");
      // setDateTime("");
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error creating event:", error);
      setError(error.message);

      // Retry once if request fails
      try {
        const retryResponse = await fetch("/event/create", {
          method: "POST",
          body: eventDetails,
        });

        if (!retryResponse.ok) {
          throw new Error("Network response was not ok on retry");
        }

        const data = await retryResponse.json();
        console.log("Event created successfully on retry:", data);

        // Clear form fields after successful upload
        //   setImage(null);
        //   setTitle("");
        //   setEventDescription("");
        //   setCategory("nature");
        //   setDateTime("");
        setError(null); // Clear any previous errors
      } catch (retryError) {
        console.error("Retry failed:", retryError);
        setError(retryError.message);
      }
    }
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold mb-4">Upload an Event</h1>

      <form onSubmit={handleEventSubmit}>
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
            // {...register("title")}
            onChange={handleEventTitle}
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
            // {...register("event_type")}
            onChange={handleEventType}
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
            // {...register("description")}
            onChange={handleEventDescription}
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
            // {...register("event_date")}
            onChange={handleEventDateTime}
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
            // {...register("location")}
            onChange={handleEventLocation}
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
            // {...register("organizer_info")}
            onChange={handleEventOrganizerInfo}
            required
          />
        </div>

        {/* Registration Link */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Registration Link <span className="text-[red]">*</span>
          </label>
          <input
            type="url"
            className="mb-4 p-2 w-full border rounded-md"
            placeholder="Enter registration link"
            // {...register("registration_link")}
            onChange={handleEventRegistrationLink}
            required
          />
        </div>

        {/* Submit Button */}
        <input
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 hover:cursor-pointer"
          //  onClick={handleEventSubmit}
          value="Upload Event"
        />
      </form>
    </div>
  );
};

export default EventUploadForm;
