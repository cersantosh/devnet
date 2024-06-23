import axios from "axios";

const configureAxios = () => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_BASE_URL,
    withCredentials: true,
    // headers: {
    //   "Content-Type": "application/json",
    // },
  });

  const errorHandler = (error) => {
    if (error.response && error.response.status === 404) {
      return Promise.reject({ message: 'Not Found' });
    }
    return Promise.reject(error?.response?.data);
  };

  // checking response after request
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return errorHandler(error);
    }
  );

  // handling response data
  const responseBody = (response) => (response && response.data) || null;

  // different types of request handling
  const requests = {
    get: async (url, body, headers) => {
      const response = await instance.get(url, body, { headers });
      return responseBody(response);
    },

    post: async (url, body, headers) => {
      const response = await instance.post(url, body, { headers });
      return responseBody(response);
    },

    put: async (url, body, headers) => {
      const response = await instance.put(url, body, { headers });
      return responseBody(response);
    },

    patch: async (url, body, headers) => {
      const response = await instance.patch(url, body, { headers });
      return responseBody(response);
    },

    delete: async (url, body, headers) => {
      const response = await instance.delete(url, body, { headers });
      return responseBody(response);
    },
  };

  return requests;
};

export default configureAxios;
