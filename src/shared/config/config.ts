import axios from 'axios';

export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://api.imagine.bike';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

api.defaults.xsrfCookieName = 'csrftoken';
api.defaults.xsrfHeaderName = 'X-CSRFToken';

export { api };