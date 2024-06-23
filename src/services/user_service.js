import configureAxios from "../config/axios_config.js";
const requests = configureAxios();

const userService = {
  createUser(data) {
    return requests.post(`/user/create`, data);
  },
  uploadProfile(data) {
    return requests.post(`/user/upload`, data, {
      "Content-Type": "multipart/form-data",
    });
  },

  fetchAllUsers() {
    return requests.get(`/user/allj`);
  },

  fetchUserById(userId) {
    return requests.get(`/user/fetch/${userId}`);
  },

  editUserById(userId, data) {
    return requests.patch(`/user/edit/${userId}`, data);
  },

  deleteUserById(userId) {
    return requests.delete(`/user/delete/${userId}`, data);
  },

  searchUser(searchTerm) {
    return requests.get(`/user/search/?search_term=${searchTerm}}`);
  },
};

export default userService;
