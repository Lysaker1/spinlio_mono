import axios from 'axios';

const apiUrl = process.env.NODE_ENV === 'production'
  ? "https://api.spinlio.com"
  : "http://localhost:3003";

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

export { api, apiUrl }; 