import EventModal from "../../components/events/event_modal";
import PostSettingsIcon from "../../components/post/post_settings_icon";
import { useNavigate } from "react-router-dom";

const EventsSettings = () => {
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
      <h1 class="text-2xl font-bold text-center text-gray-800 mb-2">All Posted Events</h1>
      <div className="flex flex-wrap gap-2 justify-center">
        {events.map((event) => (
          <div className="w-[300px] relative">
            <EventModal event={events[0]} onClick={() => showEventDetails(events[0])} />
            <PostSettingsIcon />
          </div>
        ))}
      </div>
</div>
  );
};

export default EventsSettings;
