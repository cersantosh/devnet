import EventService from "../../../../service/event/event_service.js";
const eventService = new EventService();
class EventController {
  async createEvent(req, res) {
    try {
      const userId = req.user._id;
      const event = await eventService.createEvent({user_info : userId, ...req.body}, userId);
      res.status(200).json({
        success: true,
        message: "Event created successfully",
        response: event,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async getAllEvents(req, res) {
    try {
      const allEvents = await eventService.getAllEvents();
      res.status(200).json({
        success: true,
        message: "All events fetched successfully",
        count: allEvents.length,
        response: allEvents,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async fetchEventById(req, res) {
    try {
      const { id } = req.params;
      const event = await eventService.fetchEventById(id);
      res.status(200).json({
        success: true,
        message: "Event fetched with id",
        response: event,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async editEventById(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const event = await eventService.editEventById(id, data);
      res.status(200).json({
        success: true,
        message: "Event updated with id",
        response: event,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async deleteEventById(req, res) {
    try {
      const { id } = req.params;
      const event = await eventService.deleteEventById(id);
      res.status(200).json({
        success: true,
        message: "Event deleted with given id",
        response: event,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async searchEvent(req, res) {
    try {
      const { search_term } = req.query;
      const event = await eventService.searchEvent(search_term);
      res.status(200).json({
        success: true,
        message: "Event searched with given search term",
        response: event,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
  async filterEvent(req, res) {
    try {
      const query = req.query;
      const events = await eventService.filterEvent(query);
      res.status(200).json({
        success: true,
        message: "Event filtered with given filter options",
        response: events,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }
}

export default EventController;
