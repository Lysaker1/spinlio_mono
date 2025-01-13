// Get the API URL based on environment
export const getApiUrl = (): string => {
  return process.env.NODE_ENV === 'production'
    ? 'https://api.spinlio.com'
    : 'http://localhost:3003';
};

export const apiUrl = getApiUrl(); 