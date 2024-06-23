import configureAxios from "../config/axios_config.js";
const requests = configureAxios();

const eventService = {
  createEvent(data) {
    return requests.post(`/event/create`, data);
  },

  fetchAllEvents() {
    return requests.get(`/event/all`);
  },

  fetchEventById(eventId) {
    return requests.get(`/event/fetch/${eventId}`);
  },

  editEventById(eventId, data) {
    return requests.patch(`/event/edit/${eventId}`, data);
  },

  deleteEventById(eventId) {
    return requests.delete(`/event/delete/${eventId}`, data);
  },

  searchEvent(searchTerm) {
    return requests.get(`/event/search/?search_term=${searchTerm}}`);
  },
  filterEvent(filterOptions) {
    let option = "";
    for (let key in filterOptions) {
      option += key + "=" + filterOptions[key] + "&";
    }
    option = option.slice(0, -1);
    return requests.get(`/event/search/?search_term=${searchTerm}}?${option}`);
  },
};

export default eventService;
