import configureAxios from "../config/axios_config.js";
const requests = configureAxios();

const authService = {
  login(data) {
    return requests.post(`/auth/login`, data);
  },

  logout() {
    return requests.post(`/auth/logout`);
  },
};

export default authService;
