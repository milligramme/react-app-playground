import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((request) => {
  console.log("#############\nRequest: ", request);
  return request;
});

api.interceptors.response.use(
  (response) => {
    console.log("#############\nResponse: ", response);
    return Promise.resolve(response);
  },
  (error) => Promise.reject({ error: error.response }),
);
