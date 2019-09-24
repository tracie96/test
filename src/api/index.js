import Axios from "axios";
const baseURL = "http://32e4ec42.ngrok.io";
const axios = Axios.create({
  baseURL
  //   timeout: 10000,
});

axios.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem("auth_token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export const registerUser = payload => {
  return axios.post(`${baseURL}/api/auth/create`, payload);
};

export const loginUser = payload => {
  return axios.post(`${baseURL}/api/auth/login`, payload);
};

export const verifyUser = payload => {
  return axios.patch(
    `${baseURL}/api/auth/verify/${payload.email}/${payload.pin}`
  );
};
