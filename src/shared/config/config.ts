import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3003',  // Update this to use port 3003
  headers: {
    'Content-Type': 'application/json',
  },
});