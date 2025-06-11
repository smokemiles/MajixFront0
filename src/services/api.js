import axios from 'axios';

// Create a reusable Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000',
  withCredentials: true, // send cookies with requests (for session or token-based auth)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle unauthorized access globally (optional)
    if (error.response && error.response.status === 401) {
      console.warn('Unauthorized: Redirecting to login');
      // You could redirect here if needed
    }
    return Promise.reject(error);
  }
);

export default api;
