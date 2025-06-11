import axios from 'axios';

const API = '/api/users';

const getProfile = () => axios.get(`${API}/profile`);

const updateProfile = (data) => axios.put(`${API}/profile`, data);

export default {
  getProfile,
  updateProfile,
};
