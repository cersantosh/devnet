import express from "express";
import EventController from "../../../../controllers/api/v1/event/event_controller.js";
let eventRoutes = express.Router();

let eventController = new EventController();

const routes = {
  create_event: "/create",
  all_events: "/",
  fetch_event: "/fetch/:id",
  edit_event: "/edit/:id",
  delete_event: "/delete/:id",
  search_event: "/search",
  filter_event: "/filter",
};

eventRoutes.post(routes.create_event, eventController.createEvent);
eventRoutes.get(routes.all_events, eventController.getAllEvents);
eventRoutes.get(routes.fetch_event, eventController.fetchEventById);
eventRoutes.patch(routes.edit_event, eventController.editEventById);
eventRoutes.delete(routes.delete_event, eventController.deleteEventById);
eventRoutes.get(routes.search_event, eventController.searchEvent);
eventRoutes.get(routes.filter_event, eventController.filterEvent);

export default eventRoutes;
