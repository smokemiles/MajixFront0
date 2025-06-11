import axios from 'axios';

const API = '/api/notes';

const getAllNotes = (tag = '') => {
  const url = tag ? `${API}?tag=${tag}` : API;
  return axios.get(url);
};

const getNoteById = (id) => axios.get(`${API}/${id}`);

const createNote = (data) => axios.post(API, data);

const updateNote = (id, data) => axios.put(`${API}/${id}`, data);

const deleteNote = (id) => axios.delete(`${API}/${id}`);

export default {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};
