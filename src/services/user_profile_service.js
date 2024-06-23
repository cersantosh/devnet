import configureAxios from "../config/axios_config.js";
const requests = configureAxios();

const userProfileService = {
   createProfile(data) {
    return  requests.post(`/user_profile/create`, data);
  },

   fetchAllProfiles() {
    return  requests.get(`/user_profile/all`);
  },

   fetchProfileById(profileId) {
    return  requests.get(`/user_profile/fetch/${profileId}`);
  },

   editProfileById(profileId, data) {
    return  requests.patch(`/user_profile/edit/${profileId}`, data);
  },

   deleteProfileById(profileId) {
    return  requests.delete(`/user_profile/delete/${profileId}`, data);
  },

   searchProfile(searchTerm) {
    return  requests.get(`/user_profile/search/?search_term=${searchTerm}}`);
  },
};

export default userProfileService;
