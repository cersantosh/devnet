import configureAxios from "../config/axios_config.js";
const requests = configureAxios();

const companyProfileService = {
  createProfile(data) {
    return requests.post(`/company_profile/create`, data);
  },

  fetchAllProfiles() {
    return requests.get(`/company_profile/all`);
  },

  fetchProfileById(profileId) {
    return requests.get(`/company_profile/fetch/${profileId}`);
  },

  editProfileById(profileId, data) {
    return requests.patch(`/company_profile/edit/${profileId}`, data);
  },

  deleteProfileById(profileId) {
    return requests.delete(`/company_profile/delete/${profileId}`, data);
  },

  searchProfile(searchTerm) {
    return requests.get(`/company_profile/search/?search_term=${searchTerm}}`);
  },
};

export default companyProfileService;
