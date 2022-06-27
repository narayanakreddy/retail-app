import axios from "./intercetor";

const http = {
  get: async (url, data = {}, headers = {}) =>
    axios.get(url, { params: data, headers: headers }),
  post: async (url, data = {}, headers = {}) => axios.post(url, data, headers),
  put: async (url, data = {}, headers = {}) => axios.put(url, data, headers),
};

export default http;
