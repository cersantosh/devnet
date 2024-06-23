import configureAxios from "../config/axios_config.js";
const requests = configureAxios();

const jobService = {
  createJob(data) {
    return requests.post(`/job/create`, data);
  },

  fetchAllJobs() {
    return requests.get(`/job/all`);
  },

  fetchJobById(jobId) {
    return requests.get(`/job/fetch/${jobId}`);
  },

  editJobById(jobId, data) {
    return requests.patch(`/job/edit/${jobId}`, data);
  },

  deleteJobById(jobId) {
    return requests.delete(`/job/delete/${jobId}`, data);
  },

  searchJob(searchTerm) {
    return requests.get(`/job/search/?search_term=${searchTerm}}`);
  },
  filterJob(filterOptions) {
    let option = "";
    for (let key in filterOptions) {
      option += key + "=" + filterOptions[key] + "&";
    }
    option = option.slice(0, -1);
    return requests.get(`/job/search/?search_term=${searchTerm}}?${option}`);
  },
};

export default jobService;
