import configureAxios from "../config/axios_config.js";
const requests = configureAxios();

const pollService = {
  createPoll(data) {
    return requests.post(`/poll/create`, data);
  },

  fetchAllPollsOfAUser(userId) {
    return requests.get(`/poll/all/${userId}`);
  },

  fetchPollById(pollId) {
    return requests.get(`/poll/fetch/${pollId}`);
  },

  editPollById(pollId, data) {
    return requests.patch(`/poll/edit/${pollId}`, data);
  },

  deletePollById(pollId) {
    return requests.delete(`/poll/delete/${pollId}`, data);
  },

  fetchLikes(pollId) {
    return requests.get(`/poll/likes/${pollId}`);
  },
  fetchComments(pollId) {
    return requests.get(`/poll/comments/${pollId}`);
  },
  updateLikes(pollId) {
    return requests.get(`/likes/update/${pollId}`);
  },

  searchPoll(searchTerm) {
    return requests.get(`/poll/search/?search_term=${searchTerm}}`);
  },

  filterPoll(filterOptions) {
    let option = "";
    for (let key in filterOptions) {
      option += key + "=" + filterOptions[key] + "&";
    }
    option = option.slice(0, -1);
    return requests.get(`/poll/search?search_term=${searchTerm}}?${option}`);
  },
};

export default pollService;
