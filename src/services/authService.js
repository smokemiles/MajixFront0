import api from './api';

const signup = (userData) => api.post('/api/auth/signup', userData);

const login = (email, password) => api.post('/api/auth/login', { email, password });

const logout = () => api.post('/api/auth/logout');

const resetPassword = (email) => api.post('/api/auth/reset-password', { email });

const getProfile = () => api.get('/api/auth/profile');

const getCurrentUser = async () => {
  try {
    const res = await getProfile();
    return res.data;
  } catch (err) {
    return null;
  }
};

export default {
  signup,
  login,
  logout,
  resetPassword,
  getProfile,
  getCurrentUser,
};
