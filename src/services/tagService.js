import axios from 'axios';

const API = '/api/tags';

const getTags = () => axios.get(API);

const createTag = (data) => axios.post(API, data);

const updateTag = (id, data) => axios.put(`${API}/${id}`, data);

const deleteTag = (id) => axios.delete(`${API}/${id}`);

export default {
  getTags,
  createTag,
  updateTag,
  deleteTag,
};
